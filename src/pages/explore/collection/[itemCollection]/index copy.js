/** @format */

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import Accordion from "react-bootstrap/Accordion";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import { Button, CommonProductBLock, Input } from "@/styles/pages/main.style";
import { useCollectionItems } from "@/hooks/useFetchHooks";
import {
    BLOCK_EXPLORER_URL,
    CHAIN_WITH_LOGO,
    COLLECTION_DETAILS_FILTER,
} from "@/constant";
import {
    CountParser,
    Toast,
    copyToClipboard,
    fixDecimal,
    getNameByChainId,
    shortenText,
} from "@/utils";
import { useRouter } from "next/router";
import { Histogram, ItemCard, Loader } from "@/components";
import { Spinner } from "react-bootstrap";
import { useLikeItem } from "@/hooks/useHome";
import ImageLoader from "@/components/Common/ImageLoader";
import PageTitle from "@/components/Common/PageTitle";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { collectionUriUpdateAction } from "@/redux/actions/marketAction";
import { useDispatch } from "react-redux";

const CollectionPage = ({ params }) => {
    const {
        payload,
        loading,
        items,
        count,
        totalPages,
        page,
        hasMore,
        priceArray,
        collectionDetails,
        orderOptions,
        filterChange,
        priceFilter,
        setPriceFilter,
        orderChange,
        handleAttributeSelect,
        handlePageChange,
        handleSearch,
        handlePriceChange,
    } = useCollectionItems({ limit: 20 });
    const { handleLike } = useLikeItem();
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [traits, setTraits] = useState([]);
    const [bannerPic, setBannerPic] = useState();
    const [bannerFile, setBannerFile] = useState();
    const [grid, setGrid] = useState("four");
    const { library, chainId, account } = useActiveWeb3React();

    console.log('collectionDetails', collectionDetails)


    useEffect(() => {
        setTraits(collectionDetails?.traitsTypes);
    }, [collectionDetails?.traitsTypes]);

    useEffect(() => {
        const filteredTraits = collectionDetails?.traitsTypes?.filter(
            (trait) => {
                const lowerCaseSearchQuery = searchQuery.toLowerCase();
                return (
                    trait.traitsValues.some((tv) =>
                        tv.value.toLowerCase().includes(lowerCaseSearchQuery)
                    ) || trait.name.toLowerCase().includes(lowerCaseSearchQuery)
                );
            }
        );
        setTraits(filteredTraits);
    }, [searchQuery]);

    //Update Banner image

    const onSubmit = () => {
        if (!bannerFile || !collectionDetails?.address) return;
        dispatch(
            collectionUriUpdateAction({
                collection: collectionDetails,
                collectionCoverFile: bannerFile,
                provider: library,
                chainId,
            })
        );
    };

    function handleFileChange(e) {
        let { files } = e.target;
        if (files.length) {
            if (bannerPic instanceof Blob) {
                URL.revokeObjectURL(bannerPic);
            }
            const fileType = files[0].type.split("/")[0];
            if (fileType === "image") {
                setBannerFile(files[0]);
                setBannerPic(URL.createObjectURL(files[0]));
            } else {
                Toast.error("Unsupported Type");
            }
        }
    }
    return (
        <>
            <PageTitle
                title={`${
                    collectionDetails?.name || "NewCollection"
                } - Collection`}
                imageUrl={collectionDetails?.image}
                id={collectionDetails?._id}
            />
            <CommonPageBlockPad className="no-container-padding dark-mode-body">
                <div className="graphics-inner-shape">
                    {/* <img
                        src={"../../images/graphics-block-inner.png"}
                        alt="graphics-img"
                    ></img> */}
                </div>
                <div className="graphics-inner-shape-two">
                    {/* <img
                        src={"../../images/graphics-block-inner-2.png"}
                        alt="graphics-img"
                    ></img> */}
                </div>
                <div className="graphics-inner-shape-three">
                    {/* <img
                        src={"../../images/graphics-block-inner-3.png"}
                        alt="graphics-img"
                    ></img> */}
                </div>
                <div className="top-collection-block">
                    <div className="top-banner-main">
                        <ImageLoader
                            src={
                                bannerPic ||
                                collectionDetails?.coverUrl ||
                                "../../images/banner-collection.png"
                            }
                            alt="Banner"
                        ></ImageLoader>
                        {/* <img
                            src={
                                bannerPic ||
                                collectionDetails?.coverUrl ||
                                "../../images/banner-collection.png"
                            }
                            alt=""
                        ></img> */}
                    </div>
                    <div className="add-to-block">
                        {/* <div className='add-to-wishlist'>
            <Button>
              <svg width='16' height='14' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M11.5802 0.105469C10.2795 0.105469 9.01384 0.703125 8.20525 1.6875C7.39665 0.703125 6.13103 0.105469 4.83025 0.105469C2.50993 0.105469 0.716966 1.93359 0.716966 4.21875C0.716966 7.06641 3.24822 9.38672 7.1154 12.9023L8.20525 13.8516L9.29509 12.8672C13.1623 9.38672 15.6935 7.06641 15.6935 4.21875C15.6935 1.93359 13.9006 0.105469 11.5802 0.105469ZM8.27556 11.7773L8.20525 11.8477L8.13493 11.7773C4.549 8.54297 2.19353 6.39844 2.19353 4.21875C2.19353 2.74219 3.31853 1.61719 4.83025 1.61719C5.9904 1.61719 7.1154 2.35547 7.50212 3.375H8.90837C9.29509 2.35547 10.4201 1.61719 11.5802 1.61719C13.092 1.61719 14.217 2.74219 14.217 4.21875C14.217 6.39844 11.8615 8.54297 8.27556 11.7773Z'
                  fill='#191820'
                />
              </svg>
              <span>Add to Wishlist</span>
            </Button>
          </div>
          <div className='common-block-dots'>
            <Link href='{}'>
              <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M3.76164 0.439453V1.91602H8.71867L-7.53403e-05 10.6348L1.05461 11.6895L9.77336 2.9707V7.92773H11.2499V0.439453H3.76164Z'
                  fill='#191820'
                />
              </svg>
            </Link>
          </div>
          <div className='common-block-dots'>
            <Link href='{}'>
              <svg width='13' height='4' viewBox='0 0 13 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M2.18913 0.488281C1.38054 0.488281 0.677415 1.19141 0.677415 2C0.677415 2.80859 1.38054 3.51172 2.18913 3.51172C2.99773 3.51172 3.70085 2.80859 3.70085 2C3.70085 1.19141 2.99773 0.488281 2.18913 0.488281ZM11.1891 0.488281C10.3805 0.488281 9.67741 1.19141 9.67741 2C9.67741 2.80859 10.3805 3.51172 11.1891 3.51172C11.9977 3.51172 12.7009 2.80859 12.7009 2C12.7009 1.19141 11.9977 0.488281 11.1891 0.488281ZM6.68913 0.488281C5.88054 0.488281 5.17741 1.19141 5.17741 2C5.17741 2.80859 5.88054 3.51172 6.68913 3.51172C7.49773 3.51172 8.20085 2.80859 8.20085 2C8.20085 1.19141 7.49773 0.488281 6.68913 0.488281Z'
                  fill='#191820'
                />
              </svg>
            </Link>
          </div> */}

                        {/* Social links */}

                        {/* <ul>
                        <li>
                            <Link href="">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.6333 10.667C12.7 10.117 12.75 9.56699 12.75 9.00033C12.75 8.43366 12.7 7.88366 12.6333 7.33366H15.45C15.5833 7.86699 15.6666 8.42533 15.6666 9.00033C15.6666 9.57533 15.5833 10.1337 15.45 10.667M11.1583 15.3003C11.6583 14.3753 12.0416 13.3753 12.3083 12.3337H14.7666C13.9593 13.7239 12.6784 14.777 11.1583 15.3003ZM10.95 10.667H7.04996C6.96663 10.117 6.91663 9.56699 6.91663 9.00033C6.91663 8.43366 6.96663 7.87533 7.04996 7.33366H10.95C11.025 7.87533 11.0833 8.43366 11.0833 9.00033C11.0833 9.56699 11.025 10.117 10.95 10.667ZM8.99996 15.6337C8.30829 14.6337 7.74996 13.5253 7.40829 12.3337H10.5916C10.25 13.5253 9.69163 14.6337 8.99996 15.6337ZM5.66663 5.66699H3.23329C4.03234 4.273 5.31229 3.21823 6.83329 2.70033C6.33329 3.62533 5.95829 4.62533 5.66663 5.66699ZM3.23329 12.3337H5.66663C5.95829 13.3753 6.33329 14.3753 6.83329 15.3003C5.31548 14.7767 4.03733 13.7234 3.23329 12.3337ZM2.54996 10.667C2.41663 10.1337 2.33329 9.57533 2.33329 9.00033C2.33329 8.42533 2.41663 7.86699 2.54996 7.33366H5.36663C5.29996 7.88366 5.24996 8.43366 5.24996 9.00033C5.24996 9.56699 5.29996 10.117 5.36663 10.667M8.99996 2.35866C9.69163 3.35866 10.25 4.47533 10.5916 5.66699H7.40829C7.74996 4.47533 8.30829 3.35866 8.99996 2.35866ZM14.7666 5.66699H12.3083C12.0475 4.63487 11.6613 3.63857 11.1583 2.70033C12.6916 3.22533 13.9666 4.28366 14.7666 5.66699ZM8.99996 0.666992C4.39163 0.666992 0.666626 4.41699 0.666626 9.00033C0.666626 11.2105 1.5446 13.3301 3.1074 14.8929C3.88122 15.6667 4.79988 16.2805 5.81093 16.6993C6.82198 17.1181 7.90561 17.3337 8.99996 17.3337C11.2101 17.3337 13.3297 16.4557 14.8925 14.8929C16.4553 13.3301 17.3333 11.2105 17.3333 9.00033C17.3333 7.90598 17.1177 6.82234 16.699 5.8113C16.2802 4.80025 15.6663 3.88159 14.8925 3.10777C14.1187 2.33395 13.2 1.72012 12.189 1.30133C11.1779 0.88254 10.0943 0.666992 8.99996 0.666992Z"
                                        fill="white"
                                    />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.0584 4.44138C14.9501 3.92471 13.7501 3.54971 12.5001 3.33305C12.4891 3.3327 12.4782 3.33475 12.4681 3.33907C12.458 3.34339 12.449 3.34987 12.4417 3.35805C12.2917 3.63305 12.1167 3.99138 12.0001 4.26638C10.6742 4.06638 9.32589 4.06638 8.00006 4.26638C7.88339 3.98305 7.70839 3.63305 7.55006 3.35805C7.54172 3.34138 7.51672 3.33305 7.49172 3.33305C6.24172 3.54971 5.05006 3.92471 3.93339 4.44138C3.92506 4.44138 3.91672 4.44971 3.90839 4.45805C1.64172 7.84971 1.01672 11.1497 1.32506 14.4164C1.32506 14.433 1.33339 14.4497 1.35006 14.458C2.85006 15.558 4.29172 16.2247 5.71672 16.6664C5.74172 16.6747 5.76672 16.6664 5.77506 16.6497C6.10839 16.1914 6.40839 15.708 6.66672 15.1997C6.68339 15.1664 6.66672 15.133 6.63339 15.1247C6.15839 14.9414 5.70839 14.7247 5.26672 14.4747C5.23339 14.458 5.23339 14.408 5.25839 14.383C5.35006 14.3164 5.44172 14.2414 5.53339 14.1747C5.55006 14.158 5.57506 14.158 5.59172 14.1664C8.45839 15.4747 11.5501 15.4747 14.3834 14.1664C14.4001 14.158 14.4251 14.158 14.4417 14.1747C14.5334 14.2497 14.6251 14.3164 14.7167 14.3914C14.7501 14.4164 14.7501 14.4664 14.7084 14.483C14.2751 14.7414 13.8167 14.9497 13.3417 15.133C13.3084 15.1414 13.3001 15.183 13.3084 15.208C13.5751 15.7164 13.8751 16.1997 14.2001 16.658C14.2251 16.6664 14.2501 16.6747 14.2751 16.6664C15.7084 16.2247 17.1501 15.558 18.6501 14.458C18.6667 14.4497 18.6751 14.433 18.6751 14.4164C19.0417 10.6414 18.0667 7.36638 16.0917 4.45805C16.0834 4.44971 16.0751 4.44138 16.0584 4.44138ZM7.10006 12.4247C6.24172 12.4247 5.52506 11.633 5.52506 10.658C5.52506 9.68305 6.22506 8.89138 7.10006 8.89138C7.98339 8.89138 8.68339 9.69138 8.67506 10.658C8.67506 11.633 7.97506 12.4247 7.10006 12.4247ZM12.9084 12.4247C12.0501 12.4247 11.3334 11.633 11.3334 10.658C11.3334 9.68305 12.0334 8.89138 12.9084 8.89138C13.7917 8.89138 14.4917 9.69138 14.4834 10.658C14.4834 11.633 13.7917 12.4247 12.9084 12.4247Z"
                                        fill="white"
                                    />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_543_15933)">
                                        <path
                                            d="M15.7508 0.960938H18.8175L12.1175 8.61927L20 19.0384H13.8283L8.995 12.7184L3.46333 19.0384H0.395L7.56167 10.8468L0 0.961771H6.32833L10.6975 6.73844L15.7508 0.960938ZM14.675 17.2034H16.3742L5.405 2.7001H3.58167L14.675 17.2034Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_543_15933">
                                            <rect
                                                width="20"
                                                height="20"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.50002 1.66699H13.5C16.1667 1.66699 18.3334 3.83366 18.3334 6.50033V13.5003C18.3334 14.7822 17.8241 16.0116 16.9177 16.918C16.0113 17.8244 14.7819 18.3337 13.5 18.3337H6.50002C3.83335 18.3337 1.66669 16.167 1.66669 13.5003V6.50033C1.66669 5.21845 2.17591 3.98907 3.08234 3.08264C3.98876 2.17622 5.21814 1.66699 6.50002 1.66699ZM6.33335 3.33366C5.5377 3.33366 4.77464 3.64973 4.21203 4.21234C3.64942 4.77495 3.33335 5.53801 3.33335 6.33366V13.667C3.33335 15.3253 4.67502 16.667 6.33335 16.667H13.6667C14.4623 16.667 15.2254 16.3509 15.788 15.7883C16.3506 15.2257 16.6667 14.4626 16.6667 13.667V6.33366C16.6667 4.67533 15.325 3.33366 13.6667 3.33366H6.33335ZM14.375 4.58366C14.6513 4.58366 14.9162 4.69341 15.1116 4.88876C15.3069 5.08411 15.4167 5.34906 15.4167 5.62533C15.4167 5.90159 15.3069 6.16654 15.1116 6.3619C14.9162 6.55725 14.6513 6.66699 14.375 6.66699C14.0988 6.66699 13.8338 6.55725 13.6384 6.3619C13.4431 6.16654 13.3334 5.90159 13.3334 5.62533C13.3334 5.34906 13.4431 5.08411 13.6384 4.88876C13.8338 4.69341 14.0988 4.58366 14.375 4.58366ZM10 5.83366C11.1051 5.83366 12.1649 6.27265 12.9463 7.05405C13.7277 7.83545 14.1667 8.89526 14.1667 10.0003C14.1667 11.1054 13.7277 12.1652 12.9463 12.9466C12.1649 13.728 11.1051 14.167 10 14.167C8.89495 14.167 7.83514 13.728 7.05374 12.9466C6.27234 12.1652 5.83335 11.1054 5.83335 10.0003C5.83335 8.89526 6.27234 7.83545 7.05374 7.05405C7.83514 6.27265 8.89495 5.83366 10 5.83366ZM10 7.50033C9.33698 7.50033 8.70109 7.76372 8.23225 8.23256C7.76341 8.7014 7.50002 9.33728 7.50002 10.0003C7.50002 10.6634 7.76341 11.2993 8.23225 11.7681C8.70109 12.2369 9.33698 12.5003 10 12.5003C10.6631 12.5003 11.2989 12.2369 11.7678 11.7681C12.2366 11.2993 12.5 10.6634 12.5 10.0003C12.5 9.33728 12.2366 8.7014 11.7678 8.23256C11.2989 7.76372 10.6631 7.50033 10 7.50033Z"
                                        fill="white"
                                    />
                                </svg>
                            </Link>
                        </li>
                    </ul> */}
                    </div>
                </div>
                <div className="profile-main-collection">
                    {collectionDetails?.image && (
                        <div className="profile-img">
                            <ImageLoader
                                src={
                                    collectionDetails?.image ||
                                    "../../images/collection-img.png"
                                }
                                alt=""
                                rounded={true}
                            ></ImageLoader>
                        </div>
                    )}
                    <ul>
                        <li>
                            <a
                                href={`${BLOCK_EXPLORER_URL[chainId]}/address/${collectionDetails?.address}`}
                                target="_blank"
                            >
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.76164 0.439453V1.91602H8.71867L-7.53403e-05 10.6348L1.05461 11.6895L9.77336 2.9707V7.92773H11.2499V0.439453H3.76164Z"
                                        fill="#191820"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <Link href="">
                                <svg
                                    width="13"
                                    height="4"
                                    viewBox="0 0 13 4"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.18913 0.488281C1.38054 0.488281 0.677415 1.19141 0.677415 2C0.677415 2.80859 1.38054 3.51172 2.18913 3.51172C2.99773 3.51172 3.70085 2.80859 3.70085 2C3.70085 1.19141 2.99773 0.488281 2.18913 0.488281ZM11.1891 0.488281C10.3805 0.488281 9.67741 1.19141 9.67741 2C9.67741 2.80859 10.3805 3.51172 11.1891 3.51172C11.9977 3.51172 12.7009 2.80859 12.7009 2C12.7009 1.19141 11.9977 0.488281 11.1891 0.488281ZM6.68913 0.488281C5.88054 0.488281 5.17741 1.19141 5.17741 2C5.17741 2.80859 5.88054 3.51172 6.68913 3.51172C7.49773 3.51172 8.20085 2.80859 8.20085 2C8.20085 1.19141 7.49773 0.488281 6.68913 0.488281Z"
                                        fill="#191820"
                                    />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                    {/* <div className='details-profile-block'>
          <h3>Rabby </h3>
          <p>0x0dD9...7F3B</p>
        </div> */}
                </div>
                {collectionDetails?.creatorAddress ==
                    account?.toLowerCase() && (
                    <>
                        <div className="d-flex justify-content-end mt-3">
                            <Input
                                type="file"
                                name="banners"
                                onChange={handleFileChange}
                                id="banners"
                                accept="image/*"
                                style={{ maxWidth: "242px" }}
                            />
                            <Button
                                isBorderBtn={true}
                                className="ms-2"
                                style={{ width: "150px" }}
                                onClick={onSubmit}
                            >
                                Change Banner
                            </Button>
                        </div>
                    </>
                )}
                <div className="name-details-block">
                    <div className="name-details-block-left">
                        <h3>
                            <span>{collectionDetails?.name}</span>
                            {/* <svg
								width="20"
								height="21"
								viewBox="0 0 20 21"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M17.6453 8.53281C17.3508 8.225 17.0461 7.90781 16.9312 7.62891C16.825 7.37344 16.8187 6.95 16.8125 6.53984C16.8008 5.77734 16.7883 4.91328 16.1875 4.3125C15.5867 3.71172 14.7227 3.69922 13.9602 3.6875C13.55 3.68125 13.1266 3.675 12.8711 3.56875C12.593 3.45391 12.275 3.14922 11.9672 2.85469C11.4281 2.33672 10.8156 1.75 10 1.75C9.18437 1.75 8.57266 2.33672 8.03281 2.85469C7.725 3.14922 7.40781 3.45391 7.12891 3.56875C6.875 3.675 6.45 3.68125 6.03984 3.6875C5.27734 3.69922 4.41328 3.71172 3.8125 4.3125C3.21172 4.91328 3.20312 5.77734 3.1875 6.53984C3.18125 6.95 3.175 7.37344 3.06875 7.62891C2.95391 7.90703 2.64922 8.225 2.35469 8.53281C1.83672 9.07188 1.25 9.68437 1.25 10.5C1.25 11.3156 1.83672 11.9273 2.35469 12.4672C2.64922 12.775 2.95391 13.0922 3.06875 13.3711C3.175 13.6266 3.18125 14.05 3.1875 14.4602C3.19922 15.2227 3.21172 16.0867 3.8125 16.6875C4.41328 17.2883 5.27734 17.3008 6.03984 17.3125C6.45 17.3187 6.87344 17.325 7.12891 17.4312C7.40703 17.5461 7.725 17.8508 8.03281 18.1453C8.57188 18.6633 9.18437 19.25 10 19.25C10.8156 19.25 11.4273 18.6633 11.9672 18.1453C12.275 17.8508 12.5922 17.5461 12.8711 17.4312C13.1266 17.325 13.55 17.3187 13.9602 17.3125C14.7227 17.3008 15.5867 17.2883 16.1875 16.6875C16.7883 16.0867 16.8008 15.2227 16.8125 14.4602C16.8187 14.05 16.825 13.6266 16.9312 13.3711C17.0461 13.093 17.3508 12.775 17.6453 12.4672C18.1633 11.9281 18.75 11.3156 18.75 10.5C18.75 9.68437 18.1633 9.07266 17.6453 8.53281ZM13.5672 9.06719L9.19219 13.4422C9.13414 13.5003 9.06521 13.5464 8.98934 13.5779C8.91346 13.6093 8.83213 13.6255 8.75 13.6255C8.66787 13.6255 8.58654 13.6093 8.51066 13.5779C8.43479 13.5464 8.36586 13.5003 8.30781 13.4422L6.43281 11.5672C6.31554 11.4499 6.24965 11.2909 6.24965 11.125C6.24965 10.9591 6.31554 10.8001 6.43281 10.6828C6.55009 10.5655 6.70915 10.4997 6.875 10.4997C7.04085 10.4997 7.19991 10.5655 7.31719 10.6828L8.75 12.1164L12.6828 8.18281C12.7409 8.12474 12.8098 8.07868 12.8857 8.04725C12.9616 8.01583 13.0429 7.99965 13.125 7.99965C13.2071 7.99965 13.2884 8.01583 13.3643 8.04725C13.4402 8.07868 13.5091 8.12474 13.5672 8.18281C13.6253 8.24088 13.6713 8.30982 13.7027 8.38569C13.7342 8.46156 13.7503 8.54288 13.7503 8.625C13.7503 8.70712 13.7342 8.78844 13.7027 8.86431C13.6713 8.94018 13.6253 9.00912 13.5672 9.06719Z"
									fill="#FB4EF1"
								/>
							</svg> */}
                        </h3>
                        <div className="name-details-text">
                            <p>
                                Created by{" "}
                                <strong>
                                    {collectionDetails?.creatorName || ""}
                                </strong>
                            </p>
                            <p className="d-flex-block">
                                Royalties{" "}
                                <span className="high-block">
                                    {collectionDetails?.royalties || "0"}%
                                </span>
                            </p>
                            <p className="highlight-block-gr">
                                {collectionDetails?.address || ""}
                            </p>
                        </div>
                        {/* <p>
                        9,999 PIRATE CAPTAINZ SEARCHING FOR THE LEGENDARY
                        MEMELAND.
                    </p> */}
                        <p className="last-text">
                            {collectionDetails?.description || ""}
                        </p>
                    </div>
                    <div className="name-details-block-right">
                        <div className="name-details-block-right-inner">
                            <div className="name-details-block-right-date">
                                <p>
                                    <span>Floor</span>{" "}
                                    <span>
                                        {fixDecimal(
                                            parseFloat(
                                                collectionDetails?.floorPrice
                                            ),
                                            4
                                        )}{" "}
                                        {collectionDetails?.symbol || ""}
                                    </span>
                                </p>
                                <p>
                                    <span>Volume</span>{" "}
                                    <span>
                                        {fixDecimal(
                                            parseFloat(
                                                collectionDetails?.tradingVolume
                                            ),
                                            4
                                        )}{" "}
                                        {collectionDetails?.symbol || ""}
                                    </span>
                                </p>
                                <p>
                                    <span>Items</span>
                                    {collectionDetails?.totalItemCount && (
                                        <span>
                                            {CountParser(
                                                collectionDetails?.totalItemCount
                                            )}
                                        </span>
                                    )}
                                </p>
                                {/* <p>
                                <span>Volume</span> <span>4.1K</span>
                            </p> */}
                            </div>
                            <div className="name-details-block-right-date">
                                <p>
                                    <span>Blockchain</span>{" "}
                                    {collectionDetails?.chainId && (
                                        <span>
                                            {getNameByChainId(
                                                collectionDetails?.chainId
                                            )}
                                        </span>
                                    )}
                                </p>
                                <p className="bottom-padding">
                                    <span>Address</span>{" "}
                                    <span className="copy-text">
                                        {collectionDetails?.address &&
                                            shortenText(
                                                collectionDetails?.address
                                            )}
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            onClick={() =>
                                                copyToClipboard(
                                                    collectionDetails?.address
                                                )
                                            }
                                        >
                                            <path
                                                d="M6.66663 8.33268C6.66663 7.89065 6.84222 7.46673 7.15478 7.15417C7.46734 6.84161 7.89127 6.66602 8.33329 6.66602H15C15.442 6.66602 15.8659 6.84161 16.1785 7.15417C16.491 7.46673 16.6666 7.89065 16.6666 8.33268V14.9993C16.6666 15.4414 16.491 15.8653 16.1785 16.1779C15.8659 16.4904 15.442 16.666 15 16.666H8.33329C7.89127 16.666 7.46734 16.4904 7.15478 16.1779C6.84222 15.8653 6.66663 15.4414 6.66663 14.9993V8.33268Z"
                                                stroke="#B7B7B7"
                                                stroke-width="1.66667"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M13.3333 6.66634V4.99967C13.3333 4.55765 13.1577 4.13372 12.8452 3.82116C12.5326 3.5086 12.1087 3.33301 11.6666 3.33301H4.99998C4.55795 3.33301 4.13403 3.5086 3.82147 3.82116C3.50891 4.13372 3.33331 4.55765 3.33331 4.99967V11.6663C3.33331 12.1084 3.50891 12.5323 3.82147 12.8449C4.13403 13.1574 4.55795 13.333 4.99998 13.333H6.66665"
                                                stroke="#B7B7B7"
                                                stroke-width="1.66667"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filter-block-common">
                    <button className="back-button">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.6667 15L6.66675 10L11.6667 5L12.8334 6.16667L9.00008 10L12.8334 13.8333L11.6667 15Z"
                                fill="black"
                            />
                        </svg>
                        <span>Filters</span>
                    </button>
                    <div className="search-form-block">
                        <div className="search-box-form">
                            <input
                                type="text"
                                placeholder="Search by NFTs"
                                name="Search-NFT"
                                onChange={handleSearch}
                            />
                            <button>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.1249 17.2411L13.4049 12.5211C14.5391 11.1595 15.1047 9.41291 14.9841 7.64483C14.8634 5.87675 14.0657 4.22326 12.7569 3.02834C11.4482 1.83341 9.7291 1.18906 7.95736 1.22932C6.18562 1.26958 4.49761 1.99134 3.24448 3.24448C1.99134 4.49761 1.26958 6.18562 1.22932 7.95736C1.18906 9.7291 1.83341 11.4482 3.02834 12.7569C4.22326 14.0657 5.87675 14.8634 7.64483 14.9841C9.41291 15.1047 11.1595 14.5391 12.5211 13.4049L17.2411 18.1249L18.1249 17.2411ZM2.49989 8.12489C2.49989 7.01237 2.82979 5.92483 3.44787 4.99981C4.06596 4.07478 4.94446 3.35381 5.97229 2.92807C7.00013 2.50232 8.13113 2.39093 9.22227 2.60797C10.3134 2.82501 11.3157 3.36074 12.1024 4.14741C12.889 4.93408 13.4248 5.93636 13.6418 7.02751C13.8588 8.11865 13.7475 9.24965 13.3217 10.2775C12.896 11.3053 12.175 12.1838 11.25 12.8019C10.3249 13.42 9.23741 13.7499 8.12489 13.7499C6.63355 13.7482 5.20377 13.1551 4.14924 12.1005C3.09471 11.046 2.50154 9.61622 2.49989 8.12489Z"
                                        fill="#9E9E9E"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="form-group">
                        <Select
                            name="filter2"
                            options={orderOptions}
                            className="TX-select2-wrapper"
                            classNamePrefix="TX-fix-select"
                            onChange={orderChange}
                            defaultValue={orderOptions[0]}
                        />
                    </div>
                    <div className="odd-filter-block">
                        <button onClick={() => setGrid("four")}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.25 3.125C1.25 2.62772 1.44754 2.15081 1.79917 1.79917C2.15081 1.44754 2.62772 1.25 3.125 1.25H6.875C7.37228 1.25 7.84919 1.44754 8.20083 1.79917C8.55246 2.15081 8.75 2.62772 8.75 3.125V6.875C8.75 7.37228 8.55246 7.84919 8.20083 8.20083C7.84919 8.55246 7.37228 8.75 6.875 8.75H3.125C2.62772 8.75 2.15081 8.55246 1.79917 8.20083C1.44754 7.84919 1.25 7.37228 1.25 6.875V3.125ZM11.25 3.125C11.25 2.62772 11.4475 2.15081 11.7992 1.79917C12.1508 1.44754 12.6277 1.25 13.125 1.25H16.875C17.3723 1.25 17.8492 1.44754 18.2008 1.79917C18.5525 2.15081 18.75 2.62772 18.75 3.125V6.875C18.75 7.37228 18.5525 7.84919 18.2008 8.20083C17.8492 8.55246 17.3723 8.75 16.875 8.75H13.125C12.6277 8.75 12.1508 8.55246 11.7992 8.20083C11.4475 7.84919 11.25 7.37228 11.25 6.875V3.125ZM1.25 13.125C1.25 12.6277 1.44754 12.1508 1.79917 11.7992C2.15081 11.4475 2.62772 11.25 3.125 11.25H6.875C7.37228 11.25 7.84919 11.4475 8.20083 11.7992C8.55246 12.1508 8.75 12.6277 8.75 13.125V16.875C8.75 17.3723 8.55246 17.8492 8.20083 18.2008C7.84919 18.5525 7.37228 18.75 6.875 18.75H3.125C2.62772 18.75 2.15081 18.5525 1.79917 18.2008C1.44754 17.8492 1.25 17.3723 1.25 16.875V13.125ZM11.25 13.125C11.25 12.6277 11.4475 12.1508 11.7992 11.7992C12.1508 11.4475 12.6277 11.25 13.125 11.25H16.875C17.3723 11.25 17.8492 11.4475 18.2008 11.7992C18.5525 12.1508 18.75 12.6277 18.75 13.125V16.875C18.75 17.3723 18.5525 17.8492 18.2008 18.2008C17.8492 18.5525 17.3723 18.75 16.875 18.75H13.125C12.6277 18.75 12.1508 18.5525 11.7992 18.2008C11.4475 17.8492 11.25 17.3723 11.25 16.875V13.125Z"
                                    fill={grid === "four" ? "black" : "#979797"}
                                />
                            </svg>
                        </button>
                        <button onClick={() => setGrid("five")}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.6667 8.33333V11.6667H8.33333V8.33333H11.6667ZM13.3333 8.33333H17.5V11.6667H13.3333V8.33333ZM11.6667 17.5H8.33333V13.3333H11.6667V17.5ZM13.3333 17.5V13.3333H17.5V16.6667C17.5 16.8877 17.4122 17.0996 17.2559 17.2559C17.0996 17.4122 16.8877 17.5 16.6667 17.5H13.3333ZM11.6667 2.5V6.66667H8.33333V2.5H11.6667ZM13.3333 2.5H16.6667C16.8877 2.5 17.0996 2.5878 17.2559 2.74408C17.4122 2.90036 17.5 3.11232 17.5 3.33333V6.66667H13.3333V2.5ZM6.66667 8.33333V11.6667H2.5V8.33333H6.66667ZM6.66667 17.5H3.33333C3.11232 17.5 2.90036 17.4122 2.74408 17.2559C2.5878 17.0996 2.5 16.8877 2.5 16.6667V13.3333H6.66667V17.5ZM6.66667 2.5V6.66667H2.5V3.33333C2.5 3.11232 2.5878 2.90036 2.74408 2.74408C2.90036 2.5878 3.11232 2.5 3.33333 2.5H6.66667Z"
                                    fill={grid === "five" ? "black" : "#979797"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="filter-block-data-block">
                    <div className="filter-block-data-block-left">
                        <div className="filter-block-data-block-left-inner">
                            <Accordion defaultActiveKey={["0"]} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Status</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="status-button">
                                            {COLLECTION_DETAILS_FILTER.map(
                                                ({ label, value }, index) => (
                                                    <div className="checkbox-filter-block">
                                                        <button
                                                            onClick={() =>
                                                                filterChange(
                                                                    value
                                                                )
                                                            }
                                                            className={
                                                                payload
                                                                    .itemStatus[0] ==
                                                                    value ||
                                                                (value ==
                                                                    "All" &&
                                                                    payload
                                                                        .itemStatus
                                                                        .length ==
                                                                        0)
                                                                    ? "selected"
                                                                    : ""
                                                            }
                                                        >
                                                            {label}
                                                        </button>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    {/* <Accordion.Header>Price</Accordion.Header>
                                <Accordion.Body></Accordion.Body> */}

                                    <h5 className="fw-bold">Price</h5>
                                    {priceArray?.length > 1 && (
                                        <>
                                            <div className="d-flex mb-1">
                                                <div className="d-flex w-100">
                                                    <Histogram
                                                        barMargin={1}
                                                        data={[...priceArray]}
                                                        getBoundries={(
                                                            values
                                                        ) => {
                                                            let newArr = [
                                                                priceArray.find(
                                                                    (item) =>
                                                                        item.value ===
                                                                        values?.selectionMin
                                                                )?.price,
                                                                priceArray.find(
                                                                    (item) =>
                                                                        item.value ===
                                                                        values?.selectionMax
                                                                )?.price,
                                                                // values?.selectionMin,
                                                                // values?.selectionMax,
                                                            ];
                                                            setPriceFilter(
                                                                newArr
                                                            );
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-around">
                                                <Button
                                                    onClick={() => {
                                                        handlePriceChange([]);
                                                    }}
                                                    className="mt-2"
                                                    style={{
                                                        padding: "8px 12px",
                                                        width: "40%",
                                                    }}
                                                >
                                                    Reset
                                                </Button>
                                                <Button
                                                    onClick={() => {
                                                        handlePriceChange(
                                                            priceFilter
                                                        );
                                                    }}
                                                    className="mt-2"
                                                    style={{
                                                        padding: "8px 12px",
                                                        width: "40%",
                                                    }}
                                                >
                                                    Apply
                                                </Button>
                                            </div>
                                        </>
                                    )}
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        Attributes
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="search-form-block">
                                            <div className="search-box-form">
                                                <input
                                                    type="text"
                                                    placeholder="Search Attributes"
                                                    onChange={(e) =>
                                                        setSearchQuery(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <button>
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M18.1249 17.2411L13.4049 12.5211C14.5391 11.1595 15.1047 9.41291 14.9841 7.64483C14.8634 5.87675 14.0657 4.22326 12.7569 3.02834C11.4482 1.83341 9.7291 1.18906 7.95736 1.22932C6.18562 1.26958 4.49761 1.99134 3.24448 3.24448C1.99134 4.49761 1.26958 6.18562 1.22932 7.95736C1.18906 9.7291 1.83341 11.4482 3.02834 12.7569C4.22326 14.0657 5.87675 14.8634 7.64483 14.9841C9.41291 15.1047 11.1595 14.5391 12.5211 13.4049L17.2411 18.1249L18.1249 17.2411ZM2.49989 8.12489C2.49989 7.01237 2.82979 5.92483 3.44787 4.99981C4.06596 4.07478 4.94446 3.35381 5.97229 2.92807C7.00013 2.50232 8.13113 2.39093 9.22227 2.60797C10.3134 2.82501 11.3157 3.36074 12.1024 4.14741C12.889 4.93408 13.4248 5.93636 13.6418 7.02751C13.8588 8.11865 13.7475 9.24965 13.3217 10.2775C12.896 11.3053 12.175 12.1838 11.25 12.8019C10.3249 13.42 9.23741 13.7499 8.12489 13.7499C6.63355 13.7482 5.20377 13.1551 4.14924 12.1005C3.09471 11.046 2.50154 9.61622 2.49989 8.12489Z"
                                                            fill="#9E9E9E"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                {traits?.length > 0 &&
                                    traits?.map((type, index) => (
                                        <Accordion.Item
                                            eventKey={index + 3}
                                            key={index}
                                        >
                                            <Accordion.Header>
                                                {type?.name}
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <div className="checkbox-block-custom-filter">
                                                    {type?.traitsValues?.map(
                                                        (
                                                            { value, count },
                                                            index
                                                        ) => (
                                                            <div
                                                                className="checkbox-filter-block"
                                                                key={index}
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    id={
                                                                        value ||
                                                                        "trait[]"
                                                                    }
                                                                    name="attributes"
                                                                    value={
                                                                        value
                                                                    }
                                                                    onChange={
                                                                        handleAttributeSelect
                                                                    }
                                                                ></input>
                                                                <label
                                                                    for={
                                                                        value ||
                                                                        "trait[]"
                                                                    }
                                                                >
                                                                    <span>
                                                                        <img
                                                                            src={
                                                                                "../../images/check-icon-block.svg"
                                                                            }
                                                                            alt="check-icon"
                                                                        ></img>
                                                                    </span>
                                                                    <div className="flex-block-check">
                                                                        <h4>
                                                                            {value ||
                                                                                ""}
                                                                        </h4>
                                                                        <h4>
                                                                            {count ||
                                                                                0}
                                                                        </h4>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                {/* <Accordion.Item eventKey="3">
                                <Accordion.Header>Type</Accordion.Header>
                                <Accordion.Body>
                                    <div className="checkbox-block-custom-filter">
                                        <div className="checkbox-filter-block">
                                            <input
                                                type="checkbox"
                                                id="buy"
                                            ></input>
                                            <label for="buy">
                                                <span>
                                                    <img
                                                        src={
                                                            "../../images/check-icon-block.svg"
                                                        }
                                                        alt="check-icon"
                                                    ></img>
                                                </span>
                                                <div className="flex-block-check">
                                                    <h4>Alien</h4>
                                                    <h4>68</h4>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="checkbox-filter-block">
                                            <input
                                                type="checkbox"
                                                id="buy"
                                            ></input>
                                            <label for="buy">
                                                <span>
                                                    <img
                                                        src={
                                                            "../../images/check-icon-block.svg"
                                                        }
                                                        alt="check-icon"
                                                    ></img>
                                                </span>
                                                <div className="flex-block-check">
                                                    <h4>Alien</h4>
                                                    <h4>68</h4>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="checkbox-filter-block">
                                            <input
                                                type="checkbox"
                                                id="buy"
                                            ></input>
                                            <label for="buy">
                                                <span>
                                                    <img
                                                        src={
                                                            "../../images/check-icon-block.svg"
                                                        }
                                                        alt="check-icon"
                                                    ></img>
                                                </span>
                                                <div className="flex-block-check">
                                                    <h4>Alien</h4>
                                                    <h4>68</h4>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="checkbox-filter-block">
                                            <input
                                                type="checkbox"
                                                id="buy"
                                            ></input>
                                            <label for="buy">
                                                <span>
                                                    <img
                                                        src={
                                                            "../../images/check-icon-block.svg"
                                                        }
                                                        alt="check-icon"
                                                    ></img>
                                                </span>
                                                <div className="flex-block-check">
                                                    <h4>Alien</h4>
                                                    <h4>68</h4>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item> */}
                                {/* <Accordion.Item eventKey="4">
                                <Accordion.Header>Stage</Accordion.Header>
                                <Accordion.Body>
                                    <div className="checkbox-block-custom-filter">
                                        <div className="checkbox-filter-block">
                                            <input
                                                type="checkbox"
                                                id="buy"
                                            ></input>
                                            <label for="buy">
                                                <span>
                                                    <img
                                                        src={
                                                            "../../images/check-icon-block.svg"
                                                        }
                                                        alt="check-icon"
                                                    ></img>
                                                </span>
                                                <div className="flex-block-check">
                                                    <h4>Alien</h4>
                                                    <h4>68</h4>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="checkbox-filter-block">
                                            <input
                                                type="checkbox"
                                                id="buy"
                                            ></input>
                                            <label for="buy">
                                                <span>
                                                    <img
                                                        src={
                                                            "../../images/check-icon-block.svg"
                                                        }
                                                        alt="check-icon"
                                                    ></img>
                                                </span>
                                                <div className="flex-block-check">
                                                    <h4>Alien</h4>
                                                    <h4>68</h4>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="checkbox-filter-block">
                                            <input
                                                type="checkbox"
                                                id="buy"
                                            ></input>
                                            <label for="buy">
                                                <span>
                                                    <img
                                                        src={
                                                            "../../images/check-icon-block.svg"
                                                        }
                                                        alt="check-icon"
                                                    ></img>
                                                </span>
                                                <div className="flex-block-check">
                                                    <h4>Alien</h4>
                                                    <h4>68</h4>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="checkbox-filter-block">
                                            <input
                                                type="checkbox"
                                                id="buy"
                                            ></input>
                                            <label for="buy">
                                                <span>
                                                    <img
                                                        src={
                                                            "../../images/check-icon-block.svg"
                                                        }
                                                        alt="check-icon"
                                                    ></img>
                                                </span>
                                                <div className="flex-block-check">
                                                    <h4>Alien</h4>
                                                    <h4>68</h4>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item> */}
                            </Accordion>
                        </div>
                    </div>
                    <div className="filter-block-data-block-right">
                        <CommonProductBLock className="explore-block-product">
                            {loading && page == 1 ? (
                                <>
                                    <div className="d-flex justify-content-center vh-100 align-items-center">
                                        <Spinner animation="border" size="lg" />
                                    </div>
                                </>
                            ) : !items?.length > 0 ? (
                                <>
                                    <div className="d-flex justify-content-center">
                                        {/* No NFTs Found! */}
                                    </div>
                                </>
                            ) : (
                                <div
                                    className={`common-product-block  ${
                                        grid === "five" && "flex-width-five"
                                    }`}
                                >
                                    {items?.map((item, index) => (
                                        <ItemCard
                                            key={index}
                                            item={{
                                                ...item,
                                                collectionImage:
                                                    collectionDetails?.lowLogo,
                                                collectionName:
                                                    collectionDetails?.name,
                                            }}
                                            handleLike={handleLike}
                                        />
                                    ))}
                                </div>
                            )}
                            {/* {items.length > 0 && (
                            <div
                                className={`common-product-block  ${
                                    grid === "five" && "flex-width-five"
                                }`}
                            >
                                {items?.map((item, index) => (
                                    <ItemCard
                                        key={index}
                                        item={item}
                                        handleLike={handleLike}
                                    />
                                ))}
                            </div>
                        )} */}
                            {loading && page > 1 && (
                                <div className="d-flex justify-content-center m-3">
                                    <Spinner size="lg" />
                                </div>
                            )}
                            {!loading && hasMore && (
                                <div className="common-btn-block">
                                    <Button
                                        className="border-dark-button"
                                        isBorderBtn={true}
                                        onClick={handlePageChange}
                                    >
                                        Load more
                                    </Button>
                                </div>
                            )}
                        </CommonProductBLock>
                    </div>
                </div>
            </CommonPageBlockPad>
        </>
    );
};

export default CollectionPage;
