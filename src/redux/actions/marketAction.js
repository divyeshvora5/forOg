import {
    acceptOffer,
    addMultiItem,
    addSingleItem,
    addToListing,
    approveNFTOnMarket,
    buyFromListing,
    cancelOffer,
    cancleAuction,
    cancleListing,
    collectAuctionPayout,
    collectAuctionTokens,
    collectionUriUpdate,
    createAuction,
    createCollection,
    getValidAuction,
    importCollection,
    makeOffer,
    parseToWei,
    placeBidInAuction,
    subscribeMemberShip,
} from "@/contracts";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
    signForAcceptOffer,
    signForAuctionServies,
    signForBidService,
    signForBuyListService,
    signForCancleAuction,
    signForCancleListing,
    signForCancleOffer,
    signForCollectAuctionPayout,
    signForCollectAuctionToken,
    signForListingService,
    signForMakeOffer,
    signForMemberShip,
} from "../services/signService";
import {
    Toast,
    getIpfsHash,
    getIpfsHashFromFile,
    getRandom,
    resizeFile,
    toWei,
} from "@/utils";
import {
    updateCollectionLinksService,
    uploadCollectionAssetService,
} from "../services/collectionService";
import { setProgress, setRefetchAction } from "../reducer/marketSlice";
import { getUserBalance } from "./globalAction";

export const creatingListingAction = createAsyncThunk(
    "market/creatingListingAction",
    async (
        {
            type,
            collection,
            account,
            wallet,
            chain,
            tokenId,
            currency,
            quantity,
            price,
            endListingDate,
            signMessage,
        },
        { rejectWithValue, dispatch, getState }
    ) => {
        let sign_toast_id;
        let load_toast_id;
        let approve_toast_id;

        try {
            approve_toast_id = toast.loading("Checking Approval...");
            const approvedStatus = await approveNFTOnMarket({
                type,
                collection,
                account,
                wallet,
                chain,
                tokenId,
            });
            console.log("approvedStatus", approvedStatus);
            toast.dismiss(approve_toast_id);
            if (!approvedStatus) {
                Toast.error("Approval failed!");
                return rejectWithValue("Approval Failed!");
            }
            sign_toast_id = toast.loading("Signing...");
            const signature = await signMessage({
                message: `I want to create listing with this information: ${collection}:${tokenId}:${currency}:${quantity}:${price}:${account}`,
            });

            console.log(
                "sig",
                `I want to create listing with this information: ${collection}:${tokenId}:${currency}:${quantity}:${price}:${account}`
            );
            if (!signature) {
                Toast.error("Signing Failed!");
                toast.dismiss(sign_toast_id);
                return rejectWithValue("Signing Failed!");
            }
            const { data } = await signForListingService({
                collection,
                tokenId,
                currency,
                quantity,
                price,
                account,
                signature,
            });
            toast.dismiss(sign_toast_id);
            if (!data?.status) {
                Toast.error(data.message);
                return rejectWithValue(data.message);
            }
            load_toast_id = toast.loading("Listing NFT...");
            //current date + 1000 years
            const date = new Date();
            date.setDate(date.getDate() + 365 * 1000);
            const futureTimeStamp = Math.floor(date.getTime() / 1000);

            const startTimestamp = Math.floor(Date.now() / 1000);
            const endTimestamp = endListingDate
                ? Math.floor(new Date(endListingDate).getTime() / 1000)
                : futureTimeStamp;
            const payload = {
                assetContract: collection,
                tokenId: tokenId,
                quantity: quantity,
                currency: currency,
                pricePerToken: toWei(price),
                startTimestamp: startTimestamp,
                endTimestamp: endTimestamp,
                reserved: false,
            };

            console.log("testing", payload);
            const result = await addToListing({
                wallet,
                chain,
                payload,
            });

            toast.dismiss(load_toast_id);
            if (result) {
                const { global } = getState();
                const {
                    walletDetalis: { chainId, account },
                } = global;
                dispatch(
                    getUserBalance({
                        chainId: chainId,
                        account: account,
                    })
                );
                Toast.success("NFT Was Listed Successfully!");
            } else {
                Toast.error("Failed Transaction!");
                return rejectWithValue("contract execution failed");
            }
        } catch (err) {
            sign_toast_id && toast.dismiss(sign_toast_id);
            load_toast_id && toast.dismiss(load_toast_id);
            approve_toast_id && toast.dismiss(approve_toast_id);
            console.log("err", err);
            return rejectWithValue(err.message);
        }
    }
);

export const buyFromListingAction = createAsyncThunk(
    "market/buyFromListingAction",
    async (
        {
            wallet,
            chain,
            currency,
            quantity,
            listingId,
            account,
            price,
            currencyDecimals,
            signMessage,
        },
        { rejectWithValue, dispatch, getState }
    ) => {
        let sign_toast_id;
        let load_toast_id;
        try {
            sign_toast_id = toast.loading("Signing...");
            console.log("currency", currency);
            const signature = await signMessage({
                message: `I want to buy listing item with this information: ${chain?.id}:${currency}:${listingId}:${account}:${price}:${quantity}`,
            });
            if (!signature) {
                Toast.error("Signing Failed!");
                toast.dismiss(sign_toast_id);
                return rejectWithValue("Signing Failed!");
            }
            const { data } = await signForBuyListService({
                chainId: chain?.id,
                currency,
                listingId,
                account,
                price,
                quantity,
                signature,
            });
            toast.dismiss(sign_toast_id);
            if (!data?.status) {
                Toast.error(data.message);
                return rejectWithValue(data.message);
            }
            load_toast_id = toast.loading("Purchasing NFT...");
            const result = await buyFromListing({
                wallet,
                chain,
                currency,
                currencyDecimals,
                listingId,
                account,
                price,
                quantity,
            });
            toast.dismiss(load_toast_id);
            if (result) {
                dispatch(setRefetchAction(true));
                const { global } = getState();
                const {
                    walletDetalis: { chainId, account },
                } = global;
                dispatch(
                    getUserBalance({
                        chainId: chainId,
                        account: account,
                    })
                );
                Toast.success("NFT Purchased Successfully");
            } else {
                Toast.error("Failed Transaction!");
                return rejectWithValue("contract execution failed");
            }
            return;
        } catch (err) {
            sign_toast_id && toast.dismiss(sign_toast_id);
            load_toast_id && toast.dismiss(load_toast_id);
            console.log("err", err);
            return rejectWithValue(err.message);
        }
    }
);

