import { Like } from "@/components";
import CountDownTimer from "@/components/Common/CountDownTimer";
import ImageLoader from "@/components/Common/ImageLoader";
import { CHAIN_LOGO } from "@/constant";
import { useLikeItem } from "@/hooks/useHome";
import { PATH_DASHBOARD } from "@/routes/paths";
import { getItemDetailsQueryParams } from "@/utils";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const LiveAuctionCard = ({ item, handleLike, handleOpen }) => {
    const [showBgAnimation, setShowBgAnimation] = useState(false);
    const router = useRouter();
    const handleRouteChange = () => {
        router.push({
            pathname: PATH_DASHBOARD.item.details,
            query: {
                ...getItemDetailsQueryParams(item),
            },
        });
    };
    const handleCollectionRoute = () => {
        router.push(PATH_DASHBOARD.explore.collection(item?.collectionAddress));
    };
    return (
        <div className="common-product-block">
            <div
                className="common-product-block-inner new-card-block hover:translate-y-[-3px] transition-all ease-in !cursor-pointer"
                onMouseEnter={() => setShowBgAnimation(true)}
                onMouseLeave={() => setShowBgAnimation(false)}
                onClick={handleRouteChange}
            >
                <BackgroundGradient
                    animate={showBgAnimation}
                    className="rounded-[22px] bg-transparent dark:bg-zinc-900"
                >
                    <div className="common-product-block-inner-width !rounded-[22px]">
                        {/* <div className='top-block-product'>
              <h4>{item?.name}</h4>

              <span
                onClick={(e) => {
                  e.stopPropagation();
                  handleLike(item?._id);
                }}>
                <Like item={item} />
              </span>
            </div> */}
                        <div className="top-block-product-new">
                            <div className="top-block-product-img-new">
                                <img
                                    src={
                                        item?.collectionLogo ||
                                        "/images/collection-img.png"
                                    }
                                    alt=""
                                    className="pointer"
                                ></img>
                            </div>
                            <h4>{item?.collectionName || ""}</h4>
                        </div>
                        <div className="product-img-time product-img-time-big pointer">
                            <ImageLoader
                                src={item?.image}
                                alt={item?.name}
                                thumbnail={item?.thumbnail}
                            />
                            <div className="timer-block-div">
                                {item?.endTime && (
                                    <CountDownTimer date={item?.endTime} />
                                )}
                            </div>
                        </div>
                        <div className="product-details-profile-new-block">
                            <div className="product-details-profile-new">
                                <h4>{item?.name}</h4>
                                <div className="product-details-profile-new-price">
                                    <img
                                        src={
                                            CHAIN_LOGO[item?.chainId] ||
                                            "../../images/ethe-icon-blue.svg"
                                        }
                                        alt="ethe-img"
                                    ></img>
                                    <div className="product-details-profile-new-price-text">
                                        <p>Bid</p>
                                        <h4>
                                            {item?.latestBid} {item?.symbol}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='product-details-profile'>
              <div className='product-profile'>
                <img
                  src={item?.collectionLogo || '../../images/profile-img-product.png'}
                  alt=''
                  className='pointer'
                  onClick={handleCollectionRoute}></img>
                <div className='product-profile-details'>
                  <p>Collection</p>
                  <h5>{item?.collectionName || 'noName'}</h5>
                </div>
              </div>
              <div className='bid-common'>
                <p>Current bid</p>
                <h5>
                  <span>
                    {item?.latestBid} {item?.symbol}
                  </span>
                  <img src={CHAIN_LOGO[item?.chainId] || '../../images/ethe-icon-blue.svg'} alt='ethe-img'></img>
                </h5>
              </div>
            </div> */}
                        {/* <div className='btn-product'>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpen(item);
                }}>
                <svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z'
                    fill='#565660'
                  />
                </svg>
                <span>Place Bid</span>
              </button>
            </div> */}
                    </div>
                </BackgroundGradient>
            </div>
        </div>
    );
};

export default LiveAuctionCard;
