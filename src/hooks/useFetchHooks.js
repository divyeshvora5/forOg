import { FILTER_OPTIONS, ORDER_OPTIONS, TIME_FILTER_BUTTON } from "@/constant";
import { globalState } from "@/redux/reducer/globalSlice";
import {
    getAllCollectionItemsService,
    getAllCollectionService,
    getCollectionHistoryService,
    getFloorAnalyticsService,
    getOwnersDistributionService,
    getPriceDistributionService,
    getTopOwnersOfCollectionService,
} from "@/redux/services/collectionService";
import {
    getAllBlogsServices,
    getCommentsServices,
    getEventsServices,
    getOwnerDetailsService,
    getPublicCollectionService,
    getUsersCollectionsService,
} from "@/redux/services/globalServices";
import {
    getAllItemsServices,
    getAuctionServices,
    getUserOfferServices,
} from "@/redux/services/itemServices";
import {
    getCollectorsService,
    getPopularCollectionService,
    getRankingService,
} from "@/redux/services/stateServices";
import { useRouter } from "next/router";
import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { Toast } from "@/utils";
import { useActiveWeb3React } from "./useActiveWeb3React";
import {
    getAllAchievementsService,
    getLeaderBoardService,
    getUserAchievementsService,
    getUserRewardDataService,
    getUserRewardHistoryService,
} from "@/redux/services/rewardService";

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
    LIMITCHANGE: "LIMITCHANGE",
    STOREDATA: "STOREDATA",
    STARTLOADING: "STARTLOADING",
    STOPLOADING: "STOPLOADING",
    QUERYCHANGE: "QUERYCHANGE",
    ATTIBUTESELECT: "ATTIBUTESELECT",
    RESETPRICECHANGE: "RESETPRICECHANGE",
};