export const cancleListingAction = createAsyncThunk(
    "market/cancleListingAction",
    async (
        { wallet, chain, listingId, account, signMessage },
        { rejectWithValue, dispatch, getState }
    ) => {
        let sign_toast_id;
        let load_toast_id;
        try {
            sign_toast_id = toast.loading("Signing...");
            const signature = await signMessage({
                message: `Cancelling Listing...: ${listingId}:${account}`,
            });

            if (!signature) {
                Toast.error("Signing Failed!");
                toast.dismiss(sign_toast_id);
                return rejectWithValue("Signing Failed!");
            }
            const { data } = await signForCancleListing({
                listingId,
                account,
                signature,
            });
            toast.dismiss(sign_toast_id);
            if (!data?.status) {
                Toast.error(data.message);
                return rejectWithValue(data.message);
            }
            load_toast_id = toast.loading("Cancelling Listing...");

            const result = await cancleListing({
                wallet,
                chain,
                payload: listingId,
            });

            toast.dismiss(load_toast_id);
            if (result) {
                dispatch(setRefetchAction(true));
                const { global } = getState();
                const {
                    walletDetalis: { chainId, account },
                } = global;
                dispatch(
                    getUserBalance({
                        chainId: chainId,
                        account: account,
                    })
                );
                Toast.success("Listing Was Cancelled!.");
            } else {
                Toast.error("Failed Transaction!");
                return rejectWithValue("contract execution failed");
            }
        } catch (err) {
            sign_toast_id && toast.dismiss(sign_toast_id);
            load_toast_id && toast.dismiss(load_toast_id);
            console.log("err", err);
            return rejectWithValue(err.message);
        }
    }
);

//auction
export const createAuctionAction = createAsyncThunk(
    "market/createAuctionAction",
    async (
        {
            wallet,
            chain,
            type,
            collection,
            tokenId,
            currency,
            quantity,
            account,
            minimumBidAmount,
            buyoutBidAmount,
            bidBufferBps,
            endTimestamp,
            signMessage,
        },
        { rejectWithValue, dispatch, getState }
    ) => {
        let sign_toast_id;
        let load_toast_id;
        try {
            sign_toast_id = toast.loading("Signing...");
            const signature = await signMessage({
                message: `I want to create auction with this information: ${collection}:${tokenId}:${currency}:${quantity}:${minimumBidAmount}:${buyoutBidAmount}:${endTimestamp}:${account}`,
            });

            if (!signature) {
                Toast.error("Signing Failed!");
                toast.dismiss(sign_toast_id);
                return rejectWithValue("Signing failed!");
            }
            const { data } = await signForAuctionServies({
                collection,
                tokenId,
                currency,
                quantity,
                minimumBidAmount,
                buyoutBidAmount,
                endTimestamp,
                account,
                signature,
            });
            toast.dismiss(sign_toast_id);
            if (!data?.status) {
                Toast.error(data.message);
                return rejectWithValue(data.message);
            }
            const approve_toast_id = toast.loading("Checking Approval...");
            const approvedStatus = await approveNFTOnMarket({
                type,
                collection,
                account,
                wallet,
                chain,
                tokenId,
            });
            toast.dismiss(approve_toast_id);
            if (!approvedStatus) {
                Toast.error("Approval Failed!");
                return rejectWithValue("Approval failed!");
            }

            load_toast_id = toast.loading("Creating The Auction...");

            const startTimestamp = Math.floor(Date.now() / 1000);
            const endTime = Math.floor(new Date(endTimestamp).getTime() / 1000);
            const payload = {
                assetContract: collection,
                tokenId: tokenId,
                quantity: quantity,
                currency: currency,
                minimumBidAmount: toWei(minimumBidAmount),
                buyoutBidAmount: toWei(buyoutBidAmount),
                timeBufferInSeconds: 1,
                bidBufferBps: Number(bidBufferBps) * 100,
                startTimestamp: startTimestamp,
                endTimestamp: endTime,
            };
            const result = await createAuction({
                wallet,
                chain,
                payload,
            });

            toast.dismiss(load_toast_id);
            if (result) {
                const { global } = getState();
                const {
                    walletDetalis: { chainId, account },
                } = global;
                dispatch(
                    getUserBalance({
                        chainId: chainId,
                        account: account,
                    })
                );
                Toast.success("Auction Created Successfully!");
                return true;
            } else {
                Toast.error("Failed Transaction!");
                return rejectWithValue("contract execution failed");
            }
        } catch (err) {
            sign_toast_id && toast.dismiss(sign_toast_id);
            load_toast_id && toast.dismiss(load_toast_id);
            console.log("err", err);
            return rejectWithValue(err.message);
        }
    }
);

