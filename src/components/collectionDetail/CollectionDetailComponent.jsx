import Link from "next/link";
import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import { Button, CommonProductBLock, Input } from "@/styles/pages/main.style";
import { useCollectionDetails } from "@/hooks/useFetchHooks";
import { BLOCK_EXPLORER_URL, CHAIN_LOGO, GET_CHAIN_NAMES } from "@/constant";
import {
    CountParser,
    Toast,
    shortenText,
    usdParser,
    validateNetwork,
} from "@/utils";
import { Container, Spinner } from "react-bootstrap";
import ImageLoader from "@/components/Common/ImageLoader";
import PageTitle from "@/components/Common/PageTitle";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { collectionUriUpdateAction } from "@/redux/actions/marketAction";
import { useDispatch } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Table from "react-bootstrap/Table";
import { PublicProfile } from "../PublicProfile/PublicProfileProvider";
import NFTsTab from "./NFTsTab";
import ShareURLModal from "../ItemDetails/Model/ShareURLModal";
import CollectionActivityTab from "./CollectionActivityTab";
import CollectionAnalyticsTab from "./CollectionAnalyticsTab";
import { useLikeCollection } from "@/hooks/useHome";
import LikeCount from "./LikeCount";
import CollectionFollowButton from "./CollectionFollowButton";
import MembershipGuard from "../Common/MembershipGuard";

