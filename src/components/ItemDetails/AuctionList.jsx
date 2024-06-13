import { GetNftListingService } from "@/redux/services/itemServices";
import React, { useEffect, useState } from "react";
import BidModel from "./Model/BidModel";
import { useDispatch, useSelector } from "react-redux";
import { globalState } from "@/redux/reducer/globalSlice";
import {
    marketState,
    setRefetchAction,
    setSelectedItem,
} from "@/redux/reducer/marketSlice";
import Link from "next/link";
import { Button } from "@/styles/pages/main.style";
import moment from "moment";
import { CountParser, Toast, usdFormatter, validateNetwork } from "@/utils";
import InfiniteScroll from "react-infinite-scroll-component";
import { ITEM_LISTING_STATUS } from "@/constant";
import { Spinner } from "react-bootstrap";
import { PATH_DASHBOARD } from "@/routes/paths";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";

const AuctionList = ({ item, selectedtab }) => {
    const { account, chainId } = useActiveWeb3React();
    const { contractLoading } = useSelector(marketState);
    const dispatch = useDispatch();

    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [auctionItem, setAuctionItem] = useState();
    const [selectedRow, setSelectedRow] = useState();

    //model state
    const [show, setShow] = useState(false);

    //pagination
    const [totalPages, setTotalPages] = useState(0);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);

    const TABLE_HEADINGS = [
        { label: "Price", center: true },
        { label: "USD Price", center: true },
        { label: "Quantity", center: true },
        { label: "Expiration", center: true },
        { label: "From", center: true },
        { label: "Buy Now", center: true },
    ];

    const fetchListing = async (reset = false) => {
        const localPage = reset ? 1 : page + 1;
        try {
            setLoading(true);
            const { data } = await GetNftListingService({
                itemCollection: item?.itemCollection?.toLowerCase(),
                tokenId: item?.tokenId,
                // chainId: chainId,
                listingType: ITEM_LISTING_STATUS.AUCTION,
                limit: 10,
                page: localPage,
            });
            setPage(localPage);
            setTotalPages(data?.totalPages);
            setCount(data?.count);
            setListings((prev) =>
                reset ? data?.data : [...prev, ...data?.data]
            );
            setHasMore(data?.totalPages > localPage);
        } catch (err) {
            console.log("err", err);
        } finally {
            setLoading(false);
            // if (refetch === "Auction") {
            // 	dispatch(setRefetchAction(null));
            // }
        }
    };

    const handleOpen = (currentItem) => {
        const validate = validateNetwork(
            account,
            chainId,
            currentItem?.chainId
        );
        if (!validate.status) {
            return Toast.error(validate.message);
        }
        setAuctionItem(currentItem);
        dispatch(setSelectedItem(currentItem));
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    const setCurrentItem = (currentItem) => {
        if (contractLoading) return;
        setAuctionItem(currentItem);
        dispatch(setSelectedItem(currentItem));
        setSelectedRow(currentItem?.uniqueId);
    };

    useEffect(() => {
        if (!item) return;
        fetchListing(true);
    }, [item]);

    // useEffect(() => {
    // 	if (refetch === "Auction") {
    // 		fetchListing(true);
    // 	}
    // }, [refetch]);

    useEffect(() => {
        if (selectedtab !== ITEM_LISTING_STATUS.AUCTION) return;
        if (listings?.length) return setCurrentItem(listings[0]);
        setCurrentItem({});
    }, [listings, selectedtab]);

    return (
        <div className="offer-table-block new-table-block">
            {/* <InfiniteScroll
				dataLength={listings.length}
				next={fetchListing}
				hasMore={hasMore}
				style={{ overflow: "hidden" }}
				loader={<h4>Loading...</h4>}
				endMessage={
					<p
						style={{
							textAlign: "center",
						}}
					>
					</p>
				}
				pullDownToRefreshThreshold={50}
				pullDownToRefreshContent={
					<h3
						style={{
							textAlign: "center",
						}}
					>
						&#8595; Pull down to refresh
					</h3>
				}
				releaseToRefreshContent={
					<h3
						style={{
							textAlign: "center",
						}}
					>
						&#8593; Release to refresh
					</h3>
				}
			> */}
            <table>
                <thead>
                    <tr>
                        {TABLE_HEADINGS.map(({ label, center }, index) => (
                            <th
                                key={index}
                                className={`${center && "th-center"}`}
                            >
                                {label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {!listings.length ? (
                        <tr>
                            <td
                                colSpan={TABLE_HEADINGS.length}
                                className="text-center"
                            >
                                {/* No data found */}
                            </td>
                        </tr>
                    ) : (
                        listings?.map((listing) => (
                            <tr
                                onClick={() => setCurrentItem(listing)}
                                className="pointer"
                                key={listing?.uniqueId}
                            >
                                <td className="td-center">
                                    {CountParser(listing?.price || 0, 4)}{" "}
                                    {listing?.symbol}
                                </td>
                                <td className="td-center">
                                    {usdFormatter.format(
                                        listing?.usdPrice || 0
                                    )}
                                    {/* ${CountParser(listing?.usdPrice || 0, 4)} */}
                                </td>
                                <td className="td-center">
                                    {listing?.quantity}
                                </td>
                                <td className="td-center">
                                    {moment(
                                        new Date(listing?.endTime),
                                        "YYYYMMDD"
                                    ).fromNow()}
                                </td>
                                <td className="td-center">
                                    <Link
                                        href={PATH_DASHBOARD.user.detail(
                                            listing?.lister
                                        )}
                                    >
                                        {listing?.listingCreatorName}
                                    </Link>
                                </td>
                                <td className="td-center">
                                    <Button
                                        disabled={contractLoading}
                                        onClick={() => handleOpen(listing)}
                                        className="button-bid"
                                    >
                                        {listing?.uniqueId === selectedRow
                                            ? "Selected"
                                            : "Bid"}
                                    </Button>
                                </td>
                            </tr>
                        ))
                    )}
                    {loading ? (
                        <tr>
                            <td
                                colSpan={TABLE_HEADINGS.length}
                                className="text-center"
                            >
                                <Spinner size="sm" />
                            </td>
                        </tr>
                    ) : (
                        ""
                    )}
                </tbody>
            </table>
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
            {/* </InfiniteScroll> */}
            <BidModel
                show={show}
                handleClose={handleClose}
                item={auctionItem}
                auctionCreator={auctionItem?.lister}
            />
        </div>
    );
};

export default AuctionList;
