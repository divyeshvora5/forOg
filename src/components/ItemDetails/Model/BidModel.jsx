import { getValidAuction, getlatestBid } from "@/contracts";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { GetBidService } from "@/redux/services/bidService";
import { Button, CommonModalMain, Input } from "@/styles/pages/main.style";
import React, { useEffect, useMemo, useState } from "react";
import { Modal, Spinner } from "react-bootstrap";
import { placeBidInAuctionAction } from "@/redux/actions/marketAction";
import { useDispatch, useSelector } from "react-redux";
import {
    ACTION_TYPE,
    marketState,
    setActionItem,
    setTokenAddress,
} from "@/redux/reducer/marketSlice";
import { CountParser, Toast, fromWei } from "@/utils";
import { ITEM_LISTING_STATUS } from "@/constant";
import moment from "moment";
const BidModel = ({
    show,
    handleClose,
    item,
    refetchBids,
    refetch,
    auctionCreator,
}) => {
    const { library, account, balance, rawBalanceValue, chainId, wallet, chain, signMessage } = useActiveWeb3React();
    const { contractLoading } = useSelector(marketState);

    console.log('item', item)

    const dispatch = useDispatch();

    const [bidAmount, setBidAmount] = useState();
    const [message, setMessage] = useState();

    const [totalPages, setTotalPages] = useState(0);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);

    const [bids, setBids] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isValidChain, setIsValidChain] = useState(false);

    const [auctionDetails, setAuctionDetails] = useState();
    const [auctionIsValid, setAuctionIsValid] = useState(false);
    const [latestBidDetails, setLatsetBidDetails] = useState();
    const [buyOut, setBuyOut] = useState(null);

    const fetchBids = async (reset = false) => {
        const localPage = reset ? 1 : page + 1;
        try {
            setLoading(true);
            if (reset) {
                if (item?.chainId !== chain?.id) return;
                const [details, latestBid] = await Promise.all([
                    getValidAuction({
                        chain: chain,
                        auctionId: item?.auctionId,
                    }),
                    getlatestBid({
                        chain: chain,
                        auctionId: item?.auctionId,
                    }),
                ]);
                // console.log("details", details);
                setAuctionIsValid(details ? true : false);
                setAuctionDetails(details);
                setLatsetBidDetails(latestBid);
            }
            const { data } = await GetBidService({
                auctionId: item?.auctionId,
                chainId: item?.chainId,
            });
            setPage(localPage);
            setTotalPages(data?.totalPages);
            setCount(data?.count);
            setBids((prev) => (reset ? data?.data : [...prev, ...data?.data]));
            setHasMore(data?.totalPages > localPage);
        } catch (err) {
            console.log("err", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!chainId || !item || item?.type !== ITEM_LISTING_STATUS.AUCTION)
            return;
        if (item?.chainId === chainId) {
            setIsValidChain(true);
            dispatch(setTokenAddress(item?.currency));
            fetchBids(true);
        }
    }, [item, chainId]);

    const placeBid = async (bidAmount) => {
        if (!bidAmount) return;
        if (account.toLowerCase() === auctionCreator.toLowerCase()) {
            Toast.error("Auction creator is not allowed to Place Bid");
            return;
        }
        const bpsPercentage = Number(auctionDetails?.bidBufferBps);
        const lastBidAmount = fromWei(
            Number(latestBidDetails?.bidAmount),
            item?.decimal
        );
        const isValidNewBid =
            Number(bidAmount) > lastBidAmount &&
            ((Number(bidAmount) - lastBidAmount) * 10000) / lastBidAmount >=
            bpsPercentage;

        if (!isValidNewBid) {
            //pending show message
            setMessage(
                `bid amount must be ${bpsPercentage / 100}% higher from lastbid`
            );
            return;
        }

        setMessage();
        dispatch(setActionItem(ACTION_TYPE.BID));
        const result = await dispatch(
            placeBidInAuctionAction({
                wallet: wallet,
                chain: chain,
                auctionId: auctionDetails?.auctionId,
                bidAmount: bidAmount,
                account: account,
                refetchBids: refetchBids,
                currency: {
                    address: item?.currency,
                    decimals: item?.decimal,
                },
                signMessage
            })
        );

        if (result.type === "market/placeBidInAuctionAction/fulfilled") {
            fetchBids(true);
            setBuyOut(false);

            if (typeof refetch === "function") {
                console.log("refetch", refetch);
                refetch();
            }
            // handleClose();
            const checkValidation = await getValidAuction({
                chainId: item?.chainId,
                provider: library,
                auctionId: item?.auctionId,
            });
            console.log("checkValidation", checkValidation);
            // if (!details) {
            // 	router.push({
            // 		pathname: "/collection/collection-items",
            // 		query: {
            // 			type: itemDetails?.standard,
            // 			collection: itemDetails?.itemCollection,
            // 		},
            // 	});
            // }
        }
    };

    const buyOutNft = () => {
        let price = fromWei(auctionDetails?.buyoutBidAmount);
        if (price) {
            setBuyOut(true);
            placeBid(price);
        }
    };

    // auctionDetails?.auctionId

    const buttonStatus = useMemo(() => {
        if (loading) {
            return {
                text: "Loading...",
                disabled: true,
            };
        }
        if (!account) {
            return {
                text: "Please connect your wallet",
                disabled: true,
            };
        }
        if (!isValidChain) {
            return {
                text: "Please select valid Chain",
                disabled: true,
            };
        }
        if (contractLoading && !buyOut) {
            return {
                text: <Spinner animation="border" size="sm" />,
                disabled: true,
            };
        }

        if (+rawBalanceValue <= 0 || +rawBalanceValue < +bidAmount) {
            return {
                text: "Not Enough Balance",
                disabled: true,
            };
        }

        if (!auctionIsValid) {
            return {
                text: "Auction Invalid",
                disabled: true,
            };
        }

        if (!bidAmount || +bidAmount <= 0) {
            return {
                text: "Please Enter Value",
                disabled: true,
            };
        }

        if (
            Number(bidAmount) <
            Number(fromWei(auctionDetails?.minimumBidAmount) || 0)
        ) {
            return {
                text: `Please Enter miminum ${fromWei(
                    auctionDetails?.minimumBidAmount
                )} Value`,
                disabled: true,
            };
        }

        if (bidAmount) {
            const bpsPercentage = Number(auctionDetails?.bidBufferBps);
            const lastBidAmount = fromWei(
                Number(latestBidDetails?.bidAmount),
                item?.decimal
            );
            const isValidNewBid =
                Number(bidAmount) > lastBidAmount &&
                ((Number(bidAmount) - lastBidAmount) * 10000) / lastBidAmount >=
                bpsPercentage;

            if (!isValidNewBid) {
                return {
                    text: `bid amount must be ${bpsPercentage / 100
                        }% higher from lastbid`,
                    disabled: true,
                };
            }
        }

        return {
            text: "Place Bid",
            disabled: false,
        };
    }, [
        loading,
        contractLoading,
        bidAmount,
        rawBalanceValue,
        auctionIsValid,
        auctionDetails,
        latestBidDetails,
        buyOut,
    ]);

    const buyoutButtonStatus = useMemo(() => {
        if (loading) {
            return {
                text: "Loading...",
                disabled: true,
            };
        }
        if (!account) {
            return {
                text: "Please connect your wallet",
                disabled: true,
            };
        }
        if (!isValidChain) {
            return {
                text: "Please select valid Chain",
                disabled: true,
            };
        }
        if (contractLoading && buyOut) {
            return {
                text: <Spinner animation="border" size="sm" />,
                disabled: true,
            };
        }

        if (+rawBalanceValue <= 0 || +rawBalanceValue < +bidAmount) {
            return {
                text: "Not Enough Balance",
                disabled: true,
            };
        }

        if (!auctionIsValid) {
            return {
                text: "Auction Invalid",
                disabled: true,
            };
        }

        return {
            text: `Buy now (${CountParser(
                +fromWei(auctionDetails?.buyoutBidAmount || 0)
            )} ${item?.symbol})`,
            disabled: false,
        };
    }, [
        loading,
        contractLoading,
        bidAmount,
        rawBalanceValue,
        auctionIsValid,
        auctionDetails,
        latestBidDetails,
        buyOut,
    ]);

    return (
        <CommonModalMain show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Place Bid</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="top-token-block">
                    <div className="balance-block">
                        <div className="balance-block-inner">
                            <h4>Balance</h4>
                            <h4>
                                {balance} {item?.symbol}
                            </h4>
                        </div>
                    </div>
                    <div className="balance-block">
                        <div className="balance-block-inner">
                            <h4>Buyout Amount</h4>
                            <h4>
                                {fromWei(auctionDetails?.buyoutBidAmount)}{" "}
                                {item?.symbol}
                            </h4>
                        </div>
                    </div>
                    <div className="price-block-main">
                        <div className="price-block-inner">
                            <Input
                                type="number"
                                placeholder="Price"
                                value={bidAmount}
                                onChange={(e) => setBidAmount(e.target.value)}
                            />
                            <h5>{item?.symbol}</h5>
                        </div>
                        {message && <p>{message}</p>}
                    </div>
                    {loading && (
                        <>
                            <div className="d-flex justify-content-center align-items-center items-center">
                                <Spinner size="sm" />
                            </div>
                        </>
                    )}
                    <div className="history-block-main">
                        {!loading &&
                            bids?.map((bid, index) => (
                                <div
                                    className="history-block-main-inner"
                                    key={1}
                                >
                                    <div className="history-block-left">
                                        <img
                                            src={
                                                bid?.userLogo ||
                                                "/images/square-img.svg"
                                            }
                                            alt="img"
                                        ></img>
                                        <div className="history-block-left-details">
                                            <h4>
                                                {bid?.bidPrice || 0}{" "}
                                                {bid?.symbol || ""}{" "}
                                                <span>by </span>
                                                {bid?.userName || ""}
                                            </h4>
                                            <p>
                                                {moment(
                                                    new Date(bid?.date)
                                                ).format("L")}
                                                ,{" "}
                                                {moment(
                                                    new Date(bid?.date)
                                                ).format("LT")}
                                            </p>
                                            {/* <p>3/26/2022, 7:28 AM</p> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    {/* {{
                        _id: "659d1705b42ebdc48bb67e5d",
                        currency: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                        decimal: 18,
                        symbol: "PLS",
                        bidPrice: 1.14,
                        date: "2024-01-09T09:50:59.000Z",
                        chainId: 943,
                        auctionId: 40,
                        itemCollection:
                            "0xec57bb094952506002fea7e51e6aae04de2b06d5",
                        userName: "Divyesh",
                        userLogo: null,
                        userAddress:
                            "0x085426ca3958bd760f4817f7cf139ce0cbb9f7af",
                        usdPrice: 0.00006939179999999999,
                    }} */}

                    <div className="button-block">
                        <Button
                            disabled={buttonStatus.disabled || contractLoading}
                            onClick={() => placeBid(bidAmount)}
                        >
                            {buttonStatus.text}
                        </Button>
                        <Button
                            disabled={
                                buyoutButtonStatus.disabled || contractLoading
                            }
                            onClick={buyOutNft}
                        >
                            {buyoutButtonStatus.text}
                        </Button>
                    </div>
                </div>
                <div></div>
            </Modal.Body>
        </CommonModalMain>
    );
};

export default BidModel;
