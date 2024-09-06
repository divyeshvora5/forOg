import HomeMainComponent from "@/components/Home/HomeMainComponent/HomeMainComponent";
import { FRONT_END_DOMAIN } from "@/constant";
import React from "react";

export async function getServerSideProps(context) {
    const ogImageUrl = `${FRONT_END_DOMAIN}/api/og/home`;
    return {
        props: {
            ogData: {
                url: `${FRONT_END_DOMAIN}/`,
                imgUrl: ogImageUrl,
                title: "TesseractX",
                description:
                    "TesseractX is the ultimate rewarding, multi-chain, community-centric digital collectibles marketplace.",
            },
        },
    };
}

const index = () => {
    return (
        <>
            <HomeMainComponent />
        </>
    );
};

export default index;
