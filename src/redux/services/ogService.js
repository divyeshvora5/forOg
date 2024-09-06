import { Axios } from "@/utils";

export const getOgCollectionService = async (params) => {
    return await Axios.get("og/collection", {
        params: {
            ...params,
        },
    });
};