export const placeBidInAuctionAction = createAsyncThunk(
    "market/placeBidInAuctionAction",
    async (
        {
            wallet,
            chain,
            auctionId,
            bidAmount,
            account,
            refetchBids,
            currency,
            signMessage,
        },
        { rejectWithValue, dispatch, getState }
    ) => {
        let sign_toast_id;
        let load_toast_id;
        try {
            sign_toast_id = toast.loading("Signing...");
            const signature = await signMessage({
                message: `I want to place bid with this information: ${auctionId}:${bidAmount}:${account}`,
            });

            if (!signature) {
                Toast.error("Signing Failed!");
                toast.dismiss(sign_toast_id);
                return rejectWithValue("Signing Failed!");
            }
            const { data } = await signForBidService({
                auctionId,
                bidAmount,
                account,
                signature,
            });
            toast.dismiss(sign_toast_id);
            if (!data?.status) {
                Toast.error(data.message);
                return rejectWithValue(data.message);
            }
            load_toast_id = toast.loading("Placing Bid...");

            const payload = {
                _auctionId: auctionId,
                _bidAmount: bidAmount,
            };

            const result = await placeBidInAuction({
                wallet,
                chain,
                payload,
                currency,
                account,
            });

            toast.dismiss(load_toast_id);
            if (result) {
                // const valid = await getValidAuction({
                // 	chainId: chainId,
                // 	provider: provider,
                // 	auctionId: auctionId,
                // });
                // if (!valid) {
                const { global } = getState();
                const {
                    walletDetalis: { chainId, account },
                } = global;
                dispatch(
                    getUserBalance({
                        chainId: chainId,
                        account: account,
                    })
                );
                if (refetchBids) dispatch(setRefetchAction(true));
                // }

                Toast.success("Bid Placed Successfully! ");
            } else {
                Toast.error("Failed Transaction!");
                return rejectWithValue("contract execution failed");
            }
        } catch (err) {
            sign_toast_id && toast.dismiss(sign_toast_id);
            load_toast_id && toast.dismiss(load_toast_id);
            console.log("err", err);
            return rejectWithValue(err.message);
        }
    }
);

export const cancleAuctionAction = createAsyncThunk(
    "market/cancleAuctionAction",
    async (
        { wallet, chain, auctionId, account, signMessage },
        { rejectWithValue, dispatch, getState }
    ) => {
        let sign_toast_id;
        let load_toast_id;
        try {
            sign_toast_id = toast.loading("Signing...");
            const signature = await signMessage({
                message: `I want to cancel auction with this information: ${auctionId}:${account}`,
            });

            if (!signature) {
                Toast.error("Signing Failed!");
                toast.dismiss(sign_toast_id);
                return rejectWithValue("Signing Failed!");
            }
            const { data } = await signForCancleAuction({
                auctionId,
                account,
                signature,
            });
            toast.dismiss(sign_toast_id);
            if (!data?.status) {
                Toast.error(data.message);
                return rejectWithValue(data.message);
            }
            load_toast_id = toast.loading("Cancelling Auction...");

            const result = await cancleAuction({
                wallet,
                chain,
                payload: auctionId,
            });

            // dispatch(
            // 	getAuctionDetailsAction({
            // 		provider,
            // 		chainId,
            // 		account,
            // 		auctionId,
            // 		query,
            // 	})
            // );

            toast.dismiss(load_toast_id);
            if (result) {
                dispatch(setRefetchAction(true));
                const { global } = getState();
                const {
                    walletDetalis: { chainId, account },
                } = global;
                dispatch(
                    getUserBalance({
                        chainId: chainId,
                        account: account,
                    })
                );
                Toast.success("Auction Cancelled!");
            } else {
                Toast.error("Failed Transaction!");
                return rejectWithValue("contract execution failed");
            }
        } catch (err) {
            sign_toast_id && toast.dismiss(sign_toast_id);
            load_toast_id && toast.dismiss(load_toast_id);
            console.log("err", err);
            return rejectWithValue(err.message);
        }
    }
);

// For Seller
export const collectAuctionPayoutAction = createAsyncThunk(
    "market/collectAuctionPayoutAction",
    async (
        { wallet, chain, auctionId, account, signMessage },
        { rejectWithValue, dispatch, getState }
    ) => {
        let sign_toast_id;
        let load_toast_id;
        try {
            sign_toast_id = toast.loading("Signing...");
            const signature = await signMessage({
                message: `I want to collect auction payout with this information: ${auctionId}:${account}`,
            });

            if (!signature) {
                Toast.error("Signing Failed!");
                toast.dismiss(sign_toast_id);
                return rejectWithValue("Signing Failed!");
            }
            const { data } = await signForCollectAuctionPayout({
                auctionId,
                account,
                signature,
            });
            toast.dismiss(sign_toast_id);
            if (!data?.status) {
                Toast.error(data.message);
                return rejectWithValue(data.message);
            }
            load_toast_id = toast.loading("Please Wait...");

            const result = await collectAuctionPayout({
                wallet,
                chain,
                auctionId,
            });

            // dispatch(
            // 	getAuctionDetailsAction({
            // 		provider,
            // 		chainId,
            // 		account,
            // 		auctionId,
            // 		query,
            // 	})
            // );

            toast.dismiss(load_toast_id);
            if (result) {
                const { global } = getState();
                const {
                    walletDetalis: { chainId, account },
                } = global;
                dispatch(
                    getUserBalance({
                        chainId: chainId,
                        account: account,
                    })
                );
                dispatch(setRefetchAction(true));
                Toast.success("Payout Collected!");
            } else {
                Toast.error("Failed Transaction!");
                return rejectWithValue("contract execution failed");
            }
        } catch (err) {
            sign_toast_id && toast.dismiss(sign_toast_id);
            load_toast_id && toast.dismiss(load_toast_id);
            console.log("err", err);
            return rejectWithValue(err.message);
        }
    }
);