export const useAuction = () => {
    const {
        categorys,
        walletDetalis: { account, chainId, status },
    } = useSelector(globalState);
    const [priceFilter, setPriceFilter] = useState([]);

    const initialState = {
        loading: false,
        items: [],
        count: 0,
        totalPages: 0,
        page: 1,
        limit: 8,
        state: null,
        hasMore: false,
        priceArray: [],
        topAuction: {},
        payload: {
            extraFilter: ORDER_OPTIONS[0]?.value,
            account: account,
            chainId: chainId,
            category: [],
            standard: FILTER_OPTIONS[0]?.value,
            search: "",
            price: {
                min: "",
                max: "",
            },
        },
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.ORDERCHANGE:
                return {
                    ...state,
                    state: STATE.ORDERCHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        extraFilter: payload,
                    },
                };
            case STATE.CATEGORYSELECT:
                return {
                    ...state,
                    state: STATE.CATEGORYSELECT,
                    page: 1,
                    payload: {
                        ...state.payload,
                        category: payload,
                    },
                };
            case STATE.PAGECHANGE:
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
                        // account
                    },
                };
            case STATE.STARTLOADING:
                return {
                    ...state,
                    state: null,
                    loading: true,
                };
            case STATE.PRICECHANGE:
                return {
                    ...state,
                    state: STATE.PRICECHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        price: {
                            min: payload[0],
                            max: payload[1],
                        },
                    },
                };
            case STATE.RESETPRICECHANGE:
                return {
                    ...state,
                    state: STATE.PRICECHANGE,
                    page: 1,
                    priceArray: [],
                    payload: {
                        ...state.payload,
                        price: {
                            min: "",
                            max: "",
                        },
                    },
                };
            case STATE.SEARCH:
                return {
                    ...state,
                    state: STATE.SEARCH,
                    page: 1,
                    payload: {
                        ...state.payload,
                        search: payload,
                    },
                };
            case STATE.TYPECHANGE:
                return {
                    ...state,
                    state: STATE.TYPECHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        standard: payload,
                    },
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
                    minPrice: payload?.minPrice,
                    maxPrice: payload?.maxPrice,
                    priceArray: payload?.priceArray,
                    topAuction: payload?.topAuction,
                    loading: false,
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const getData = async (refetch = false) => {
        dispatch({
            type: STATE.STARTLOADING,
        });

        const query = {
            ...state.payload,
            page: refetch ? 1 : state.page,
            status: "Created",
            limit: state.limit,
            account,
            chainId,
        };

        const { data } = await getAuctionServices(query);

        dispatch({
            type: STATE.STOREDATA,
            payload: {
                items: data.data,
                count: data.count,
                totalPages: data.totalPages,
                minPrice: data.minPrice,
                maxPrice: data.maxPrice,
                priceArray: data.priceArray,
                topAuction: data.topAuction,
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
        if (!state.state) return;
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

    const orderChange = (e) => {
        dispatch({
            type: STATE.ORDERCHANGE,
            payload: e.value,
        });
    };

    const handleCategorySelect = (e) => {
        let categoryArry;
        if (e.target.checked) {
            categoryArry = [
                ...(state?.payload?.category || []),
                e.target.value,
            ];
        } else {
            categoryArry = (state?.payload?.category || []).filter(
                (ele) => ele !== e.target.value
            );
        }
        dispatch({
            type: STATE.CATEGORYSELECT,
            payload: categoryArry,
        });
    };

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

    const typeChange = (e) => {
        dispatch({
            type: STATE.TYPECHANGE,
            payload: e.value,
        });
    };

    const handlePriceChange = (value) => {
        if (!value.length) {
            dispatch({
                type: STATE.RESETPRICECHANGE,
            });
        }
        dispatch({
            type: STATE.PRICECHANGE,
            payload: value,
        });
    };

    return {
        ...state,
        categorys,
        filterOptions: FILTER_OPTIONS,
        orderOptions: ORDER_OPTIONS,
        getData,
        setPriceFilter,
        priceFilter,
        orderChange,
        handleCategorySelect,
        handlePageChange,
        handleSearch,
        typeChange,
        handlePriceChange,
    };
};

export const useCollection = ({
    onlyOwners = false,
    standard,
    useMetaMaskChainId = false,
}) => {
    const {
        categorys,
        walletDetalis: { account, chainId: reduxChainId, status },
    } = useSelector(globalState);
    const { chainId: metaMaskChainId } = useActiveWeb3React();
    const chainId = useMetaMaskChainId ? metaMaskChainId : reduxChainId;

    const initialState = {
        loading: false,
        items: [],
        count: 0,
        totalPages: 0,
        page: 1,
        state: null,
        hasMore: false,
        priceArray: [],
        payload: {
            extraFilter: ORDER_OPTIONS[0]?.value,
            account: account,
            chainId: chainId,
            category: [],
            standard: FILTER_OPTIONS[0]?.value,
            search: "",
            price: {
                min: "",
                max: "",
            },
        },
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.ORDERCHANGE:
                return {
                    ...state,
                    state: STATE.ORDERCHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        extraFilter: payload,
                    },
                };
            case STATE.CATEGORYSELECT:
                return {
                    ...state,
                    state: STATE.CATEGORYSELECT,
                    page: 1,
                    payload: {
                        ...state.payload,
                        category: payload,
                    },
                };
            case STATE.PAGECHANGE:
                return {
                    ...state,
                    state: STATE.PAGECHANGE,
                    page: state.page + 1,
                };
            case STATE.ACCOUNTCHANGE:
                let obJ = {
                    ...state,
                    state: STATE.ACCOUNTCHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        account,
                        chainId,
                        // account
                    },
                };
                if (payload) {
                    obJ.payload.standard = payload;
                }
                return obJ;
            case STATE.STARTLOADING:
                return {
                    ...state,
                    state: null,
                    loading: true,
                };

            case STATE.SEARCH:
                return {
                    ...state,
                    state: STATE.SEARCH,
                    page: 1,
                    payload: {
                        ...state.payload,
                        search: payload,
                    },
                };
            case STATE.TYPECHANGE:
                return {
                    ...state,
                    state: STATE.TYPECHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        standard: payload,
                    },
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

        const query = {
            ...state.payload,
            page: state.page,
            account,
            chainId,
        };

        if (onlyOwners) {
            if (!account) return;
            query.ownerAddress = account;
        }

        dispatch({
            type: STATE.STARTLOADING,
        });

        const { data } = await getAllCollectionService(query);

        dispatch({
            type: STATE.STOREDATA,
            payload: {
                items: data.data || [],
                count: data.count,
                totalPages: data.totalPages,
            },
        });
    };

    useEffect(() => {
        if (!status) return;
        dispatch({
            type: STATE.ACCOUNTCHANGE,
            payload: standard,
        });
    }, [status, account, chainId, standard]);

    useEffect(() => {
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

    const orderChange = (e) => {
        dispatch({
            type: STATE.ORDERCHANGE,
            payload: e.value,
        });
    };

    const handleCategorySelect = (e) => {
        let categoryArry;
        if (e.target.checked) {
            categoryArry = [
                ...(state?.payload?.category || []),
                e.target.value,
            ];
        } else {
            categoryArry = (state?.payload?.category || []).filter(
                (ele) => ele !== e.target.value
            );
        }
        dispatch({
            type: STATE.CATEGORYSELECT,
            payload: categoryArry,
        });
    };

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

    const typeChange = (e) => {
        dispatch({
            type: STATE.TYPECHANGE,
            payload: e.value,
        });
    };

    return {
        ...state,
        categorys,
        filterOptions: FILTER_OPTIONS,
        orderOptions: ORDER_OPTIONS,
        orderChange,
        handleCategorySelect,
        handlePageChange,
        handleSearch,
        typeChange,
    };
};

export const useItems = () => {
    const {
        categorys,
        walletDetalis: { account, chainId, status },
    } = useSelector(globalState);
    const [priceFilter, setPriceFilter] = useState([]);

    const initialState = {
        loading: false,
        items: [],
        count: 0,
        totalPages: 0,
        page: 1,
        limit: 20,
        state: null,
        hasMore: false,
        priceArray: [],
        payload: {
            itemCollection: "",
            extraFilter: ORDER_OPTIONS[0]?.value,
            account: account,
            chainId: chainId,
            category: [],
            itemStatus: [],
            standard: FILTER_OPTIONS[0]?.value,
            search: "",
            price: {
                min: "",
                max: "",
            },
        },
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.ORDERCHANGE:
                return {
                    ...state,
                    state: STATE.ORDERCHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        extraFilter: payload,
                    },
                };
            case STATE.CATEGORYSELECT:
                return {
                    ...state,
                    state: STATE.CATEGORYSELECT,
                    page: 1,
                    payload: {
                        ...state.payload,
                        category: payload,
                    },
                };
            case STATE.PAGECHANGE:
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
                        // account
                    },
                };
            case STATE.STARTLOADING:
                return {
                    ...state,
                    state: null,
                    loading: true,
                };
            case STATE.PRICECHANGE:
                return {
                    ...state,
                    state: STATE.PRICECHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        price: {
                            min: payload[0],
                            max: payload[1],
                        },
                    },
                };
            case STATE.RESETPRICECHANGE:
                return {
                    ...state,
                    state: STATE.PRICECHANGE,
                    page: 1,
                    priceArray: [],
                    payload: {
                        ...state.payload,
                        price: {
                            min: "",
                            max: "",
                        },
                    },
                };
            case STATE.SEARCH:
                return {
                    ...state,
                    state: STATE.SEARCH,
                    page: 1,
                    payload: {
                        ...state.payload,
                        search: payload,
                    },
                };
            case STATE.SETCOLLECTION:
                return {
                    ...state,
                    state: STATE.SETCOLLECTION,
                    page: 1,
                    payload: {
                        ...state.payload,
                        itemCollection: payload,
                    },
                };
            case STATE.TYPECHANGE:
                return {
                    ...state,
                    state: STATE.TYPECHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        itemStatus: payload,
                    },
                };
            case STATE.EXTRAFILTER:
                return {
                    ...state,
                    state: STATE.EXTRAFILTER,
                    page: 1,
                    payload: {
                        ...state.payload,
                        standard: payload,
                    },
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
                    minPrice: payload?.minPrice,
                    maxPrice: payload?.maxPrice,
                    priceArray: payload?.priceArray,
                    loading: false,
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const getData = async () => {
        if (!state.state) return;

        try {
            dispatch({
                type: STATE.STARTLOADING,
            });

            const query = {
                ...state.payload,
                page: state.page,
                limit: state.limit,
                account,
                chainId,
            };

            const { data } = await getAllItemsServices(query);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    items: data.data,
                    count: data.count,
                    totalPages: data.totalPages,
                    minPrice: data.minPrice,
                    maxPrice: data.maxPrice,
                    priceArray: data.priceArray,
                },
            });
        } catch (error) {
            Toast.error(error.message);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    items: [],
                    count: 0,
                    totalPages: 0,
                    minPrice: null,
                    maxPrice: null,
                    priceArray: [],
                },
            });
        }
    };

    useEffect(() => {
        if (!status) return;
        dispatch({
            type: STATE.ACCOUNTCHANGE,
        });
    }, [status, account, chainId]);
    useEffect(() => {
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

    const orderChange = (e) => {
        dispatch({
            type: STATE.ORDERCHANGE,
            payload: e.value,
        });
    };

    const handleCategorySelect = (e) => {
        let categoryArry;
        if (e.target.checked) {
            categoryArry = [
                ...(state?.payload?.category || []),
                e.target.value,
            ];
        } else {
            categoryArry = (state?.payload?.category || []).filter(
                (ele) => ele !== e.target.value
            );
        }
        dispatch({
            type: STATE.CATEGORYSELECT,
            payload: categoryArry,
        });
    };

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

    const typeChange = (e) => {
        dispatch({
            type: STATE.EXTRAFILTER,
            payload: e.value,
        });
    };

    const handlePriceChange = (value) => {
        if (!value.length) {
            dispatch({
                type: STATE.RESETPRICECHANGE,
            });
        }
        dispatch({
            type: STATE.PRICECHANGE,
            payload: value,
        });
    };

    const handleCollectionChange = (value) => {
        dispatch({
            type: STATE.SETCOLLECTION,
            payload: value,
        });
    };

    const filterChange = (e) => {
        let stateArray;
        if (e.target.checked) {
            stateArray = [
                ...(state?.payload?.itemStatus || []),
                e.target.value,
            ];
        } else {
            stateArray = (state?.payload?.itemStatus || []).filter(
                (ele) => ele !== e.target.value
            );
        }
        dispatch({
            type: STATE.TYPECHANGE,
            payload: stateArray,
        });
    };

    return {
        ...state,
        categorys,
        filterOptions: FILTER_OPTIONS,
        orderOptions: ORDER_OPTIONS,
        priceFilter,
        filterChange,
        setPriceFilter,
        orderChange,
        handleCategorySelect,
        handlePageChange,
        handleSearch,
        typeChange,
        handlePriceChange,
        handleCollectionChange,
    };
};

export const useCollectionDetails = () => {
    const {
        walletDetalis: { account, chainId, status },
    } = useSelector(globalState);
    const router = useRouter();
    const initialState = {
        loading: false,
        state: null,
        priceArray: [],
        collectionDetails: {},
        payload: {
            account: account,
            chainId: chainId,
            itemCollection: "",
        },
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.ACCOUNTCHANGE:
                return {
                    ...state,
                    state: STATE.ACCOUNTCHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                    },
                };
            case STATE.STARTLOADING:
                return {
                    ...state,
                    state: null,
                    loading: true,
                };
            case STATE.QUERYCHANGE:
                return {
                    ...state,
                    state: STATE.QUERYCHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        ...payload,
                    },
                };
            case STATE.STOREDATA:
                return {
                    ...state,
                    state: null,
                    loading: false,
                    collectionDetails: payload?.collectionDetails || {},
                    priceArray: payload?.priceArray || [],
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const getData = async () => {
        try {
            if (!state.state) return;
            const query = {
                ...state.payload,
            };
            dispatch({
                type: STATE.STARTLOADING,
            });
            const { data } = await getAllCollectionItemsService(query);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    priceArray: data.priceArray || [],
                    collectionDetails: data.collectionDetails || {},
                },
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        if (!status) return;
        dispatch({
            type: STATE.ACCOUNTCHANGE,
        });
    }, [status, account, chainId]);

    useEffect(() => {
        let payload = {
            itemCollection: router.query.itemCollection,
        };
        dispatch({
            type: STATE.QUERYCHANGE,
            payload: payload,
        });
    }, [router.isReady, router.query]);

    useEffect(() => {
        let timer;
        if (!router.isReady || !router.query.itemCollection) return;
        if (state.state === STATE.SEARCH) {
            timer = setTimeout(() => {
                getData();
            }, 800);
        } else {
            getData();
        }

        return () => clearTimeout(timer);
    }, [state]);

    return {
        ...state,
    };
};

