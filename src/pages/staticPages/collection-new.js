/** @format */

import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { CommonProductBLock, Button } from "@/styles/pages/main.style";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import React, { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Select from "react-select";
import Pagination from "react-bootstrap/Pagination";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";

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
    const [tabIndex, setTabIndex] = useState(0);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function ScreenreaderLabelExample() {
      const now = 60;
      return <ProgressBar now={now} label={`${now}%`}  />;
    }

    return (
      <CommonPageBlockPad className='no-container-padding public-profile-page'>
        <div className='graphics-inner-shape'>
          {/* <img
                    src={"../../images/graphics-block-inner.png"}
                    alt="graphics-img"
                ></img> */}
        </div>
        <div className='graphics-inner-shape-two'>
          {/* <img
                    src={"../../images/graphics-block-inner-2.png"}
                    alt="graphics-img"
                ></img> */}
        </div>
        <div className='graphics-inner-shape-three'>
          {/* <img
                    src={"../../images/graphics-block-inner-3.png"}
                    alt="graphics-img"
                ></img> */}
        </div>
        <div className='public-progile-main'>
          <div className='top-banner-img'>
            <img src={'../../images/banner-profile-public.png'} alt='profile-img'></img>
          </div>
          <div className='profile-main-block'>
            <Container>
              <div className='profile-inner-flex'>
                <div className='profile-inner-flex-left'>
                  <div className='profile-inner-flex-left-inner'>
                    <div className='profile-inner-flex-left-img'>
                      <img src={'../../images/item-details.png'} alt='item-img'></img>
                    </div>
                    <div className='text-name-block'>
                      <div className='text-name-block-name'>
                        <h2>Big Joe</h2>
                        <p className='text-discription-check'>
                          <svg
                            width='20'
                            height='21'
                            viewBox='0 0 20 21'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M17.6453 8.53281C17.3508 8.225 17.0461 7.90781 16.9312 7.62891C16.825 7.37344 16.8187 6.95 16.8125 6.53984C16.8008 5.77734 16.7883 4.91328 16.1875 4.3125C15.5867 3.71172 14.7227 3.69922 13.9602 3.6875C13.55 3.68125 13.1266 3.675 12.8711 3.56875C12.593 3.45391 12.275 3.14922 11.9672 2.85469C11.4281 2.33672 10.8156 1.75 10 1.75C9.18437 1.75 8.57266 2.33672 8.03281 2.85469C7.725 3.14922 7.40781 3.45391 7.12891 3.56875C6.875 3.675 6.45 3.68125 6.03984 3.6875C5.27734 3.69922 4.41328 3.71172 3.8125 4.3125C3.21172 4.91328 3.20312 5.77734 3.1875 6.53984C3.18125 6.95 3.175 7.37344 3.06875 7.62891C2.95391 7.90703 2.64922 8.225 2.35469 8.53281C1.83672 9.07188 1.25 9.68437 1.25 10.5C1.25 11.3156 1.83672 11.9273 2.35469 12.4672C2.64922 12.775 2.95391 13.0922 3.06875 13.3711C3.175 13.6266 3.18125 14.05 3.1875 14.4602C3.19922 15.2227 3.21172 16.0867 3.8125 16.6875C4.41328 17.2883 5.27734 17.3008 6.03984 17.3125C6.45 17.3187 6.87344 17.325 7.12891 17.4312C7.40703 17.5461 7.725 17.8508 8.03281 18.1453C8.57188 18.6633 9.18437 19.25 10 19.25C10.8156 19.25 11.4273 18.6633 11.9672 18.1453C12.275 17.8508 12.5922 17.5461 12.8711 17.4312C13.1266 17.325 13.55 17.3187 13.9602 17.3125C14.7227 17.3008 15.5867 17.2883 16.1875 16.6875C16.7883 16.0867 16.8008 15.2227 16.8125 14.4602C16.8187 14.05 16.825 13.6266 16.9312 13.3711C17.0461 13.093 17.3508 12.775 17.6453 12.4672C18.1633 11.9281 18.75 11.3156 18.75 10.5C18.75 9.68437 18.1633 9.07266 17.6453 8.53281ZM13.5672 9.06719L9.19219 13.4422C9.13414 13.5003 9.06521 13.5464 8.98934 13.5779C8.91346 13.6093 8.83213 13.6255 8.75 13.6255C8.66787 13.6255 8.58654 13.6093 8.51066 13.5779C8.43479 13.5464 8.36586 13.5003 8.30781 13.4422L6.43281 11.5672C6.31554 11.4499 6.24965 11.2909 6.24965 11.125C6.24965 10.9591 6.31554 10.8001 6.43281 10.6828C6.55009 10.5655 6.70915 10.4997 6.875 10.4997C7.04085 10.4997 7.19991 10.5655 7.31719 10.6828L8.75 12.1164L12.6828 8.18281C12.7409 8.12474 12.8098 8.07868 12.8857 8.04725C12.9616 8.01583 13.0429 7.99965 13.125 7.99965C13.2071 7.99965 13.2884 8.01583 13.3643 8.04725C13.4402 8.07868 13.5091 8.12474 13.5672 8.18281C13.6253 8.24088 13.6713 8.30982 13.7027 8.38569C13.7342 8.46156 13.7503 8.54288 13.7503 8.625C13.7503 8.70712 13.7342 8.78844 13.7027 8.86431C13.6713 8.94018 13.6253 9.00912 13.5672 9.06719Z'
                              fill='#FB4EF1'></path>
                          </svg>
                        </p>
                      </div>
                      <div className='link-text-block'>
                        <Link href='#'>
                          <span>0x296.....e587</span>
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M4.16667 17.5C3.70833 17.5 3.31611 17.3369 2.99 17.0108C2.66389 16.6847 2.50056 16.2922 2.5 15.8333V4.16667C2.5 3.70833 2.66333 3.31611 2.99 2.99C3.31667 2.66389 3.70889 2.50056 4.16667 2.5H10V4.16667H4.16667V15.8333H15.8333V10H17.5V15.8333C17.5 16.2917 17.3369 16.6842 17.0108 17.0108C16.6847 17.3375 16.2922 17.5006 15.8333 17.5H4.16667ZM8.08333 13.0833L6.91667 11.9167L14.6667 4.16667H11.6667V2.5H17.5V8.33333H15.8333V5.33333L8.08333 13.0833Z'
                              fill='#FB4EF1'
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className='social-link'>
                      <ul>
                        <li>
                          <Link href='#'>
                            <svg
                              width='20'
                              height='20'
                              viewBox='0 0 20 20'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M14.0167 17.3067L3.12755 3.30667C3.07016 3.23276 3.03465 3.14423 3.02508 3.05114C3.01551 2.95806 3.03225 2.86415 3.07341 2.78011C3.11456 2.69607 3.17847 2.62526 3.25787 2.57575C3.33727 2.52623 3.42897 2.49998 3.52255 2.5H5.58922C5.6653 2.50011 5.74035 2.51759 5.80865 2.55109C5.87696 2.58459 5.93672 2.63324 5.98338 2.69333L16.8725 16.6933C16.9299 16.7672 16.9654 16.8558 16.975 16.9489C16.9846 17.0419 16.9678 17.1358 16.9267 17.2199C16.8855 17.3039 16.8216 17.3747 16.7422 17.4243C16.6628 17.4738 16.5711 17.5 16.4775 17.5H14.4109C14.3348 17.4999 14.2598 17.4824 14.1914 17.4489C14.1231 17.4154 14.0634 17.3668 14.0167 17.3067Z'
                                stroke='black'
                                stroke-width='1.25'
                              />
                              <path
                                d='M16.6663 2.5L3.33301 17.5'
                                stroke='black'
                                stroke-width='1.25'
                                stroke-linecap='round'
                              />
                            </svg>
                            <span>Twitter</span>
                          </Link>
                        </li>
                        <li>
                          <Link href='#'>
                            <svg
                              width='20'
                              height='20'
                              viewBox='0 0 20 20'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M14.0167 17.3067L3.12755 3.30667C3.07016 3.23276 3.03465 3.14423 3.02508 3.05114C3.01551 2.95806 3.03225 2.86415 3.07341 2.78011C3.11456 2.69607 3.17847 2.62526 3.25787 2.57575C3.33727 2.52623 3.42897 2.49998 3.52255 2.5H5.58922C5.6653 2.50011 5.74035 2.51759 5.80865 2.55109C5.87696 2.58459 5.93672 2.63324 5.98338 2.69333L16.8725 16.6933C16.9299 16.7672 16.9654 16.8558 16.975 16.9489C16.9846 17.0419 16.9678 17.1358 16.9267 17.2199C16.8855 17.3039 16.8216 17.3747 16.7422 17.4243C16.6628 17.4738 16.5711 17.5 16.4775 17.5H14.4109C14.3348 17.4999 14.2598 17.4824 14.1914 17.4489C14.1231 17.4154 14.0634 17.3668 14.0167 17.3067Z'
                                stroke='black'
                                stroke-width='1.25'
                              />
                              <path
                                d='M16.6663 2.5L3.33301 17.5'
                                stroke='black'
                                stroke-width='1.25'
                                stroke-linecap='round'
                              />
                            </svg>
                            <span>Website</span>
                          </Link>
                        </li>
                        <li>
                          <Link href='#'>
                            <svg
                              width='20'
                              height='20'
                              viewBox='0 0 20 20'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M10.0003 1.66602C5.40033 1.66602 1.66699 5.39935 1.66699 9.99935C1.66699 14.5993 5.40033 18.3327 10.0003 18.3327C14.6003 18.3327 18.3337 14.5993 18.3337 9.99935C18.3337 5.39935 14.6003 1.66602 10.0003 1.66602ZM13.867 7.33268C13.742 8.64935 13.2003 11.8493 12.9253 13.3243C12.8087 13.9493 12.5753 14.1577 12.3587 14.1827C11.8753 14.2243 11.5087 13.866 11.042 13.5577C10.3087 13.0743 9.89199 12.7743 9.18366 12.3077C8.35866 11.766 8.89199 11.466 9.36699 10.9827C9.49199 10.8577 11.6253 8.91602 11.667 8.74102C11.6728 8.71451 11.672 8.68699 11.6647 8.66085C11.6575 8.63471 11.644 8.61074 11.6253 8.59102C11.5753 8.54935 11.5087 8.56602 11.4503 8.57435C11.3753 8.59102 10.2087 9.36602 7.93366 10.8993C7.60033 11.1243 7.30032 11.241 7.03366 11.2327C6.73366 11.2243 6.16699 11.066 5.74199 10.9243C5.21699 10.7577 4.80866 10.666 4.84199 10.3743C4.85866 10.2243 5.06699 10.0743 5.45866 9.91601C7.89199 8.85768 9.50866 8.15768 10.317 7.82435C12.6337 6.85768 13.1087 6.69102 13.4253 6.69102C13.492 6.69102 13.6503 6.70768 13.7503 6.79102C13.8337 6.85768 13.8587 6.94935 13.867 7.01602C13.8587 7.06602 13.8753 7.21602 13.867 7.33268Z'
                                fill='black'
                              />
                            </svg>

                            <span>Telegram</span>
                          </Link>
                        </li>
                        <li>
                          <Link href='#'>
                            <svg
                              width='20'
                              height='20'
                              viewBox='0 0 20 20'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M16.0588 4.44236C14.9504 3.92569 13.7504 3.55069 12.5004 3.33402C12.4895 3.33367 12.4786 3.33573 12.4685 3.34005C12.4584 3.34437 12.4494 3.35084 12.4421 3.35902C12.2921 3.63402 12.1171 3.99236 12.0004 4.26736C10.6746 4.06736 9.32626 4.06736 8.00042 4.26736C7.88376 3.98402 7.70876 3.63402 7.55042 3.35902C7.54209 3.34236 7.51709 3.33402 7.49209 3.33402C6.24209 3.55069 5.05042 3.92569 3.93376 4.44236C3.92542 4.44236 3.91709 4.45069 3.90876 4.45902C1.64209 7.85069 1.01709 11.1507 1.32542 14.4174C1.32542 14.434 1.33376 14.4507 1.35042 14.459C2.85042 15.559 4.29209 16.2257 5.71709 16.6674C5.74209 16.6757 5.76709 16.6674 5.77542 16.6507C6.10876 16.1924 6.40876 15.709 6.66709 15.2007C6.68376 15.1674 6.66709 15.134 6.63376 15.1257C6.15876 14.9424 5.70876 14.7257 5.26709 14.4757C5.23376 14.459 5.23376 14.409 5.25876 14.384C5.35042 14.3174 5.44209 14.2424 5.53376 14.1757C5.55042 14.159 5.57542 14.159 5.59209 14.1674C8.45876 15.4757 11.5504 15.4757 14.3838 14.1674C14.4004 14.159 14.4254 14.159 14.4421 14.1757C14.5338 14.2507 14.6254 14.3174 14.7171 14.3924C14.7504 14.4174 14.7504 14.4674 14.7088 14.484C14.2754 14.7424 13.8171 14.9507 13.3421 15.134C13.3088 15.1424 13.3004 15.184 13.3088 15.209C13.5754 15.7174 13.8754 16.2007 14.2004 16.659C14.2254 16.6674 14.2504 16.6757 14.2754 16.6674C15.7088 16.2257 17.1504 15.559 18.6504 14.459C18.6671 14.4507 18.6754 14.434 18.6754 14.4174C19.0421 10.6424 18.0671 7.36736 16.0921 4.45902C16.0838 4.45069 16.0754 4.44236 16.0588 4.44236ZM7.10042 12.4257C6.24209 12.4257 5.52542 11.634 5.52542 10.659C5.52542 9.68402 6.22542 8.89236 7.10042 8.89236C7.98376 8.89236 8.68376 9.69236 8.67542 10.659C8.67542 11.634 7.97542 12.4257 7.10042 12.4257ZM12.9088 12.4257C12.0504 12.4257 11.3338 11.634 11.3338 10.659C11.3338 9.68402 12.0338 8.89236 12.9088 8.89236C13.7921 8.89236 14.4921 9.69236 14.4838 10.659C14.4838 11.634 13.7921 12.4257 12.9088 12.4257Z'
                                fill='black'
                              />
                            </svg>

                            <span>Discord</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='nft-block-main'>
                    <p>
                      <span>Created by</span>
                      <span>NFTs</span>
                    </p>
                    <p>
                      <span> Royalties</span>
                      <span className='bg-highlight'>5%</span>
                    </p>
                  </div>
                  <div className='block-text-last disc-collection-text'>
                    <p>
                      9,999 Captainz, with their pirate crewz, explore the Broken Seas in search of the legendary
                      treasure known as “<span>BigBoss</span>”. Join them in their quests for glory, fortune, love, and
                      of course… memes.
                    </p>
                  </div>
                </div>
                <div className='profile-inner-flex-right'>
                  <div className='profile-inner-flex-right-inner'>
                    <div className='profile-inner-flex-right-inner-block flex-align-center'>
                      <div className='follow-left'>
                        <h3>9k</h3>
                        <p>Followers</p>
                      </div>
                    </div>
                    <div className='button-follow'>
                      <Button isBorderBtn={true}>
                        <svg width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <g clip-path='url(#clip0_3757_20181)'>
                            <path
                              d='M13.5833 11.666C14.6884 11.666 15.7482 12.105 16.5296 12.8864C17.311 13.6678 17.75 14.7276 17.75 15.8327V16.666C17.75 17.108 17.5744 17.532 17.2618 17.8445C16.9493 18.1571 16.5254 18.3327 16.0833 18.3327H4.41667C3.97464 18.3327 3.55072 18.1571 3.23816 17.8445C2.92559 17.532 2.75 17.108 2.75 16.666V15.8327C2.75 14.7276 3.18899 13.6678 3.97039 12.8864C4.75179 12.105 5.8116 11.666 6.91667 11.666H13.5833ZM18.095 7.56685C18.2446 7.4158 18.4463 7.32765 18.6588 7.32045C18.8713 7.31324 19.0785 7.38751 19.238 7.52807C19.3975 7.66863 19.4973 7.86484 19.5168 8.07654C19.5364 8.28823 19.4744 8.49941 19.3433 8.66685L19.2733 8.74602L16.9167 11.1027C16.7732 11.2462 16.5823 11.3324 16.3797 11.3451C16.1772 11.3578 15.977 11.2962 15.8167 11.1718L15.7383 11.1027L14.56 9.92435C14.409 9.77473 14.3208 9.57304 14.3136 9.36056C14.3064 9.14808 14.3807 8.94088 14.5212 8.78137C14.6618 8.62185 14.858 8.5221 15.0697 8.50251C15.2814 8.48293 15.4926 8.545 15.66 8.67602L15.7383 8.74602L16.3275 9.33518L18.095 7.56685ZM10.25 1.66602C11.3551 1.66602 12.4149 2.105 13.1963 2.8864C13.9777 3.66781 14.4167 4.72761 14.4167 5.83268C14.4167 6.93775 13.9777 7.99756 13.1963 8.77896C12.4149 9.56036 11.3551 9.99935 10.25 9.99935C9.14493 9.99935 8.08512 9.56036 7.30372 8.77896C6.52232 7.99756 6.08333 6.93775 6.08333 5.83268C6.08333 4.72761 6.52232 3.66781 7.30372 2.8864C8.08512 2.105 9.14493 1.66602 10.25 1.66602Z'
                              fill='#191820'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_3757_20181'>
                              <rect width='20' height='20' fill='#191820' transform='translate(0.25)' />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>Follow</span>
                      </Button>
                      <Button isBorderBtn={true}>
                        <svg width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M15.25 18.3327C14.5556 18.3327 13.9653 18.0896 13.4792 17.6035C12.9931 17.1174 12.75 16.5271 12.75 15.8327C12.75 15.7355 12.7569 15.6346 12.7708 15.5302C12.7847 15.4257 12.8056 15.3321 12.8333 15.2493L6.95833 11.8327C6.72222 12.041 6.45833 12.2043 6.16667 12.3227C5.875 12.441 5.56944 12.4999 5.25 12.4993C4.55556 12.4993 3.96528 12.2563 3.47917 11.7702C2.99306 11.2841 2.75 10.6938 2.75 9.99935C2.75 9.3049 2.99306 8.71463 3.47917 8.22852C3.96528 7.7424 4.55556 7.49935 5.25 7.49935C5.56944 7.49935 5.875 7.55852 6.16667 7.67685C6.45833 7.79518 6.72222 7.95824 6.95833 8.16602L12.8333 4.74935C12.8056 4.66602 12.7847 4.5724 12.7708 4.46852C12.7569 4.36463 12.75 4.26379 12.75 4.16602C12.75 3.47157 12.9931 2.88129 13.4792 2.39518C13.9653 1.90907 14.5556 1.66602 15.25 1.66602C15.9444 1.66602 16.5347 1.90907 17.0208 2.39518C17.5069 2.88129 17.75 3.47157 17.75 4.16602C17.75 4.86046 17.5069 5.45074 17.0208 5.93685C16.5347 6.42296 15.9444 6.66602 15.25 6.66602C14.9306 6.66602 14.625 6.60713 14.3333 6.48935C14.0417 6.37157 13.7778 6.20824 13.5417 5.99935L7.66667 9.41602C7.69444 9.49935 7.71528 9.59324 7.72917 9.69768C7.74306 9.80213 7.75 9.90268 7.75 9.99935C7.75 10.0966 7.74306 10.1974 7.72917 10.3018C7.71528 10.4063 7.69444 10.4999 7.66667 10.5827L13.5417 13.9993C13.7778 13.791 14.0417 13.628 14.3333 13.5102C14.625 13.3924 14.9306 13.3332 15.25 13.3327C15.9444 13.3327 16.5347 13.5757 17.0208 14.0618C17.5069 14.548 17.75 15.1382 17.75 15.8327C17.75 16.5271 17.5069 17.1174 17.0208 17.6035C16.5347 18.0896 15.9444 18.3327 15.25 18.3327Z'
                            fill='black'
                          />
                        </svg>
                        <span>Share</span>
                      </Button>
                      <Button isBorderBtn={true}>
                        <svg width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M17.125 3.75H3.375C2.87772 3.75 2.40081 3.94754 2.04917 4.29917C1.69754 4.65081 1.5 5.12772 1.5 5.625V14.375C1.5 14.8723 1.69754 15.3492 2.04917 15.7008C2.40081 16.0525 2.87772 16.25 3.375 16.25H17.125C17.6223 16.25 18.0992 16.0525 18.4508 15.7008C18.8025 15.3492 19 14.8723 19 14.375V5.625C19 5.12772 18.8025 4.65081 18.4508 4.29917C18.0992 3.94754 17.6223 3.75 17.125 3.75ZM16.775 5L10.65 10.1062C10.5377 10.1998 10.3962 10.251 10.25 10.251C10.1038 10.251 9.9623 10.1998 9.85 10.1062L3.725 5H16.775ZM17.125 15H3.375C3.20924 15 3.05027 14.9342 2.93306 14.8169C2.81585 14.6997 2.75 14.5408 2.75 14.375V5.8125L9.05 11.0625C9.38691 11.3431 9.81152 11.4968 10.25 11.4968C10.6885 11.4968 11.1131 11.3431 11.45 11.0625L17.75 5.8125V14.375C17.75 14.5408 17.6842 14.6997 17.5669 14.8169C17.4497 14.9342 17.2908 15 17.125 15Z'
                            fill='#191820'
                          />
                        </svg>
                        <span>Message</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <div className='profile-block-data diff-pading-ptofile'>
            <div className='filter-block-common'>
              <button className='back-button'>
                <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M11.6667 15L6.66675 10L11.6667 5L12.8334 6.16667L9.00008 10L12.8334 13.8333L11.6667 15Z'
                    fill='black'
                  />
                </svg>
                <span>Filters</span>
              </button>
              <div className='search-form-block'>
                <div className='search-box-form'>
                  <input type='text' placeholder='Search by NFTs' />
                  <button>
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M18.1249 17.2411L13.4049 12.5211C14.5391 11.1595 15.1047 9.41291 14.9841 7.64483C14.8634 5.87675 14.0657 4.22326 12.7569 3.02834C11.4482 1.83341 9.7291 1.18906 7.95736 1.22932C6.18562 1.26958 4.49761 1.99134 3.24448 3.24448C1.99134 4.49761 1.26958 6.18562 1.22932 7.95736C1.18906 9.7291 1.83341 11.4482 3.02834 12.7569C4.22326 14.0657 5.87675 14.8634 7.64483 14.9841C9.41291 15.1047 11.1595 14.5391 12.5211 13.4049L17.2411 18.1249L18.1249 17.2411ZM2.49989 8.12489C2.49989 7.01237 2.82979 5.92483 3.44787 4.99981C4.06596 4.07478 4.94446 3.35381 5.97229 2.92807C7.00013 2.50232 8.13113 2.39093 9.22227 2.60797C10.3134 2.82501 11.3157 3.36074 12.1024 4.14741C12.889 4.93408 13.4248 5.93636 13.6418 7.02751C13.8588 8.11865 13.7475 9.24965 13.3217 10.2775C12.896 11.3053 12.175 12.1838 11.25 12.8019C10.3249 13.42 9.23741 13.7499 8.12489 13.7499C6.63355 13.7482 5.20377 13.1551 4.14924 12.1005C3.09471 11.046 2.50154 9.61622 2.49989 8.12489Z'
                        fill='#9E9E9E'
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className='form-group'>
                <Select
                  name='colors'
                  options={options}
                  className='TX-select2-wrapper'
                  classNamePrefix='TX-fix-select'
                />
              </div>
              <div className='odd-filter-block'>
                <button>
                  <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M1.25 3.125C1.25 2.62772 1.44754 2.15081 1.79917 1.79917C2.15081 1.44754 2.62772 1.25 3.125 1.25H6.875C7.37228 1.25 7.84919 1.44754 8.20083 1.79917C8.55246 2.15081 8.75 2.62772 8.75 3.125V6.875C8.75 7.37228 8.55246 7.84919 8.20083 8.20083C7.84919 8.55246 7.37228 8.75 6.875 8.75H3.125C2.62772 8.75 2.15081 8.55246 1.79917 8.20083C1.44754 7.84919 1.25 7.37228 1.25 6.875V3.125ZM11.25 3.125C11.25 2.62772 11.4475 2.15081 11.7992 1.79917C12.1508 1.44754 12.6277 1.25 13.125 1.25H16.875C17.3723 1.25 17.8492 1.44754 18.2008 1.79917C18.5525 2.15081 18.75 2.62772 18.75 3.125V6.875C18.75 7.37228 18.5525 7.84919 18.2008 8.20083C17.8492 8.55246 17.3723 8.75 16.875 8.75H13.125C12.6277 8.75 12.1508 8.55246 11.7992 8.20083C11.4475 7.84919 11.25 7.37228 11.25 6.875V3.125ZM1.25 13.125C1.25 12.6277 1.44754 12.1508 1.79917 11.7992C2.15081 11.4475 2.62772 11.25 3.125 11.25H6.875C7.37228 11.25 7.84919 11.4475 8.20083 11.7992C8.55246 12.1508 8.75 12.6277 8.75 13.125V16.875C8.75 17.3723 8.55246 17.8492 8.20083 18.2008C7.84919 18.5525 7.37228 18.75 6.875 18.75H3.125C2.62772 18.75 2.15081 18.5525 1.79917 18.2008C1.44754 17.8492 1.25 17.3723 1.25 16.875V13.125ZM11.25 13.125C11.25 12.6277 11.4475 12.1508 11.7992 11.7992C12.1508 11.4475 12.6277 11.25 13.125 11.25H16.875C17.3723 11.25 17.8492 11.4475 18.2008 11.7992C18.5525 12.1508 18.75 12.6277 18.75 13.125V16.875C18.75 17.3723 18.5525 17.8492 18.2008 18.2008C17.8492 18.5525 17.3723 18.75 16.875 18.75H13.125C12.6277 18.75 12.1508 18.5525 11.7992 18.2008C11.4475 17.8492 11.25 17.3723 11.25 16.875V13.125Z'
                      fill='black'
                    />
                  </svg>
                </button>
                <button>
                  <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M11.6667 8.33333V11.6667H8.33333V8.33333H11.6667ZM13.3333 8.33333H17.5V11.6667H13.3333V8.33333ZM11.6667 17.5H8.33333V13.3333H11.6667V17.5ZM13.3333 17.5V13.3333H17.5V16.6667C17.5 16.8877 17.4122 17.0996 17.2559 17.2559C17.0996 17.4122 16.8877 17.5 16.6667 17.5H13.3333ZM11.6667 2.5V6.66667H8.33333V2.5H11.6667ZM13.3333 2.5H16.6667C16.8877 2.5 17.0996 2.5878 17.2559 2.74408C17.4122 2.90036 17.5 3.11232 17.5 3.33333V6.66667H13.3333V2.5ZM6.66667 8.33333V11.6667H2.5V8.33333H6.66667ZM6.66667 17.5H3.33333C3.11232 17.5 2.90036 17.4122 2.74408 17.2559C2.5878 17.0996 2.5 16.8877 2.5 16.6667V13.3333H6.66667V17.5ZM6.66667 2.5V6.66667H2.5V3.33333C2.5 3.11232 2.5878 2.90036 2.74408 2.74408C2.90036 2.5878 3.11232 2.5 3.33333 2.5H6.66667Z'
                      fill='#979797'
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className='listed-tab-block'>
              <div className='tabs-block-title'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                  <TabList>
                    <Tab>NFTs</Tab>
                    <Tab>Analytics</Tab>
                    <Tab>Activity</Tab>
                  </TabList>
                </Tabs>
              </div>
            </div>
          </div>
          <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabPanel>
              <div className='filter-block-data-block'>
                <div className='filter-block-data-block-left'>
                  <div className='filter-block-data-block-left-inner'>
                    <Accordion defaultActiveKey='0'>
                      <Accordion.Item eventKey='0'>
                        <Accordion.Header>Status</Accordion.Header>
                        <Accordion.Body>
                          <div className='status-button'>
                            <button>All</button>
                            <button>Buy Now</button>
                            <button>Live auction</button>
                            <button>Not for sale</button>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey='1'>
                        <Accordion.Header>Price</Accordion.Header>
                        <Accordion.Body></Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey='2'>
                        <Accordion.Header>Attributes</Accordion.Header>
                        <Accordion.Body>
                          <div className='search-form-block'>
                            <div className='search-box-form'>
                              <input type='text' placeholder='Search' />
                              <button>
                                <svg
                                  width='20'
                                  height='20'
                                  viewBox='0 0 20 20'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'>
                                  <path
                                    d='M18.1249 17.2411L13.4049 12.5211C14.5391 11.1595 15.1047 9.41291 14.9841 7.64483C14.8634 5.87675 14.0657 4.22326 12.7569 3.02834C11.4482 1.83341 9.7291 1.18906 7.95736 1.22932C6.18562 1.26958 4.49761 1.99134 3.24448 3.24448C1.99134 4.49761 1.26958 6.18562 1.22932 7.95736C1.18906 9.7291 1.83341 11.4482 3.02834 12.7569C4.22326 14.0657 5.87675 14.8634 7.64483 14.9841C9.41291 15.1047 11.1595 14.5391 12.5211 13.4049L17.2411 18.1249L18.1249 17.2411ZM2.49989 8.12489C2.49989 7.01237 2.82979 5.92483 3.44787 4.99981C4.06596 4.07478 4.94446 3.35381 5.97229 2.92807C7.00013 2.50232 8.13113 2.39093 9.22227 2.60797C10.3134 2.82501 11.3157 3.36074 12.1024 4.14741C12.889 4.93408 13.4248 5.93636 13.6418 7.02751C13.8588 8.11865 13.7475 9.24965 13.3217 10.2775C12.896 11.3053 12.175 12.1838 11.25 12.8019C10.3249 13.42 9.23741 13.7499 8.12489 13.7499C6.63355 13.7482 5.20377 13.1551 4.14924 12.1005C3.09471 11.046 2.50154 9.61622 2.49989 8.12489Z'
                                    fill='#9E9E9E'
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey='3'>
                        <Accordion.Header>Head</Accordion.Header>
                        <Accordion.Body>
                          <div className='checkbox-block-custom-filter'>
                            <div className='checkbox-filter-block'>
                              <input type='checkbox' id='buy'></input>
                              <label for='buy'>
                                <span>
                                  <img src={'../../images/check-icon-block.svg'} alt='check-icon'></img>
                                </span>
                                <div className='flex-block-check'>
                                  <h4>Alien</h4>
                                  <h4>68</h4>
                                </div>
                              </label>
                            </div>
                            <div className='checkbox-filter-block'>
                              <input type='checkbox' id='buy'></input>
                              <label for='buy'>
                                <span>
                                  <img src={'../../images/check-icon-block.svg'} alt='check-icon'></img>
                                </span>
                                <div className='flex-block-check'>
                                  <h4>Alien</h4>
                                  <h4>68</h4>
                                </div>
                              </label>
                            </div>
                            <div className='checkbox-filter-block'>
                              <input type='checkbox' id='buy'></input>
                              <label for='buy'>
                                <span>
                                  <img src={'../../images/check-icon-block.svg'} alt='check-icon'></img>
                                </span>
                                <div className='flex-block-check'>
                                  <h4>Alien</h4>
                                  <h4>68</h4>
                                </div>
                              </label>
                            </div>
                            <div className='checkbox-filter-block'>
                              <input type='checkbox' id='buy'></input>
                              <label for='buy'>
                                <span>
                                  <img src={'../../images/check-icon-block.svg'} alt='check-icon'></img>
                                </span>
                                <div className='flex-block-check'>
                                  <h4>Alien</h4>
                                  <h4>68</h4>
                                </div>
                              </label>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey='4'>
                        <Accordion.Header>Skin</Accordion.Header>
                        <Accordion.Body>
                          <div className='checkbox-block-custom-filter'>
                            <div className='checkbox-filter-block'>
                              <input type='checkbox' id='buy'></input>
                              <label for='buy'>
                                <span>
                                  <img src={'../../images/check-icon-block.svg'} alt='check-icon'></img>
                                </span>
                                <div className='flex-block-check'>
                                  <h4>Alien</h4>
                                  <h4>68</h4>
                                </div>
                              </label>
                            </div>
                            <div className='checkbox-filter-block'>
                              <input type='checkbox' id='buy'></input>
                              <label for='buy'>
                                <span>
                                  <img src={'../../images/check-icon-block.svg'} alt='check-icon'></img>
                                </span>
                                <div className='flex-block-check'>
                                  <h4>Alien</h4>
                                  <h4>68</h4>
                                </div>
                              </label>
                            </div>
                            <div className='checkbox-filter-block'>
                              <input type='checkbox' id='buy'></input>
                              <label for='buy'>
                                <span>
                                  <img src={'../../images/check-icon-block.svg'} alt='check-icon'></img>
                                </span>
                                <div className='flex-block-check'>
                                  <h4>Alien</h4>
                                  <h4>68</h4>
                                </div>
                              </label>
                            </div>
                            <div className='checkbox-filter-block'>
                              <input type='checkbox' id='buy'></input>
                              <label for='buy'>
                                <span>
                                  <img src={'../../images/check-icon-block.svg'} alt='check-icon'></img>
                                </span>
                                <div className='flex-block-check'>
                                  <h4>Alien</h4>
                                  <h4>68</h4>
                                </div>
                              </label>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
                <div className='filter-block-data-block-right'>
                  <CommonProductBLock className='explore-block-product'>
                    <div className='common-product-block hot-picks-cards'>
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
                          </div>
                          <div className='product-details-profile'>
                            <div className='product-profile'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>Collection</p>
                                <h5>Hakunamatata</h5>
                              </div>
                            </div>
                            <div className='product-profile'>
                              <div className='product-profile-details'>
                                <p>Price</p>
                                <h5>
                                  <span className='img-price-text'>
                                    0.0041
                                    <img
                                      src={'../../images/ethe-icon-blue.svg'}
                                      alt='product-img'
                                      className='eth-price'></img>
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div className='product-details-profile'>
                            {/* <div className='product-profile'>
                              <img src={'../../images/ethe-icon-blue.svg'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>ETH</p>
                                <h5>
                                  <span>0.0041</span>
                                </h5>
                              </div>
                            </div> */}
                          </div>
                          <div className='btn-product'>
                            <button>
                              <span>Purchase</span>
                            </button>
                          </div>
                        </div>
                      </div>
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
                          </div>
                          <div className='product-details-profile'>
                            <div className='product-profile'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>Collection</p>
                                <h5>Hakunamatata</h5>
                              </div>
                            </div>
                            <div className='product-profile'>
                              <div className='product-profile-details'>
                                <p>Price</p>
                                <h5>
                                  <span className='img-price-text'>
                                    0.0041
                                    <img
                                      src={'../../images/ethe-icon-blue.svg'}
                                      alt='product-img'
                                      className='eth-price'></img>
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div className='product-details-profile'>
                            {/* <div className='product-profile'>
                              <img src={'../../images/ethe-icon-blue.svg'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>ETH</p>
                                <h5>
                                  <span>0.0041</span>
                                </h5>
                              </div>
                            </div> */}
                          </div>
                          <div className='btn-product'>
                            <button>
                              <span>Purchase</span>
                            </button>
                          </div>
                        </div>
                      </div>
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
                          </div>
                          <div className='product-details-profile'>
                            <div className='product-profile'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>Collection</p>
                                <h5>Hakunamatata</h5>
                              </div>
                            </div>
                            <div className='product-profile'>
                              <div className='product-profile-details'>
                                <p>Price</p>
                                <h5>
                                  <span className='img-price-text'>
                                    0.0041
                                    <img
                                      src={'../../images/ethe-icon-blue.svg'}
                                      alt='product-img'
                                      className='eth-price'></img>
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div className='product-details-profile'>
                            {/* <div className='product-profile'>
                              <img src={'../../images/ethe-icon-blue.svg'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>ETH</p>
                                <h5>
                                  <span>0.0041</span>
                                </h5>
                              </div>
                            </div> */}
                          </div>
                          <div className='btn-product'>
                            <button>
                              <span>Purchase</span>
                            </button>
                          </div>
                        </div>
                      </div>
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
                          </div>
                          <div className='product-details-profile'>
                            <div className='product-profile'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>Collection</p>
                                <h5>Hakunamatata</h5>
                              </div>
                            </div>
                            <div className='product-profile'>
                              <div className='product-profile-details'>
                                <p>Price</p>
                                <h5>
                                  <span className='img-price-text'>
                                    0.0041
                                    <img
                                      src={'../../images/ethe-icon-blue.svg'}
                                      alt='product-img'
                                      className='eth-price'></img>
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div className='product-details-profile'>
                            {/* <div className='product-profile'>
                              <img src={'../../images/ethe-icon-blue.svg'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>ETH</p>
                                <h5>
                                  <span>0.0041</span>
                                </h5>
                              </div>
                            </div> */}
                          </div>
                          <div className='btn-product'>
                            <button>
                              <span>Purchase</span>
                            </button>
                          </div>
                        </div>
                      </div>
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
                          </div>
                          <div className='product-details-profile'>
                            <div className='product-profile'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>Collection</p>
                                <h5>Hakunamatata</h5>
                              </div>
                            </div>
                            <div className='product-profile'>
                              <div className='product-profile-details'>
                                <p>Price</p>
                                <h5>
                                  <span className='img-price-text'>
                                    0.0041
                                    <img
                                      src={'../../images/ethe-icon-blue.svg'}
                                      alt='product-img'
                                      className='eth-price'></img>
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div className='product-details-profile'>
                            {/* <div className='product-profile'>
                              <img src={'../../images/ethe-icon-blue.svg'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>ETH</p>
                                <h5>
                                  <span>0.0041</span>
                                </h5>
                              </div>
                            </div> */}
                          </div>
                          <div className='btn-product'>
                            <button>
                              <span>Purchase</span>
                            </button>
                          </div>
                        </div>
                      </div>
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
                          </div>
                          <div className='product-details-profile'>
                            <div className='product-profile'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>Collection</p>
                                <h5>Hakunamatata</h5>
                              </div>
                            </div>
                            <div className='product-profile'>
                              <div className='product-profile-details'>
                                <p>Price</p>
                                <h5>
                                  <span className='img-price-text'>
                                    0.0041
                                    <img
                                      src={'../../images/ethe-icon-blue.svg'}
                                      alt='product-img'
                                      className='eth-price'></img>
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div className='product-details-profile'>
                            {/* <div className='product-profile'>
                              <img src={'../../images/ethe-icon-blue.svg'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>ETH</p>
                                <h5>
                                  <span>0.0041</span>
                                </h5>
                              </div>
                            </div> */}
                          </div>
                          <div className='btn-product'>
                            <button>
                              <span>Purchase</span>
                            </button>
                          </div>
                        </div>
                      </div>
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
                          </div>
                          <div className='product-details-profile'>
                            <div className='product-profile'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>Collection</p>
                                <h5>Hakunamatata</h5>
                              </div>
                            </div>
                            <div className='product-profile'>
                              <div className='product-profile-details'>
                                <p>Price</p>
                                <h5>
                                  <span className='img-price-text'>
                                    0.0041
                                    <img
                                      src={'../../images/ethe-icon-blue.svg'}
                                      alt='product-img'
                                      className='eth-price'></img>
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div className='product-details-profile'>
                            {/* <div className='product-profile'>
                              <img src={'../../images/ethe-icon-blue.svg'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>ETH</p>
                                <h5>
                                  <span>0.0041</span>
                                </h5>
                              </div>
                            </div> */}
                          </div>
                          <div className='btn-product'>
                            <button>
                              <span>Purchase</span>
                            </button>
                          </div>
                        </div>
                      </div>
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
                          </div>
                          <div className='product-details-profile'>
                            <div className='product-profile'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>Collection</p>
                                <h5>Hakunamatata</h5>
                              </div>
                            </div>
                            <div className='product-profile'>
                              <div className='product-profile-details'>
                                <p>Price</p>
                                <h5>
                                  <span className='img-price-text'>
                                    0.0041
                                    <img
                                      src={'../../images/ethe-icon-blue.svg'}
                                      alt='product-img'
                                      className='eth-price'></img>
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div className='product-details-profile'>
                            {/* <div className='product-profile'>
                              <img src={'../../images/ethe-icon-blue.svg'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>ETH</p>
                                <h5>
                                  <span>0.0041</span>
                                </h5>
                              </div>
                            </div> */}
                          </div>
                          <div className='btn-product'>
                            <button>
                              <span>Purchase</span>
                            </button>
                          </div>
                        </div>
                      </div>
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
                          </div>
                          <div className='product-details-profile'>
                            <div className='product-profile'>
                              <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>Collection</p>
                                <h5>Hakunamatata</h5>
                              </div>
                            </div>
                            <div className='product-profile'>
                              <div className='product-profile-details'>
                                <p>Price</p>
                                <h5>
                                  <span className='img-price-text'>
                                    0.0041
                                    <img
                                      src={'../../images/ethe-icon-blue.svg'}
                                      alt='product-img'
                                      className='eth-price'></img>
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div className='product-details-profile'>
                            {/* <div className='product-profile'>
                              <img src={'../../images/ethe-icon-blue.svg'} alt='product-img'></img>
                              <div className='product-profile-details'>
                                <p>ETH</p>
                                <h5>
                                  <span>0.0041</span>
                                </h5>
                              </div>
                            </div> */}
                          </div>
                          <div className='btn-product'>
                            <button>
                              <span>Purchase</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='common-btn-block'>
                      <Button isBorderBtn={true}>Load more</Button>
                    </div>
                  </CommonProductBLock>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className='filter-block-data-block'>
                <div className='filter-block-data-block-left'>
                  <div className='filter-block-data-block-left-inner'>
                    <div className='filter-block-data-block-left-inner-public'>
                      <h2>Event Type</h2>
                      <div className='checkbox-block-custom-filter'>
                        <div className='checkbox-filter-block'>
                          <input type='checkbox' id='check'></input>
                          <label for='check'>
                            <span>
                              <svg
                                width='8'
                                height='6'
                                viewBox='0 0 8 6'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M1.5 2.9987L3.375 4.66536L6.5 1.33203'
                                  stroke='black'
                                  stroke-width='1.66667'
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                />
                              </svg>
                            </span>
                            <div className='flex-block-check'>
                              <h4>Listings</h4>
                            </div>
                          </label>
                        </div>
                        <div className='checkbox-filter-block'>
                          <input type='checkbox' id='check'></input>
                          <label for='check'>
                            <span>
                              <svg
                                width='8'
                                height='6'
                                viewBox='0 0 8 6'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M1.5 2.9987L3.375 4.66536L6.5 1.33203'
                                  stroke='black'
                                  stroke-width='1.66667'
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                />
                              </svg>
                            </span>
                            <div className='flex-block-check'>
                              <h4>Mints</h4>
                            </div>
                          </label>
                        </div>
                        <div className='checkbox-filter-block'>
                          <input type='checkbox' id='check'></input>
                          <label for='check'>
                            <span>
                              <svg
                                width='8'
                                height='6'
                                viewBox='0 0 8 6'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M1.5 2.9987L3.375 4.66536L6.5 1.33203'
                                  stroke='black'
                                  stroke-width='1.66667'
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                />
                              </svg>
                            </span>
                            <div className='flex-block-check'>
                              <h4>Transfers</h4>
                            </div>
                          </label>
                        </div>
                        <div className='checkbox-filter-block'>
                          <input type='checkbox' id='check'></input>
                          <label for='check'>
                            <span>
                              <svg
                                width='8'
                                height='6'
                                viewBox='0 0 8 6'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M1.5 2.9987L3.375 4.66536L6.5 1.33203'
                                  stroke='black'
                                  stroke-width='1.66667'
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                />
                              </svg>
                            </span>
                            <div className='flex-block-check'>
                              <h4>Sales</h4>
                            </div>
                          </label>
                        </div>
                        <div className='checkbox-filter-block'>
                          <input type='checkbox' id='check'></input>
                          <label for='check'>
                            <span>
                              <svg
                                width='8'
                                height='6'
                                viewBox='0 0 8 6'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M1.5 2.9987L3.375 4.66536L6.5 1.33203'
                                  stroke='black'
                                  stroke-width='1.66667'
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                />
                              </svg>
                            </span>
                            <div className='flex-block-check'>
                              <h4>Offers</h4>
                            </div>
                          </label>
                        </div>
                        <div className='checkbox-filter-block'>
                          <input type='checkbox' id='check'></input>
                          <label for='check'>
                            <span>
                              <svg
                                width='8'
                                height='6'
                                viewBox='0 0 8 6'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M1.5 2.9987L3.375 4.66536L6.5 1.33203'
                                  stroke='black'
                                  stroke-width='1.66667'
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                />
                              </svg>
                            </span>
                            <div className='flex-block-check'>
                              <h4>Canceled Listings</h4>
                            </div>
                          </label>
                        </div>
                        <div className='checkbox-filter-block'>
                          <input type='checkbox' id='check'></input>
                          <label for='check'>
                            <span>
                              <svg
                                width='8'
                                height='6'
                                viewBox='0 0 8 6'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M1.5 2.9987L3.375 4.66536L6.5 1.33203'
                                  stroke='black'
                                  stroke-width='1.66667'
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                />
                              </svg>
                            </span>
                            <div className='flex-block-check'>
                              <h4>Canceled Offers</h4>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <Accordion defaultActiveKey='0'>
                      <Accordion.Item eventKey='0'>
                        <Accordion.Header>Collections</Accordion.Header>
                        <Accordion.Body>
                          <div className='search-form-block'>
                            <div className='search-box-form'>
                              <input type='text' placeholder='Search by Collections' />
                              <button>
                                <svg
                                  width='20'
                                  height='20'
                                  viewBox='0 0 20 20'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'>
                                  <path
                                    d='M18.1249 17.2411L13.4049 12.5211C14.5391 11.1595 15.1047 9.41291 14.9841 7.64483C14.8634 5.87675 14.0657 4.22326 12.7569 3.02834C11.4482 1.83341 9.7291 1.18906 7.95736 1.22932C6.18562 1.26958 4.49761 1.99134 3.24448 3.24448C1.99134 4.49761 1.26958 6.18562 1.22932 7.95736C1.18906 9.7291 1.83341 11.4482 3.02834 12.7569C4.22326 14.0657 5.87675 14.8634 7.64483 14.9841C9.41291 15.1047 11.1595 14.5391 12.5211 13.4049L17.2411 18.1249L18.1249 17.2411ZM2.49989 8.12489C2.49989 7.01237 2.82979 5.92483 3.44787 4.99981C4.06596 4.07478 4.94446 3.35381 5.97229 2.92807C7.00013 2.50232 8.13113 2.39093 9.22227 2.60797C10.3134 2.82501 11.3157 3.36074 12.1024 4.14741C12.889 4.93408 13.4248 5.93636 13.6418 7.02751C13.8588 8.11865 13.7475 9.24965 13.3217 10.2775C12.896 11.3053 12.175 12.1838 11.25 12.8019C10.3249 13.42 9.23741 13.7499 8.12489 13.7499C6.63355 13.7482 5.20377 13.1551 4.14924 12.1005C3.09471 11.046 2.50154 9.61622 2.49989 8.12489Z'
                                    fill='#9E9E9E'
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className='search-collection-block'>
                            <div className='search-collection-block-inner'>
                              <div className='search-collection-block-left'>
                                <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                                <div className='content-block'>
                                  <h4>
                                    <span>Bored Ape Yacht Club</span>
                                    <svg
                                      width='20'
                                      height='20'
                                      viewBox='0 0 20 20'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'>
                                      <path
                                        d='M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z'
                                        fill='#FB4EF1'
                                      />
                                    </svg>
                                  </h4>
                                  <p>Floor: 34 ETH</p>
                                </div>
                              </div>
                              <div className='search-collection-block-right'>
                                <h4>Floor: 34 ETH</h4>
                                <p>24h</p>
                              </div>
                            </div>
                            <div className='search-collection-block-inner'>
                              <div className='search-collection-block-left'>
                                <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                                <div className='content-block'>
                                  <h4>
                                    <span>Bored Ape Yacht Club</span>
                                    <svg
                                      width='20'
                                      height='20'
                                      viewBox='0 0 20 20'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'>
                                      <path
                                        d='M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z'
                                        fill='#FB4EF1'
                                      />
                                    </svg>
                                  </h4>
                                  <p>Floor: 34 ETH</p>
                                </div>
                              </div>
                              <div className='search-collection-block-right'>
                                <h4>Floor: 34 ETH</h4>
                                <p>24h</p>
                              </div>
                            </div>
                            <div className='search-collection-block-inner'>
                              <div className='search-collection-block-left'>
                                <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                                <div className='content-block'>
                                  <h4>
                                    <span>Bored Ape Yacht Club</span>
                                    <svg
                                      width='20'
                                      height='20'
                                      viewBox='0 0 20 20'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'>
                                      <path
                                        d='M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z'
                                        fill='#FB4EF1'
                                      />
                                    </svg>
                                  </h4>
                                  <p>Floor: 34 ETH</p>
                                </div>
                              </div>
                              <div className='search-collection-block-right'>
                                <h4>Floor: 34 ETH</h4>
                                <p>24h</p>
                              </div>
                            </div>
                            <div className='search-collection-block-inner'>
                              <div className='search-collection-block-left'>
                                <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                                <div className='content-block'>
                                  <h4>
                                    <span>Bored Ape Yacht Club</span>
                                    <svg
                                      width='20'
                                      height='20'
                                      viewBox='0 0 20 20'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'>
                                      <path
                                        d='M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z'
                                        fill='#FB4EF1'
                                      />
                                    </svg>
                                  </h4>
                                  <p>Floor: 34 ETH</p>
                                </div>
                              </div>
                              <div className='search-collection-block-right'>
                                <h4>Floor: 34 ETH</h4>
                                <p>24h</p>
                              </div>
                            </div>
                            <div className='search-collection-block-inner'>
                              <div className='search-collection-block-left'>
                                <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                                <div className='content-block'>
                                  <h4>
                                    <span>Bored Ape Yacht Club</span>
                                    <svg
                                      width='20'
                                      height='20'
                                      viewBox='0 0 20 20'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'>
                                      <path
                                        d='M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z'
                                        fill='#FB4EF1'
                                      />
                                    </svg>
                                  </h4>
                                  <p>Floor: 34 ETH</p>
                                </div>
                              </div>
                              <div className='search-collection-block-right'>
                                <h4>Floor: 34 ETH</h4>
                                <p>24h</p>
                              </div>
                            </div>
                            <div className='search-collection-block-inner'>
                              <div className='search-collection-block-left'>
                                <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                                <div className='content-block'>
                                  <h4>
                                    <span>Bored Ape Yacht Club</span>
                                    <svg
                                      width='20'
                                      height='20'
                                      viewBox='0 0 20 20'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'>
                                      <path
                                        d='M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z'
                                        fill='#FB4EF1'
                                      />
                                    </svg>
                                  </h4>
                                  <p>Floor: 34 ETH</p>
                                </div>
                              </div>
                              <div className='search-collection-block-right'>
                                <h4>Floor: 34 ETH</h4>
                                <p>24h</p>
                              </div>
                            </div>
                            <div className='search-collection-block-inner'>
                              <div className='search-collection-block-left'>
                                <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                                <div className='content-block'>
                                  <h4>
                                    <span>Bored Ape Yacht Club</span>
                                    <svg
                                      width='20'
                                      height='20'
                                      viewBox='0 0 20 20'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'>
                                      <path
                                        d='M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z'
                                        fill='#FB4EF1'
                                      />
                                    </svg>
                                  </h4>
                                  <p>Floor: 34 ETH</p>
                                </div>
                              </div>
                              <div className='search-collection-block-right'>
                                <h4>Floor: 34 ETH</h4>
                                <p>24h</p>
                              </div>
                            </div>
                            <div className='load-more'>
                              <button>Load More</button>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
                <div className='filter-block-data-block-right'>
                  <div className='left-activity-tab'>
                    <div className='left-activity-tab-block'>
                      <h3 className='title-activity-tab'>Owner Distribution</h3>
                      <div className='progress-bar-block'>
                        <h3>1</h3>
                        <ScreenreaderLabelExample />
                        <h4>1 Item</h4>
                      </div>
                      <div className='progress-bar-block'>
                        <h3>2</h3>
                        <ScreenreaderLabelExample />
                        <h4>2-3 Items</h4>
                      </div>
                      <div className='progress-bar-block'>
                        <h3>3</h3>
                        <ScreenreaderLabelExample />
                        <h4>2-3 Items</h4>
                      </div>
                      <div className='progress-bar-block'>
                        <h3>4</h3>
                        <ScreenreaderLabelExample />
                        <h4>2-3 Items</h4>
                      </div>
                      <div className='progress-bar-block'>
                        <h3>5</h3>
                        <ScreenreaderLabelExample />
                        <h4>2-3 Items</h4>
                      </div>
                      <div className='progress-bar-block'>
                        <h3>6</h3>
                        <ScreenreaderLabelExample />
                        <h4>2-3 Items</h4>
                      </div>
                    </div>
                    <div className='filter-block-data-block-right-table'>
                      <h3 className='title-activity-tab'>Owners (top 100)</h3>
                      <Table>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Owned</th>
                            <th>% Owned</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className='profile-img-block diff-img-radius'>
                                <span>1#</span>
                                <img src='../../images/item-img.png' alt='item-img'></img>
                                <div className='text-img-block'>
                                  <h3>Avidlines #14843</h3>
                                </div>
                              </div>
                            </td>
                            <td>0x000</td>
                            <td>1135</td>
                            <td>90%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className='profile-img-block diff-img-radius'>
                                <span>1#</span>
                                <img src='../../images/item-img.png' alt='item-img'></img>
                                <div className='text-img-block'>
                                  <h3>Avidlines #14843</h3>
                                </div>
                              </div>
                            </td>
                            <td>0x000</td>
                            <td>1135</td>
                            <td>90%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className='profile-img-block diff-img-radius'>
                                <span>1#</span>
                                <img src='../../images/item-img.png' alt='item-img'></img>
                                <div className='text-img-block'>
                                  <h3>Avidlines #14843</h3>
                                </div>
                              </div>
                            </td>
                            <td>0x000</td>
                            <td>1135</td>
                            <td>90%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className='profile-img-block diff-img-radius'>
                                <span>1#</span>
                                <img src='../../images/item-img.png' alt='item-img'></img>
                                <div className='text-img-block'>
                                  <h3>Avidlines #14843</h3>
                                </div>
                              </div>
                            </td>
                            <td>0x000</td>
                            <td>1135</td>
                            <td>90%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className='profile-img-block diff-img-radius'>
                                <span>1#</span>
                                <img src='../../images/item-img.png' alt='item-img'></img>
                                <div className='text-img-block'>
                                  <h3>Avidlines #14843</h3>
                                </div>
                              </div>
                            </td>
                            <td>0x000</td>
                            <td>1135</td>
                            <td>90%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className='profile-img-block diff-img-radius'>
                                <span>1#</span>
                                <img src='../../images/item-img.png' alt='item-img'></img>
                                <div className='text-img-block'>
                                  <h3>Avidlines #14843</h3>
                                </div>
                              </div>
                            </td>
                            <td>0x000</td>
                            <td>1135</td>
                            <td>90%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className='profile-img-block diff-img-radius'>
                                <span>1#</span>
                                <img src='../../images/item-img.png' alt='item-img'></img>
                                <div className='text-img-block'>
                                  <h3>Avidlines #14843</h3>
                                </div>
                              </div>
                            </td>
                            <td>0x000</td>
                            <td>1135</td>
                            <td>90%</td>
                          </tr>
                          <tr>
                            <td>
                              <div className='profile-img-block diff-img-radius'>
                                <span>1#</span>
                                <img src='../../images/item-img.png' alt='item-img'></img>
                                <div className='text-img-block'>
                                  <h3>Avidlines #14843</h3>
                                </div>
                              </div>
                            </td>
                            <td>0x000</td>
                            <td>1135</td>
                            <td>90%</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className='filter-block-data-block'>
                <div className='filter-block-data-block-left'>
                  <div className='filter-block-data-block-left-inner'>
                    <div className='filter-block-data-block-left-inner-public'>
                      <h2>Offer Type</h2>
                      <div className='checkbox-block-custom-filter'>
                        <div className='checkbox-filter-block'>
                          <input type='checkbox' id='check'></input>
                          <label for='check'>
                            <span>
                              <svg
                                width='8'
                                height='6'
                                viewBox='0 0 8 6'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M1.5 2.9987L3.375 4.66536L6.5 1.33203'
                                  stroke='black'
                                  stroke-width='1.66667'
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                />
                              </svg>
                            </span>
                            <div className='flex-block-check'>
                              <h4>All</h4>
                            </div>
                          </label>
                        </div>
                        <div className='checkbox-filter-block'>
                          <input type='checkbox' id='check'></input>
                          <label for='check'>
                            <span>
                              <svg
                                width='8'
                                height='6'
                                viewBox='0 0 8 6'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M1.5 2.9987L3.375 4.66536L6.5 1.33203'
                                  stroke='black'
                                  stroke-width='1.66667'
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                />
                              </svg>
                            </span>
                            <div className='flex-block-check'>
                              <h4>Offers Made</h4>
                            </div>
                          </label>
                        </div>
                        <div className='checkbox-filter-block'>
                          <input type='checkbox' id='check'></input>
                          <label for='check'>
                            <span>
                              <svg
                                width='8'
                                height='6'
                                viewBox='0 0 8 6'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M1.5 2.9987L3.375 4.66536L6.5 1.33203'
                                  stroke='black'
                                  stroke-width='1.66667'
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                />
                              </svg>
                            </span>
                            <div className='flex-block-check'>
                              <h4>Offer Received</h4>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <Accordion defaultActiveKey='0'>
                      <Accordion.Item eventKey='0'>
                        <Accordion.Header>Collections</Accordion.Header>
                        <Accordion.Body>
                          <div className='search-form-block'>
                            <div className='search-box-form'>
                              <input type='text' placeholder='Search by Collections' />
                              <button>
                                <svg
                                  width='20'
                                  height='20'
                                  viewBox='0 0 20 20'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'>
                                  <path
                                    d='M18.1249 17.2411L13.4049 12.5211C14.5391 11.1595 15.1047 9.41291 14.9841 7.64483C14.8634 5.87675 14.0657 4.22326 12.7569 3.02834C11.4482 1.83341 9.7291 1.18906 7.95736 1.22932C6.18562 1.26958 4.49761 1.99134 3.24448 3.24448C1.99134 4.49761 1.26958 6.18562 1.22932 7.95736C1.18906 9.7291 1.83341 11.4482 3.02834 12.7569C4.22326 14.0657 5.87675 14.8634 7.64483 14.9841C9.41291 15.1047 11.1595 14.5391 12.5211 13.4049L17.2411 18.1249L18.1249 17.2411ZM2.49989 8.12489C2.49989 7.01237 2.82979 5.92483 3.44787 4.99981C4.06596 4.07478 4.94446 3.35381 5.97229 2.92807C7.00013 2.50232 8.13113 2.39093 9.22227 2.60797C10.3134 2.82501 11.3157 3.36074 12.1024 4.14741C12.889 4.93408 13.4248 5.93636 13.6418 7.02751C13.8588 8.11865 13.7475 9.24965 13.3217 10.2775C12.896 11.3053 12.175 12.1838 11.25 12.8019C10.3249 13.42 9.23741 13.7499 8.12489 13.7499C6.63355 13.7482 5.20377 13.1551 4.14924 12.1005C3.09471 11.046 2.50154 9.61622 2.49989 8.12489Z'
                                    fill='#9E9E9E'
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className='search-collection-block'>
                            <div className='search-collection-block-inner'>
                              <div className='search-collection-block-left'>
                                <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                                <div className='content-block'>
                                  <h4>
                                    <span>Bored Ape Yacht Club</span>
                                    <svg
                                      width='20'
                                      height='20'
                                      viewBox='0 0 20 20'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'>
                                      <path
                                        d='M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z'
                                        fill='#FB4EF1'
                                      />
                                    </svg>
                                  </h4>
                                  <p>Floor: 34 ETH</p>
                                </div>
                              </div>
                              <div className='search-collection-block-right'>
                                <h4>Floor: 34 ETH</h4>
                                <p>24h</p>
                              </div>
                            </div>
                            <div className='search-collection-block-inner'>
                              <div className='search-collection-block-left'>
                                <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                                <div className='content-block'>
                                  <h4>
                                    <span>Bored Ape Yacht Club</span>
                                    <svg
                                      width='20'
                                      height='20'
                                      viewBox='0 0 20 20'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'>
                                      <path
                                        d='M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z'
                                        fill='#FB4EF1'
                                      />
                                    </svg>
                                  </h4>
                                  <p>Floor: 34 ETH</p>
                                </div>
                              </div>
                              <div className='search-collection-block-right'>
                                <h4>Floor: 34 ETH</h4>
                                <p>24h</p>
                              </div>
                            </div>
                            <div className='search-collection-block-inner'>
                              <div className='search-collection-block-left'>
                                <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                                <div className='content-block'>
                                  <h4>
                                    <span>Bored Ape Yacht Club</span>
                                    <svg
                                      width='20'
                                      height='20'
                                      viewBox='0 0 20 20'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'>
                                      <path
                                        d='M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z'
                                        fill='#FB4EF1'
                                      />
                                    </svg>
                                  </h4>
                                  <p>Floor: 34 ETH</p>
                                </div>
                              </div>
                              <div className='search-collection-block-right'>
                                <h4>Floor: 34 ETH</h4>
                                <p>24h</p>
                              </div>
                            </div>
                            <div className='search-collection-block-inner'>
                              <div className='search-collection-block-left'>
                                <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                                <div className='content-block'>
                                  <h4>
                                    <span>Bored Ape Yacht Club</span>
                                    <svg
                                      width='20'
                                      height='20'
                                      viewBox='0 0 20 20'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'>
                                      <path
                                        d='M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z'
                                        fill='#FB4EF1'
                                      />
                                    </svg>
                                  </h4>
                                  <p>Floor: 34 ETH</p>
                                </div>
                              </div>
                              <div className='search-collection-block-right'>
                                <h4>Floor: 34 ETH</h4>
                                <p>24h</p>
                              </div>
                            </div>
                            <div className='search-collection-block-inner'>
                              <div className='search-collection-block-left'>
                                <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                                <div className='content-block'>
                                  <h4>
                                    <span>Bored Ape Yacht Club</span>
                                    <svg
                                      width='20'
                                      height='20'
                                      viewBox='0 0 20 20'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'>
                                      <path
                                        d='M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z'
                                        fill='#FB4EF1'
                                      />
                                    </svg>
                                  </h4>
                                  <p>Floor: 34 ETH</p>
                                </div>
                              </div>
                              <div className='search-collection-block-right'>
                                <h4>Floor: 34 ETH</h4>
                                <p>24h</p>
                              </div>
                            </div>
                            <div className='search-collection-block-inner'>
                              <div className='search-collection-block-left'>
                                <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                                <div className='content-block'>
                                  <h4>
                                    <span>Bored Ape Yacht Club</span>
                                    <svg
                                      width='20'
                                      height='20'
                                      viewBox='0 0 20 20'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'>
                                      <path
                                        d='M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z'
                                        fill='#FB4EF1'
                                      />
                                    </svg>
                                  </h4>
                                  <p>Floor: 34 ETH</p>
                                </div>
                              </div>
                              <div className='search-collection-block-right'>
                                <h4>Floor: 34 ETH</h4>
                                <p>24h</p>
                              </div>
                            </div>
                            <div className='search-collection-block-inner'>
                              <div className='search-collection-block-left'>
                                <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                                <div className='content-block'>
                                  <h4>
                                    <span>Bored Ape Yacht Club</span>
                                    <svg
                                      width='20'
                                      height='20'
                                      viewBox='0 0 20 20'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'>
                                      <path
                                        d='M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z'
                                        fill='#FB4EF1'
                                      />
                                    </svg>
                                  </h4>
                                  <p>Floor: 34 ETH</p>
                                </div>
                              </div>
                              <div className='search-collection-block-right'>
                                <h4>Floor: 34 ETH</h4>
                                <p>24h</p>
                              </div>
                            </div>
                            <div className='load-more'>
                              <button>Load More</button>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <div className='filter-block-data-block-left-inner-public'>
                      <h2>Blockchain</h2>
                      <div className='checkbox-block-custom-filter'>
                        <div className='checkbox-filter-block'>
                          <input type='checkbox' id='check'></input>
                          <label for='check'>
                            <span>
                              <svg
                                width='8'
                                height='6'
                                viewBox='0 0 8 6'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M1.5 2.9987L3.375 4.66536L6.5 1.33203'
                                  stroke='black'
                                  stroke-width='1.66667'
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                />
                              </svg>
                            </span>
                            <div className='flex-block-check'>
                              <h4>PulseChain</h4>
                            </div>
                          </label>
                        </div>
                        <div className='checkbox-filter-block'>
                          <input type='checkbox' id='check'></input>
                          <label for='check'>
                            <span>
                              <svg
                                width='8'
                                height='6'
                                viewBox='0 0 8 6'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M1.5 2.9987L3.375 4.66536L6.5 1.33203'
                                  stroke='black'
                                  stroke-width='1.66667'
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                />
                              </svg>
                            </span>
                            <div className='flex-block-check'>
                              <h4>Base</h4>
                            </div>
                          </label>
                        </div>
                        <div className='checkbox-filter-block'>
                          <input type='checkbox' id='check'></input>
                          <label for='check'>
                            <span>
                              <svg
                                width='8'
                                height='6'
                                viewBox='0 0 8 6'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  d='M1.5 2.9987L3.375 4.66536L6.5 1.33203'
                                  stroke='black'
                                  stroke-width='1.66667'
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                />
                              </svg>
                            </span>
                            <div className='flex-block-check'>
                              <h4>Ethereum</h4>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='filter-block-data-block-right'>
                  <div className='cancel-btn-block-inner'>
                    <div className='cancel-btn-block'>
                      <Link href=''>
                        <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <g clip-path='url(#clip0_4659_9211)'>
                            <path
                              d='M2.92984 17.0698C1.97473 16.1474 1.21291 15.0439 0.688821 13.8239C0.164731 12.6038 -0.111131 11.2916 -0.122669 9.96385C-0.134207 8.63605 0.11881 7.31926 0.621618 6.09029C1.12443 4.86133 1.86696 3.74481 2.80589 2.80589C3.74481 1.86696 4.86133 1.12443 6.09029 0.621618C7.31926 0.11881 8.63605 -0.134207 9.96385 -0.122669C11.2916 -0.111131 12.6038 0.164731 13.8239 0.688821C15.0439 1.21291 16.1474 1.97473 17.0698 2.92984C18.8914 4.81586 19.8994 7.34188 19.8766 9.96385C19.8538 12.5858 18.8021 15.0939 16.948 16.948C15.0939 18.8021 12.5858 19.8538 9.96385 19.8766C7.34188 19.8994 4.81586 18.8914 2.92984 17.0698ZM11.3998 9.99984L14.2298 7.16984L12.8198 5.75984L9.99984 8.58984L7.16984 5.75984L5.75984 7.16984L8.58984 9.99984L5.75984 12.8298L7.16984 14.2398L9.99984 11.4098L12.8298 14.2398L14.2398 12.8298L11.4098 9.99984H11.3998Z'
                              fill='#FF0000'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_4659_9211'>
                              <rect width='20' height='20' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>canceled</span>
                      </Link>
                    </div>
                    <div className='profile-img-block'>
                      <img src='../../images/item-img.png' alt='item-img'></img>
                      <div className='text-img-block'>
                        <h3>Avidlines #14843</h3>
                        <p>
                          Avidlines club{' '}
                          <span>
                            <svg
                              width='20'
                              height='20'
                              viewBox='0 0 20 20'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M14.167 2.78259C15.4239 3.50831 16.4694 4.5497 17.2002 5.80368C17.9309 7.05765 18.3215 8.48074 18.3332 9.93204C18.3449 11.3833 17.9774 12.8126 17.267 14.0782C16.5566 15.3438 15.528 16.4019 14.283 17.1479C13.038 17.8938 11.6198 18.3016 10.1687 18.331C8.71768 18.3603 7.28412 18.0102 6.00995 17.3153C4.73579 16.6204 3.66522 15.6047 2.90421 14.3689C2.14321 13.133 1.71817 11.7199 1.67116 10.2693L1.66699 9.99926L1.67116 9.72926C1.71783 8.29008 2.13662 6.88756 2.88669 5.65842C3.63677 4.42928 4.69254 3.41547 5.95107 2.71583C7.2096 2.01619 8.62795 1.65459 10.0678 1.66629C11.5077 1.67799 12.92 2.06259 14.167 2.78259ZM13.0895 7.74343C12.946 7.59995 12.7551 7.51375 12.5526 7.50102C12.35 7.48828 12.1498 7.54988 11.9895 7.67426L11.9112 7.74343L9.16699 10.4868L8.08949 9.41009L8.01116 9.34093C7.85081 9.21664 7.65064 9.15511 7.44816 9.16789C7.24569 9.18066 7.05483 9.26686 6.91138 9.41031C6.76792 9.55377 6.68173 9.74462 6.66895 9.9471C6.65618 10.1496 6.71771 10.3497 6.84199 10.5101L6.91116 10.5884L8.57783 12.2551L8.65616 12.3243C8.8023 12.4376 8.98202 12.4992 9.16699 12.4992C9.35197 12.4992 9.53168 12.4376 9.67783 12.3243L9.75616 12.2551L13.0895 8.92176L13.1587 8.84343C13.283 8.68309 13.3446 8.48288 13.3319 8.28036C13.3192 8.07784 13.233 7.88692 13.0895 7.74343Z'
                                fill='#2BD7EF'
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className='puls-block-flex'>
                      <div className='puls-block-flex-inner'>
                        <img src='../../images/footer-icon-7.png' alt='icon'></img>
                        <h3>14</h3>
                      </div>
                      <p>From 2837474</p>
                    </div>
                    <div className='min-ago-block'>
                      <p>2 mins ago</p>
                    </div>
                  </div>
                  <div className='cancel-btn-block-inner'>
                    <div className='cancel-btn-block'>
                      <Link href='' className='offer-link'>
                        <svg width='23' height='20' viewBox='0 0 23 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M22.3215 9.601L11.9773 1.05575C11.5447 0.700621 10.9599 0.5009 10.35 0.5H2.3C1.02925 0.5 0 1.35025 0 2.4V9.05C0 9.57725 0.25875 10.0522 0.6785 10.3942L11.0285 18.9443C11.4425 19.2863 12.0175 19.5 12.65 19.5C13.2825 19.5 13.8632 19.2863 14.2772 18.9443L22.3273 12.2943C22.7413 11.9475 23 11.4725 23 10.95C23 10.4228 22.7412 9.94775 22.3215 9.601ZM4.025 5.25C3.0705 5.25 2.3 4.6135 2.3 3.825C2.3 3.0365 3.0705 2.4 4.025 2.4C4.9795 2.4 5.75 3.0365 5.75 3.825C5.75 4.6135 4.9795 5.25 4.025 5.25Z'
                            fill='#F51FC6'
                          />
                        </svg>

                        <span>Offers</span>
                      </Link>
                    </div>
                    <div className='profile-img-block'>
                      <img src='../../images/item-img.png' alt='item-img'></img>
                      <div className='text-img-block'>
                        <h3>Avidlines #14843</h3>
                        <p>
                          Avidlines club{' '}
                          <span>
                            <svg
                              width='20'
                              height='20'
                              viewBox='0 0 20 20'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M14.167 2.78259C15.4239 3.50831 16.4694 4.5497 17.2002 5.80368C17.9309 7.05765 18.3215 8.48074 18.3332 9.93204C18.3449 11.3833 17.9774 12.8126 17.267 14.0782C16.5566 15.3438 15.528 16.4019 14.283 17.1479C13.038 17.8938 11.6198 18.3016 10.1687 18.331C8.71768 18.3603 7.28412 18.0102 6.00995 17.3153C4.73579 16.6204 3.66522 15.6047 2.90421 14.3689C2.14321 13.133 1.71817 11.7199 1.67116 10.2693L1.66699 9.99926L1.67116 9.72926C1.71783 8.29008 2.13662 6.88756 2.88669 5.65842C3.63677 4.42928 4.69254 3.41547 5.95107 2.71583C7.2096 2.01619 8.62795 1.65459 10.0678 1.66629C11.5077 1.67799 12.92 2.06259 14.167 2.78259ZM13.0895 7.74343C12.946 7.59995 12.7551 7.51375 12.5526 7.50102C12.35 7.48828 12.1498 7.54988 11.9895 7.67426L11.9112 7.74343L9.16699 10.4868L8.08949 9.41009L8.01116 9.34093C7.85081 9.21664 7.65064 9.15511 7.44816 9.16789C7.24569 9.18066 7.05483 9.26686 6.91138 9.41031C6.76792 9.55377 6.68173 9.74462 6.66895 9.9471C6.65618 10.1496 6.71771 10.3497 6.84199 10.5101L6.91116 10.5884L8.57783 12.2551L8.65616 12.3243C8.8023 12.4376 8.98202 12.4992 9.16699 12.4992C9.35197 12.4992 9.53168 12.4376 9.67783 12.3243L9.75616 12.2551L13.0895 8.92176L13.1587 8.84343C13.283 8.68309 13.3446 8.48288 13.3319 8.28036C13.3192 8.07784 13.233 7.88692 13.0895 7.74343Z'
                                fill='#2BD7EF'
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className='puls-block-flex'>
                      <div className='puls-block-flex-inner'>
                        <img src='../../images/footer-icon-7.png' alt='icon'></img>
                        <h3>14</h3>
                      </div>
                      <p>From 2837474</p>
                    </div>
                    <div className='min-ago-block'>
                      <p>2 mins ago</p>
                    </div>
                  </div>
                  <div className='cancel-btn-block-inner'>
                    <div className='cancel-btn-block'>
                      <Link href='' className='mint-link'>
                        <svg width='24' height='23' viewBox='0 0 24 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <g clip-path='url(#clip0_5153_17252)'>
                            <path
                              d='M12 23C9.62663 23 7.30655 22.3255 5.33316 21.0619C3.35977 19.7983 1.8217 18.0022 0.913451 15.9009C0.00519943 13.7995 -0.232441 11.4872 0.230582 9.25647C0.693605 7.02569 1.83649 4.97658 3.51472 3.36828C5.19296 1.75997 7.33115 0.664704 9.65892 0.220974C11.9867 -0.222756 14.3995 0.00498279 16.5922 0.875391C18.7849 1.7458 20.6591 3.21978 21.9776 5.11095C23.2962 7.00211 24 9.22552 24 11.5C23.9966 14.549 22.7312 17.4721 20.4815 19.6281C18.2318 21.784 15.1815 22.9967 12 23ZM12 1.91667C10.0222 1.91667 8.0888 2.47872 6.4443 3.53175C4.79981 4.58478 3.51809 6.0815 2.76121 7.83262C2.00433 9.58375 1.8063 11.5106 2.19215 13.3696C2.57801 15.2286 3.53041 16.9362 4.92894 18.2764C6.32746 19.6167 8.10929 20.5294 10.0491 20.8992C11.9889 21.269 13.9996 21.0792 15.8268 20.3539C17.6541 19.6285 19.2159 18.4002 20.3147 16.8242C21.4135 15.2482 22 13.3954 22 11.5C21.9971 8.9592 20.9426 6.52327 19.0679 4.72665C17.1931 2.93003 14.6513 1.91946 12 1.91667Z'
                              fill='#9E00FF'
                            />
                            <path
                              d='M12 18.2077C11.7348 18.2077 11.4804 18.1067 11.2929 17.927C11.1054 17.7473 11 17.5035 11 17.2493V5.74935C11 5.49518 11.1054 5.25143 11.2929 5.07171C11.4804 4.89198 11.7348 4.79102 12 4.79102C12.2652 4.79102 12.5196 4.89198 12.7071 5.07171C12.8946 5.25143 13 5.49518 13 5.74935V17.2493C13 17.5035 12.8946 17.7473 12.7071 17.927C12.5196 18.1067 12.2652 18.2077 12 18.2077Z'
                              fill='#9E00FF'
                            />
                            <path
                              d='M18 12.4577H6C5.73478 12.4577 5.48043 12.3567 5.29289 12.177C5.10536 11.9973 5 11.7535 5 11.4993C5 11.2452 5.10536 11.0014 5.29289 10.8217C5.48043 10.642 5.73478 10.541 6 10.541H18C18.2652 10.541 18.5196 10.642 18.7071 10.8217C18.8946 11.0014 19 11.2452 19 11.4993C19 11.7535 18.8946 11.9973 18.7071 12.177C18.5196 12.3567 18.2652 12.4577 18 12.4577Z'
                              fill='#9E00FF'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_5153_17252'>
                              <rect width='24' height='23' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>

                        <span>Mints</span>
                      </Link>
                    </div>
                    <div className='profile-img-block'>
                      <img src='../../images/item-img.png' alt='item-img'></img>
                      <div className='text-img-block'>
                        <h3>Avidlines #14843</h3>
                        <p>
                          Avidlines club{' '}
                          <span>
                            <svg
                              width='20'
                              height='20'
                              viewBox='0 0 20 20'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M14.167 2.78259C15.4239 3.50831 16.4694 4.5497 17.2002 5.80368C17.9309 7.05765 18.3215 8.48074 18.3332 9.93204C18.3449 11.3833 17.9774 12.8126 17.267 14.0782C16.5566 15.3438 15.528 16.4019 14.283 17.1479C13.038 17.8938 11.6198 18.3016 10.1687 18.331C8.71768 18.3603 7.28412 18.0102 6.00995 17.3153C4.73579 16.6204 3.66522 15.6047 2.90421 14.3689C2.14321 13.133 1.71817 11.7199 1.67116 10.2693L1.66699 9.99926L1.67116 9.72926C1.71783 8.29008 2.13662 6.88756 2.88669 5.65842C3.63677 4.42928 4.69254 3.41547 5.95107 2.71583C7.2096 2.01619 8.62795 1.65459 10.0678 1.66629C11.5077 1.67799 12.92 2.06259 14.167 2.78259ZM13.0895 7.74343C12.946 7.59995 12.7551 7.51375 12.5526 7.50102C12.35 7.48828 12.1498 7.54988 11.9895 7.67426L11.9112 7.74343L9.16699 10.4868L8.08949 9.41009L8.01116 9.34093C7.85081 9.21664 7.65064 9.15511 7.44816 9.16789C7.24569 9.18066 7.05483 9.26686 6.91138 9.41031C6.76792 9.55377 6.68173 9.74462 6.66895 9.9471C6.65618 10.1496 6.71771 10.3497 6.84199 10.5101L6.91116 10.5884L8.57783 12.2551L8.65616 12.3243C8.8023 12.4376 8.98202 12.4992 9.16699 12.4992C9.35197 12.4992 9.53168 12.4376 9.67783 12.3243L9.75616 12.2551L13.0895 8.92176L13.1587 8.84343C13.283 8.68309 13.3446 8.48288 13.3319 8.28036C13.3192 8.07784 13.233 7.88692 13.0895 7.74343Z'
                                fill='#2BD7EF'
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className='puls-block-flex'>
                      <div className='puls-block-flex-inner'>
                        <img src='../../images/footer-icon-7.png' alt='icon'></img>
                        <h3>14</h3>
                      </div>
                      <p>From 2837474</p>
                    </div>
                    <div className='min-ago-block'>
                      <p>2 mins ago</p>
                    </div>
                  </div>
                  <div className='cancel-btn-block-inner'>
                    <div className='cancel-btn-block'>
                      <Link href='' className='transfer-link'>
                        <svg width='25' height='19' viewBox='0 0 25 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M18.089 0.577595C17.9722 0.461893 17.8237 0.38327 17.6624 0.351585C17.501 0.3199 17.3339 0.336564 17.182 0.399488C17.0301 0.462412 16.9001 0.568794 16.8084 0.705291C16.7167 0.841788 16.6673 1.00232 16.6665 1.16676V3.66676H10.8332C10.6122 3.66676 10.4002 3.75456 10.2439 3.91084C10.0876 4.06712 9.99984 4.27908 9.99984 4.50009C9.99984 4.72111 10.0876 4.93307 10.2439 5.08935C10.4002 5.24563 10.6122 5.33343 10.8332 5.33343H17.4998C17.7209 5.33343 17.9328 5.24563 18.0891 5.08935C18.2454 4.93307 18.3332 4.72111 18.3332 4.50009V3.17843L22.1548 7.00009L18.3332 10.8218V9.50009C18.3332 9.27908 18.2454 9.06712 18.0891 8.91084C17.9328 8.75456 17.7209 8.66676 17.4998 8.66676H8.33318V6.16676C8.33235 6.00232 8.283 5.84179 8.19129 5.70529C8.09959 5.56879 7.96963 5.46241 7.8177 5.39949C7.66578 5.33656 7.49865 5.3199 7.3373 5.35158C7.17594 5.38327 7.02753 5.46189 6.91068 5.57759L1.07734 11.4109C0.999887 11.4882 0.938439 11.5801 0.896514 11.6812C0.854588 11.7823 0.833008 11.8906 0.833008 12.0001C0.833008 12.1095 0.854588 12.2179 0.896514 12.319C0.938439 12.4201 0.999887 12.5119 1.07734 12.5893L6.91068 18.4226C7.02722 18.5391 7.17569 18.6184 7.33732 18.6506C7.49894 18.6827 7.66647 18.6662 7.81872 18.6032C7.97097 18.5401 8.10111 18.4333 8.19268 18.2963C8.28425 18.1593 8.33314 17.9982 8.33318 17.8334V15.3334H14.1665C14.3875 15.3334 14.5995 15.2456 14.7558 15.0894C14.912 14.9331 14.9998 14.7211 14.9998 14.5001C14.9998 14.2791 14.912 14.0671 14.7558 13.9108C14.5995 13.7546 14.3875 13.6668 14.1665 13.6668H7.49984C7.27883 13.6668 7.06687 13.7546 6.91059 13.9108C6.75431 14.0671 6.66651 14.2791 6.66651 14.5001V15.8218L2.84484 12.0001L6.66651 8.17843V9.50009C6.66651 9.72111 6.75431 9.93307 6.91059 10.0893C7.06687 10.2456 7.27883 10.3334 7.49984 10.3334H16.6665V12.8334C16.6665 12.9982 16.7154 13.1593 16.807 13.2963C16.8986 13.4333 17.0287 13.5401 17.181 13.6032C17.3332 13.6662 17.5007 13.6827 17.6624 13.6506C17.824 13.6184 17.9725 13.5391 18.089 13.4226L23.9223 7.58926C23.9998 7.51194 24.0612 7.4201 24.1032 7.31901C24.1451 7.21791 24.1667 7.10954 24.1667 7.00009C24.1667 6.89065 24.1451 6.78228 24.1032 6.68118C24.0612 6.58009 23.9998 6.48825 23.9223 6.41093L18.089 0.577595Z'
                            fill='#F5841F'
                          />
                        </svg>

                        <span>Transfer</span>
                      </Link>
                    </div>
                    <div className='profile-img-block'>
                      <img src='../../images/item-img.png' alt='item-img'></img>
                      <div className='text-img-block'>
                        <h3>Avidlines #14843</h3>
                        <p>
                          Avidlines club{' '}
                          <span>
                            <svg
                              width='20'
                              height='20'
                              viewBox='0 0 20 20'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M14.167 2.78259C15.4239 3.50831 16.4694 4.5497 17.2002 5.80368C17.9309 7.05765 18.3215 8.48074 18.3332 9.93204C18.3449 11.3833 17.9774 12.8126 17.267 14.0782C16.5566 15.3438 15.528 16.4019 14.283 17.1479C13.038 17.8938 11.6198 18.3016 10.1687 18.331C8.71768 18.3603 7.28412 18.0102 6.00995 17.3153C4.73579 16.6204 3.66522 15.6047 2.90421 14.3689C2.14321 13.133 1.71817 11.7199 1.67116 10.2693L1.66699 9.99926L1.67116 9.72926C1.71783 8.29008 2.13662 6.88756 2.88669 5.65842C3.63677 4.42928 4.69254 3.41547 5.95107 2.71583C7.2096 2.01619 8.62795 1.65459 10.0678 1.66629C11.5077 1.67799 12.92 2.06259 14.167 2.78259ZM13.0895 7.74343C12.946 7.59995 12.7551 7.51375 12.5526 7.50102C12.35 7.48828 12.1498 7.54988 11.9895 7.67426L11.9112 7.74343L9.16699 10.4868L8.08949 9.41009L8.01116 9.34093C7.85081 9.21664 7.65064 9.15511 7.44816 9.16789C7.24569 9.18066 7.05483 9.26686 6.91138 9.41031C6.76792 9.55377 6.68173 9.74462 6.66895 9.9471C6.65618 10.1496 6.71771 10.3497 6.84199 10.5101L6.91116 10.5884L8.57783 12.2551L8.65616 12.3243C8.8023 12.4376 8.98202 12.4992 9.16699 12.4992C9.35197 12.4992 9.53168 12.4376 9.67783 12.3243L9.75616 12.2551L13.0895 8.92176L13.1587 8.84343C13.283 8.68309 13.3446 8.48288 13.3319 8.28036C13.3192 8.07784 13.233 7.88692 13.0895 7.74343Z'
                                fill='#2BD7EF'
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className='puls-block-flex'>
                      <div className='puls-block-flex-inner'>
                        <img src='../../images/footer-icon-7.png' alt='icon'></img>
                        <h3>14</h3>
                      </div>
                      <p>From 2837474</p>
                    </div>
                    <div className='min-ago-block'>
                      <p>2 mins ago</p>
                    </div>
                  </div>
                  <div className='cancel-btn-block-inner'>
                    <div className='cancel-btn-block'>
                      <Link href='' className='sales-link'>
                        <svg width='23' height='20' viewBox='0 0 23 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M15.8619 12.421H15.4531V14.2179H15.8619C16.1135 14.2179 16.2617 14.086 16.2617 13.8204V12.8086C16.2617 12.543 16.1135 12.421 15.8619 12.421ZM10.1052 12.418C9.85361 12.418 9.70312 12.5391 9.70312 12.8086V13.8438C9.70312 14.1133 9.85361 14.2344 10.1052 14.2344C10.3567 14.2344 10.5117 14.1133 10.5117 13.8438V12.8086C10.5117 12.539 10.3568 12.418 10.1052 12.418Z'
                            fill='#0500FF'
                          />
                          <path
                            d='M19.3838 9.1402H18.7078L12.8827 4.40106C12.9927 4.21371 13.05 4.00633 13.0498 3.79598C13.0495 3.43856 12.886 3.09587 12.5951 2.8433C12.3043 2.59074 11.91 2.44898 11.499 2.44922C11.0879 2.44946 10.6938 2.59167 10.4034 2.84457C10.1129 3.09748 9.94992 3.44035 9.95019 3.79777C9.95003 4.00745 10.0073 4.21415 10.1173 4.40074L4.29224 9.1402H3.61621C2.45202 9.1402 1.48242 9.97356 1.48242 10.9859V15.7125C1.48242 16.7248 2.45202 17.5386 3.61621 17.5386H19.3838C19.6592 17.5391 19.932 17.4921 20.1864 17.4003C20.4408 17.3086 20.6717 17.1739 20.866 17.0042C21.0602 16.8344 21.2138 16.6328 21.3179 16.4111C21.4221 16.1894 21.4746 15.9519 21.4727 15.7125V10.9859C21.4727 9.97356 20.548 9.1402 19.3838 9.1402ZM7.11562 14.7818C6.52715 14.7818 6.03301 14.5318 6.03301 14.274C6.03301 14.1412 6.16777 13.9459 6.33848 13.9459C6.54961 13.9459 6.68437 14.2349 7.10215 14.2349C7.30879 14.2349 7.53789 14.1646 7.53789 13.9771C7.53789 13.5045 6.11387 13.5865 6.11387 12.6724C6.11387 12.0865 6.70234 11.8638 7.26387 11.8638C7.50195 11.8638 8.15781 11.9029 8.15781 12.2076C8.15781 12.313 8.07695 12.5279 7.8793 12.5279C7.71758 12.5279 7.63223 12.3795 7.26387 12.3795C6.94492 12.3795 6.81465 12.4927 6.81465 12.6138C6.81465 13.0045 8.23867 12.9302 8.23867 13.9146C8.23867 14.4771 7.76699 14.7818 7.11562 14.7818ZM11.1855 13.8443C11.1855 14.5162 10.7027 14.7662 10.0827 14.7662C9.46275 14.7662 8.98437 14.5162 8.98437 13.8443V12.8091C8.98437 12.1373 9.46275 11.8873 10.0827 11.8873C10.7027 11.8873 11.1855 12.1373 11.1855 12.8091V13.8443ZM13.827 14.7261H12.4074C12.2547 14.7261 12.084 14.6802 12.084 14.5552V12.0709C12.084 11.942 12.2682 11.8873 12.4434 11.8873C12.6186 11.8873 12.8027 11.942 12.8027 12.0709V14.2183H13.827C13.9617 14.2183 14.0291 14.3394 14.0291 14.4722C14.0291 14.605 13.9617 14.7261 13.827 14.7261ZM16.9805 13.8208C16.9805 14.4927 16.4818 14.7261 15.8619 14.7261H15.0668C14.8826 14.7261 14.7793 14.6568 14.7793 14.5591V12.0709C14.7793 11.9732 14.8826 11.8747 15.0668 11.8747H15.8619C16.4818 11.8747 16.9805 12.1373 16.9805 12.8092V13.8208ZM5.21224 9.1402L10.5106 4.82996C10.7876 5.03275 11.1382 5.14386 11.5003 5.14364C11.8623 5.14342 12.2127 5.03188 12.4894 4.82875L17.7878 9.1402H5.21224Z'
                            fill='#0500FF'
                          />
                        </svg>

                        <span>Sales</span>
                      </Link>
                    </div>
                    <div className='profile-img-block'>
                      <img src='../../images/item-img.png' alt='item-img'></img>
                      <div className='text-img-block'>
                        <h3>Avidlines #14843</h3>
                        <p>
                          Avidlines club{' '}
                          <span>
                            <svg
                              width='20'
                              height='20'
                              viewBox='0 0 20 20'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M14.167 2.78259C15.4239 3.50831 16.4694 4.5497 17.2002 5.80368C17.9309 7.05765 18.3215 8.48074 18.3332 9.93204C18.3449 11.3833 17.9774 12.8126 17.267 14.0782C16.5566 15.3438 15.528 16.4019 14.283 17.1479C13.038 17.8938 11.6198 18.3016 10.1687 18.331C8.71768 18.3603 7.28412 18.0102 6.00995 17.3153C4.73579 16.6204 3.66522 15.6047 2.90421 14.3689C2.14321 13.133 1.71817 11.7199 1.67116 10.2693L1.66699 9.99926L1.67116 9.72926C1.71783 8.29008 2.13662 6.88756 2.88669 5.65842C3.63677 4.42928 4.69254 3.41547 5.95107 2.71583C7.2096 2.01619 8.62795 1.65459 10.0678 1.66629C11.5077 1.67799 12.92 2.06259 14.167 2.78259ZM13.0895 7.74343C12.946 7.59995 12.7551 7.51375 12.5526 7.50102C12.35 7.48828 12.1498 7.54988 11.9895 7.67426L11.9112 7.74343L9.16699 10.4868L8.08949 9.41009L8.01116 9.34093C7.85081 9.21664 7.65064 9.15511 7.44816 9.16789C7.24569 9.18066 7.05483 9.26686 6.91138 9.41031C6.76792 9.55377 6.68173 9.74462 6.66895 9.9471C6.65618 10.1496 6.71771 10.3497 6.84199 10.5101L6.91116 10.5884L8.57783 12.2551L8.65616 12.3243C8.8023 12.4376 8.98202 12.4992 9.16699 12.4992C9.35197 12.4992 9.53168 12.4376 9.67783 12.3243L9.75616 12.2551L13.0895 8.92176L13.1587 8.84343C13.283 8.68309 13.3446 8.48288 13.3319 8.28036C13.3192 8.07784 13.233 7.88692 13.0895 7.74343Z'
                                fill='#2BD7EF'
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className='puls-block-flex'>
                      <div className='puls-block-flex-inner'>
                        <img src='../../images/footer-icon-7.png' alt='icon'></img>
                        <h3>14</h3>
                      </div>
                      <p>From 2837474</p>
                    </div>
                    <div className='min-ago-block'>
                      <p>2 mins ago</p>
                    </div>
                  </div>
                  <div className='cancel-btn-block-inner'>
                    <div className='cancel-btn-block'>
                      <Link href='' className='listing-link'>
                        <svg width='20' height='18' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <g clip-path='url(#clip0_5153_17263)'>
                            <path
                              d='M2.0625 4.53477C3.15844 4.53477 4.04688 3.73517 4.04688 2.74883C4.04688 1.76248 3.15844 0.962891 2.0625 0.962891C0.96656 0.962891 0.078125 1.76248 0.078125 2.74883C0.078125 3.73517 0.96656 4.53477 2.0625 4.53477Z'
                              fill='#04C700'
                            />
                            <path
                              d='M8.01563 4.53477H17.9375C19.0352 4.53477 19.9219 3.73672 19.9219 2.74883C19.9219 1.76094 19.0352 0.962891 17.9375 0.962891H8.01563C6.91797 0.962891 6.03125 1.76094 6.03125 2.74883C6.03125 3.73672 6.91797 4.53477 8.01563 4.53477Z'
                              fill='#04C700'
                            />
                            <path
                              d='M2.0625 10.7867C3.15844 10.7867 4.04688 9.98713 4.04688 9.00078C4.04688 8.01444 3.15844 7.21484 2.0625 7.21484C0.96656 7.21484 0.078125 8.01444 0.078125 9.00078C0.078125 9.98713 0.96656 10.7867 2.0625 10.7867Z'
                              fill='#04C700'
                            />
                            <path
                              d='M17.9375 7.21484H8.01563C6.91797 7.21484 6.03125 8.01289 6.03125 9.00078C6.03125 9.98867 6.91797 10.7867 8.01563 10.7867H17.9375C19.0352 10.7867 19.9219 9.98867 19.9219 9.00078C19.9219 8.01289 19.0352 7.21484 17.9375 7.21484Z'
                              fill='#04C700'
                            />
                            <path
                              d='M2.0625 17.0367C3.15844 17.0367 4.04688 16.2371 4.04688 15.2508C4.04688 14.2644 3.15844 13.4648 2.0625 13.4648C0.96656 13.4648 0.078125 14.2644 0.078125 15.2508C0.078125 16.2371 0.96656 17.0367 2.0625 17.0367Z'
                              fill='#04C700'
                            />
                            <path
                              d='M17.9375 13.4648H8.01563C6.91797 13.4648 6.03125 14.2629 6.03125 15.2508C6.03125 16.2387 6.91797 17.0367 8.01563 17.0367H17.9375C19.0352 17.0367 19.9219 16.2387 19.9219 15.2508C19.9219 14.2629 19.0352 13.4648 17.9375 13.4648Z'
                              fill='#04C700'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_5153_17263'>
                              <rect width='20' height='18' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>

                        <span>Listing</span>
                      </Link>
                    </div>
                    <div className='profile-img-block'>
                      <img src='../../images/item-img.png' alt='item-img'></img>
                      <div className='text-img-block'>
                        <h3>Avidlines #14843</h3>
                        <p>
                          Avidlines club{' '}
                          <span>
                            <svg
                              width='20'
                              height='20'
                              viewBox='0 0 20 20'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M14.167 2.78259C15.4239 3.50831 16.4694 4.5497 17.2002 5.80368C17.9309 7.05765 18.3215 8.48074 18.3332 9.93204C18.3449 11.3833 17.9774 12.8126 17.267 14.0782C16.5566 15.3438 15.528 16.4019 14.283 17.1479C13.038 17.8938 11.6198 18.3016 10.1687 18.331C8.71768 18.3603 7.28412 18.0102 6.00995 17.3153C4.73579 16.6204 3.66522 15.6047 2.90421 14.3689C2.14321 13.133 1.71817 11.7199 1.67116 10.2693L1.66699 9.99926L1.67116 9.72926C1.71783 8.29008 2.13662 6.88756 2.88669 5.65842C3.63677 4.42928 4.69254 3.41547 5.95107 2.71583C7.2096 2.01619 8.62795 1.65459 10.0678 1.66629C11.5077 1.67799 12.92 2.06259 14.167 2.78259ZM13.0895 7.74343C12.946 7.59995 12.7551 7.51375 12.5526 7.50102C12.35 7.48828 12.1498 7.54988 11.9895 7.67426L11.9112 7.74343L9.16699 10.4868L8.08949 9.41009L8.01116 9.34093C7.85081 9.21664 7.65064 9.15511 7.44816 9.16789C7.24569 9.18066 7.05483 9.26686 6.91138 9.41031C6.76792 9.55377 6.68173 9.74462 6.66895 9.9471C6.65618 10.1496 6.71771 10.3497 6.84199 10.5101L6.91116 10.5884L8.57783 12.2551L8.65616 12.3243C8.8023 12.4376 8.98202 12.4992 9.16699 12.4992C9.35197 12.4992 9.53168 12.4376 9.67783 12.3243L9.75616 12.2551L13.0895 8.92176L13.1587 8.84343C13.283 8.68309 13.3446 8.48288 13.3319 8.28036C13.3192 8.07784 13.233 7.88692 13.0895 7.74343Z'
                                fill='#2BD7EF'
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className='puls-block-flex'>
                      <div className='puls-block-flex-inner'>
                        <img src='../../images/footer-icon-7.png' alt='icon'></img>
                        <h3>14</h3>
                      </div>
                      <p>From 2837474</p>
                    </div>
                    <div className='min-ago-block'>
                      <p>2 mins ago</p>
                    </div>
                  </div>
                  <div className='cancel-btn-block-inner'>
                    <div className='cancel-btn-block'>
                      <Link href='' className='purchase-link'>
                        <svg width='19' height='18' viewBox='0 0 19 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <g clip-path='url(#clip0_5153_17308)'>
                            <path
                              d='M3.09701 1.68227C2.75682 1.19903 2.29641 0.802465 1.75634 0.527496C1.21627 0.252527 0.613116 0.107596 0 0.105469L0 1.18547C0.653624 1.18732 1.28248 1.42257 1.76109 1.8443C2.23971 2.26602 2.53288 2.84319 2.58212 3.46066L3.173 11.3357C3.23068 11.9759 3.53915 12.5726 4.03773 13.0083C4.53632 13.444 5.18894 13.6872 5.86723 13.6901H16.3799V12.6101H5.86722C5.47592 12.6088 5.09922 12.4691 4.811 12.2184C4.52278 11.9676 4.34383 11.6239 4.30922 11.2547L4.2807 10.8839H13.6173C14.5686 10.885 15.4928 10.5843 16.2425 10.0296C16.9922 9.47499 17.5242 8.69843 17.7536 7.82386L19 2.57686L3.09701 1.68227ZM9.85342 8.35487L7.58102 6.20207L8.38662 5.43707L9.85342 6.82667L12.5628 4.26167L13.3684 5.02487L9.85342 8.35487ZM6.57489 14.5507C6.2257 14.5507 5.88435 14.6488 5.59401 14.8326C5.30368 15.0164 5.07739 15.2777 4.94378 15.5833C4.81017 15.889 4.77522 16.2253 4.84336 16.5497C4.91151 16.8742 5.07968 17.1722 5.32661 17.4061C5.57354 17.64 5.88815 17.7993 6.23064 17.8639C6.57313 17.9284 6.92812 17.8952 7.25073 17.7686C7.57334 17.642 7.84907 17.4276 8.04306 17.1525C8.23705 16.8775 8.34058 16.5541 8.34056 16.2232C8.34002 15.7798 8.15381 15.3546 7.8228 15.0411C7.49178 14.7275 7.04299 14.5512 6.57489 14.5507ZM6.57489 16.816C6.45117 16.816 6.33024 16.7812 6.22738 16.7161C6.12452 16.6509 6.04436 16.5584 5.99702 16.4501C5.94968 16.3418 5.9373 16.2227 5.96145 16.1077C5.98559 15.9927 6.04516 15.8872 6.13265 15.8043C6.22013 15.7214 6.33158 15.665 6.45292 15.6421C6.57426 15.6192 6.70004 15.6309 6.81434 15.6758C6.92865 15.7206 7.02635 15.7966 7.09509 15.894C7.16384 15.9915 7.20054 16.106 7.20056 16.2232C7.20037 16.3804 7.13439 16.5311 7.0171 16.6422C6.8998 16.7533 6.74077 16.8158 6.57489 16.816ZM13.6088 14.5507C13.2596 14.5507 12.9182 14.6488 12.6279 14.8326C12.3376 15.0164 12.1113 15.2777 11.9777 15.5833C11.8441 15.889 11.8091 16.2253 11.8773 16.5497C11.9454 16.8742 12.1136 17.1722 12.3605 17.4061C12.6074 17.64 12.922 17.7993 13.2645 17.8639C13.607 17.9284 13.962 17.8952 14.2846 17.7686C14.6072 17.642 14.883 17.4276 15.077 17.1525C15.2709 16.8775 15.3745 16.5541 15.3745 16.2232C15.374 15.7798 15.1878 15.3546 14.8567 15.041C14.5257 14.7275 14.0769 14.5511 13.6088 14.5507ZM13.6088 16.816C13.4851 16.816 13.3641 16.7812 13.2613 16.7161C13.1584 16.6509 13.0783 16.5584 13.0309 16.4501C12.9836 16.3418 12.9712 16.2227 12.9953 16.1077C13.0195 15.9927 13.0791 15.8872 13.1665 15.8043C13.254 15.7214 13.3655 15.665 13.4868 15.6421C13.6082 15.6192 13.7339 15.6309 13.8482 15.6758C13.9625 15.7206 14.0602 15.7966 14.129 15.894C14.1977 15.9915 14.2344 16.106 14.2345 16.2232C14.2343 16.3804 14.1683 16.5311 14.051 16.6422C13.9337 16.7533 13.7747 16.8158 13.6088 16.816Z'
                              fill='#00EAF9'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_5153_17308'>
                              <rect width='19' height='18' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>

                        <span>Purchase</span>
                      </Link>
                    </div>
                    <div className='profile-img-block'>
                      <img src='../../images/item-img.png' alt='item-img'></img>
                      <div className='text-img-block'>
                        <h3>Avidlines #14843</h3>
                        <p>
                          Avidlines club{' '}
                          <span>
                            <svg
                              width='20'
                              height='20'
                              viewBox='0 0 20 20'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path
                                d='M14.167 2.78259C15.4239 3.50831 16.4694 4.5497 17.2002 5.80368C17.9309 7.05765 18.3215 8.48074 18.3332 9.93204C18.3449 11.3833 17.9774 12.8126 17.267 14.0782C16.5566 15.3438 15.528 16.4019 14.283 17.1479C13.038 17.8938 11.6198 18.3016 10.1687 18.331C8.71768 18.3603 7.28412 18.0102 6.00995 17.3153C4.73579 16.6204 3.66522 15.6047 2.90421 14.3689C2.14321 13.133 1.71817 11.7199 1.67116 10.2693L1.66699 9.99926L1.67116 9.72926C1.71783 8.29008 2.13662 6.88756 2.88669 5.65842C3.63677 4.42928 4.69254 3.41547 5.95107 2.71583C7.2096 2.01619 8.62795 1.65459 10.0678 1.66629C11.5077 1.67799 12.92 2.06259 14.167 2.78259ZM13.0895 7.74343C12.946 7.59995 12.7551 7.51375 12.5526 7.50102C12.35 7.48828 12.1498 7.54988 11.9895 7.67426L11.9112 7.74343L9.16699 10.4868L8.08949 9.41009L8.01116 9.34093C7.85081 9.21664 7.65064 9.15511 7.44816 9.16789C7.24569 9.18066 7.05483 9.26686 6.91138 9.41031C6.76792 9.55377 6.68173 9.74462 6.66895 9.9471C6.65618 10.1496 6.71771 10.3497 6.84199 10.5101L6.91116 10.5884L8.57783 12.2551L8.65616 12.3243C8.8023 12.4376 8.98202 12.4992 9.16699 12.4992C9.35197 12.4992 9.53168 12.4376 9.67783 12.3243L9.75616 12.2551L13.0895 8.92176L13.1587 8.84343C13.283 8.68309 13.3446 8.48288 13.3319 8.28036C13.3192 8.07784 13.233 7.88692 13.0895 7.74343Z'
                                fill='#2BD7EF'
                              />
                            </svg>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className='puls-block-flex'>
                      <div className='puls-block-flex-inner'>
                        <img src='../../images/footer-icon-7.png' alt='icon'></img>
                        <h3>14</h3>
                      </div>
                      <p>From 2837474</p>
                    </div>
                    <div className='min-ago-block'>
                      <p>2 mins ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </CommonPageBlockPad>
    );
};

export default profilepage;
