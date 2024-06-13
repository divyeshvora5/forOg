import { CommonProductBLock } from "@/styles/pages/main.style";
import Link from "next/link";
import React, { useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import Slider from "react-slick";
import LiveAuctionCard from "./LiveAuctionCard";
import { useLikeItem } from "@/hooks/useHome";
import { PATH_DASHBOARD } from "@/routes/paths";
import BidModel from "@/components/ItemDetails/Model/BidModel";
import { Toast, validateNetwork } from "@/utils";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";

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
const LiveAuctions = ({ loading, items, fetchAuctions }) => {
    const { account, chainId } = useActiveWeb3React();
    const [currentItem, setCurrentItem] = useState();
    const [show, setShow] = useState(false);

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

    const { handleLike } = useLikeItem();

    return (
        <div className="live-auction-block">
            <BidModel
                show={show}
                handleClose={handleClose}
                item={currentItem}
                refetchBids={false}
                refetch={fetchAuctions}
                auctionCreator={currentItem?.lister}
            />
            <Container>
                <div className="common-title-block desktop-view-title mb-0">
                    <h2>Live Auctions</h2>
                   {!loading && items?.length > 0 && (
                        <Link href={PATH_DASHBOARD.explore.auctions} className="group hover:translate-x-[-3px] transition-all ease-in">
                            <span className="inline-block group-hover:bg-gradient-to-r group-hover:from-[#2BD7EF] group-hover:via-indigo-400 group-hover:to-[#FB4EF1] group-hover:text-transparent group-hover:bg-clip-text">Explore</span>
                            {/* <img
                                src={"../../images/right-link-img.svg"}
                                alt="right-arrow-img"
                            ></img> */}
                            <svg
                                width="25"
                                height="14"
                                viewBox="0 0 25 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.7979 13.2012L23.3399 7.65999C23.7031 7.29681 23.7031 6.70793 23.3399 6.34476L17.7979 0.803571"
                                    stroke="#191820"
                                    stroke-width="1.39492"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M22.4482 7.00293L0.749512 7.00293"
                                    stroke="#191820"
                                    stroke-width="1.39492"
                                    stroke-linecap="round"
                                />
                            </svg>
                        </Link>
                    )}
        
                </div>
            </Container>
            {loading ? (
                <>
                    <div className="d-flex justify-content-center">
                        <Spinner animation="border" size="lg" />
                    </div>
                </>
            ) : !items?.length > 0 ? (
                <>
                    {/* <div className='d-flex justify-content-center'>No Live Auctions Found!</div> */}
                </>
            ) : (
                <>
                    <CommonProductBLock>
                        {/* {true ? ( */}
                        <Slider {...liveslider}>
                            {items?.map((ele, index) => (
                                <LiveAuctionCard
                                    item={ele}
                                    key={index}
                                    style={{ width: "20%" }}
                                    handleLike={handleLike}
                                    handleOpen={handleOpen}
                                />
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
            <Container>
                <div className="common-title-block mobile-view-block">
                {!loading && items?.length > 0 && (
                        <Link href={PATH_DASHBOARD.explore.auctions}>
                            <span>Explore</span>
                            {/* <img src={'../../images/right-link-img.svg'} alt='right-arrow-img'></img> */}
                            <svg
                                width="25"
                                height="14"
                                viewBox="0 0 25 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.7979 13.2012L23.3399 7.65999C23.7031 7.29681 23.7031 6.70793 23.3399 6.34476L17.7979 0.803571"
                                    stroke="#191820"
                                    stroke-width="1.39492"
                                    stroke-linecap="round"
                                ></path>
                                <path
                                    d="M22.4482 7.00293L0.749512 7.00293"
                                    stroke="#191820"
                                    stroke-width="1.39492"
                                    stroke-linecap="round"
                                ></path>
                            </svg>
                        </Link>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default LiveAuctions;
