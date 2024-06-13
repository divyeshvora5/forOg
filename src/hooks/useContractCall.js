import { FAL_IMAGES_DIMENTIONS, FAL_MODELNAME, FAL_SUBSCRIPSION_ROUTE, SUPPORTED_FORMATS, TYPE } from "@/constant";
import {
    createCollectionAction,
    createMultipleNftAction,
    createSingleNftAction,
    importCollectionAction,
} from "@/redux/actions/marketAction";
import { globalState } from "@/redux/reducer/globalSlice";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useActiveWeb3React } from "./useActiveWeb3React";
import { useCollection } from "./useFetchHooks";
import { PATH_DASHBOARD } from "@/routes/paths";
import { setProgress } from "@/redux/reducer/marketSlice";
import { isNFTAddress } from "@/contracts";
import { Toast } from "@/utils";
import { convertFalBase64ImageToFile } from "@/utils/fal";
import { genrateImageService } from "@/redux/services/genrateImageService";
import { AxiosError } from "axios";

export const useCreateCollection = () => {
    const { categorys } = useSelector(globalState);
    const { wallet, sdk, chain } = useActiveWeb3React();

    const dispatch = useDispatch();

    const { push } = useRouter();

    const [collectionFilePrieview, setCollectionFilePreview] = useState();
    const [collectionCoverFile, setcollectionCoverFilePreview] = useState();
    const [fileRatio, setFileRatio] = useState(1);

    const initialValues = {
        type: TYPE.SINGLE,
        name: "",
        description: "",
        category: "",
        royaltyBps: "",
        lowLogo: "",
        mediumLogo: "",
        highLogo: "",
        collectionFile: "",
        collectionCoverFile: "",
        symbol: "",
        infinite: false,
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            name: Yup.string().required("name is required"),
            symbol: Yup.string().required("symbol is required"),
            royaltyBps: Yup.number("royaltyBps is number")
                .min(1, "at least enter 1")
                .max(100, "max is 100")
                .required("royaltyBps is required"),
            collectionFile: Yup.mixed()
                .required("collection image is required")
                .test("fileType", "Unsupported File Format", (value) =>
                    SUPPORTED_FORMATS.includes(value.type)
                ),
            // collectionCoverFile: Yup.mixed().test(
            // 	"fileType",
            // 	"Unsupported File Format",
            // 	(value) => SUPPORTED_FORMATS.includes(value?.type)
            // ),
        }),
        onSubmit: async (values, helpers) => {
            const result = await dispatch(
                createCollectionAction({
                    chain: chain,
                    wallet: wallet,
                    fileRatio,
                    payload: values,
                    sdk: sdk,
                })
            );
            if (result.type === "market/createCollectionAction/fulfilled") {
                push(PATH_DASHBOARD.create.nfts);
            }
        },
    });

    const handleFileChange = (e) => {
        const fileType = e.target.files[0]?.type?.split("/")[0];
        if (fileType === "image") {
            if (e.target.name === "collectionFile") {
                collectionFilePrieview &&
                    URL.revokeObjectURL(collectionFilePrieview);
                setCollectionFilePreview(
                    URL.createObjectURL(e.target.files[0])
                );
                formik.setFieldValue("collectionFile", e.target.files[0]);
                var img = new Image();
                img.src = URL.createObjectURL(e.target.files[0]);
                img.onload = function () {
                    URL.revokeObjectURL(img.src);
                    setFileRatio(img.height / img.width);
                };
            } else if (e.target.name === "collectionCoverFile") {
                collectionCoverFile && URL.revokeObjectURL(collectionCoverFile);
                setcollectionCoverFilePreview(
                    URL.createObjectURL(e.target.files[0])
                );
                formik.setFieldValue("collectionCoverFile", e.target.files[0]);
            }
        }
    };

    const handleChangeCategory = (e) => {
        formik.setFieldValue("category", e?.value);
    };

    const discardAll = () => {
        setCollectionFilePreview();
        setcollectionCoverFilePreview();
        formik.resetForm();
    };

    return {
        formik,
        categorys,
        collectionFilePrieview,
        collectionCoverFile,
        handleChangeCategory,
        handleFileChange,
        discardAll,
    };
};

