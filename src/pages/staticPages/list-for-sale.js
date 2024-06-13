import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import {
    SubTitleText16,
    Image,
    FormGroup,
    Label,
    Input,
    Button,
} from "@/styles/pages/main.style";
import Select from "react-select";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import { ItemMian } from "@/styles/pages/item-detail-style";
import React, { useState } from "react";
import { useRouter } from "next/router";
import ItemGuard from "@/components/Common/ItemGuard";
const listforsale = () => {
    const options = [
        { value: "chocolate", label: "Recently Listed" },
        { value: "strawberry", label: "Recently Sold" },
        { value: "vanilla", label: "Recently Received" },
        { value: "strawberry", label: "Recently Soon" },
        { value: "strawberry", label: "Recently Low to Hight" },
        { value: "strawberry", label: "Recently Last Sale" },
        { value: "strawberry", label: "Oldest" },
    ];
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const router = useRouter();
    console.log("router", router);
    return (
        <ItemGuard chainId={943}>
            <CommonPageBlockPad>
                <Container>
                    <div className="common-title-page">
                        <h1 className="text-left">List For Sale</h1>
                    </div>
                    <ItemMian>
                        <div className="left-common-item">
                            <img
                                src="../../images/item-img.png"
                                alt="item-img"
                            ></img>
                        </div>
                        <div className="right-content-block">
                            <h2 className="title-block-right">
                                Choose a type of sale
                            </h2>
                            <div className="TXtype-details-wrapper">
                                <div className="TX-radio-block">
                                    <div className="TX-radio-block-inner">
                                        <Input
                                            type="radio"
                                            id="test1"
                                            name="radio-group"
                                            checked
                                        ></Input>
                                        <label for="test1">
                                            <div>
                                                <i className="TX-iconbox-wrapper">
                                                    <Image
                                                        isContainImg={true}
                                                        src="/images/Collection-icon.svg"
                                                    />
                                                </i>
                                            </div>
                                            <div className="text-radio-text">
                                                <SubTitleText16>
                                                    Multiple
                                                </SubTitleText16>
                                                <p>
                                                    The item is listed at the
                                                    price you set
                                                </p>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="TX-radio-block-inner">
                                        <Input
                                            type="radio"
                                            id="test2"
                                            name="radio-group"
                                            checked
                                        ></Input>
                                        <label for="test2">
                                            <div>
                                                <i className="TX-iconbox-wrapper">
                                                    <Image
                                                        isContainImg={true}
                                                        src="/images/time-auction-icon.svg"
                                                    />
                                                </i>
                                            </div>
                                            <div className="text-radio-text">
                                                <SubTitleText16>
                                                    Timed Auction
                                                </SubTitleText16>
                                                <p>
                                                    The item is listed For
                                                    auction
                                                </p>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="TXtype-details-wrapper">
                                <FormGroup>
                                    <Label>Listing Currency</Label>
                                    <Select
                                        name="colors"
                                        options={options}
                                        className="TX-select2-wrapper"
                                        classNamePrefix="TX-fix-select"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Listing Price</Label>
                                    <Input type="type" placeholder="0" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Buyout Price Per Token</Label>
                                    <Input type="type" placeholder="0" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Quantity</Label>
                                    <Input type="type" placeholder="0" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Reserve Price Per Token</Label>
                                    <Input type="type" placeholder="0" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Auction Duration</Label>
                                    <Select
                                        name="colors"
                                        options={options}
                                        className="TX-select2-wrapper"
                                        classNamePrefix="TX-fix-select"
                                    />
                                </FormGroup>
                            </div>
                            <div className="TXtype-details-wrapper">
                                <h2 className="title-block-right">Summary</h2>
                                <div className="complate-listing-table">
                                    <div className="complate-listing-table-block">
                                        <p>Listing price</p>
                                        <h3>--ETH</h3>
                                    </div>
                                    <div className="complate-listing-table-block">
                                        <p>TesseractX fee </p>
                                        <h3>2.5%</h3>
                                    </div>
                                    <div className="complate-listing-table-block">
                                        <p>Creator earnings</p>
                                        <h3>0%</h3>
                                    </div>
                                    <div className="complate-listing-table-block">
                                        <h3>Total potential earnings</h3>
                                        <h3>--ETH</h3>
                                    </div>
                                </div>
                                <div className="common-btn-block">
                                    <Button>Complete Listing</Button>
                                </div>
                            </div>
                        </div>
                    </ItemMian>
                </Container>
            </CommonPageBlockPad>
        </ItemGuard>
    );
};

export default listforsale;
