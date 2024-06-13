import Link from "next/link";
import { Container, Spinner } from "react-bootstrap";
import { Button, CommonProductBLock } from "@/styles/pages/main.style";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import CollectionCard from "@/components/Common/CollectionCard";
import { useOwnerDetails, useUserDetails } from "@/hooks/useFetchHooks";
import { getEnsDetails, shortenText } from "@/utils";
import ImageLoader from "@/components/Common/ImageLoader";
import PageTitle from "@/components/Common/PageTitle";
import { useFollowUser } from "@/hooks/useProfileHook";
import FollowButton from "@/components/profile/FollowButton";
import { useSelector } from "react-redux";
import { globalState } from "@/redux/reducer/globalSlice";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
const profilePage = () => {
    const {
        state,
        categorys,
        loading,
        items,
        limit,
        hasMore,
        handlePageChange,
        orderOption,
        orderChange,
    } = useUserDetails();
    const { ownerLoading, ownerDetails } = useOwnerDetails();
    const { handleFollow } = useFollowUser();
    const [item, setItem] = useState();
    const [profileName, setProfileName] = useState();
    const {
        walletDetalis: { account },
        userDetails,
    } = useSelector(globalState);
    const { sdk, library, chainId } = useActiveWeb3React();

    useEffect(() => {
        setItem({
            address: ownerDetails?.address,
            follow: ownerDetails?.follow?.includes(account),
        });
        if (ownerDetails?.usePns === "Yes") {
            getName();
        }
    }, [ownerDetails, account]);

    const getName = async () => {
        try {
            const profile = await getEnsDetails({
                chainId,
                // address: "0xa7633f37FEEfaCAc8F251b914e92Ff03d2acf0f2",
                address: ownerDetails?.address,
                provider: library,
            });
            if (profile.name) {
                setProfileName(profile.name);
            }
        } catch (error) {
            console.error("Error fetching ENS details:", error);
        }
    };

    return (
        <>
            <PageTitle
                title={`${profileName ? `${profileName} - ` : ""}User Detail`}
            />
            {ownerLoading ? (
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <Spinner animation="border" size="lg" />
                </div>
            ) : !ownerDetails?.address ? (
                <div className="d-flex justify-content-center align-items-center vh-100">
                    {/* No User Details Found */}
                </div>
            ) : (
                <CommonPageBlockPad className="dark-mode-body">
                    <Container>
                        <div className="top-collection-block">
                            <div className="top-banner-main">
                                <img
                                    src={
                                        ownerDetails?.bannerUrl ||
                                        "../../images/banner-collection.png"
                                    }
                                    alt="product-img"
                                ></img>
                            </div>
                            <div className="add-to-block" style={{ zIndex: 5 }}>
                                <div className="add-to-wishlist mx-2">
                                    {/* <Button>
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5802 0.105469C10.2795 0.105469 9.01384 0.703125 8.20525 1.6875C7.39665 0.703125 6.13103 0.105469 4.83025 0.105469C2.50993 0.105469 0.716966 1.93359 0.716966 4.21875C0.716966 7.06641 3.24822 9.38672 7.1154 12.9023L8.20525 13.8516L9.29509 12.8672C13.1623 9.38672 15.6935 7.06641 15.6935 4.21875C15.6935 1.93359 13.9006 0.105469 11.5802 0.105469ZM8.27556 11.7773L8.20525 11.8477L8.13493 11.7773C4.549 8.54297 2.19353 6.39844 2.19353 4.21875C2.19353 2.74219 3.31853 1.61719 4.83025 1.61719C5.9904 1.61719 7.1154 2.35547 7.50212 3.375H8.90837C9.29509 2.35547 10.4201 1.61719 11.5802 1.61719C13.092 1.61719 14.217 2.74219 14.217 4.21875C14.217 6.39844 11.8615 8.54297 8.27556 11.7773Z"
                                                fill="#191820"
                                            />
                                        </svg>
                                        <span>Add to Wishlist</span>
                                    </Button> */}
                                    <FollowButton
                                        item={{
                                            address: ownerDetails?.address,
                                            follow: ownerDetails?.follow?.includes(
                                                account
                                            ),
                                        }}
                                        handleFollow={handleFollow}
                                    />
                                </div>
                                {ownerDetails?.other && (
                                    <Link
                                        href={ownerDetails?.other}
                                        target="blank"
                                        className="mx-2"
                                    >
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
                                )}
                                {ownerDetails?.discord && (
                                    <Link
                                        href={ownerDetails?.discord}
                                        target="blank"
                                        className="mx-2"
                                    >
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
                                )}
                                {ownerDetails?.twitter && (
                                    <Link
                                        href={ownerDetails?.twitter}
                                        target="blank"
                                        className="mx-2"
                                    >
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
                                )}
                                {ownerDetails?.instagram && (
                                    <Link
                                        href={ownerDetails?.instagram}
                                        target="blank"
                                        className="mx-2"
                                    >
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
                                )}
                                {ownerDetails?.telegram && (
                                    <Link
                                        href={ownerDetails?.telegram}
                                        target="blank"
                                        className="mx-2"
                                    >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g filter="url(#filter0_i_577_5178)">
                                                <path
                                                    d="M2.42367 9.14102C2.42367 9.14102 10.2864 5.65401 13.0133 4.42614C14.0586 3.93504 17.6036 2.36337 17.6036 2.36337C17.6036 2.36337 19.2398 1.67582 19.1034 3.34564C19.058 4.03326 18.6944 6.43977 18.3308 9.0428C17.7854 12.7263 17.1946 16.7536 17.1946 16.7536C17.1946 16.7536 17.1037 17.8832 16.3311 18.0797C15.5584 18.2761 14.2858 17.3921 14.0586 17.1956C13.8768 17.0483 10.6499 14.8382 9.46826 13.7577C9.1501 13.463 8.78653 12.8737 9.51367 12.1861C11.1499 10.5653 13.1042 8.5517 14.2858 7.27476C14.8312 6.68536 15.3766 5.3102 13.1041 6.98002C9.8773 9.38661 6.69587 11.6458 6.69587 11.6458C6.69587 11.6458 5.96867 12.1369 4.60522 11.6949C3.2417 11.2529 1.65098 10.6635 1.65098 10.6635C1.65098 10.6635 0.560271 9.92686 2.42367 9.14102Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <filter
                                                    id="filter0_i_577_5178"
                                                    x="0"
                                                    y="0"
                                                    width="20"
                                                    height="20.2265"
                                                    filterUnits="userSpaceOnUse"
                                                    color-interpolation-filters="sRGB"
                                                >
                                                    <feFlood
                                                        flood-opacity="0"
                                                        result="BackgroundImageFix"
                                                    />
                                                    <feBlend
                                                        mode="normal"
                                                        in="SourceGraphic"
                                                        in2="BackgroundImageFix"
                                                        result="shape"
                                                    />
                                                    <feColorMatrix
                                                        in="SourceAlpha"
                                                        type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                        result="hardAlpha"
                                                    />
                                                    <feOffset dy="0.226456" />
                                                    <feGaussianBlur stdDeviation="0.566141" />
                                                    <feComposite
                                                        in2="hardAlpha"
                                                        operator="arithmetic"
                                                        k2="-1"
                                                        k3="1"
                                                    />
                                                    <feColorMatrix
                                                        type="matrix"
                                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                                    />
                                                    <feBlend
                                                        mode="normal"
                                                        in2="shape"
                                                        result="effect1_innerShadow_577_5178"
                                                    />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </Link>
                                )}
                                {/* <div className="common-block-dots">
                                    <Link href="">
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
                                    </Link>
                                </div>
                                <div className="common-block-dots">
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
                                </div> */}
                            </div>
                        </div>
                        {(ownerDetails?.mediumLogo || ownerDetails?.name) && (
                            <div className="profile-main-collection">
                                <div className="profile-img">
                                    <ImageLoader
                                        src={
                                            ownerDetails?.mediumLogo ||
                                            "/images/user.svg"
                                        }
                                        alt=""
                                        rounded={true}
                                    />
                                </div>
                                <div className="details-profile-block">
                                    <h3>{ownerDetails?.name} </h3>
                                    <p>
                                        {}
                                        {ownerDetails?.address
                                            ? shortenText(
                                                  ownerDetails?.address,
                                                  6,
                                                  4
                                              )
                                            : ""}
                                    </p>
                                </div>
                            </div>
                        )}
                        <div className="tab-filter-main-block">
                            <div className="top-button-select">
                                <div className="top-button-group">
                                    {/* {categorys?.map((ele, index) => (
                            <button
                                className={`${
                                    state?.filter?.itemStatus?.includes(
                                        ele?.value
                                    )
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() =>
                                    handleFilterChange(ele?.value)
                                }
                                key={index}
                            >
                                {ele?.label}{" "}
                            </button>
                        ))} */}
                                </div>
                                <div className="form-group">
                                    <Select
                                        name="colors"
                                        options={orderOption}
                                        className="TX-select2-wrapper"
                                        classNamePrefix="TX-fix-select"
                                        onChange={orderChange}
                                        defaultValue={orderOption[0]}
                                    />
                                </div>
                            </div>
                            <div className="tab-filter-main-block-inner">
                                <div className="showing-result-block full-width-showing">
                                    <CommonProductBLock className="explore-block-product">
                                        <div className="common-product-block flex-width-five">
                                            {items?.length > 0
                                                ? items?.map((item, index) => (
                                                      <CollectionCard
                                                          key={index}
                                                          item={item}
                                                      />
                                                  ))
                                                : ""}
                                        </div>
                                        {loading ? (
                                            <>
                                                <div className="d-flex justify-content-center align-items-center items-center">
                                                    <Spinner
                                                        animation="border"
                                                        size="md"
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            hasMore && (
                                                <div className="load-more-btn">
                                                    <Button
                                                        className="border-dark-button"
                                                        isBorderBtn={true}
                                                        onClick={
                                                            handlePageChange
                                                        }
                                                    >
                                                        Load more
                                                    </Button>
                                                </div>
                                            )
                                        )}
                                    </CommonProductBLock>
                                </div>
                            </div>
                        </div>
                    </Container>
                </CommonPageBlockPad>
            )}
            {/* {!loading ? (
                !ownerDetails && (
                    <>
                        <div className="d-flex justify-content-center align-items-center items-center vh-100">
                            <h4> No Data found</h4>
                        </div>
                    </>
                )
            ) : (
                <>
                    <div className="d-flex justify-content-center align-items-center items-center">
                        <Spinner animation="border" size="md" />
                    </div>
                </>
            )} */}
        </>
    );
};

export default profilePage;
