import { useActiveWeb3React } from "./useActiveWeb3React";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { useFormik } from "formik";
import {
    followAction,
    getUserAction,
    updateUserAction,
    addUserFCMkeys,
    updateNotificationPreference,
    UpdateEmail,
} from "@/redux/actions/globalAction";
import {
    globalState,
    setUserBanner,
    setUserImage,
} from "@/redux/reducer/globalSlice";
import {
    checkNameUniqueServices,
    getEventsServices,
    getFavoriteItemsService,
    getFollowService,
    getUserInventoryService,
    getUsersCollectionsService,
} from "@/redux/services/globalServices";
import { useReducer } from "react";
import { useRouter } from "next/router";
import { PATH_DASHBOARD } from "@/routes/paths";
import { Toast, getEnsDetails } from "@/utils";
import * as Yup from "yup";

const STATE = {
    PRICECHANGE: "PRICECHANGE",
    SEARCH: "SERACH",
    ACCOUNTCHANGE: "ACCOUNTCHANGE",
    SETCOLLECTION: "SETCOLLECTION",
    CATEGORYSELECT: "CATEGORYSELECT",
    TYPECHANGE: "TYPECHANGE",
    ORDERCHANGE: "ORDERCHANGE",
    EXTRAFILTER: "EXTRAFILTER",
    PAGECHANGE: "PAGECHANGE",
    STOREDATA: "STOREDATA",
    STARTLOADING: "STARTLOADING",
    QUERYCHANGE: "QUERYCHANGE",
    ATTIBUTESELECT: "ATTIBUTESELECT",
    LIMITCHANGE: "LIMITCHANGE",
    RESET: "RESET",
};