// For Buyer
export const collectAuctionTokensAction = createAsyncThunk(
    "market/collectAuctionTokensAction",
    async (
        { wallet, chain, auctionId, account, signMessage },
        { rejectWithValue, dispatch, getState }
    ) => {
        let sign_toast_id;
        let load_toast_id;
        try {
            sign_toast_id = toast.loading("Signing...");
            const signature = await signMessage({
                message: `I want to collect auction tokens with this information: ${auctionId}:${account}`,
            });

            if (!signature) {
                Toast.error("Signing Failed!");
                toast.dismiss(sign_toast_id);
                return rejectWithValue("Signing Failed!");
            }
            const { data } = await signForCollectAuctionToken({
                auctionId,
                account,
                signature,
            });
            toast.dismiss(sign_toast_id);
            if (!data?.status) {
                Toast.error(data.message);
                return rejectWithValue(data.message);
            }
            load_toast_id = toast.loading("Please Wait...");

            const result = await collectAuctionTokens({
                wallet,
                chain,
                auctionId,
            });

            // dispatch(
            // 	getAuctionDetailsAction({
            // 		provider,
            // 		chainId,
            // 		account,
            // 		auctionId,
            // 		query,
            // 	})
            // );

            toast.dismiss(load_toast_id);
            if (result) {
                dispatch(setRefetchAction(true));
                const { global } = getState();
                const {
                    walletDetalis: { chainId, account },
                } = global;
                dispatch(
                    getUserBalance({
                        chainId: chainId,
                        account: account,
                    })
                );
                Toast.success(
                    "Payout was collected! Data will be synced after some block confirmation..."
                );
            } else {
                Toast.error("Failed Transaction!");
                return rejectWithValue("contract execution failed");
            }
        } catch (err) {
            sign_toast_id && toast.dismiss(sign_toast_id);
            load_toast_id && toast.dismiss(load_toast_id);
            console.log("err", err);
            return rejectWithValue(err.message);
        }
    }
);

//offer
export const makeOfferAction = createAsyncThunk(
    "market/makeOfferAction",
    async (
        {
            wallet,
            chain,
            collection,
            tokenId,
            currency,
            quantity,
            price,
            account,
            endTimestamp,
            signMessage,
        },
        { rejectWithValue, dispatch, getState }
    ) => {
        let sign_toast_id;
        let load_toast_id;
        try {
            const endTime = Math.floor(new Date(endTimestamp).getTime() / 1000);

            sign_toast_id = toast.loading("Signing...");
            const signature = await signMessage({
                message: `I want to make offer with this information: ${collection}:${tokenId}:${currency?.value}:${quantity}:${price}:${endTime}:${account}`,
            });

            if (!signature) {
                Toast.error("Signing Failed!");
                toast.dismiss(sign_toast_id);
                return rejectWithValue("Signing Failed!");
            }
            const { data } = await signForMakeOffer({
                collection,
                tokenId,
                currency: currency?.value,
                quantity,
                price,
                endTimestamp: endTime,
                account,
                signature,
            });
            toast.dismiss(sign_toast_id);
            if (!data?.status) {
                Toast.error(data.message);
                return rejectWithValue(data.message);
            }
            load_toast_id = toast.loading("Submitting The Offer...");

            const payload = {
                assetContract: collection,
                tokenId: tokenId,
                quantity: quantity,
                currency: currency?.value,
                totalPrice: parseToWei(Number(price), currency?.decimal),
                expirationTimestamp: endTime,
            };

            console.log("payload", payload);
            const result = await makeOffer({
                wallet,
                chain,
                payload,
                account,
            });

            toast.dismiss(load_toast_id);
            if (result) {
                dispatch(setRefetchAction(true));
                const { global } = getState();
                const {
                    walletDetalis: { chainId, account },
                } = global;
                dispatch(
                    getUserBalance({
                        chainId: chainId,
                        account: account,
                    })
                );
                // dispatch(
                // 	getOfferssAction({
                // 		...refetch,
                // 	})
                // );
                // dispatch(
                // 	getItemDetailsActions({
                // 		query,
                // 		account,
                // 		chainId,
                // 		library: provider,
                // 	})
                // );
                Toast.success("Offer Created Successfully!");
            } else {
                Toast.error("Failed Transaction!");
                return rejectWithValue("contract execution failed");
            }
        } catch (err) {
            sign_toast_id && toast.dismiss(sign_toast_id);
            load_toast_id && toast.dismiss(load_toast_id);
            console.log("err", err);
            return rejectWithValue(err.message);
        }
    }
);

export const cancleOfferAction = createAsyncThunk(
    "market/cancleOfferAction",
    async (
        { wallet, chain, offerId, account, signMessage },
        { rejectWithValue, dispatch, getState }
    ) => {
        let sign_toast_id;
        let load_toast_id;
        try {
            sign_toast_id = toast.loading("Signing...");
            const signature = await signMessage({
                message: `I want to cancel offer with this information: ${offerId}:${account}`,
            });

            if (!signature) {
                Toast.error("Signing Failed!");
                toast.dismiss(sign_toast_id);
                return rejectWithValue("Signing Failed!");
            }
            const { data } = await signForCancleOffer({
                offerId,
                account,
                signature,
            });
            toast.dismiss(sign_toast_id);
            if (!data?.status) {
                Toast.error(data.message);
                return rejectWithValue(data.message);
            }
            load_toast_id = toast.loading("Cancelling The Offer...");

            const result = await cancelOffer({
                wallet,
                chain,
                offerId,
            });

            toast.dismiss(load_toast_id);
            if (result) {
                // dispatch(
                // 	getOfferssAction({
                // 		...refetch,
                // 	})
                // );
                dispatch(setRefetchAction(true));
                const { global } = getState();
                const {
                    walletDetalis: { chainId, account },
                } = global;
                dispatch(
                    getUserBalance({
                        chainId: chainId,
                        account: account,
                    })
                );
                Toast.success("Offer Cancelled Successfully!");
            } else {
                Toast.error("Failed Transaction!");
                return rejectWithValue("contract execution failed");
            }
        } catch (err) {
            sign_toast_id && toast.dismiss(sign_toast_id);
            load_toast_id && toast.dismiss(load_toast_id);
            console.log("err", err);
            return rejectWithValue(err.message);
        }
    }
);