export const useCreateItems = () => {
    const {
        walletDetalis: { chainId, account },
    } = useSelector(globalState);
    const { library, sdk, chain, wallet } = useActiveWeb3React();

    const dispatch = useDispatch();
    const router = useRouter();

    const [mainFilePreview, setMainFilePreview] = useState();
    const [coverFilePreview, setCoverPreview] = useState();
    const [selectedCollection, setSelectedCollection] = useState();
    const [show, setShow] = useState(false);
    const [imgLoading, setImgLoading] = useState(false);


    //ai genreted image state
    const [prompt, setPrompt] = useState();
    const [negativePrompt, setNegativePrompt] = useState();
    const [imageSize, setImageSize] = useState(FAL_IMAGES_DIMENTIONS[0].value);

    //if custom then use this
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    const [thumbnail, setThumbnail] = useState();

    const formik = useFormik({
        initialValues: {
            name: "",
            // royltyBps: "",
            description: "",
            type: TYPE.SINGLE,
            asset_type: "",
            mainFile: "",
            supply: "",
            coverImgFile: "",
            collectionAddress: "",
            category: "",
            attributesData: [
                {
                    trait_type: "",
                    value: "",
                },
            ],
            thumbnail: ""
        },
        validationSchema: Yup.object().shape({
            collectionAddress: Yup.string().required(
                "collection address is required"
            ),
            name: Yup.string().required("name is required"),
            supply: Yup.number("Please enter valid value").when("type", {
                is: (type) => {
                    return type === TYPE.MULTI;
                },
                then: () =>
                    Yup.string("supply is required").required(
                        "supply is required"
                    ),
                // otherwise: () => {
                // 	Yup.mixed().notRequired();
                // },
            }),
            attributesData: Yup.array().of(
                Yup.object().shape({
                    trait_type: Yup.string().required("trait_type is required"),
                    value: Yup.string().required("value is required"),
                })
            ),
        }),
        onSubmit: async (values, helpers) => {
            let result;
            if (values.type === TYPE.SINGLE) {
                console.log("formik", formik);
                result = await dispatch(
                    createSingleNftAction({
                        payload: values,
                        chain: chain,
                        wallet,
                    })
                );
            } else if (values.type === TYPE.MULTI) {
                result = await dispatch(
                    createMultipleNftAction({
                        payload: values,
                        chain,
                        wallet,
                    })
                );
            }
            if (
                result.type === "market/createSingleNftAction/fulfilled" ||
                result.type === "market/createMultipleNftAction/fulfilled"
            ) {
                setTimeout(() => {
                    router.push({
                        pathname: PATH_DASHBOARD.explore.collection(
                            values.collectionAddress?.toLowerCase()
                        ),
                        // query: {
                        // type: values.type,
                        // itemCollection: values.collectionAddress,
                        // },
                    });
                    dispatch(setProgress(0));
                }, 1000);
                // router.push("/profile/profile-details");
            }
        },
    });

    const { items, loading, payload, handleSearch, handlePageChange, hasMore } =
        useCollection({
            onlyOwners: true,
            standard: formik.values.type,
            useMetaMaskChainId: true,
        });

    const handleAddFields = () => {
        const data = formik.values.attributesData;
        data.push({
            trait_type: "",
            value: "",
        });
        formik.setFieldValue("attributesData", data);
    };

    const handleChangeDynamicField = (index, text, name) => {
        const data = formik.values.attributesData;
        if (name === "trait_type") {
            data[index].trait_type = text;
        } else {
            data[index].value = text;
        }
        formik.setFieldValue("attributesData", data);
    };

    const handleRemoveDynamicFields = (index) => {
        const data = formik.values.attributesData;
        data.splice(index, 1);
        formik.setFieldValue("attributesData", data);
    };

    const handleFileChange = (e) => {
        const fileType = e.target.files[0].type.split("/")[0];

        console.log('fileType', fileType)

        console.log('e.target.files[0]', e.target.files[0])
        if (e.target.name === "mainFile") {
            mainFilePreview && URL.revokeObjectURL(mainFilePreview);
            setMainFilePreview(URL.createObjectURL(e.target.files[0]));
            formik.setFieldValue("mainFile", e.target.files[0]);
            formik.setFieldValue("asset_type", fileType);
        } else if (e.target.name === "coverImgFile") {
            coverFilePreview && URL.revokeObjectURL(coverFilePreview);
            setCoverPreview(URL.createObjectURL(e.target.files[0]));
            formik.setFieldValue("coverImgFile", e.target.files[0]);
        } else {
            thumbnail && URL.revokeObjectURL(thumbnail);
            setThumbnail(URL.createObjectURL(e.target.files[0]));
            formik.setFieldValue('thumbnail', e.target.files[0])
        }
    };

    const discardAll = () => {
        formik.resetForm();
        setMainFilePreview();
        setCoverPreview();
    };

    const changeCollection = (collection) => {
        formik.setFieldValue("collectionAddress", collection?.address);
        formik.setFieldValue("category", collection?.category);
        setSelectedCollection(collection);
        setShow(false);
    };

    const changeType = (value) => {
        formik.setFieldValue("collectionAddress", "");
        formik.setFieldValue("type", value);
        formik.setFieldValue("category", "");
        setSelectedCollection();
    };


    //aigenreted image logic

    const validateAndGetSize = () => {
        if (imageSize !== 'custom') {
            return imageSize;
        }
        if (!width || !height) {
            return false;
        }

        return { width: Number(width), height: Number(height) };
    }

    const genrateImage = async () => {
        try {
            const image_size = validateAndGetSize();

            if (!image_size || !prompt) return;
            setImgLoading(true)

            // const result = await fal.subscribe(FAL_SUBSCRIPSION_ROUTE, {
            //     input: {
            //         prompt: prompt,
            //         negative_prompt: negativePrompt,
            //         model_name: FAL_MODELNAME,
            //         image_size: image_size,
            //     },
            //     pollInterval: 5000,
            //     logs: true,
            //     onQueueUpdate(update) {
            //         console.log("queue update", update);
            //     },
            // });

            const { data} = await genrateImageService({
                prompt: prompt,
                negative_prompt: negativePrompt,
                image_size: image_size,
            })

            const result = data?.data || {};

            const file = convertFalBase64ImageToFile(result);

            if (!file) return;

            if (formik.values.asset_type === 'audio') {
                setThumbnail(result.images[0].url);
                return formik.setFieldValue("thumbnail", file);
            }

            setMainFilePreview(result.images[0].url);

            formik.setFieldValue("mainFile", file);


            console.log('result.images[0].url', result)
        } catch (err) {
            if(err instanceof AxiosError) {
                return Toast.error(err.response.data?.message)
            }
            Toast.error(err?.message)
        } finally {
            setImgLoading(false);
        }
    };



    // useEffect(() => {

    //     if (!prompt) return;

    //     const timer = setTimeout(() => {
    //         genrateImage()
    //     }, 800);

    //     return () => clearTimeout(timer);
    // }, [prompt]);


    // useEffect(() => {
    //     if (!negativePrompt) return;

    //     const timer = setTimeout(() => {
    //         genrateImage()
    //     }, 800);

    //     return () => clearTimeout(timer);

    // }, [negativePrompt]);


    // useEffect(() => {
    //     if (!prompt || imageSize === 'custom') return;
    //     genrateImage();
    // }, [imageSize]);

    // useEffect(() => {
    //     if (!width || !height || !prompt) return;

    //     const timer = setTimeout(() => {
    //         genrateImage()
    //     }, 800);

    //     return () => clearTimeout(timer);

    // }, [width, height])

    return {
        formik,
        mainFilePreview,
        coverFilePreview,
        collections: items,
        collectionLoading: loading,
        collectionSearch: payload.search,
        selectedCollection,
        hasMore,
        handlePageChange,
        handleSearch,
        show,
        thumbnail,
        imageSize,
        height,
        width,
        prompt,
        negativePrompt,
        imgLoading,
        setShow,
        handleAddFields,
        handleChangeDynamicField,
        handleRemoveDynamicFields,
        handleFileChange,
        discardAll,
        changeCollection,
        changeType,
        setSelectedCollection,
        setWidth,
        setHeight,
        setImageSize,
        setPrompt,
        setNegativePrompt,
        genrateImage
    };
};

