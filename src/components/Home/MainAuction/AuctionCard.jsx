"use client";

import ImageLoader from "@/components/Common/ImageLoader";
import { CHAIN_LOGO } from "@/constant";
import Link from "next/link";
import HomeAuctionTimer from "./HomeAuctionTimer";
import Image from "next/image";
import { Button } from "@/styles/pages/main.style";
import { useRouter } from "next/router";
import { PATH_DASHBOARD } from "@/routes/paths";
import { getItemDetailsQueryParams } from "@/utils";
import React, { useState } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const AuctionCard = ({ item, handleClick }) => {
    // console.log("item", item);
    const [showBgAnimation, setShowBgAnimation] = useState(false);
    const router = useRouter();
    const handleRouteChange = () => {
        router.push({
            pathname: PATH_DASHBOARD.explore.nfts,
            // query: {
            //     ...getItemDetailsQueryParams(item),
            // },
        });
    };
    const handleBlogRouteChange = () => {
        router.push({
            pathname: PATH_DASHBOARD.blog.root,
        });
    };

    const CardTitle = {
        369: "PulseChain",
        8453: "Base on TesseractX",
    };
    const CardSubTitle = {
        369: "Create and access your favourite NFT’s",
        8453: "Base is officially live on The TesseractX Marketplace. Buy, sell and create your Base NFTs - right here on TesseractX",
    };
    return (
        <div>
            <div className="home-slider-main-inner">
                <div className="home-slider-main-item">
                    <div className="home-slider-main-img">
                        <div
                            className="home-slider-main-img-block"
                            onMouseEnter={() => setShowBgAnimation(true)}
                            onMouseLeave={() => setShowBgAnimation(false)}
                        >
                            <BackgroundGradient
                                animate={showBgAnimation}
                                borderCorner="rounded-[62px]"
                                className="rounded-[62px] bg-transparent dark:bg-zinc-900 w-full"
                            >
                                <ImageLoader
                                    src={item?.image || item?.animation_url}
                                    thumbnail={item?.thumbnail}
                                    alt={item?.name}
                                    style={{}}
                                />
                            </BackgroundGradient>
                        </div>
                        {/* <div className="overlay-grapics">
                            <Image
                                src="/images/home-slider-img-grapics.svg"
                                alt="graphics-img"
                                fill
                            />
                        </div> */}
                    </div>
                    <div className="home-slider-main-content">
                        <div className="home-slider-main-content-text">
                            <h3>{CardTitle[item?.chainId]}</h3>
                            <p>{CardSubTitle[item?.chainId]}</p>
                        </div>
                        {/* <h3>{item?.name}</h3> */}
                        {/* <h5>Limitted Edittion</h5> */}
                        {/* <div className='cretor-block-main'>
                <img src={item?.collectionLogo || '/images/user.svg'} alt='profile-img' width={60} height={60}></img>
                <div className='cretor-block-main-text'>
                  <p>Collection</p>
                  <Link href={`${PATH_DASHBOARD.explore.collection(item?.collectionAddress)}`}>
                    {item?.collectionName}
                  </Link>
                </div>
              </div> */}
                        {/* <div className='bid-auction-block'>
                <div className='bid-auction-block-inner'>
                  <p>Current Bid</p>
                  <h2>
                    <Image src={CHAIN_LOGO[item?.chainId]} alt='ethe-icon' height={30} width={30} />
                    <span>
                      {item?.latestBid} {item?.currencySymbol}
                    </span>
                  </h2>
                </div>
                <div className='bid-auction-block-inner'>
                  <p>Auction end in</p>
                  {item?.endTime && <HomeAuctionTimer date={item?.endTime} />}
                </div>
              </div> */}
                        <div className="btn-group-main">
                            <Button onClick={handleRouteChange}>
                                {/* Place bid */}
                                Explore NFTs
                            </Button>
                            <Button
                                onClick={handleBlogRouteChange}
                                isBorderBtn={true}
                                className="border-dark-button"
                            >
                                {/* View Details */}
                                Read More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuctionCard;
