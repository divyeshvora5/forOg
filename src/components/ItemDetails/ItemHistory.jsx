import { globalState } from "@/redux/reducer/globalSlice";
import { GetItemHistoryService } from "@/redux/services/itemHistoryService";
import { Button } from "@/styles/pages/main.style";
import { CountParser } from "@/utils";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";

const ItemHistory = ({ item, selectedtab }) => {
    const {
        walletDetalis: { chainId },
    } = useSelector(globalState);

    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    //pagination
    const [totalPages, setTotalPages] = useState(0);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);

    const fetchListing = async (reset = false) => {
        const localPage = reset ? 1 : page + 1;
        try {
            setLoading(true);
            const { data } = await GetItemHistoryService({
                itemCollection: item?.itemCollection?.toLowerCase(),
                tokenId: item?.tokenId,
                // chainId: chainId,
                page: localPage,
                limit: 10,
                eventNames: [
                    "Minted",
                    "Purchase",
                    "Auction Created",
                    "Listed",
                    "Bids",
                    "Offer",
                    "Auction Canceled",
                    "Remove LIsting",
                ],
            });
            setPage(localPage);
            setTotalPages(data?.totalPages);
            setCount(data?.count);
            setHistory((prev) =>
                reset ? data?.data : [...prev, ...data?.data]
            );
            setHasMore(data?.totalPages > localPage);
        } catch (err) {
            console.log("err", err);
        } finally {
            setLoading(false);
        }
    };

    const PriceBlockStatus = {
        Minted: false,
        "Auction Created": false,
        Listed: true,
        "Remove LIsting": false,
        Bids: true,
        Purchase: true,
        Offer: true,
        "Auction Canceled": false,
        "Bids Cancle": false,
        "Listing Update": false,
        Transfer: false,
        Burn: false,
    };

    const EventText = {
        Minted: "minted this item",
        "Auction Created": "created auction",
        Listed: "created listing",
        "Remove LIsting": "cancelled listing",
        Bids: "place a bid",
        Purchase: "purchased this item",
        Offer: "created offer",
        "Auction Canceled": "cancelled auction",
        "Bids Cancle": "cancelled offer",
        "Listing Update": "update listing",
        Transfer: " transferred",
        Burn: "burned this item",
    };

    useEffect(() => {
        if (!item) return;
        fetchListing(true);
    }, [item]);

    return (
        <div className="history-block-main">
            {history?.map((ele) => (
                <div key={ele?._id} className="history-block-main-inner">
                    <div className="history-block-left">
                        <img
                            height={45}
                            width={45}
                            src={
                                (ele?.name !== "Minted" &&
                                ele?.name !== "Purchase"
                                    ? ele?.fromUserlogo
                                    : ele?.toUserlogo) ||
                                "/images/square-img.svg"
                            }
                            alt="img"
                        ></img>
                        <div className="history-block-left-details">
                            {/* <h4>
								Mason Woodward <span>place a bid</span>
							</h4> */}
                            <h4>
                                {ele?.name !== "Minted" &&
                                ele?.name !== "Purchase"
                                    ? ele?.fromUsername
                                    : ele?.toUsername}{" "}
                                <span>{EventText[ele?.name]}</span>
                            </h4>
                            <p>
                                {moment(
                                    new Date(ele?.date),
                                    "YYYYMMDD"
                                ).fromNow()}
                            </p>
                        </div>
                    </div>
                    {PriceBlockStatus[ele?.name] ? (
                        <div className="history-block-right">
                            <h4>
                                {CountParser(ele?.price || 0, 4)} {ele?.symbol}
                            </h4>
                            <p>${CountParser(ele?.usdPrice || 0, 4)}</p>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            ))}
            {loading && (
                <>
                    <div className="d-flex justify-content-center align-items-center items-center">
                        <Spinner size="sm" />
                    </div>
                </>
            )}

            {!loading && hasMore ? (
                <div className="load-more-btn d-flex justify-content-center mt-3">
                    <Button
                        className="border-dark-button"
                        isBorderBtn={true}
                        onClick={() => fetchListing(false)}
                        style={{ width: "10rem" }}
                    >
                        Load More
                    </Button>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default ItemHistory;
