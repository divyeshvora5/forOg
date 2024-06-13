import { Like } from "@/components";
import ImageLoader from "@/components/Common/ImageLoader";
import { CHAIN_LOGO } from "@/constant";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";

import {
    ACTION_TYPE,
    marketState,
    setActionItem,
} from "@/redux/reducer/marketSlice";
import { PATH_DASHBOARD } from "@/routes/paths";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { ITEM_LISTING_STATUS } from "@/constant";
import { GetNftListingService } from "@/redux/services/itemServices";
import {
    buyFromListingAction,
    cancleListingAction,
} from "@/redux/actions/marketAction";
import {
    CountParser,
    fixDecimal,
    getItemDetailsQueryParams,
    usdFormatter,
} from "@/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { getValidListingNft } from "@/contracts";

const TrandingNftCard = ({ item, handleLike, handleOpen }) => {
    const { chainId, account, library, sdk, chain } = useActiveWeb3React();
    const [showBgAnimation, setShowBgAnimation] = useState(false);
    const router = useRouter();

    // const dispatch = useDispatch();
    // const { itemLikeState } = useSelector(marketPlaceState);

    const handleRouteChange = useCallback(() => {
        router.push({
            pathname: PATH_DASHBOARD.item.details,
            query: {
                ...getItemDetailsQueryParams(item),
            },
        });
    }, [item]);

    // console.log("TrandingNftCard", item);

    // useEffect(() => {
    // 	if (item?.itemId === itemLikeState?.id) {
    // 		setLiked(itemLikeState?.like);
    // 	}
    // }, [itemLikeState]);

    // const handleLike = () => {
    // 	dispatch(
    // 		itemLikeAction({
    // 			payload: {
    // 				id: item?.itemId,
    // 				account: account?.toLowerCase(),
    // 			},
    // 		})
    // 	);
    // };

    return (
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
                    <div className="product-details-profile-new-block">
                        <div className="product-details-profile-new">
                            <h4>{item?.name}</h4>
                            <div className="product-details-profile-new-price">
                                <img
                                    src={
                                        CHAIN_LOGO[item?.chainId] ||
                                        "../../images/ethe-icon-blue.svg"
                                    }
                                    alt="ethe-icon"
                                ></img>
                                <div className="product-details-profile-new-price-text">
                                    {/* <p>Price</p> */}
                                    <p>Floor</p>
                                    <h4>
                                        {CountParser(item?.floorPrice, 3)}{" "}
                                        {item?.currencySymbol}
                                    </h4>
                                </div>
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
                    <div className="product-img-time pointer">
                        {/* <img
                                src={
                                    item?.image ||
                                    "../../images/nft-img-trending.png"
                                }
                                alt=""
                            ></img> */}
                        <ImageLoader
                            src={
                                item?.image ||
                                item?.thumbnail ||
                                "../../images/nft-img-trending.png"
                            }
                            alt=""
                            thumbnail={item?.thumbnail}
                        />
                    </div>
                    {/* <div className='product-details-profile'> */}
                    {/* <div className='product-profile'>
                <img src={item?.creatorLogo || '/images/user.svg'} alt=''></img>
                <div className='product-profile-details'>
                  <h5>Collection</h5>
                  <p>{item?.name}</p>
                </div>
              </div> */}

                    {/* <div className="bid-common">
                                <span
                                    onClick={() => handleLike(item?._id)}
                                    className="link-bid-main"
                                >
                                    <Like item={item} />
                                </span>
                            </div> */}

                    {/* <div className='floor-volume-block'>
                <div className='floor-volume-block-inner'>
                  <p>Floor</p>
                  <h4>
                    <span>
                      {CountParser(item?.floorPrice, 3)} {item?.currencySymbol}
                    </span>
                    <img src={CHAIN_LOGO[item?.chainId] || '../../images/ethe-icon-blue.svg'} alt='ethe-icon'></img>
                  </h4>
                </div>
              </div> */}
                    {/* </div> */}

                    {/* <div className='btn-product'>
              <button onClick={handleRouteChange}>
                <span>Make Offer</span>
              </button>
            </div> */}
                </div>
            </BackgroundGradient>
        </div>
    );
};

export default TrandingNftCard;
