/** @format */

import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Button } from "@/styles/pages/main.style";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import { FormGroup, Label, Input } from "@/styles/pages/main.style";
import React, { useState } from "react";

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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <CommonPageBlockPad>
            <Container>
                <div className="blog-details-block">
                    <div className="blog-details-block-left">
                        <div className="blog-details-block-left-inner">
                            <h2>How to stay protected in web3</h2>
                            <div className="profile-blog">
                                <img
                                    src="../../images/item-details.png"
                                    alt="item-img"
                                ></img>
                                <ul>
                                    <li>
                                        by
                                        <span>Binasea</span>
                                    </li>
                                    <li>August 13, 2022</li>
                                </ul>
                            </div>
                            <div className="blog-detail-review">
                                <div className="blog-detail-review-b">
                                    <img
                                        src="../../images/blog-details-img.png"
                                        alt="blog-img"
                                    ></img>
                                    <h3>
                                        What is the most fun thing to become a
                                        designer?
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Cupidatat non Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum
                                    </p>
                                </div>
                                <div className="blog-detail-review-b">
                                    <div className="blog-detail-review-img">
                                        <div className="blog-detail-review-img-inner">
                                            <img
                                                src="../../images/blog-details-img.png"
                                                alt="blog-img"
                                            ></img>
                                        </div>
                                        <div className="blog-detail-review-img-inner">
                                            <img
                                                src="../../images/blog-details-img.png"
                                                alt="blog-img"
                                            ></img>
                                        </div>
                                    </div>
                                    <h3>
                                        What is the most fun thing to become a
                                        designer?
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Cupidatat non Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum
                                    </p>
                                </div>
                                <div className="blog-detail-review-b share-block">
                                    <img
                                        src="../../images/blog-details-img.png"
                                        alt="blog-img"
                                    ></img>
                                    <h3>
                                        What is the most fun thing to become a
                                        designer?
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Cupidatat non Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum
                                    </p>
                                    <div className="share-details-block">
                                        <div className="share-details-block-inner">
                                            <ul>
                                                <li>
                                                    <h4>Share:</h4>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M13.1745 2.36328V9.72449L10.2637 12.6683H7.83818L6.32758 14.1406H4.44259V12.6683H2.01709V4.32585L2.77766 2.36328H13.1745ZM12.2045 3.34457H3.95725V10.7058H5.8974V12.1774L7.35345 10.7051H10.2637L12.2038 8.74258V3.34457H12.2045ZM10.2643 5.30714V8.25162H9.2936V5.30776H10.2637L10.2643 5.30714ZM7.83818 5.30714V8.25162H6.8681V5.30776H7.83818V5.30714Z"
                                                                fill="#565660"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M12.5086 4.64593C13.0399 4.31358 13.4374 3.79024 13.627 3.17365C13.1278 3.48361 12.5816 3.70196 12.012 3.81925C11.2223 2.94514 9.97119 2.73242 8.95768 3.29995C7.94418 3.86749 7.41921 5.07477 7.67613 6.24721C5.63123 6.13978 3.72606 5.12899 2.43468 3.46637C1.76074 4.68278 2.10514 6.23777 3.22173 7.01994C2.81796 7.00635 2.42314 6.89196 2.0702 6.68629C2.0702 6.69745 2.0702 6.70861 2.0702 6.71978C2.07043 7.98688 2.92384 9.07833 4.11071 9.32945C3.73619 9.43607 3.34335 9.45177 2.96215 9.37534C3.29593 10.4589 4.25031 11.2013 5.3381 11.2234C4.43717 11.9634 3.32454 12.3647 2.17925 12.3627C1.97625 12.363 1.7734 12.3508 1.57178 12.3261C2.7348 13.1082 4.08841 13.5232 5.47086 13.5218C7.39417 13.5356 9.24253 12.7422 10.6025 11.319C11.9625 9.89574 12.7205 7.96151 12.7072 5.94891C12.7072 5.83355 12.7046 5.71882 12.6995 5.60471C13.1976 5.22802 13.6275 4.76138 13.9689 4.2267C13.5049 4.44193 13.0127 4.58325 12.5086 4.64593Z"
                                                                fill="#565660"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg
                                                            width="16"
                                                            height="16"
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M1.12744 8.29253C1.12816 11.3606 3.34554 13.973 6.35718 14.4538V10.0949H4.7846V8.29253H6.35904V6.92044C6.28866 6.27029 6.50937 5.62232 6.96132 5.15228C7.41327 4.68225 8.04962 4.43885 8.69777 4.48811C9.163 4.49567 9.62705 4.53736 10.0863 4.61285V6.14646H9.30275C9.03302 6.11092 8.76183 6.20055 8.5656 6.39011C8.36936 6.57967 8.26931 6.84865 8.29362 7.12127V8.29253H10.0112L9.73665 10.0956H8.29362V14.4538C11.5507 13.9359 13.8346 10.943 13.4908 7.64333C13.1471 4.34365 10.2959 1.89234 7.00297 2.06525C3.70999 2.23816 1.12796 4.97477 1.12744 8.29253Z"
                                                                fill="#565660"
                                                            />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="share-details-block-inner">
                                            <ul>
                                                <li>
                                                    <h4>Tags: </h4>
                                                </li>
                                                <li>
                                                    <p>Bitcoin,</p>
                                                </li>
                                                <li>
                                                    <p>Token,</p>
                                                </li>
                                                <li>
                                                    <p>Wallet</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="leave-commnet-block">
                                <h2>Leave a comment</h2>
                                <form>
                                    <div className="form-group-two">
                                        <FormGroup>
                                            <Input
                                                type="type"
                                                placeholder="Name"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input
                                                type="email"
                                                placeholder="Email"
                                            />
                                        </FormGroup>
                                    </div>
                                    <FormGroup>
                                        <Input
                                            as="textarea"
                                            placeholder="Message"
                                            rows={4}
                                        />
                                    </FormGroup>
                                    <Button>Send comment</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="blog-details-block-right">
                        <h2>Recent post</h2>
                        <div className="blog-details-block-right-profile">
                            <div className="blog-details-block-right-profile-inner">
                                <img
                                    src="../../images/item-details.png"
                                    alt="item-img"
                                ></img>
                                <div className="blog-details">
                                    <h3>6 Make Mobile Website Faster</h3>
                                    <div className="blog-details-text">
                                        <div className="blog-details-text-p">
                                            <p>
                                                Lorem ipsum dolor sit amer....
                                            </p>
                                        </div>
                                        <p>August 10, 2021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-details-block-right-profile-inner">
                                <img
                                    src="../../images/item-details.png"
                                    alt="item-img"
                                ></img>
                                <div className="blog-details">
                                    <h3>6 Make Mobile Website Faster</h3>
                                    <div className="blog-details-text">
                                        <div className="blog-details-text-p">
                                            <p>
                                                Lorem ipsum dolor sit amer....
                                            </p>
                                        </div>
                                        <p>August 10, 2021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-details-block-right-profile-inner">
                                <img
                                    src="../../images/item-details.png"
                                    alt="item-img"
                                ></img>
                                <div className="blog-details">
                                    <h3>6 Make Mobile Website Faster</h3>
                                    <div className="blog-details-text">
                                        <div className="blog-details-text-p">
                                            <p>
                                                Lorem ipsum dolor sit amer....
                                            </p>
                                        </div>
                                        <p>August 10, 2021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-details-block-right-profile-inner">
                                <img
                                    src="../../images/item-details.png"
                                    alt="item-img"
                                ></img>
                                <div className="blog-details">
                                    <h3>6 Make Mobile Website Faster</h3>
                                    <div className="blog-details-text">
                                        <div className="blog-details-text-p">
                                            <p>
                                                Lorem ipsum dolor sit amer....
                                            </p>
                                        </div>
                                        <p>August 10, 2021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-details-block-right-profile-inner">
                                <img
                                    src="../../images/item-details.png"
                                    alt="item-img"
                                ></img>
                                <div className="blog-details">
                                    <h3>6 Make Mobile Website Faster</h3>
                                    <div className="blog-details-text">
                                        <div className="blog-details-text-p">
                                            <p>
                                                Lorem ipsum dolor sit amer....
                                            </p>
                                        </div>
                                        <p>August 10, 2021</p>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-details-block-right-profile-inner">
                                <img
                                    src="../../images/item-details.png"
                                    alt="item-img"
                                ></img>
                                <div className="blog-details">
                                    <h3>6 Make Mobile Website Faster</h3>
                                    <div className="blog-details-text">
                                        <div className="blog-details-text-p">
                                            <p>
                                                Lorem ipsum dolor sit amer....
                                            </p>
                                        </div>
                                        <p>August 10, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="popular-tag-block">
                            <h2>Popular Tag</h2>
                            <div className="popular-tag-block-list">
                                <ul>
                                    <li>
                                        <a href="#">Bitcoin</a>
                                    </li>
                                    <li>
                                        <a href="#">NFT</a>
                                    </li>
                                    <li>
                                        <a href="#">Bids</a>
                                    </li>
                                    <li>
                                        <a href="#">Digital</a>
                                    </li>
                                    <li>
                                        <a href="#">Arts</a>
                                    </li>
                                    <li>
                                        <a href="#">Maketplace</a>
                                    </li>
                                    <li>
                                        <a href="#">Token</a>
                                    </li>
                                    <li>
                                        <a href="#">Wallet</a>
                                    </li>
                                    <li>
                                        <a href="#">Crypto</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </CommonPageBlockPad>
    );
};

export default homepage;
