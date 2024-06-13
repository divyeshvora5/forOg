import { Axios } from "@/utils";

export const getTopSellerService = async (params) => {
	return await Axios.get("state/top-seller", {
		params: params,
	});
};

export const getCollectorsService = async (params) => {
	return await Axios.get("state/collectors", {
		params: params,
	});
};

export const getRankingService = async (params) => {
	return await Axios.get("state", {
		params: params,
	});
};

export const getPopularCollectionService = async (params) => {
	return await Axios.get("collection/tranding", {
		params: params,
	});
};
