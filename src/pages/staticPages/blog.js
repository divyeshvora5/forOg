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
                <div className="blog-main">
                    <div className="common-title-page text-center-space">
                        <h2>Blog</h2>
                    </div>
                    <div className="blog-main-inner">
                        <div className="blog-main-inner-block">
                            <div className="blog-main-block">
                                <img
                                    src="../../images/blog-img.png"
                                    className="main-blog-img"
                                    alt="blog-img"
                                ></img>
                                <div className="title-blog-inner">
                                    <h3>What is an NFT?</h3>
                                    <button>Music NFT’s</button>
                                </div>
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of
                                    letters...
                                </p>
                                <div className="blog-last-block">
                                    <div className="blog-last-block-inner">
                                        <img
                                            src="../../images/profile-blog.svg"
                                            alt="blog-img"
                                        ></img>
                                        <h5> By SalvadorDali</h5>
                                    </div>
                                    <div className="blog-last-block-inner">
                                        <img
                                            src="../../images/clock-blog.svg"
                                            alt="blog-img"
                                        ></img>
                                        <h5>Feb 19, 2021</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-main-inner-block">
                            <div className="blog-main-block">
                                <img
                                    src="../../images/blog-img.png"
                                    className="main-blog-img"
                                    alt="blog-img"
                                ></img>
                                <div className="title-blog-inner">
                                    <h3>What is an NFT?</h3>
                                    <button>Music NFT’s</button>
                                </div>
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of
                                    letters...
                                </p>
                                <div className="blog-last-block">
                                    <div className="blog-last-block-inner">
                                        <img
                                            src="../../images/profile-blog.svg"
                                            alt="blog-img"
                                        ></img>
                                        <h5> By SalvadorDali</h5>
                                    </div>
                                    <div className="blog-last-block-inner">
                                        <img
                                            src="../../images/clock-blog.svg"
                                            alt="blog-img"
                                        ></img>
                                        <h5>Feb 19, 2021</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-main-inner-block">
                            <div className="blog-main-block">
                                <img
                                    src="../../images/blog-img.png"
                                    className="main-blog-img"
                                    alt="blog-img"
                                ></img>
                                <div className="title-blog-inner">
                                    <h3>What is an NFT?</h3>
                                    <button>Music NFT’s</button>
                                </div>
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of
                                    letters...
                                </p>
                                <div className="blog-last-block">
                                    <div className="blog-last-block-inner">
                                        <img
                                            src="../../images/profile-blog.svg"
                                            alt="blog-img"
                                        ></img>
                                        <h5> By SalvadorDali</h5>
                                    </div>
                                    <div className="blog-last-block-inner">
                                        <img
                                            src="../../images/clock-blog.svg"
                                            alt="blog-img"
                                        ></img>
                                        <h5>Feb 19, 2021</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-main-inner-block">
                            <div className="blog-main-block">
                                <img
                                    src="../../images/blog-img.png"
                                    className="main-blog-img"
                                    alt="blog-img"
                                ></img>
                                <div className="title-blog-inner">
                                    <h3>What is an NFT?</h3>
                                    <button>Music NFT’s</button>
                                </div>
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of
                                    letters...
                                </p>
                                <div className="blog-last-block">
                                    <div className="blog-last-block-inner">
                                        <img
                                            src="../../images/profile-blog.svg"
                                            alt="blog-img"
                                        ></img>
                                        <h5> By SalvadorDali</h5>
                                    </div>
                                    <div className="blog-last-block-inner">
                                        <img
                                            src="../../images/clock-blog.svg"
                                            alt="blog-img"
                                        ></img>
                                        <h5>Feb 19, 2021</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-main-inner-block">
                            <div className="blog-main-block">
                                <img
                                    src="../../images/blog-img.png"
                                    className="main-blog-img"
                                    alt="blog-img"
                                ></img>
                                <div className="title-blog-inner">
                                    <h3>What is an NFT?</h3>
                                    <button>Music NFT’s</button>
                                </div>
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of
                                    letters...
                                </p>
                                <div className="blog-last-block">
                                    <div className="blog-last-block-inner">
                                        <img
                                            src="../../images/profile-blog.svg"
                                            alt="blog-img"
                                        ></img>
                                        <h5> By SalvadorDali</h5>
                                    </div>
                                    <div className="blog-last-block-inner">
                                        <img
                                            src="../../images/clock-blog.svg"
                                            alt="blog-img"
                                        ></img>
                                        <h5>Feb 19, 2021</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-main-inner-block">
                            <div className="blog-main-block">
                                <img
                                    src="../../images/blog-img.png"
                                    className="main-blog-img"
                                    alt="blog-img"
                                ></img>
                                <div className="title-blog-inner">
                                    <h3>What is an NFT?</h3>
                                    <button>Music NFT’s</button>
                                </div>
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of
                                    letters...
                                </p>
                                <div className="blog-last-block">
                                    <div className="blog-last-block-inner">
                                        <img
                                            src="../../images/profile-blog.svg"
                                            alt="blog-img"
                                        ></img>
                                        <h5> By SalvadorDali</h5>
                                    </div>
                                    <div className="blog-last-block-inner">
                                        <img
                                            src="../../images/clock-blog.svg"
                                            alt="blog-img"
                                        ></img>
                                        <h5>Feb 19, 2021</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-main-inner-block">
                            <div className="blog-main-block">
                                <img
                                    src="../../images/blog-img.png"
                                    className="main-blog-img"
                                    alt="blog-img"
                                ></img>
                                <div className="title-blog-inner">
                                    <h3>What is an NFT?</h3>
                                    <button>Music NFT’s</button>
                                </div>
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of
                                    letters...
                                </p>
                                <div className="blog-last-block">
                                    <div className="blog-last-block-inner">
                                        <img
                                            src="../../images/profile-blog.svg"
                                            alt="blog-img"
                                        ></img>
                                        <h5> By SalvadorDali</h5>
                                    </div>
                                    <div className="blog-last-block-inner">
                                        <img
                                            src="../../images/clock-blog.svg"
                                            alt="blog-img"
                                        ></img>
                                        <h5>Feb 19, 2021</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-main-inner-block">
                            <div className="blog-main-block">
                                <img
                                    src="../../images/blog-img.png"
                                    className="main-blog-img"
                                    alt="blog-img"
                                ></img>
                                <div className="title-blog-inner">
                                    <h3>What is an NFT?</h3>
                                    <button>Music NFT’s</button>
                                </div>
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of
                                    letters...
                                </p>
                                <div className="blog-last-block">
                                    <div className="blog-last-block-inner">
                                        <img
                                            src="../../images/profile-blog.svg"
                                            alt="blog-img"
                                        ></img>
                                        <h5> By SalvadorDali</h5>
                                    </div>
                                    <div className="blog-last-block-inner">
                                        <img
                                            src="../../images/clock-blog.svg"
                                            alt="blog-img"
                                        ></img>
                                        <h5>Feb 19, 2021</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </CommonPageBlockPad>
    );
};

export default homepage;
