import { ITEM_LISTING_STATUS } from "@/constant";
import { getBalanceInfo, getValidOffer } from "@/contracts";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import {
    acceptOfferAction,
    cancleOfferAction,
} from "@/redux/actions/marketAction";
import {
    ACTION_TYPE,
    marketState,
    setActionItem,
} from "@/redux/reducer/marketSlice";
import { Button } from "@/styles/pages/main.style";
import { Toast, validateNetwork } from "@/utils";
import { useEffect, useMemo, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MakeOfferButton from "./MakeOfferButton";
import ListingButtion from "./ListingButtion";

const OfferSectionButtons = () => {
    const { chainId, account, library, sdk, wallet, chain, signMessage } = useActiveWeb3React();
    const { itemDetails, selectedItem, contractLoading, currentAction } =
        useSelector(marketState);
    const dispatch = useDispatch();

    const [listingDetails, setListingDetails] = useState();
    const [loading, setLoading] = useState(false);
    const [nftBalance, setNftBalance] = useState(0);

    useEffect(() => {
        if (!selectedItem || selectedItem?.type !== ITEM_LISTING_STATUS.OFFER)
            return;
        (async () => {
            try {
                if (selectedItem?.chainId !== chain?.id) return;
                setLoading(true);
                const [result, userBalance] = await Promise.all([
                    getValidOffer({
                        chain: chain,
                        offerId: selectedItem?.offerId,
                    }),
                    getBalanceInfo({
                        type: selectedItem?.standard,
                        collection: selectedItem?.itemCollection,
                        chain: chain,
                        account: account,
                        tokenId: selectedItem?.tokenId,
                    }),
                ]);
                console.log('userBalance', userBalance)
                setListingDetails(result);
                setNftBalance(Number(userBalance || 0));
            } catch (err) {
                console.log("err", err);
            } finally {
                setLoading(false);
            }
        })();
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
                selectedItem?.offerId === null ||
                selectedItem?.offerId === undefined
            )
                return;
            await fn();
        };
    };


    const cancleOffer = validateConnectionHOF(async () => {
        dispatch(setActionItem(ACTION_TYPE.CANCLEOFFER));
        const result = await dispatch(
            cancleOfferAction({
                wallet: wallet,
                chain: chain,
                account: account,
                offerId: selectedItem?.offerId,
                signMessage,
            })
        );
        if (
            result.type === "market/cancleOfferAction/fulfilled"
            // ||
            // result.type === "collection/createMultipleNftAction/fulfilled"
        ) {
            //do staff after sussfuly created nft
            // router.push({
            // 	pathname: "/collection/collection-items",
            // 	query: {
            // 		type: itemDetails?.standard,
            // 		collection: itemDetails?.itemCollection,
            // 	},
            // });
        }
    });

    const acceptOffer = validateConnectionHOF(async () => {
        dispatch(setActionItem(ACTION_TYPE.ACCEPTOFFER));
        const result = await dispatch(
            acceptOfferAction({
                wallet: wallet,
                chain: chain,
                account: account,
                offerId: selectedItem?.offerId,
                type: selectedItem?.standard,
                tokenId: selectedItem?.tokenId,
                collection: selectedItem?.itemCollection,
                signMessage,
            })
        );
        if (
            result.type === "market/acceptOfferAction/fulfilled"
            // ||
            // result.type === "collection/createMultipleNftAction/fulfilled"
        ) {
            //do staff after sussfuly created nft
            // router.push({
            // 	pathname: "/collection/collection-items",
            // 	query: {
            // 		type: itemDetails?.standard,
            // 		collection: itemDetails?.itemCollection,
            // 	},
            // });
        }
    });

    const acceptOfferButtonStatus = useMemo(() => {
        if (!account) {
            return {
                text: "Connect Wallet!",
                disabled: true,
            };
        }

        if (loading) {
            return {
                text: "Loading...",
                disabled: true,
            };
        }

        if (contractLoading && currentAction === ACTION_TYPE.ACCEPTOFFER) {
            return {
                text: <Spinner animation="border" size="sm" />,
                disabled: true,
            };
        }
        if (nftBalance < +selectedItem?.quantity) {
            return {
                text: "Accept Offer",
                disabled: true,
            };
        }
        return {
            text: "Accept Offer",
            disabled: false,
        };
    });

    const cancleOfferButtonStatus = useMemo(() => {
        if (!account) {
            return {
                text: "Connect Wallet!",
                disabled: true,
            };
        }

        if (loading) {
            return {
                text: "Loading...",
                disabled: true,
            };
        }

        if (contractLoading && currentAction === ACTION_TYPE.CANCLEOFFER) {
            return {
                text: <Spinner animation="border" size="sm" />,
                disabled: true,
            };
        }

        return {
            text: "Cancel Offer",
            disabled: false,
        };
    });

    const CancelOffer = () => {
        if (selectedItem?.from === account?.toLowerCase()) {
            return (
                <div className="button-block-tabs-inner">
                    <Button
                        disabled={
                            cancleOfferButtonStatus.disabled || contractLoading
                        }
                        onClick={cancleOffer}
                    >
                        {cancleOfferButtonStatus.text}
                    </Button>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="btn-group-block">
            <div className="button-block-tabs-inner">
                <Button
                    disabled={
                        acceptOfferButtonStatus.disabled || contractLoading
                    }
                    onClick={acceptOffer}
                >
                    {acceptOfferButtonStatus.text}
                </Button>
            </div>
            <CancelOffer />
            <MakeOfferButton />
            <ListingButtion />
        </div>
    );
};

export default OfferSectionButtons;
