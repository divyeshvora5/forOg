import {
    collectionLikeAction,
    itemLikeAction,
} from "@/redux/actions/globalAction";
import { globalState } from "@/redux/reducer/globalSlice";
import {
    getAuctionServices,
    getHotPicksServices,
    getPopulerCollectionService,
    getRecentlySoldItemsServices,
    getTrandingNftsServices,
} from "@/redux/services/itemServices";
import { getTopSellerService } from "@/redux/services/stateServices";
import { useMemo } from "react";
import { useReducer } from "react";
import { useCallback } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "@/utils";

const orderOption = [
    { value: "Recently Created", label: "Recently Created" },
    { value: "Oldest", label: "Oldest" },
];

const STATE = {
    PAGECHANGE: "PAGECHANGE",
    STOPLOADING: "STOPLOADING",
    ACCOUNTCHANGE: "ACCOUNTCHANGE",
    CATEGORYSELECT: "CATEGORYSELECT",
    ORDERCHANGE: "ORDERCHANGE",
    STOREDATA: "STOREDATA",
    STARTLOADING: "STARTLOADING",
    // STOPLOADING: "STOPLOADING"
};

export const useLikeItem = () => {
    const {
        walletDetalis: { account },
    } = useSelector(globalState);

    const dispatch = useDispatch();

    const handleLike = useCallback(
        (id) => {
            if (!account) {
                return Toast.error("Please connect your wallet");
            }

            dispatch(
                itemLikeAction({
                    id: id,
                    account: account,
                })
            );
        },
        [account]
    );

    return {
        handleLike,
    };
};

export const useLikeCollection = () => {
    const {
        walletDetalis: { account },
    } = useSelector(globalState);

    const dispatch = useDispatch();

    const handleLike = useCallback(
        (id) => {
            if (!account) {
                return Toast.error("Please connect your wallet");
            }

            dispatch(
                collectionLikeAction({
                    id: id,
                    account: account,
                })
            );
        },
        [account]
    );

    return {
        handleLike,
    };
};

export const useHomeAuction = () => {
    const {
        walletDetalis: { account, chainId, status },
    } = useSelector(globalState);

    const [auctions, setAuctions] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchAuctions = async () => {
        try {
            setLoading(true);
            const { data } = await getAuctionServices({
                limit: 15,
                status: "Created",
                account,
                chainId,
            });
            setAuctions(data?.data);
            // console.log("data", data);
        } catch (err) {
            console.log("[MainAuction]", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!status) return;
        fetchAuctions();
    }, [status, chainId, account]);

    return {
        auctions,
        loading,
        fetchAuctions,
    };
};

export const usePopulerCollection = () => {
    const {
        walletDetalis: { account, chainId, status },
    } = useSelector(globalState);

    const [populerCollection, setPopulerCollection] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!status) return;
        (async () => {
            try {
                setLoading(true);
                const { data } = await getPopulerCollectionService({
                    chainId: chainId,
                    account: account,
                });
                setPopulerCollection(data?.data || []);
            } catch (err) {
                console.log("err", err);
            } finally {
                setLoading(false);
            }
        })();
    }, [status, chainId, account]);

    return {
        populerCollection,
        loading,
    };
};

export const useTrandingNfts = () => {
    const {
        walletDetalis: { account, chainId, status },
    } = useSelector(globalState);

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!status) return;
        (async () => {
            try {
                setLoading(true);
                const { data } = await getTrandingNftsServices({
                    account,
                    chainId,
                });
                setItems(data.data || []);
            } catch (err) {
                console.log("err", err);
            } finally {
                setLoading(false);
            }
        })();
    }, [status, account, chainId]);

    return {
        items,
        loading,
    };
};

export const useHotPicsNfts = () => {
    const {
        categorys,
        walletDetalis: { account, chainId, status },
    } = useSelector(globalState);

    const initialState = {
        loading: false,
        items: [],
        limit: 20,
        count: 0,
        totalPages: 0,
        page: 1,
        state: null,
        hasMore: false,
        payload: {
            extraFilter: "",
            account: account,
            chainId: chainId,
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
                        category: payload ? [payload] : "",
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

    const getHotPics = async () => {
        if (!state.state) return;
        try {
            dispatch({
                type: STATE.STARTLOADING,
            });

            const query = {
                ...state.payload,
                page: state.page,
                limit: state.limit || 20,
            };

            const { data } = await getHotPicksServices(query);
            dispatch({
                type: STATE.STOREDATA,
                payload: {
                    items: data.data,
                    count: data.count,
                    totalPages: data.totalPages,
                },
            });
        } catch (err) {
            console.log("[HotPics]", err);
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
    }, [status, account, chainId]);

    useEffect(() => {
        getHotPics();
    }, [state]);

    const orderChange = (e) => {
        dispatch({
            type: STATE.ORDERCHANGE,
            payload: e.value,
        });
    };

    const handleCategorySelect = (name) => {
        dispatch({
            type: STATE.CATEGORYSELECT,
            payload: name,
        });
    };

    const handlePageChange = () => {
        dispatch({
            type: STATE.PAGECHANGE,
        });
    };

    return {
        categorys,
        ...state,
        orderOption,
        orderChange,
        handleCategorySelect,
        handlePageChange,
    };
};

export const useTopSeller = () => {
    const {
        walletDetalis: { chainId },
    } = useSelector(globalState);

    const [topSellers, setTopSellers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const { data } = await getTopSellerService({
                    chainId: chainId,
                    time: "Month",
                });
                setTopSellers(data?.data);
            } catch (err) {
                console.log("[Seller]", err);
            } finally {
                setLoading(false);
            }
        })();
    }, [chainId]);

    return {
        topSellers,
        loading,
    };
};

export const useRecentlySoldItems = () => {
    const {
        walletDetalis: { account, chainId, status },
    } = useSelector(globalState);

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!status) return;
        (async () => {
            try {
                setLoading(true);
                const { data } = await getRecentlySoldItemsServices({
                    limit: 20,
                    chainId: chainId,
                    account: account,
                });
                setItems(data?.data || []);
            } catch (err) {
                console.log("err", err);
            } finally {
                setLoading(false);
            }
        })();
    }, [status, chainId, account]);

    return {
        items,
        loading,
    };
};