export const useEditUser = () => {
    const { account, signMessage } = useActiveWeb3React();
    const { userDetails } = useSelector(globalState);
    const dispatch = useDispatch();
    const [fileRatio, setFileRatio] = useState(1);
    const [nameLoading, setNameLoading] = useState(false);
    const [selectedDomain, setSelectedDomain] = useState("");
    const [unique, setUnique] = useState(false);

    const initialValues = {
        name: "",
        email: "",
        profilePic: "",
        bannerPic: "",
        bio: "",
        instagram: "",
        twitter: "",
        discord: "",
        telegram: "",
        other: "",
        originalLogo: "",
        lowLogo: "",
        mediumLogo: "",
        highLogo: "",
        banners: "",
        bannerUrl: "",
        signature: "",
        usePns: "",
        useDomain: "",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Name is required")
            .matches(
                /^[a-z0-9_]+$/,
                "Name must contain only lowercase letters and numbers"
            )
            .test("unique", "Name is already taken", function () {
                return unique;
            }),
    });

    // /^(?!.*\s)[a-z0-9_]+(?<!\s)$/i to disAllow whitespace

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values, helpers) => {
            dispatch(
                updateUserAction({
                    payload: values,
                    signMessage: signMessage,
                    fileRatio,
                })
            );
        },
        validateOnChange: true,
    });

    useEffect(() => {
        if (!userDetails) return;
        formik?.setValues((prevValues) => ({
            ...prevValues,
            name: formik.values?.name || userDetails?.name,
            email: formik.values?.email || userDetails?.email,
            bio: formik.values?.bio || userDetails?.bio,
            instagram: formik.values?.instagram || userDetails?.instagram,
            twitter: formik.values?.twitter || userDetails?.twitter,
            discord: formik.values?.discord || userDetails?.discord,
            telegram: formik.values?.telegram || userDetails?.telegram,
            other: formik.values?.other || userDetails?.other,
            originalLogo: userDetails?.originalLogo
                ? userDetails.originalLogo
                : "",
            lowLogo: userDetails?.lowLogo ? userDetails?.lowLogo : "",
            mediumLogo: "",
            highLogo: userDetails?.highLogo ? userDetails?.highLogo : "",
            // banners: userDetails?.banners ? userDetails?.banners : "",
            bannerUrl: "",
            usePns: userDetails?.usePns ? userDetails?.usePns : "No",
            useDomain: userDetails?.useDomain ? userDetails?.useDomain : "",
        }));
    }, [userDetails]);

    useEffect(() => {
        if (!account) return;
        // setProfilePic();
        // setBannerPic();
        // formik.setValues(initialValues);
        formik.resetForm();
        dispatch(getUserAction({ account }));
    }, [account]);

    function handleFileChange(e) {
        let { files } = e.target;
        if (files.length) {
            if (e.target.name === "profilePic") {
                // if (profilePic instanceof Blob) {
                //     URL.revokeObjectURL(profilePic);
                // }
                if (files[0].size > 4e6) {
                    Toast.error("The asset should not be more than 4MB");
                    e.target.value = "";
                    return;
                }
                const fileType = files[0].type.split("/")[0];
                if (fileType === "image") {
                    // setProfilePic(URL.createObjectURL(files[0]));
                    formik.setFieldValue("profilePic", files[0]);
                    var img = new Image();
                    img.src = URL.createObjectURL(files[0]);
                    img.onload = function () {
                        dispatch(
                            setUserImage({
                                profileImage: URL.createObjectURL(files[0]),
                            })
                        );
                        URL.revokeObjectURL(img.src);
                        setFileRatio(img.height / img.width);
                    };
                } else {
                    Toast.error("Unsupported Type");
                }
            }
            if (e.target.name === "banners") {
                if (userDetails?.bannerUrl instanceof Blob) {
                    URL.revokeObjectURL(userDetails?.bannerUrl);
                }
                const fileType = files[0].type.split("/")[0];
                if (fileType === "image") {
                    // setBannerPic(URL.createObjectURL(files[0]));
                    formik.setFieldValue("banners", files[0]);
                    var img = new Image();
                    img.src = URL.createObjectURL(files[0]);
                    img.onload = function () {
                        dispatch(
                            setUserBanner({
                                bannerUrl: URL.createObjectURL(files[0]),
                            })
                        );
                        URL.revokeObjectURL(img.src);
                        setFileRatio(img.height / img.width);
                    };
                } else {
                    Toast.error("Unsupported Type");
                }
            }
        }
    }

    // const handleCheckBox = async (event) => {
    //     const { checked, name } = event.target;
    //     formik.setFieldValue(name, checked ? "Yes" : "No");
    //     let Name;
    //     if (!checked) {
    //         Name = "";
    //     } else {
    //         formik.setFieldValue("name", "");
    //         setNameLoading(true);
    //         const profile = await getEnsDetails({
    //             chainId,
    //             // address: "0xa7633f37FEEfaCAc8F251b914e92Ff03d2acf0f2",
    //             address: account,
    //             provider: library,
    //         });
    //         if (profile.name) {
    //             Name = profile.name;
    //         } else {
    //             Toast.error("Domain name not found for this account");
    //             formik.setFieldValue(name, "No");
    //         }
    //     }
    //     setNameLoading(false);
    //     formik.setFieldValue("name", Name);
    // };

    const handleRadioChange = (event) => {
        setSelectedDomain(event.target.value);
        formik.setFieldValue("useDomain", event.target.value);
    };

    useEffect(() => {
        let timer;
        if (formik.values?.name == userDetails?.name) {
            setUnique(true);
        } else if (formik.values?.name?.trim() !== "") {
            timer = setTimeout(() => {
                checkNameUnique(formik.values.name);
            }, 300);
        } else {
            setUnique(false);
        }
        return () => clearTimeout(timer);
    }, [formik.values.name]);

    const checkNameUnique = async (name) => {
        try {
            const { data } = await checkNameUniqueServices({ name, account });
            setUnique(data.unique);
        } catch (error) {
            console.error("Error checking name uniqueness:", error);
        }
    };

    const addFCM = async (fcmToken) => {
        const data = await dispatch(addUserFCMkeys({ fcmToken, signMessage }));
        return data;
    };

    const updateNotification = async (mainObj, dataObj) => {
        dispatch(
            updateNotificationPreference({
                signMessage,
                mainObj,
                dataObj,
            })
        );
    };

    const updateNotificationEmail = async (email, type) => {
        dispatch(
            UpdateEmail({
                signMessage,
                email,
                type,
            })
        );
    };

    return {
        formik,
        addFCM,
        updateNotificationEmail,
        updateNotification,
        nameLoading,
        unique,
        // profilePic,
        // bannerPic,
        handleFileChange,
        // handleCheckBox,
        handleRadioChange,
    };
};

