import { Axios } from "@/utils";

export const getUserService = async (address, params = {}) => {
    return await Axios.get(`user/user_info/${address}`, {
        params: {
            ...params,
        },
    });
};

export const getAllCategoryService = async () => {
    return await Axios.get("category");
};

export const getGlobalSearchResultService = async (params) => {
    return await Axios.get("item/global-search", {
        params: params,
    });
};

export const getAllTokensServices = async (params) => {
    return await Axios.get("item/tokens", {
        params: params,
    });
};

export const getTokenRateServices = async (params) => {
    return await Axios.get("token/rate", {
        params: params,
    });
};

//Blog and Blog comments

export const getAllBlogsServices = async (params) => {
    return await Axios.get("blog/getmediumblog", {
        params: params,
    });
};

export const getCommentsServices = async (params) => {
    return await Axios.get("comment", {
        params: params,
    });
};

export const addCommentService = async (payload) => {
    return await Axios.post("comment", payload);
};

export const getBlogDetailsServices = async (params) => {
    return await Axios.get("blog/getmediumblogdetails", {
        params,
    });
};

export const getAllBlogTagsServices = async (params) => {
    return await Axios.get("blog/tags", {
        params: params,
    });
};

//User Details Update

export const updateUserService = async (payload) => {
    return await Axios.patch("user", payload, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            maxContentLength: 50 * 1024 * 1024, // 50MB
            maxBodyLength: 50 * 1024 * 1024, // 50MB
        }
    );
};

export const checkNameUniqueServices = async (payload) => {
    return await Axios.post("user/uniqueName", payload);
};

//Profile Page Services

export const getEventsServices = async (params) => {
    return await Axios.get("events", {
        params: params,
    });
};

export const getFollowService = async (params) => {
    return await Axios.get("follow", {
        params: params,
    });
};

export const getFavoriteItemsService = async (params) => {
    return await Axios.get("like/favourite-items", {
        params: params,
    });
};

export const getUsersCollectionsService = async (params) => {
    return await Axios.get("collection", {
        params: params,
    });
};

export const getUserInventoryService = async (params) => {
    return await Axios.get("item/explore-item", {
        params: params,
    });
};

// contact us page service

export const createContactUsServices = async (data) => {
    return await Axios.post("contactUs/contact", data);
};

export const getOwnerDetailsService = async (params) => {
    return await Axios.get("user/owner", {
        params: params,
    });
};

export const subscribeService = async (payload) => {
    return await Axios.post("subscribe/add_subscriberslist", payload);
};

// Public-Profile services

export const getPublicCollectionService = async (params) => {
    return await Axios.get("collection/public-collection", {
        params: params,
    });
};



export const addNotificationPreference = async (params) => {
    return await Axios.post(`user/user_addNotificationPreference`, params);
};

export const addFCMkeys = async (data) => {
    return await Axios.post(`user/user_notifications`, data);
};

export const addNotificationEmail = async (data) => {
    return await Axios.post(`user/user_addNotificationEmail`, data);
};

export const removeNotificationEmail = async (data) => {
    return await Axios.post(`user/user_removeNotificationEmail`, data);
};