export const useImportCollection = () => {
    const { library, sdk, chainId, chain, wallet } = useActiveWeb3React();
    const [collectionFilePrieview, setCollectionFilePreview] = useState();
    const [collectionCoverFile, setcollectionCoverFilePreview] = useState();
    const [fileRatio, setFileRatio] = useState(1);
    const { categorys } = useSelector(globalState);
    const dispatch = useDispatch();

    const options = useMemo(() => {
        if (!categorys?.length) return [];

        return categorys.map((category) => ({
            value: category?.value,
            label: category?.value,
        }));
    }, [categorys]);
    const initialValues = {
        name: "",
        description: "",
        category: "",
        contractAddress: "",
        collectionFile: "",
        collectionCoverFile: "",
    };
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            name: Yup.string().required("Collection name is required"),
            contractAddress: Yup.string().required(
                "Collection address is required"
            ),
            category: Yup.string().required("Category is required"),
            collectionFile: Yup.mixed()
                .required("Collection image is required")
                .test("fileType", "Unsupported File Format", (value) =>
                    SUPPORTED_FORMATS.includes(value.type)
                ),
            collectionCoverFile: Yup.mixed().test(
                "fileType",
                "Unsupported File Format",
                (value) => SUPPORTED_FORMATS.includes(value?.type)
            ),
        }),
        onSubmit: async (values, helpers) => {
            try {
                const isNFT = await isNFTAddress({
                    address: values?.contractAddress,
                    chainId: chainId,
                });
                // console.log("isNFT", isNFT, values);
                if (!isNFT) {
                    Toast.error("Invalid Collection Address!");
                    return;
                }
                const result = await dispatch(
                    importCollectionAction({
                        chain,
                        wallet: wallet,
                        fileRatio,
                        payload: values,
                        sdk: sdk,
                    })
                );
                if (result.type === "market/importCollectionAction/fulfilled") {
                    push(PATH_DASHBOARD.root);
                }
            } catch (err) {
                console.log("err", err);
            }
        },
    });

    const handleFileChange = (e) => {
        const fileType = e.target.files[0]?.type?.split("/")[0];
        if (fileType === "image") {
            if (e.target.name === "collectionFile") {
                collectionFilePrieview &&
                    URL.revokeObjectURL(collectionFilePrieview);
                setCollectionFilePreview(
                    URL.createObjectURL(e.target.files[0])
                );
                formik.setFieldValue("collectionFile", e.target.files[0]);
                var img = new Image();
                img.src = URL.createObjectURL(e.target.files[0]);
                img.onload = function () {
                    URL.revokeObjectURL(img.src);
                    setFileRatio(img.height / img.width);
                };
            } else if (e.target.name === "collectionCoverFile") {
                collectionCoverFile && URL.revokeObjectURL(collectionCoverFile);
                setcollectionCoverFilePreview(
                    URL.createObjectURL(e.target.files[0])
                );
                formik.setFieldValue("collectionCoverFile", e.target.files[0]);
            }
        }
    };

    return {
        formik,
        options,
        collectionFilePrieview,
        collectionCoverFile,
        handleFileChange,
    };
};