export const useCollectionItems = ({
    limit = 20,
    search = "",
    sort = {
        value: "Recently Listed",
        label: "Recently Listed",
    },
    itemStatus = [],
    selectedAttribute = [],
    price = {
        min: "",
        max: "",
    },
}) => {
    const {
        walletDetalis: { account, status },
    } = useSelector(globalState);
    const router = useRouter();
    const initialState = {
        loading: true,
        items: [],
        count: 0,
        totalPages: 0,
        page: 1,
        limit: limit,
        state: null,
        hasMore: false,
        payload: {
            extraFilter: ORDER_OPTIONS[0]?.value,
            account: account,
            itemCollection: "",
            itemStatus: [],
            attributes: [],
            search: "",
            price: {
                min: "",
                max: "",
            },
        },
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.ORDERCHANGE:
                return {
                    ...state,
                    state: STATE.ORDERCHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        extraFilter: payload,
                    },
                };
            case STATE.ATTIBUTESELECT:
                return {
                    ...state,
                    state: STATE.ATTIBUTESELECT,
                    page: 1,
                    payload: {
                        ...state.payload,
                        attributes: payload,
                    },
                };
            case STATE.PAGECHANGE:
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
                    },
                };
            case STATE.STARTLOADING:
                return {
                    ...state,
                    state: null,
                    loading: true,
                };
            case STATE.STOPLOADING:
                return {
                    ...state,
                    state: null,
                    loading: false,
                };
            case STATE.PRICECHANGE:
                return {
                    ...state,
                    state: STATE.PRICECHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        price: {
                            min: payload?.min || "",
                            max: payload?.max || "",
                        },
                    },
                };
            case STATE.RESETPRICECHANGE:
                return {
                    ...state,
                    state: STATE.RESETPRICECHANGE,
                    page: 1,
                    priceArray: [],
                    payload: {
                        ...state.payload,
                        price: {
                            min: "",
                            max: "",
                        },
                    },
                };
            case STATE.SEARCH:
                return {
                    ...state,
                    state: STATE.SEARCH,
                    page: 1,
                    payload: {
                        ...state.payload,
                        search: payload,
                    },
                };
            case STATE.TYPECHANGE:
                return {
                    ...state,
                    state: STATE.TYPECHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        itemStatus: payload,
                    },
                };
            case STATE.QUERYCHANGE:
                return {
                    ...state,
                    state: STATE.QUERYCHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        ...payload,
                    },
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
        const query = {
            ...state.payload,
            page: state.page,
            limit: state.limit,
            account,
        };
        try {
            dispatch({
                type: STATE.STARTLOADING,
            });
            const { data } = await getAllItemsServices(query);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    items: data.data || [],
                    count: data.count,
                    totalPages: data.totalPages,
                },
            });

            console.log(' data.data',  data)
        } catch (error) {
            console.log("error:", error);
        } finally {
            dispatch({
                type: STATE.STOPLOADING,
            });
        }
    };

    useEffect(() => {
        if (!status) return;
        dispatch({
            type: STATE.ACCOUNTCHANGE,
        });
    }, [status, account]);

    useEffect(() => {
        if (!router.isReady || !router.query.itemCollection) return;
        let payload = {
            itemCollection: router.query.itemCollection,
        };
        if (router.query?.tokenId) {
            payload = {
                ...payload,
                remove: router.query.tokenId,
            };
        }
        dispatch({
            type: STATE.QUERYCHANGE,
            payload: payload,
        });
    }, [router.isReady, router.query]);

    useEffect(() => {
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

    useEffect(() => {
        if (selectedAttribute[0] == state.payload?.attributes[0]) return;
        dispatch({
            type: STATE.ATTIBUTESELECT,
            payload: selectedAttribute,
        });
    }, [selectedAttribute]);

    useEffect(() => {
        if (!sort.value || sort.value == state.payload?.extraFilter) return;
        dispatch({
            type: STATE.ORDERCHANGE,
            payload: sort.value,
        });
    }, [sort]);

    useEffect(() => {
        if (
            price.min == state.payload?.price?.min &&
            price.max == state.payload?.price?.max
        )
            return;
        dispatch({
            type: STATE.PRICECHANGE,
            payload: price,
        });
    }, [price]);

    const handlePageChange = () => {
        dispatch({
            type: STATE.PAGECHANGE,
        });
    };

    useEffect(() => {
        dispatch({
            type: STATE.SEARCH,
            payload: search,
        });
    }, [search]);

    useEffect(() => {
        if (itemStatus[0] == state.payload?.itemStatus[0]) return;
        dispatch({
            type: STATE.TYPECHANGE,
            payload: itemStatus,
        });
    }, [itemStatus]);

    return {
        ...state,
        handlePageChange,
    };
};

export const useCollectors = () => {
    const {
        walletDetalis: { account, chainId, status },
    } = useSelector(globalState);
    const initialState = {
        loading: false,
        collectors: [],
        count: 0,
        totalPages: 0,
        page: 1,
        limit: 10,
        state: null,
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.PAGECHANGE:
                return {
                    ...state,
                    state: STATE.PAGECHANGE,
                    page: payload,
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
                    collectors: payload.items,
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
            time: "Month", //Hour, Day, Week, Month
            account,
            chainId,
        };

        const { data } = await getCollectorsService(query);

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
        getData();
    }, [state]);

    const handlePageChange = (page) => {
        if (page === state.page) return;
        dispatch({
            type: STATE.PAGECHANGE,
            payload: page,
        });
    };
    return {
        ...state,
        handlePageChange,
    };
};

