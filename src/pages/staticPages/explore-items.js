/** @format */

import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import { CommonProductBLock } from "@/styles/pages/main.style";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import React, { useState } from "react";
import Select from "react-select";
import Pagination from "react-bootstrap/Pagination";
import Modal from "react-bootstrap/Modal";
const profilepage = () => {
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
    return (
        <CommonPageBlockPad>
            <Container>
                <div className="common-title-page text-center-space">
                    <h1 className="text-center">Explore Items</h1>
                </div>
                <div className="tab-filter-main-block">
                    <div className="tab-filter-main-block-inner">
                        <div className="showing-result-block full-width-showing">
                            <CommonProductBLock className="explore-block-product">
                                <div className="common-product-block flex-width-five">
                                    <div className="common-product-block-inner">
                                        <div className="common-product-block-inner-width">
                                            <div className="top-block-product">
                                                <h4>Sweet Baby #1</h4>
                                                <Link href="{}">
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                            fill="#B9B8BB"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Creator</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-img-time">
                                                <img
                                                    src={
                                                        "../../images/product-img-block.png"
                                                    }
                                                    alt=""
                                                ></img>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Owner</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details-profile">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>ETH</p>
                                                        <h5>
                                                            <span>0.0041</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="btn-product">
                                                    <button>
                                                        <span>Purchase</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="common-product-block-inner">
                                        <div className="common-product-block-inner-width">
                                            <div className="top-block-product">
                                                <h4>Sweet Baby #1</h4>
                                                <Link href="{}">
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                            fill="#B9B8BB"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Creator</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-img-time">
                                                <img
                                                    src={
                                                        "../../images/product-img-block.png"
                                                    }
                                                    alt=""
                                                ></img>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Owner</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details-profile">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>ETH</p>
                                                        <h5>
                                                            <span>0.0041</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="btn-product">
                                                    <button>
                                                        <span>Purchase</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="common-product-block-inner">
                                        <div className="common-product-block-inner-width">
                                            <div className="top-block-product">
                                                <h4>Sweet Baby #1</h4>
                                                <Link href="{}">
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                            fill="#B9B8BB"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Creator</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-img-time">
                                                <img
                                                    src={
                                                        "../../images/product-img-block.png"
                                                    }
                                                    alt=""
                                                ></img>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Owner</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details-profile">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>ETH</p>
                                                        <h5>
                                                            <span>0.0041</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="btn-product">
                                                    <button>
                                                        <span>Purchase</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="common-product-block-inner">
                                        <div className="common-product-block-inner-width">
                                            <div className="top-block-product">
                                                <h4>Sweet Baby #1</h4>
                                                <Link href="{}">
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                            fill="#B9B8BB"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Creator</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-img-time">
                                                <img
                                                    src={
                                                        "../../images/product-img-block.png"
                                                    }
                                                    alt=""
                                                ></img>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Owner</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details-profile">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>ETH</p>
                                                        <h5>
                                                            <span>0.0041</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="btn-product">
                                                    <button>
                                                        <span>Purchase</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="common-product-block-inner">
                                        <div className="common-product-block-inner-width">
                                            <div className="top-block-product">
                                                <h4>Sweet Baby #1</h4>
                                                <Link href="{}">
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                            fill="#B9B8BB"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Creator</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-img-time">
                                                <img
                                                    src={
                                                        "../../images/product-img-block.png"
                                                    }
                                                    alt=""
                                                ></img>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Owner</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details-profile">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>ETH</p>
                                                        <h5>
                                                            <span>0.0041</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="btn-product">
                                                    <button>
                                                        <span>Purchase</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="common-product-block-inner">
                                        <div className="common-product-block-inner-width">
                                            <div className="top-block-product">
                                                <h4>Sweet Baby #1</h4>
                                                <Link href="{}">
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                            fill="#B9B8BB"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Creator</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-img-time">
                                                <img
                                                    src={
                                                        "../../images/product-img-block.png"
                                                    }
                                                    alt=""
                                                ></img>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Owner</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details-profile">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>ETH</p>
                                                        <h5>
                                                            <span>0.0041</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="btn-product">
                                                    <button>
                                                        <span>Purchase</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="common-product-block-inner">
                                        <div className="common-product-block-inner-width">
                                            <div className="top-block-product">
                                                <h4>Sweet Baby #1</h4>
                                                <Link href="{}">
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                            fill="#B9B8BB"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Creator</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-img-time">
                                                <img
                                                    src={
                                                        "../../images/product-img-block.png"
                                                    }
                                                    alt=""
                                                ></img>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Owner</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details-profile">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>ETH</p>
                                                        <h5>
                                                            <span>0.0041</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="btn-product">
                                                    <button>
                                                        <span>Purchase</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="common-product-block-inner">
                                        <div className="common-product-block-inner-width">
                                            <div className="top-block-product">
                                                <h4>Sweet Baby #1</h4>
                                                <Link href="{}">
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                            fill="#B9B8BB"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Creator</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-img-time">
                                                <img
                                                    src={
                                                        "../../images/product-img-block.png"
                                                    }
                                                    alt=""
                                                ></img>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Owner</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details-profile">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>ETH</p>
                                                        <h5>
                                                            <span>0.0041</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="btn-product">
                                                    <button>
                                                        <span>Purchase</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="common-product-block-inner">
                                        <div className="common-product-block-inner-width">
                                            <div className="top-block-product">
                                                <h4>Sweet Baby #1</h4>
                                                <Link href="{}">
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                            fill="#B9B8BB"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Creator</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-img-time">
                                                <img
                                                    src={
                                                        "../../images/product-img-block.png"
                                                    }
                                                    alt=""
                                                ></img>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Owner</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details-profile">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>ETH</p>
                                                        <h5>
                                                            <span>0.0041</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="btn-product">
                                                    <button>
                                                        <span>Purchase</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="common-product-block-inner">
                                        <div className="common-product-block-inner-width">
                                            <div className="top-block-product">
                                                <h4>Sweet Baby #1</h4>
                                                <Link href="{}">
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                            fill="#B9B8BB"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Creator</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-img-time">
                                                <img
                                                    src={
                                                        "../../images/product-img-block.png"
                                                    }
                                                    alt=""
                                                ></img>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Owner</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details-profile">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>ETH</p>
                                                        <h5>
                                                            <span>0.0041</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="btn-product">
                                                    <button>
                                                        <span>Purchase</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="common-product-block-inner">
                                        <div className="common-product-block-inner-width">
                                            <div className="top-block-product">
                                                <h4>Sweet Baby #1</h4>
                                                <Link href="{}">
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                            fill="#B9B8BB"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Creator</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-img-time">
                                                <img
                                                    src={
                                                        "../../images/product-img-block.png"
                                                    }
                                                    alt=""
                                                ></img>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Owner</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details-profile">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>ETH</p>
                                                        <h5>
                                                            <span>0.0041</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="btn-product">
                                                    <button>
                                                        <span>Purchase</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="common-product-block-inner">
                                        <div className="common-product-block-inner-width">
                                            <div className="top-block-product">
                                                <h4>Sweet Baby #1</h4>
                                                <Link href="{}">
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                            fill="#B9B8BB"
                                                        />
                                                    </svg>
                                                </Link>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Creator</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-img-time">
                                                <img
                                                    src={
                                                        "../../images/product-img-block.png"
                                                    }
                                                    alt=""
                                                ></img>
                                            </div>
                                            <div className="product-details-profile full-width">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-product.png"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>Owner</p>
                                                        <h5>Hakunamatata</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-details-profile">
                                                <div className="product-profile">
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt=""
                                                    ></img>
                                                    <div className="product-profile-details">
                                                        <p>ETH</p>
                                                        <h5>
                                                            <span>0.0041</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className="btn-product">
                                                    <button>
                                                        <span>Purchase</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CommonProductBLock>
                            <div className="pagination-block-custom">
                                <Pagination>
                                    <Pagination.Prev />
                                    <Pagination.Item>{1}</Pagination.Item>
                                    <Pagination.Item>{2}</Pagination.Item>

                                    <Pagination.Next />
                                </Pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </CommonPageBlockPad>
    );
};

export default profilepage;
