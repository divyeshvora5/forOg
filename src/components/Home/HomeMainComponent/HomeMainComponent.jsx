import Head from "next/head";

import { Container } from "react-bootstrap";
import { HomeMain, Button } from "@/styles/pages/main.style";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeAuctions, PopularCollection, TrandingNfts } from "@/components";
import HotPics from "@/components/Home/HotPics/HotPics";
import TopSeller from "@/components/Home/TopSeller/TopSeller";
import { useRouter } from "next/router";
import { PATH_DASHBOARD } from "@/routes/paths";

// import {
//     TextRevealCard,
//     TextRevealCardDescription,
//     TextRevealCardTitle,
// } from "../components/ui/text-reveal-card";

// import { EvervaultCard, Icon } from "../components/ui/evervault-card";
import Blog from "@/components/Home/Blog/Blog";
// import TrendingCollections from "@/components/Home/TrendingCollections/TrendingCollections";
import { FlipWordsTexts } from "@/components/ui/FlipWordsTexts";
import { EvervaultCard } from "@/components/ui/evervault-card";

export default function HomeMainComponent() {
    const router = useRouter();

    return (
      <>
        <Head>
          <title>TesseractX</title>
          <meta
            name='description'
            content='TesseractX is the ultimate rewarding, multi-chain, community-centric digital collectibles marketplace!'
          />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>

        {/* <main className={styles.main nostyle}> */}
        <main>
          <CommonPageBlockPad className='dark-mode-body'>
            {/* <Container> */}
            <HomeMain className='home-grapics'>
              <div className='home-grapics-one'>
                {/* <img
                src={"../../images/common-grapics-shape.svg"}
                alt="common-img"
              ></img> */}
              </div>
              <div className='home-grapics-two'>
                {/* <img
                src={"../../images/common-grpics-shape-2.svg"}
                alt="common-img"
              ></img> */}
              </div>
              <div className='home-grapics-three'>
                {/* <img
                src={"../../images/common-grapics-shape.svg"}
                alt="common-img"
              ></img> */}
              </div>
              <div className='home-grapics-four'>
                <img src={'../../images/common-grapics-shape-3.svg'} alt='common-img'></img>
              </div>
              <div className='home-grapics-five'>
                <img src={'../../images/common-grapics-shape-4.svg'} alt='common-img'></img>
              </div>
              <div className='home-grapics-six'>
                {/* <img
                src={"../../images/common-grapics-shape-5.svg"}
                alt="common-img"
              ></img> */}
              </div>
              <HomeAuctions />
              <TrandingNfts />
              <PopularCollection />
              <HotPics />
              <TopSeller />
              {/* <LiveAuctions /> */}
              {/* 
            <LiveAuctions />
            <TrandingNfts />
            <PopularCollection />
            <HotPics />
            <TopSeller /> */}

              {/* <Categories /> */}
              {/* <div className='blog-main'>
              <div className='common-title-block'>
                <h2>Blog</h2>
                <Link href='{}'>
                  <span>Explore</span>
                  <img src={'../../images/right-link-img.svg'} alt='right-arrow-img'></img>
                </Link>
              </div>
              <div className='blog-main-inner'>
                <div className='blog-main-inner-block'>
                  <div className='blog-main-inner-block-inner'>
                    <img src={'../../images/blog-img.png'} alt='blog-img'></img>
                    <h3>What is an NFT?</h3>
                  </div>
                </div>
                <div className='blog-main-inner-block'>
                  <div className='blog-main-inner-block-inner'>
                    <img src={'../../images/blog-img-1.png'} alt='blog-img'></img>
                    <h3>How to buy an NFT</h3>
                  </div>
                </div>
                <div className='blog-main-inner-block'>
                  <div className='blog-main-inner-block-inner'>
                    <img src={'../../images/blog-img-2.png'} alt='blog-img'></img>
                    <h3>What is minting?</h3>
                  </div>
                </div>
                <div className='blog-main-inner-block'>
                  <div className='blog-main-inner-block-inner'>
                    <img src={'../../images/blog-img-3.png'} alt='blog-img'></img>
                    <h3>How to stay protected in web3</h3>
                  </div>
                </div>
                <div className='blog-main-inner-block'>
                  <div className='blog-main-inner-block-inner'>
                    <img src={'../../images/blog-img-5.png'} alt='blog-img'></img>
                    <h3>How to create an NFT on OpenSea</h3>
                  </div>
                </div>
              </div>
            </div> */}

              <div className='create-art-block'>
                <Container>
                  <div className='create-art-block-inner'>
                    <div className='create-art-block-inner-left'>
                      {/* <TextRevealCard
                                            text="ART"
                                            revealText="FUTURE"
                                        /> */}
                      <FlipWordsTexts words={['ART', 'REWARDS', 'FUTURE']} />
                      {/* <h2>
                      Create and Sell<br></br> Your <span>ART</span>
                    </h2> */}
                      <p>
                        Transform your artistic visions into valuable digital assets. With TesseractX, creating and
                        selling your art becomes an effortless, rewarding journey.
                      </p>
                      <div className='create-btn'>
                        <Button onClick={() => router.push(PATH_DASHBOARD.create.nfts)}>Create</Button>
                        <Button
                          className='border-dark-button'
                          isBorderBtn={true}
                          onClick={() => router.push(PATH_DASHBOARD.explore.nfts)}>
                          Explore
                        </Button>
                      </div>
                    </div>

                    <div className='create-art-block-inner-right'>
                      {/* <img
                      src={"../../images/create-img-1.svg"}
                      alt="create-img"
                    ></img> */}

                      {/* <div className="flex flex-row items-start max-w-sm mx-auto relative h-[22rem]">
                      <EvervaultCard text="Hello" cardImage="../../images/main_2.png" cardBg="bg-[#B7BDF9]"/>
                      <EvervaultCard text="Hello" cardImage="../../images/main_1.png" cardBg="bg-[#CDCDCF]"/>
                      <EvervaultCard text="Hello" cardImage="../../images/main_3.png" cardBg="bg-[#8E6FB6]"/>
                    </div> */}

                      <div className='relative w-full h-[25rem]'>
                        {/* <div className="relative w-full h-[25rem] border-2 border-red-500"> */}
                        <div className='mobile-none absolute top-0 left-0 rounded-3xl h-[15rem] w-[15rem] z-10 transition duration-500 hover:z-40 hover:scale-110'>
                          <EvervaultCard
                            text='Hello'
                            cardImage='../../images/main_2.png'
                            cardBg='bg-[#B7BDF9]'
                            cardHeight='h-[15rem]'
                          />
                        </div>
                        <div className=' absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-3xl h-[20rem] w-[20rem] z-20 transition duration-500 delay-150 hover:z-40 hover:scale-110'>
                          <EvervaultCard
                            text='Hello'
                            cardImage='../../images/main_1.png'
                            cardBg='bg-[#CDCDCF]'
                            cardHeight='h-[18rem]'
                          />
                        </div>
                        <div className=' mobile-none absolute top-5 sm:top-1/3 right-10 transform sm:-translate-y-1/3 rounded-3xl h-[12rem] w-[12rem] z-10 xl:z-30 transition duration-500 hover:z-40 hover:scale-110'>
                          <EvervaultCard
                            text='Hello'
                            cardImage='../../images/main_3.png'
                            cardBg='bg-[#8E6FB6]'
                            cardHeight='h-[15rem]'
                          />
                        </div>
                      </div>

                      <div className='create-btn'>
                        <Button onClick={() => router.push(PATH_DASHBOARD.create.nfts)}>Create</Button>
                        <Button
                          className='border-dark-button'
                          isBorderBtn={true}
                          onClick={() => router.push(PATH_DASHBOARD.explore.nfts)}>
                          Explore
                        </Button>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>

              <Blog />
            </HomeMain>
            {/* </Container> */}
          </CommonPageBlockPad>
        </main>
      </>
    );
}