export const useRanking = () => {
    const {
        categorys,
        walletDetalis: { account, chainId, status },
    } = useSelector(globalState);
    const initialState = {
        loading: false,
        ranking: [],
        count: 0,
        totalPages: 0,
        page: 1,
        limit: 10,
        state: null,
        payload: {
            stateCategory: [],
        },
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.PAGECHANGE:
                return {
                    ...state,
                    state: STATE.PAGECHANGE,
                    page: payload,
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
            case STATE.CATEGORYSELECT:
                return {
                    ...state,
                    state: STATE.CATEGORYSELECT,
                    page: 1,
                    payload: {
                        ...state.payload,
                        stateCategory: payload,
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
                    ranking: payload.items,
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
        };

        const { data } = await getRankingService(query);

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
        getData();
    }, [state]);

    const categoryChange = (value) => {
        let stateArray;
        if (value == null) {
            stateArray = [];
        } else {
            stateArray = [value];
        }
        if (stateArray[0] !== state?.payload?.stateCategory[0]) {
            dispatch({
                type: STATE.CATEGORYSELECT,
                payload: stateArray,
            });
        }
    };

    const handlePageChange = (page) => {
        if (page === state.page) return;
        dispatch({
            type: STATE.PAGECHANGE,
            payload: page,
        });
    };
    return {
        ...state,
        categorys,
        categoryChange,
        handlePageChange,
    };
};

export const usePopularCollection = () => {
    const {
        walletDetalis: { account, chainId, status },
    } = useSelector(globalState);
    const initialState = {
        loading: false,
        popularCollections: [],
        count: 0,
        totalPages: 0,
        page: 1,
        limit: 10,
        state: null,
        payload: {
            timeperiod: "Day",
            search: "",
        },
    };

    const TimePeriod = [
        { value: "Hour", label: "Last 1 Hour" },
        { value: "Day", label: "Last 24 Hour" },
        { value: "Week", label: "Last 7 Days" },
        { value: "Month", label: "Last 30 Days" },
    ];

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.PAGECHANGE:
                return {
                    ...state,
                    state: STATE.PAGECHANGE,
                    page: payload,
                };
            case STATE.TYPECHANGE:
                return {
                    ...state,
                    state: STATE.TYPECHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        timeperiod: payload,
                    },
                };
            case STATE.SEARCH:
                return {
                    ...state,
                    state: STATE.SEARCH,
                    page: 1,
                    payload: {
                        ...state.payload,
                        search: payload,
                    },
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
                    popularCollections: payload.items,
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
        const { data } = await getPopularCollectionService(query);

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

    const timePeriodChange = (e) => {
        dispatch({
            type: STATE.TYPECHANGE,
            payload: e.value,
        });
    };

    const handlePageChange = (page) => {
        if (page === state.page) return;
        dispatch({
            type: STATE.PAGECHANGE,
            payload: page,
        });
    };

    const handleSearch = (e) => {
        dispatch({
            type: STATE.SEARCH,
            payload: e.target.value,
        });
    };

    return {
        ...state,
        TimePeriod,
        timePeriodChange,
        handlePageChange,
        handleSearch,
    };
};

export const useUserDetails = () => {
    const {
        categorys,
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
            extraFilter: "Recently Created",
            account: account,
            ownerAddress: "",
            itemStatus: [],
            userName: "",
        },
    };

    const orderOption = [
        { value: "Recently Created", label: "Recently Created" },
        { value: "Oldest", label: "Oldest" },
    ];

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

            case STATE.QUERYCHANGE:
                const isEthAddress = /^0x[a-fA-F0-9]{40}$/.test(payload);
                const isDomainName = !isEthAddress && /\..+$/.test(payload);
                return {
                    ...state,
                    state: STATE.QUERYCHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        ownerAddress: isEthAddress ? payload : null,
                        userName: isDomainName ? null : payload,
                        domainName: isDomainName ? payload : null,
                    },
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
            case STATE.ORDERCHANGE:
                return {
                    ...state,
                    state: STATE.ORDERCHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        extraFilter: payload.extraFilter,
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
        if (!router.isReady || !router.query.userAddress) return;
        dispatch({
            type: STATE.QUERYCHANGE,
            payload: router.query.userAddress,
        });
    }, [router.isReady, router.query]);

    useEffect(() => {
        // console.log("stateChanged", state);
        // if (!account) return;
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

    const handleFilterChange = (value) => {
        let status = [value];
        dispatch({
            type: STATE.TYPECHANGE,
            payload: {
                itemStatus: status,
            },
        });
    };

    const orderChange = (e) => {
        dispatch({
            type: STATE.ORDERCHANGE,
            payload: {
                extraFilter: e.value,
            },
        });
    };

    return {
        ...state,
        categorys,
        orderOption,
        orderChange,
        handlePageChange,
        handleRouteChange,
        handleFilterChange,
    };
};

export const useBlog = ({ limit = 9 }) => {
    const { isReady, query } = useRouter();
    const {
        categorys,
        walletDetalis: { account },
    } = useSelector(globalState);

    const initialState = {
        loading: false,
        items: [],
        count: 0,
        totalPages: 0,
        page: 1,
        state: null,
        hasMore: false,
        payload: {
            limit: limit,
            tags: [],
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
            case STATE.ACCOUNTCHANGE:
                return {
                    ...state,
                    state: STATE.ACCOUNTCHANGE,
                };
            case STATE.QUERYCHANGE:
                return {
                    ...state,
                    state: STATE.QUERYCHANGE,
                    payload: {
                        ...state.payload,
                        tags: [...payload],
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
        const query = {
            ...state.payload,
            page: state.page,
        };

        dispatch({
            type: STATE.STARTLOADING,
        });

        const { data } = await getAllBlogsServices(query);

        dispatch({
            type: STATE.STOREDATA,
            payload: {
                items: data?.data || [],
                count: data?.count,
                totalPages: data?.totalPages,
                priceArray: data?.priceArray || [],
                collectionDetails: data?.collectionDetails || {},
            },
        });
    };

    useEffect(() => {
        if (!isReady || !query.tag) return;
        dispatch({
            type: STATE.QUERYCHANGE,
            payload: [query.tag],
        });
    }, [isReady, query]);

    useEffect(() => {
        dispatch({ type: STATE.ACCOUNTCHANGE });
    }, [account]);

    useEffect(() => {
        if (!state.state) return;
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

export const useComments = () => {
    const { isReady, query } = useRouter();

    const initialState = {
        commentsLoading: false,
        comments: [],
        count: 0,
        totalPages: 0,
        page: 1,
        limit: 8,
        state: null,
        commentsHasMore: false,
        payload: {},
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.PAGECHANGE:
                return {
                    ...state,
                    state: STATE.PAGECHANGE,
                    page: state.page + 1,
                };
            case STATE.QUERYCHANGE:
                return {
                    ...state,
                    state: STATE.QUERYCHANGE,
                    payload: {
                        ...state.payload,
                        blogId: payload,
                    },
                };
            case STATE.STARTLOADING:
                return {
                    ...state,
                    state: null,
                    commentsLoading: true,
                };
            case STATE.STOREDATA:
                return {
                    ...state,
                    state: null,
                    comments:
                        state.page === 1
                            ? payload.items
                            : [...state.comments, ...payload.items],
                    count: payload.count,
                    totalPages: payload.totalPages,
                    commentsHasMore: payload?.totalPages > state.page,
                    commentsLoading: false,
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const getData = async () => {
        if (!state.state) return;

        const query = {
            ...state.payload,
            page: state.page,
            limit: state.limit,
        };

        dispatch({
            type: STATE.STARTLOADING,
        });

        const { data } = await getCommentsServices(query);

        dispatch({
            type: STATE.STOREDATA,
            payload: {
                items: data?.data || [],
                count: data?.count,
                totalPages: data?.totalPages,
                priceArray: data?.priceArray || [],
                collectionDetails: data?.collectionDetails || {},
            },
        });
    };

    useEffect(() => {
        if (!isReady || !query.id) return;
        dispatch({
            type: STATE.QUERYCHANGE,
            payload: query.id,
        });
    }, [isReady, query]);

    useEffect(() => {
        if (!state.state) return;
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

export const useOwnerDetails = () => {
    const router = useRouter();
    const {
        walletDetalis: { chainId },
    } = useSelector(globalState);
    const initialState = {
        ownerLoading: false,
        ownerDetails: {},
        state: null,
        payload: {
            ownerAddress: "",
            name: "",
            domainName: "",
            chainId,
        },
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.QUERYCHANGE:
                const isEthAddress = /^0x[a-fA-F0-9]{40}$/.test(payload);
                const isDomainName = !isEthAddress && /\..+$/.test(payload);

                return {
                    ...state,
                    state: STATE.QUERYCHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        ownerAddress: isEthAddress ? payload : null,
                        domainName: isDomainName ? payload : null,
                        name: isDomainName ? null : payload,
                    },
                };
            // return {
            //     ...state,
            //     state: STATE.QUERYCHANGE,
            //     page: 1,
            //     payload: {
            //         ...state.payload,
            //         ownerAddress: payload,
            //     },
            // };
            case STATE.ACCOUNTCHANGE:
                return {
                    ...state,
                    state: STATE.ACCOUNTCHANGE,
                    payload: {
                        ...state.payload,
                        chainId,
                    },
                };
            case STATE.STARTLOADING:
                return {
                    ...state,
                    state: null,
                    ownerLoading: true,
                };
            case STATE.STOPLOADING:
                return {
                    ...state,
                    state: null,
                    ownerLoading: false,
                };
            case STATE.STOREDATA:
                return {
                    ...state,
                    state: null,
                    ownerDetails:
                        state.page === 1
                            ? payload.ownerDetails
                            : [...state.ownerDetails, ...payload.ownerDetails],
                    ownerLoading: false,
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
        };
        try {
            const { data } = await getOwnerDetailsService(query);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    ownerDetails: data.data,
                },
            });
        } catch (error) {
            console.log("error: ", error);
        } finally {
            dispatch({
                type: STATE.STOPLOADING,
            });
        }
    };

    useEffect(() => {
        dispatch({ type: STATE.ACCOUNTCHANGE });
    }, [chainId]);

    useEffect(() => {
        if (!router.isReady) return;
        dispatch({
            type: STATE.QUERYCHANGE,
            payload: router.query.userAddress,
        });
    }, [router.isReady, router.query]);

    useEffect(() => {
        getData();
    }, [state]);

    return {
        ...state,
    };
};

export const usePublicProfileCollections = ({ ownerAddress = "" }) => {
    const {
        walletDetalis: { account, chainId, status },
    } = useSelector(globalState);
    const router = useRouter();
    const initialState = {
        collectionLoading: false,
        collections: [],
        count: 0,
        totalPages: 0,
        page: 1,
        limit: 10,
        hasMore: false,
        state: null,
        payload: {
            owner: "",
            // userName: "",
            // domainName: "",
        },
        // chainid
        // userName, domainName, owner (one of these three)
    };
    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.QUERYCHANGE:
                // const isEthAddress = /^0x[a-fA-F0-9]{40}$/.test(payload);
                // const isDomainName = !isEthAddress && /\..+$/.test(payload);
                return {
                    ...state,
                    state: STATE.QUERYCHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        owner: payload,
                        // owner: isEthAddress ? payload : null,
                        // userName: isDomainName ? null : payload,
                        // domainName: isDomainName ? payload : null,
                    },
                };
            case STATE.ACCOUNTCHANGE:
                return {
                    ...state,
                    state: STATE.ACCOUNTCHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        chainId,
                    },
                };
            case STATE.PAGECHANGE:
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
                    payload: {
                        ...state.payload,
                        collectionSearch: payload,
                    },
                };
            case STATE.STARTLOADING:
                return {
                    ...state,
                    state: null,
                    collectionLoading: true,
                };
            case STATE.STOREDATA:
                return {
                    ...state,
                    state: null,
                    collections:
                        state.page === 1
                            ? payload.items
                            : [...state.collections, ...payload.items],
                    count: payload.count,
                    totalPages: payload.totalPages,
                    hasMore: payload?.totalPages > state.page,
                    collectionLoading: false,
                };
            case STATE.STOPLOADING:
                return {
                    ...state,
                    state: null,
                    collectionLoading: false,
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (!ownerAddress) return;
        dispatch({
            type: STATE.QUERYCHANGE,
            payload: ownerAddress,
        });
    }, [ownerAddress]);

    useEffect(() => {
        if (!status) return;
        dispatch({
            type: STATE.ACCOUNTCHANGE,
        });
    }, [status, account, chainId]);

    useEffect(() => {
        if (!state.state || !state.payload.owner) return;
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

    const getData = async () => {
        dispatch({
            type: STATE.STARTLOADING,
        });
        const query = {
            ...state.payload,
            page: state.page,
            limit: state.limit,
            chainId,
        };
        const { data } = await getPublicCollectionService(query);
        dispatch({
            type: STATE.STOREDATA,
            payload: {
                items: data?.data,
                count: data?.count,
                totalPages: data?.totalPages,
            },
        });
    };
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
    return {
        ...state,
        handlePageChange,
        handleSearch,
    };
};

export const usePublicProfileItems = ({
    ownerAddress = "",
    ContextSearch = "",
    ContextSort = {
        value: "Recently Listed",
        label: "Recently Listed",
    },
    ContextStatus = [],
    selectedCollection,
    created = false,
}) => {
    const {
        categorys,
        walletDetalis: { account, chainId, status },
    } = useSelector(globalState);

    const initialState = {
        loading: false,
        items: [],
        count: 0,
        totalPages: 0,
        page: 1,
        limit: 20,
        state: null,
        hasMore: false,
        payload: {
            owner: "",
            itemCollection: "",
            extraFilter: ORDER_OPTIONS[0]?.value,
            account: account,
            chainId: chainId,
            itemStatus: [],
            search: "",
        },
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.QUERYCHANGE:
                return {
                    ...state,
                    state: STATE.QUERYCHANGE,
                    page: 1,
                    loading: true, //
                    payload: {
                        ...state.payload,
                        owner: payload,
                    },
                };
            case STATE.ORDERCHANGE:
                return {
                    ...state,
                    state: STATE.ORDERCHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        extraFilter: payload,
                    },
                };
            case STATE.PAGECHANGE:
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
            case STATE.SEARCH:
                return {
                    ...state,
                    state: STATE.SEARCH,
                    page: 1,
                    payload: {
                        ...state.payload,
                        search: payload,
                    },
                };
            case STATE.SETCOLLECTION:
                return {
                    ...state,
                    state: STATE.SETCOLLECTION,
                    page: 1,
                    payload: {
                        ...state.payload,
                        itemCollection: payload,
                    },
                };
            case STATE.TYPECHANGE:
                return {
                    ...state,
                    state: STATE.TYPECHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        itemStatus: payload,
                    },
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

    useEffect(() => {
        if (!ownerAddress) return;
        dispatch({
            type: STATE.QUERYCHANGE,
            payload: ownerAddress,
        });
    }, [ownerAddress]);

    const getData = async () => {
        if (!state.state || !state.payload.owner) return;

        try {
            dispatch({
                type: STATE.STARTLOADING,
            });

            const query = {
                ...state.payload,
                page: state.page,
                limit: state.limit,
                account,
                chainId,
            };

            if (created) {
                query.creator = state.payload?.owner;
                delete query.owner;
            }

            const { data } = await getAllItemsServices(query);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    items: data.data,
                    count: data.count,
                    totalPages: data.totalPages,
                },
            });
        } catch (error) {
            Toast.error(error.message);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    items: [],
                    count: 0,
                    totalPages: 0,
                },
            });
        }
    };

    useEffect(() => {
        if (!status) return;
        dispatch({
            type: STATE.ACCOUNTCHANGE,
        });
    }, [status, account, chainId]);
    useEffect(() => {
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

    const orderChange = (e) => {
        dispatch({
            type: STATE.ORDERCHANGE,
            payload: e.value,
        });
    };

    useEffect(() => {
        if (!ContextSort.value) return;
        dispatch({
            type: STATE.ORDERCHANGE,
            payload: ContextSort.value,
        });
    }, [ContextSort]);

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

    useEffect(() => {
        dispatch({
            type: STATE.SEARCH,
            payload: ContextSearch,
        });
    }, [ContextSearch]);

    const handleCollectionChange = (value) => {
        dispatch({
            type: STATE.SETCOLLECTION,
            payload: value,
        });
    };

    useEffect(() => {
        // if (!selectedCollection) return;
        dispatch({
            type: STATE.SETCOLLECTION,
            payload: selectedCollection,
        });
    }, [selectedCollection]);

    const filterChange = (e) => {
        let stateArray;
        if (e.target.checked) {
            stateArray = [
                ...(state?.payload?.itemStatus || []),
                e.target.value,
            ];
        } else {
            stateArray = (state?.payload?.itemStatus || []).filter(
                (ele) => ele !== e.target.value
            );
        }
        dispatch({
            type: STATE.TYPECHANGE,
            payload: stateArray,
        });
    };
    useEffect(() => {
        if (!ContextStatus.length) return;
        dispatch({
            type: STATE.TYPECHANGE,
            payload: [...ContextStatus],
        });
    }, [ContextStatus]);

    return {
        ...state,
        orderOptions: ORDER_OPTIONS,
        filterChange,
        orderChange,
        handlePageChange,
        handleSearch,
        handleCollectionChange,
    };
};

export const usePublicProfileOffers = ({
    ownerAddress = "",
    ContextSearch = "",
    ContextSort = {
        value: "Recently Listed",
        label: "Recently Listed",
    },
    selectedOfferType = "All",
    selectedCollection,
}) => {
    const {
        categorys,
        walletDetalis: { account, chainId, status },
    } = useSelector(globalState);
    const initialState = {
        loading: false,
        items: [],
        count: 0,
        totalPages: 0,
        page: 1,
        limit: 20,
        state: null,
        hasMore: false,
        payload: {
            itemCollection: "",
            extraFilter: ORDER_OPTIONS[0]?.value,
            account: account,
            address: ownerAddress,
            chainId: chainId,
            UserOffer: "All",
            search: "",
        },
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.QUERYCHANGE:
                return {
                    ...state,
                    state: STATE.QUERYCHANGE,
                    page: 1,
                    loading: true, //
                    payload: {
                        ...state.payload,
                        address: payload,
                    },
                };
            case STATE.ORDERCHANGE:
                return {
                    ...state,
                    state: STATE.ORDERCHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        extraFilter: payload,
                    },
                };
            case STATE.PAGECHANGE:
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
            case STATE.SEARCH:
                return {
                    ...state,
                    state: STATE.SEARCH,
                    page: 1,
                    payload: {
                        ...state.payload,
                        search: payload,
                    },
                };
            case STATE.SETCOLLECTION:
                return {
                    ...state,
                    state: STATE.SETCOLLECTION,
                    page: 1,
                    payload: {
                        ...state.payload,
                        itemCollection: payload,
                    },
                };
            case STATE.TYPECHANGE:
                return {
                    ...state,
                    state: STATE.TYPECHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        UserOffer: payload,
                    },
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

    useEffect(() => {
        if (!ownerAddress) return;
        dispatch({
            type: STATE.QUERYCHANGE,
            payload: ownerAddress,
        });
    }, [ownerAddress]);

    const getData = async () => {
        if (!state.state || !state.payload.address) return;

        try {
            dispatch({
                type: STATE.STARTLOADING,
            });

            const query = {
                ...state.payload,
                page: state.page,
                limit: state.limit,
                account,
                chainId,
            };

            const { data } = await getUserOfferServices(query);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    items: data.data,
                    count: data.count,
                    totalPages: data.totalPages,
                },
            });
        } catch (error) {
            Toast.error(error.message);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    items: [],
                    count: 0,
                    totalPages: 0,
                },
            });
        }
    };

    useEffect(() => {
        if (!status) return;
        dispatch({
            type: STATE.ACCOUNTCHANGE,
        });
    }, [status, account, chainId]);
    useEffect(() => {
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

    useEffect(() => {
        dispatch({
            type: STATE.SEARCH,
            payload: ContextSearch,
        });
    }, [ContextSearch]);

    useEffect(() => {
        let itemCollection = selectedCollection;
        dispatch({
            type: STATE.SETCOLLECTION,
            payload: itemCollection,
        });
    }, [selectedCollection]);

    useEffect(() => {
        if (!selectedOfferType) return;
        dispatch({
            type: STATE.TYPECHANGE,
            payload: selectedOfferType,
        });
    }, [selectedOfferType]);

    return {
        ...state,
        orderOptions: ORDER_OPTIONS,
        handlePageChange,
    };
};

export const usePublicProfileActivities = ({
    ownerAddress = "",
    ContextSearch = "",
    selectedCollection,
    selectedActivity,
}) => {
    const {
        walletDetalis: { account, chainId, status },
    } = useSelector(globalState);
    const publicProfileEvents = [
        "Listed",
        "Minted",
        "Transfer",
        "Purchase",
        "Offer",
        "Remove LIsting",
        "Bids Cancle",
    ];
    const initialState = {
        loading: false,
        items: [],
        count: 0,
        totalPages: 0,
        page: 1,
        limit: 10,
        state: null,
        hasMore: false,
        payload: {
            itemCollection: "",
            search: "",
            account: ownerAddress,
            eventNames: publicProfileEvents,
        },
    };

    // const eventName = {
    //     OfferCanceled: "Bids Cancle",
    //     ListingCanceled: "Remove LIsting",
    //     OfferCreated: "Offer",
    //     Transfer: "Transfer",
    //     Minted: "Minted",
    //     ListingCreated: "Listed",
    //     BuyFromListing: "Purchase",
    //     BuyFromAuction: "Purchase",
    //     BuyFromOffer: "Purchase",
    //     AuctionCreated: "Auction Created",
    //     AuctionCanceled: "Auction Canceled",
    //     BidInAuction: "Bids",
    //     ListingUpdated: "Listing Update",
    //     Burn: "Burn",
    // };

    // [
    //     "Minted",
    //     "Listed",
    //     "Auction Created",
    //     "Bids",
    //     "Purchase",
    //     "Offer",
    //     "Bids Cancle",
    //     "Auction Canceled",
    //     "Remove LIsting",
    //     "Transfer",
    //     "Following",
    //     "Like",
    //     "UnFollow",
    //     "Unlike"
    // ]

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.QUERYCHANGE:
                return {
                    ...state,
                    state: STATE.QUERYCHANGE,
                    page: 1,
                    loading: true, //
                    payload: {
                        ...state.payload,
                        account: payload,
                    },
                };
            case STATE.PAGECHANGE:
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
                        chainId,
                    },
                };
            case STATE.STARTLOADING:
                return {
                    ...state,
                    state: null,
                    loading: true,
                };
            case STATE.SEARCH:
                return {
                    ...state,
                    state: STATE.SEARCH,
                    page: 1,
                    payload: {
                        ...state.payload,
                        search: payload,
                    },
                };
            case STATE.SETCOLLECTION:
                return {
                    ...state,
                    state: STATE.SETCOLLECTION,
                    page: 1,
                    payload: {
                        ...state.payload,
                        itemCollection: payload,
                    },
                };
            case STATE.TYPECHANGE:
                return {
                    ...state,
                    state: STATE.TYPECHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        eventNames: [...payload],
                    },
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

    useEffect(() => {
        if (!ownerAddress) return;
        dispatch({
            type: STATE.QUERYCHANGE,
            payload: ownerAddress,
        });
    }, [ownerAddress]);

    const getData = async () => {
        if (!state.state || !state.payload.account) return;
        try {
            dispatch({
                type: STATE.STARTLOADING,
            });

            const query = {
                ...state.payload,
                page: state.page,
                limit: state.limit,
                chainId,
            };

            const { data } = await getEventsServices(query);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    items: data.data,
                    count: data.count,
                    totalPages: data.totalPages,
                },
            });
        } catch (error) {
            console.log("error:", error);
            Toast.error(error.message);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    items: [],
                    count: 0,
                    totalPages: 0,
                },
            });
        }
    };

    useEffect(() => {
        if (!status) return;
        dispatch({
            type: STATE.ACCOUNTCHANGE,
        });
    }, [status, account, chainId]);

    useEffect(() => {
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

    useEffect(() => {
        dispatch({
            type: STATE.SEARCH,
            payload: ContextSearch,
        });
    }, [ContextSearch]);

    useEffect(() => {
        // if (!selectedCollection) return;
        dispatch({
            type: STATE.SETCOLLECTION,
            payload: selectedCollection,
        });
    }, [selectedCollection]);

    useEffect(() => {
        if (!selectedActivity) return;
        let eventNames =
            selectedActivity.length > 0
                ? selectedActivity
                : publicProfileEvents;
        dispatch({
            type: STATE.TYPECHANGE,
            payload: eventNames,
        });
    }, [selectedActivity]);

    return {
        ...state,
        orderOptions: ORDER_OPTIONS,
        handlePageChange,
    };
};

export const useTopOwnersOfCollection = ({
    itemCollection = "",
    chainId = null,
}) => {
    const {
        walletDetalis: { account, status },
    } = useSelector(globalState);

    const initialState = {
        loading: false,
        items: [],
        page: 1,
        limit: 10,
        state: null,
        hasMore: false,
        payload: {
            itemCollection: "",
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
                    limit: payload,
                };
            case STATE.QUERYCHANGE:
                return {
                    ...state,
                    state: STATE.QUERYCHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        itemCollection: payload.itemCollection,
                        chainId: payload.chainId,
                    },
                };
            case STATE.ACCOUNTCHANGE:
                return {
                    ...state,
                    state: STATE.ACCOUNTCHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                    },
                };
            case STATE.STARTLOADING:
                return {
                    ...state,
                    state: null,
                    loading: true,
                };
            case STATE.STOPLOADING:
                return {
                    ...state,
                    state: null,
                    loading: false,
                };
            case STATE.STOREDATA:
                return {
                    ...state,
                    state: null,
                    items:
                        state.page === 1
                            ? payload
                            : [...state.items, ...payload],
                    hasMore: payload.length == state.limit,
                    loading: false,
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const getTopOwners = async () => {
        if (!state.payload.itemCollection) return;
        try {
            dispatch({
                type: STATE.STARTLOADING,
            });

            const query = {
                ...state.payload,
                page: state.page,
                limit: state.limit,
            };

            const { data } = await getTopOwnersOfCollectionService(query);
            dispatch({
                type: STATE.STOREDATA,
                payload: data.data,
            });
        } catch (err) {
            console.log("TopOwners error : ", err);
            dispatch({
                type: STATE.STOPLOADING,
            });
        }
    };

    useEffect(() => {
        if (!status) return;
        dispatch({
            type: STATE.ACCOUNTCHANGE,
        });
    }, [status, account]);

    useEffect(() => {
        if (!itemCollection || !chainId) return;
        dispatch({
            type: STATE.QUERYCHANGE,
            payload: {
                itemCollection,
                chainId,
            },
        });
    }, [itemCollection, chainId]);

    useEffect(() => {
        if (!state.state) return;
        getTopOwners();
    }, [state]);

    const handlePageChange = () => {
        dispatch({
            type: STATE.PAGECHANGE,
        });
    };

    const handleLimitChange = (value) => {
        if (!value) return;
        dispatch({ type: STATE.LIMITCHANGE, payload: value });
    };

    return {
        ...state,
        handlePageChange,
        handleLimitChange,
    };
};

export const useCollectionActivities = ({
    itemCollection = "",
    ContextSearch = "",
    chainId = null,
    selectedActivity,
}) => {
    const {
        walletDetalis: { account, status },
    } = useSelector(globalState);
    const collectionEvents = [
        "Listed",
        "Minted",
        "Transfer",
        "Purchase",
        "Offer",
        "Remove LIsting",
        "Bids Cancle",
    ];
    const initialState = {
        loading: false,
        items: [],
        count: 0,
        totalPages: 0,
        page: 1,
        limit: 10,
        state: null,
        hasMore: false,
        payload: {
            itemCollection: itemCollection,
            chainId: chainId,
            eventNames: collectionEvents,
        },
    };
    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.QUERYCHANGE:
                return {
                    ...state,
                    state: STATE.QUERYCHANGE,
                    page: 1,
                    loading: true,
                    payload: {
                        ...state.payload,
                        itemCollection: payload.itemCollection,
                        chainId: payload.chainId,
                    },
                };
            case STATE.PAGECHANGE:
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
                    },
                };
            case STATE.STARTLOADING:
                return {
                    ...state,
                    state: null,
                    loading: true,
                };
            case STATE.SEARCH:
                return {
                    ...state,
                    state: STATE.SEARCH,
                    page: 1,
                    payload: {
                        ...state.payload,
                        search: payload,
                    },
                };
            case STATE.TYPECHANGE:
                return {
                    ...state,
                    state: STATE.TYPECHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        eventNames: [...payload],
                    },
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
        if (
            !state.state ||
            !state.payload.itemCollection ||
            !state.payload.chainId
        )
            return;
        try {
            dispatch({
                type: STATE.STARTLOADING,
            });

            const query = {
                ...state.payload,
                page: state.page,
                limit: state.limit,
            };

            const { data } = await getCollectionHistoryService(query);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    items: data.data,
                    count: data.count,
                    totalPages: data.totalPages,
                },
            });
        } catch (error) {
            console.log("error:", error);
            Toast.error(error.message);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    items: [],
                    count: 0,
                    totalPages: 0,
                },
            });
        }
    };

    useEffect(() => {
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

    useEffect(() => {
        if (!status) return;
        dispatch({
            type: STATE.ACCOUNTCHANGE,
        });
    }, [status, account]);

    useEffect(() => {
        if (!itemCollection || !chainId) return;
        dispatch({
            type: STATE.QUERYCHANGE,
            payload: {
                itemCollection,
                chainId,
            },
        });
    }, [itemCollection, chainId]);

    useEffect(() => {
        dispatch({
            type: STATE.SEARCH,
            payload: ContextSearch,
        });
    }, [ContextSearch]);

    useEffect(() => {
        let eventNames =
            selectedActivity.length > 0 ? selectedActivity : collectionEvents;
        dispatch({
            type: STATE.TYPECHANGE,
            payload: eventNames,
        });
    }, [selectedActivity]);

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

export const usePriceDistributionChart = ({
    itemCollection = "",
    chainId = null,
}) => {
    const initialState = {
        loading: false,
        data: {},
        state: null,
        payload: {
            itemCollection: "",
            chainId: "",
            type: "ThreeMonth",
        },
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.QUERYCHANGE:
                return {
                    ...state,
                    state: STATE.QUERYCHANGE,
                    loading: true,
                    payload: {
                        ...state.payload,
                        itemCollection: payload.itemCollection,
                        chainId: payload.chainId,
                    },
                };
            case STATE.ACCOUNTCHANGE:
                return {
                    ...state,
                    state: STATE.ACCOUNTCHANGE,
                    payload: {
                        ...state.payload,
                    },
                };
            case STATE.TYPECHANGE:
                return {
                    ...state,
                    state: STATE.TYPECHANGE,
                    payload: {
                        ...state.payload,
                        type: payload,
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
                    data: payload.data,
                    loading: false,
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const FormatData = (data, type) => {
        const currentDate = new Date();
        const timePeriod = [];
        const records = [
            { name: "Auction", data: [] },
            { name: "Listing", data: [] },
        ];

        let iterations = 0;
        switch (type) {
            case TIME_FILTER_BUTTON[3].value: // ThreeMonth
                iterations = 3;
                for (let i = iterations - 1; i >= 0; i--) {
                    const month = currentDate.getMonth() - i;
                    const year =
                        currentDate.getFullYear() - (month < 0 ? 1 : 0);
                    const formattedMonth = month < 0 ? month + 12 : month + 1;
                    timePeriod.push(
                        `${year}-${formattedMonth.toString().padStart(2, "0")}`
                    );
                }
                break;
            case TIME_FILTER_BUTTON[2].value: // Month
                iterations = 30;
                for (let i = iterations - 1; i >= 0; i--) {
                    const date = new Date(currentDate);
                    date.setDate(date.getDate() - i);
                    timePeriod.push(formatDate(date));
                }
                break;
            case TIME_FILTER_BUTTON[1].value: // Week
                iterations = 7;
                for (let i = iterations - 1; i >= 0; i--) {
                    const date = new Date(currentDate);
                    date.setDate(date.getDate() - i);
                    timePeriod.push(formatDate(date));
                }
                break;
            case TIME_FILTER_BUTTON[0].value: // Day
                iterations = 24;
                for (let i = iterations - 1; i >= 0; i--) {
                    const date = new Date(currentDate);
                    date.setHours(date.getHours() - i);
                    timePeriod.push(formatDate(date, true));
                }
                break;
            default:
                return data;
        }

        records.forEach(
            (record) => (record.data = new Array(iterations).fill(0))
        );

        data.forEach((item) => {
            const index = timePeriod.indexOf(item.date);
            if (index !== -1) {
                records[0].data[index] = item.Auction || 0;
                records[1].data[index] = item.Listing || 0;
            }
        });

        return { timePeriod, records };
    };

    const formatDate = (date, includeHours = false) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        if (includeHours) {
            const hours = date.getHours().toString().padStart(2, "0");
            return `${year}-${month}-${day}-${hours}`;
        }
        return `${year}-${month}-${day}`;
    };

    const getData = async () => {
        if (!state.payload.itemCollection || !state.payload.chainId) return;
        try {
            let query = {
                ...state.payload,
            };
            const { data } = await getPriceDistributionService(query);

            let Format = FormatData(data?.data, state.payload.type);
            // const timePeriod = data.data.map((item) => item.date);
            // const records = [
            //     {
            //         name: "Auction",
            //         data: data.data.map((item) => item.Auction || 0),
            //     },
            //     {
            //         name: "Listing",
            //         data: data.data.map((item) => item.Listing || 0),
            //     },
            // ];
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    data: Format || {},
                    // data: { timePeriod, records } || [],
                },
            });
        } catch (error) {
            console.log("error:", error);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    data: [],
                },
            });
        }
    };

    useEffect(() => {
        if (!itemCollection || !chainId) return;
        dispatch({
            type: STATE.QUERYCHANGE,
            payload: {
                itemCollection,
                chainId,
            },
        });
    }, [itemCollection, chainId]);

    useEffect(() => {
        if (!state.state) return;
        getData();
    }, [state]);

    const handleTimeChange = (value) => {
        if (!value) return;
        dispatch({
            type: STATE.TYPECHANGE,
            payload: value,
        });
    };

    return {
        ...state,
        handleTimeChange,
    };
};

