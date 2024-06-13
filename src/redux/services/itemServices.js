import { Axios } from "@/utils";

export const getAuctionServices = async (query) => {
	return await Axios.get("item/auctions", {
		params: query,
	});
};

export const getRecentlySoldItemsServices = async (query) => {
	return await Axios.get("item/recently-sold", {
		params: query,
	});
};

export const getTrandingNftsServices = async (params) => {
	return await Axios.get("item/trending-nft", {
		params: params,
	});
};

export const getPopulerCollectionService = async (params) => {
	return await Axios.get("collection/popular-collection", {
		params: params,
	});
};

export const getHotPicksServices = async (params) => {
	return await Axios.get("item/hot-picks", {
		params: params,
	});
};

export const itemLikeService = async (payload) => {
	return await Axios.post("like/item-like", payload);
};

export const collectionLikeService = async (payload) => {
	return await Axios.post("like/collection-like", payload);
};

export const getAllItemsServices = async (params) => {
	return await Axios.get("item/explore-item", {
		params: params,
	});
};

export const FollowService = async (payload) => {
	return await Axios.post("follow", payload);
};

export const GetNftDetailsService = async (params) => {
	return await Axios.get("item/item-details", {
		params: params,
	});
};

export const GetNftListingService = async (params) => {
	return await Axios.get("item/item-listings", {
		params: params,
	});
};

export const GetItemBestOffer = async (params) => {
	return await Axios.get("item/item-best-offer", {
		params: params,
	});
};

export const UpdateView = async (body) => {
	return await Axios.post("view", body);
};

export const getUserOfferServices = async (params) => {
	return await Axios.get("item/user-offer", {
		params: params,
	});
};