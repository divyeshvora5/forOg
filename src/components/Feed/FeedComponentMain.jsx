import { useUserFeed } from "@/hooks/useFetchHooks";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import FollowBlockRIght from "./FollowBlockRIght";
import FeedBlockCenter from "./FeedBlockCenter";
import { CountParser } from "@/utils";
import { Spinner } from "react-bootstrap";
import { useFollowingItems } from "@/hooks/useProfileHook";
import Link from "next/link";
import { PATH_DASHBOARD } from "@/routes/paths";
import ChainSelector from "../Common/ChainSelector";

const FeedComponentMain = () => {
    // Activity filter Functionality
    const [selectedActivity, setSelectedActivity] = useState([]);
    const activityTabEvents = [
        { value: "Listed", name: "Listings", label: "Listings" },
        { value: "Minted", name: "Mints", label: "Mints" },
        { value: "Transfer", name: "Transfers", label: "Transfers" },
        { value: "Purchase", name: "Sales", label: "Purchase" }, //TODO : to set proper key
        { value: "Offer", name: "Offers", label: "Offers" },
        {
            value: "Remove LIsting",
            name: "Canceled Listings",
            label: "Canceled Listings",
        },
        {
            value: "Bids Cancle",
            name: "Canceled Offers",
            label: "Canceled Offers",
        },
        { value: "Following", name: "Following", label: "Following" },
        { value: "Referral", name: "Referral", label: "Referral" },
    ];

    const handleActivityCheckBox = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedActivity((prevState) => [...prevState, value]);
        } else {
            setSelectedActivity((prevState) =>
                prevState.filter((item) => item !== value)
            );
        }
    };

    // Following Type filter Functionality

    const {
        loading: followingLoading,
        items,
        count,
        totalPages,
        page: followingPage,
        limit,
        hasMore: followingHasMore,
        payload: followingPayload,
        handlePageChange: followingHandlePageChange,
        handleSearch: followingHandleSearch,
    } = useFollowingItems();

    const {
        loading,
        data,
        hasMore,
        payload,
        page,
        handlePageChange,
        handleChainIdChange,
        handleFollowedUserChange,
        followedCollections,
        followedUsers,
    } = useUserFeed({ selectedActivity });

    return (
        <>
            <div className="feed-page-block">
                {/* Filter Block */}
                <div className="feed-page-block-left">
                    <div className="feed-page-block-left-inner">
                        {/* Following */}
                        <div className="following-block">
                            <div className="top-block">
                                <h5>Following</h5>
                                <Link
                                    href={`${PATH_DASHBOARD.profile.root}?t=3`}
                                >
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
                                </Link>
                            </div>
                            <h3>
                                Accounts:{" "}
                                <span>{CountParser(followedUsers || 0)}</span>
                            </h3>
                            <h3>
                                Addresses:{" "}
                                <span>
                                    {CountParser(followedCollections || 0)}
                                </span>
                            </h3>
                        </div>
                        {/* Filter */}
                        <div className="filter-check">
                            <h2>Filter</h2>
                            <div className="checkbox-block-custom-filter">
                                {activityTabEvents.map((event, index) => (
                                    <div
                                        className="checkbox-filter-block"
                                        key={index}
                                    >
                                        <input
                                            type="checkbox"
                                            name={event.name}
                                            id={event.name}
                                            value={event.value}
                                            onChange={handleActivityCheckBox}
                                            checked={selectedActivity.includes(
                                                event.value
                                            )}
                                        ></input>
                                        <label htmlFor={event.name}>
                                            <span>
                                                <svg
                                                    width="8"
                                                    height="6"
                                                    viewBox="0 0 8 6"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1.5 2.9987L3.375 4.66536L6.5 1.33203"
                                                        stroke="black"
                                                        strokeWidth="1.66667"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            <div className="flex-block-check">
                                                <h4>{event.label}</h4>
                                            </div>
                                        </label>
                                    </div>
                                ))}
                                {/* <div className="checkbox-filter-block">
                                    <input type="checkbox" id="check"></input>
                                    <label for="check">
                                        <span>
                                            <svg
                                                width="8"
                                                height="6"
                                                viewBox="0 0 8 6"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.5 2.9987L3.375 4.66536L6.5 1.33203"
                                                    stroke="black"
                                                    stroke-width="1.66667"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <div className="flex-block-check">
                                            <h4>Listings</h4>
                                        </div>
                                    </label>
                                </div>
                                <div className="checkbox-filter-block">
                                    <input type="checkbox" id="check"></input>
                                    <label for="check">
                                        <span>
                                            <svg
                                                width="8"
                                                height="6"
                                                viewBox="0 0 8 6"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.5 2.9987L3.375 4.66536L6.5 1.33203"
                                                    stroke="black"
                                                    stroke-width="1.66667"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <div className="flex-block-check">
                                            <h4>Mints</h4>
                                        </div>
                                    </label>
                                </div>
                                <div className="checkbox-filter-block">
                                    <input type="checkbox" id="check"></input>
                                    <label for="check">
                                        <span>
                                            <svg
                                                width="8"
                                                height="6"
                                                viewBox="0 0 8 6"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.5 2.9987L3.375 4.66536L6.5 1.33203"
                                                    stroke="black"
                                                    stroke-width="1.66667"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <div className="flex-block-check">
                                            <h4>Transfers</h4>
                                        </div>
                                    </label>
                                </div>
                                <div className="checkbox-filter-block">
                                    <input type="checkbox" id="check"></input>
                                    <label for="check">
                                        <span>
                                            <svg
                                                width="8"
                                                height="6"
                                                viewBox="0 0 8 6"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.5 2.9987L3.375 4.66536L6.5 1.33203"
                                                    stroke="black"
                                                    stroke-width="1.66667"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <div className="flex-block-check">
                                            <h4>Sales</h4>
                                        </div>
                                    </label>
                                </div>
                                <div className="checkbox-filter-block">
                                    <input type="checkbox" id="check"></input>
                                    <label for="check">
                                        <span>
                                            <svg
                                                width="8"
                                                height="6"
                                                viewBox="0 0 8 6"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.5 2.9987L3.375 4.66536L6.5 1.33203"
                                                    stroke="black"
                                                    stroke-width="1.66667"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <div className="flex-block-check">
                                            <h4>Offers</h4>
                                        </div>
                                    </label>
                                </div>
                                <div className="checkbox-filter-block">
                                    <input type="checkbox" id="check"></input>
                                    <label for="check">
                                        <span>
                                            <svg
                                                width="8"
                                                height="6"
                                                viewBox="0 0 8 6"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.5 2.9987L3.375 4.66536L6.5 1.33203"
                                                    stroke="black"
                                                    stroke-width="1.66667"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <div className="flex-block-check">
                                            <h4>Canceled Listings</h4>
                                        </div>
                                    </label>
                                </div>
                                <div className="checkbox-filter-block">
                                    <input type="checkbox" id="check"></input>
                                    <label for="check">
                                        <span>
                                            <svg
                                                width="8"
                                                height="6"
                                                viewBox="0 0 8 6"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.5 2.9987L3.375 4.66536L6.5 1.33203"
                                                    stroke="black"
                                                    stroke-width="1.66667"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        <div className="flex-block-check">
                                            <h4>Canceled Offers</h4>
                                        </div>
                                    </label>
                                </div> */}
                            </div>
                        </div>
                        {/* Following Users */}
                        <div className="acco-block-custom">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        Following
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="search-form-block">
                                            <div className="search-box-form">
                                                <input
                                                    type="text"
                                                    placeholder="Filter by Account"
                                                    value={
                                                        followingPayload.search
                                                    }
                                                    className="form-control"
                                                    onChange={
                                                        followingHandleSearch
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
                                        {followingLoading &&
                                        followingPage == 1 ? (
                                            <div className="text-center">
                                                <Spinner
                                                    animation="border"
                                                    size="sm"
                                                />
                                            </div>
                                        ) : (
                                            <>
                                                <div className="search-collection-block">
                                                    {items?.length > 0
                                                        ? items?.map(
                                                              (item, index) => (
                                                                  <div
                                                                      className="search-collection-block-inner pointer"
                                                                      onClick={() =>
                                                                          handleFollowedUserChange(
                                                                              item?.address
                                                                          )
                                                                      }
                                                                      key={
                                                                          index
                                                                      }
                                                                  >
                                                                      <div className="search-collection-block-left">
                                                                          <img
                                                                              src={
                                                                                  item.image
                                                                              }
                                                                              className="rounded-circle"
                                                                              alt="product-img"
                                                                          ></img>
                                                                          <div className="content-block">
                                                                              <h4>
                                                                                  <span>
                                                                                      {item?.name ||
                                                                                          "NoName"}
                                                                                  </span>
                                                                                  {/* <svg
                                                                                          width="20"
                                                                                          height="20"
                                                                                          viewBox="0 0 20 20"
                                                                                          fill="none"
                                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                                      >
                                                                                          <path
                                                                                              d="M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z"
                                                                                              fill="#FB4EF1"
                                                                                          />
                                                                                      </svg> */}
                                                                              </h4>
                                                                              {/* <p>
                                                                                      Followers:
                                                                                      4
                                                                                  </p> */}
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              )
                                                          )
                                                        : null}
                                                    {/* <div className="search-collection-block-inner">
                                                            <div className="search-collection-block-left">
                                                                <img
                                                                    src={
                                                                        "../../images/profile-img-product.png"
                                                                    }
                                                                    alt="product-img"
                                                                ></img>
                                                                <div className="content-block">
                                                                    <h4>
                                                                        <span>
                                                                            Nigel
                                                                        </span>
                                                                        <svg
                                                                            width="20"
                                                                            height="20"
                                                                            viewBox="0 0 20 20"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z"
                                                                                fill="#FB4EF1"
                                                                            />
                                                                        </svg>
                                                                    </h4>
                                                                    <p>
                                                                        Followers:
                                                                        4
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="search-collection-block-inner">
                                                            <div className="search-collection-block-left">
                                                                <img
                                                                    src={
                                                                        "../../images/profile-img-product.png"
                                                                    }
                                                                    alt="product-img"
                                                                ></img>
                                                                <div className="content-block">
                                                                    <h4>
                                                                        <span>
                                                                            Nigel
                                                                        </span>
                                                                        <svg
                                                                            width="20"
                                                                            height="20"
                                                                            viewBox="0 0 20 20"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z"
                                                                                fill="#FB4EF1"
                                                                            />
                                                                        </svg>
                                                                    </h4>
                                                                    <p>
                                                                        Followers:
                                                                        4
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="search-collection-block-inner">
                                                            <div className="search-collection-block-left">
                                                                <img
                                                                    src={
                                                                        "../../images/profile-img-product.png"
                                                                    }
                                                                    alt="product-img"
                                                                ></img>
                                                                <div className="content-block">
                                                                    <h4>
                                                                        <span>
                                                                            Nigel
                                                                        </span>
                                                                        <svg
                                                                            width="20"
                                                                            height="20"
                                                                            viewBox="0 0 20 20"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z"
                                                                                fill="#FB4EF1"
                                                                            />
                                                                        </svg>
                                                                    </h4>
                                                                    <p>
                                                                        Followers:
                                                                        4
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="search-collection-block-inner">
                                                            <div className="search-collection-block-left">
                                                                <img
                                                                    src={
                                                                        "../../images/profile-img-product.png"
                                                                    }
                                                                    alt="product-img"
                                                                ></img>
                                                                <div className="content-block">
                                                                    <h4>
                                                                        <span>
                                                                            Nigel
                                                                        </span>
                                                                        <svg
                                                                            width="20"
                                                                            height="20"
                                                                            viewBox="0 0 20 20"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z"
                                                                                fill="#FB4EF1"
                                                                            />
                                                                        </svg>
                                                                    </h4>
                                                                    <p>
                                                                        Followers:
                                                                        4
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="search-collection-block-inner">
                                                            <div className="search-collection-block-left">
                                                                <img
                                                                    src={
                                                                        "../../images/profile-img-product.png"
                                                                    }
                                                                    alt="product-img"
                                                                ></img>
                                                                <div className="content-block">
                                                                    <h4>
                                                                        <span>
                                                                            Nigel
                                                                        </span>
                                                                        <svg
                                                                            width="20"
                                                                            height="20"
                                                                            viewBox="0 0 20 20"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M17.6453 8.03281C17.3508 7.725 17.0461 7.40781 16.9312 7.12891C16.825 6.87344 16.8187 6.45 16.8125 6.03984C16.8008 5.27734 16.7883 4.41328 16.1875 3.8125C15.5867 3.21172 14.7227 3.19922 13.9602 3.1875C13.55 3.18125 13.1266 3.175 12.8711 3.06875C12.593 2.95391 12.275 2.64922 11.9672 2.35469C11.4281 1.83672 10.8156 1.25 10 1.25C9.18437 1.25 8.57266 1.83672 8.03281 2.35469C7.725 2.64922 7.40781 2.95391 7.12891 3.06875C6.875 3.175 6.45 3.18125 6.03984 3.1875C5.27734 3.19922 4.41328 3.21172 3.8125 3.8125C3.21172 4.41328 3.20312 5.27734 3.1875 6.03984C3.18125 6.45 3.175 6.87344 3.06875 7.12891C2.95391 7.40703 2.64922 7.725 2.35469 8.03281C1.83672 8.57188 1.25 9.18437 1.25 10C1.25 10.8156 1.83672 11.4273 2.35469 11.9672C2.64922 12.275 2.95391 12.5922 3.06875 12.8711C3.175 13.1266 3.18125 13.55 3.1875 13.9602C3.19922 14.7227 3.21172 15.5867 3.8125 16.1875C4.41328 16.7883 5.27734 16.8008 6.03984 16.8125C6.45 16.8187 6.87344 16.825 7.12891 16.9312C7.40703 17.0461 7.725 17.3508 8.03281 17.6453C8.57188 18.1633 9.18437 18.75 10 18.75C10.8156 18.75 11.4273 18.1633 11.9672 17.6453C12.275 17.3508 12.5922 17.0461 12.8711 16.9312C13.1266 16.825 13.55 16.8187 13.9602 16.8125C14.7227 16.8008 15.5867 16.7883 16.1875 16.1875C16.7883 15.5867 16.8008 14.7227 16.8125 13.9602C16.8187 13.55 16.825 13.1266 16.9312 12.8711C17.0461 12.593 17.3508 12.275 17.6453 11.9672C18.1633 11.4281 18.75 10.8156 18.75 10C18.75 9.18437 18.1633 8.57266 17.6453 8.03281ZM13.5672 8.56719L9.19219 12.9422C9.13414 13.0003 9.06521 13.0464 8.98934 13.0779C8.91346 13.1093 8.83213 13.1255 8.75 13.1255C8.66787 13.1255 8.58654 13.1093 8.51066 13.0779C8.43479 13.0464 8.36586 13.0003 8.30781 12.9422L6.43281 11.0672C6.31554 10.9499 6.24965 10.7909 6.24965 10.625C6.24965 10.4591 6.31554 10.3001 6.43281 10.1828C6.55009 10.0655 6.70915 9.99965 6.875 9.99965C7.04085 9.99965 7.19991 10.0655 7.31719 10.1828L8.75 11.6164L12.6828 7.68281C12.7409 7.62474 12.8098 7.57868 12.8857 7.54725C12.9616 7.51583 13.0429 7.49965 13.125 7.49965C13.2071 7.49965 13.2884 7.51583 13.3643 7.54725C13.4402 7.57868 13.5091 7.62474 13.5672 7.68281C13.6253 7.74088 13.6713 7.80982 13.7027 7.88569C13.7342 7.96156 13.7503 8.04288 13.7503 8.125C13.7503 8.20712 13.7342 8.28844 13.7027 8.36431C13.6713 8.44018 13.6253 8.50912 13.5672 8.56719Z"
                                                                                fill="#FB4EF1"
                                                                            />
                                                                        </svg>
                                                                    </h4>
                                                                    <p>
                                                                        Followers:
                                                                        4
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                    {followingLoading ? (
                                                        <div className="text-center">
                                                            <Spinner size="sm" />
                                                        </div>
                                                    ) : followingHasMore ? (
                                                        <div className="load-more">
                                                            <button
                                                                onClick={
                                                                    followingHandlePageChange
                                                                }
                                                            >
                                                                Load More
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        {/* Marketplace */}
                        {/* <div className="acco-block-custom">
                                <Accordion defaultActiveKey="1">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            Marketplaces
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="search-form-block">
                                                <div className="search-box-form">
                                                    <input
                                                        type="text"
                                                        placeholder="Search by Collections"
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
                                            <div className="search-collection-block">
                                                <div className="search-collection-block-inner">
                                                    <div className="search-collection-block-left">
                                                        <img
                                                            src={
                                                                "../../images/profile-img-product.png"
                                                            }
                                                            alt="product-img"
                                                        ></img>
                                                        <div className="content-block">
                                                            <h4>
                                                                <span>
                                                                    TesseractX
                                                                </span>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="search-collection-block-inner">
                                                    <div className="search-collection-block-left">
                                                        <img
                                                            src={
                                                                "../../images/profile-img-product.png"
                                                            }
                                                            alt="product-img"
                                                        ></img>
                                                        <div className="content-block">
                                                            <h4>
                                                                <span>
                                                                    Rarible
                                                                </span>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="search-collection-block-inner">
                                                    <div className="search-collection-block-left">
                                                        <img
                                                            src={
                                                                "../../images/profile-img-product.png"
                                                            }
                                                            alt="product-img"
                                                        ></img>
                                                        <div className="content-block">
                                                            <h4>
                                                                <span>
                                                                    LooksRare
                                                                </span>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="search-collection-block-inner">
                                                    <div className="search-collection-block-left">
                                                        <img
                                                            src={
                                                                "../../images/profile-img-product.png"
                                                            }
                                                            alt="product-img"
                                                        ></img>
                                                        <div className="content-block">
                                                            <h4>
                                                                <span>
                                                                    Magic Eden
                                                                </span>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="search-collection-block-inner">
                                                    <div className="search-collection-block-left">
                                                        <img
                                                            src={
                                                                "../../images/profile-img-product.png"
                                                            }
                                                            alt="product-img"
                                                        ></img>
                                                        <div className="content-block">
                                                            <h4>
                                                                <span>
                                                                    Nifty
                                                                    Gateway
                                                                </span>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="search-collection-block-inner">
                                                    <div className="search-collection-block-left">
                                                        <img
                                                            src={
                                                                "../../images/profile-img-product.png"
                                                            }
                                                            alt="product-img"
                                                        ></img>
                                                        <div className="content-block">
                                                            <h4>
                                                                <span>
                                                                    Opensea
                                                                </span>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="load-more">
                                                    <button>Load More</button>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div> */}
                        {/* Chains */}
                        <div className="acco-block-custom">
                            <Accordion defaultActiveKey="2">
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Chains</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="radio-last">
                                            {/* <div className="radio-filter-block">
                                                <input
                                                    type="radio"
                                                    id="test1"
                                                    name="radio-group"
                                                    checked
                                                ></input>
                                                <label for="test1">
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon.svg"
                                                        }
                                                        alt="check-icon"
                                                    ></img>
                                                    <h4>Ethereum (ETH)</h4>
                                                </label>
                                            </div>
                                            <div className="radio-filter-block">
                                                <input
                                                    type="radio"
                                                    id="test2"
                                                    name="radio-group"
                                                ></input>
                                                <label for="test2">
                                                    <img
                                                        src={
                                                            "../../images/ethe-icon.svg"
                                                        }
                                                        alt="check-icon"
                                                    ></img>
                                                    <h4>Ethereum (ETH)</h4>
                                                </label>
                                            </div>
                                            <div className="radio-filter-block">
                                                <input
                                                    type="radio"
                                                    id="test3"
                                                    name="radio-group"
                                                ></input>
                                                <label for="test3">
                                                    <img
                                                        src={
                                                            "../../images/filter-icon.svg"
                                                        }
                                                        alt="check-icon"
                                                    ></img>
                                                    <h4>PulseChain (PLS)</h4>
                                                </label>
                                            </div> */}
                                            <ChainSelector />
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
                {/* Feed Block */}
                <div className="feed-page-block-middle">
                    <FeedBlockCenter
                        data={data}
                        loading={loading}
                        hasMore={hasMore}
                        page={page}
                        handlePageChange={handlePageChange}
                    />
                </div>
                {/* Right Block */}
                <div className="feed-page-block-right">
                    <FollowBlockRIght />
                </div>
            </div>
        </>
    );
};

export default FeedComponentMain;