// Profile Page >> History Tab (Events)

export const useHistoryItems = () => {
    const {
        walletDetalis: { account, chainId, status },
    } = useSelector(globalState);
    const initialState = {
        loading: false,
        events: [],
        count: 0,
        totalPages: 0,
        page: 1,
        limit: 8,
        state: null,
        hasMore: false,
        payload: {
            search: "",
            event: "",
            eventNames: [
                "Purchase",
                "Offer",
                "Bids",
                "Following",
                "Like",
                "Minted",
            ],
        },
    };

    const eventsNames = [
        {
            label: "Minted",
            value: "Minted",
        },
        {
            label: "Listing",
            value: "Listing",
        },
        {
            label: "UnFollow",
            value: "UnFollow",
        },
        {
            label: "Transfer",
            value: "Transfer",
        },
        {
            label: "Following",
            value: "Following",
        },
        {
            label: "Offer",
            value: "Offer",
        },
        {
            label: "Auction",
            value: "Auction",
        },
    ];

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.PAGECHANGE: // LoadMore or infinite scrolling
                return {
                    ...state,
                    state: STATE.PAGECHANGE,
                    page: state.page + 1,
                };
            case STATE.SEARCH:
                return {
                    ...state,
                    state: STATE.SEARCH,
                    page: 1,
                    events: [],
                    payload: {
                        ...state.payload,
                        search: payload,
                    },
                };
            case STATE.RESET:
                return {
                    ...state,
                    state: STATE.RESET,
                    page: 1,
                    events: [],
                    payload: {
                        ...state.payload,
                        search: "",
                        event: "",
                    },
                };
            case STATE.TYPECHANGE:
                return {
                    ...state,
                    state: STATE.TYPECHANGE,
                    page: 1,
                    events: [],
                    payload: {
                        ...state.payload,
                        event: payload,
                    },
                };
            case STATE.ACCOUNTCHANGE:
                return {
                    ...state,
                    state: STATE.ACCOUNTCHANGE,
                    page: 1,
                    events: [],
                    payload: {
                        ...state.payload,
                        account,
                        chainId,
                    },
                };
            case STATE.STARTLOADING:
                return {
                    ...state,
                    state: null,
                    loading: true,
                };
            case STATE.STOREDATA:
                return {
                    ...state,
                    state: null,
                    events:
                        state.page === 1
                            ? payload.items
                            : [...state.events, ...payload.items],
                    count: payload.count,
                    totalPages: payload.totalPages,
                    hasMore: payload?.totalPages > state.page,
                    loading: false,
                };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const getData = async () => {
        if (!state.state) return;
        dispatch({
            type: STATE.STARTLOADING,
        });
        const query = {
            ...state.payload,
            page: state.page,
            limit: state.limit,
            chainId: chainId,
        };
        const { data } = await getEventsServices(query);
        dispatch({
            type: STATE.STOREDATA,
            payload: {
                items: data.data,
                count: data.count,
                totalPages: data.totalPages,
                page: data.page,
            },
        });
    };

    useEffect(() => {
        if (!status) return;
        dispatch({
            type: STATE.ACCOUNTCHANGE,
        });
    }, [status, account, chainId]);

    useEffect(() => {
        if (!account) return;
        let timer;
        if (state.state === STATE.SEARCH) {
            timer = setTimeout(() => {
                getData();
            }, 800);
        } else {
            getData();
        }
        return () => clearTimeout(timer);
    }, [state]);

    const handlePageChange = () => {
        dispatch({
            type: STATE.PAGECHANGE,
        });
    };

    const handleSearch = (e) => {
        dispatch({
            type: STATE.SEARCH,
            payload: e.target.value,
        });
    };

    const filterChange = (value) => {
        let filter = value !== state.payload.event ? value : "";
        dispatch({
            type: STATE.TYPECHANGE,
            payload: filter,
        });
    };

    const resetHandler = () => {
        dispatch({
            type: STATE.RESET,
        });
    };

    return {
        ...state,
        eventsNames,
        account,
        filterChange,
        handlePageChange,
        handleSearch,
        resetHandler,
    };
};