export const acceptOfferAction = createAsyncThunk(
    "market/acceptOfferAction",
    async (
        {
            wallet,
            chain,
            offerId,
            account,
            collection,
            type,
            tokenId,
            signMessage,
        },
        { rejectWithValue, dispatch, getState }
    ) => {
        let approve_toast_id;
        let sign_toast_id;
        let load_toast_id;
        try {
            approve_toast_id = toast.loading("Checking Approval...");
            const approvedStatus = await approveNFTOnMarket({
                type,
                collection,
                account,
                wallet,
                chain,
                tokenId,
            });
            console.log("approvedStatus", approvedStatus);
            toast.dismiss(approve_toast_id);
            if (!approvedStatus) {
                Toast.error("Approval Failed!");
                return rejectWithValue("Approval Failed!");
            }
            sign_toast_id = toast.loading("Signing...");
            const signature = await signMessage({
                message: `I want to accept offer with this information: ${offerId}:${account}`,
            });

            if (!signature) {
                Toast.error("Signing failed!");
                toast.dismiss(sign_toast_id);
                return rejectWithValue("Signing Failed!");
            }
            const { data } = await signForAcceptOffer({
                offerId,
                account,
                signature,
            });
            toast.dismiss(sign_toast_id);
            if (!data?.status) {
                Toast.error(data.message);
                return rejectWithValue(data.message);
            }
            load_toast_id = toast.loading("Accepting The Offer...");
            const result = await acceptOffer({
                wallet,
                chain,
                offerId,
            });

            toast.dismiss(load_toast_id);
            if (result) {
                // dispatch(
                // 	getOfferssAction({
                // 		...refetch,
                // 	})
                // );
                // dispatch(
                // 	getItemDetailsActions({
                // 		query,
                // 		account,
                // 		chainId,
                // 		library: provider,
                // 	})
                // );
                dispatch(setRefetchAction(true));
                const { global } = getState();
                const {
                    walletDetalis: { chainId, account },
                } = global;
                dispatch(
                    getUserBalance({
                        chainId: chainId,
                        account: account,
                    })
                );
                Toast.success("Offer Accepted Successfully!");
            } else {
                Toast.error("Failed Transaction!");
                return rejectWithValue("contract execution failed");
            }
        } catch (err) {
            sign_toast_id && toast.dismiss(sign_toast_id);
            load_toast_id && toast.dismiss(load_toast_id);
            approve_toast_id && toast.dismiss(approve_toast_id);
            console.log("err", err);
            return rejectWithValue(err.message);
        }
    }
);

