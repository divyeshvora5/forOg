import { CHAIN_LOGO, GET_CHAIN_NAMES } from "@/constant";
import { Button } from "@/styles/pages/main.style";
import { CountParser } from "@/utils";
import moment from "moment";
import React from "react";
import { Spinner } from "react-bootstrap";
import ImageLoader from "../Common/ImageLoader";
import { useRouter } from "next/router";
import { PATH_DASHBOARD } from "@/routes/paths";

const FeedBlockCenter = ({
    data = [],
    loading = false,
    page = 1,
    hasMore = false,
    handlePageChange = () => {},
}) => {
    const { push } = useRouter();
    const EventText = {
        Listed: "Listed",
        Minted: "Minted",
        Transfer: "Transferred",
        Purchase: "Purchased",
        Offer: "Submitted an Offer on",
        "Remove LIsting": "Cancelled Listing in",
        "Bids Cancle": "Cancelled Bid in",
        Following: "Started Following",
        Referral: "Referred User",
    };

    const EventTextTwo = {
        Listed: "For Sale",
        Minted: "In Collection",
        Transfer: "From Collection",
        Purchase: "From Collection",
        Offer: "From Collection",
        "Remove LIsting": "From Collection",
        "Bids Cancle": "From Collection",
        Following: "",
        Referral: "",
    };

    const convertDate = (dateString) => {
        const date = moment(dateString);

        const formattedDate = date.format("D MMMM YYYY h:mm A");

        return formattedDate;
    };
    const eventsForPriceBlock = [
        "Listed",
        "Purchase",
        "Offer",
        "Remove LIsting",
        "Bids Cancle",
    ];

    const getBadgeImage = (points) => {
        if (points === undefined || points === null) return;
        let SRC = "";
        if (points > 999999) {
            SRC = "/images/award-img-5.svg";
        } else if (points > 99999) {
            SRC = "/images/award-img-1.svg";
        } else if (points > 9999) {
            SRC = "/images/award-img-2.svg";
        } else if (points > 999) {
            SRC = "/images/award-img-3.svg";
        } else if (points > 99) {
            SRC = "/images/award-img-4.svg";
        }

        if (!SRC) return;
        return <img src={SRC} alt="badge" />;
    };

    const handleUserRoute = (item) => {
        if (!item.toUsername && !item.fromUsername) return;
        const userName = ["Minted", "Purchase"].includes(item.name)
            ? item.toUsername
            : item.fromUsername;
        if (userName) {
            push(PATH_DASHBOARD.user.detail(userName));
        }
    };

    const itemRouteHandler = (item) => {
        if (!item?.itemCollection || !item.tokenId) return;
        push({
            pathname: PATH_DASHBOARD.item.details,
            query: {
                itemCollection: item?.itemCollection,
                chainId: item?.chainId,
                tokenId: item?.tokenId,
            },
        });
    };
    return (
        <>
            {!(loading && page == 1) ? (
                <div className="feed-page-block-middle-inner">
                    {data?.length > 0 &&
                        data?.map((item, index) => (
                            <div
                                className="feed-page-block-middle-inner-block"
                                key={index}
                            >
                                <div
                                    className="feed-page-block-middle-inner-block-top pointer"
                                    onClick={() => handleUserRoute(item)}
                                >
                                    <div className="left-top-feed">
                                        <img
                                            src={
                                                ["Minted", "Purchase"].includes(
                                                    item?.name
                                                )
                                                    ? item?.toUserlogo
                                                    : item?.fromUserlogo
                                            }
                                            // src={"../../images/profile-img-product.png"}
                                            alt="img"
                                        ></img>
                                    </div>
                                    <div className="right-top-feed">
                                        {/* <img
                                            src={
                                                "../../images/profile-img-product.png"
                                            }
                                            alt="img"
                                        ></img> */}
                                        {["Minted", "Purchase"].includes(
                                            item?.name
                                        )
                                            ? getBadgeImage(
                                                  item?.toUserRewardPoint
                                              )
                                            : getBadgeImage(
                                                  item?.fromUserRewardPoint
                                              )}
                                        {/* {getBadgeImage(item?.points)} */}
                                        <div className="right-top-feed-content">
                                            <h4>
                                                {([
                                                    "Minted",
                                                    "Purchase",
                                                ].includes(item?.name)
                                                    ? item?.toUserFullName
                                                    : item?.fromUserFullName) ||
                                                    "UnKnown"}
                                            </h4>
                                            <p>
                                                @
                                                {([
                                                    "Minted",
                                                    "Purchase",
                                                ].includes(item?.name)
                                                    ? item?.toUsername
                                                    : item?.fromUsername) || ""}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-feed-block">
                                    <div className="text-discription">
                                        <p>
                                            {EventText[item?.name]}{" "}
                                            <span>
                                                "
                                                {![
                                                    "Following",
                                                    "Referral",
                                                ].includes(item?.name)
                                                    ? item?.itemName
                                                    : item?.toUsername ||
                                                      item?.collectionName}
                                                "
                                            </span>{" "}
                                            {EventTextTwo[item?.name]}{" "}
                                            {![
                                                "Following",
                                                "Referral",
                                            ].includes(item?.name) ? (
                                                <span>
                                                    "
                                                    {
                                                        item?.collectionDetailsName
                                                    }
                                                    "
                                                </span>
                                            ) : (
                                                ""
                                            )}
                                            {item?.name === "Transfer" ? (
                                                <>
                                                    {" "}
                                                    To{" "}
                                                    <span>
                                                        "{item?.toUsername}"
                                                    </span>
                                                </>
                                            ) : (
                                                ""
                                            )}
                                            {item?.name === "Referral" ? (
                                                <> {item?.toUseraddress}</>
                                            ) : (
                                                ""
                                            )}
                                        </p>
                                    </div>
                                    <div className="bottom-feed-block-three-block justify-between">
                                        {eventsForPriceBlock.includes(
                                            item?.name
                                        ) ? (
                                            <div className="bottom-feed-block-three-block-inner">
                                                <p>Price:</p>
                                                <div className="bottom-feed-block-three-block-inner-img">
                                                    <img
                                                        src={
                                                            CHAIN_LOGO[
                                                                item?.chainId
                                                            ]
                                                        }
                                                        alt="img"
                                                        className="img-eth"
                                                    ></img>
                                                    <h4>
                                                        {item?.price
                                                            ? CountParser(
                                                                  item?.price
                                                              )
                                                            : 0}{" "}
                                                        {item?.symbol}
                                                    </h4>
                                                </div>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                        {!["Following", "Referral"].includes(
                                            item?.name
                                        ) ? (
                                            <div className="bottom-feed-block-three-block-inner">
                                                <p>BlockChain:</p>
                                                <div className="bottom-feed-block-three-block-inner-img">
                                                    <img
                                                        src={
                                                            CHAIN_LOGO[
                                                                item?.chainId
                                                            ]
                                                        }
                                                        width="33px"
                                                        alt="img"
                                                    ></img>
                                                    <h4>
                                                        {
                                                            GET_CHAIN_NAMES[
                                                                item?.chainId
                                                            ]
                                                        }
                                                    </h4>
                                                </div>
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <div className="img-block-last-feed">
                                        {item?.name != "Following" &&
                                        !["Following", "Referral"].includes(
                                            item?.name
                                        ) ? (
                                            <div
                                                className="pointer"
                                                onClick={() =>
                                                    itemRouteHandler(item)
                                                }
                                            >
                                                <ImageLoader
                                                    src={
                                                        item?.itemImage ||
                                                        item?.itemAnimationUrl
                                                        // ||
                                                        // "../../images/trending-img-new.png"
                                                    }
                                                    alt="img"
                                                    style={{
                                                        width: "100%",
                                                        height: "450px",
                                                        borderRadius: "10px",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            </div>
                                        ) : (
                                            ""
                                        )}

                                        <div className="share-block">
                                            <h2>
                                                {convertDate(
                                                    item?.date ||
                                                        item?.createdAt
                                                )}
                                            </h2>
                                            {/* <a href="">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15 18.3327C14.3056 18.3327 13.7153 18.0896 13.2292 17.6035C12.7431 17.1174 12.5 16.5271 12.5 15.8327C12.5 15.7355 12.5069 15.6346 12.5208 15.5302C12.5347 15.4257 12.5556 15.3321 12.5833 15.2493L6.70833 11.8327C6.47222 12.041 6.20833 12.2043 5.91667 12.3227C5.625 12.441 5.31944 12.4999 5 12.4993C4.30556 12.4993 3.71528 12.2563 3.22917 11.7702C2.74306 11.2841 2.5 10.6938 2.5 9.99935C2.5 9.3049 2.74306 8.71463 3.22917 8.22852C3.71528 7.7424 4.30556 7.49935 5 7.49935C5.31944 7.49935 5.625 7.55852 5.91667 7.67685C6.20833 7.79518 6.47222 7.95824 6.70833 8.16602L12.5833 4.74935C12.5556 4.66602 12.5347 4.5724 12.5208 4.46852C12.5069 4.36463 12.5 4.26379 12.5 4.16602C12.5 3.47157 12.7431 2.88129 13.2292 2.39518C13.7153 1.90907 14.3056 1.66602 15 1.66602C15.6944 1.66602 16.2847 1.90907 16.7708 2.39518C17.2569 2.88129 17.5 3.47157 17.5 4.16602C17.5 4.86046 17.2569 5.45074 16.7708 5.93685C16.2847 6.42296 15.6944 6.66602 15 6.66602C14.6806 6.66602 14.375 6.60713 14.0833 6.48935C13.7917 6.37157 13.5278 6.20824 13.2917 5.99935L7.41667 9.41602C7.44444 9.49935 7.46528 9.59324 7.47917 9.69768C7.49306 9.80213 7.5 9.90268 7.5 9.99935C7.5 10.096 7.49306 10.1968 7.47917 10.3018C7.46528 10.4068 7.44444 10.5005 7.41667 10.5827L13.2917 13.9993C13.5278 13.791 13.7917 13.628 14.0833 13.5102C14.375 13.3924 14.6806 13.3332 15 13.3327C15.6944 13.3327 16.2847 13.5757 16.7708 14.0618C17.2569 14.548 17.5 15.1382 17.5 15.8327C17.5 16.5271 17.2569 17.1174 16.7708 17.6035C16.2847 18.0896 15.6944 18.3327 15 18.3327Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    {loading ? (
                        <div className="d-flex justify-content-center align-items-center w-full mt-4">
                            <Spinner animation="border" size="md" />
                        </div>
                    ) : hasMore ? (
                        <div className="load-more-btn mt-4 d-flex justify-content-center align-items-center w-full">
                            <Button
                                isBorderBtn={true}
                                onClick={handlePageChange}
                                className="border-dark-button"
                                style={{ width: "200px" }}
                            >
                                Load More
                            </Button>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            ) : (
                <div className="d-flex justify-content-center vh-100 align-items-center">
                    <Spinner animation="border" size="lg" />
                </div>
            )}
        </>
    );
};

export default FeedBlockCenter;
