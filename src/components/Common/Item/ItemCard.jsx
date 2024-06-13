import React from "react";
import ImageLoader from "../ImageLoader";
import CountDownTimer from "../CountDownTimer";
import { CHAIN_LOGO } from "@/constant";
import { CountParser, getItemDetailsQueryParams, usdFormatter } from "@/utils";
import Like from "./Like";
import { useRouter } from "next/router";
import { PATH_DASHBOARD } from "@/routes/paths";

const ItemCard = ({ item, handleLike = () => {} }) => {
    // console.log("item", item);
    // const disable = useMemo(() => {
    // 	return Number(item?.endListingTime) < Date.now();
    // }, [item]);

    // const handleLike = useCallback(async () => {
    // 	try {
    // 		const { data } = await itemLikeService({
    // 			id: item?._id,
    // 			account: account?.toLowerCase(),
    // 		});
    // 		setLiked(data?.like);
    // 	} catch (err) {
    // 		console.log("err", err);
    // 	}
    // }, [item, account, setLiked]);

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
        router.push({
            pathname: PATH_DASHBOARD.explore.collection(
                item?.collectionAddress
            ),
        });
    };

    return (
        <div
            className="common-product-block-inner new-card-block hover:translate-y-[-3px] transition-all ease-in cursor-pointer"
            onClick={() => handleRouteChange(item)}
            // onMouseEnter={() => setShowBgAnimation(true)}
            // onMouseLeave={() => setShowBgAnimation(false)}
        >
            {/* <BackgroundGradient animate={showBgAnimation} className='rounded-[22px] bg-transparent dark:bg-zinc-900'> */}
            <div className="common-product-block-inner-width !rounded-[22px]">
                <div className="top-block-product-new">
                    <div className="top-block-product-img-new">
                        <img
                            src={
                                item?.collectionImage ||
                                item?.collectionLogo ||
                                "/images/collection-img.png"
                            }
                            alt=""
                        ></img>
                    </div>
                    <h4>{item?.collectionName || ""}</h4>
                </div>

                <div className="product-img-time product-img-time-big pointer">
                    <ImageLoader
                        src={item?.image}
                        alt=""
                        thumbnail={item?.thumbnail}
                    />
                    {/* <img src={item?.image} alt=""></img> */}
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
                                src={CHAIN_LOGO[item?.chainId]}
                                className="product-img-diff"
                                alt=""
                            />
                            <div className="product-details-profile-new-price-text">
                                <p>Price</p>
                                <h4>
                                    <span>
                                        {CountParser(item?.price || 0, 2)}{" "}
                                        {item?.symbol}
                                    </span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-hot-pics"></div>
            </div>
            {/* </BackgroundGradient> */}
        </div>
        // <div key={item?._id} className="common-product-block-inner">
        //     <div className="common-product-block-inner-width">
        //         <div className="top-block-product">
        //             <h4>{item?.name}</h4>
        //             <div onClick={() => handleLike(item?._id)}>
        //                 <Like item={item} />
        //             </div>
        //         </div>
        //         <div className="product-details-profile full-width">
        //             <div className="product-profile">
        //                 <img
        //                     src={
        //                         item?.collectionImage ||
        //                         item?.collectionLogo ||
        //                         "../../../images/profile-img-product.png"
        //                     }
        //                     alt=""
        //                     className="pointer"
        //                     onClick={handleCollectionRoute}
        //                 ></img>
        //                 <div className="product-profile-details">
        //                     <h5>{item?.collectionName}</h5>
        //                     <p>Collection</p>
        //                 </div>
        //             </div>
        //         </div>

        //         <div
        //             className="product-img-time pointer"
        //             onClick={handleRouteChange}
        //         >
        //             <ImageLoader src={item?.image} alt="" />
        //             {item?.endTime && item?.status !== "Completed" && (
        //                 <CountDownTimer
        //                     date={item?.endTime}
        //                     // handleComplate={handleComplate}
        //                 />
        //             )}
        //         </div>

        //         <div className="product-details-profile">
        //             <div className="product-profile">
        //                 <img
        //                     src={CHAIN_LOGO[item?.chainId]}
        //                     alt=""
        //                 />
        //                 {item?.price ? (
        //                     <div className="product-profile-details">
        //                         <p>{item?.symbol}</p>
        //                         <h5>
        //                             <span>
        //                                 {CountParser(item?.price || 0, 4)}
        //                             </span>
        //                         </h5>
        //                         {/* <p>
        //                             {usdFormatter.format(item?.usdPrice || 0)}
        //                         </p> */}
        //                     </div>
        //                 ) : (
        //                     ""
        //                 )}
        //             </div>
        //             <div className="btn-product">
        //                 <button
        //                     // disabled={disable}
        //                     onClick={handleRouteChange}
        //                 >
        //                     <span>Details</span>
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default ItemCard;
