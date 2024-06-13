/** @format */

import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import { CommonProductBLock, Button } from "@/styles/pages/main.style";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import React, { useState } from "react";
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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <CommonPageBlockPad className='no-container-padding dark-mode-body'>
        <div className='auction-top-block-main'>
          <Container>
            <div className='auction-top-block'>
              <div className='auction-top-block-left'>
                <div className='auction-graphics'>
                  <img src={'../../images/auction-grphics.png'} alt='img'></img>
                </div>
                <div className='auction-top-block-left-inner'>
                  <h2>
                    Today’s Top <br></br> Auction
                  </h2>
                  <div className='btn-group-main'>
                    <Button>Explore Auctions</Button>
                    <Button isBorderBtn={true}>Create Auction</Button>
                  </div>
                </div>
              </div>
              <div className='auction-top-block-right'>
                <div className='auction-graphics'>
                  <img src={'../../images/img-shape-auction.png'} alt='img'></img>
                </div>
                <div className='auction-top-block-right-inner'>
                  <div className='auction-top-block-frame'>
                    <img src={'../../images/product-img-block.png'} alt='product-img'></img>
                    <div className='auction-bid'>
                      <p>Current bid</p>
                      <h4>1.56 wETH</h4>
                    </div>
                    <div className='bid-profile-block'>
                      <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                      <div className='bid-profile-block-text'>
                        <h3>“The Monkey sad ”</h3>
                        <p>@SolvadorDali</p>
                      </div>
                    </div>
                  </div>
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
              </div>
            </div>
          </Container>
        </div>
        <div className='graphics-inner-diff'>
          {/* <img src={'../../images/shape-graphics-auction.png'} alt='graphics-img'></img> */}
        </div>
        <div className='graphics-inner-shape-two'>
          {/* <img src={'../../images/graphics-block-inner-2.png'} alt='graphics-img'></img> */}
        </div>
        <div className='graphics-inner-shape-three'>
          {/* <img src={'../../images/graphics-block-inner-3.png'} alt='graphics-img'></img> */}
        </div>
        <div className='explore-block-main'>
          <div className='common-title-page text-center-space'>
            <h1>Auctions</h1>
          </div>
          <div className='filter-block-data-block'>
            <div className='filter-block-data-block-left'>
              <div className='filter-block-data-block-left-inner'>
                <Accordion defaultActiveKey='0'>
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>Search</Accordion.Header>
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
                    <Accordion.Header>Type</Accordion.Header>
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
                    <Accordion.Header>Price</Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='5'>
                    <Accordion.Header>Chains</Accordion.Header>
                    <Accordion.Body>
                      <div className='radio-last'>
                        <div className='radio-filter-block'>
                          <input type='radio' id='test1' name='radio-group' checked></input>
                          <label for='test1'>
                            <img src={'../../images/ethe-icon.svg'} alt='check-icon'></img>
                            <h4>Ethereum (ETH)</h4>
                          </label>
                        </div>
                        <div className='radio-filter-block'>
                          <input type='radio' id='test2' name='radio-group'></input>
                          <label for='test2'>
                            <img src={'../../images/ethe-icon.svg'} alt='check-icon'></img>
                            <h4>Ethereum (ETH)</h4>
                          </label>
                        </div>
                        <div className='radio-filter-block'>
                          <input type='radio' id='test3' name='radio-group'></input>
                          <label for='test3'>
                            <img src={'../../images/filter-icon.svg'} alt='check-icon'></img>
                            <h4>PulseChain (PLS)</h4>
                          </label>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div className='filter-block-data-block-right'>
              <div className='top-showing-result-block'>
                <p>Showing 1–9 of 144 results</p>
                <div className='select-block-explore'>
                  <div className='form-group'>
                    <Select
                      name='colors'
                      options={options}
                      className='TX-select2-wrapper'
                      classNamePrefix='TX-fix-select'
                    />
                  </div>
                  <div className='form-group'>
                    <Select
                      name='colors'
                      options={options}
                      className='TX-select2-wrapper'
                      classNamePrefix='TX-fix-select'
                    />
                  </div>
                </div>
              </div>
              <CommonProductBLock>
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
                      <div className='product-img-time'>
                        <img src={'../../images/product-img-block.png'} alt='product-img'></img>
                      </div>
                      <div className='product-details-profile'>
                        <div className='product-profile'>
                          <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                          <div className='product-profile-details'>
                            <h5 className='diff-padding-block'>Hakunamatata</h5>
                            <p>Creator</p>
                          </div>
                        </div>
                        <div className='bid-common'>
                          <p>Current bid</p>
                          <h5>
                            <img src={'../../images/ethe-icon-blue.svg'} alt='ethe-img'></img>
                            <span>5 ETH</span>
                          </h5>
                        </div>
                      </div>
                      <div className='btn-product diff-padding'>
                        <button>
                          <svg
                            width='15'
                            height='15'
                            viewBox='0 0 15 15'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z'
                              fill='#565660'
                            />
                          </svg>
                          <span>Place Bid</span>
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
                      <div className='product-img-time'>
                        <img src={'../../images/product-img-block.png'} alt='product-img'></img>
                      </div>
                      <div className='product-details-profile'>
                        <div className='product-profile'>
                          <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                          <div className='product-profile-details'>
                            <h5 className='diff-padding-block'>Hakunamatata</h5>
                            <p>Creator</p>
                          </div>
                        </div>
                        <div className='bid-common'>
                          <p>Current bid</p>
                          <h5>
                            <img src={'../../images/ethe-icon-blue.svg'} alt='ethe-img'></img>
                            <span>5 ETH</span>
                          </h5>
                        </div>
                      </div>
                      <div className='btn-product diff-padding'>
                        <button>
                          <svg
                            width='15'
                            height='15'
                            viewBox='0 0 15 15'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z'
                              fill='#565660'
                            />
                          </svg>
                          <span>Place Bid</span>
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
                      <div className='product-img-time'>
                        <img src={'../../images/product-img-block.png'} alt='product-img'></img>
                      </div>
                      <div className='product-details-profile'>
                        <div className='product-profile'>
                          <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                          <div className='product-profile-details'>
                            <h5 className='diff-padding-block'>Hakunamatata</h5>
                            <p>Creator</p>
                          </div>
                        </div>
                        <div className='bid-common'>
                          <p>Current bid</p>
                          <h5>
                            <img src={'../../images/ethe-icon-blue.svg'} alt='ethe-img'></img>
                            <span>5 ETH</span>
                          </h5>
                        </div>
                      </div>
                      <div className='btn-product diff-padding'>
                        <button>
                          <svg
                            width='15'
                            height='15'
                            viewBox='0 0 15 15'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z'
                              fill='#565660'
                            />
                          </svg>
                          <span>Place Bid</span>
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
                      <div className='product-img-time'>
                        <img src={'../../images/product-img-block.png'} alt='product-img'></img>
                      </div>
                      <div className='product-details-profile'>
                        <div className='product-profile'>
                          <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                          <div className='product-profile-details'>
                            <h5 className='diff-padding-block'>Hakunamatata</h5>
                            <p>Creator</p>
                          </div>
                        </div>
                        <div className='bid-common'>
                          <p>Current bid</p>
                          <h5>
                            <img src={'../../images/ethe-icon-blue.svg'} alt='ethe-img'></img>
                            <span>5 ETH</span>
                          </h5>
                        </div>
                      </div>
                      <div className='btn-product diff-padding'>
                        <button>
                          <svg
                            width='15'
                            height='15'
                            viewBox='0 0 15 15'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z'
                              fill='#565660'
                            />
                          </svg>
                          <span>Place Bid</span>
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
                      <div className='product-img-time'>
                        <img src={'../../images/product-img-block.png'} alt='product-img'></img>
                      </div>
                      <div className='product-details-profile'>
                        <div className='product-profile'>
                          <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                          <div className='product-profile-details'>
                            <h5 className='diff-padding-block'>Hakunamatata</h5>
                            <p>Creator</p>
                          </div>
                        </div>
                        <div className='bid-common'>
                          <p>Current bid</p>
                          <h5>
                            <img src={'../../images/ethe-icon-blue.svg'} alt='ethe-img'></img>
                            <span>5 ETH</span>
                          </h5>
                        </div>
                      </div>
                      <div className='btn-product diff-padding'>
                        <button>
                          <svg
                            width='15'
                            height='15'
                            viewBox='0 0 15 15'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z'
                              fill='#565660'
                            />
                          </svg>
                          <span>Place Bid</span>
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
                      <div className='product-img-time'>
                        <img src={'../../images/product-img-block.png'} alt='product-img'></img>
                      </div>
                      <div className='product-details-profile'>
                        <div className='product-profile'>
                          <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                          <div className='product-profile-details'>
                            <h5 className='diff-padding-block'>Hakunamatata</h5>
                            <p>Creator</p>
                          </div>
                        </div>
                        <div className='bid-common'>
                          <p>Current bid</p>
                          <h5>
                            <img src={'../../images/ethe-icon-blue.svg'} alt='ethe-img'></img>
                            <span>5 ETH</span>
                          </h5>
                        </div>
                      </div>
                      <div className='btn-product diff-padding'>
                        <button>
                          <svg
                            width='15'
                            height='15'
                            viewBox='0 0 15 15'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z'
                              fill='#565660'
                            />
                          </svg>
                          <span>Place Bid</span>
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
                      <div className='product-img-time'>
                        <img src={'../../images/product-img-block.png'} alt='product-img'></img>
                      </div>
                      <div className='product-details-profile'>
                        <div className='product-profile'>
                          <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                          <div className='product-profile-details'>
                            <h5 className='diff-padding-block'>Hakunamatata</h5>
                            <p>Creator</p>
                          </div>
                        </div>
                        <div className='bid-common'>
                          <p>Current bid</p>
                          <h5>
                            <img src={'../../images/ethe-icon-blue.svg'} alt='ethe-img'></img>
                            <span>5 ETH</span>
                          </h5>
                        </div>
                      </div>
                      <div className='btn-product diff-padding'>
                        <button>
                          <svg
                            width='15'
                            height='15'
                            viewBox='0 0 15 15'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z'
                              fill='#565660'
                            />
                          </svg>
                          <span>Place Bid</span>
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
                      <div className='product-img-time'>
                        <img src={'../../images/product-img-block.png'} alt='product-img'></img>
                      </div>
                      <div className='product-details-profile'>
                        <div className='product-profile'>
                          <img src={'../../images/profile-img-product.png'} alt='product-img'></img>
                          <div className='product-profile-details'>
                            <h5 className='diff-padding-block'>Hakunamatata</h5>
                            <p>Creator</p>
                          </div>
                        </div>
                        <div className='bid-common'>
                          <p>Current bid</p>
                          <h5>
                            <img src={'../../images/ethe-icon-blue.svg'} alt='ethe-img'></img>
                            <span>5 ETH</span>
                          </h5>
                        </div>
                      </div>
                      <div className='btn-product diff-padding'>
                        <button>
                          <svg
                            width='15'
                            height='15'
                            viewBox='0 0 15 15'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z'
                              fill='#565660'
                            />
                          </svg>
                          <span>Place Bid</span>
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
        </div>
      </CommonPageBlockPad>
    );
};

export default profilepage;
