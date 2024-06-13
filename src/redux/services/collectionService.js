import { Axios } from "@/utils";

export const uploadCollectionAssetService = async (payload) => {
    return await Axios.post("collection/upload_assets", payload, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        maxContentLength: 50 * 1024 * 1024, // 50MB
        maxBodyLength: 50 * 1024 * 1024, // 50MB
    });
};

export const getAllCollectionService = async (params) => {
    return await Axios.get("collection", {
        params: {
            ...params,
        },
    });
};

export const getAllCollectionItemsService = async (params) => {
    return await Axios.get("collection/collection-items", {
        params: {
            ...params,
        },
    });
};
export const getTopOwnersOfCollectionService = async (params) => {
    return await Axios.get("yota/collection/owners", {
        params: {
            ...params,
        },
    });
};

export const getCollectionHistoryService = async (params) => {
    return await Axios.get("events/collection-history", {
        params: {
            ...params,
        },
    });
};
export const getOwnersDistributionService = async (params) => {
    return await Axios.get("yota/collection/owner-distribution", {
        params: {
            ...params,
        },
    });
};

export const getPriceDistributionService = async (params) => {
    return await Axios.get("yota/collection/price-distribution", {
        params: {
            ...params,
        },
    });
};

export const getFloorAnalyticsService = async (params) => {
    return await Axios.get("yota/collection/floor-data", {
        params: {
            ...params,
        },
    });
};

//home page
export const getTopCollectionService = async (params) => {
    return await Axios.get("collection/popular-collection", {
        params: params,
    });
};

export const updateCollectionLinksService = async (payload) => {
    return await Axios.patch("collection/update-links", payload, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};
