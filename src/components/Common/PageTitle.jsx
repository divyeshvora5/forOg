"use client";

import { FRONT_END_DOMAIN } from "@/constant";
import Head from "next/head";
import React, { useEffect } from "react";

const BASE_TITLE = "TesseractX";

export default function PageTitle({
    title = "TesseractX",
    description = "TesseractX is the ultimate rewarding, multi-chain, community-centric digital collectibles marketplace",
    imageUrl = "",
    id = "",
    coverUrl = "",
}) {
    // useEffect(() => {
    //     window.document.title = `${BASE_TITLE} - ${title}`;
    // }, []);
    const imageURL = `${FRONT_END_DOMAIN}/api/og/general`;
    const newTitle = `${title} | ${BASE_TITLE}`

    return (
        <Head>
            <meta name="description" content={description} />
            <title>{`${title} | ${BASE_TITLE}`}</title>
            {/* <meta property="og:type" content="website" />
            <meta
                property="og:url"
                content={`${FRONT_END_DOMAIN}/explore/collection/${id}`}
            />
            <meta property="og:title" content={newTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageURL} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={newTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageURL} /> */}
        </Head>
    );
}