const CollectionDetailComponent = () => {
    const {
        loading,
        priceArray: defaultPriceArray,
        collectionDetails,
        payload,
    } = useCollectionDetails();
    const { account, library, chainId, chain, wallet, signMessage } =
        useActiveWeb3React();
    const { handleLike } = useLikeCollection();
    const dispatch = useDispatch();
    const [bannerPic, setBannerPic] = useState();
    const [bannerFile, setBannerFile] = useState();
    const [collectionImage, setCollectionImage] = useState();
    const [collectionFile, setCollectionFile] = useState();
    const [fileRatio, setFileRatio] = useState(1);
    const [description, setDescription] = useState();
    const [linksData, setLinksData] = useState({
        website: "",
        twitter: "",
        telegram: "",
        discord: "",
    });
    useEffect(() => {
        setLinksData({
            website: collectionDetails?.website,
            twitter: collectionDetails?.twitter,
            telegram: collectionDetails?.telegram,
            discord: collectionDetails?.discord,
        });
        setDescription(collectionDetails?.description);
    }, [collectionDetails]);

    const [isVisible, setIsVisible] = useState(false);

    const handleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const [linkEditInput, setLinkEditInput] = useState();
    const handleLinkEditInput = (value) => {
        if (!value) return;
        setLinkEditInput(value);
    };

    const handleLinksInputChange = (event) => {
        const { name, value } = event.target;
        setLinksData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const [url, setUrl] = useState(null);
    const onShare = () => {
        const currentURL = window.location.href;
        setUrl(currentURL);
    };
    const onClose = () => {
        setUrl(null);
    };

    const handleInputChange = (e) => {
        setDescription(e.target.value);
    };

    //Update Banner image

    const onSubmit = () => {
        if (!collectionDetails?.address) return;
        if (collectionDetails?.creatorAddress !== account?.toLowerCase())
            return Toast.error(
                "You are not authorized to update this collection"
            );
        const validate = validateNetwork(
            account,
            chainId,
            collectionDetails?.chainId
        );

        if (!validate.status) {
            return Toast.error(validate.message);
        }
        dispatch(
            collectionUriUpdateAction({
                collection: {
                    ...collectionDetails,
                },
                signMessage: signMessage,
                collectionCoverFile: bannerFile,
                collectionFile: collectionFile,
                description: description,
                fileRatio: fileRatio,
                wallet: wallet,
                linksData: linksData,
                chain,
                ownerAddress: account?.toLowerCase(),
            })
        );
        setIsVisible(false);
    };

    function handleFileChange(e) {
        let { files } = e.target;
        if (files.length) {
            const fileType = files[0].type.split("/")[0];
            if (e.target.name === "collectionImage") {
                if (collectionImage instanceof Blob) {
                    URL.revokeObjectURL(collectionImage);
                }
                if (fileType === "image") {
                    setCollectionFile(files[0]);
                    setCollectionImage(URL.createObjectURL(files[0]));
                    var img = new Image();
                    img.src = URL.createObjectURL(files[0]);
                    img.onload = function () {
                        URL.revokeObjectURL(img.src);
                        setFileRatio(img.height / img.width);
                    };
                } else {
                    Toast.error("Unsupported Type");
                }
            }
            if (e.target.name === "banners") {
                if (bannerPic instanceof Blob) {
                    URL.revokeObjectURL(bannerPic);
                }
                if (fileType === "image") {
                    setBannerFile(files[0]);
                    setBannerPic(URL.createObjectURL(files[0]));
                } else {
                    Toast.error("Unsupported Type");
                }
            }
        }
    }

    const [tabIndex, setTabIndex] = useState(0);
    return (
        <>
            <PageTitle
                title={"#BITMATIC ART"}
                imageUrl={
                    "https://d17ha18jyelis7.cloudfront.net/collections/originals/16395541-68bd-4f66-a581-6528fb9ffbf4-1705050528582"
                }
                id={"664d62cddc66b4a0ba4a6e57"}
                coverUrl={
                    "https://d17ha18jyelis7.cloudfront.net/collections/banners/0f62c3d4-d350-43fc-8f80-451cba0dd6a8-1707459809309"
                }
            />
            {!loading ? (
                collectionDetails?.address ? (
                    <CommonPageBlockPad
                        className="no-container-padding public-profile-page"
                        style={{ marginTop: "45px" }}
                    >
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
                        <div className="public-progile-main">
                            {/* Cover Image */}
                            <div
                                className={`top-banner-img ${
                                    collectionDetails?.coverUrl
                                        ? "vertically-fade-banner"
                                        : ""
                                }`}
                            >
                                <img
                                    src={
                                        bannerPic ||
                                        collectionDetails?.coverUrl ||
                                        "../../images/banner-profile-public.png"
                                    }
                                    alt="profile-img"
                                    style={{ height: "500px" }}
                                ></img>

                                {isVisible && (
                                    <div className="upload-btn">
                                        <Input
                                            type="file"
                                            name="banners"
                                            onChange={handleFileChange}
                                            id="banners"
                                            accept="image/*"
                                            style={{ maxWidth: "242px" }}
                                        />
                                        {/* <Button>
                                            <svg
                                                width="21"
                                                height="20"
                                                viewBox="0 0 21 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M10.75 1.25C8.43807 1.27805 6.22873 2.20893 4.59383 3.84383C2.95893 5.47873 2.02805 7.68807 2 10C2.02805 12.3119 2.95893 14.5213 4.59383 16.1562C6.22873 17.7911 8.43807 18.7219 10.75 18.75C13.0619 18.7219 15.2713 17.7911 16.9062 16.1562C18.5411 14.5213 19.4719 12.3119 19.5 10C19.4719 7.68807 18.5411 5.47873 16.9062 3.84383C15.2713 2.20893 13.0619 1.27805 10.75 1.25ZM15.75 10.625H11.375V15H10.125V10.625H5.75V9.375H10.125V5H11.375V9.375H15.75V10.625Z"
                                                    fill="white"
                                                />
                                            </svg>
                                            <span>Upload Banner</span>
                                        </Button> */}

                                        <Button onClick={onSubmit}>
                                            <span>Save Change</span>
                                        </Button>
                                    </div>
                                )}
                                {collectionDetails?.creatorAddress ==
                                    account?.toLowerCase() && (
                                    <>
                                        <div className="edit-settings">
                                            <button onClick={handleVisibility}>
                                                <svg
                                                    width="26"
                                                    height="26"
                                                    viewBox="0 0 26 26"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M13 17.375C11.8397 17.375 10.7269 16.9141 9.90645 16.0936C9.08598 15.2731 8.62504 14.1603 8.62504 13C8.62504 11.8397 9.08598 10.7269 9.90645 9.90641C10.7269 9.08594 11.8397 8.625 13 8.625C14.1604 8.625 15.2732 9.08594 16.0936 9.90641C16.9141 10.7269 17.375 11.8397 17.375 13C17.375 14.1603 16.9141 15.2731 16.0936 16.0936C15.2732 16.9141 14.1604 17.375 13 17.375ZM22.2875 14.2125C22.3375 13.8125 22.375 13.4125 22.375 13C22.375 12.5875 22.3375 12.175 22.2875 11.75L24.925 9.7125C25.1625 9.525 25.225 9.1875 25.075 8.9125L22.575 4.5875C22.425 4.3125 22.0875 4.2 21.8125 4.3125L18.7 5.5625C18.05 5.075 17.375 4.65 16.5875 4.3375L16.125 1.025C16.0997 0.877774 16.023 0.744286 15.9086 0.648192C15.7942 0.552097 15.6494 0.4996 15.5 0.500002H10.5C10.1875 0.500002 9.92504 0.725002 9.87504 1.025L9.41254 4.3375C8.62504 4.65 7.95004 5.075 7.30004 5.5625L4.18754 4.3125C3.91254 4.2 3.57504 4.3125 3.42504 4.5875L0.925043 8.9125C0.762543 9.1875 0.837544 9.525 1.07504 9.7125L3.71254 11.75C3.66254 12.175 3.62504 12.5875 3.62504 13C3.62504 13.4125 3.66254 13.8125 3.71254 14.2125L1.07504 16.2875C0.837544 16.475 0.762543 16.8125 0.925043 17.0875L3.42504 21.4125C3.57504 21.6875 3.91254 21.7875 4.18754 21.6875L7.30004 20.425C7.95004 20.925 8.62504 21.35 9.41254 21.6625L9.87504 24.975C9.92504 25.275 10.1875 25.5 10.5 25.5H15.5C15.8125 25.5 16.075 25.275 16.125 24.975L16.5875 21.6625C17.375 21.3375 18.05 20.925 18.7 20.425L21.8125 21.6875C22.0875 21.7875 22.425 21.6875 22.575 21.4125L25.075 17.0875C25.225 16.8125 25.1625 16.475 24.925 16.2875L22.2875 14.2125Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="profile-main-block">
                                <Container>
                                    <div className="profile-inner-flex">
                                        <div className="profile-inner-flex-left">
                                            <div className="profile-inner-flex-left-inner">
                                                {collectionDetails?.image && (
                                                    <div className="profile-inner-flex-left-img">
                                                        <ImageLoader
                                                            src={
                                                                collectionImage ||
                                                                collectionDetails?.image ||
                                                                "../../images/collection-img.png"
                                                            }
                                                            alt=""
                                                            mediaRenderer={
                                                                false
                                                            }
                                                        />
                                                        <div
                                                            className={`profile-inner-flex-hover ${
                                                                isVisible
                                                                    ? "isVisible"
                                                                    : ""
                                                            }`}
                                                        >
                                                            <Input
                                                                type="file"
                                                                name="collectionImage"
                                                                onChange={
                                                                    handleFileChange
                                                                }
                                                                id="collectionImage"
                                                                accept="image/*"
                                                                style={{
                                                                    maxWidth:
                                                                        "242px",
                                                                }}
                                                            />
                                                        </div>
                                                        {/* <img
                                                src={
                                                    "../../images/item-details.png"
                                                }
                                                alt="item-img"
                                            ></img> */}
                                                    </div>
                                                )}

                                                <div className="text-name-block">
                                                    <div className="text-name-block-name">
                                                        <h2>
                                                            {collectionDetails?.name ||
                                                                ""}
                                                        </h2>
                                                        {/* <p className="text-discription-check">
                                                <svg
                                                    width="20"
                                                    height="21"
                                                    viewBox="0 0 20 21"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M17.6453 8.53281C17.3508 8.225 17.0461 7.90781 16.9312 7.62891C16.825 7.37344 16.8187 6.95 16.8125 6.53984C16.8008 5.77734 16.7883 4.91328 16.1875 4.3125C15.5867 3.71172 14.7227 3.69922 13.9602 3.6875C13.55 3.68125 13.1266 3.675 12.8711 3.56875C12.593 3.45391 12.275 3.14922 11.9672 2.85469C11.4281 2.33672 10.8156 1.75 10 1.75C9.18437 1.75 8.57266 2.33672 8.03281 2.85469C7.725 3.14922 7.40781 3.45391 7.12891 3.56875C6.875 3.675 6.45 3.68125 6.03984 3.6875C5.27734 3.69922 4.41328 3.71172 3.8125 4.3125C3.21172 4.91328 3.20312 5.77734 3.1875 6.53984C3.18125 6.95 3.175 7.37344 3.06875 7.62891C2.95391 7.90703 2.64922 8.225 2.35469 8.53281C1.83672 9.07188 1.25 9.68437 1.25 10.5C1.25 11.3156 1.83672 11.9273 2.35469 12.4672C2.64922 12.775 2.95391 13.0922 3.06875 13.3711C3.175 13.6266 3.18125 14.05 3.1875 14.4602C3.19922 15.2227 3.21172 16.0867 3.8125 16.6875C4.41328 17.2883 5.27734 17.3008 6.03984 17.3125C6.45 17.3187 6.87344 17.325 7.12891 17.4312C7.40703 17.5461 7.725 17.8508 8.03281 18.1453C8.57188 18.6633 9.18437 19.25 10 19.25C10.8156 19.25 11.4273 18.6633 11.9672 18.1453C12.275 17.8508 12.5922 17.5461 12.8711 17.4312C13.1266 17.325 13.55 17.3187 13.9602 17.3125C14.7227 17.3008 15.5867 17.2883 16.1875 16.6875C16.7883 16.0867 16.8008 15.2227 16.8125 14.4602C16.8187 14.05 16.825 13.6266 16.9312 13.3711C17.0461 13.093 17.3508 12.775 17.6453 12.4672C18.1633 11.9281 18.75 11.3156 18.75 10.5C18.75 9.68437 18.1633 9.07266 17.6453 8.53281ZM13.5672 9.06719L9.19219 13.4422C9.13414 13.5003 9.06521 13.5464 8.98934 13.5779C8.91346 13.6093 8.83213 13.6255 8.75 13.6255C8.66787 13.6255 8.58654 13.6093 8.51066 13.5779C8.43479 13.5464 8.36586 13.5003 8.30781 13.4422L6.43281 11.5672C6.31554 11.4499 6.24965 11.2909 6.24965 11.125C6.24965 10.9591 6.31554 10.8001 6.43281 10.6828C6.55009 10.5655 6.70915 10.4997 6.875 10.4997C7.04085 10.4997 7.19991 10.5655 7.31719 10.6828L8.75 12.1164L12.6828 8.18281C12.7409 8.12474 12.8098 8.07868 12.8857 8.04725C12.9616 8.01583 13.0429 7.99965 13.125 7.99965C13.2071 7.99965 13.2884 8.01583 13.3643 8.04725C13.4402 8.07868 13.5091 8.12474 13.5672 8.18281C13.6253 8.24088 13.6713 8.30982 13.7027 8.38569C13.7342 8.46156 13.7503 8.54288 13.7503 8.625C13.7503 8.70712 13.7342 8.78844 13.7027 8.86431C13.6713 8.94018 13.6253 9.00912 13.5672 9.06719Z"
                                                        fill="#FB4EF1"
                                                    ></path>
                                                </svg>
                                            </p> */}
                                                    </div>
                                                    <div className="link-text-block">
                                                        <a
                                                            href={`${
                                                                BLOCK_EXPLORER_URL[
                                                                    collectionDetails
                                                                        ?.chainId
                                                                ]
                                                            }/address/${
                                                                collectionDetails?.address
                                                            }`}
                                                            target="_blank"
                                                        >
                                                            <span>
                                                                {shortenText(
                                                                    collectionDetails?.address ||
                                                                        "",
                                                                    5,
                                                                    4
                                                                )}
                                                            </span>
                                                            <svg
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 20 20"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M4.16667 17.5C3.70833 17.5 3.31611 17.3369 2.99 17.0108C2.66389 16.6847 2.50056 16.2922 2.5 15.8333V4.16667C2.5 3.70833 2.66333 3.31611 2.99 2.99C3.31667 2.66389 3.70889 2.50056 4.16667 2.5H10V4.16667H4.16667V15.8333H15.8333V10H17.5V15.8333C17.5 16.2917 17.3369 16.6842 17.0108 17.0108C16.6847 17.3375 16.2922 17.5006 15.8333 17.5H4.16667ZM8.08333 13.0833L6.91667 11.9167L14.6667 4.16667H11.6667V2.5H17.5V8.33333H15.8333V5.33333L8.08333 13.0833Z"
                                                                    fill="#FB4EF1"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="social-link d-flex flex-column">
                                                    <ul>
                                                        {(collectionDetails?.twitter ||
                                                            isVisible) && (
                                                            <li>
                                                                <Link
                                                                    href={
                                                                        collectionDetails?.twitter ||
                                                                        "#"
                                                                    }
                                                                    target="blank"
                                                                >
                                                                    <svg
                                                                        width="20"
                                                                        height="20"
                                                                        viewBox="0 0 20 20"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M14.0167 17.3067L3.12755 3.30667C3.07016 3.23276 3.03465 3.14423 3.02508 3.05114C3.01551 2.95806 3.03225 2.86415 3.07341 2.78011C3.11456 2.69607 3.17847 2.62526 3.25787 2.57575C3.33727 2.52623 3.42897 2.49998 3.52255 2.5H5.58922C5.6653 2.50011 5.74035 2.51759 5.80865 2.55109C5.87696 2.58459 5.93672 2.63324 5.98338 2.69333L16.8725 16.6933C16.9299 16.7672 16.9654 16.8558 16.975 16.9489C16.9846 17.0419 16.9678 17.1358 16.9267 17.2199C16.8855 17.3039 16.8216 17.3747 16.7422 17.4243C16.6628 17.4738 16.5711 17.5 16.4775 17.5H14.4109C14.3348 17.4999 14.2598 17.4824 14.1914 17.4489C14.1231 17.4154 14.0634 17.3668 14.0167 17.3067Z"
                                                                            stroke="black"
                                                                            stroke-width="1.25"
                                                                        />
                                                                        <path
                                                                            d="M16.6663 2.5L3.33301 17.5"
                                                                            stroke="black"
                                                                            stroke-width="1.25"
                                                                            stroke-linecap="round"
                                                                        />
                                                                    </svg>
                                                                    <span>
                                                                        Twitter
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        )}
                                                        {(collectionDetails?.website ||
                                                            isVisible) && (
                                                            <li>
                                                                <Link
                                                                    href={
                                                                        collectionDetails?.website ||
                                                                        "#"
                                                                    }
                                                                    target="blank"
                                                                >
                                                                    <svg
                                                                        width="18"
                                                                        height="18"
                                                                        viewBox="0 0 18 18"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M9 0.875C7.39303 0.875 5.82214 1.35152 4.486 2.24431C3.14985 3.1371 2.10844 4.40605 1.49348 5.8907C0.87852 7.37535 0.717618 9.00901 1.03112 10.5851C1.34463 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.4149 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1225 6.84588 16.2657 4.78069 14.7425 3.2575C13.2193 1.7343 11.1541 0.877481 9 0.875ZM15.875 9C15.8755 9.63403 15.788 10.2651 15.6148 10.875H12.6063C12.7979 9.63235 12.7979 8.36765 12.6063 7.125H15.6148C15.788 7.73493 15.8755 8.36597 15.875 9ZM6.96875 12.125H11.0313C10.631 13.4364 9.93624 14.6389 9 15.6406C8.06413 14.6387 7.36939 13.4362 6.96875 12.125ZM6.66407 10.875C6.44949 9.63421 6.44949 8.36579 6.66407 7.125H11.3422C11.5568 8.36579 11.5568 9.63421 11.3422 10.875H6.66407ZM2.125 9C2.12446 8.36597 2.21202 7.73493 2.38516 7.125H5.39375C5.20208 8.36765 5.20208 9.63235 5.39375 10.875H2.38516C2.21202 10.2651 2.12446 9.63403 2.125 9ZM11.0313 5.875H6.96875C7.36898 4.5636 8.06377 3.36108 9 2.35938C9.93588 3.36134 10.6306 4.56378 11.0313 5.875ZM15.1195 5.875H12.3367C11.986 4.58821 11.3948 3.37943 10.5945 2.3125C11.5615 2.54479 12.4668 2.98342 13.2484 3.59832C14.03 4.21323 14.6693 4.98987 15.1227 5.875H15.1195ZM7.40547 2.3125C6.60516 3.37943 6.01403 4.58821 5.66328 5.875H2.87735C3.33068 4.98987 3.97006 4.21323 4.75163 3.59832C5.53321 2.98342 6.43851 2.54479 7.40547 2.3125ZM2.87735 12.125H5.66328C6.01403 13.4118 6.60516 14.6206 7.40547 15.6875C6.43851 15.4552 5.53321 15.0166 4.75163 14.4017C3.97006 13.7868 3.33068 13.0101 2.87735 12.125ZM10.5945 15.6875C11.3948 14.6206 11.986 13.4118 12.3367 12.125H15.1227C14.6693 13.0101 14.03 13.7868 13.2484 14.4017C12.4668 15.0166 11.5615 15.4552 10.5945 15.6875Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>
                                                                    {/* <svg
                                                                    width="20"
                                                                    height="20"
                                                                    viewBox="0 0 20 20"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M14.0167 17.3067L3.12755 3.30667C3.07016 3.23276 3.03465 3.14423 3.02508 3.05114C3.01551 2.95806 3.03225 2.86415 3.07341 2.78011C3.11456 2.69607 3.17847 2.62526 3.25787 2.57575C3.33727 2.52623 3.42897 2.49998 3.52255 2.5H5.58922C5.6653 2.50011 5.74035 2.51759 5.80865 2.55109C5.87696 2.58459 5.93672 2.63324 5.98338 2.69333L16.8725 16.6933C16.9299 16.7672 16.9654 16.8558 16.975 16.9489C16.9846 17.0419 16.9678 17.1358 16.9267 17.2199C16.8855 17.3039 16.8216 17.3747 16.7422 17.4243C16.6628 17.4738 16.5711 17.5 16.4775 17.5H14.4109C14.3348 17.4999 14.2598 17.4824 14.1914 17.4489C14.1231 17.4154 14.0634 17.3668 14.0167 17.3067Z"
                                                                        stroke="black"
                                                                        stroke-width="1.25"
                                                                    />
                                                                    <path
                                                                        d="M16.6663 2.5L3.33301 17.5"
                                                                        stroke="black"
                                                                        stroke-width="1.25"
                                                                        stroke-linecap="round"
                                                                    />
                                                                </svg> */}
                                                                    <span>
                                                                        Website
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        )}
                                                        {(collectionDetails?.telegram ||
                                                            isVisible) && (
                                                            <li>
                                                                <Link
                                                                    href={
                                                                        collectionDetails?.telegram ||
                                                                        "#"
                                                                    }
                                                                    target="blank"
                                                                >
                                                                    <svg
                                                                        width="20"
                                                                        height="20"
                                                                        viewBox="0 0 20 20"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M10.0003 1.66602C5.40033 1.66602 1.66699 5.39935 1.66699 9.99935C1.66699 14.5993 5.40033 18.3327 10.0003 18.3327C14.6003 18.3327 18.3337 14.5993 18.3337 9.99935C18.3337 5.39935 14.6003 1.66602 10.0003 1.66602ZM13.867 7.33268C13.742 8.64935 13.2003 11.8493 12.9253 13.3243C12.8087 13.9493 12.5753 14.1577 12.3587 14.1827C11.8753 14.2243 11.5087 13.866 11.042 13.5577C10.3087 13.0743 9.89199 12.7743 9.18366 12.3077C8.35866 11.766 8.89199 11.466 9.36699 10.9827C9.49199 10.8577 11.6253 8.91602 11.667 8.74102C11.6728 8.71451 11.672 8.68699 11.6647 8.66085C11.6575 8.63471 11.644 8.61074 11.6253 8.59102C11.5753 8.54935 11.5087 8.56602 11.4503 8.57435C11.3753 8.59102 10.2087 9.36602 7.93366 10.8993C7.60033 11.1243 7.30032 11.241 7.03366 11.2327C6.73366 11.2243 6.16699 11.066 5.74199 10.9243C5.21699 10.7577 4.80866 10.666 4.84199 10.3743C4.85866 10.2243 5.06699 10.0743 5.45866 9.91601C7.89199 8.85768 9.50866 8.15768 10.317 7.82435C12.6337 6.85768 13.1087 6.69102 13.4253 6.69102C13.492 6.69102 13.6503 6.70768 13.7503 6.79102C13.8337 6.85768 13.8587 6.94935 13.867 7.01602C13.8587 7.06602 13.8753 7.21602 13.867 7.33268Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>

                                                                    <span>
                                                                        Telegram
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        )}
                                                        {(collectionDetails?.discord ||
                                                            isVisible) && (
                                                            <li>
                                                                <Link
                                                                    href={
                                                                        collectionDetails?.discord ||
                                                                        "#"
                                                                    }
                                                                    target="blank"
                                                                >
                                                                    <svg
                                                                        width="20"
                                                                        height="20"
                                                                        viewBox="0 0 20 20"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M16.0588 4.44236C14.9504 3.92569 13.7504 3.55069 12.5004 3.33402C12.4895 3.33367 12.4786 3.33573 12.4685 3.34005C12.4584 3.34437 12.4494 3.35084 12.4421 3.35902C12.2921 3.63402 12.1171 3.99236 12.0004 4.26736C10.6746 4.06736 9.32626 4.06736 8.00042 4.26736C7.88376 3.98402 7.70876 3.63402 7.55042 3.35902C7.54209 3.34236 7.51709 3.33402 7.49209 3.33402C6.24209 3.55069 5.05042 3.92569 3.93376 4.44236C3.92542 4.44236 3.91709 4.45069 3.90876 4.45902C1.64209 7.85069 1.01709 11.1507 1.32542 14.4174C1.32542 14.434 1.33376 14.4507 1.35042 14.459C2.85042 15.559 4.29209 16.2257 5.71709 16.6674C5.74209 16.6757 5.76709 16.6674 5.77542 16.6507C6.10876 16.1924 6.40876 15.709 6.66709 15.2007C6.68376 15.1674 6.66709 15.134 6.63376 15.1257C6.15876 14.9424 5.70876 14.7257 5.26709 14.4757C5.23376 14.459 5.23376 14.409 5.25876 14.384C5.35042 14.3174 5.44209 14.2424 5.53376 14.1757C5.55042 14.159 5.57542 14.159 5.59209 14.1674C8.45876 15.4757 11.5504 15.4757 14.3838 14.1674C14.4004 14.159 14.4254 14.159 14.4421 14.1757C14.5338 14.2507 14.6254 14.3174 14.7171 14.3924C14.7504 14.4174 14.7504 14.4674 14.7088 14.484C14.2754 14.7424 13.8171 14.9507 13.3421 15.134C13.3088 15.1424 13.3004 15.184 13.3088 15.209C13.5754 15.7174 13.8754 16.2007 14.2004 16.659C14.2254 16.6674 14.2504 16.6757 14.2754 16.6674C15.7088 16.2257 17.1504 15.559 18.6504 14.459C18.6671 14.4507 18.6754 14.434 18.6754 14.4174C19.0421 10.6424 18.0671 7.36736 16.0921 4.45902C16.0838 4.45069 16.0754 4.44236 16.0588 4.44236ZM7.10042 12.4257C6.24209 12.4257 5.52542 11.634 5.52542 10.659C5.52542 9.68402 6.22542 8.89236 7.10042 8.89236C7.98376 8.89236 8.68376 9.69236 8.67542 10.659C8.67542 11.634 7.97542 12.4257 7.10042 12.4257ZM12.9088 12.4257C12.0504 12.4257 11.3338 11.634 11.3338 10.659C11.3338 9.68402 12.0338 8.89236 12.9088 8.89236C13.7921 8.89236 14.4921 9.69236 14.4838 10.659C14.4838 11.634 13.7921 12.4257 12.9088 12.4257Z"
                                                                            fill="black"
                                                                        />
                                                                    </svg>

                                                                    <span>
                                                                        Discord
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        )}
                                                    </ul>
                                                    {isVisible && (
                                                        <div className="w-full d-flex justify-between">
                                                            <button
                                                                onClick={() =>
                                                                    handleLinkEditInput(
                                                                        "twitter"
                                                                    )
                                                                }
                                                                className="ms-3"
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    handleLinkEditInput(
                                                                        "website"
                                                                    )
                                                                }
                                                                className="ms-3"
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    handleLinkEditInput(
                                                                        "telegram"
                                                                    )
                                                                }
                                                                className="ms-3"
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    handleLinkEditInput(
                                                                        "discord"
                                                                    )
                                                                }
                                                                className="ms-3"
                                                            >
                                                                Edit
                                                            </button>
                                                        </div>
                                                    )}
                                                    {isVisible &&
                                                        linkEditInput && (
                                                            <div>
                                                                {linkEditInput ===
                                                                    "twitter" && (
                                                                    <Input
                                                                        type="text"
                                                                        id="twitter"
                                                                        name="twitter"
                                                                        onChange={
                                                                            handleLinksInputChange
                                                                        }
                                                                        value={
                                                                            linksData?.twitter
                                                                        }
                                                                        placeholder="twitter"
                                                                    />
                                                                )}
                                                                {linkEditInput ===
                                                                    "website" && (
                                                                    <Input
                                                                        type="text"
                                                                        id="website"
                                                                        name="website"
                                                                        onChange={
                                                                            handleLinksInputChange
                                                                        }
                                                                        value={
                                                                            linksData?.website
                                                                        }
                                                                        placeholder="website"
                                                                    />
                                                                )}
                                                                {linkEditInput ===
                                                                    "telegram" && (
                                                                    <Input
                                                                        type="text"
                                                                        id="telegram"
                                                                        name="telegram"
                                                                        onChange={
                                                                            handleLinksInputChange
                                                                        }
                                                                        value={
                                                                            linksData?.telegram
                                                                        }
                                                                        placeholder="telegram"
                                                                    />
                                                                )}
                                                                {linkEditInput ===
                                                                    "discord" && (
                                                                    <Input
                                                                        type="text"
                                                                        id="discord"
                                                                        name="discord"
                                                                        onChange={
                                                                            handleLinksInputChange
                                                                        }
                                                                        value={
                                                                            linksData?.discord
                                                                        }
                                                                        placeholder="discord"
                                                                    />
                                                                )}
                                                            </div>
                                                        )}
                                                </div>
                                            </div>
                                            <div className="list-block-inner">
                                                <div className="list-block-inner-left">
                                                    <h3>
                                                        {collectionDetails?.floorPrice ||
                                                            0}{" "}
                                                        {collectionDetails?.floorSymbol ||
                                                            ""}
                                                    </h3>
                                                    <p>Floor</p>
                                                </div>
                                                <div className="list-block-inner-left border-left-main">
                                                    <h3>
                                                        <span>
                                                            {usdParser(
                                                                collectionDetails?.tradingVolume ||
                                                                    0,
                                                                _,
                                                                2
                                                            )}
                                                        </span>
                                                    </h3>
                                                    <p>Volume</p>
                                                </div>
                                                <div className="list-block-inner-left">
                                                    <h3>
                                                        <span>
                                                            {CountParser(
                                                                collectionDetails?.totalItemCount ||
                                                                    0
                                                            )}
                                                        </span>
                                                    </h3>
                                                    <p>Items</p>
                                                </div>
                                                <div className="list-block-inner-left">
                                                    <h3>
                                                        <span>
                                                            {CountParser(
                                                                collectionDetails?.totalOwners ||
                                                                    0
                                                            )}
                                                        </span>
                                                    </h3>
                                                    <p>Owners</p>
                                                </div>
                                                <div className="list-block-inner-left">
                                                    <h3>
                                                        <img
                                                            src={
                                                                CHAIN_LOGO[
                                                                    collectionDetails
                                                                        ?.chainId
                                                                ]
                                                            }
                                                            alt="icon-img"
                                                            width={"27px"}
                                                        ></img>
                                                        <span>
                                                            {
                                                                GET_CHAIN_NAMES[
                                                                    collectionDetails
                                                                        ?.chainId
                                                                ]
                                                            }
                                                        </span>
                                                    </h3>
                                                    <p>Blockchain</p>
                                                </div>
                                            </div>
                                            <div className="nft-block-main-hover-edit">
                                                <div
                                                    className={`nft-block-main-hover-edit-link ${
                                                        isVisible
                                                            ? "isVisible"
                                                            : ""
                                                    }`}
                                                >
                                                    <Input
                                                        as="textarea"
                                                        placeholder=""
                                                        rows={4}
                                                        name="description"
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        value={
                                                            description ||
                                                            collectionDetails?.description
                                                        }
                                                    />
                                                    {/* <button>
                                                        <svg
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M2.5 17.5V13.9583L13.5 2.97917C13.6667 2.82639 13.8508 2.70833 14.0525 2.625C14.2542 2.54167 14.4658 2.5 14.6875 2.5C14.9092 2.5 15.1244 2.54167 15.3333 2.625C15.5422 2.70833 15.7228 2.83333 15.875 3L17.0208 4.16667C17.1875 4.31944 17.3092 4.5 17.3858 4.70833C17.4625 4.91667 17.5006 5.125 17.5 5.33333C17.5 5.55556 17.4619 5.7675 17.3858 5.96917C17.3097 6.17083 17.1881 6.35472 17.0208 6.52083L6.04167 17.5H2.5ZM14.6667 6.5L15.8333 5.33333L14.6667 4.16667L13.5 5.33333L14.6667 6.5Z"
                                                                fill="black"
                                                            />
                                                        </svg>
                                                        <span>Edit</span>
                                                    </button> */}
                                                </div>
                                                <div className="nft-block-main">
                                                    <p>
                                                        <span>Created by</span>
                                                        <span>
                                                            {collectionDetails?.creatorName ||
                                                                ""}
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span> Royalties</span>
                                                        <span className="bg-highlight">
                                                            {collectionDetails?.royalties ||
                                                                "0"}
                                                            %
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="block-text-last disc-collection-text">
                                                    <p>
                                                        {collectionDetails?.description ||
                                                            ""}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile-inner-flex-right">
                                            <div className="profile-inner-flex-right-inner">
                                                <div className="profile-inner-flex-right-inner-block flex-align-center">
                                                    <div className="follow-left">
                                                        <h3 className="text-center">
                                                            <LikeCount
                                                                item={
                                                                    collectionDetails
                                                                }
                                                            />
                                                        </h3>
                                                        <p>Followers</p>
                                                    </div>
                                                </div>
                                                <div className="button-follow">
                                                    <CollectionFollowButton
                                                        // onClick={() =>
                                                        //     handleLike(
                                                        //         collectionDetails?._id
                                                        //     )
                                                        // }
                                                        item={{
                                                            _id: collectionDetails?._id,
                                                            address:
                                                                collectionDetails?.address,
                                                            like: collectionDetails?.likes?.includes(
                                                                account?.toLowerCase()
                                                            ),
                                                        }}
                                                        handleFollow={
                                                            handleLike
                                                        }
                                                    >
                                                        <svg
                                                            width="21"
                                                            height="20"
                                                            viewBox="0 0 21 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clip-path="url(#clip0_3757_20181)">
                                                                <path
                                                                    d="M13.5833 11.666C14.6884 11.666 15.7482 12.105 16.5296 12.8864C17.311 13.6678 17.75 14.7276 17.75 15.8327V16.666C17.75 17.108 17.5744 17.532 17.2618 17.8445C16.9493 18.1571 16.5254 18.3327 16.0833 18.3327H4.41667C3.97464 18.3327 3.55072 18.1571 3.23816 17.8445C2.92559 17.532 2.75 17.108 2.75 16.666V15.8327C2.75 14.7276 3.18899 13.6678 3.97039 12.8864C4.75179 12.105 5.8116 11.666 6.91667 11.666H13.5833ZM18.095 7.56685C18.2446 7.4158 18.4463 7.32765 18.6588 7.32045C18.8713 7.31324 19.0785 7.38751 19.238 7.52807C19.3975 7.66863 19.4973 7.86484 19.5168 8.07654C19.5364 8.28823 19.4744 8.49941 19.3433 8.66685L19.2733 8.74602L16.9167 11.1027C16.7732 11.2462 16.5823 11.3324 16.3797 11.3451C16.1772 11.3578 15.977 11.2962 15.8167 11.1718L15.7383 11.1027L14.56 9.92435C14.409 9.77473 14.3208 9.57304 14.3136 9.36056C14.3064 9.14808 14.3807 8.94088 14.5212 8.78137C14.6618 8.62185 14.858 8.5221 15.0697 8.50251C15.2814 8.48293 15.4926 8.545 15.66 8.67602L15.7383 8.74602L16.3275 9.33518L18.095 7.56685ZM10.25 1.66602C11.3551 1.66602 12.4149 2.105 13.1963 2.8864C13.9777 3.66781 14.4167 4.72761 14.4167 5.83268C14.4167 6.93775 13.9777 7.99756 13.1963 8.77896C12.4149 9.56036 11.3551 9.99935 10.25 9.99935C9.14493 9.99935 8.08512 9.56036 7.30372 8.77896C6.52232 7.99756 6.08333 6.93775 6.08333 5.83268C6.08333 4.72761 6.52232 3.66781 7.30372 2.8864C8.08512 2.105 9.14493 1.66602 10.25 1.66602Z"
                                                                    fill="#191820"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_3757_20181">
                                                                    <rect
                                                                        width="20"
                                                                        height="20"
                                                                        fill="#191820"
                                                                        transform="translate(0.25)"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        {/* <span>Follow</span> */}
                                                    </CollectionFollowButton>
                                                    <Button
                                                        isBorderBtn={true}
                                                        onClick={onShare}
                                                    >
                                                        <svg
                                                            width="21"
                                                            height="20"
                                                            viewBox="0 0 21 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M15.25 18.3327C14.5556 18.3327 13.9653 18.0896 13.4792 17.6035C12.9931 17.1174 12.75 16.5271 12.75 15.8327C12.75 15.7355 12.7569 15.6346 12.7708 15.5302C12.7847 15.4257 12.8056 15.3321 12.8333 15.2493L6.95833 11.8327C6.72222 12.041 6.45833 12.2043 6.16667 12.3227C5.875 12.441 5.56944 12.4999 5.25 12.4993C4.55556 12.4993 3.96528 12.2563 3.47917 11.7702C2.99306 11.2841 2.75 10.6938 2.75 9.99935C2.75 9.3049 2.99306 8.71463 3.47917 8.22852C3.96528 7.7424 4.55556 7.49935 5.25 7.49935C5.56944 7.49935 5.875 7.55852 6.16667 7.67685C6.45833 7.79518 6.72222 7.95824 6.95833 8.16602L12.8333 4.74935C12.8056 4.66602 12.7847 4.5724 12.7708 4.46852C12.7569 4.36463 12.75 4.26379 12.75 4.16602C12.75 3.47157 12.9931 2.88129 13.4792 2.39518C13.9653 1.90907 14.5556 1.66602 15.25 1.66602C15.9444 1.66602 16.5347 1.90907 17.0208 2.39518C17.5069 2.88129 17.75 3.47157 17.75 4.16602C17.75 4.86046 17.5069 5.45074 17.0208 5.93685C16.5347 6.42296 15.9444 6.66602 15.25 6.66602C14.9306 6.66602 14.625 6.60713 14.3333 6.48935C14.0417 6.37157 13.7778 6.20824 13.5417 5.99935L7.66667 9.41602C7.69444 9.49935 7.71528 9.59324 7.72917 9.69768C7.74306 9.80213 7.75 9.90268 7.75 9.99935C7.75 10.0966 7.74306 10.1974 7.72917 10.3018C7.71528 10.4063 7.69444 10.4999 7.66667 10.5827L13.5417 13.9993C13.7778 13.791 14.0417 13.628 14.3333 13.5102C14.625 13.3924 14.9306 13.3332 15.25 13.3327C15.9444 13.3327 16.5347 13.5757 17.0208 14.0618C17.5069 14.548 17.75 15.1382 17.75 15.8327C17.75 16.5271 17.5069 17.1174 17.0208 17.6035C16.5347 18.0896 15.9444 18.3327 15.25 18.3327Z"
                                                                fill="black"
                                                            />
                                                        </svg>
                                                        <span>Share</span>
                                                    </Button>
                                                    <ShareURLModal
                                                        show={!!url}
                                                        handleClose={onClose}
                                                        url={url}
                                                    />
                                                    {/* <Button isBorderBtn={true}>
                                                        <svg
                                                            width="21"
                                                            height="20"
                                                            viewBox="0 0 21 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M17.125 3.75H3.375C2.87772 3.75 2.40081 3.94754 2.04917 4.29917C1.69754 4.65081 1.5 5.12772 1.5 5.625V14.375C1.5 14.8723 1.69754 15.3492 2.04917 15.7008C2.40081 16.0525 2.87772 16.25 3.375 16.25H17.125C17.6223 16.25 18.0992 16.0525 18.4508 15.7008C18.8025 15.3492 19 14.8723 19 14.375V5.625C19 5.12772 18.8025 4.65081 18.4508 4.29917C18.0992 3.94754 17.6223 3.75 17.125 3.75ZM16.775 5L10.65 10.1062C10.5377 10.1998 10.3962 10.251 10.25 10.251C10.1038 10.251 9.9623 10.1998 9.85 10.1062L3.725 5H16.775ZM17.125 15H3.375C3.20924 15 3.05027 14.9342 2.93306 14.8169C2.81585 14.6997 2.75 14.5408 2.75 14.375V5.8125L9.05 11.0625C9.38691 11.3431 9.81152 11.4968 10.25 11.4968C10.6885 11.4968 11.1131 11.3431 11.45 11.0625L17.75 5.8125V14.375C17.75 14.5408 17.6842 14.6997 17.5669 14.8169C17.4497 14.9342 17.2908 15 17.125 15Z"
                                                                fill="#191820"
                                                            />
                                                        </svg>
                                                        <span>Message</span>
                                                    </Button> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                            <div className="profile-block-data diff-pading-ptofile">
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
                                    {/**search */}
                                    <PublicProfile.Search />
                                    {/**sort */}
                                    <PublicProfile.Sort
                                        isDisabled={
                                            tabIndex === 1 || tabIndex === 2
                                        }
                                    />
                                    {/**grid */}
                                    <PublicProfile.Grid
                                        disabled={
                                            tabIndex === 1 || tabIndex === 2
                                        }
                                    />
                                </div>
                                <div className="listed-tab-block">
                                    <div className="tabs-block-title">
                                        <Tabs
                                            selectedIndex={tabIndex}
                                            onSelect={(index) =>
                                                setTabIndex(index)
                                            }
                                        >
                                            <TabList>
                                                <Tab>NFTs</Tab>
                                                <Tab>Analytics</Tab>
                                                <Tab>Activity</Tab>
                                            </TabList>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                            <Tabs
                                selectedIndex={tabIndex}
                                onSelect={(index) => setTabIndex(index)}
                            >
                                {/* NFTs */}
                                <TabPanel>
                                    {collectionDetails?.address && (
                                        <NFTsTab
                                            collectionDetails={
                                                collectionDetails
                                            }
                                            defaultPriceArray={
                                                defaultPriceArray
                                            }
                                        />
                                    )}
                                </TabPanel>
                                {/* Analytics */}
                                <TabPanel>
                                    <MembershipGuard>
                                        {collectionDetails?.address && (
                                            <CollectionAnalyticsTab
                                                collectionDetails={
                                                    collectionDetails
                                                }
                                            />
                                        )}
                                    </MembershipGuard>
                                </TabPanel>
                                {/* Activity */}
                                <TabPanel>
                                    {collectionDetails?.address && (
                                        <CollectionActivityTab
                                            itemCollection={
                                                collectionDetails?.address
                                            }
                                            chainId={collectionDetails?.chainId}
                                        />
                                    )}
                                </TabPanel>
                            </Tabs>
                        </div>
                    </CommonPageBlockPad>
                ) : (
                    <>
                        <div className="d-flex justify-content-center vh-100 align-items-center">
                            {/* No Collection Found! */}
                        </div>
                    </>
                )
            ) : (
                <>
                    <div className="d-flex justify-content-center vh-100 align-items-center">
                        <Spinner animation="border" size="lg" />
                    </div>
                </>
            )}
        </>
    );
};

export default CollectionDetailComponent;
