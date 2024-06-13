/** @format */

import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import { HomeMain, Button } from "@/styles/pages/main.style";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import React, { useState } from "react";
import Slider from "react-slick";
import Select from "react-select";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CommonProductBLock } from "@/styles/pages/main.style";

const homepage = () => {
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

    var settings = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    var categoryslider = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    var popularslider = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    var liveslider = {
        dots: false,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 1200,
        // centerPadding: '15%'
    };
    var trendingslider = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <CommonPageBlockPad>
            {/* <Container> */}
            <HomeMain className="home-grapics">
                <div className="home-slider-main-sub">
                    <Container>
                        <div className="home-slider-main">
                            <Slider {...settings}>
                                <div>
                                    <div className="home-slider-main-inner">
                                        <div className="home-slider-main-item">
                                            <div className="home-slider-main-img">
                                                <div className="home-slider-main-img-block">
                                                    <img
                                                        src={
                                                            "../../images/home-slider-img.png"
                                                        }
                                                        alt="slider-img"
                                                    ></img>
                                                </div>
                                                <div className="overlay-grapics">
                                                    <img
                                                        src={
                                                            "../../images/home-slider-img-grapics.svg"
                                                        }
                                                        alt="graphics-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <div className="home-slider-main-content">
                                                <h3>Planezi #2442</h3>
                                                <h5>Limitted Edittion</h5>
                                                <div className="cretor-block-main">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-slider.png"
                                                        }
                                                        alt="profile-img"
                                                    ></img>
                                                    <div className="cretor-block-main-text">
                                                        <p>Collection </p>
                                                        <Link href="{}">
                                                            @Grient Phahn
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="bid-auction-block">
                                                    <div className="bid-auction-block-inner">
                                                        <p>Current Bid</p>
                                                        <h2>
                                                            <img
                                                                src={
                                                                    "../../images/ethe-icon-blue.svg"
                                                                }
                                                                alt="ethe-icon"
                                                            ></img>
                                                            <span>5 ETH</span>
                                                        </h2>
                                                    </div>
                                                    <div className="bid-auction-block-inner">
                                                        <p>Audition end in</p>
                                                        <h2>
                                                            <span>
                                                                12 : 30 : 15
                                                            </span>
                                                        </h2>
                                                    </div>
                                                </div>
                                                <div className="btn-group-main">
                                                    <Button>Place bid</Button>
                                                    <Button isBorderBtn={true}>
                                                        View Details
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="home-slider-main-inner">
                                        <div className="home-slider-main-item">
                                            <div className="home-slider-main-img">
                                                <div className="home-slider-main-img-block">
                                                    <img
                                                        src={
                                                            "../../images/home-slider-img.png"
                                                        }
                                                        alt="slider-img"
                                                    ></img>
                                                </div>
                                                <div className="overlay-grapics">
                                                    <img
                                                        src={
                                                            "../../images/home-slider-img-grapics.svg"
                                                        }
                                                        alt="graphics-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <div className="home-slider-main-content">
                                                <h3>Planezi #2442</h3>
                                                <h5>Limitted Edittion</h5>
                                                <div className="cretor-block-main">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-slider.png"
                                                        }
                                                        alt="profile-img"
                                                    ></img>
                                                    <div className="cretor-block-main-text">
                                                        <p>creator</p>
                                                        <Link href="{}">
                                                            @Grient Phahn
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="bid-auction-block">
                                                    <div className="bid-auction-block-inner">
                                                        <p>Current Bid</p>
                                                        <h2>
                                                            <img
                                                                src={
                                                                    "../../images/ethe-icon-blue.svg"
                                                                }
                                                                alt="ethe-icon"
                                                            ></img>
                                                            <span>5 ETH</span>
                                                        </h2>
                                                    </div>
                                                    <div className="bid-auction-block-inner">
                                                        <p>Audition end in</p>
                                                        <h2>
                                                            <span>
                                                                12 : 30 : 15
                                                            </span>
                                                        </h2>
                                                    </div>
                                                </div>
                                                <div className="btn-group-main">
                                                    <Button>Place bid</Button>
                                                    <Button isBorderBtn={true}>
                                                        View Details
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="home-slider-main-inner">
                                        <div className="home-slider-main-item">
                                            <div className="home-slider-main-img">
                                                <div className="home-slider-main-img-block">
                                                    <img
                                                        src={
                                                            "../../images/home-slider-img.png"
                                                        }
                                                        alt="slider-img"
                                                    ></img>
                                                </div>
                                                <div className="overlay-grapics">
                                                    <img
                                                        src={
                                                            "../../images/home-slider-img-grapics.svg"
                                                        }
                                                        alt="graphics-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <div className="home-slider-main-content">
                                                <h3>Planezi #2442</h3>
                                                <h5>Limitted Edittion</h5>
                                                <div className="cretor-block-main">
                                                    <img
                                                        src={
                                                            "../../images/profile-img-slider.png"
                                                        }
                                                        alt="profile-img"
                                                    ></img>
                                                    <div className="cretor-block-main-text">
                                                        <p>creator</p>
                                                        <Link href="{}">
                                                            @Grient Phahn
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="bid-auction-block">
                                                    <div className="bid-auction-block-inner">
                                                        <p>Current Bid</p>
                                                        <h2>
                                                            <img
                                                                src={
                                                                    "../../images/ethe-icon-blue.svg"
                                                                }
                                                                alt="ethe-icon"
                                                            ></img>
                                                            <span>5 ETH</span>
                                                        </h2>
                                                    </div>
                                                    <div className="bid-auction-block-inner">
                                                        <p>Audition end in</p>
                                                        <h2>
                                                            <span>
                                                                12 : 30 : 15
                                                            </span>
                                                        </h2>
                                                    </div>
                                                </div>
                                                <div className="btn-group-main">
                                                    <Button>Place bid</Button>
                                                    <Button isBorderBtn={true}>
                                                        View Details
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </Container>
                </div>
                <div className="home-grapics-one">
                    <img
                        src={"../../images/common-grapics-shape.svg"}
                        alt="common-img"
                    ></img>
                </div>
                <div className="live-auction-block">
                    <Container>
                        <div className="common-title-block">
                            <h2>Live Auctions</h2>
                            <Link href="{}">
                                <span>Explore</span>
                                <img
                                    src={"../../images/right-link-img.svg"}
                                    alt="right-arrow-img"
                                ></img>
                            </Link>
                        </div>
                    </Container>
                    <CommonProductBLock>
                        <Slider {...liveslider}>
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
                                                        "../../images/profile-img-product.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="product-profile-details">
                                                    <p>Creator</p>
                                                    <h5>Hakunamatata</h5>
                                                </div>
                                            </div>
                                            <div className="bid-common">
                                                <p>Current bid</p>
                                                <h5>
                                                    <span>5 ETH</span>
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt="ethe-img"
                                                    ></img>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="btn-product">
                                            <button>
                                                <svg
                                                    width="15"
                                                    height="15"
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                        fill="#565660"
                                                    />
                                                </svg>
                                                <span>Place Bid</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                                        "../../images/profile-img-product.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="product-profile-details">
                                                    <p>Creator</p>
                                                    <h5>Hakunamatata</h5>
                                                </div>
                                            </div>
                                            <div className="bid-common">
                                                <p>Current bid</p>
                                                <h5>
                                                    <span>5 ETH</span>
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt="ethe-img"
                                                    ></img>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="btn-product">
                                            <button>
                                                <svg
                                                    width="15"
                                                    height="15"
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                        fill="#565660"
                                                    />
                                                </svg>
                                                <span>Place Bid</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                                        "../../images/profile-img-product.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="product-profile-details">
                                                    <p>Creator</p>
                                                    <h5>Hakunamatata</h5>
                                                </div>
                                            </div>
                                            <div className="bid-common">
                                                <p>Current bid</p>
                                                <h5>
                                                    <span>5 ETH</span>
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt="ethe-img"
                                                    ></img>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="btn-product">
                                            <button>
                                                <svg
                                                    width="15"
                                                    height="15"
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                        fill="#565660"
                                                    />
                                                </svg>
                                                <span>Place Bid</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                                        "../../images/profile-img-product.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="product-profile-details">
                                                    <p>Creator</p>
                                                    <h5>Hakunamatata</h5>
                                                </div>
                                            </div>
                                            <div className="bid-common">
                                                <p>Current bid</p>
                                                <h5>
                                                    <span>5 ETH</span>
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt="ethe-img"
                                                    ></img>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="btn-product">
                                            <button>
                                                <svg
                                                    width="15"
                                                    height="15"
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                        fill="#565660"
                                                    />
                                                </svg>
                                                <span>Place Bid</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                                        "../../images/profile-img-product.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="product-profile-details">
                                                    <p>Creator</p>
                                                    <h5>Hakunamatata</h5>
                                                </div>
                                            </div>
                                            <div className="bid-common">
                                                <p>Current bid</p>
                                                <h5>
                                                    <span>5 ETH</span>
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt="ethe-img"
                                                    ></img>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="btn-product">
                                            <button>
                                                <svg
                                                    width="15"
                                                    height="15"
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                        fill="#565660"
                                                    />
                                                </svg>
                                                <span>Place Bid</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                                        "../../images/profile-img-product.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="product-profile-details">
                                                    <p>Creator</p>
                                                    <h5>Hakunamatata</h5>
                                                </div>
                                            </div>
                                            <div className="bid-common">
                                                <p>Current bid</p>
                                                <h5>
                                                    <span>5 ETH</span>
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt="ethe-img"
                                                    ></img>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="btn-product">
                                            <button>
                                                <svg
                                                    width="15"
                                                    height="15"
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                        fill="#565660"
                                                    />
                                                </svg>
                                                <span>Place Bid</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                                        "../../images/profile-img-product.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="product-profile-details">
                                                    <p>Creator</p>
                                                    <h5>Hakunamatata</h5>
                                                </div>
                                            </div>
                                            <div className="bid-common">
                                                <p>Current bid</p>
                                                <h5>
                                                    <span>5 ETH</span>
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt="ethe-img"
                                                    ></img>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="btn-product">
                                            <button>
                                                <svg
                                                    width="15"
                                                    height="15"
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                        fill="#565660"
                                                    />
                                                </svg>
                                                <span>Place Bid</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                                        "../../images/profile-img-product.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="product-profile-details">
                                                    <p>Creator</p>
                                                    <h5>Hakunamatata</h5>
                                                </div>
                                            </div>
                                            <div className="bid-common">
                                                <p>Current bid</p>
                                                <h5>
                                                    <span>5 ETH</span>
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt="ethe-img"
                                                    ></img>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="btn-product">
                                            <button>
                                                <svg
                                                    width="15"
                                                    height="15"
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                        fill="#565660"
                                                    />
                                                </svg>
                                                <span>Place Bid</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                                        "../../images/profile-img-product.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="product-profile-details">
                                                    <p>Creator</p>
                                                    <h5>Hakunamatata</h5>
                                                </div>
                                            </div>
                                            <div className="bid-common">
                                                <p>Current bid</p>
                                                <h5>
                                                    <span>5 ETH</span>
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt="ethe-img"
                                                    ></img>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="btn-product">
                                            <button>
                                                <svg
                                                    width="15"
                                                    height="15"
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                        fill="#565660"
                                                    />
                                                </svg>
                                                <span>Place Bid</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                                        "../../images/profile-img-product.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="product-profile-details">
                                                    <p>Creator</p>
                                                    <h5>Hakunamatata</h5>
                                                </div>
                                            </div>
                                            <div className="bid-common">
                                                <p>Current bid</p>
                                                <h5>
                                                    <span>5 ETH</span>
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt="ethe-img"
                                                    ></img>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="btn-product">
                                            <button>
                                                <svg
                                                    width="15"
                                                    height="15"
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                        fill="#565660"
                                                    />
                                                </svg>
                                                <span>Place Bid</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                                        "../../images/profile-img-product.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="product-profile-details">
                                                    <p>Creator</p>
                                                    <h5>Hakunamatata</h5>
                                                </div>
                                            </div>
                                            <div className="bid-common">
                                                <p>Current bid</p>
                                                <h5>
                                                    <span>5 ETH</span>
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt="ethe-img"
                                                    ></img>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="btn-product">
                                            <button>
                                                <svg
                                                    width="15"
                                                    height="15"
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                        fill="#565660"
                                                    />
                                                </svg>
                                                <span>Place Bid</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                                        "../../images/profile-img-product.png"
                                                    }
                                                    alt=""
                                                ></img>
                                                <div className="product-profile-details">
                                                    <p>Creator</p>
                                                    <h5>Hakunamatata</h5>
                                                </div>
                                            </div>
                                            <div className="bid-common">
                                                <p>Current bid</p>
                                                <h5>
                                                    <span>5 ETH</span>
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon-blue.svg"
                                                        }
                                                        alt="ethe-img"
                                                    ></img>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="btn-product">
                                            <button>
                                                <svg
                                                    width="15"
                                                    height="15"
                                                    viewBox="0 0 15 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                        fill="#565660"
                                                    />
                                                </svg>
                                                <span>Place Bid</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </CommonProductBLock>
                </div>
                <div className="home-grapics-two">
                    <img
                        src={"../../images/common-grpics-shape-2.svg"}
                        alt="common-img"
                    ></img>
                </div>
                <div className="traning-nft-block">
                    <Container>
                        <div className="common-title-block">
                            <h2>Trending NFTs</h2>
                            <Link href="{}">
                                <span>Explore</span>
                                <img
                                    src={"../../images/right-link-img.svg"}
                                    alt="right-arrow-img"
                                ></img>
                            </Link>
                        </div>
                        <CommonProductBLock>
                            <Slider {...trendingslider}>
                                <div className="common-product-block">
                                    <div className="common-product-block-inner">
                                        <div className="common-product-block-inner-width">
                                            <div className="product-img-time">
                                                <img
                                                    src={
                                                        "../../images/nft-img-trending.png"
                                                    }
                                                    alt=""
                                                ></img>
                                            </div>
                                            <div className="product-details-profile">
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
                                                <div className="bid-common">
                                                    <Link
                                                        href="{}"
                                                        className="link-bid-main"
                                                    >
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
                                            </div>
                                            <div className="floor-volume-block">
                                                <div className="floor-volume-block-inner">
                                                    <p>Floor</p>
                                                    <h4>
                                                        <span>0.01 ETH</span>
                                                        <img
                                                            src={
                                                                "../../images/ethe-icon-blue.svg"
                                                            }
                                                            alt="ethe-icon"
                                                        ></img>
                                                    </h4>
                                                </div>
                                                <div className="floor-volume-block-inner">
                                                    <p>24h volume</p>
                                                    <h4>5 ETH</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="common-product-block">
                                    <div className="common-product-block-inner">
                                        <div className="common-product-block-inner-width">
                                            <div className="product-img-time">
                                                <img
                                                    src={
                                                        "../../images/nft-img-trending.png"
                                                    }
                                                    alt=""
                                                ></img>
                                            </div>
                                            <div className="product-details-profile">
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
                                                <div className="bid-common">
                                                    <Link
                                                        href="{}"
                                                        className="link-bid-main"
                                                    >
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
                                            </div>
                                            <div className="floor-volume-block">
                                                <div className="floor-volume-block-inner">
                                                    <p>Floor</p>
                                                    <h4>
                                                        <span>0.01 ETH</span>
                                                        <img
                                                            src={
                                                                "../../images/ethe-icon-blue.svg"
                                                            }
                                                            alt="ethe-icon"
                                                        ></img>
                                                    </h4>
                                                </div>
                                                <div className="floor-volume-block-inner">
                                                    <p>24h volume</p>
                                                    <h4>5 ETH</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="common-product-block">
                                    <div className="common-product-block-inner">
                                        <div className="common-product-block-inner-width">
                                            <div className="product-img-time">
                                                <img
                                                    src={
                                                        "../../images/nft-img-trending.png"
                                                    }
                                                    alt=""
                                                ></img>
                                            </div>
                                            <div className="product-details-profile">
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
                                                <div className="bid-common">
                                                    <Link
                                                        href="{}"
                                                        className="link-bid-main"
                                                    >
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
                                            </div>
                                            <div className="floor-volume-block">
                                                <div className="floor-volume-block-inner">
                                                    <p>Floor</p>
                                                    <h4>
                                                        <span>0.01 ETH</span>
                                                        <img
                                                            src={
                                                                "../../images/ethe-icon-blue.svg"
                                                            }
                                                            alt="ethe-icon"
                                                        ></img>
                                                    </h4>
                                                </div>
                                                <div className="floor-volume-block-inner">
                                                    <p>24h volume</p>
                                                    <h4>5 ETH</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="common-product-block">
                                    <div className="common-product-block-inner">
                                        <div className="common-product-block-inner-width">
                                            <div className="product-img-time">
                                                <img
                                                    src={
                                                        "../../images/nft-img-trending.png"
                                                    }
                                                    alt=""
                                                ></img>
                                            </div>
                                            <div className="product-details-profile">
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
                                                <div className="bid-common">
                                                    <Link
                                                        href="{}"
                                                        className="link-bid-main"
                                                    >
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
                                            </div>
                                            <div className="floor-volume-block">
                                                <div className="floor-volume-block-inner">
                                                    <p>Floor</p>
                                                    <h4>
                                                        <span>0.01 ETH</span>
                                                        <img
                                                            src={
                                                                "../../images/ethe-icon-blue.svg"
                                                            }
                                                            alt="ethe-icon"
                                                        ></img>
                                                    </h4>
                                                </div>
                                                <div className="floor-volume-block-inner">
                                                    <p>24h volume</p>
                                                    <h4>5 ETH</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="common-product-block">
                                    <div className="common-product-block-inner">
                                        <div className="common-product-block-inner-width">
                                            <div className="product-img-time">
                                                <img
                                                    src={
                                                        "../../images/nft-img-trending.png"
                                                    }
                                                    alt=""
                                                ></img>
                                            </div>
                                            <div className="product-details-profile">
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
                                                <div className="bid-common">
                                                    <Link
                                                        href="{}"
                                                        className="link-bid-main"
                                                    >
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
                                            </div>
                                            <div className="floor-volume-block">
                                                <div className="floor-volume-block-inner">
                                                    <p>Floor</p>
                                                    <h4>
                                                        <span>0.01 ETH</span>
                                                        <img
                                                            src={
                                                                "../../images/ethe-icon-blue.svg"
                                                            }
                                                            alt="ethe-icon"
                                                        ></img>
                                                    </h4>
                                                </div>
                                                <div className="floor-volume-block-inner">
                                                    <p>24h volume</p>
                                                    <h4>5 ETH</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="common-product-block">
                                    <div className="common-product-block-inner">
                                        <div className="common-product-block-inner-width">
                                            <div className="product-img-time">
                                                <img
                                                    src={
                                                        "../../images/nft-img-trending.png"
                                                    }
                                                    alt=""
                                                ></img>
                                            </div>
                                            <div className="product-details-profile">
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
                                                <div className="bid-common">
                                                    <Link
                                                        href="{}"
                                                        className="link-bid-main"
                                                    >
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
                                            </div>
                                            <div className="floor-volume-block">
                                                <div className="floor-volume-block-inner">
                                                    <p>Floor</p>
                                                    <h4>
                                                        <span>0.01 ETH</span>
                                                        <img
                                                            src={
                                                                "../../images/ethe-icon-blue.svg"
                                                            }
                                                            alt="ethe-icon"
                                                        ></img>
                                                    </h4>
                                                </div>
                                                <div className="floor-volume-block-inner">
                                                    <p>24h volume</p>
                                                    <h4>5 ETH</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </CommonProductBLock>
                    </Container>
                </div>
                <div className="home-grapics-three">
                    <img
                        src={"../../images/common-grapics-shape.svg"}
                        alt="common-img"
                    ></img>
                </div>
                <div className="home-grapics-four">
                    <img
                        src={"../../images/common-grapics-shape-3.svg"}
                        alt="common-img"
                    ></img>
                </div>
                <div className="home-grapics-five">
                    <img
                        src={"../../images/common-grapics-shape-4.svg"}
                        alt="common-img"
                    ></img>
                </div>
                <div className="home-grapics-six">
                    <img
                        src={"../../images/common-grapics-shape-5.svg"}
                        alt="common-img"
                    ></img>
                </div>
                <div className="popular-collection-main">
                    <Container>
                        <div className="common-title-block">
                            <h2>Popular collections</h2>
                            <Link href="{}">
                                <span>Explore</span>
                                <img
                                    src={"../../images/right-link-img.svg"}
                                    alt="right-arrow-img"
                                ></img>
                            </Link>
                        </div>
                        <Slider {...popularslider}>
                            <div className="popular-collection-inner">
                                <div className="popular-collection-inner-block">
                                    <div className="popular-collection-img">
                                        {/* <img src={'../../images/popukar-img-block.png'} alt='popukar-img'></img> */}
                                        <div className="img-block-popular">
                                            <div className="img-block-popular-left">
                                                <img
                                                    src={
                                                        "../../images/popular-img-1.png"
                                                    }
                                                    alt="popukar-img"
                                                ></img>
                                            </div>
                                            <div className="img-block-popular-right">
                                                <img
                                                    src={
                                                        "../../images/popular-img-2.png"
                                                    }
                                                    alt="popukar-img"
                                                ></img>
                                                <img
                                                    src={
                                                        "../../images/popular-img-3.png"
                                                    }
                                                    alt="popukar-img"
                                                ></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popular-collection-profile-flex">
                                        <div className="popular-collection-profile">
                                            <div className="popular-collection-profile-img">
                                                <img
                                                    src={
                                                        "../../images/item-details.png"
                                                    }
                                                    alt="item-details-img"
                                                ></img>
                                                <div className="verify-icon-block">
                                                    <img
                                                        src={
                                                            "../../images/sale-verify.png"
                                                        }
                                                        alt="sale-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <div className="popular-collection-profile-content">
                                                <h4>Fabian Terry</h4>
                                                <p>6 Owners</p>
                                            </div>
                                        </div>
                                        <div className="profile-item-block">
                                            <h4>26 Items</h4>
                                        </div>
                                    </div>
                                    <div className="popular-collection-price">
                                        <div className="popular-collection-price-content">
                                            <h2>
                                                <img
                                                    src={
                                                        "../../images/ethe-icon-blue.svg"
                                                    }
                                                    alt="ethe-img"
                                                ></img>
                                                <span>33.2 wETH</span>
                                            </h2>
                                            <p>$ 92,025</p>
                                        </div>
                                        <div className="link-popular-block">
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
                                                    ></path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="popular-collection-inner">
                                <div className="popular-collection-inner-block">
                                    <div className="popular-collection-img">
                                        <div className="img-block-popular">
                                            <div className="img-block-popular-left">
                                                <img
                                                    src={
                                                        "../../images/popular-img-1.png"
                                                    }
                                                    alt="popukar-img"
                                                ></img>
                                            </div>
                                            <div className="img-block-popular-right">
                                                <img
                                                    src={
                                                        "../../images/popular-img-2.png"
                                                    }
                                                    alt="popukar-img"
                                                ></img>
                                                <img
                                                    src={
                                                        "../../images/popular-img-3.png"
                                                    }
                                                    alt="popukar-img"
                                                ></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popular-collection-profile-flex">
                                        <div className="popular-collection-profile">
                                            <div className="popular-collection-profile-img">
                                                <img
                                                    src={
                                                        "../../images/item-details.png"
                                                    }
                                                    alt="item-details-img"
                                                ></img>
                                                <div className="verify-icon-block">
                                                    <img
                                                        src={
                                                            "../../images/sale-verify.png"
                                                        }
                                                        alt="sale-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <div className="popular-collection-profile-content">
                                                <h4>Fabian Terry</h4>
                                                <p>6 Owners</p>
                                            </div>
                                        </div>
                                        <div className="profile-item-block">
                                            <h4>26 Items</h4>
                                        </div>
                                    </div>
                                    <div className="popular-collection-price">
                                        <div className="popular-collection-price-content">
                                            <h2>
                                                <img
                                                    src={
                                                        "../../images/ethe-icon-blue.svg"
                                                    }
                                                    alt="ethe-img"
                                                ></img>
                                                <span>33.2 wETH</span>
                                            </h2>
                                            <p>$ 92,025</p>
                                        </div>
                                        <div className="link-popular-block">
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
                                                    ></path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="popular-collection-inner">
                                <div className="popular-collection-inner-block">
                                    <div className="popular-collection-img">
                                        <div className="img-block-popular">
                                            <div className="img-block-popular-left">
                                                <img
                                                    src={
                                                        "../../images/popular-img-1.png"
                                                    }
                                                    alt="popukar-img"
                                                ></img>
                                            </div>
                                            <div className="img-block-popular-right">
                                                <img
                                                    src={
                                                        "../../images/popular-img-2.png"
                                                    }
                                                    alt="popukar-img"
                                                ></img>
                                                <img
                                                    src={
                                                        "../../images/popular-img-3.png"
                                                    }
                                                    alt="popukar-img"
                                                ></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popular-collection-profile-flex">
                                        <div className="popular-collection-profile">
                                            <div className="popular-collection-profile-img">
                                                <img
                                                    src={
                                                        "../../images/item-details.png"
                                                    }
                                                    alt="item-details-img"
                                                ></img>
                                                <div className="verify-icon-block">
                                                    <img
                                                        src={
                                                            "../../images/sale-verify.png"
                                                        }
                                                        alt="sale-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <div className="popular-collection-profile-content">
                                                <h4>Fabian Terry</h4>
                                                <p>6 Owners</p>
                                            </div>
                                        </div>
                                        <div className="profile-item-block">
                                            <h4>26 Items</h4>
                                        </div>
                                    </div>
                                    <div className="popular-collection-price">
                                        <div className="popular-collection-price-content">
                                            <h2>
                                                <img
                                                    src={
                                                        "../../images/ethe-icon-blue.svg"
                                                    }
                                                    alt="ethe-img"
                                                ></img>
                                                <span>33.2 wETH</span>
                                            </h2>
                                            <p>$ 92,025</p>
                                        </div>
                                        <div className="link-popular-block">
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
                                                    ></path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="popular-collection-inner">
                                <div className="popular-collection-inner-block">
                                    <div className="popular-collection-img">
                                        <div className="img-block-popular">
                                            <div className="img-block-popular-left">
                                                <img
                                                    src={
                                                        "../../images/popular-img-1.png"
                                                    }
                                                    alt="popukar-img"
                                                ></img>
                                            </div>
                                            <div className="img-block-popular-right">
                                                <img
                                                    src={
                                                        "../../images/popular-img-2.png"
                                                    }
                                                    alt="popukar-img"
                                                ></img>
                                                <img
                                                    src={
                                                        "../../images/popular-img-3.png"
                                                    }
                                                    alt="popukar-img"
                                                ></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popular-collection-profile-flex">
                                        <div className="popular-collection-profile">
                                            <div className="popular-collection-profile-img">
                                                <img
                                                    src={
                                                        "../../images/item-details.png"
                                                    }
                                                    alt="item-details-img"
                                                ></img>
                                                <div className="verify-icon-block">
                                                    <img
                                                        src={
                                                            "../../images/sale-verify.png"
                                                        }
                                                        alt="sale-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <div className="popular-collection-profile-content">
                                                <h4>Fabian Terry</h4>
                                                <p>6 Owners</p>
                                            </div>
                                        </div>
                                        <div className="profile-item-block">
                                            <h4>26 Items</h4>
                                        </div>
                                    </div>
                                    <div className="popular-collection-price">
                                        <div className="popular-collection-price-content">
                                            <h2>
                                                <img
                                                    src={
                                                        "../../images/ethe-icon-blue.svg"
                                                    }
                                                    alt="ethe-img"
                                                ></img>
                                                <span>33.2 wETH</span>
                                            </h2>
                                            <p>$ 92,025</p>
                                        </div>
                                        <div className="link-popular-block">
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
                                                    ></path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="popular-collection-inner">
                                <div className="popular-collection-inner-block">
                                    <div className="popular-collection-img">
                                        <div className="img-block-popular">
                                            <div className="img-block-popular-left">
                                                <img
                                                    src={
                                                        "../../images/popular-img-1.png"
                                                    }
                                                    alt="popukar-img"
                                                ></img>
                                            </div>
                                            <div className="img-block-popular-right">
                                                <img
                                                    src={
                                                        "../../images/popular-img-2.png"
                                                    }
                                                    alt="popukar-img"
                                                ></img>
                                                <img
                                                    src={
                                                        "../../images/popular-img-3.png"
                                                    }
                                                    alt="popukar-img"
                                                ></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popular-collection-profile-flex">
                                        <div className="popular-collection-profile">
                                            <div className="popular-collection-profile-img">
                                                <img
                                                    src={
                                                        "../../images/item-details.png"
                                                    }
                                                    alt="item-details-img"
                                                ></img>
                                                <div className="verify-icon-block">
                                                    <img
                                                        src={
                                                            "../../images/sale-verify.png"
                                                        }
                                                        alt="sale-img"
                                                    ></img>
                                                </div>
                                            </div>
                                            <div className="popular-collection-profile-content">
                                                <h4>Fabian Terry</h4>
                                                <p>6 Owners</p>
                                            </div>
                                        </div>
                                        <div className="profile-item-block">
                                            <h4>26 Items</h4>
                                        </div>
                                    </div>
                                    <div className="popular-collection-price">
                                        <div className="popular-collection-price-content">
                                            <h2>
                                                <img
                                                    src={
                                                        "../../images/ethe-icon-blue.svg"
                                                    }
                                                    alt="ethe-img"
                                                ></img>
                                                <span>33.2 wETH</span>
                                            </h2>
                                            <p>$ 92,025</p>
                                        </div>
                                        <div className="link-popular-block">
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
                                                    ></path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </Container>
                </div>
                <div className="tab-filter-main-block">
                    <Container>
                        <div className="common-title-block">
                            <h2>
                                <span>Hot Picks</span>
                                <img
                                    src={"../../images/fire-img-icon.svg"}
                                    alt="fire-img"
                                ></img>
                            </h2>
                        </div>
                        <div className="top-button-select">
                            <div className="top-button-group">
                                <button>3D model </button>
                                <button>Anime/manga</button>
                                <button>Cyber Punk </button>
                                <button>pixel art </button>
                                <button>music </button>
                                <button>abstract </button>
                                <button>2D Arts </button>
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
                                                            <h5>
                                                                Hakunamatata
                                                            </h5>
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
                                                            <h5>
                                                                Hakunamatata
                                                            </h5>
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
                                                                <span>
                                                                    0.0041
                                                                </span>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="btn-product">
                                                        <button>
                                                            <span>
                                                                Purchase
                                                            </span>
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
                                                            <h5>
                                                                Hakunamatata
                                                            </h5>
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
                                                            <h5>
                                                                Hakunamatata
                                                            </h5>
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
                                                                <span>
                                                                    0.0041
                                                                </span>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="btn-product">
                                                        <button>
                                                            <span>
                                                                Purchase
                                                            </span>
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
                                                            <h5>
                                                                Hakunamatata
                                                            </h5>
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
                                                            <h5>
                                                                Hakunamatata
                                                            </h5>
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
                                                                <span>
                                                                    0.0041
                                                                </span>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="btn-product">
                                                        <button>
                                                            <span>
                                                                Purchase
                                                            </span>
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
                                                            <h5>
                                                                Hakunamatata
                                                            </h5>
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
                                                            <h5>
                                                                Hakunamatata
                                                            </h5>
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
                                                                <span>
                                                                    0.0041
                                                                </span>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="btn-product">
                                                        <button>
                                                            <span>
                                                                Purchase
                                                            </span>
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
                                                            <h5>
                                                                Hakunamatata
                                                            </h5>
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
                                                            <h5>
                                                                Hakunamatata
                                                            </h5>
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
                                                                <span>
                                                                    0.0041
                                                                </span>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="btn-product">
                                                        <button>
                                                            <span>
                                                                Purchase
                                                            </span>
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
                                                            <h5>
                                                                Hakunamatata
                                                            </h5>
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
                                                            <h5>
                                                                Hakunamatata
                                                            </h5>
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
                                                                <span>
                                                                    0.0041
                                                                </span>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="btn-product">
                                                        <button>
                                                            <span>
                                                                Purchase
                                                            </span>
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
                                                            <h5>
                                                                Hakunamatata
                                                            </h5>
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
                                                            <h5>
                                                                Hakunamatata
                                                            </h5>
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
                                                                <span>
                                                                    0.0041
                                                                </span>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="btn-product">
                                                        <button>
                                                            <span>
                                                                Purchase
                                                            </span>
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
                                                            <h5>
                                                                Hakunamatata
                                                            </h5>
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
                                                            <h5>
                                                                Hakunamatata
                                                            </h5>
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
                                                                <span>
                                                                    0.0041
                                                                </span>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="btn-product">
                                                        <button>
                                                            <span>
                                                                Purchase
                                                            </span>
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
                                                            <h5>
                                                                Hakunamatata
                                                            </h5>
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
                                                            <h5>
                                                                Hakunamatata
                                                            </h5>
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
                                                                <span>
                                                                    0.0041
                                                                </span>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="btn-product">
                                                        <button>
                                                            <span>
                                                                Purchase
                                                            </span>
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
                                                            <h5>
                                                                Hakunamatata
                                                            </h5>
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
                                                            <h5>
                                                                Hakunamatata
                                                            </h5>
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
                                                                <span>
                                                                    0.0041
                                                                </span>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="btn-product">
                                                        <button>
                                                            <span>
                                                                Purchase
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CommonProductBLock>
                            </div>
                        </div>
                        <div className="load-more-block">
                            <Button isBorderBtn={true}>Load More</Button>
                        </div>
                    </Container>
                </div>
                <div className="top-seller-block">
                    <Container>
                        <div className="common-title-block text-center">
                            <h2>Today’s Top Collectors</h2>
                        </div>
                        <div className="top-seller-block-main">
                            <div className="top-seller-block-inner">
                                <div className="top-seller-collection-profile-flex">
                                    <div className="top-seller-collection-profile">
                                        <div className="top-seller-collection-profile-img">
                                            <img
                                                src={
                                                    "../../images/item-details.png"
                                                }
                                                alt="item-details-img"
                                            ></img>
                                            <div className="verify-icon-block">
                                                <img
                                                    src={
                                                        "../../images/verify-icon-check.svg"
                                                    }
                                                    alt="verify-img"
                                                ></img>
                                            </div>
                                        </div>
                                        <div className="top-seller-collection-profile-content">
                                            <h4>Roxanne Wallaker</h4>
                                            <p>1.56 wETH</p>
                                        </div>
                                    </div>
                                    <div className="top-seller-item-block">
                                        <div className="add-check-icon">
                                            <svg
                                                version="1.2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                                width="14"
                                                height="14"
                                            >
                                                <path
                                                    id="Layer"
                                                    class="s0"
                                                    d="m7 0q-0.2 0-0.4 0.1-0.2 0.1-0.3 0.2-0.1 0.1-0.2 0.3-0.1 0.2-0.1 0.4v5h-5q-0.4 0-0.7 0.3-0.3 0.3-0.3 0.7 0 0.4 0.3 0.7 0.3 0.3 0.7 0.3h5v5q0 0.4 0.3 0.7 0.3 0.3 0.7 0.3 0.4 0 0.7-0.3 0.3-0.3 0.3-0.7v-5h5q0.4 0 0.7-0.3 0.3-0.3 0.3-0.7 0-0.4-0.3-0.7-0.3-0.3-0.7-0.3h-5v-5q0-0.2-0.1-0.4-0.1-0.2-0.2-0.3-0.1-0.1-0.3-0.2-0.2-0.1-0.4-0.1z"
                                                />
                                            </svg>
                                            <img
                                                src={
                                                    "../../images/check-icon-1.svg"
                                                }
                                                alt="check-img"
                                            ></img>
                                        </div>
                                        <div className="number-block-list">
                                            <h4>
                                                # <span>1</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="top-seller-block-inner">
                                <div className="top-seller-collection-profile-flex">
                                    <div className="top-seller-collection-profile">
                                        <div className="top-seller-collection-profile-img">
                                            <img
                                                src={
                                                    "../../images/item-details.png"
                                                }
                                                alt="item-details-img"
                                            ></img>
                                            <div className="verify-icon-block">
                                                <img
                                                    src={
                                                        "../../images/verify-icon-check.svg"
                                                    }
                                                    alt="verify-img"
                                                ></img>
                                            </div>
                                        </div>
                                        <div className="top-seller-collection-profile-content">
                                            <h4>Roxanne Wallaker</h4>
                                            <p>1.56 wETH</p>
                                        </div>
                                    </div>
                                    <div className="top-seller-item-block">
                                        <div className="add-check-icon">
                                            <svg
                                                version="1.2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                                width="14"
                                                height="14"
                                            >
                                                <path
                                                    id="Layer"
                                                    class="s0"
                                                    d="m7 0q-0.2 0-0.4 0.1-0.2 0.1-0.3 0.2-0.1 0.1-0.2 0.3-0.1 0.2-0.1 0.4v5h-5q-0.4 0-0.7 0.3-0.3 0.3-0.3 0.7 0 0.4 0.3 0.7 0.3 0.3 0.7 0.3h5v5q0 0.4 0.3 0.7 0.3 0.3 0.7 0.3 0.4 0 0.7-0.3 0.3-0.3 0.3-0.7v-5h5q0.4 0 0.7-0.3 0.3-0.3 0.3-0.7 0-0.4-0.3-0.7-0.3-0.3-0.7-0.3h-5v-5q0-0.2-0.1-0.4-0.1-0.2-0.2-0.3-0.1-0.1-0.3-0.2-0.2-0.1-0.4-0.1z"
                                                />
                                            </svg>
                                            <img
                                                src={
                                                    "../../images/check-icon-1.svg"
                                                }
                                                alt="check-img"
                                            ></img>
                                        </div>
                                        <div className="number-block-list">
                                            <h4>
                                                # <span>1</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="top-seller-block-inner">
                                <div className="top-seller-collection-profile-flex">
                                    <div className="top-seller-collection-profile">
                                        <div className="top-seller-collection-profile-img">
                                            <img
                                                src={
                                                    "../../images/item-details.png"
                                                }
                                                alt="item-details-img"
                                            ></img>
                                            <div className="verify-icon-block">
                                                <img
                                                    src={
                                                        "../../images/verify-icon-check.svg"
                                                    }
                                                    alt="verify-img"
                                                ></img>
                                            </div>
                                        </div>
                                        <div className="top-seller-collection-profile-content">
                                            <h4>Roxanne Wallaker</h4>
                                            <p>1.56 wETH</p>
                                        </div>
                                    </div>
                                    <div className="top-seller-item-block">
                                        <div className="add-check-icon">
                                            <svg
                                                version="1.2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                                width="14"
                                                height="14"
                                            >
                                                <path
                                                    id="Layer"
                                                    class="s0"
                                                    d="m7 0q-0.2 0-0.4 0.1-0.2 0.1-0.3 0.2-0.1 0.1-0.2 0.3-0.1 0.2-0.1 0.4v5h-5q-0.4 0-0.7 0.3-0.3 0.3-0.3 0.7 0 0.4 0.3 0.7 0.3 0.3 0.7 0.3h5v5q0 0.4 0.3 0.7 0.3 0.3 0.7 0.3 0.4 0 0.7-0.3 0.3-0.3 0.3-0.7v-5h5q0.4 0 0.7-0.3 0.3-0.3 0.3-0.7 0-0.4-0.3-0.7-0.3-0.3-0.7-0.3h-5v-5q0-0.2-0.1-0.4-0.1-0.2-0.2-0.3-0.1-0.1-0.3-0.2-0.2-0.1-0.4-0.1z"
                                                />
                                            </svg>
                                            <img
                                                src={
                                                    "../../images/check-icon-1.svg"
                                                }
                                                alt="check-img"
                                            ></img>
                                        </div>
                                        <div className="number-block-list">
                                            <h4>
                                                # <span>1</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="top-seller-block-inner">
                                <div className="top-seller-collection-profile-flex">
                                    <div className="top-seller-collection-profile">
                                        <div className="top-seller-collection-profile-img">
                                            <img
                                                src={
                                                    "../../images/item-details.png"
                                                }
                                                alt="item-details-img"
                                            ></img>
                                            <div className="verify-icon-block">
                                                <img
                                                    src={
                                                        "../../images/verify-icon-check.svg"
                                                    }
                                                    alt="verify-img"
                                                ></img>
                                            </div>
                                        </div>
                                        <div className="top-seller-collection-profile-content">
                                            <h4>Roxanne Wallaker</h4>
                                            <p>1.56 wETH</p>
                                        </div>
                                    </div>
                                    <div className="top-seller-item-block">
                                        <div className="add-check-icon">
                                            <svg
                                                version="1.2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                                width="14"
                                                height="14"
                                            >
                                                <path
                                                    id="Layer"
                                                    class="s0"
                                                    d="m7 0q-0.2 0-0.4 0.1-0.2 0.1-0.3 0.2-0.1 0.1-0.2 0.3-0.1 0.2-0.1 0.4v5h-5q-0.4 0-0.7 0.3-0.3 0.3-0.3 0.7 0 0.4 0.3 0.7 0.3 0.3 0.7 0.3h5v5q0 0.4 0.3 0.7 0.3 0.3 0.7 0.3 0.4 0 0.7-0.3 0.3-0.3 0.3-0.7v-5h5q0.4 0 0.7-0.3 0.3-0.3 0.3-0.7 0-0.4-0.3-0.7-0.3-0.3-0.7-0.3h-5v-5q0-0.2-0.1-0.4-0.1-0.2-0.2-0.3-0.1-0.1-0.3-0.2-0.2-0.1-0.4-0.1z"
                                                />
                                            </svg>
                                            <img
                                                src={
                                                    "../../images/check-icon-1.svg"
                                                }
                                                alt="check-img"
                                            ></img>
                                        </div>
                                        <div className="number-block-list">
                                            <h4>
                                                # <span>1</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="top-seller-block-inner">
                                <div className="top-seller-collection-profile-flex">
                                    <div className="top-seller-collection-profile">
                                        <div className="top-seller-collection-profile-img">
                                            <img
                                                src={
                                                    "../../images/item-details.png"
                                                }
                                                alt="item-details-img"
                                            ></img>
                                            <div className="verify-icon-block">
                                                <img
                                                    src={
                                                        "../../images/verify-icon-check.svg"
                                                    }
                                                    alt="verify-img"
                                                ></img>
                                            </div>
                                        </div>
                                        <div className="top-seller-collection-profile-content">
                                            <h4>Roxanne Wallaker</h4>
                                            <p>1.56 wETH</p>
                                        </div>
                                    </div>
                                    <div className="top-seller-item-block">
                                        <div className="add-check-icon">
                                            <svg
                                                version="1.2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                                width="14"
                                                height="14"
                                            >
                                                <path
                                                    id="Layer"
                                                    class="s0"
                                                    d="m7 0q-0.2 0-0.4 0.1-0.2 0.1-0.3 0.2-0.1 0.1-0.2 0.3-0.1 0.2-0.1 0.4v5h-5q-0.4 0-0.7 0.3-0.3 0.3-0.3 0.7 0 0.4 0.3 0.7 0.3 0.3 0.7 0.3h5v5q0 0.4 0.3 0.7 0.3 0.3 0.7 0.3 0.4 0 0.7-0.3 0.3-0.3 0.3-0.7v-5h5q0.4 0 0.7-0.3 0.3-0.3 0.3-0.7 0-0.4-0.3-0.7-0.3-0.3-0.7-0.3h-5v-5q0-0.2-0.1-0.4-0.1-0.2-0.2-0.3-0.1-0.1-0.3-0.2-0.2-0.1-0.4-0.1z"
                                                />
                                            </svg>
                                            <img
                                                src={
                                                    "../../images/check-icon-1.svg"
                                                }
                                                alt="check-img"
                                            ></img>
                                        </div>
                                        <div className="number-block-list">
                                            <h4>
                                                # <span>1</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="top-seller-block-inner">
                                <div className="top-seller-collection-profile-flex">
                                    <div className="top-seller-collection-profile">
                                        <div className="top-seller-collection-profile-img">
                                            <img
                                                src={
                                                    "../../images/item-details.png"
                                                }
                                                alt="item-details-img"
                                            ></img>
                                            <div className="verify-icon-block">
                                                <img
                                                    src={
                                                        "../../images/verify-icon-check.svg"
                                                    }
                                                    alt="verify-img"
                                                ></img>
                                            </div>
                                        </div>
                                        <div className="top-seller-collection-profile-content">
                                            <h4>Roxanne Wallaker</h4>
                                            <p>1.56 wETH</p>
                                        </div>
                                    </div>
                                    <div className="top-seller-item-block">
                                        <div className="add-check-icon">
                                            <svg
                                                version="1.2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                                width="14"
                                                height="14"
                                            >
                                                <path
                                                    id="Layer"
                                                    class="s0"
                                                    d="m7 0q-0.2 0-0.4 0.1-0.2 0.1-0.3 0.2-0.1 0.1-0.2 0.3-0.1 0.2-0.1 0.4v5h-5q-0.4 0-0.7 0.3-0.3 0.3-0.3 0.7 0 0.4 0.3 0.7 0.3 0.3 0.7 0.3h5v5q0 0.4 0.3 0.7 0.3 0.3 0.7 0.3 0.4 0 0.7-0.3 0.3-0.3 0.3-0.7v-5h5q0.4 0 0.7-0.3 0.3-0.3 0.3-0.7 0-0.4-0.3-0.7-0.3-0.3-0.7-0.3h-5v-5q0-0.2-0.1-0.4-0.1-0.2-0.2-0.3-0.1-0.1-0.3-0.2-0.2-0.1-0.4-0.1z"
                                                />
                                            </svg>
                                            <img
                                                src={
                                                    "../../images/check-icon-1.svg"
                                                }
                                                alt="check-img"
                                            ></img>
                                        </div>
                                        <div className="number-block-list">
                                            <h4>
                                                # <span>1</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="top-seller-block-inner">
                                <div className="top-seller-collection-profile-flex">
                                    <div className="top-seller-collection-profile">
                                        <div className="top-seller-collection-profile-img">
                                            <img
                                                src={
                                                    "../../images/item-details.png"
                                                }
                                                alt="item-details-img"
                                            ></img>
                                            <div className="verify-icon-block">
                                                <img
                                                    src={
                                                        "../../images/verify-icon-check.svg"
                                                    }
                                                    alt="verify-img"
                                                ></img>
                                            </div>
                                        </div>
                                        <div className="top-seller-collection-profile-content">
                                            <h4>Roxanne Wallaker</h4>
                                            <p>1.56 wETH</p>
                                        </div>
                                    </div>
                                    <div className="top-seller-item-block">
                                        <div className="add-check-icon">
                                            <svg
                                                version="1.2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                                width="14"
                                                height="14"
                                            >
                                                <path
                                                    id="Layer"
                                                    class="s0"
                                                    d="m7 0q-0.2 0-0.4 0.1-0.2 0.1-0.3 0.2-0.1 0.1-0.2 0.3-0.1 0.2-0.1 0.4v5h-5q-0.4 0-0.7 0.3-0.3 0.3-0.3 0.7 0 0.4 0.3 0.7 0.3 0.3 0.7 0.3h5v5q0 0.4 0.3 0.7 0.3 0.3 0.7 0.3 0.4 0 0.7-0.3 0.3-0.3 0.3-0.7v-5h5q0.4 0 0.7-0.3 0.3-0.3 0.3-0.7 0-0.4-0.3-0.7-0.3-0.3-0.7-0.3h-5v-5q0-0.2-0.1-0.4-0.1-0.2-0.2-0.3-0.1-0.1-0.3-0.2-0.2-0.1-0.4-0.1z"
                                                />
                                            </svg>
                                            <img
                                                src={
                                                    "../../images/check-icon-1.svg"
                                                }
                                                alt="check-img"
                                            ></img>
                                        </div>
                                        <div className="number-block-list">
                                            <h4>
                                                # <span>1</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="top-seller-block-inner">
                                <div className="top-seller-collection-profile-flex">
                                    <div className="top-seller-collection-profile">
                                        <div className="top-seller-collection-profile-img">
                                            <img
                                                src={
                                                    "../../images/item-details.png"
                                                }
                                                alt="item-details-img"
                                            ></img>
                                            <div className="verify-icon-block">
                                                <img
                                                    src={
                                                        "../../images/verify-icon-check.svg"
                                                    }
                                                    alt="verify-img"
                                                ></img>
                                            </div>
                                        </div>
                                        <div className="top-seller-collection-profile-content">
                                            <h4>Roxanne Wallaker</h4>
                                            <p>1.56 wETH</p>
                                        </div>
                                    </div>
                                    <div className="top-seller-item-block">
                                        <div className="add-check-icon">
                                            <svg
                                                version="1.2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                                width="14"
                                                height="14"
                                            >
                                                <path
                                                    id="Layer"
                                                    class="s0"
                                                    d="m7 0q-0.2 0-0.4 0.1-0.2 0.1-0.3 0.2-0.1 0.1-0.2 0.3-0.1 0.2-0.1 0.4v5h-5q-0.4 0-0.7 0.3-0.3 0.3-0.3 0.7 0 0.4 0.3 0.7 0.3 0.3 0.7 0.3h5v5q0 0.4 0.3 0.7 0.3 0.3 0.7 0.3 0.4 0 0.7-0.3 0.3-0.3 0.3-0.7v-5h5q0.4 0 0.7-0.3 0.3-0.3 0.3-0.7 0-0.4-0.3-0.7-0.3-0.3-0.7-0.3h-5v-5q0-0.2-0.1-0.4-0.1-0.2-0.2-0.3-0.1-0.1-0.3-0.2-0.2-0.1-0.4-0.1z"
                                                />
                                            </svg>
                                            <img
                                                src={
                                                    "../../images/check-icon-1.svg"
                                                }
                                                alt="check-img"
                                            ></img>
                                        </div>
                                        <div className="number-block-list">
                                            <h4>
                                                # <span>1</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="top-seller-block-inner">
                                <div className="top-seller-collection-profile-flex">
                                    <div className="top-seller-collection-profile">
                                        <div className="top-seller-collection-profile-img">
                                            <img
                                                src={
                                                    "../../images/item-details.png"
                                                }
                                                alt="item-details-img"
                                            ></img>
                                            <div className="verify-icon-block">
                                                <img
                                                    src={
                                                        "../../images/verify-icon-check.svg"
                                                    }
                                                    alt="verify-img"
                                                ></img>
                                            </div>
                                        </div>
                                        <div className="top-seller-collection-profile-content">
                                            <h4>Roxanne Wallaker</h4>
                                            <p>1.56 wETH</p>
                                        </div>
                                    </div>
                                    <div className="top-seller-item-block">
                                        <div className="add-check-icon">
                                            <svg
                                                version="1.2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                                width="14"
                                                height="14"
                                            >
                                                <path
                                                    id="Layer"
                                                    class="s0"
                                                    d="m7 0q-0.2 0-0.4 0.1-0.2 0.1-0.3 0.2-0.1 0.1-0.2 0.3-0.1 0.2-0.1 0.4v5h-5q-0.4 0-0.7 0.3-0.3 0.3-0.3 0.7 0 0.4 0.3 0.7 0.3 0.3 0.7 0.3h5v5q0 0.4 0.3 0.7 0.3 0.3 0.7 0.3 0.4 0 0.7-0.3 0.3-0.3 0.3-0.7v-5h5q0.4 0 0.7-0.3 0.3-0.3 0.3-0.7 0-0.4-0.3-0.7-0.3-0.3-0.7-0.3h-5v-5q0-0.2-0.1-0.4-0.1-0.2-0.2-0.3-0.1-0.1-0.3-0.2-0.2-0.1-0.4-0.1z"
                                                />
                                            </svg>
                                            <img
                                                src={
                                                    "../../images/check-icon-1.svg"
                                                }
                                                alt="check-img"
                                            ></img>
                                        </div>
                                        <div className="number-block-list">
                                            <h4>
                                                # <span>1</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="top-seller-block-inner">
                                <div className="top-seller-collection-profile-flex">
                                    <div className="top-seller-collection-profile">
                                        <div className="top-seller-collection-profile-img">
                                            <img
                                                src={
                                                    "../../images/item-details.png"
                                                }
                                                alt="item-details-img"
                                            ></img>
                                            <div className="verify-icon-block">
                                                <img
                                                    src={
                                                        "../../images/verify-icon-check.svg"
                                                    }
                                                    alt="verify-img"
                                                ></img>
                                            </div>
                                        </div>
                                        <div className="top-seller-collection-profile-content">
                                            <h4>Roxanne Wallaker</h4>
                                            <p>1.56 wETH</p>
                                        </div>
                                    </div>
                                    <div className="top-seller-item-block">
                                        <div className="add-check-icon">
                                            <svg
                                                version="1.2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                                width="14"
                                                height="14"
                                            >
                                                <path
                                                    id="Layer"
                                                    class="s0"
                                                    d="m7 0q-0.2 0-0.4 0.1-0.2 0.1-0.3 0.2-0.1 0.1-0.2 0.3-0.1 0.2-0.1 0.4v5h-5q-0.4 0-0.7 0.3-0.3 0.3-0.3 0.7 0 0.4 0.3 0.7 0.3 0.3 0.7 0.3h5v5q0 0.4 0.3 0.7 0.3 0.3 0.7 0.3 0.4 0 0.7-0.3 0.3-0.3 0.3-0.7v-5h5q0.4 0 0.7-0.3 0.3-0.3 0.3-0.7 0-0.4-0.3-0.7-0.3-0.3-0.7-0.3h-5v-5q0-0.2-0.1-0.4-0.1-0.2-0.2-0.3-0.1-0.1-0.3-0.2-0.2-0.1-0.4-0.1z"
                                                />
                                            </svg>
                                            <img
                                                src={
                                                    "../../images/check-icon-1.svg"
                                                }
                                                alt="check-img"
                                            ></img>
                                        </div>
                                        <div className="number-block-list">
                                            <h4>
                                                # <span>1</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="top-seller-block-inner">
                                <div className="top-seller-collection-profile-flex">
                                    <div className="top-seller-collection-profile">
                                        <div className="top-seller-collection-profile-img">
                                            <img
                                                src={
                                                    "../../images/item-details.png"
                                                }
                                                alt="item-details-img"
                                            ></img>
                                            <div className="verify-icon-block">
                                                <img
                                                    src={
                                                        "../../images/verify-icon-check.svg"
                                                    }
                                                    alt="verify-img"
                                                ></img>
                                            </div>
                                        </div>
                                        <div className="top-seller-collection-profile-content">
                                            <h4>Roxanne Wallaker</h4>
                                            <p>1.56 wETH</p>
                                        </div>
                                    </div>
                                    <div className="top-seller-item-block">
                                        <div className="add-check-icon">
                                            <svg
                                                version="1.2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                                width="14"
                                                height="14"
                                            >
                                                <path
                                                    id="Layer"
                                                    class="s0"
                                                    d="m7 0q-0.2 0-0.4 0.1-0.2 0.1-0.3 0.2-0.1 0.1-0.2 0.3-0.1 0.2-0.1 0.4v5h-5q-0.4 0-0.7 0.3-0.3 0.3-0.3 0.7 0 0.4 0.3 0.7 0.3 0.3 0.7 0.3h5v5q0 0.4 0.3 0.7 0.3 0.3 0.7 0.3 0.4 0 0.7-0.3 0.3-0.3 0.3-0.7v-5h5q0.4 0 0.7-0.3 0.3-0.3 0.3-0.7 0-0.4-0.3-0.7-0.3-0.3-0.7-0.3h-5v-5q0-0.2-0.1-0.4-0.1-0.2-0.2-0.3-0.1-0.1-0.3-0.2-0.2-0.1-0.4-0.1z"
                                                />
                                            </svg>
                                            <img
                                                src={
                                                    "../../images/check-icon-1.svg"
                                                }
                                                alt="check-img"
                                            ></img>
                                        </div>
                                        <div className="number-block-list">
                                            <h4>
                                                # <span>1</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="top-seller-block-inner">
                                <div className="top-seller-collection-profile-flex">
                                    <div className="top-seller-collection-profile">
                                        <div className="top-seller-collection-profile-img">
                                            <img
                                                src={
                                                    "../../images/item-details.png"
                                                }
                                                alt="item-details-img"
                                            ></img>
                                            <div className="verify-icon-block">
                                                <img
                                                    src={
                                                        "../../images/verify-icon-check.svg"
                                                    }
                                                    alt="verify-img"
                                                ></img>
                                            </div>
                                        </div>
                                        <div className="top-seller-collection-profile-content">
                                            <h4>Roxanne Wallaker</h4>
                                            <p>1.56 wETH</p>
                                        </div>
                                    </div>
                                    <div className="top-seller-item-block">
                                        <div className="add-check-icon">
                                            <svg
                                                version="1.2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                                width="14"
                                                height="14"
                                            >
                                                <path
                                                    id="Layer"
                                                    class="s0"
                                                    d="m7 0q-0.2 0-0.4 0.1-0.2 0.1-0.3 0.2-0.1 0.1-0.2 0.3-0.1 0.2-0.1 0.4v5h-5q-0.4 0-0.7 0.3-0.3 0.3-0.3 0.7 0 0.4 0.3 0.7 0.3 0.3 0.7 0.3h5v5q0 0.4 0.3 0.7 0.3 0.3 0.7 0.3 0.4 0 0.7-0.3 0.3-0.3 0.3-0.7v-5h5q0.4 0 0.7-0.3 0.3-0.3 0.3-0.7 0-0.4-0.3-0.7-0.3-0.3-0.7-0.3h-5v-5q0-0.2-0.1-0.4-0.1-0.2-0.2-0.3-0.1-0.1-0.3-0.2-0.2-0.1-0.4-0.1z"
                                                />
                                            </svg>
                                            <img
                                                src={
                                                    "../../images/check-icon-1.svg"
                                                }
                                                alt="check-img"
                                            ></img>
                                        </div>
                                        <div className="number-block-list">
                                            <h4>
                                                # <span>1</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="create-art-block">
                    <Container>
                        <div className="create-art-block-inner">
                            <div className="create-art-block-inner-left">
                                <h2>
                                    Create and Sell<br></br> Your{" "}
                                    <span>ART</span>
                                </h2>
                                <p>
                                    Transform your artistic visions into
                                    valuable digital assets. With TesseractX,
                                    creating and selling your art becomes an
                                    effortless, rewarding journey.
                                </p>
                                <div className="create-btn">
                                    <Button>Create</Button>
                                    <Button isBorderBtn={true}>Explore</Button>
                                </div>
                            </div>
                            <div className="create-art-block-inner-right">
                                <img
                                    src={"../../images/create-img-1.svg"}
                                    alt="create-img"
                                ></img>
                            </div>
                        </div>
                    </Container>
                </div>

                {/* <div className='all-category-block'>
          <div className='common-title-block'>
            <h2>All categories</h2>
          </div>
          <div className='slider-category-block'>
            <Slider {...categoryslider}>
              <div>
                <div className='category-slider-block'>
                  <img src={'../../images/category-slider-img.png'} alt='category-img'></img>
                  <div className='category-text'>
                    <h3>Digital art</h3>
                  </div>
                </div>
              </div>
              <div>
                <div className='category-slider-block'>
                  <img src={'../../images/category-slider-img-4.png'} alt='category-img'></img>
                  <div className='category-text'>
                    <h3>Style</h3>
                  </div>
                </div>
              </div>
              <div>
                <div className='category-slider-block'>
                  <img src={'../../images/category-slider-img-2.png'} alt='category-img'></img>
                  <div className='category-text'>
                    <h3>Music</h3>
                  </div>
                </div>
              </div>
              <div>
                <div className='category-slider-block'>
                  <img src={'../../images/category-slider-img-3.png'} alt='category-img'></img>
                  <div className='category-text'>
                    <h3>Sport</h3>
                  </div>
                </div>
              </div>
              <div>
                <div className='category-slider-block'>
                  <img src={'../../images/category-slider-img.png'} alt='category-img'></img>
                  <div className='category-text'>
                    <h3>Digital art</h3>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className='blog-main'>
          <div className='common-title-block'>
            <h2>Blog</h2>
            <Link href='{}'>
              <span>Explore</span>
              <img src={'../../images/right-link-img.svg'} alt='right-arrow-img'></img>
            </Link>
          </div>
          <div className='blog-main-inner'>
            <div className='blog-main-inner-block'>
              <div className='blog-main-inner-block-inner'>
                <img src={'../../images/blog-img.png'} alt='blog-img'></img>
                <h3>What is an NFT?</h3>
              </div>
            </div>
            <div className='blog-main-inner-block'>
              <div className='blog-main-inner-block-inner'>
                <img src={'../../images/blog-img-1.png'} alt='blog-img'></img>
                <h3>How to buy an NFT</h3>
              </div>
            </div>
            <div className='blog-main-inner-block'>
              <div className='blog-main-inner-block-inner'>
                <img src={'../../images/blog-img-2.png'} alt='blog-img'></img>
                <h3>What is minting?</h3>
              </div>
            </div>
            <div className='blog-main-inner-block'>
              <div className='blog-main-inner-block-inner'>
                <img src={'../../images/blog-img-3.png'} alt='blog-img'></img>
                <h3>How to stay protected in web3</h3>
              </div>
            </div>
            <div className='blog-main-inner-block'>
              <div className='blog-main-inner-block-inner'>
                <img src={'../../images/blog-img-5.png'} alt='blog-img'></img>
                <h3>How to create an NFT on OpenSea</h3>
              </div>
            </div>
          </div>
        </div> */}
            </HomeMain>
            {/* </Container> */}
        </CommonPageBlockPad>
    );
};

export default homepage;
