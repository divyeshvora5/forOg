import { useState } from "react";
import { Like } from "@/components";
import ImageLoader from "@/components/Common/ImageLoader";
import { CHAIN_LOGO } from "@/constant";
import { useLikeItem } from "@/hooks/useHome";
import { PATH_DASHBOARD } from "@/routes/paths";
import { CountParser, fixDecimal, getItemDetailsQueryParams } from "@/utils";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { useRouter } from "next/router";
import React from "react";

const HotPicksItemCards = ({ item, savedItem = false, handleLike }) => {
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

    return (
        <>
            <div
                className="common-product-block-inner new-card-block hover:translate-y-[-3px] transition-all ease-in cursor-pointer"
                onClick={() => handleRouteChange(item)}
                onMouseEnter={() => setShowBgAnimation(true)}
                onMouseLeave={() => setShowBgAnimation(false)}
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
                                ></img>
                            </div>
                            <h4>{item?.collectionName || ""}</h4>
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
              {account &&
                            }
            </div> */}

                        <div className="product-img-time">
                            <ImageLoader
                                src={item?.image}
                                alt=""
                                thumbnail={item?.thumbnail}
                            />
                            {/* <img src={item?.image} alt=""></img> */}
                        </div>
                        <div className="product-details-profile-new-block">
                            <div className="product-details-profile-new">
                                <h4>{item?.name}</h4>
                                <div className="product-details-profile-new-price">
                                    <img
                                        src={CHAIN_LOGO[item?.chainId]}
                                        className="product-img-diff"
                                        alt=""
                                    />
                                    <div className="product-details-profile-new-price-text">
                                        <p>Price</p>
                                        <h4>
                                            <span>
                                                {CountParser(
                                                    item?.marketPrice || 0,
                                                    4
                                                )}{" "}
                                                {item?.currencySymbol}
                                            </span>
                                        </h4>
                                    </div>
                                    {/* <img src={CHAIN_LOGO[item?.chainId] || '../../images/ethe-icon-blue.svg'} alt='ethe-img'></img>
                  <div className='product-details-profile-new-price-text'>
                    <p>Price</p>
                    <h4>
                      {CountParser(item?.price, 2)} {item?.symbol}
                    </h4>
                  </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex-hot-pics">
                            {/* <div className='product-details-profile full-width'>
                <div className='product-profile'>
                  <img src={item?.creatorLogo || '/images/user.svg'} alt=''></img>
                  <div className='product-profile-details'>
                    <p>Creator</p>
                    <h5>{item?.creatorName}</h5>
                  </div>
                </div>
              </div> */}
                            {/* {savedItem && (
                <>
                  <div className='product-details-profile full-width'>
                    <div className='product-profile'>
                      <img src={item?.ownerLogo || '/images/user.svg'} alt=''></img>
                      <div className='product-profile-details'>
                        <h5>{item?.ownerName}</h5>
                      </div>
                    </div>
                  </div>
                </>
              )} */}
                            {/* <div className='product-details-profile'>
                {!savedItem && (
                  <div className='product-profile'>
                    <img src={CHAIN_LOGO[item?.chainId]} className='product-img-diff' alt='' />
                    {item?.marketPrice ? (
                      <div className='product-profile-details'>
                        <p>{item?.currencySymbol}</p>
                        <h5>
                          <span>{CountParser(item?.marketPrice || 0, 4)}</span>
                        </h5>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                )}
              </div> */}
                        </div>
                        {/* <div className={`btn-product ${savedItem && 'col-md-12'}`}>
              <button>
                <span>Details</span>
              </button>
            </div> */}
                    </div>
                </BackgroundGradient>
            </div>
        </>
    );
};

export default HotPicksItemCards;
