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
import {
    GET_CHAIN_NAMES,
    OPENSEA_LISTING_FEE,
    SALE_TYPE,
    TYPE,
    ZERO_TOKEN_ADDRESS,
} from "@/constant";
import { Toast, validateNetwork } from "@/utils";
import { PATH_DASHBOARD } from "@/routes/paths";
import { useOpenSeaListing } from "./listingsHook";

export const MARKETPLACES = {
    OPENSEA: "OPENSEA",
};

const MARKETPLACES_DATA = {
    [MARKETPLACES.OPENSEA]: {
        listing: false,
        fee: OPENSEA_LISTING_FEE,
        amount: 0,
        image: "/images/listing-block-logo-6.svg",
        supportedChains: [1, 8453],
    },
};

export const useSale = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { account, library, chainId, chain, signMessage, wallet } =
        useActiveWeb3React();
    const { listOnOpenSea, fee, isSupportedChain } = useOpenSeaListing();

    const [item, setItem] = useState();
    const [listingOptions, setListingOptions] = useState(MARKETPLACES_DATA);

    const selectMarketPlaces = (event, key) => {
        const { checked } = event?.target;
        if (formik.values.saleType !== SALE_TYPE.LIST) return;

        if (!MARKETPLACES_DATA[key].supportedChains.includes(chainId)) {
            return Toast.error(
                `${GET_CHAIN_NAMES[chainId]} is not supported in the ${key} marketplace.`
            );
        }
        if (ZERO_TOKEN_ADDRESS !== formik.values.currency) {
            return Toast.error(
                `Please select native currency to list on ${key} marketplace.`
            );
        }

        setListingOptions((state) => ({
            ...state,
            [key]: {
                ...state[key],
                listing: checked,
            },
        }));
    };

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
                            .max(
                                100,
                                "Bid Buffer should not be greater than 100"
                            ),
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
                return Toast.error(
                    "Minimum Bid Amount should not be more than Buyout Amount"
                );
            }

            const selectedMarketplaces = [];
            Object.keys(listingOptions).map((ele) => {
                if (listingOptions[ele].listing) {
                    selectedMarketplaces.push(ele);
                }
            });

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
                        signMessage,
                        listOnOpenSea,
                        selectedMarketplaces,
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
                        signMessage,
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
                        item?.itemCollection,
                        item?.chainId
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
        if (!item?.type) return;
        formik?.setFieldValue("standard", item?.type);
    }, [item]);

    useEffect(() => {
        setListingOptions(MARKETPLACES_DATA);
    }, [formik.values.currency]);

    return {
        setItem,
        formik,
        item,
        selectMarketPlaces,
        listingOptions,
        setListingOptions,
    };
};