// Profile Page >> Following Tab (All users)

export const useFollowingItems = () => {
    const {
        walletDetalis: { account, chainId, status },
    } = useSelector(globalState);
    const initialState = {
        loading: false,
        items: [],
        count: 0,
        totalPages: 0,
        page: 1,
        limit: 6,
        hasMore: false,
        state: null,
        payload: {
            search: "",
        },
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.PAGECHANGE: // LoadMore or infinite scrolling
                return {
                    ...state,
                    state: STATE.PAGECHANGE,
                    page: state.page + 1,
                };
            case STATE.ACCOUNTCHANGE:
                return {
                    ...state,
                    state: STATE.ACCOUNTCHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        account,
                        chainId,
                    },
                };
            case STATE.STARTLOADING:
                return {
                    ...state,
                    state: null,
                    loading: true,
                };
            case STATE.STOREDATA:
                return {
                    ...state,
                    state: null,
                    items:
                        state.page === 1
                            ? payload.items
                            : [...state.items, ...payload.items],
                    count: payload.count,
                    totalPages: payload.totalPages,
                    hasMore: payload?.totalPages > state.page,
                    loading: false,
                };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const getData = async () => {
        if (!state.state) return;
        dispatch({
            type: STATE.STARTLOADING,
        });
        const query = {
            ...state.payload,
            page: state.page,
            limit: state.limit,
            chainId: chainId,
        };
        const { data } = await getFollowService(query);
        dispatch({
            type: STATE.STOREDATA,
            payload: {
                items: data.data,
                count: data.count,
                totalPages: data.totalPages,
                page: data.page,
            },
        });
    };

    useEffect(() => {
        if (!status) return;
        dispatch({
            type: STATE.ACCOUNTCHANGE,
        });
    }, [status, account, chainId]);

    useEffect(() => {
        if (!account) return;
        getData();
    }, [state]);

    const handlePageChange = () => {
        dispatch({
            type: STATE.PAGECHANGE,
        });
    };

    return {
        ...state,
        handlePageChange,
    };
};

// Profile Page >> Following Tab >> FOLLOW-UNFOLLOW

export const useFollowUser = () => {
    const {
        walletDetalis: { account },
    } = useSelector(globalState);

    const dispatch = useDispatch();

    const handleFollow = (id) => {
        if (!account) {
            return Toast.error("Please connect your wallet");
        }
        dispatch(
            followAction({
                // follower, followedBy
                follower: id,
                followedBy: account,
            })
        );
    };
    return {
        handleFollow,
    };
};

// Profile Page >> Favorite Tab (Nfts)

