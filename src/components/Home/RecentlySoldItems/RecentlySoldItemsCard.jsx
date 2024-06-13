import { Like } from "@/components";
import CountDownTimer from "@/components/Common/CountDownTimer";
import ImageLoader from "@/components/Common/ImageLoader";
import { CHAIN_LOGO } from "@/constant";
import { useLikeItem } from "@/hooks/useHome";
import { PATH_DASHBOARD } from "@/routes/paths";
import { CountParser, getItemDetailsQueryParams } from "@/utils";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { truncateAddress } from "@/utils";

const RecentlySoldItemsCard = ({ item, handleLike }) => {
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
                onClick={(e) => {
                    handleCollectionRoute();
                }}
            >
                <BackgroundGradient
                    animate={showBgAnimation}
                    className="rounded-[22px] bg-transparent dark:bg-zinc-900"
                >
                    <div className="common-product-block-inner-width !rounded-[22px]">
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
                                        <p>Price</p>
                                        <h4>
                                            {CountParser(item?.price, 2)}{" "}
                                            {item?.symbol}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-time-block">
                                <div>
                                    <p>Time</p>
                                    <p>
                                        {item?.timestamp
                                            ? moment(
                                                  item?.timestamp * 1000
                                              ).fromNow()
                                            : ""}
                                    </p>
                                </div>
                                <div className="text-flex-end">
                                    <p>Owner</p>
                                    <p className="gd-owner-text">
                                        {item?.seller
                                            ? truncateAddress(
                                                  item?.seller,
                                                  3,
                                                  3
                                              )
                                            : ""}
                                    </p>
                                </div>
                            </div>
                        </div>
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
                        <div
                            className="product-img-time product-img-time-big pointer main-img-block"
                            onClick={handleRouteChange}
                        >
                            <ImageLoader
                                src={item?.image}
                                alt={item?.name}
                                thumbnail={item?.thumbnail}
                            />
                        </div>
                        {/* <div className='product-details-profile'>
              <div className='product-profile'>
                <img
                  src={item?.collectionLogo || '../../images/profile-img-product.png'}
                  alt=''
                  className='pointer'></img>
                <div className='product-profile-details'>
                  <p>Collection</p>
                  <h5>{item?.collectionName || 'noName'}</h5>
                </div>
              </div>
              <div className='bid-common'>
                <p>Sold Price</p>
                <h5>
                  <span>
                    {CountParser(item?.price, 2)} {item?.symbol}
                  </span>
                  <img src={CHAIN_LOGO[item?.chainId] || '../../images/ethe-icon-blue.svg'} alt='ethe-img'></img>
                </h5>
              </div>
            </div> */}
                        {/* <div className='flex-time-block'>
              <div>
                <p>Time</p>
                <p>{item?.timestamp ? moment(item?.timestamp * 1000).fromNow() : ''}</p>
              </div>
              <div>
                <p>Owner</p>
                <p className='gd-owner-text'>{item?.seller ? truncateAddress(item?.seller, 3, 3) : ''}</p>
              </div>
            </div> */}
                    </div>
                </BackgroundGradient>
            </div>
        </div>
    );
};

export default RecentlySoldItemsCard;
