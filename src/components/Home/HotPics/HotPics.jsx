import React, { useEffect, useReducer, useState } from "react";
import Select from "react-select";
import {
    Button,
    ButtonLoad,
    CommonProductBLock,
    GradientBorderButton,
} from "@/styles/pages/main.style";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

import HotPicksItemCards from "./HotPicksItemCards";
import { Spinner } from "react-bootstrap";
import { useHotPicsNfts, useLikeItem } from "@/hooks/useHome";

export default function HotPics() {
    const {
        page,
        loading,
        items: hotPicksItem,
        payload,
        hasMore,
        categorys,
        handleCategorySelect,
        orderOption,
        orderChange,
        handlePageChange,
    } = useHotPicsNfts();
    const { handleLike, liked } = useLikeItem();

    const router = useRouter();
    // const dispatch = useDispatch();

    //reducer

    return (
      <>
        <div className='tab-filter-main-block tab-filter-main-block-hot'>
          <Container>
            <div className='common-title-block'>
              <h2>
                <span>Hot Picks</span>
                <img src={'../../images/fire-img-icon.svg'} alt='fire-img'></img>
              </h2>
            </div>
            <>
              <div className='top-button-select relative z-50'>
                <div className='top-button-group'>
                  {categorys?.length > 0 && (
                    <>
                      <button
                        className={`${!payload?.category ? 'selected' : ''}`}
                        onClick={() => handleCategorySelect('')}
                        key={'All'}>
                        {'All'}
                      </button>
                      {categorys?.map((ele, index) => (
                        <button
                          className={`${payload?.category?.includes(ele?.value) ? 'selected' : ''}`}
                          onClick={() => handleCategorySelect(ele?.value)}
                          key={index}>
                          {ele?.label}{' '}
                        </button>
                      ))}
                    </>
                  )}
                </div>
                {hotPicksItem?.length > 0 && orderOption && (
                  <div className='form-group'>
                    <Select
                      name='Hot-Picks-Order'
                      options={orderOption}
                      className='TX-select2-wrapper'
                      classNamePrefix='TX-fix-select'
                      onChange={orderChange}
                    />
                  </div>
                )}
              </div>
              {loading && page == 1 ? (
                <>
                  <div className='d-flex justify-content-center m-4'>
                    <Spinner animation='border' size='lg' />
                  </div>
                </>
              ) : !hotPicksItem?.length > 0 ? (
                <>
                  {/* <div className="d-flex justify-content-center">
                                    No Hot Picks Found!
                                </div> */}
                </>
              ) : (
                <div className='tab-filter-main-block-inner'>
                  <div className='showing-result-block full-width-showing'>
                    <CommonProductBLock className='explore-block-product'>
                      <div className='common-product-block  flex-width-five hot-picks-cards'>
                        {hotPicksItem?.map((item, index) => (
                          <>
                            <HotPicksItemCards item={item} key={item?._id} handleLike={handleLike} />
                          </>
                        ))}

                        {/* <div className="common-product-block-inner">
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
                          src={"../../images/profile-img-product.png"}
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
                        src={"../../images/product-img-block.png"}
                        alt=""
                      ></img>
                    </div>
                    <div className="product-details-profile full-width">
                      <div className="product-profile">
                        <img
                          src={"../../images/profile-img-product.png"}
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
                          src={"../../images/ethe-icon-blue.svg"}
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
                </div>*/}
                      </div>
                    </CommonProductBLock>
                  </div>
                </div>
              )}
              {loading && page > 1 && (
                <>
                  <div className='d-flex justify-content-center m-4'>
                    <Spinner animation='border' size='lg' />
                  </div>
                </>
              )}
              {!loading && hasMore && (
                <div className='load-more-block'>
                  <GradientBorderButton onClick={handlePageChange} className='border-dark-button'>
                    Load More
                  </GradientBorderButton>
                </div>
              )}
            </>
          </Container>
        </div>
      </>
    );
}
