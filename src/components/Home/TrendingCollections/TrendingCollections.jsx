import { useTrendingCollection } from "@/hooks/useHome";
import { PATH_DASHBOARD } from "@/routes/paths";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import TrendingCollectionHoverCards from "./TrendingCollectionHoverCards";
import ImageLoader from "@/components/Common/ImageLoader";

const TrendingCollections = () => {
    const router = useRouter();
    const { trendingCollections, loading } = useTrendingCollection();
    const [groupedItems, setGroupedItems] = useState([]);

    const organizeItems = (items) => {
        if (items && items?.length === 0) return [];
        const organizedGroups = [1, 2, 8, 24];
        const organizedItems = [];

        let startIndex = 0;
        for (let i = 0; i < organizedGroups.length; i++) {
            const groupCount = organizedGroups[i];
            const endIndex = startIndex + groupCount;

            if (startIndex < items.length) {
                organizedItems.push(items.slice(startIndex, endIndex));
                startIndex = endIndex;
            }
        }
        return setGroupedItems(organizedItems);
    };

    useEffect(() => {
        organizeItems(trendingCollections);
    }, [trendingCollections]);

    const handleRouteChange = (address, chainId) => {
        if (!address || !chainId) return;
        router.push({
            pathname: PATH_DASHBOARD.explore.collection(address, chainId),
        });
    };

    return (
        <>
            <div className="tranding-collection-block">
                <div className="tranding-collection-block-inner">
                    {!loading ? (
                        trendingCollections?.length > 0 && (
                            <>
                                <Container>
                                    <div className="common-title-block desktop-view-title">
                                        <h2>Trending Collections</h2>
                                        <Link
                                            href={
                                                PATH_DASHBOARD.explore
                                                    .collectionRoot
                                            }
                                            className="group hover:translate-x-[-3px] transition-all ease-in"
                                        >
                                            <span className="inline-block group-hover:bg-gradient-to-r group-hover:from-[#2BD7EF] group-hover:via-indigo-400 group-hover:to-[#FB4EF1] group-hover:text-transparent group-hover:bg-clip-text">
                                                Explore
                                            </span>
                                            <svg
                                                width="25"
                                                height="14"
                                                viewBox="0 0 25 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M17.7979 13.2012L23.3399 7.65999C23.7031 7.29681 23.7031 6.70793 23.3399 6.34476L17.7979 0.803571"
                                                    stroke="#191820"
                                                    stroke-width="1.39492"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    d="M22.4482 7.00293L0.749512 7.00293"
                                                    stroke="#191820"
                                                    stroke-width="1.39492"
                                                    stroke-linecap="round"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </Container>
                                <div className="tranding-collection-card">
                                    {groupedItems?.length > 0 && (
                                        <>
                                            {groupedItems[0]?.map(
                                                (item, index) => (
                                                    <div
                                                        className="tranding-collection-card-inner"
                                                        key={index}
                                                        onClick={() =>
                                                            handleRouteChange(
                                                                item?.address,
                                                                item?.chainId
                                                            )
                                                        }
                                                    >
                                                        <div className="tranding-collection-card-img">
                                                            <ImageLoader
                                                                src={
                                                                    item?.image
                                                                }
                                                                alt="img"
                                                                imageClassProps="card-main-img object-fit-cover"
                                                                style={{width:"100%"}}
                                                                mediaRenderer={
                                                                    false
                                                                }
                                                            />
                                                            <TrendingCollectionHoverCards
                                                                item={item}
                                                            />
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </>
                                    )}
                                    {trendingCollections?.length > 1 && (
                                        <>
                                            <div className="tranding-collection-card-inner-two">
                                                <div className="tranding-collection-card-inner-two-top">
                                                    {groupedItems[1]?.map(
                                                        (item, index) => (
                                                            <div
                                                                className="tranding-collection-card-inner-two-inner"
                                                                key={index}
                                                                onClick={() =>
                                                                    handleRouteChange(
                                                                        item?.address,
                                                                        item?.chainId
                                                                    )
                                                                }
                                                            >
                                                                <ImageLoader
                                                                    src={
                                                                        item?.image
                                                                    }
                                                                    alt="img"
                                                                    imageClassProps="card-main-img object-fit-cover"
                                                                    style={{width:"100%"}}
                                                                    mediaRenderer={
                                                                        false
                                                                    }
                                                                />
                                                                <TrendingCollectionHoverCards
                                                                    item={item}
                                                                />
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                                {trendingCollections?.length >
                                                    3 && (
                                                    <div className="tranding-collection-card-inner-two-top">
                                                        <div className="tranding-collection-card-inner-two-inner-last">
                                                            {groupedItems[2]?.map(
                                                                (
                                                                    item,
                                                                    index
                                                                ) => (
                                                                    <div
                                                                        className="img-block-trending"
                                                                        key={
                                                                            index
                                                                        }
                                                                        onClick={() =>
                                                                            handleRouteChange(
                                                                                item?.address,
                                                                                item?.chainId
                                                                            )
                                                                        }
                                                                    >
                                                                        <ImageLoader
                                                                            src={
                                                                                item?.mediumLogo
                                                                            }
                                                                            alt="img"
                                                                            imageClassProps="card-main-img object-fit-cover"
                                                                            style={{width:"100%"}}
                                                                            mediaRenderer={
                                                                                false
                                                                            }
                                                                        />
                                                                        <TrendingCollectionHoverCards
                                                                            item={
                                                                                item
                                                                            }
                                                                        />
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>
                                {trendingCollections?.length > 11 && (
                                    <>
                                        <div className="tranding-collection-card-inline">
                                            <div className="tranding-collection-card-inline-inner">
                                                {groupedItems[3]?.map(
                                                    (item, index) => (
                                                        <div
                                                            className="img-block-trending"
                                                            key={index}
                                                            onClick={() =>
                                                                handleRouteChange(
                                                                    item?.address,
                                                                    item?.chainId
                                                                )
                                                            }
                                                        >
                                                            <ImageLoader
                                                                src={
                                                                    item?.mediumLogo
                                                                }
                                                                alt="img"
                                                                imageClassProps="card-main-img object-fit-cover"
                                                                style={{width:"100%"}}
                                                                mediaRenderer={
                                                                    false
                                                                }
                                                            />
                                                            <TrendingCollectionHoverCards
                                                                item={item}
                                                            />
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                        )
                    ) : (
                        <>
                            <div className="d-flex justify-content-center">
                                <Spinner animation="border" size="lg" />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default TrendingCollections;
