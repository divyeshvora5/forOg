import { Axios } from "@/utils";

export const getUserRewardDataService = async (params) => {
    return await Axios.get("reward", {
        params: params,
    });
};

export const getUserRewardHistoryService = async (params) => {
    return await Axios.get("reward/history", {
        params: params,
    });
};

export const getLeaderBoardService = async (params) => {
    return await Axios.get("reward/leaderboard", {
        params: params,
    });
};

export const getUserAchievementsService = async (params) => {
    return await Axios.get("reward/achievement", {
        params: params,
    });
};

export const collectAchievementService = async (payload) => {
    return await Axios.post("reward/achievement", payload);
};

export const getAllAchievementsService = async (params) => {
    return await Axios.get("reward/all-achievements", {
        params: params,
    });
};


