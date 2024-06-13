import { Axios } from "@/utils";

export const signForListingService = async (payload) => {
	return await Axios.post("sign/sign-listing", payload);
};

export const signForBuyListService = async (payload) => {
	return await Axios.post("sign/sign-buylisting", payload);
};

export const signForAuctionServies = async (payload) => {
	return await Axios.post("sign/sign-auction", payload);
};

export const signForBidService = async (payload) => {
	return await Axios.post("sign/sign-bid", payload);
};

export const signForCancleAuction = async (payload) => {
	return Axios.post("sign/sign-cancle-auction", payload);
};

export const signForCollectAuctionPayout = async (payload) => {
	return Axios.post("sign/sign-for-collect-auction-payout", payload);
};

export const signForCollectAuctionToken = async (payload) => {
	return Axios.post("sign/sign-for-collect-auction-tokens", payload);
};

export const signForCancleListing = async (payload) => {
	return Axios.post("sign/sign-cancle-listing", payload);
};

export const signForMakeOffer = async (payload) => {
	return Axios.post("sign/sign-make-offer", payload);
};

export const signForCancleOffer = async (payload) => {
	return Axios.post("sign/sign-cancle-offer", payload);
};

export const signForAcceptOffer = async (payload) => {
	return Axios.post("sign/sign-for-acceptoffer", payload);
};

export const signForMemberShip = async (payload) => {
	return Axios.post("sign/sign-membership", payload);
};


export const signForWalletConnect = async (payload) => {
	return Axios.post("sign/sign-walletconnect", payload);
};