export const useFloorAnalyticsChart = ({
    itemCollection = "",
    chainId = null,
}) => {
    const initialState = {
        loading: false,
        data: {},
        state: null,
        payload: {
            itemCollection: "",
            chainId: "",
            type: "ThreeMonth",
        },
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.QUERYCHANGE:
                return {
                    ...state,
                    state: STATE.QUERYCHANGE,
                    loading: true,
                    payload: {
                        ...state.payload,
                        itemCollection: payload.itemCollection,
                        chainId: payload.chainId,
                    },
                };
            case STATE.ACCOUNTCHANGE:
                return {
                    ...state,
                    state: STATE.ACCOUNTCHANGE,
                    payload: {
                        ...state.payload,
                    },
                };
            case STATE.TYPECHANGE:
                return {
                    ...state,
                    state: STATE.TYPECHANGE,
                    payload: {
                        ...state.payload,
                        type: payload,
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
                    data: payload.data,
                    loading: false,
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const getData = async () => {
        if (!state.payload.itemCollection || !state.payload.chainId) return;
        try {
            let query = {
                ...state.payload,
            };
            dispatch({
                type: STATE.STARTLOADING,
            });
            const { data } = await getFloorAnalyticsService(query);

            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    data: data?.data || {},
                },
            });
        } catch (error) {
            console.log("error:", error);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    data: [],
                },
            });
        }
    };

    useEffect(() => {
        if (!itemCollection || !chainId) return;
        dispatch({
            type: STATE.QUERYCHANGE,
            payload: {
                itemCollection,
                chainId,
            },
        });
    }, [itemCollection, chainId]);

    useEffect(() => {
        if (!state.state) return;
        getData();
    }, [state]);

    const handleTimeChange = (value) => {
        if (!value) return;
        dispatch({
            type: STATE.TYPECHANGE,
            payload: value,
        });
    };

    return {
        ...state,
        handleTimeChange,
    };
};

