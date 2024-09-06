import ItemDetailComponent from "@/components/ItemDetails/ItemDetailComponent";
import { FRONT_END_DOMAIN } from "@/constant";
import { GetNftDetailsService } from "@/redux/services/itemServices";
import React from "react";

export async function getServerSideProps(context) {
    const { query } = context;
    const { itemCollection, tokenId } = query;

    try {
        const { data } = await GetNftDetailsService({
            itemCollection: itemCollection,
            tokenId: tokenId,
        });

        const {
            chainId,
            animation_url,
            description,
            image,
            name,
            supply,
            usdPrice,
            listingMinPrice,
            listingSymbol,
            collectionName,
            collectionLogo,
        } = data?.data || {};

        const ogImageUrl = `${FRONT_END_DOMAIN}/api/og/item?name=${encodeURIComponent(
            name || ""
        )}&imageUrl=${encodeURIComponent(
            image || ""
        )}&collectionName=${encodeURIComponent(
            collectionName || ""
        )}&collectionLogo=${encodeURIComponent(
            collectionLogo || ""
        )}&usdPrice=${encodeURIComponent(
            usdPrice || ""
        )}&animation_url=${encodeURIComponent(
            animation_url || ""
        )}&price=${encodeURIComponent(
            listingMinPrice || ""
        )}&symbol=${encodeURIComponent(
            listingSymbol || ""
        )}&supply=${encodeURIComponent(
            supply || ""
        )}&chainId=${encodeURIComponent(chainId || "")}`;

        return {
            props: {
                ogData: {
                    url: `${FRONT_END_DOMAIN}/item/details?itemCollection=${encodeURIComponent(
                        itemCollection || ""
                    )}&tokenId=${encodeURIComponent(tokenId || "")}`,
                    imgUrl: ogImageUrl,
                    title: name || "",
                    description: description || "",
                },
            },
        };
    } catch (error) {
        console.error("Error fetching NFT details:", error);

        return {
            props: {
                ogData: {
                    url: "",
                    imgUrl: "",
                    title: "Error",
                    description: "Unable to fetch details.",
                },
            },
        };
    }
}

const details = () => {
    return (
        <>
            <ItemDetailComponent />
        </>
    );
};

export default details;

// const {
//     chainId,
//     animation_url,
//     description,
//     image,
//     name,
//     supply,
//     usdPrice,
//     listingMinPrice,
//     listingSymbol,
//     collectionName,
//     collectionLogo,
//     asset_type,
//     category,
//     collectionId,
//     creator,
//     dayVolume,
//     favourite,
//     floorDecimal,
//     floorPrice,
//     floorSymbol,
//     holders,
//     hourVolume,
//     id,
//     isAnimSynced,
//     isETH,
//     isSynced,
//     isThumbSynced,
//     lastListedTimestamp,
//     lastSaleTimestamp,
//     likeCount,
//     likes,
//     listingIn,
//     monthVolume,
//     onSale,
//     timestamp,
//     type,
//     updatedAt,
//     uri,
//     views,
//     viewsCount,
//     weekVolume,
//     listingCurrency,
//     listingDecimal,
//     creatorName,
//     creatorLogo,
//     collectionAddress,
//     liked,
//     owners,
//     balance,
// } = data?.data;
