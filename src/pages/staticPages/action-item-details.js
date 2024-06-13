/** @format */

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
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CommonProductBLock } from "@/styles/pages/main.style";

import React, { useState } from "react";
const itemDetail = () => {
    const options = [
        { value: "chocolate", label: "Art" },
        { value: "strawberry", label: "Body type" },
        { value: "vanilla", label: "Face color" },
    ];
    const [show, setShow] = useState(false);
    var settings = {
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
      <CommonPageBlockPad className='dark-mode-body'>
        <Container>
          <div className='common-title-page'>
            <h1 className='text-left'>Item Details</h1>
          </div>
          <ItemMian>
            <div className='left-common-item'>
              <img src='../../images/item-img.png' alt='item-img'></img>
            </div>
            <div className='right-content-block'>
              <div className='profile-share-block'>
                <div className='profile-share-block-inner'>
                  <img src='../../images/item-details.png' alt='item-img'></img>
                  <div className='profile-share-title'>
                    <h4>Trending Arts</h4>
                  </div>
                </div>
                <div className='share-block-inner'>
                  <div className='share-block-inner-block'>
                    <Link href='{}'>
                      <svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M12.5547 20.7206C12.5547 20.7206 2.80469 15.4706 2.80469 9.28308C2.80469 7.94042 3.33806 6.65276 4.28746 5.70335C5.23686 4.75395 6.52453 4.22058 7.86719 4.22058C9.985 4.22058 11.7991 5.37464 12.5547 7.22058C13.3103 5.37464 15.1244 4.22058 17.2422 4.22058C18.5848 4.22058 19.8725 4.75395 20.8219 5.70335C21.7713 6.65276 22.3047 7.94042 22.3047 9.28308C22.3047 15.4706 12.5547 20.7206 12.5547 20.7206Z'
                          stroke='#191820'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                      <h4>68</h4>
                    </Link>
                  </div>
                  <div className='share-block-inner-block'>
                    <Link href='{}'>
                      <svg width='22' height='22' viewBox='0 0 22 22' fill='#191820' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M18.3878 17.382C18.3879 17.8134 18.2935 18.2396 18.1113 18.6307C17.9291 19.0217 17.6635 19.3682 17.3332 19.6456C17.0029 19.9231 16.6158 20.1249 16.1992 20.2369C15.7825 20.3488 15.3465 20.3682 14.9215 20.2937C14.4966 20.2192 14.0931 20.0526 13.7395 19.8055C13.3858 19.5585 13.0905 19.237 12.8743 18.8637C12.6581 18.4903 12.5263 18.0742 12.488 17.6445C12.4498 17.2148 12.506 16.7819 12.6529 16.3763L8.30139 13.5806C7.88579 13.9883 7.35906 14.2642 6.78728 14.3736C6.21549 14.483 5.62412 14.4212 5.08736 14.1958C4.55059 13.9705 4.09233 13.5916 3.77006 13.1068C3.4478 12.6219 3.27588 12.0527 3.27588 11.4706C3.27588 10.8884 3.4478 10.3192 3.77006 9.83438C4.09233 9.34955 4.55059 8.97068 5.08736 8.74531C5.62412 8.51994 6.21549 8.45809 6.78728 8.56754C7.35906 8.67698 7.88579 8.95284 8.30139 9.3605L12.6529 6.56898C12.4037 5.88427 12.4156 5.13176 12.6862 4.45523C12.9567 3.7787 13.4671 3.22559 14.1198 2.90159C14.7724 2.57759 15.5215 2.50542 16.224 2.69887C16.9265 2.89231 17.5331 3.33781 17.9279 3.95024C18.3227 4.56266 18.4779 5.29908 18.3641 6.01876C18.2502 6.73844 17.8751 7.39094 17.3106 7.85156C16.746 8.31219 16.0315 8.54865 15.3036 8.51576C14.5757 8.48287 13.8855 8.18294 13.3647 7.67327L9.01323 10.4689C9.24841 11.1188 9.24841 11.8306 9.01323 12.4804L13.3647 15.2761C13.7802 14.8695 14.3063 14.5944 14.8773 14.4853C15.4483 14.3762 16.0388 14.4379 16.5749 14.6626C17.1111 14.8874 17.569 15.2653 17.8914 15.749C18.2139 16.2327 18.3866 16.8007 18.3878 17.382Z'
                          fill='#191820'
                        />
                      </svg>

                      <h4>Share</h4>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='wicked-block-inner'>
                <div className='wicked-block-inner-title'>
                  <h2>Wicked Cranium #4449</h2>
                  <p>
                    A collection of 10,000 undead NFTs minted on the Ethereum blockchain. Each unique Deadfella is
                    randomly generated from a combination.
                  </p>
                </div>
                <div className='timing-block-current'>
                  <div className='time-line-block'>
                    <div className='time-line-block-inner'>
                      <h3>
                        <span>40</span>
                        <span className='dots-block'>:</span>
                        <span>12</span>
                        <span className='dots-block'>:</span>
                        <span>35</span>
                        <span className='dots-block'>:</span>
                        <span>44</span>
                      </h3>
                    </div>
                  </div>
                  <div className='current-bid-block'>
                    <h3>
                      <span>Current Bid</span>
                      <span>3.52 ETH (4.5 PLS)</span>
                    </h3>
                  </div>
                </div>
                <div className='tab-custom-block'>
                  <Tabs defaultActiveKey='collection' id='uncontrolled-tab-example' className='mb-3'>
                    <Tab eventKey='details' title='Details'>
                      <div className='details-block-main'>
                        <div className='create-author-block'>
                          <div className='create-author-block-profile'>
                            <h4>Current owner</h4>
                            <div className='create-author-block-title'>
                              <img src='../../images/item-details.png' alt='item-img'></img>
                              <h4>Surrogatess</h4>
                            </div>
                          </div>
                          <div className='create-author-block-profile'>
                            <h4>Creator</h4>
                            <div className='create-author-block-title'>
                              <img src='../../images/item-details.png' alt='item-img'></img>
                              <h4>Truman Wallaker</h4>
                            </div>
                          </div>
                        </div>
                        <div className='properties-main'>
                          <h4>Properties</h4>
                          <div className='properties-main-block'>
                            <ul>
                              <li>
                                <div className='properties-main-block-inner'>
                                  <svg
                                    width='13'
                                    height='13'
                                    viewBox='0 0 13 13'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                      d='M6.55178 11.063L1.64553 7.21924L0.551783 8.06299L6.55178 12.7192L12.5518 8.06299L11.458 7.21924L6.55178 11.063ZM6.55178 9.34424L11.458 5.53174L12.5518 4.68799L6.55178 0.0317383L0.551783 4.68799L1.64553 5.53174L6.55178 9.34424ZM6.55178 1.71924L10.3643 4.68799L6.55178 7.65674L2.73928 4.68799L6.55178 1.71924Z'
                                      fill='#191820'
                                    />
                                  </svg>
                                  <h5>Background: Blue</h5>
                                </div>
                              </li>
                              <li>
                                <div className='properties-main-block-inner'>
                                  <svg
                                    width='12'
                                    height='15'
                                    viewBox='0 0 12 15'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                      d='M9.94913 7.96924L7.79288 6.90674C8.63663 6.21924 9.19913 5.18799 9.19913 4.03174C9.19913 2.00049 7.54288 0.344238 5.54288 0.344238C3.51163 0.344238 1.85538 2.00049 1.85538 4.03174C1.85538 5.43799 2.69913 6.68799 3.85538 7.28174V9.46924C2.44913 9.15674 2.51163 9.15674 2.35538 9.15674C2.01163 9.15674 1.66788 9.31299 1.41788 9.56299L0.480375 10.5005L3.88663 13.9067C4.16788 14.188 4.57413 14.3442 4.98038 14.3442H9.19913C9.82413 14.3442 10.3866 13.8755 10.5116 13.2505L11.0429 10.0942C11.1679 9.21924 10.7304 8.37549 9.94913 7.96924ZM9.73038 9.87549L9.19913 13.0317H4.98038C4.91788 13.0317 4.85538 13.0005 4.82413 12.9692L2.35538 10.5005L5.19913 11.0942V4.03174C5.19913 3.84424 5.35538 3.68799 5.54288 3.68799C5.73038 3.68799 5.85538 3.84424 5.85538 4.03174V8.03174H7.04288L9.35538 9.18799C9.60538 9.31299 9.76163 9.59424 9.73038 9.87549ZM3.19913 4.03174C3.19913 2.71924 4.26163 1.68799 5.54288 1.68799C6.82413 1.68799 7.85538 2.71924 7.85538 4.03174C7.85538 4.65674 7.60538 5.21924 7.19913 5.65674V4.03174C7.19913 3.09424 6.44913 2.34424 5.54288 2.34424C4.60538 2.34424 3.85538 3.09424 3.85538 4.03174V5.65674C3.44913 5.21924 3.19913 4.65674 3.19913 4.03174Z'
                                      fill='#191820'
                                    />
                                  </svg>
                                  <h5>Mouth Grade: Fresh</h5>
                                </div>
                              </li>
                              <li>
                                <div className='properties-main-block-inner'>
                                  <svg
                                    width='14'
                                    height='14'
                                    viewBox='0 0 14 14'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                      d='M6.44021 3.34424H7.75271V4.68799H6.44021V3.34424ZM6.44021 6.03174H7.75271V10.0317H6.44021V6.03174ZM7.09646 0.0317383C3.40896 0.0317383 0.44021 3.00049 0.44021 6.68799C0.44021 10.3755 3.40896 13.3442 7.09646 13.3442C10.784 13.3442 13.7527 10.3755 13.7527 6.68799C13.7527 3.00049 10.784 0.0317383 7.09646 0.0317383ZM7.09646 12.0317C4.15896 12.0317 1.75271 9.62549 1.75271 6.68799C1.75271 3.75049 4.15896 1.34424 7.09646 1.34424C10.034 1.34424 12.4402 3.75049 12.4402 6.68799C12.4402 9.62549 10.034 12.0317 7.09646 12.0317Z'
                                      fill='#191820'
                                    />
                                  </svg>

                                  <h5>2400 x 2278 px (1.72MB)</h5>
                                </div>
                              </li>
                              <li>
                                <div className='properties-main-block-inner'>
                                  <svg
                                    width='12'
                                    height='15'
                                    viewBox='0 0 12 15'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                      d='M9.94913 7.96924L7.79288 6.90674C8.63663 6.21924 9.19913 5.18799 9.19913 4.03174C9.19913 2.00049 7.54288 0.344238 5.54288 0.344238C3.51163 0.344238 1.85538 2.00049 1.85538 4.03174C1.85538 5.43799 2.69913 6.68799 3.85538 7.28174V9.46924C2.44913 9.15674 2.51163 9.15674 2.35538 9.15674C2.01163 9.15674 1.66788 9.31299 1.41788 9.56299L0.480375 10.5005L3.88663 13.9067C4.16788 14.188 4.57413 14.3442 4.98038 14.3442H9.19913C9.82413 14.3442 10.3866 13.8755 10.5116 13.2505L11.0429 10.0942C11.1679 9.21924 10.7304 8.37549 9.94913 7.96924ZM9.73038 9.87549L9.19913 13.0317H4.98038C4.91788 13.0317 4.85538 13.0005 4.82413 12.9692L2.35538 10.5005L5.19913 11.0942V4.03174C5.19913 3.84424 5.35538 3.68799 5.54288 3.68799C5.73038 3.68799 5.85538 3.84424 5.85538 4.03174V8.03174H7.04288L9.35538 9.18799C9.60538 9.31299 9.76163 9.59424 9.73038 9.87549ZM3.19913 4.03174C3.19913 2.71924 4.26163 1.68799 5.54288 1.68799C6.82413 1.68799 7.85538 2.71924 7.85538 4.03174C7.85538 4.65674 7.60538 5.21924 7.19913 5.65674V4.03174C7.19913 3.09424 6.44913 2.34424 5.54288 2.34424C4.60538 2.34424 3.85538 3.09424 3.85538 4.03174V5.65674C3.44913 5.21924 3.19913 4.65674 3.19913 4.03174Z'
                                      fill='#191820'
                                    />
                                  </svg>
                                  <h5>Head: Bowlcut</h5>
                                </div>
                              </li>
                              <li>
                                <div className='properties-main-block-inner'>
                                  <svg
                                    width='12'
                                    height='15'
                                    viewBox='0 0 12 15'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                      d='M9.94913 7.96924L7.79288 6.90674C8.63663 6.21924 9.19913 5.18799 9.19913 4.03174C9.19913 2.00049 7.54288 0.344238 5.54288 0.344238C3.51163 0.344238 1.85538 2.00049 1.85538 4.03174C1.85538 5.43799 2.69913 6.68799 3.85538 7.28174V9.46924C2.44913 9.15674 2.51163 9.15674 2.35538 9.15674C2.01163 9.15674 1.66788 9.31299 1.41788 9.56299L0.480375 10.5005L3.88663 13.9067C4.16788 14.188 4.57413 14.3442 4.98038 14.3442H9.19913C9.82413 14.3442 10.3866 13.8755 10.5116 13.2505L11.0429 10.0942C11.1679 9.21924 10.7304 8.37549 9.94913 7.96924ZM9.73038 9.87549L9.19913 13.0317H4.98038C4.91788 13.0317 4.85538 13.0005 4.82413 12.9692L2.35538 10.5005L5.19913 11.0942V4.03174C5.19913 3.84424 5.35538 3.68799 5.54288 3.68799C5.73038 3.68799 5.85538 3.84424 5.85538 4.03174V8.03174H7.04288L9.35538 9.18799C9.60538 9.31299 9.76163 9.59424 9.73038 9.87549ZM3.19913 4.03174C3.19913 2.71924 4.26163 1.68799 5.54288 1.68799C6.82413 1.68799 7.85538 2.71924 7.85538 4.03174C7.85538 4.65674 7.60538 5.21924 7.19913 5.65674V4.03174C7.19913 3.09424 6.44913 2.34424 5.54288 2.34424C4.60538 2.34424 3.85538 3.09424 3.85538 4.03174V5.65674C3.44913 5.21924 3.19913 4.65674 3.19913 4.03174Z'
                                      fill='#191820'
                                    />
                                  </svg>
                                  <h5>Body: Red</h5>
                                </div>
                              </li>
                              <li>
                                <Button>See more</Button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey='bids' title='Bids'>
                      <div className='bids-block'>
                        <div className='bids-block-inner'>
                          <img src='../../images/round-img.png' alt='img'></img>
                          <div className='bids-block-title'>
                            <h4>
                              1.35 ETH <span>by</span> carlisle
                            </h4>
                            <p>3/26/2022, 7:28 AM</p>
                          </div>
                        </div>
                        <div className='bids-block-inner'>
                          <img src='../../images/round-img.png' alt='img'></img>
                          <div className='bids-block-title'>
                            <h4>
                              1.35 ETH <span>by</span> carlisle
                            </h4>
                            <p>3/26/2022, 7:28 AM</p>
                          </div>
                        </div>
                        <div className='bids-block-inner'>
                          <img src='../../images/round-img.png' alt='img'></img>
                          <div className='bids-block-title'>
                            <h4>
                              1.35 ETH <span>by</span> carlisle
                            </h4>
                            <p>3/26/2022, 7:28 AM</p>
                          </div>
                        </div>
                        <div className='bids-block-inner'>
                          <img src='../../images/round-img.png' alt='img'></img>
                          <div className='bids-block-title'>
                            <h4>
                              1.35 ETH <span>by</span> carlisle
                            </h4>
                            <p>3/26/2022, 7:28 AM</p>
                          </div>
                        </div>
                        <div className='bids-block-inner'>
                          <img src='../../images/round-img.png' alt='img'></img>
                          <div className='bids-block-title'>
                            <h4>
                              1.35 ETH <span>by</span> carlisle
                            </h4>
                            <p>3/26/2022, 7:28 AM</p>
                          </div>
                        </div>
                        <div className='bids-block-inner'>
                          <img src='../../images/round-img.png' alt='img'></img>
                          <div className='bids-block-title'>
                            <h4>
                              1.35 ETH <span>by</span> carlisle
                            </h4>
                            <p>3/26/2022, 7:28 AM</p>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey='history' title='History'>
                      <div className='history-block-main'>
                        <div className='history-block-main-inner'>
                          <div className='history-block-left'>
                            <img src='../../images/square-img.svg' alt='img'></img>
                            <div className='history-block-left-details'>
                              <h4>
                                Mason Woodward <span>place a bid</span>
                              </h4>
                              <p>8 hours ago</p>
                            </div>
                          </div>
                          <div className='history-block-right'>
                            <h4>4.89 ET</h4>
                            <p>= $12.245</p>
                          </div>
                        </div>
                        <div className='history-block-main-inner'>
                          <div className='history-block-left'>
                            <img src='../../images/square-img.svg' alt='img'></img>
                            <div className='history-block-left-details'>
                              <h4>
                                Mason Woodward <span>place a bid</span>
                              </h4>
                              <p>8 hours ago</p>
                            </div>
                          </div>
                          <div className='history-block-right'>
                            <h4>4.89 ET</h4>
                            <p>= $12.245</p>
                          </div>
                        </div>
                        <div className='history-block-main-inner'>
                          <div className='history-block-left'>
                            <img src='../../images/square-img.svg' alt='img'></img>
                            <div className='history-block-left-details'>
                              <h4>
                                Mason Woodward <span>place a bid</span>
                              </h4>
                              <p>8 hours ago</p>
                            </div>
                          </div>
                          <div className='history-block-right'>
                            <h4>4.89 ET</h4>
                            <p>= $12.245</p>
                          </div>
                        </div>
                        <div className='history-block-main-inner'>
                          <div className='history-block-left'>
                            <img src='../../images/square-img.svg' alt='img'></img>
                            <div className='history-block-left-details'>
                              <h4>
                                Mason Woodward <span>place a bid</span>
                              </h4>
                              <p>8 hours ago</p>
                            </div>
                          </div>
                          <div className='history-block-right'>
                            <h4>4.89 ET</h4>
                            <p>= $12.245</p>
                          </div>
                        </div>
                        <div className='history-block-main-inner'>
                          <div className='history-block-left'>
                            <img src='../../images/square-img.svg' alt='img'></img>
                            <div className='history-block-left-details'>
                              <h4>
                                Mason Woodward <span>place a bid</span>
                              </h4>
                              <p>8 hours ago</p>
                            </div>
                          </div>
                          <div className='history-block-right'>
                            <h4>4.89 ET</h4>
                            <p>= $12.245</p>
                          </div>
                        </div>
                        <div className='history-block-main-inner'>
                          <div className='history-block-left'>
                            <img src='../../images/square-img.svg' alt='img'></img>
                            <div className='history-block-left-details'>
                              <h4>
                                Mason Woodward <span>place a bid</span>
                              </h4>
                              <p>8 hours ago</p>
                            </div>
                          </div>
                          <div className='history-block-right'>
                            <h4>4.89 ET</h4>
                            <p>= $12.245</p>
                          </div>
                        </div>
                        <div className='history-block-main-inner'>
                          <div className='history-block-left'>
                            <img src='../../images/square-img.svg' alt='img'></img>
                            <div className='history-block-left-details'>
                              <h4>
                                Mason Woodward <span>place a bid</span>
                              </h4>
                              <p>8 hours ago</p>
                            </div>
                          </div>
                          <div className='history-block-right'>
                            <h4>4.89 ET</h4>
                            <p>= $12.245</p>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab eventKey='offers' title='Offers'>
                      <div className='offer-table-block'>
                        <thead>
                          <tr>
                            <th>Price</th>
                            <th>USD Price</th>
                            <th>Quantity</th>
                            <th>Floor Difference</th>
                            <th>Expiration</th>
                            <th>From</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>0.2901 WETH</td>
                            <td>$470.66</td>
                            <td>1</td>
                            <td>6% below</td>
                            <td>in 19 seconds</td>
                            <td>
                              <Link href='{}'>Update</Link>
                            </td>
                          </tr>
                          <tr>
                            <td>0.2901 WETH</td>
                            <td>$470.66</td>
                            <td>1</td>
                            <td>6% below</td>
                            <td>in 19 seconds</td>
                            <td>
                              <Link href='{}'>Update</Link>
                            </td>
                          </tr>
                          <tr>
                            <td>0.2901 WETH</td>
                            <td>$470.66</td>
                            <td>1</td>
                            <td>6% below</td>
                            <td>in 19 seconds</td>
                            <td>
                              <Link href='{}'>Update</Link>
                            </td>
                          </tr>
                          <tr>
                            <td>0.2901 WETH</td>
                            <td>$470.66</td>
                            <td>1</td>
                            <td>6% below</td>
                            <td>in 19 seconds</td>
                            <td>
                              <Link href='{}'>Update</Link>
                            </td>
                          </tr>
                          <tr>
                            <td>0.2901 WETH</td>
                            <td>$470.66</td>
                            <td>1</td>
                            <td>6% below</td>
                            <td>in 19 seconds</td>
                            <td>
                              <Link href='{}'>Update</Link>
                            </td>
                          </tr>
                          <tr>
                            <td>0.2901 WETH</td>
                            <td>$470.66</td>
                            <td>1</td>
                            <td>6% below</td>
                            <td>in 19 seconds</td>
                            <td>
                              <Link href='{}'>Update</Link>
                            </td>
                          </tr>
                          <tr>
                            <td>0.2901 WETH</td>
                            <td>$470.66</td>
                            <td>1</td>
                            <td>6% below</td>
                            <td>in 19 seconds</td>
                            <td>
                              <Link href='{}'>Update</Link>
                            </td>
                          </tr>
                          <tr>
                            <td>0.2901 WETH</td>
                            <td>$470.66</td>
                            <td>1</td>
                            <td>6% below</td>
                            <td>in 19 seconds</td>
                            <td>
                              <Link href='{}'>Update</Link>
                            </td>
                          </tr>
                        </tbody>
                      </div>
                    </Tab>
                  </Tabs>
                  <div className='button-block-tabs'>
                    <div className='button-block-tabs-inner'>
                      <Button>Make Offer</Button>
                    </div>
                    <div className='button-block-tabs-inner'>
                      <Button className='no-border'>Save for later</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ItemMian>
          <div className='slider-section'>
            <div className='common-title-page'>
              <h2 className='text-left'>More from this collection</h2>
            </div>
            <div className='slider-common-block'>
              <Slider {...settings}>
                <div>
                  <CommonProductBLock className='explore-block-product full-width-block'>
                    <div className='common-product-block'>
                      <div className='common-product-block-inner'>
                        <div className='common-product-block-inner-width'>
                          <div className='top-block-product'>
                            <h4>Sweet Baby #1</h4>
                            <Link href='{}'>
                              <svg
                                width='16'
                                height='16'
                                viewBox='0 0 16 16'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z'
                                  fill='#B9B8BB'
                                />
                              </svg>
                            </Link>
                          </div>
                          <div className='product-details-profile full-width'>
                            <div className='product-profile'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>Creator</p>
                                <h5>Hakunamatata</h5>
                              </div>
                            </div>
                          </div>
                          <div className='product-img-time'>
                            <img src={'../../images/product-img-block.png'} alt='product-img'></img>
                            {/* <p>13h : 28m : 36s</p> */}
                          </div>
                          <div className='product-details-profile full-width'>
                            <div className='product-profile'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>Owner</p>
                                <h5>Hakunamatata</h5>
                              </div>
                            </div>
                          </div>
                          <div className='product-details-profile'>
                            <div className='product-profile'>
                              <img src={'../../images/ethe-icon-blue.svg'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>ETH</p>
                                <h5>
                                  <span>0.0041</span>
                                </h5>
                              </div>
                            </div>
                            <div className='btn-product'>
                              <button>
                                <span>Purchase</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CommonProductBLock>
                </div>
                <div>
                  <CommonProductBLock className='explore-block-product full-width-block'>
                    <div className='common-product-block'>
                      <div className='common-product-block-inner'>
                        <div className='common-product-block-inner-width'>
                          <div className='top-block-product'>
                            <h4>Sweet Baby #1</h4>
                            <Link href='{}'>
                              <svg
                                width='16'
                                height='16'
                                viewBox='0 0 16 16'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z'
                                  fill='#B9B8BB'
                                />
                              </svg>
                            </Link>
                          </div>
                          <div className='product-details-profile full-width'>
                            <div className='product-profile'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>Creator</p>
                                <h5>Hakunamatata</h5>
                              </div>
                            </div>
                          </div>
                          <div className='product-img-time'>
                            <img src={'../../images/product-img-block.png'} alt='product-img'></img>
                            {/* <p>13h : 28m : 36s</p> */}
                          </div>
                          <div className='product-details-profile full-width'>
                            <div className='product-profile'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>Owner</p>
                                <h5>Hakunamatata</h5>
                              </div>
                            </div>
                          </div>
                          <div className='product-details-profile'>
                            <div className='product-profile'>
                              <img src={'../../images/ethe-icon-blue.svg'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>ETH</p>
                                <h5>
                                  <span>0.0041</span>
                                </h5>
                              </div>
                            </div>
                            <div className='btn-product'>
                              <button>
                                <span>Purchase</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CommonProductBLock>
                </div>
                <div>
                  <CommonProductBLock className='explore-block-product full-width-block'>
                    <div className='common-product-block'>
                      <div className='common-product-block-inner'>
                        <div className='common-product-block-inner-width'>
                          <div className='top-block-product'>
                            <h4>Sweet Baby #1</h4>
                            <Link href='{}'>
                              <svg
                                width='16'
                                height='16'
                                viewBox='0 0 16 16'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z'
                                  fill='#B9B8BB'
                                />
                              </svg>
                            </Link>
                          </div>
                          <div className='product-details-profile full-width'>
                            <div className='product-profile'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>Creator</p>
                                <h5>Hakunamatata</h5>
                              </div>
                            </div>
                          </div>
                          <div className='product-img-time'>
                            <img src={'../../images/product-img-block.png'} alt='product-img'></img>
                            {/* <p>13h : 28m : 36s</p> */}
                          </div>
                          <div className='product-details-profile full-width'>
                            <div className='product-profile'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>Owner</p>
                                <h5>Hakunamatata</h5>
                              </div>
                            </div>
                          </div>
                          <div className='product-details-profile'>
                            <div className='product-profile'>
                              <img src={'../../images/ethe-icon-blue.svg'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>ETH</p>
                                <h5>
                                  <span>0.0041</span>
                                </h5>
                              </div>
                            </div>
                            <div className='btn-product'>
                              <button>
                                <span>Purchase</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CommonProductBLock>
                </div>
                <div>
                  <CommonProductBLock className='explore-block-product full-width-block'>
                    <div className='common-product-block'>
                      <div className='common-product-block-inner'>
                        <div className='common-product-block-inner-width'>
                          <div className='top-block-product'>
                            <h4>Sweet Baby #1</h4>
                            <Link href='{}'>
                              <svg
                                width='16'
                                height='16'
                                viewBox='0 0 16 16'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z'
                                  fill='#B9B8BB'
                                />
                              </svg>
                            </Link>
                          </div>
                          <div className='product-details-profile full-width'>
                            <div className='product-profile'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>Creator</p>
                                <h5>Hakunamatata</h5>
                              </div>
                            </div>
                          </div>
                          <div className='product-img-time'>
                            <img src={'../../images/product-img-block.png'} alt='product-img'></img>
                            {/* <p>13h : 28m : 36s</p> */}
                          </div>
                          <div className='product-details-profile full-width'>
                            <div className='product-profile'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>Owner</p>
                                <h5>Hakunamatata</h5>
                              </div>
                            </div>
                          </div>
                          <div className='product-details-profile'>
                            <div className='product-profile'>
                              <img src={'../../images/ethe-icon-blue.svg'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>ETH</p>
                                <h5>
                                  <span>0.0041</span>
                                </h5>
                              </div>
                            </div>
                            <div className='btn-product'>
                              <button>
                                <span>Purchase</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CommonProductBLock>
                </div>
                <div>
                  <CommonProductBLock className='explore-block-product full-width-block'>
                    <div className='common-product-block'>
                      <div className='common-product-block-inner'>
                        <div className='common-product-block-inner-width'>
                          <div className='top-block-product'>
                            <h4>Sweet Baby #1</h4>
                            <Link href='{}'>
                              <svg
                                width='16'
                                height='16'
                                viewBox='0 0 16 16'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z'
                                  fill='#B9B8BB'
                                />
                              </svg>
                            </Link>
                          </div>
                          <div className='product-details-profile full-width'>
                            <div className='product-profile'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>Creator</p>
                                <h5>Hakunamatata</h5>
                              </div>
                            </div>
                          </div>
                          <div className='product-img-time'>
                            <img src={'../../images/product-img-block.png'} alt='product-img'></img>
                            {/* <p>13h : 28m : 36s</p> */}
                          </div>
                          <div className='product-details-profile full-width'>
                            <div className='product-profile'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>Owner</p>
                                <h5>Hakunamatata</h5>
                              </div>
                            </div>
                          </div>
                          <div className='product-details-profile'>
                            <div className='product-profile'>
                              <img src={'../../images/ethe-icon-blue.svg'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>ETH</p>
                                <h5>
                                  <span>0.0041</span>
                                </h5>
                              </div>
                            </div>
                            <div className='btn-product'>
                              <button>
                                <span>Purchase</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CommonProductBLock>
                </div>
                <div>
                  <CommonProductBLock className='explore-block-product full-width-block'>
                    <div className='common-product-block'>
                      <div className='common-product-block-inner'>
                        <div className='common-product-block-inner-width'>
                          <div className='top-block-product'>
                            <h4>Sweet Baby #1</h4>
                            <Link href='{}'>
                              <svg
                                width='16'
                                height='16'
                                viewBox='0 0 16 16'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z'
                                  fill='#B9B8BB'
                                />
                              </svg>
                            </Link>
                          </div>
                          <div className='product-details-profile full-width'>
                            <div className='product-profile'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>Creator</p>
                                <h5>Hakunamatata</h5>
                              </div>
                            </div>
                          </div>
                          <div className='product-img-time'>
                            <img src={'../../images/product-img-block.png'} alt='product-img'></img>
                            {/* <p>13h : 28m : 36s</p> */}
                          </div>
                          <div className='product-details-profile full-width'>
                            <div className='product-profile'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>Owner</p>
                                <h5>Hakunamatata</h5>
                              </div>
                            </div>
                          </div>
                          <div className='product-details-profile'>
                            <div className='product-profile'>
                              <img src={'../../images/ethe-icon-blue.svg'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>ETH</p>
                                <h5>
                                  <span>0.0041</span>
                                </h5>
                              </div>
                            </div>
                            <div className='btn-product'>
                              <button>
                                <span>Purchase</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CommonProductBLock>
                </div>
              </Slider>
            </div>
          </div>
        </Container>
      </CommonPageBlockPad>
    );
};

export default itemDetail;
