import { Axios } from "@/utils";

export const GetItemHistoryService = async (params) => {
	return await Axios.get("events/item-history", {
		params: params,
	});
};
