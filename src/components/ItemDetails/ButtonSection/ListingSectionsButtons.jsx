import { ITEM_LISTING_STATUS } from "@/constant";
import { getValidListingNft } from "@/contracts";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import {
    buyFromListingAction,
    cancleListingAction,
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
import MakeOfferButton from "./MakeOfferButton";
import ListingButtion from "./ListingButtion";
import { useBalance } from "@/hooks/useBalance";

const ListingSectionsButtons = () => {
    const { chainId, account, wallet, chain, signMessage } = useActiveWeb3React();
    const { itemDetails, selectedItem, contractLoading, currentAction } =
        useSelector(marketState);
    const dispatch = useDispatch();

    const [listingDetails, setListingDetails] = useState();
    const [loading, setLoading] = useState(false);

    console.log('selectedItem', selectedItem);

    const { rawValue, loading: balanceLoading } = useBalance({ chainId, address: selectedItem?.currency, wallet: wallet });

    console.log('balance', +rawValue)

    useEffect(() => {
        if (!selectedItem || selectedItem?.type !== ITEM_LISTING_STATUS.LISTING)
            return;
        (async () => {
            try {
                if (selectedItem?.chainId !== chain?.id) return;
                setLoading(true);
                const result = await getValidListingNft({
                    chain: chain,
                    listingId: selectedItem?.listingId,
                });
                setListingDetails(result);
            } catch (err) {
                console.log("err", err);
            } finally {
                setLoading(false);
            }
        })();
    }, [selectedItem, chain]);

    const listingCancleFunc = async () => {
        const validate = validateNetwork(
            account,
            chainId,
            itemDetails?.chainId
        );
        if (!validate.status) {
            return Toast.error(validate.message);
        }
        if (!listingDetails?.listingId) return;
        dispatch(setActionItem(ACTION_TYPE.CANCLE));
        const result = await dispatch(
            cancleListingAction({
                wallet: wallet,
                chain: chain,
                account: account,
                listingId: listingDetails?.listingId,
                signMessage,
            })
        );
        if (result.type === "market/cancleListingAction/fulfilled") {
            // router.push({
            // 	pathname: "/collection/collection-items",
            // 	query: {
            // 		type: itemDetails?.standard,
            // 		collection: itemDetails?.itemCollection,
            // 	},
            // });
        }
    };

    const buyListedNft = async () => {
        const validate = validateNetwork(
            account,
            chainId,
            selectedItem?.chainId
        );
        if (!validate.status) {
            return Toast.error(validate.message);
        }
        if (!listingDetails?.listingId) return;
        dispatch(setActionItem(ACTION_TYPE.BUY));
        const result = await dispatch(
            buyFromListingAction({
                wallet: wallet,
                chain: chain,
                currency: listingDetails?.currency,
                currencyDecimals: listingDetails?.currencyDecimals,
                listingId: listingDetails?.listingId,
                account: account,
                price: selectedItem?.price,
                quantity: listingDetails?.quantity,
                signMessage,
            })
        );
        if (
            result.type === "market/buyFromListingAction/fulfilled"
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
    };

    const Canclelisting = ({ text = "Cancel Listing", disabled = false }) => {
        if (
            account &&
            listingDetails?.listingCreator?.toLowerCase() ===
            account?.toLowerCase()
        ) {
            return (
                <div className="button-block-tabs-inner">
                    <Button onClick={listingCancleFunc} disabled={disabled}>
                        {text}
                    </Button>
                </div>
            );
        }

        return null;
    };

    const cancleButtonStatus = useMemo(() => {
        if (contractLoading && currentAction === ACTION_TYPE.CANCLE) {
            return {
                text: <Spinner animation="border" size="sm" />,
                disabled: true,
            };
        }

        return {
            text: "Cancel Listing",
            disabled: false,
        };
    }, [contractLoading, currentAction]);

    const buyButtonStatus = useMemo(() => {
        if (contractLoading && currentAction === ACTION_TYPE.BUY) {
            return {
                text: <Spinner animation="border" size="sm" />,
                disabled: true,
            };
        }

        if (Date.now() > selectedItem?.endTime) {
            return {
                text: "Listing End!",
                disabled: true,
            };
        }
        if(Number(selectedItem?.price) > Number(rawValue)) {
            return {
                text: "Not Enough Balance",
                disabled: true,
            };
        }

        if (account?.toLowerCase() == selectedItem?.from) {
            return {
                text: "Buy",
                disabled: true,
            };
        }

        return {
            text: "Buy",
            disabled: false,
        };
    }, [contractLoading, currentAction, rawValue]);

    const BuyFromListing = ({ text = "Buy", disabled = false }) => {
        return (
            <div className="button-block-tabs-inner">
                <Button onClick={buyListedNft} disabled={disabled}>
                    {text}
                </Button>
            </div>
        );
    };

    return (
        <div className="btn-group-block">
            <Canclelisting
                text={cancleButtonStatus.text}
                disabled={cancleButtonStatus.disabled || contractLoading}
            />
            <BuyFromListing
                text={buyButtonStatus.text}
                disabled={buyButtonStatus.disabled || contractLoading || balanceLoading}
            />
            <MakeOfferButton />
            <ListingButtion />
            {/* <div className="button-block-tabs-inner">
				<Button className="no-border">Save for later</Button>
			</div> */}
        </div>
    );
};

export default ListingSectionsButtons;