export const useOwnerDistributionChart = ({
    itemCollection = "",
    chainId = null,
}) => {
    const initialState = {
        loading: false,
        data: {},
        state: null,
        payload: {
            itemCollection: "",
            chainId: "",
        },
    };
    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.QUERYCHANGE:
                return {
                    ...state,
                    state: STATE.QUERYCHANGE,
                    loading: true,
                    payload: {
                        ...state.payload,
                        itemCollection: payload.itemCollection,
                        chainId: payload.chainId,
                    },
                };
            case STATE.ACCOUNTCHANGE:
                return {
                    ...state,
                    state: STATE.ACCOUNTCHANGE,
                    payload: {
                        ...state.payload,
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
                    data: payload.data,
                    loading: false,
                };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const getData = async () => {
        if (!state.payload.itemCollection || !state.payload.chainId) return;
        try {
            let query = {
                ...state.payload,
            };
            const { data } = await getOwnersDistributionService(query);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    data: data?.data || {},
                },
            });
        } catch (error) {
            console.log("error:", error);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    data: {},
                },
            });
        }
    };

    useEffect(() => {
        if (!itemCollection || !chainId) return;
        dispatch({
            type: STATE.QUERYCHANGE,
            payload: {
                itemCollection,
                chainId,
            },
        });
    }, [itemCollection, chainId]);

    useEffect(() => {
        if (!state.state) return;
        getData();
    }, [state]);

    return {
        ...state,
    };
};

