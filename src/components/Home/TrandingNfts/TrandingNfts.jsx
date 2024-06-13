import { CommonProductBLock } from "@/styles/pages/main.style";
import Link from "next/link";
import { Container, Spinner } from "react-bootstrap";
import Slider from "react-slick";
import TrandingNftCard from "./TrandingNftCard";
import { useLikeItem, useTrandingNfts } from "@/hooks/useHome";
import { useState } from "react";
import { PATH_DASHBOARD } from "@/routes/paths";

import OfferModel from "@/components/ItemDetails/Model/OfferModel";
import { Toast, validateNetwork } from "@/utils";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
const trendingslider = {
  dots: false,
  arrow: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
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

const TrandingNfts = () => {
  const { account, chainId } = useActiveWeb3React();
  const { items, loading } = useTrandingNfts();
  const { handleLike } = useLikeItem();
  const [currentItem, setCurrentItem] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleOpen = (_item) => {
    const validate = validateNetwork(account, chainId, _item?.chainId);
    console.log(validate,"validate");
    if (!validate.status) {
      return Toast.error(validate.message);
    }
    setCurrentItem(_item);
    setShow(true);
  };

  // console.log(items);

  return (
    <div className='traning-nft-block traning-nft-block-new'>
      <OfferModel
        show={show}
        handleClose={handleClose}
        item={currentItem}
        refetchBids={false}
        // refetch={fetchAuctions}
        auctionCreator={currentItem?.lister}
      />

      <Container>
        <div className='common-title-block desktop-view-title'>
          <h2>Trending NFTs</h2>
          {!loading && items.length > 0 && (
            <Link href={PATH_DASHBOARD.explore.nfts} className='group hover:translate-x-[-3px] transition-all ease-in'>
              <span className='inline-block group-hover:bg-gradient-to-r group-hover:from-[#2BD7EF] group-hover:via-indigo-400 group-hover:to-[#FB4EF1] group-hover:text-transparent group-hover:bg-clip-text'>
                Explore
              </span>
              <svg width='25' height='14' viewBox='0 0 25 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M17.7979 13.2012L23.3399 7.65999C23.7031 7.29681 23.7031 6.70793 23.3399 6.34476L17.7979 0.803571'
                  stroke='#191820'
                  stroke-width='1.39492'
                  stroke-linecap='round'
                />
                <path
                  d='M22.4482 7.00293L0.749512 7.00293'
                  stroke='#191820'
                  stroke-width='1.39492'
                  stroke-linecap='round'
                />
              </svg>
            </Link>
          )}
        </div>
        {loading ? (
          <>
            <div className='d-flex justify-content-center'>
              <Spinner animation='border' size='lg' />
            </div>
          </>
        ) : !items?.length > 0 ? (
          <>
            {/* <div className="d-flex justify-content-center">
							No Trending NFTs Found!
						</div> */}
          </>
        ) : (
          <>
            <CommonProductBLock>
              {/* {items.length > 5 ? ( */}
              {/* <Slider {...trendingslider}> */}
              <div className='common-product-block'>
                {items?.map((ele, index) => (
                  <TrandingNftCard item={ele} key={index} handleLike={handleLike} handleOpen={handleOpen} />
                ))}
                {/* </Slider> */}
                {/* ) : (
                        <>
                            <div className="d-flex justify-content-center">
                                {trandingNfts?.map((ele, index) => (
                                    <div key={index}>
                                        <TrandingNftCard item={ele} key={index} />
                                    </div>
                                ))}
                            </div>
                        </>
                    )} */}
              </div>
            </CommonProductBLock>
          </>
        )}
        <div className='common-title-block mobile-view-block'>
          {!loading && items.length > 0 && (
            <Link href={PATH_DASHBOARD.explore.nfts} className='group hover:translate-x-[-3px] transition-all ease-in'>
              <span className='inline-block group-hover:bg-gradient-to-r group-hover:from-[#2BD7EF] group-hover:via-indigo-400 group-hover:to-[#FB4EF1] group-hover:text-transparent group-hover:bg-clip-text'>
                Explore
              </span>
              <svg width='25' height='14' viewBox='0 0 25 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M17.7979 13.2012L23.3399 7.65999C23.7031 7.29681 23.7031 6.70793 23.3399 6.34476L17.7979 0.803571'
                  stroke='#191820'
                  stroke-width='1.39492'
                  stroke-linecap='round'
                />
                <path
                  d='M22.4482 7.00293L0.749512 7.00293'
                  stroke='#191820'
                  stroke-width='1.39492'
                  stroke-linecap='round'
                />
              </svg>
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default TrandingNfts;
