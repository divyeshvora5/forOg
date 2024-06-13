import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SUPPORTED_FORMATS } from "@/constant";
import { globalState } from "@/redux/reducer/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { isNFTAddress } from "@/contracts";
import { importCollectionAction } from "@/redux/actions/marketAction";
import { marketState } from "@/redux/reducer/marketSlice";
import { Toast } from "@/utils";

const ImportCollection = () => {
    const { categorys } = useSelector(globalState);
    const { contractLoading } = useSelector(marketState);

    const { library, sdk, chainId, chain, wallet } = useActiveWeb3React();

    const [collectionFilePrieview, setCollectionFilePreview] = useState();
    const [collectionCoverFile, setcollectionCoverFilePreview] = useState();
    const [fileRatio, setFileRatio] = useState(1);

    const dispatch = useDispatch();

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
            name: Yup.string().required("name is required"),
            contractAddress: Yup.string().required(
                "collection address is required"
            ),
            category: Yup.string().required("category is required"),
            collectionFile: Yup.mixed()
                .required("collection image is required")
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
                console.log("library", library);
                console.log("chainId", chainId);
                const isNFT = await isNFTAddress({
                    address: values?.contractAddress,
                    provider: library,
                    chainId: chainId,
                });
                console.log("isNFT", isNFT);
                if (!isNFT) {
                    Toast.error("Invalid Collection Address!");
                    return;
                }
                const result = await dispatch(
                    importCollectionAction({
                        chain,
                        wallet,
                        fileRatio,
                        payload: values,
                    })
                );
                if (result.type === "market/importCollectionAction/fulfilled") {
                    push(PATH_DASHBOARD.create.nfts);
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

    return (
        <div>
            <form noValidate onSubmit={formik.handleSubmit}>
                <input
                    name="name"
                    placeholder="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <input
                    name="description"
                    placeholder="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <input
                    name="contractAddress"
                    placeholder="contractAddress"
                    value={formik.values.contractAddress}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <input
                    type="file"
                    name="collectionFile"
                    placeholder="collectionFile"
                    onChange={handleFileChange}
                />
                <input
                    type="file"
                    name="collectionCoverFile"
                    placeholder="collectionCoverFile"
                    onChange={handleFileChange}
                />
                <select name="category" onChange={formik.handleChange}>
                    {categorys?.map((ele) => (
                        <option key={ele.value} value={ele.value}>
                            {ele.label}
                        </option>
                    ))}
                </select>
                <button disabled={contractLoading} type="submit">
                    Import
                </button>
            </form>
        </div>
    );
};

export default ImportCollection;