//collections
export const createCollectionAction = createAsyncThunk(
    "market/createCollectionAction",
    async (values, { rejectWithValue, dispatch, getState }) => {
        /**
         * values = {
         * 	fileRatio,
         * chainId,
         * provider,
         *  payload: {
         *  }
         * }
         */
        let optimize_toast_id;
        let upload_toast_id;
        let ipfs_toast_id;
        let load_toast_id;
        try {
            optimize_toast_id = toast.loading("Optimizing Images...");
            const formData = new FormData();
            const lowFile = await resizeFile(
                values?.payload?.collectionFile,
                100,
                Math.floor(100 * values?.fileRatio)
            );
            const mediumFile = await resizeFile(
                values?.payload?.collectionFile,
                250,
                Math.floor(250 * values?.fileRatio)
            );
            const highFile = await resizeFile(
                values?.payload?.collectionFile,
                500,
                Math.floor(500 * values?.fileRatio)
            );
            formData.append("originals", values?.payload?.collectionFile);
            formData.append("lows", lowFile);
            formData.append("mediums", mediumFile);
            formData.append("highs", highFile);
            if (values?.payload?.collectionCoverFile) {
                formData.append(
                    "banners",
                    values?.payload?.collectionCoverFile
                );
            }

            toast.dismiss(optimize_toast_id);
            upload_toast_id = toast.loading("Uploading Media...");

            const { data } = await uploadCollectionAssetService(formData);

            toast.dismiss(upload_toast_id);

            const openseadata = {
                name: values?.payload?.name,
                description: values?.payload?.description,
                category: values?.payload?.category,
                symbol: values?.payload?.symbol,
                image: data?.data?.original,
                lowLogo: data?.data?.lowLogo,
                mediumLogo: data?.data?.mediumLogo,
                highLogo: data?.data?.highLogo,
                coverUrl: data?.data?.coverUrl,
            };
            ipfs_toast_id = toast.loading("Uploading Metadata To IPFS...");
            const ipfsHash = await getIpfsHash(openseadata);

            toast.dismiss(ipfs_toast_id);

            let collectionUri = `${process.env.IPFS_GATEWAY}${ipfsHash}`;

            load_toast_id = toast.loading("Creating The Collection...");
            const result = await createCollection({
                name: values?.payload?.name,
                uri: collectionUri,
                royaltyBps: Number(values?.payload?.royaltyBps) * 100,
                wallet: values?.wallet,
                chain: values?.chain,
                type: values?.payload?.type,
            });
            toast.dismiss(load_toast_id);
            if (result) {
                const { global } = getState();
                const {
                    walletDetalis: { chainId, account },
                } = global;
                dispatch(
                    getUserBalance({
                        chainId: chainId,
                        account: account,
                    })
                );
                Toast.success("Collection Was Created Successfully!");
            } else {
                Toast.error("Failed Transaction!");
                return rejectWithValue("contract execution failed");
            }
        } catch (err) {
            optimize_toast_id && toast.dismiss(optimize_toast_id);
            upload_toast_id && toast.dismiss(upload_toast_id);
            ipfs_toast_id && toast.dismiss(ipfs_toast_id);
            load_toast_id && toast.dismiss(load_toast_id);

            console.log("err", err);

            Toast.error("Failed To Upload Media.");
            console.log("Uploading Media Error:", err);
            return rejectWithValue(err.message);
        }
    }
);
export const collectionUriUpdateAction = createAsyncThunk(
    "market/collectionUriUpdateAction",
    async (
        {
            collection,
            signMessage,
            collectionCoverFile,
            collectionFile,
            description,
            fileRatio,
            linksData,
            ownerAddress,
            wallet,
            chain,
        },
        { rejectWithValue, dispatch, getState }
    ) => {
        /**
         * values = {
         * 	fileRatio,
         * chainId,
         * provider,
         *  payload: {
         *  }
         * }
         */
        let upload_toast_id;
        let ipfs_toast_id;
        let load_toast_id;
        let sign_toast_id;
        let links_toast_id;
        try {
            sign_toast_id = toast.loading("Signing...");
            const { global } = getState();
            const { account } = global;
            const signature = await signMessage({
                message: `I want to update my collection :${account?.toLowerCase()}:${
                    collection?.address
                }:${collection?.chainId}`,
            });
            if (!signature) {
                Toast.error("Signing failed!");
                return;
            }
            toast.dismiss(sign_toast_id);
            links_toast_id = toast.loading("Updating links...");
            if (
                (linksData?.website &&
                    linksData?.website !== collection?.website) ||
                (linksData?.twitter &&
                    linksData?.twitter !== collection?.twitter) ||
                (linksData?.telegram &&
                    linksData?.telegram !== collection?.telegram) ||
                (linksData?.discord &&
                    linksData?.discord !== collection?.discord)
            ) {
                let linksPayload = {
                    account: ownerAddress,
                    itemCollection: collection?.address,
                    chainId: collection?.chainId,
                    twitter: linksData?.twitter,
                    website: linksData?.website,
                    telegram: linksData?.telegram,
                    discord: linksData?.discord,
                };

                try {
                    const data = await updateCollectionLinksService(
                        linksPayload
                    );
                } catch (error) {
                    console.error("Error updating links:", error);
                    toast.dismiss(links_toast_id);
                }
            }
            toast.dismiss(links_toast_id);
            let payload = {
                name: collection?.name,
                description: collection?.description,
                category: collection?.category,
                image: collection?.image,
                lowLogo: collection?.lowLogo,
                mediumLogo: collection?.mediumLogo,
                highLogo: collection?.highLogo,
                coverUrl: collection?.coverUrl,
            };
            if (
                (collectionFile && collectionFile instanceof File) ||
                (collectionCoverFile && collectionCoverFile instanceof File)
            ) {
                const formData = new FormData();
                if (collectionFile && collectionFile instanceof File) {
                    const lowFile = await resizeFile(
                        collectionFile,
                        100,
                        Math.floor(100 * fileRatio)
                    );
                    const mediumFile = await resizeFile(
                        collectionFile,
                        250,
                        Math.floor(250 * fileRatio)
                    );
                    const highFile = await resizeFile(
                        collectionFile,
                        500,
                        Math.floor(500 * fileRatio)
                    );
                    formData.append("originals", collectionFile);
                    formData.append("lows", lowFile);
                    formData.append("mediums", mediumFile);
                    formData.append("highs", highFile);
                    // formData.append("banners", collectionCoverFile);
                }
                if (
                    collectionCoverFile &&
                    collectionCoverFile instanceof File
                ) {
                    formData.append("banners", collectionCoverFile);
                }

                upload_toast_id = toast.loading("Uploading Media...");
                const { data } = await uploadCollectionAssetService(formData);

                if (data?.data?.original) {
                    payload.image = data?.data?.original;
                    payload.lowLogo = data?.data?.lowLogo;
                    payload.mediumLogo = data?.data?.mediumLogo;
                    payload.highLogo = data?.data?.highLogo;
                }
                if (data?.data?.coverUrl) {
                    payload.coverUrl = data?.data?.coverUrl;
                }

                toast.dismiss(upload_toast_id);
            }
            if (description && description != collection?.description) {
                payload.description = description;
            }

            ipfs_toast_id = toast.loading("Uploading Metadata To IPFS...");
            const ipfsHash = await getIpfsHash(payload);

            toast.dismiss(ipfs_toast_id);

            let collectionUri = `${process.env.IPFS_GATEWAY}${ipfsHash}`;

            load_toast_id = toast.loading("Updating Collection...");
            const result = await collectionUriUpdate({
                collectionAddress: collection?.address,
                uri: collectionUri,
                wallet: wallet,
                chain: chain,
                type: collection?.type,
            });
            toast.dismiss(load_toast_id);
            if (result) {
                const { global } = getState();
                const {
                    walletDetalis: { chainId, account },
                } = global;
                dispatch(
                    getUserBalance({
                        chainId: chainId,
                        account: account,
                    })
                );
                Toast.success("Collection Updated Successfully!");
            } else {
                Toast.error("Failed Transaction!");
                return rejectWithValue("contract execution failed");
            }
        } catch (err) {
            upload_toast_id && toast.dismiss(upload_toast_id);
            ipfs_toast_id && toast.dismiss(ipfs_toast_id);
            load_toast_id && toast.dismiss(load_toast_id);
            sign_toast_id && toast.dismiss(sign_toast_id);
            links_toast_id && toast.dismiss(links_toast_id);
            console.log("err", err);
            Toast.error("Failed To Upload Media.");
            console.log("uploading image error:", err);
            return rejectWithValue(err.message);
        }
    }
);

