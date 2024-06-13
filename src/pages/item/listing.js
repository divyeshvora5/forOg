import Link from "next/link";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";

import Select from "react-select";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ItemGuard from "@/components/Common/ItemGuard";
import {
    Button,
    FormGroup,
    Image,
    Input,
    Label,
    SubTitleText16,
} from "@/styles/pages/main.style";
import { ItemMian } from "@/styles/pages/item-detail-style";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import { GetNftDetailsService } from "@/redux/services/itemServices";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { useSale } from "@/hooks/useMarket";
import { globalState } from "@/redux/reducer/globalSlice";
import { useSelector } from "react-redux";
import { SALE_TYPE } from "@/constant";
import { getDefaultRoyaltyInfo, getPlatformFeeInfo } from "@/contracts";
import { marketState } from "@/redux/reducer/marketSlice";
import { Loader } from "@/components";
import { CountParser } from "@/utils";
import ImageLoader from "@/components/Common/ImageLoader";
import PageTitle from "@/components/Common/PageTitle";
const listforsale = () => {
    const router = useRouter();
    const { account, chainId, chain, library } = useActiveWeb3React();
    const { setItem, formik, item } = useSale();
    const { loading: stateLoading, tokens } = useSelector(globalState);
    const { contractLoading } = useSelector(marketState);

    const [loading, setLoading] = useState(false);
    const [symbol, setSymbol] = useState("");
    const [platformDetalis, setPlateformDetails] = useState();
    const [total, setTotal] = useState(0);
    
    const options = tokens?.map((token) => ({
        value: token?.address?.toLowerCase(),
        label: token?.symbol,
    }));

    useEffect(() => {
        if (!router.isReady || !chainId) return;
        (async () => {
            try {
                setLoading(true);
                const { data } = await GetNftDetailsService({
                    itemCollection: router.query?.itemCollection?.toLowerCase(),
                    tokenId: router.query?.tokenId,
                    chainId: chainId,
                    account: account,
                });
                const plateformFee = await getPlatformFeeInfo({
                    chain,
                });

                console.log('plateformFee', plateformFee)

                const roylties = await getDefaultRoyaltyInfo({
                    type: data?.data?.type,
                    address: data?.data?.itemCollection,
                    chain,
                });

                setItem(data?.data);
                setPlateformDetails({
                    fee: plateformFee,
                    roylties: roylties,
                    totalDeduct: Math.abs(plateformFee - roylties),
                });
            } catch (err) {
                console.log("err", err);
            } finally {
                setLoading(false);
            }
        })();
    }, [router.isReady, chainId]);

    useEffect(() => {
        let price = 0;
        if (formik.values.saleType === SALE_TYPE.LIST) {
            if (!formik.values.price) return setTotal(0);
            price = formik.values.price;
        } else {
            if (!formik.values.minimumBidAmount) return setTotal(0);
            price = formik.values.minimumBidAmount;
        }
        setTotal(price - Number(price) * (platformDetalis?.totalDeduct / 100));
    }, [formik.values.price, formik.values.minimumBidAmount]);

    return (
        // <ItemGuard chainId={itemChainId}>
        <>
            <PageTitle title={"Create-Listing/Auction"} />
            {loading && <Loader />}
            <CommonPageBlockPad className="dark-mode-body no-container-padding">
                <div className="graphics-inner-shape">
                    {/* <img
                        src={"../../images/graphics-block-inner.png"}
                        alt="graphics-img"
                    ></img> */}
                </div>
                <div className="graphics-inner-shape-two">
                    {/* <img
                        src={"../../images/graphics-block-inner-2.png"}
                        alt="graphics-img"
                    ></img> */}
                </div>
                <div className="graphics-inner-shape-three">
                    {/* <img
                        src={"../../images/graphics-block-inner-3.png"}
                        alt="graphics-img"
                    ></img> */}
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <Container>
                        <div className="common-title-page">
                            <h1 className="text-left">
                                {formik.values.saleType === SALE_TYPE.LIST
                                    ? "List For Sale"
                                    : "Create An Auction"}
                            </h1>
                        </div>
                        <ItemMian>
                            <div className="left-common-item">
                                <ImageLoader
                                    src={
                                        item?.image
                                        // "../../images/item-img.png"
                                    }
                                    alt=""
                                    thumbnail={item?.thumbnail}
                                />
                            </div>
                            <div className="right-content-block">
                                <h2 className="title-block-right">
                                    Choose Type
                                </h2>
                                <div className="TXtype-details-wrapper">
                                    <div className="TX-radio-block">
                                        <div className="TX-radio-block-inner">
                                            <Input
                                                type="radio"
                                                id="test1"
                                                name="saleType"
                                                checked={
                                                    formik.values.saleType ===
                                                    SALE_TYPE.LIST
                                                }
                                                value={SALE_TYPE.LIST}
                                                onChange={formik.handleChange}
                                            />
                                            <label for="test1">
                                                <div>
                                                    <i className="TX-iconbox-wrapper">
                                                        <Image
                                                            isContainImg={true}
                                                            src="/images/Collection-icon.svg"
                                                            width={100}
                                                            height={100}
                                                        />
                                                    </i>
                                                </div>
                                                <div className="text-radio-text">
                                                    <SubTitleText16>
                                                        Listing
                                                    </SubTitleText16>
                                                    <p>
                                                        The Item Is Listed At
                                                        A Buy Now Price
                                                    </p>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="TX-radio-block-inner">
                                            <Input
                                                type="radio"
                                                id="test2"
                                                name="saleType"
                                                checked={
                                                    formik.values.saleType ===
                                                    SALE_TYPE.AUCTION
                                                }
                                                value={SALE_TYPE.AUCTION}
                                                onChange={formik.handleChange}
                                            />
                                            <label for="test2">
                                                <div>
                                                    <i className="TX-iconbox-wrapper">
                                                        <Image
                                                            isContainImg={true}
                                                            src="/images/time-auction-icon.svg"
                                                            width={100}
                                                            height={100}
                                                        />
                                                    </i>
                                                </div>
                                                <div className="text-radio-text">
                                                    <SubTitleText16>
                                                        Timed Auction
                                                    </SubTitleText16>
                                                    <p>
                                                        The Item Is Sent For
                                                        Auction
                                                    </p>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="TXtype-details-wrapper">
                                    <FormGroup>
                                        <Label>Currency</Label>
                                        <Select
                                            name="currency"
                                            options={options}
                                            className="TX-select2-wrapper"
                                            classNamePrefix="TX-fix-select"
                                            onChange={(e) => {
                                                setSymbol(e?.label);
                                                formik.setFieldValue(
                                                    "currency",
                                                    e?.value
                                                );
                                            }}
                                        />
                                        {formik.touched.currency &&
                                        formik.errors.currency ? (
                                            <div className="text-danger">
                                                {formik.errors.currency}
                                            </div>
                                        ) : null}
                                    </FormGroup>
                                    {formik.values.saleType ==
                                        SALE_TYPE.LIST && (
                                        <FormGroup>
                                            <Label>Listing Price</Label>
                                            <Input
                                                type="number"
                                                placeholder="0"
                                                name="price"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.price}
                                            />
                                            {formik.touched.price &&
                                            formik.errors.price ? (
                                                <div className="text-danger">
                                                    {formik.errors.price}
                                                </div>
                                            ) : null}
                                        </FormGroup>
                                    )}
                                    {formik.values.saleType ===
                                        SALE_TYPE.AUCTION && (
                                        <FormGroup>
                                            <Label>Price</Label>
                                            <Input
                                                type="number"
                                                placeholder="0"
                                                name="buyoutBidAmount"
                                                value={
                                                    formik.values
                                                        .buyoutBidAmount
                                                }
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.buyoutBidAmount &&
                                            formik.errors.buyoutBidAmount ? (
                                                <div className="text-danger">
                                                    {formik.errors.buyoutBidAmount}
                                                </div>
                                            ) : null}
                                        </FormGroup>
                                    )}
                                    {item?.type !== "single" && (
                                        <FormGroup>
                                            <Label>Quantity</Label>
                                            <Input
                                                type="number"
                                                placeholder="0"
                                                name="quantity"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.quantity}
                                            />
                                            {formik.touched.quantity &&
                                            formik.errors.quantity ? (
                                                <div className="text-danger">
                                                    {formik.errors.quantity}
                                                </div>
                                            ) : null}
                                        </FormGroup>
                                    )}
                                    {formik.values.saleType ===
                                        SALE_TYPE.AUCTION && (
                                        <FormGroup>
                                            <Label>Minimum Bid Amount</Label>
                                            <Input
                                                type="number"
                                                placeholder="0"
                                                name="minimumBidAmount"
                                                value={
                                                    formik.values
                                                        .minimumBidAmount
                                                }
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.minimumBidAmount &&
                                            formik.errors.minimumBidAmount ? (
                                                <div className="text-danger">
                                                    {formik.errors.minimumBidAmount}
                                                </div>
                                            ) : null}
                                        </FormGroup>
                                    )}
                                    {formik.values.saleType ===
                                        SALE_TYPE.AUCTION && (
                                        <FormGroup>
                                            <Label>Bid Buffer</Label>
                                            <Input
                                                type="number"
                                                placeholder="0"
                                                name="bidBufferBps"
                                                value={
                                                    formik.values.bidBufferBps
                                                }
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.bidBufferBps &&
                                            formik.errors.bidBufferBps ? (
                                                <div className="text-danger">
                                                    {formik.errors.bidBufferBps}
                                                </div>
                                            ) : null}
                                        </FormGroup>
                                    )}
                                    {/* {formik.values.saleType ===
										SALE_TYPE.AUCTION && (
										<FormGroup>
											<Label>Auction Duration</Label>
											<Select
												name="colors"
												options={options}
												className="TX-select2-wrapper"
												classNamePrefix="TX-fix-select"
											/>
										</FormGroup>
									)} */}

                                    <FormGroup>
                                        <Label>End Date</Label>
                                        <Input
                                            type="datetime-local"
                                            placeholder="0"
                                            name="endListingDate"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.endListingDate}
                                        />
                                    </FormGroup>
                                </div>
                                <div className="TXtype-details-wrapper">
                                    <h2 className="title-block-right">
                                        Summary
                                    </h2>
                                    <div className="complate-listing-table">
                                        <div className="complate-listing-table-block">
                                            <p>
                                                {formik.values.saleType ===
                                                SALE_TYPE.LIST
                                                    ? "Listing Price"
                                                    : "Start Bidding Price"}{" "}
                                            </p>
                                            <h3>
                                                {formik.values
                                                    .minimumBidAmount ||
                                                    formik.values.price}{" "}
                                                {symbol && `--${symbol}`}{" "}
                                            </h3>
                                        </div>
                                        <div className="complate-listing-table-block">
                                            <p>Fee </p>
                                            <h3>{platformDetalis?.fee}%</h3>
                                        </div>
                                        <div className="complate-listing-table-block">
                                            <p>Creator Royalties</p>
                                            <h3>
                                                {platformDetalis?.roylties}%
                                            </h3>
                                        </div>
                                        <div className="complate-listing-table-block">
                                            <h3>Potential Earnings</h3>
                                            <h3>
                                                {CountParser(total, 5)}{" "}
                                                {symbol && `--${symbol}`}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="common-btn-block">
                                        <Button
                                            style={{ width: "100%" }}
                                            disabled={
                                                contractLoading ||
                                                item?.isListed
                                            }
                                            type="submit"
                                        >
                                            {contractLoading ? (
                                                <Spinner
                                                    animation="border"
                                                    size="sm"
                                                />
                                            ) : formik.values.saleType ===
                                              SALE_TYPE.LIST ? (
                                                "Create Listing"
                                            ) : (
                                                "Create Auction"
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </ItemMian>
                    </Container>
                </form>
            </CommonPageBlockPad>
        </>
        // </ItemGuard>
    );
};

export default listforsale;
