import {
    ACTION_TYPE,
    marketState,
    setActionItem,
    setTokenAddress,
} from "@/redux/reducer/marketSlice";
import {
    Button,
    CommonModalMain,
    FormGroup,
    Input,
    Label,
} from "@/styles/pages/main.style";
import { Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { useEffect, useMemo, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { globalState } from "@/redux/reducer/globalSlice";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { NATIVE_CURRENCY, TYPE, ZERO_TOKEN_ADDRESS } from "@/constant";
import { Toast, validateNetwork } from "@/utils";
import { makeOfferAction } from "@/redux/actions/marketAction";
import ItemBestOffer from "../ItemBestOffer";
import ImageLoader from "@/components/Common/ImageLoader";

const OfferModel = ({ show, handleClose }) => {
    const {
        balance,
        rawBalanceValue,
        account,
        chainId,
        sdk,
        library,
        wallet,
        chain,
        signMessage,
    } = useActiveWeb3React();
    const { itemDetails, contractLoading, currentAction } =
        useSelector(marketState);
    const { tokens } = useSelector(globalState);
    const dispatch = useDispatch();

    const [endDate, setEndDate] = useState(new Date());
    const [symbol, setSymbol] = useState();
    const [currency, setCurrency] = useState();

    const [amount, setAmount] = useState();
    const [quantity, setQuantity] = useState(1);

    const options = useMemo(() => {
        return tokens
            ?.map((token) => ({
                value: token?.address?.toLowerCase(),
                label: token?.symbol,
                decimal: token?.decimal,
            }))
            .filter((token) => token.value !== ZERO_TOKEN_ADDRESS);
    }, [tokens]);

    useEffect(() => {
        if (!options?.length) return;
        dispatch(setTokenAddress(options[0]?.value?.toLowerCase()));
        setCurrency({
            value: options[0]?.value,
            label: options[0]?.label,
            decimal: options[0]?.decimal,
        });
    }, [options]);

    const tokenChange = (e) => {
        setCurrency({
            ...e,
        });
        dispatch(setTokenAddress(e?.value));
        setSymbol(e.label);
    };

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

            await fn();
        };
    };

    const makeOffer = validateConnectionHOF(async () => {
        dispatch(setActionItem(ACTION_TYPE.MAKEOFFER));
        const result = await dispatch(
            makeOfferAction({
                wallet: wallet,
                chain: chain,
                account: account,
                price: amount,
                collection: itemDetails?.itemCollection,
                tokenId: itemDetails?.tokenId,
                currency: currency,
                quantity: quantity || 1,
                endTimestamp: endDate,
                signMessage,
            })
        );

        if (
            result.type === "market/makeOfferAction/fulfilled"
            // ||
            // result.type === "collection/createMultipleNftAction/fulfilled"
        ) {
            //do staff after sussfuly created nft
            handleClose();
            // router.push({
            // 	pathname: "/collection/collection-items",
            // 	query: {
            // 		type: itemDetails?.standard,
            // 		collection: itemDetails?.itemCollection,
            // 	},
            // });
        }
    });

    const buttonStatus = useMemo(() => {
        if (contractLoading && currentAction === ACTION_TYPE.MAKEOFFER) {
            return {
                text: <Spinner animation="border" size="sm" />,
                disabled: true,
            };
        }

        if (+rawBalanceValue <= 0 || +rawBalanceValue < +amount) {
            return {
                text: "Not Enough Balance",
                disabled: true,
            };
        }

        if (!amount || +amount <= 0) {
            return {
                text: "Please Enter Value",
                disabled: true,
            };
        }

        if (itemDetails?.type === TYPE.MULTI && !quantity) {
            return {
                text: "Please Enter Valid quantity",
                disabled: true,
            };
        }

        if (itemDetails?.type === TYPE.MULTI && +quantity <= 0) {
            return {
                text: "Please Enter quantity > 0",
                disabled: true,
            };
        }

        if (+quantity > itemDetails?.supply) {
            return {
                text: `Only ${itemDetails?.supply} available`,
                disabled: true,
            };
        }

        // if (
        // 	itemDetails?.standard === TYPE.MULTI &&
        // 	+quantity > itemDetails?.remainingBalance
        // ) {
        // 	return {
        // 		text: `only ${itemDetails?.remainingBalance} quantity available`,
        // 		disabled: true,
        // 	};
        // }

        return {
            text: "Make Offer",
            disabled: false,
        };
    }, [contractLoading, amount, rawBalanceValue, quantity]);

    return (
        <CommonModalMain show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Make an Offer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="top-token-block">
                    <div className="top-token-block-inner">
                        <div className="top-token-block-inner-left">
                            <div className="icon-bg">
                                <ImageLoader
                                    src={
                                        itemDetails?.image ||
                                        itemDetails?.thumbnail ||
                                        "/images/ethe-icon-blue.svg"
                                    }
                                    thumbnail={itemDetails?.thumbnail}
                                />
                                {/* <img
                                    src={
                                        itemDetails?.image ||
                                        "/images/ethe-icon-blue.svg"
                                    }
                                    alt="ethe-icon"
                                ></img> */}
                            </div>
                            <div className="top-token-block-inner-content">
                                <h4>{itemDetails?.name}</h4>
                                {/* <p>Rd</p> */}
                            </div>
                        </div>
                        <div className="top-token-block-inner-right">
                            {/* <h4>-- ETH</h4>
							<p>--</p> */}
                        </div>
                    </div>
                    <div className="balance-block">
                        <div className="balance-block-inner">
                            <h4>Balance</h4>
                            <h4>
                                {balance} {currency?.label}
                            </h4>
                        </div>
                        <div className="balance-block-inner">
                            <p>Floor Price</p>
                            <p>
                                {itemDetails?.floorPrice}{" "}
                                {NATIVE_CURRENCY[itemDetails?.chainId]}
                            </p>
                        </div>
                        <div className="balance-block-inner">
                            <ItemBestOffer show={show} />
                        </div>
                    </div>
                    <div className="price-block-main">
                        <div className="price-block-inner">
                            <Input
                                type="number"
                                placeholder="Price"
                                onChange={(e) => setAmount(e.target.value)}
                            />
                            <Select
                                name="colors"
                                options={options}
                                onChange={tokenChange}
                                className="TX-select2-wrapper"
                                classNamePrefix="TX-fix-select"
                                defaultValue={options[0]}
                            />
                        </div>
                        <p>
                            Total Offer Amount {amount} {currency?.label}
                        </p>
                    </div>
                    {itemDetails?.type === TYPE.MULTI && (
                        <div className="price-block-main">
                            <div className="price-block-inner-2">
                                <Input
                                    type="number"
                                    placeholder="Quantity"
                                    onChange={(e) =>
                                        setQuantity(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    )}
                    <div className="duration-block">
                        <FormGroup>
                            <Label>Duration</Label>
                            <div className="duration-block-select">
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                />
                            </div>
                        </FormGroup>
                    </div>
                    <div className="button-block">
                        <Button
                            disabled={buttonStatus.disabled}
                            onClick={makeOffer}
                        >
                            {buttonStatus.text}
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </CommonModalMain>
    );
};

export default OfferModel;
