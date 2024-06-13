import { CommonProductBLock } from "@/styles/pages/main.style";
import Link from "next/link";
import React, { useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import Slider from "react-slick";
import LiveAuctionCard from "../MainAuction/LiveAuctionCard";
import { useLikeItem, useRecentlySoldItems } from "@/hooks/useHome";
import { PATH_DASHBOARD } from "@/routes/paths";
import BidModel from "@/components/ItemDetails/Model/BidModel";
import RecentlySoldItemsCard from "./RecentlySoldItemsCard";


const liveslider = {
    dots: false,
    arrow: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1800,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1700,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: "25px",
            },
        },
    ],
};
const RecentlySoldItems = () => {
    const { loading, items } = useRecentlySoldItems();

    const { handleLike } = useLikeItem();

    return (
      <div className='live-auction-block'>
        <Container>
          <div className='common-title-block mb-0'>
            <h2>Recently Sold</h2>
          </div>
        </Container>
        {loading ? (
          <>
            <div className='d-flex justify-content-center'>
              <Spinner animation='border' size='lg' />
            </div>
          </>
        ) : !items?.length > 0 ? (
          <>{/* <div className='d-flex justify-content-center'>No Live Auctions Found!</div> */}</>
        ) : (
          <>
            <CommonProductBLock>
              {/* {true ? ( */}
              <Slider {...liveslider}>
                {items?.map((ele, index) => (
                  <RecentlySoldItemsCard item={ele} key={index} style={{ width: '20%' }} handleLike={handleLike} />
                ))}
              </Slider>
              {/* ) : (
              <>
                <div className="d-flex justify-content-center">
                  {items?.map((ele, index) => (
                    <div key={index}>
                      <LiveAuctionCard item={ele} key={index} />
                    </div>
                  ))}
                </div>
              </>
            )} */}
            </CommonProductBLock>
          </>
        )}
      </div>
    );
};

export default RecentlySoldItems;
