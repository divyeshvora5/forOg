import { Axios } from "@/utils";

export const GetBidService = async (params) => {
	return await Axios.get("bid", {
		params: params,
	});
};
