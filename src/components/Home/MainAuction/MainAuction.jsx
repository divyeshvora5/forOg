"use client";

import { Container, Spinner } from "react-bootstrap";
import Slider from "react-slick";
import AuctionCard from "./AuctionCard";
import { useEffect, useState } from "react";
import BidModel from "@/components/ItemDetails/Model/BidModel";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { Toast, validateNetwork } from "@/utils";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: "", // Hides the previous arrow
  nextArrow: "", // Hides the next arrow
  arrows: false,
  dotsClass: "custom-slider-dots",
};

const MainAuction = ({ items, loading, fetchAuctions }) => {
  const { account, chainId } = useActiveWeb3React();
  const [show, setShow] = useState(false);
  const [currentItem, setCurrentItem] = useState();

  const handleClose = () => {
    setShow(false);
  };

  const handleOpen = (_item) => {
    const validate = validateNetwork(account, chainId, _item?.chainId);
    if (!validate.status) {
      return Toast.error(validate.message);
    }
    setCurrentItem(_item);
    setShow(true);
  };

  const handleOpenNewTab = () => {
    const url =
      "https://www.revolut.com/referral/?referral-code=simonnqr!FEB1-24-AR-H2";
    window.open(url, "_blank");
  };
  return (
    <>
      <div className='home-slider-main-sub'>
        <BidModel
          show={show}
          handleClose={handleClose}
          item={currentItem}
          refetchBids={false}
          refetch={fetchAuctions}
          auctionCreator={currentItem?.lister}
        />
        <div className='home-slider-main-sub-banner'>
          <Container>
            {/* <div
                        className="banking-revolt-section pointer"
                        onClick={handleOpenNewTab}
                    >
                        <div className="banking-revolt-section-star">
                            <img
                                src={"../../images/star-icon-2.svg"}
                                alt="poket-img"
                            ></img>
                        </div>
                        <div className="banking-revolt-section-star-two">
                            <img
                                src={"../../images/star-icon.svg"}
                                alt="poket-img"
                            ></img>
                        </div>
                        <div className="banking-revolt-section-inner">
                            <span>Announcement</span>
                            <p>Crypto friendly banking with Revolut</p>
                        </div>
                        <div className="banking-revolt-section-middle">
                            <img
                                src={"../../images/poket-r-block.svg"}
                                alt="poket-img"
                            ></img>
                            <img
                                src={"../../images/poket-r-block-2.png"}
                                className="poket-img-mobile"
                                alt="poket-img"
                            ></img>
                        </div>
                        <div className="banking-revolt-section-middle dark-body">
                            <img
                                src={"../../images/poket-r-block-dark.svg"}
                                alt="poket-img"
                            ></img>
                            <img
                                src={"../../images/poket-r-block-dark-2.svg"}
                                className="poket-img-mobile"
                                alt="poket-img"
                            ></img>
                        </div>
                        <div className="banking-revolt-section-last">
                            <a
                                href="https://www.revolut.com/referral/?referral-code=simonnqr!FEB1-24-AR-H2"
                                target="_blank"
                                className="hover:translate-x-[-3px] transition-all ease-in"
                            >
                                <span>Discover</span>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.33337 10H16.6667M16.6667 10L11.6667 5M16.6667 10L11.6667 15"
                                        stroke="black"
                                        stroke-width="1.25"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div> */}
            <div className='home-slider-main !p-0 '>
              {loading ? (
                <>
                  <div className='d-flex justify-content-center mt-5'>
                    <Spinner animation='border' size='md' />
                  </div>
                </>
              ) : !items?.length > 0 ? (
                <>
                  {/* <div className="d-flex justify-content-center">
                                    No Live Auction Found!
                                </div> */}
                </>
              ) : (
                <Slider {...settings} className='!mt-[-3rem] pb-[3rem]'>
                  {items?.map((item, index) => (
                    <AuctionCard handleClick={handleOpen} key={index} item={item} />
                  ))}
                </Slider>
              )}
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default MainAuction;
