import BlogDetailsMain from "@/components/Blogs/BlogDetailsMain";
import { FRONT_END_DOMAIN } from "@/constant/ogConstant";
import { getBlogDetailsServices } from "@/redux/services/globalServices";
import React from "react";

export async function getServerSideProps(context) {
    // const { id } = context.params;
    const blogId = context.params?.id?.split("-").pop();
    try {
        const { data } = await getBlogDetailsServices({
            id: blogId,
        });
        const blogDetails = data?.data || {};
        const title = blogDetails?.title || "";
        const coverUrl = blogDetails?.image || "";

        const ogImageUrl = `${FRONT_END_DOMAIN}/api/og/blog?title=${encodeURIComponent(
            title || ""
        )}&coverUrl=${encodeURIComponent(coverUrl)}`;

        return {
            props: {
                ogData: {
                    url: `${FRONT_END_DOMAIN}/rewards/leaderBoard`,
                    imgUrl: ogImageUrl,
                    title: "LeaderBoard",
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

const index = () => {
    return (
        <>
            <BlogDetailsMain />
        </>
    );
};

export default index;
