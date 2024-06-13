import { CHAIN_LOGO } from "@/constant";
import { useCollectionItems } from "@/hooks/useFetchHooks";
import { CommonProductBLock } from "@/styles/pages/main.style";
import { CountParser, getItemDetailsQueryParams } from "@/utils";
import Link from "next/link";
import React from "react";
import { Like } from "..";
import { useLikeItem } from "@/hooks/useHome";
import { useRouter } from "next/router";
import { PATH_DASHBOARD } from "@/routes/paths";
import ImageLoader from "../Common/ImageLoader";
import { Container } from "react-bootstrap";

const MoreItems = () => {
    const { loading, items } = useCollectionItems({
        limit: 5,
        search: "",
        sort: {
            value: "Recently Listed",
            label: "Recently Listed",
        },
        itemStatus: [],
        selectedAttribute: [],
        price: {
            min: "",
            max: "",
        },
    });

    const { handleLike } = useLikeItem();

    const router = useRouter();
    const handleRouteChange = (item) => {
        router.push({
            pathname: PATH_DASHBOARD.item.details,
            query: {
                ...getItemDetailsQueryParams(item),
            },
        });
    };

    return (
        <div className="traning-nft-block">
            <div className="common-title-block desktop-view-title">
                <h2>More from this collection</h2>
                <Link
                    href={PATH_DASHBOARD.explore.collection(
                        items[0]?.itemCollection
                    )}
                    className="group hover:translate-x-[-3px] transition-all ease-in"
                >
                    <span className="inline-block group-hover:bg-gradient-to-r group-hover:from-[#2BD7EF] group-hover:via-indigo-400 group-hover:to-[#FB4EF1] group-hover:text-transparent group-hover:bg-clip-text">
                        Explore
                    </span>
                    {/* <img
                        src={"../../images/right-link-img.svg"}
                        alt="right-arrow-img"
                    ></img> */}
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
                        ></path>
                        <path
                            d="M22.4482 7.00293L0.749512 7.00293"
                            stroke="#191820"
                            stroke-width="1.39492"
                            stroke-linecap="round"
                        ></path>
                    </svg>
                </Link>
            </div>
            <CommonProductBLock>
                <div className="common-product-block justify-content-center flex-width-five">
                    {items?.map((item) => (
                        <div
                            key={item?._id}
                            className="common-product-block-inner new-card-block hover:translate-y-[-3px] transition-all ease-in cursor-pointer"
                            onClick={() => handleRouteChange(item)}
                        >
                            <div className="common-product-block-inner-width !rounded-[22px]">
                                <div className="top-block-product-new">
                                    <div className="top-block-product-img-new">
                                        <img
                                            src={
                                                item?.collectionImage ||
                                                item?.collectionLogo ||
                                                "/images/collection-img.png"
                                            }
                                            alt=""
                                        ></img>
                                    </div>
                                    <h4>{item?.collectionName || ""}</h4>
                                </div>

                                <div className="product-img-time product-img-time-big pointer">
                                    <ImageLoader
                                        src={item?.image}
                                        alt=""
                                        thumbnail={item?.thumbnail}
                                    />
                                    {/* <img src={item?.image} alt=""></img> */}
                                    <div className="timer-block-div">
                                        {item?.endTime && (
                                            <CountDownTimer
                                                date={item?.endTime}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="product-details-profile-new-block">
                                    <div className="product-details-profile-new">
                                        <h4>{item?.name}</h4>
                                        <div className="product-details-profile-new-price">
                                            <img
                                                src={CHAIN_LOGO[item?.chainId]}
                                                className="product-img-diff"
                                                alt=""
                                            />
                                            <div className="product-details-profile-new-price-text">
                                                <p>Price</p>
                                                <h4>
                                                    <span>
                                                        {CountParser(
                                                            item?.price || 0,
                                                            2
                                                        )}{" "}
                                                        {item?.symbol}
                                                    </span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-hot-pics"></div>
                            </div>

                            {/* <div
                            key={item?._id}
                            className="common-product-block-inner"
                        > */}
                            {/* <div className="common-product-block-inner-width"> */}
                            {/* <div
                                    onClick={() => handleRouteChange(item)}
                                    className="product-img-time pointer"
                                >
                                    <ImageLoader
                                        src={
                                            item?.image ||
                                            "/images/nft-img-trending.png"
                                        }
                                        alt=""
                                    />
                                </div> */}
                            {/* <div className="product-details-profile">
                                    <div className="product-profile">
                                        <img
                                            src={
                                                item?.creatorLogo ||
                                                "/images/user.svg"
                                            }
                                            alt=""
                                        ></img>
                                        <div className="product-profile-details">
                                            <p>Creator</p>
                                            <h5>
                                                {item?.creatorName || "UnKnown"}
                                            </h5>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => handleLike(item?._id)}
                                        className="bid-common pointer"
                                    >
                                        <Like item={item} />
                                    </div>
                                </div> */}
                            {/* <div className="floor-volume-block"> */}
                            {/* <div className="floor-volume-block-inner mt-3   "> */}
                            {/* <p>Floor</p> */}
                            {/* {item?.price ? (
                                            <h4>
                                                <span>
                                                    {CountParser(
                                                        item?.price || 0,
                                                        4
                                                    )}{" "}
                                                    {item?.symbol}
                                                </span>
                                                <img
                                                    src={
                                                        CHAIN_LOGO[
                                                            item?.chainId
                                                        ]
                                                    }
                                                    alt="ethe-icon"
                                                ></img>
                                            </h4>
                                        ) : (
                                            ""
                                        )} */}
                            {/* </div> */}

                            {/* <div className="floor-volume-block-inner"> */}
                            {/* {item?.symbol && (
                                            <>
                                                <p>24h volume</p>
                                                <h4>
                                                    {CountParser(
                                                        item?.dayVolume || 0,
                                                        4
                                                    )}{" "}
                                                    {item?.symbol}
                                                </h4>
                                            </>
                                        )} */}
                            {/* </div> */}
                            {/* </div> */}
                            {/* </div> */}
                            {/* </div> */}
                        </div>
                    ))}
                </div>
            </CommonProductBLock>
            <Container>
                <div className="common-title-block mobile-view-block">
                    <Link
                        href={PATH_DASHBOARD.explore.collection(
                            items[0]?.collectionAddress
                        )}
                    >
                        <span>Explore</span>
                        {/* <img
                        src={"../../images/right-link-img.svg"}
                        alt="right-arrow-img"
                    ></img> */}
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
                            ></path>
                            <path
                                d="M22.4482 7.00293L0.749512 7.00293"
                                stroke="#191820"
                                stroke-width="1.39492"
                                stroke-linecap="round"
                            ></path>
                        </svg>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default MoreItems;