export const importCollectionAction = createAsyncThunk(
    "market/importCollectionAction",
    async (values, { rejectWithValue, dispatch, getState }) => {
        /**
         * values = {
         * 	fileRatio,
         * chainId,
         * provider,
         *  payload: {
         *  }
         * }
         */

        console.log("values", values);
        let optimize_toast_id;
        let upload_toast_id;
        let ipfs_toast_id;
        let load_toast_id;
        try {
            optimize_toast_id = toast.loading("Optimizing Images...");
            const formData = new FormData();
            const lowFile = await resizeFile(
                values?.payload?.collectionFile,
                100,
                Math.floor(100 * values?.fileRatio)
            );
            const mediumFile = await resizeFile(
                values?.payload?.collectionFile,
                250,
                Math.floor(250 * values?.fileRatio)
            );
            const highFile = await resizeFile(
                values?.payload?.collectionFile,
                500,
                Math.floor(500 * values?.fileRatio)
            );
            formData.append("originals", values?.payload?.collectionFile);
            formData.append("lows", lowFile);
            formData.append("mediums", mediumFile);
            formData.append("highs", highFile);
            if (values?.payload?.collectionCoverFile) {
                formData.append(
                    "banners",
                    values?.payload?.collectionCoverFile
                );
            }

            toast.dismiss(optimize_toast_id);
            upload_toast_id = toast.loading("Uploading Images...");

            const { data } = await uploadCollectionAssetService(formData);

            toast.dismiss(upload_toast_id);

            const openseadata = {
                name: values?.payload?.name,
                description: values?.payload?.description,
                category: values?.payload?.category,
                image: data?.data?.original,
                lowLogo: data?.data?.lowLogo,
                mediumLogo: data?.data?.mediumLogo,
                highLogo: data?.data?.highLogo,
                coverUrl: data?.data?.coverUrl,
            };
            ipfs_toast_id = toast.loading("Uploading Metadata To IPFS...");
            const ipfsHash = await getIpfsHash(openseadata);

            toast.dismiss(ipfs_toast_id);

            let collectionUri = `${process.env.IPFS_GATEWAY}${ipfsHash}`;

            load_toast_id = toast.loading("Importing The Collection...");
            const result = await importCollection({
                name: values?.payload?.name,
                uri: collectionUri,
                address: values?.payload?.contractAddress,
                wallet: values?.wallet,
                chain: values?.chain,
            });
            toast.dismiss(load_toast_id);
            if (result) {
                const { global } = getState();
                const {
                    walletDetalis: { chainId, account },
                } = global;
                dispatch(
                    getUserBalance({
                        chainId: chainId,
                        account: account,
                    })
                );
                Toast.success("Collection Successfully Imported!");
            } else {
                Toast.error("Failed Transaction!");
                return rejectWithValue("contract execution failed");
            }
        } catch (err) {
            optimize_toast_id && toast.dismiss(optimize_toast_id);
            upload_toast_id && toast.dismiss(upload_toast_id);
            ipfs_toast_id && toast.dismiss(ipfs_toast_id);
            load_toast_id && toast.dismiss(load_toast_id);

            console.log("err", err);

            Toast.error("Failed To Upload Media.");
            console.log("uploading image error:", err);
            return rejectWithValue(err.message);
        }
    }
);

//items
export const createSingleNftAction = createAsyncThunk(
    "market/createSingleNftAction",
    async (values, { rejectWithValue, dispatch, getState }) => {
        /**
         * values = {
         *
         * chainId,
         * provider,
         *  payload: {
         *  }
         * }
         */
        dispatch(setProgress(0.1));
        let upload_toast_id;
        let ipfs_toast_id;
        let load_toast_id;
        try {
            upload_toast_id = toast.loading("Uploading Media To IPFS!");
            let coverImgHash;

            let mainFileHash = values?.payload?.mainFile;

            if (mainFileHash instanceof File) {
                const localIHase = await getIpfsHashFromFile(
                    values?.payload?.mainFile
                );

                mainFileHash`${process.env.IPFS_GATEWAY}${localIHase}`;
            }

            if (
                values?.payload?.asset_type === "image" &&
                !values?.payload?.coverImgFile
            ) {
                // coverImgHash = `https://ipfs.tesseractx.com/ipfs/${mainFileHash}`;
                coverImgHash = mainFileHash;
            } else if (values?.payload?.coverImgFile instanceof File) {
                const coverhash = await getIpfsHashFromFile(
                    values?.payload?.coverImgFile
                );
                coverImgHash = `${process.env.IPFS_GATEWAY}${coverhash}`;
            }

            let thumbnail = values?.payload?.thumbnail;

            if (thumbnail && thumbnail instanceof File) {
                const coverhash = await getIpfsHashFromFile(
                    values?.payload?.thumbnail
                );
                thumbnail = `${process.env.IPFS_GATEWAY}${coverhash}`;
            }
            dispatch(setProgress(getRandom(25, 40)));
            toast.dismiss(upload_toast_id);

            const openseadata = {
                asset_type: values?.payload?.asset_type,
                name: values?.payload?.name,
                description: values?.payload?.description,
                category: values?.payload?.category,
                attributes: values?.payload?.attributesData,
                animation_url:
                    values?.payload?.asset_type === "video" ||
                    values?.payload?.asset_type === "audio"
                        ? mainFileHash
                        : "",
                image:
                    values?.payload?.asset_type === "video" ||
                    values?.payload?.asset_type === "audio"
                        ? coverImgHash
                        : mainFileHash,
                meta: {
                    thumbnail: thumbnail || "",
                },
            };
            ipfs_toast_id = toast.loading("Uploading Metadata To IPFS...");
            const ipfsHash = await getIpfsHash(openseadata);
            dispatch(setProgress(getRandom(60, 75)));
            toast.dismiss(ipfs_toast_id);

            let tokenUri = `${process.env.IPFS_GATEWAY}${ipfsHash}`;

            load_toast_id = toast.loading("Creating NFT...");
            const result = await addSingleItem({
                collectionAddress: values?.payload?.collectionAddress,
                uri: tokenUri,
                wallet: values?.wallet,
                chain: values?.chain,
            });
            toast.dismiss(load_toast_id);
            dispatch(setProgress(100));
            if (result) {
                const { global } = getState();
                const {
                    walletDetalis: { chainId, account },
                } = global;
                dispatch(
                    getUserBalance({
                        chainId: chainId,
                        account: account,
                    })
                );
                Toast.success("The NFT Was Successfully Minted!");
            } else {
                dispatch(setProgress(0));
                Toast.error("Failed Transaction!");
                return rejectWithValue("contract execution failed");
            }
        } catch (err) {
            dispatch(setProgress(0));
            upload_toast_id && toast.dismiss(upload_toast_id);
            ipfs_toast_id && toast.dismiss(ipfs_toast_id);
            load_toast_id && toast.dismiss(load_toast_id);
            console.log("err", err);
            Toast.error("failed to upload image.");
            console.log("uploading image error:", err);
            return rejectWithValue(err.message);
        }
    }
);

