import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useActiveWeb3React } from "./useActiveWeb3React";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    createAuctionAction,
    creatingListingAction,
} from "@/redux/actions/marketAction";
import { SALE_TYPE, TYPE } from "@/constant";
import { Toast, validateNetwork } from "@/utils";
import { PATH_DASHBOARD } from "@/routes/paths";

export const useSale = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { account, library, chainId, chain, signMessage, wallet } = useActiveWeb3React();

    const [item, setItem] = useState();

    // console.log("item", item);

    const formik = useFormik({
        initialValues: {
            saleType: SALE_TYPE.LIST,
            // royltyBps: "",
            currency: "",
            price: "",
            quantity: 1,
            endListingDate: "",
            minimumBidAmount: "",
            buyoutBidAmount: "",
            bidBufferBps: "",
            standard: item?.type,
        },
        validationSchema: Yup.object().shape({
            currency: Yup.string().required("Currency is required"),
            quantity: Yup.number("Please enter valid number").when("standard", {
                is: (standard) => {
                    return standard === TYPE.MULTI;
                },
                then: () =>
                    Yup.number("Please enter valid number")
                        .min(1, "At least 1 quantity is required")
                        .required("Quantity is required"),
            }),
            price: Yup.number("Please enter valid number").when("saleType", {
                is: (saleType) => {
                    return saleType === SALE_TYPE.LIST;
                },
                then: () =>
                    Yup.number("Price is required")
                        .required("Price is required")
                        .min(0, "Price should not be less than 0"),
            }),
            minimumBidAmount: Yup.number("Please enter valid number").when(
                "saleType",
                {
                    is: (saleType) => {
                        return saleType === SALE_TYPE.AUCTION;
                    },
                    then: () =>
                        Yup.number("Please enter valid number").required(
                            "Minimum Bid Amount is required"
                        ),
                }
            ),            
            buyoutBidAmount: Yup.number("Please enter valid number").when(
                "saleType",
                {
                    is: (saleType) => {
                        return saleType === SALE_TYPE.AUCTION;
                    },
                    then: () =>
                        Yup.number("Please enter valid number").required(
                            "Buyout Price is required"
                        ),
                }
            ),
            bidBufferBps: Yup.number("Please enter valid number").when(
                "saleType",
                {
                    is: (saleType) => {
                        return saleType === SALE_TYPE.AUCTION;
                    },
                    then: () =>
                        Yup.number("Please enter valid number")
                            .required("Bid Buffer is required")
                            .min(0, "Bid Buffer should not be less than 0")
                            .max(100, "Bid Buffer should not be greater than 100"),
                }
            ),
        }),
        onSubmit: async (values, helpers) => {
            console.log("call");
            const validate = validateNetwork(account, chainId, item?.chainId);
            if (!validate.status) {
                return Toast.error(validate.message);
            }
            if (item.balance < values.quantity) {
                return Toast.error("Not enough Balance to list Item");
            }
            if (values.buyoutBidAmount < values.minimumBidAmount) {
                return Toast.error("Minimum Bid Amount should not be more than Buyout Amount");
            }

            let result;
            if (values.saleType === SALE_TYPE.LIST) {
                result = await dispatch(
                    creatingListingAction({
                        type: item?.type,
                        collection: item?.itemCollection,
                        account: account,
                        wallet: wallet,
                        chain: chain,
                        tokenId: item?.tokenId,
                        currency: values.currency,
                        quantity: values.quantity || 1,
                        price: values.price,
                        endListingDate: values.endListingDate,
                        signMessage
                    })
                );
            } else if (values.saleType === SALE_TYPE.AUCTION) {
                result = await dispatch(
                    createAuctionAction({
                        type: item?.type,
                        collection: item?.itemCollection,
                        account: account,
                        wallet: wallet,
                        chain: chain,
                        tokenId: item?.tokenId,
                        currency: values.currency,
                        quantity: values.quantity || 1,
                        endTimestamp: values.endListingDate,
                        minimumBidAmount: values.minimumBidAmount,
                        buyoutBidAmount: values.buyoutBidAmount,
                        bidBufferBps: values.bidBufferBps,
                        signMessage
                    })
                );
            }
            console.log("result", result);
            if (
                result.type === "market/creatingListingAction/fulfilled" ||
                result.type === "market/createAuctionAction/fulfilled"
            ) {
                router.push({
                    pathname: PATH_DASHBOARD.explore.collection(
                        item?.itemCollection
                    ),
                    // query: {
                    // 	type: item?.type,
                    // 	collection: item?.itemCollection,
                    // },
                });
            }
        },
    });

    useEffect(() => {
        if (!item?.supply) return;
        formik?.setFieldValue("quantity", item?.balance);
    }, [item]);

    useEffect(() => {
        if(!item?.type) return;
        formik?.setFieldValue("standard", item?.type);
    }, [item]);

    return {
        setItem,
        formik,
        item,
    };
};
