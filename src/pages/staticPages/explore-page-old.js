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
                <div className="common-title-page">
                    <h1>Explore Items</h1>
                </div>
                <div className="tab-filter-main-block">
                    <div className="tab-filter-main-block-inner">
                        <div className="filter-block-left">
                            <div className="filter-block-common">
                                <h3>Search</h3>
                                <div className="search-block-filter">
                                    <form>
                                        <input
                                            type="text"
                                            placeholder="Search NFT"
                                        />
                                        <button>
                                            <img
                                                src="../../images/Icon-search.svg"
                                                alt="search-icon"
                                            ></img>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="filter-block-common border-block-pad">
                                <h3>Status</h3>
                                <div className="checkbox-block-custom-filter">
                                    <div className="checkbox-filter-block">
                                        <input type="checkbox" id="buy"></input>
                                        <label for="buy">
                                            <span>
                                                <img
                                                    src={
                                                        "../../images/check-icon-block.svg"
                                                    }
                                                    alt="check-icon"
                                                ></img>
                                            </span>
                                            <h4>Buy Now</h4>
                                        </label>
                                    </div>
                                    <div className="checkbox-filter-block">
                                        <input
                                            type="checkbox"
                                            id="auctions"
                                        ></input>
                                        <label for="auctions">
                                            <span>
                                                <img
                                                    src={
                                                        "../../images/check-icon-block.svg"
                                                    }
                                                    alt="check-icon"
                                                ></img>
                                            </span>
                                            <h4>On Auctions</h4>
                                        </label>
                                    </div>
                                    <div className="checkbox-filter-block">
                                        <input
                                            type="checkbox"
                                            id="offers"
                                        ></input>
                                        <label for="offers">
                                            <span>
                                                <img
                                                    src={
                                                        "../../images/check-icon-block.svg"
                                                    }
                                                    alt="check-icon"
                                                ></img>
                                            </span>
                                            <h4>Has Offers</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-block-common border-block-pad">
                                <h3>Categories</h3>
                                <div className="checkbox-block-custom-filter">
                                    <div className="checkbox-filter-block">
                                        <input type="checkbox" id="buy"></input>
                                        <label for="buy">
                                            <span>
                                                <img
                                                    src={
                                                        "../../images/check-icon-block.svg"
                                                    }
                                                    alt="check-icon"
                                                ></img>
                                            </span>
                                            <h4>Art</h4>
                                        </label>
                                    </div>
                                    <div className="checkbox-filter-block">
                                        <input type="checkbox" id="buy"></input>
                                        <label for="buy">
                                            <span>
                                                <img
                                                    src={
                                                        "../../images/check-icon-block.svg"
                                                    }
                                                    alt="check-icon"
                                                ></img>
                                            </span>
                                            <h4>Music</h4>
                                        </label>
                                    </div>
                                    <div className="checkbox-filter-block">
                                        <input type="checkbox" id="buy"></input>
                                        <label for="buy">
                                            <span>
                                                <img
                                                    src={
                                                        "../../images/check-icon-block.svg"
                                                    }
                                                    alt="check-icon"
                                                ></img>
                                            </span>
                                            <h4>Domain Names</h4>
                                        </label>
                                    </div>
                                    <div className="checkbox-filter-block">
                                        <input type="checkbox" id="buy"></input>
                                        <label for="buy">
                                            <span>
                                                <img
                                                    src={
                                                        "../../images/check-icon-block.svg"
                                                    }
                                                    alt="check-icon"
                                                ></img>
                                            </span>
                                            <h4>Virtual Worlds</h4>
                                        </label>
                                    </div>
                                    <div className="checkbox-filter-block">
                                        <input type="checkbox" id="buy"></input>
                                        <label for="buy">
                                            <span>
                                                <img
                                                    src={
                                                        "../../images/check-icon-block.svg"
                                                    }
                                                    alt="check-icon"
                                                ></img>
                                            </span>
                                            <h4>Trading Cards</h4>
                                        </label>
                                    </div>
                                    <div className="checkbox-filter-block">
                                        <input type="checkbox" id="buy"></input>
                                        <label for="buy">
                                            <span>
                                                <img
                                                    src={
                                                        "../../images/check-icon-block.svg"
                                                    }
                                                    alt="check-icon"
                                                ></img>
                                            </span>
                                            <h4>Collectibles</h4>
                                        </label>
                                    </div>
                                    <div className="checkbox-filter-block">
                                        <input type="checkbox" id="buy"></input>
                                        <label for="buy">
                                            <span>
                                                <img
                                                    src={
                                                        "../../images/check-icon-block.svg"
                                                    }
                                                    alt="check-icon"
                                                ></img>
                                            </span>
                                            <h4>Sports</h4>
                                        </label>
                                    </div>
                                    <div className="checkbox-filter-block">
                                        <input type="checkbox" id="buy"></input>
                                        <label for="buy">
                                            <span>
                                                <img
                                                    src={
                                                        "../../images/check-icon-block.svg"
                                                    }
                                                    alt="check-icon"
                                                ></img>
                                            </span>
                                            <h4>Utility</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-block-common border-block-pad border-none">
                                <h3>Chains</h3>
                                <div className="radio-filter-block">
                                    <input
                                        type="radio"
                                        id="test1"
                                        name="radio-group"
                                        checked
                                    ></input>
                                    <label for="test1">
                                        <img
                                            src={"../../images/ethe-icon.svg"}
                                            alt="check-icon"
                                        ></img>
                                        <h4>Ethereum (ETH)</h4>
                                    </label>
                                </div>
                                <div className="radio-filter-block">
                                    <input
                                        type="radio"
                                        id="test2"
                                        name="radio-group"
                                    ></input>
                                    <label for="test2">
                                        <img
                                            src={"../../images/ethe-icon.svg"}
                                            alt="check-icon"
                                        ></img>
                                        <h4>Ethereum (ETH)</h4>
                                    </label>
                                </div>
                                <div className="radio-filter-block">
                                    <input
                                        type="radio"
                                        id="test3"
                                        name="radio-group"
                                    ></input>
                                    <label for="test3">
                                        <img
                                            src={"../../images/filter-icon.svg"}
                                            alt="check-icon"
                                        ></img>
                                        <h4>PulseChain (PLS)</h4>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="showing-result-block">
                            <div className="top-showing-result-block">
                                <p>Showing 1–9 of 144 results</p>
                                <div className="select-block-explore">
                                    <div className="form-group">
                                        <Select
                                            name="colors"
                                            options={options}
                                            className="TX-select2-wrapper"
                                            classNamePrefix="TX-fix-select"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Select
                                            name="colors"
                                            options={options}
                                            className="TX-select2-wrapper"
                                            classNamePrefix="TX-fix-select"
                                        />
                                    </div>
                                </div>
                            </div>
                            <CommonProductBLock className="explore-block-product">
                                <div className="common-product-block">
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
                                                <p>13h : 28m : 36s</p>
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
                                                <p>13h : 28m : 36s</p>
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
                                                <p>13h : 28m : 36s</p>
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
                                                <p>13h : 28m : 36s</p>
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
                                                <p>13h : 28m : 36s</p>
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
                                                <p>13h : 28m : 36s</p>
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
                                                <p>13h : 28m : 36s</p>
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
                                                <p>13h : 28m : 36s</p>
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
