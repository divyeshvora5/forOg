import LeaderBoardMainComponent from "@/components/rewards/LeaderBoardMainComponent";
import { FRONT_END_DOMAIN } from "@/constant/ogConstant";
import { getLeaderBoardService } from "@/redux/services/rewardService";
import React from "react";

export async function getServerSideProps(context) {
    try {
        const { data } = await getLeaderBoardService({
            sortBy: "point",
            sortOrder: "desc",
            page: 1,
            limit: 5,
        });
        const dataArray = data?.data || [];
        const points1 = dataArray[0]?.points || 0;
        const points2 = dataArray[1]?.points || 0;
        const points3 = dataArray[2]?.points || 0;

        const ogImageUrl = `${FRONT_END_DOMAIN}/api/og/leaderBoard?points1=${encodeURIComponent(
            points1 || ""
        )}&points2=${encodeURIComponent(points2)}&points3=${encodeURIComponent(points3)}`;

        return {
            props: {
                ogData: {
                    url: `${FRONT_END_DOMAIN}/rewards/leaderBoard`,
                    imgUrl: ogImageUrl,
                    title: "LeaderBoard",
                    // description: description,
                },
            },
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                ogData: {
                    url: "",
                    imgUrl: "",
                    title: "",
                    description: "Failed to fetch data",
                },
                error: "Failed to fetch data.",
            },
        };
    }
}

const leaderBoard = () => {
    return (
        <>
            <LeaderBoardMainComponent />
        </>
    );
};

export default leaderBoard;
