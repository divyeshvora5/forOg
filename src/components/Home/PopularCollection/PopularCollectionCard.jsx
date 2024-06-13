import { Like } from "@/components";
import ImageLoader from "@/components/Common/ImageLoader";
import { CHAIN_LOGO } from "@/constant";
import { useLikeCollection } from "@/hooks/useHome";
import { PATH_DASHBOARD } from "@/routes/paths";
import { fixDecimal, usdFormatter } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const PopularCollectionCard = ({ item }) => {
    const [showBgAnimation, setShowBgAnimation] = useState(false);
    const router = useRouter();
    const { handleLike } = useLikeCollection();
    const handleRouteChange = useCallback(() => {
        router.push({
            pathname: PATH_DASHBOARD.explore.collection(item?.address),
            // query: {
            // type: item?.type,
            // itemCollection: item?.address,
            // },
        });
    }, [item]);

    return (
      <div
        className='popular-collection-inner new-card-block hover:translate-y-[-3px] transition-all ease-in'
        onMouseEnter={() => setShowBgAnimation(true)}
        onMouseLeave={() => setShowBgAnimation(false)}
        onClick={handleRouteChange}>
        <BackgroundGradient animate={showBgAnimation} className='rounded-[22px] bg-transparent dark:bg-zinc-900'>
          <div className='popular-collection-inner-block !rounded-[22px]'>
            <div className='top-popular-new'>
              <div className='top-popular-new-inner'>
                <img src={CHAIN_LOGO[item?.chainId]} alt='ethe-img'></img>
              </div>
              <div className='top-popular-new-inner'>
                <svg width='25' height='26' viewBox='0 0 25 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <g clip-path='url(#clip0_5644_18521)'>
                    <path
                      d='M15.7297 1.93976C15.3091 1.50935 14.8067 1.16735 14.2521 0.933857C13.6974 0.70036 13.1017 0.580078 12.5 0.580078C11.8982 0.580078 11.3025 0.70036 10.7479 0.933857C10.1932 1.16735 9.69086 1.50935 9.27028 1.93976L8.2984 2.93663L6.90778 2.91945C6.30582 2.91232 5.70852 3.02563 5.151 3.25271C4.59347 3.47979 4.08698 3.81605 3.66131 4.24173C3.23563 4.6674 2.89937 5.17389 2.67229 5.73142C2.44521 6.28894 2.3319 6.88624 2.33903 7.4882L2.35465 8.87882L1.3609 9.8507C0.930495 10.2713 0.588496 10.7736 0.354999 11.3283C0.121503 11.8829 0.0012207 12.4786 0.0012207 13.0804C0.0012207 13.6822 0.121503 14.2779 0.354999 14.8325C0.588496 15.3871 0.930495 15.8895 1.3609 16.3101L2.35621 17.2819L2.33903 18.6726C2.3319 19.2745 2.44521 19.8718 2.67229 20.4294C2.89937 20.9869 3.23563 21.4934 3.66131 21.919C4.08698 22.3447 4.59347 22.681 5.151 22.9081C5.70852 23.1351 6.30582 23.2484 6.90778 23.2413L8.2984 23.2257L9.27028 24.2194C9.69086 24.6499 10.1932 24.9919 10.7479 25.2253C11.3025 25.4588 11.8982 25.5791 12.5 25.5791C13.1017 25.5791 13.6974 25.4588 14.2521 25.2253C14.8067 24.9919 15.3091 24.6499 15.7297 24.2194L16.7015 23.2241L18.0922 23.2413C18.6941 23.2484 19.2914 23.1351 19.8489 22.9081C20.4065 22.681 20.913 22.3447 21.3386 21.919C21.7643 21.4934 22.1006 20.9869 22.3276 20.4294C22.5547 19.8718 22.668 19.2745 22.6609 18.6726L22.6453 17.2819L23.639 16.3101C24.0694 15.8895 24.4114 15.3871 24.6449 14.8325C24.8784 14.2779 24.9987 13.6822 24.9987 13.0804C24.9987 12.4786 24.8784 11.8829 24.6449 11.3283C24.4114 10.7736 24.0694 10.2713 23.639 9.8507L22.6437 8.87882L22.6609 7.4882C22.668 6.88624 22.5547 6.28894 22.3276 5.73142C22.1006 5.17389 21.7643 4.6674 21.3386 4.24173C20.913 3.81605 20.4065 3.47979 19.8489 3.25271C19.2914 3.02563 18.6941 2.91232 18.0922 2.91945L16.7015 2.93507L15.7297 1.93976ZM16.1781 11.2898L11.4906 15.9773C11.418 16.05 11.3318 16.1077 11.2369 16.1471C11.142 16.1865 11.0402 16.2068 10.9375 16.2068C10.8347 16.2068 10.733 16.1865 10.638 16.1471C10.5431 16.1077 10.4569 16.05 10.3843 15.9773L8.04059 13.6335C7.96795 13.5609 7.91033 13.4746 7.87102 13.3797C7.83171 13.2848 7.81148 13.1831 7.81148 13.0804C7.81148 12.9777 7.83171 12.8759 7.87102 12.781C7.91033 12.6861 7.96795 12.5999 8.04059 12.5273C8.11323 12.4546 8.19946 12.397 8.29436 12.3577C8.38927 12.3184 8.49099 12.2981 8.59371 12.2981C8.69644 12.2981 8.79816 12.3184 8.89306 12.3577C8.98797 12.397 9.0742 12.4546 9.14684 12.5273L10.9375 14.3194L15.0718 10.1835C15.2185 10.0368 15.4175 9.9544 15.625 9.9544C15.8324 9.9544 16.0314 10.0368 16.1781 10.1835C16.3248 10.3302 16.4072 10.5292 16.4072 10.7366C16.4072 10.9441 16.3248 11.1431 16.1781 11.2898Z'
                      fill='#FFD700'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_5644_18521'>
                      <rect width='25' height='25' fill='white' transform='translate(0 0.580078)' />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className='popular-collection-img-new'>
              <ImageLoader src={item?.nfts[0] || '../../images/item-details.png'} alt='nft' style={{}} />
            </div>
            <div className='popular-collection-new-data-main'>
              <div className='popular-collection-new-data'>
                <h2>{item?.name}</h2>
                <div className="popular-collection-new-data-text">
                  <div className="item-owner">
                    <p className="item-color">{item?.totalItemCount} Items</p>
                    <p className="owner-color">{item?.totalOwners} Owners</p>
                  </div>
                </div>
              </div>
              <div className='popular-collection-new-data'>
                <div className="bottom-data-block">
                  <p>Floor</p>
                  <h4> {fixDecimal(item?.floorPrice || 0, 3)} {item?.tokenSymbol}</h4>
                </div>
                <div className="bottom-data-block">
                  <p>Volume</p>
                  <h4> {usdFormatter.format(item?.tradingVolume || 0)}</h4>
                </div>
              </div>
            </div>
            {/* <div className='popular-collection-img' style={{ cursor: 'pointer' }} onClick={handleRouteChange}>
              <div className='img-block-popular'>
                {item?.nfts?.length <= 1 ? (
                  <>
                    <ImageLoader src={item?.nfts[0] || '../../images/item-details.png'} alt='nft' style={{}} />
                  </>
                ) : item?.nfts?.length == 2 ? (
                  <>
                    <div className='img-block-popular-left'>
                      <ImageLoader src={item?.nfts[0] || '../../images/item-details.png'} alt='nft' style={{}} />
                    </div>
                    <div className='img-block-popular-left'>
                      <ImageLoader src={item?.nfts[1] || '../../images/item-details.png'} alt='nft' style={{}} />
                    </div>
                  </>
                ) : item?.nfts?.length > 2 ? (
                  <>
                    <div className='img-block-popular-left'>
                      <ImageLoader src={item?.nfts[0] || '../../images/item-details.png'} alt='nft' style={{}} />
                    </div>
                    <div className='img-block-popular-right'>
                      <ImageLoader src={item?.nfts[1] || '../../images/item-details.png'} alt='nft' style={{}} />
                      <ImageLoader src={item?.nfts[2] || '../../images/item-details.png'} alt='nft' style={{}} />
                    </div>
                  </>
                ) : (
                  ''
                )}
              </div>
            </div> */}

            {/* <div className='popular-collection-profile-flex'>
              <div className='popular-collection-profile'>
                <div className='popular-collection-profile-img'>
                  <img
                    src={item?.mediumLogo || '/images/item-details.png'}
                    alt='item-details-img'
                    className='pointer'
                    onClick={handleRouteChange}></img> */}
                  {/* <div className="verify-icon-block">
                                    <img
                                        src={"../../images/sale-verify.png"}
                                        alt="sale-img"
                                    ></img>
                                </div> */}
                {/* </div>
                <div className='popular-collection-profile-content'>
                  <h4>{item?.name}</h4>
                  <p>{item?.totalOwners} Owners</p>
                </div>
              </div>
              <div className='profile-item-block'>
                <h4>{item?.totalItemCount} Items</h4>
              </div>
            </div> */}
            {/* <div className='popular-collection-price'>
              <div className='d-flex justify-content-between' style={{ width: '240px' }}>
                <div className='popular-collection-price-content'>
                  <h2>
                    <img src={CHAIN_LOGO[item?.chainId]} alt='ethe-img'></img>
                    <span>
                      {usdFormatter.format(item?.tradingVolume || 0)} */}
                      {/* {fixDecimal(item?.tradingVolume, 4)}{" "} */}
                      {/* {item?.symbol} */}
                    {/* </span>
                  </h2> */}
                  {/* <p>$ {fixDecimal(item?.usdVolume, 4)}</p> */}
                {/* </div> */}
                {/* <div className='popular-collection-price-content'>
                  <h2>
                    <span className='text-black-50'>Floor: </span>
                    <span>
                      {fixDecimal(item?.floorPrice || 0, 3)} {item?.tokenSymbol}
                    </span>
                  </h2>
                </div>
              </div> */}

              {/* <div className='link-popular-block'>
                <span onClick={() => handleLike(item?._id)}>
                  <Like item={item} />
                </span>
              </div> */}
            {/* </div> */}
          </div>
        </BackgroundGradient>
      </div>
    );
};

export default PopularCollectionCard;