export const useUserRewardData = () => {
    const {
        walletDetalis: { account, status },
    } = useSelector(globalState);
    const initialState = {
        loading: false,
        data: {},
        state: null,
        payload: {},
    };
    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.ACCOUNTCHANGE:
                return {
                    ...state,
                    state: STATE.ACCOUNTCHANGE,
                    payload: {
                        ...state.payload,
                        account,
                    },
                };
            case STATE.STARTLOADING:
                return {
                    ...state,
                    state: null,
                    loading: true,
                };
            case STATE.STOPLOADING:
                return {
                    ...state,
                    state: null,
                    loading: false,
                };

            case STATE.STOREDATA:
                return {
                    ...state,
                    state: null,
                    data: payload.data,
                    loading: false,
                };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const getData = async () => {
        try {
            dispatch({
                type: STATE.STARTLOADING,
            });
            let query = {
                ...state.payload,
            };
            const { data } = await getUserRewardDataService(query);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    data: data?.data || {},
                },
            });
        } catch (error) {
            dispatch({
                type: STATE.STOPLOADING,
            });
            console.log("error:", error);
        }
    };

    useEffect(() => {
        if (!state.state || !state.payload.account) return;
        getData();
    }, [state]);

    useEffect(() => {
        if (!account) return;
        dispatch({
            type: STATE.ACCOUNTCHANGE,
        });
    }, [account, status]);

    return {
        ...state,
    };
};