export const createMultipleNftAction = createAsyncThunk(
    "market/createMultipleNftAction",
    async (values, { rejectWithValue, dispatch, getState }) => {
        /**
         * values = {
         *
         * chainId,
         * provider,
         *  payload: {
         *  }
         * }
         */
        dispatch(setProgress(0.1));
        let upload_toast_id;
        let ipfs_toast_id;
        let load_toast_id;
        try {
            upload_toast_id = toast.loading("Uploading Media To IPFS!");
            let coverImgHash;
            let mainFileHash = values?.payload?.mainFile;

            if (mainFileHash instanceof File) {
                const localIHase = await getIpfsHashFromFile(
                    values?.payload?.mainFile
                );

                mainFileHash`${process.env.IPFS_GATEWAY}${localIHase}`;
            }
            if (
                values?.payload?.asset_type === "image" &&
                !values?.payload?.coverImgFile
            ) {
                coverImgHash = mainFileHash;
            } else if (values?.payload?.coverImgFile instanceof File) {
                const coverhash = await getIpfsHashFromFile(
                    values?.payload?.coverImgFile
                );
                coverImgHash = `${process.env.IPFS_GATEWAY}${coverhash}`;
            }

            let thumbnail = values?.payload?.thumbnail;

            if (thumbnail && thumbnail instanceof File) {
                const coverhash = await getIpfsHashFromFile(
                    values?.payload?.thumbnail
                );
                thumbnail = `${process.env.IPFS_GATEWAY}${coverhash}`;
            }
            dispatch(setProgress(getRandom(25, 40)));
            toast.dismiss(upload_toast_id);

            const openseadata = {
                asset_type: values?.payload?.asset_type,
                name: values?.payload?.name,
                description: values?.payload?.description,
                category: values?.payload?.category,
                attributes: values?.payload?.attributesData,
                animation_url:
                    values?.payload?.asset_type === "video" ||
                    values?.payload?.asset_type === "audio"
                        ? mainFileHash
                        : "",
                image:
                    values?.payload?.asset_type === "video" ||
                    values?.payload?.asset_type === "audio"
                        ? coverImgHash
                        : mainFileHash,
                meta: {
                    thumbnail: thumbnail || "",
                },
            };
            console.log("openseadata", openseadata);
            ipfs_toast_id = toast.loading("Uploading Metadata To IPFS...");
            const ipfsHash = await getIpfsHash(openseadata);
            toast.dismiss(ipfs_toast_id);
            dispatch(setProgress(getRandom(60, 75)));

            let tokenUri = `${process.env.IPFS_GATEWAY}${ipfsHash}`;

            load_toast_id = toast.loading("Creating Multiple NFT's...");
            const result = await addMultiItem({
                collectionAddress: values?.payload?.collectionAddress,
                uri: tokenUri,
                supply: values?.payload?.supply,
                wallet: values?.wallet,
                chain: values?.chain,
            });
            toast.dismiss(load_toast_id);
            dispatch(setProgress(100));
            if (result) {
                const { global } = getState();
                const {
                    walletDetalis: { chainId, account },
                } = global;
                dispatch(
                    getUserBalance({
                        chainId: chainId,
                        account: account,
                    })
                );
                Toast.success("NFT's Minted Successfully!'");
            } else {
                dispatch(setProgress(0));
                Toast.error("Failed Transaction!");
                return rejectWithValue("contract execution failed");
            }
        } catch (err) {
            dispatch(setProgress(0));
            upload_toast_id && toast.dismiss(upload_toast_id);
            ipfs_toast_id && toast.dismiss(ipfs_toast_id);
            load_toast_id && toast.dismiss(load_toast_id);
            console.log("err", err);
            Toast.error("failed to upload image.");
            console.log("uploading image error:", err);
            return rejectWithValue(err.message);
        }
    }
);

export const purchaseMembership = createAsyncThunk(
    "market/purchaseMembership",
    async (
        {
            wallet,
            chain,
            account,
            period,
            type,
            value,
            currency,
            currencyDecimals = 18,
            signMessage,
        },
        { rejectWithValue, dispatch, getState }
    ) => {
        let sign_toast_id;
        let load_toast_id;
        try {
            sign_toast_id = toast.loading("Signing...");
            const signature = await signMessage({
                message: `I want to subscribe membership plan with this information: ${value}:${account}`,
            });

            if (!signature) {
                Toast.error("Signing Failed!");
                toast.dismiss(sign_toast_id);
                return rejectWithValue("Signing Failed!");
            }
            const { data } = await signForMemberShip({
                value,
                account,
                signature,
            });
            toast.dismiss(sign_toast_id);
            if (!data?.status) {
                Toast.error(data.message);
                return rejectWithValue(data.message);
            }
            load_toast_id = toast.loading("Unlocking...");

            const result = await subscribeMemberShip({
                wallet,
                chain,
                period,
                type,
                value,
                currency,
                currencyDecimals,
            });

            toast.dismiss(load_toast_id);
            if (result) {
                // dispatch(
                // 	getOfferssAction({
                // 		...refetch,
                // 	})
                // );

                Toast.success("Successfully Unlocked");
                localStorage.removeItem("connectedWallet");
                window.location.reload();
            } else {
                Toast.error("Failed Transaction!");
                return rejectWithValue("contract execution failed");
            }
        } catch (err) {
            sign_toast_id && toast.dismiss(sign_toast_id);
            load_toast_id && toast.dismiss(load_toast_id);
            console.log("err", err);
            return rejectWithValue(err.message);
        }
    }
);