export const useFavoriteItems = () => {
    const {
        walletDetalis: { account, chainId, status },
    } = useSelector(globalState);
    const initialState = {
        loading: false,
        items: [],
        count: 0,
        totalPages: 0,
        page: 1,
        limit: 8,
        defaultLimit: 8,
        hasMore: false,
        state: null,
        payload: {
            account: "",
            chainId: "",
            sortBy: "",
            sort: "",
        },
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.PAGECHANGE: // LoadMore or infinite scrolling
                return {
                    ...state,
                    state: STATE.PAGECHANGE,
                    page:
                        Math.ceil(state.items.length / state.defaultLimit) + 1,
                    limit: state.defaultLimit,
                };
            case STATE.ORDERCHANGE:
                return {
                    ...state,
                    state: STATE.ORDERCHANGE,
                    page: 1,
                    limit: state.items.length,
                    payload: {
                        ...state.payload,
                        sortBy: payload.sortBy,
                        sort: payload.order,
                    },
                };
            case STATE.ACCOUNTCHANGE:
                return {
                    ...state,
                    state: STATE.ACCOUNTCHANGE,
                    page: 1,
                    limit: state.defaultLimit,
                    payload: {
                        ...state.payload,
                        account,
                        chainId,
                    },
                };
            case STATE.STARTLOADING:
                return {
                    ...state,
                    state: null,
                    loading: true,
                };
            case STATE.STOREDATA:
                return {
                    ...state,
                    state: null,
                    items:
                        state.page === 1
                            ? payload.items
                            : [...state.items, ...payload.items],
                    count: payload.count,
                    totalPages: payload.totalPages,
                    hasMore: payload?.totalPages > state.page,
                    loading: false,
                };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const getData = async () => {
        if (!state.state) return;
        dispatch({
            type: STATE.STARTLOADING,
        });
        const query = {
            ...state.payload,
            page: state.page,
            limit: state.limit,
            chainId: chainId,
        };
        const { data } = await getFavoriteItemsService(query);
        dispatch({
            type: STATE.STOREDATA,
            payload: {
                items: data.data,
                count: data.count,
                totalPages: data.totalPages,
                page: data.page,
            },
        });
    };

    useEffect(() => {
        if (!status) return;
        dispatch({
            type: STATE.ACCOUNTCHANGE,
        });
    }, [status, account, chainId]);

    useEffect(() => {
        if (!account) return;
        getData();
    }, [state]);

    const handlePageChange = () => {
        dispatch({
            type: STATE.PAGECHANGE,
        });
    };

    const handleSorting = (sortBy) => {
        let Sort =
            sortBy !== state.payload.sortBy
                ? "ASC"
                : state.payload.sort !== "DESC"
                ? "DESC"
                : "ASC";
        dispatch({
            type: STATE.ORDERCHANGE,
            payload: {
                order: Sort,
                sortBy: sortBy,
            },
        });
    };

    return {
        ...state,
        handlePageChange,
        handleSorting,
    };
};

// Users Collections (getUsersCollectionsService)

export const useUserCollections = () => {
    const {
        walletDetalis: { account, chainId, status },
    } = useSelector(globalState);
    const router = useRouter();
    const initialState = {
        loading: false,
        items: [],
        count: 0,
        totalPages: 0,
        page: 1,
        limit: 10,
        hasMore: false,
        state: null,
        payload: {
            ownerAddress: "",
            itemStatus: [],
        },
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.PAGECHANGE:
                return {
                    ...state,
                    state: STATE.PAGECHANGE,
                    page: state.page + 1,
                };
            case STATE.LIMITCHANGE:
                return {
                    ...state,
                    state: STATE.LIMITCHANGE,
                    page: 1,
                    limit: payload.limit,
                };
            case STATE.TYPECHANGE:
                return {
                    ...state,
                    state: STATE.TYPECHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        itemStatus: payload.itemStatus,
                    },
                };
            case STATE.ACCOUNTCHANGE:
                return {
                    ...state,
                    state: STATE.ACCOUNTCHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        ownerAddress: account,
                        chainId,
                    },
                };
            case STATE.STARTLOADING:
                return {
                    ...state,
                    state: null,
                    loading: true,
                };
            case STATE.STOREDATA:
                return {
                    ...state,
                    state: null,
                    items:
                        state.page === 1
                            ? payload.items
                            : [...state.items, ...payload.items],
                    count: payload.count,
                    totalPages: payload.totalPages,
                    hasMore: payload?.totalPages > state.page,
                    loading: false,
                };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const getData = async () => {
        if (!state.state) return;
        dispatch({
            type: STATE.STARTLOADING,
        });
        const query = {
            ...state.payload,
            page: state.page,
            limit: state.limit,
            chainId: chainId,
        };
        const { data } = await getUsersCollectionsService(query);
        dispatch({
            type: STATE.STOREDATA,
            payload: {
                items: data.data,
                count: data.count,
                totalPages: data.totalPages,
                page: data.page,
            },
        });
    };

    useEffect(() => {
        if (!status) return;
        dispatch({
            type: STATE.ACCOUNTCHANGE,
        });
    }, [status, account, chainId]);

    useEffect(() => {
        console.log("stateChanged", state);
        if (!account) return;
        getData();
    }, [state]);

    const handlePageChange = () => {
        dispatch({
            type: STATE.PAGECHANGE,
        });
    };

    const handleRouteChange = (address) => {
        if (!address) return;
        router.push(PATH_DASHBOARD.explore.collection(address));
    };

    const handleLimitChange = (limitValue) => {
        dispatch({
            type: STATE.LIMITCHANGE,
            payload: {
                limit: limitValue,
            },
        });
    };

    const handleFilterChange = (e) => {
        let status = [e.target.value];
        dispatch({
            type: STATE.TYPECHANGE,
            payload: {
                itemStatus: status,
            },
        });
    };

    return {
        ...state,
        handlePageChange,
        handleRouteChange,
        handleLimitChange,
        handleFilterChange,
    };
};