export const useUserRewardHistory = () => {
    const {
        walletDetalis: { account, status },
    } = useSelector(globalState);
    const initialState = {
        loading: false,
        items: [],
        state: null,
        hasMore: false,
        page: 1,
        limit: 50,
        payload: {
            account,
        },
    };
    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.ACCOUNTCHANGE:
                return {
                    ...state,
                    state: STATE.ACCOUNTCHANGE,
                    payload: {
                        ...state.payload,
                        account,
                    },
                };
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
                    limit: payload,
                };
            case STATE.STARTLOADING:
                return {
                    ...state,
                    state: null,
                    loading: true,
                };
            case STATE.STOPLOADING:
                return {
                    ...state,
                    state: null,
                    loading: false,
                };
            case STATE.STOREDATA:
                return {
                    ...state,
                    state: null,
                    loading: false,
                    items:
                        state.page === 1
                            ? payload.items
                            : [...state.items, ...payload.items],
                    hasMore: payload?.totalPages > state.page,
                };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const getData = async () => {
        try {
            dispatch({
                type: STATE.STARTLOADING,
            });
            let query = {
                ...state.payload,
                page: state.page,
                limit: state.limit,
            };
            const { data } = await getUserRewardHistoryService(query);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    items: data?.data || [],
                    totalPages: data?.totalPages || 0,
                },
            });
        } catch (error) {
            dispatch({
                type: STATE.STOPLOADING,
            });
            console.log("error:", error);
        }
    };

    useEffect(() => {
        if (!state.state || !state.payload.account) return;
        getData();
    }, [state]);

    useEffect(() => {
        if (!account) return;
        dispatch({
            type: STATE.ACCOUNTCHANGE,
        });
    }, [account, status]);

    const handlePageChange = () => {
        if (!state.hasMore) return;
        dispatch({
            type: STATE.PAGECHANGE,
        });
    };

    const handleLimitChange = (value) => {
        if (!value) return;
        dispatch({ type: STATE.LIMITCHANGE, payload: value });
    };

    return {
        ...state,
        handlePageChange,
        handleLimitChange,
    };
};

export const useRewardLeaderBoard = () => {
    const {
        walletDetalis: { account, status },
    } = useSelector(globalState);
    const initialState = {
        loading: false,
        items: [],
        state: null,
        hasMore: false,
        page: 1,
        limit: 50,
        payload: {
            account,
        },
    };
    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.ACCOUNTCHANGE:
                console.log("calledaction");
                return {
                    ...state,
                    state: STATE.ACCOUNTCHANGE,
                    payload: {
                        ...state.payload,
                        account,
                    },
                };
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
                    limit: payload,
                };
            case STATE.SEARCH:
                return {
                    ...state,
                    state: STATE.SEARCH,
                    page: 1,
                    payload: {
                        ...state.payload,
                        search: payload,
                    },
                };
            case STATE.STARTLOADING:
                return {
                    ...state,
                    state: null,
                    loading: true,
                };
            case STATE.STOPLOADING:
                return {
                    ...state,
                    state: null,
                    loading: false,
                };
            case STATE.STOREDATA:
                return {
                    ...state,
                    state: null,
                    loading: false,
                    items:
                        state.page === 1
                            ? payload.items
                            : [...state.items, ...payload.items],
                    hasMore: payload?.totalPages > state.page,
                };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const getData = async () => {
        try {
            dispatch({
                type: STATE.STARTLOADING,
            });
            let query = {
                ...state.payload,
                page: state.page,
                limit: state.limit,
            };
            const { data } = await getLeaderBoardService(query);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    items: data?.data || [],
                    totalPages: data?.totalPages || 0,
                },
            });
        } catch (error) {
            dispatch({
                type: STATE.STOPLOADING,
            });
            console.log("error:", error);
        }
    };

    useEffect(() => {
        if (!state.state) return;
        let timer;
        if (state.state === STATE.SEARCH) {
            timer = setTimeout(() => {
                getData();
            }, 500);
        } else {
            getData();
        }
        return () => clearTimeout(timer);
    }, [state]);

    useEffect(() => {
        if (!status) return;
        dispatch({
            type: STATE.ACCOUNTCHANGE,
        });
    }, [account, status]);

    const handlePageChange = () => {
        if (!state.hasMore) return;
        dispatch({
            type: STATE.PAGECHANGE,
        });
    };

    const handleLimitChange = (value) => {
        if (!value) return;
        dispatch({ type: STATE.LIMITCHANGE, payload: value });
    };

    const handleSearch = (e) => {
        dispatch({
            type: STATE.SEARCH,
            payload: e.target.value,
        });
    };

    return {
        ...state,
        handlePageChange,
        handleLimitChange,
        handleSearch,
    };
};

export const useUserAchievements = () => {
    const {
        walletDetalis: { account, status },
    } = useSelector(globalState);
    const initialState = {
        loading: false,
        data: {},
        state: null,
        payload: {},
    };
    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.ACCOUNTCHANGE:
                return {
                    ...state,
                    state: STATE.ACCOUNTCHANGE,
                    payload: {
                        ...state.payload,
                        account,
                    },
                };
            case STATE.STARTLOADING:
                return {
                    ...state,
                    state: null,
                    loading: true,
                };
            case STATE.STOPLOADING:
                return {
                    ...state,
                    state: null,
                    loading: false,
                };

            case STATE.STOREDATA:
                return {
                    ...state,
                    state: null,
                    data: payload.data,
                    loading: false,
                };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const getData = async () => {
        try {
            dispatch({
                type: STATE.STARTLOADING,
            });
            let query = {
                ...state.payload,
            };
            const { data } = await getUserAchievementsService(query);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    data: data?.data || {},
                },
            });
        } catch (error) {
            dispatch({
                type: STATE.STOPLOADING,
            });
            console.log("error:", error);
        }
    };

    useEffect(() => {
        if (!state.state || !state.payload.account) return;
        getData();
    }, [state]);

    useEffect(() => {
        if (!account) return;
        dispatch({
            type: STATE.ACCOUNTCHANGE,
        });
    }, [account, status]);

    return {
        ...state,
    };
};

export const useAllAchievements = () => {
    const {
        userDetails,
        walletDetalis: { account, status },
    } = useSelector(globalState);

    const initialState = {
        loading: false,
        state: null,
        data: { achieved: [], remaining: [] },
        hasMore: false,
        count: 0,
        page: 1,
        limit: 32,
        payload: {},
    };

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.ACCOUNTCHANGE:
                return {
                    ...state,
                    state: STATE.ACCOUNTCHANGE,
                    page: 1,
                    payload: {
                        ...state.payload,
                        account,
                    },
                };
            case STATE.PAGECHANGE:
                return {
                    ...state,
                    state: STATE.PAGECHANGE,
                    page: state.page + 1,
                };
            case STATE.STARTLOADING:
                return {
                    ...state,
                    state: null,
                    loading: true,
                };
            case STATE.STOPLOADING:
                return {
                    ...state,
                    state: null,
                    loading: false,
                };
            case STATE.STOREDATA:
                let sortedData;
                if (state.page === 1) {
                    sortedData = payload.data;
                } else {
                    sortedData = {
                        achieved: [...state.data.achieved],
                        remaining: [
                            ...state.data.remaining,
                            ...payload.data.remaining,
                        ],
                    };
                }
                return {
                    ...state,
                    state: null,
                    loading: false,
                    count: payload.count,
                    data: sortedData,
                    hasMore: state.page < payload.totalPages,
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const getData = async () => {
        try {
            dispatch({
                type: STATE.STARTLOADING,
            });
            let query = {
                ...state.payload,
                page: state.page,
                limit: state.limit,
            };
            const { data } = await getAllAchievementsService(query);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    data: data?.data || [],
                    totalPages: data?.totalPages || 0,
                    count: data?.count || 0,
                },
            });
        } catch (error) {
            dispatch({
                type: STATE.STOPLOADING,
            });
            console.log("error:", error);
        }
    };

    useEffect(() => {
        if (!state.state || !state.payload.account) return;
        getData();
    }, [state.state, state.page]);

    useEffect(() => {
        dispatch({
            type: STATE.ACCOUNTCHANGE,
        });
    }, [account, status]);

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
