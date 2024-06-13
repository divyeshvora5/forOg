import { ADDRESS_ZERO, ITEM_LISTING_STATUS } from "@/constant";
import { getValidAuction, getlatestBid } from "@/contracts";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import {
    cancleAuctionAction,
    collectAuctionPayoutAction,
    collectAuctionTokensAction,
} from "@/redux/actions/marketAction";
import {
    ACTION_TYPE,
    marketState,
    setActionItem,
} from "@/redux/reducer/marketSlice";
import { Button } from "@/styles/pages/main.style";
import { Toast, validateNetwork } from "@/utils";
import React, { useEffect, useMemo, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import BidModel from "../Model/BidModel";
import MakeOfferButton from "./MakeOfferButton";
import ListingButtion from "./ListingButtion";

const AuctionSectionButtons = () => {
    const { chainId, account, chain, wallet, signMessage } = useActiveWeb3React();
    const { itemDetails, selectedItem, contractLoading, currentAction } =
        useSelector(marketState);
    const dispatch = useDispatch();

    const [listingDetails, setListingDetails] = useState();
    const [latestBidDetails, setLatestBidDetails] = useState();
    const [loading, setLoading] = useState(false);

    const [show, setShow] = useState(false);

    const fetchAuctionDetails = async () => {
        if (!selectedItem || selectedItem?.type !== ITEM_LISTING_STATUS.AUCTION)
            return;
        try {
            if (selectedItem?.chainId !== chain?.id) return;
            setLoading(true);
            // console.log("AuctionselectedItem", selectedItem);
            const [result, latestBid] = await Promise.all([
                getValidAuction({
                    chain: chain,
                    auctionId: selectedItem?.auctionId,
                }),
                getlatestBid({
                    chain: chain,
                    auctionId: selectedItem?.auctionId,
                }),
            ]);
            // console.log("Auctionresult", result);
            setListingDetails(result);
            setLatestBidDetails(latestBid);
        } catch (err) {
            console.log("err", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAuctionDetails();
    }, [selectedItem, chain]);

    const validateConnectionHOF = (fn) => {
        return async () => {
            const validate = validateNetwork(
                account,
                chainId,
                itemDetails?.chainId
            );
            if (!validate.status) {
                return Toast.error(validate.message);
            }
            if (
                selectedItem?.auctionId === null ||
                selectedItem?.auctionId === undefined
            )
                return;
            await fn();
        };
    };

    const auctionCancleFunc = validateConnectionHOF(async () => {
        dispatch(setActionItem(ACTION_TYPE.CANCLEAUCTION));
        const result = await dispatch(
            cancleAuctionAction({
                wallet: wallet,
                chain: chain,
                account: account,
                auctionId: selectedItem?.auctionId,
                signMessage,
            })
        );

        // if (result.type === "marketPlace/cancleAuctionAction/fulfilled") {
        // 	router.push({
        // 		pathname: "/collection/collection-items",
        // 		query: {
        // 			type: itemDetails?.standard,
        // 			collection: itemDetails?.itemCollection,
        // 		},
        // 	});
        // }
    });

    const closeForSeller = validateConnectionHOF(async () => {
        dispatch(setActionItem(ACTION_TYPE.CLOSEFORSELLER));
        if (latestBidDetails?.bidder === ADDRESS_ZERO) {
            // console.log("cancle call");
            auctionCancleFunc();
        } else {
            const result = await dispatch(
                collectAuctionPayoutAction({
                    wallet: wallet,
                    chain: chain,
                    account: account,
                    auctionId: selectedItem?.auctionId,
                    signMessage,
                })
            );

            // if (
            // 	result.type ===
            // 	"marketPlace/collectAuctionPayoutAction/fulfilled"
            // ) {
            // 	router.push({
            // 		pathname: "/collection/collection-items",
            // 		query: {
            // 			type: itemDetails?.standard,
            // 			collection: itemDetails?.itemCollection,
            // 		},
            // 	});
            // }
        }
    });

    const closeForBuyer = validateConnectionHOF(async () => {
        dispatch(setActionItem(ACTION_TYPE.CLOSEFORBUYER));
        const result = await dispatch(
            collectAuctionTokensAction({
                wallet: wallet,
                chain: chain,
                account: account,
                auctionId: selectedItem?.auctionId,
                signMessage
            })
        );
        // if (
        // 	result.type === "marketPlace/collectAuctionTokensAction/fulfilled"
        // ) {
        // 	router.push({
        // 		pathname: "/collection/collection-items",
        // 		query: {
        // 			type: itemDetails?.standard,
        // 			collection: itemDetails?.itemCollection,
        // 		},
        // 	});
        // }
    });

    const handleClose = () => {
        setShow(false);
    };

    const handleOpen = () => {
        const validate = validateNetwork(
            account,
            chainId,
            selectedItem?.chainId
        );
        if (!validate.status) {
            return Toast.error(validate.message);
        }
        setShow(true);
    };

    // console.log("AuctionDetails", listingDetails);

    const AuctionButton = () => {
        const timePassed = Date.now() > selectedItem?.endTime;

        if (loading) {
            return <Button disabled={true}>Loading...</Button>;
        }

        if (!account) {
            return <Button disabled={true}>Connect Wallet!</Button>;
        }

        // console.log("timePassed", {
        //     timePassed,
        //     listingDetails,
        //     selectedItem,
        // });

        if (
            timePassed &&
            selectedItem?.lister === account?.toLowerCase() &&
            !selectedItem?.sellerClaim
        ) {
            return (
                <Button disabled={contractLoading} onClick={closeForSeller}>
                    {contractLoading &&
                    currentAction === ACTION_TYPE.CLOSEFORSELLER ? (
                        <Spinner animation="border" size="sm" />
                    ) : (
                        "Close Auction"
                    )}
                </Button>
            );
        }

        if (
            timePassed &&
            latestBidDetails?.bidder === account?.toLowerCase() &&
            !selectedItem?.buyerClaim
        ) {
            return (
                <Button disabled={contractLoading} onClick={closeForBuyer}>
                    {contractLoading &&
                    currentAction === ACTION_TYPE.CLOSEFORBUYER ? (
                        <Spinner animation="border" size="sm" />
                    ) : (
                        "Claim Nft"
                    )}
                </Button>
            );
        }

        if (
            timePassed ||
            (selectedItem?.buyerClaim && selectedItem?.sellerClaim)
        ) {
            return <Button disabled={true}>Auction Finish</Button>;
        }

        return (
            <Button
                disabled={
                    contractLoading ||
                    loading ||
                    !listingDetails ||
                    (account &&
                        listingDetails?.auctionCreator ===
                            account?.toLowerCase())
                }
                onClick={handleOpen}
            >
                {contractLoading && currentAction === ACTION_TYPE.BID ? (
                    <Spinner animation="border" size="sm" />
                ) : (
                    "Place Bid"
                )}
            </Button>
        );
    };

    const CanclelAuction = ({ text = "Cancel Auction", disabled = false }) => {
        if (
            account &&
            listingDetails?.auctionCreator?.toLowerCase() ===
                account?.toLowerCase()
        ) {
            return (
                <div className="button-block-tabs-inner">
                    <Button onClick={auctionCancleFunc} disabled={disabled}>
                        {text}
                    </Button>
                </div>
            );
        }

        return null;
    };

    const cancleButtonStatus = useMemo(() => {
        if (contractLoading && currentAction === ACTION_TYPE.CANCLEAUCTION) {
            return {
                text: <Spinner animation="border" size="sm" />,
                disabled: true,
            };
        }

        return {
            text: "Cancel Auction",
            disabled: false,
        };
    }, [contractLoading, currentAction]);

    return (
        <div className="btn-group-block">
            <BidModel
                show={show}
                handleClose={handleClose}
                item={selectedItem}
                refetchBids={true}
                auctionCreator={selectedItem?.lister}
            />
            <div className="button-block-tabs-inner">
                <AuctionButton />
            </div>
            <CanclelAuction
                text={cancleButtonStatus.text}
                disabled={
                    cancleButtonStatus.disabled ||
                    contractLoading ||
                    selectedItem?.latestBid
                }
            />
            <MakeOfferButton />
            <ListingButtion />
        </div>
    );
};

export default AuctionSectionButtons;