export const useInventory = () => {
    const {
        walletDetalis: { account, chainId, status },
    } = useSelector(globalState);
    const router = useRouter();
    const initialState = {
        loading: false,
        items: [],
        count: 0,
        totalPages: 0,
        page: 1,
        limit: 10,
        hasMore: false,
        state: null,
        payload: {
            owner: account,
            nftStatus: [],
            extraFilter: "Default",
        },
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.PAGECHANGE:
                return {
                    ...state,
                    state: STATE.PAGECHANGE,
                    page: state.page + 1,
                };
            case STATE.LIMITCHANGE:
                return {
                    ...state,
                    state: STATE.LIMITCHANGE,
                    page: 1,
                    limit: payload.limit,
                };
            case STATE.TYPECHANGE:
                return {
                    ...state,
                    state: STATE.TYPECHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        nftStatus: payload,
                    },
                };
            case STATE.ACCOUNTCHANGE:
                return {
                    ...state,
                    state: STATE.ACCOUNTCHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        owner: account,
                        chainId,
                    },
                };
            case STATE.STARTLOADING:
                return {
                    ...state,
                    state: null,
                    loading: true,
                };
            case STATE.STOREDATA:
                return {
                    ...state,
                    state: null,
                    items:
                        state.page === 1
                            ? payload.items
                            : [...state.items, ...payload.items],
                    count: payload.count,
                    totalPages: payload.totalPages,
                    hasMore: payload?.totalPages > state.page,
                    loading: false,
                };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const getData = async () => {
        if (!state.state) return;
        dispatch({
            type: STATE.STARTLOADING,
        });
        const query = {
            ...state.payload,
            page: state.page,
            limit: state.limit,
            chainId: chainId,
        };
        const { data } = await getUserInventoryService(query);
        dispatch({
            type: STATE.STOREDATA,
            payload: {
                items: data.data,
                count: data.count,
                totalPages: data.totalPages,
                page: data.page,
            },
        });
    };

    useEffect(() => {
        if (!status) return;
        dispatch({
            type: STATE.ACCOUNTCHANGE,
        });
    }, [status, account, chainId]);

    useEffect(() => {
        if (!account) return;
        getData();
    }, [state]);

    const handlePageChange = () => {
        dispatch({
            type: STATE.PAGECHANGE,
        });
    };

    const handleLimitChange = (limitValue) => {
        dispatch({
            type: STATE.LIMITCHANGE,
            payload: {
                limit: limitValue,
            },
        });
    };

    const handleFilterChange = (e) => {
        let { value } = e;
        let statusArray = value == "All" ? [] : [value];
        dispatch({
            type: STATE.TYPECHANGE,
            payload: statusArray,
        });
    };

    return {
        ...state,
        handlePageChange,
        handleLimitChange,
        handleFilterChange,
    };
};
