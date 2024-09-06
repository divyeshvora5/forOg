import { useTopCollectorForFeed } from "@/hooks/useFetchHooks";
import { useFollowUser } from "@/hooks/useProfileHook";
import { globalState } from "@/redux/reducer/globalSlice";
import { copyToClipboard } from "@/utils";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import CollectorFollowButton from "./CollectorFollowButton";
import { PATH_DASHBOARD } from "@/routes/paths";

const FollowBlockRIght = () => {
    const router = useRouter();
    const {
        loading: topCollectorsLoading,
        topCollectors: topCollectorsData,
        page: topCollectorsPage,
        hasMore: topCollectorsHasMore,
        handlePageChange: topCollectorsPageChange,
    } = useTopCollectorForFeed();
    const { handleFollow } = useFollowUser();

    const { userDetails } = useSelector(globalState);
    const [referralLink, setReferralLink] = useState("");

    useEffect(() => {
        if (!userDetails?.referralCode || !router.isReady) return;
        let newUrl = new URL(window.location.href);
        let refLink = `${newUrl.origin}/?ref=${userDetails.referralCode}`;
        setReferralLink(refLink);
    }, [router.isReady, userDetails]);

    const copyReferralLink = () => {
        if (!referralLink) return;
        copyToClipboard(referralLink);
    };
    const handleUserRoute = (userName) => {
        if (!userName) return;
        router.push(PATH_DASHBOARD.user.detail(userName));
    };
    return (
        <>
            <div className="feed-page-block-right-top">
                <h2>Invite Friends, Earn Hyper Points</h2>
                <p>
                    You and your friend each get hyper points when they buy or
                    sell on TesseractX
                </p>
                <button onClick={copyReferralLink}>
                    <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.375 2.5H7.375C7.20924 2.5 7.05027 2.56585 6.93306 2.68306C6.81585 2.80027 6.75 2.95924 6.75 3.125V6.25H3.625C3.45924 6.25 3.30027 6.31585 3.18306 6.43306C3.06585 6.55027 3 6.70924 3 6.875V16.875C3 17.0408 3.06585 17.1997 3.18306 17.3169C3.30027 17.4342 3.45924 17.5 3.625 17.5H13.625C13.7908 17.5 13.9497 17.4342 14.0669 17.3169C14.1842 17.1997 14.25 17.0408 14.25 16.875V13.75H17.375C17.5408 13.75 17.6997 13.6842 17.8169 13.5669C17.9342 13.4497 18 13.2908 18 13.125V3.125C18 2.95924 17.9342 2.80027 17.8169 2.68306C17.6997 2.56585 17.5408 2.5 17.375 2.5ZM13 16.25H4.25V7.5H13V16.25ZM16.75 12.5H14.25V6.875C14.25 6.70924 14.1842 6.55027 14.0669 6.43306C13.9497 6.31585 13.7908 6.25 13.625 6.25H8V3.75H16.75V12.5Z"
                            fill="black"
                        />
                    </svg>
                    <h3>Copy Invite Link</h3>
                </button>
            </div>
            {/* <div className="follow-block-feed">
                <h2>Suggested Follows</h2>
                <div className="follow-block-feed-inner">
                    <div className="follow-block-feed-inner-flex">
                        <div className="right-top-feed">
                            <img
                                src={"../../images/profile-img-product.png"}
                                alt="img"
                            ></img>
                            <div className="right-top-feed-content">
                                <h4>SY</h4>
                                <p>@tesseractx</p>
                            </div>
                        </div>
                        <div className="follow-block-btn">
                            <button>Follow</button>
                        </div>
                    </div>
                    <div className="follow-block-feed-inner-flex">
                        <div className="right-top-feed">
                            <img
                                src={"../../images/profile-img-product.png"}
                                alt="img"
                            ></img>
                            <div className="right-top-feed-content">
                                <h4>SY</h4>
                                <p>@tesseractx</p>
                            </div>
                        </div>
                        <div className="follow-block-btn">
                            <button>Follow</button>
                        </div>
                    </div>
                    <div className="follow-block-feed-inner-flex">
                        <div className="right-top-feed">
                            <img
                                src={"../../images/profile-img-product.png"}
                                alt="img"
                            ></img>
                            <div className="right-top-feed-content">
                                <h4>SY</h4>
                                <p>@tesseractx</p>
                            </div>
                        </div>
                        <div className="follow-block-btn">
                            <button>Follow</button>
                        </div>
                    </div>
                    <div className="follow-block-feed-inner-flex">
                        <div className="right-top-feed">
                            <img
                                src={"../../images/profile-img-product.png"}
                                alt="img"
                            ></img>
                            <div className="right-top-feed-content">
                                <h4>SY</h4>
                                <p>@tesseractx</p>
                            </div>
                        </div>
                        <div className="follow-block-btn">
                            <button>Follow</button>
                        </div>
                    </div>
                    <div className="follow-block-feed-inner-flex">
                        <div className="right-top-feed">
                            <img
                                src={"../../images/profile-img-product.png"}
                                alt="img"
                            ></img>
                            <div className="right-top-feed-content">
                                <h4>SY</h4>
                                <p>@tesseractx</p>
                            </div>
                        </div>
                        <div className="follow-block-btn">
                            <button>Follow</button>
                        </div>
                    </div>
                </div>
                <div className="show-more">
                    <a href="">Show more</a>
                </div>
            </div> */}

            {/* Top Collectors Block */}
            <div className="follow-block-feed">
                <h2>Top Collectors</h2>
                <div className="follow-block-feed-inner">
                    {topCollectorsLoading && topCollectorsPage === 1 ? (
                        <div className="text-center">
                            <Spinner animation="border" size="sm" />
                        </div>
                    ) : (
                        topCollectorsData?.map((item, index) => (
                            <div
                                className="follow-block-feed-inner-flex"
                                key={index}
                            >
                                <div
                                    className="right-top-feed pointer"
                                    onClick={() =>
                                        handleUserRoute(item?.userName)
                                    }
                                >
                                    <img
                                        src={item?.userLogo}
                                        alt="img"
                                        className="rounded-circle"
                                    ></img>
                                    <div className="right-top-feed-content">
                                        <h4>
                                            {item?.userFullName || "UnKnown"}
                                        </h4>
                                        <p>@{item?.userName || ""}</p>
                                    </div>
                                </div>
                                <CollectorFollowButton
                                    item={item}
                                    handleFollow={handleFollow}
                                />
                            </div>
                        ))
                    )}
                    {/* <div className="follow-block-feed-inner-flex">
                        <div className="right-top-feed">
                            <img
                                src={"../../images/profile-img-product.png"}
                                alt="img"
                            ></img>
                            <div className="right-top-feed-content">
                                <h4>SY</h4>
                                <p>@tesseractx</p>
                            </div>
                        </div>
                        <div className="follow-block-btn">
                            <button>Follow</button>
                        </div>
                    </div>
                    <div className="follow-block-feed-inner-flex">
                        <div className="right-top-feed">
                            <img
                                src={"../../images/profile-img-product.png"}
                                alt="img"
                            ></img>
                            <div className="right-top-feed-content">
                                <h4>SY</h4>
                                <p>@tesseractx</p>
                            </div>
                        </div>
                        <div className="follow-block-btn">
                            <button>Follow</button>
                        </div>
                    </div>
                    <div className="follow-block-feed-inner-flex">
                        <div className="right-top-feed">
                            <img
                                src={"../../images/profile-img-product.png"}
                                alt="img"
                            ></img>
                            <div className="right-top-feed-content">
                                <h4>SY</h4>
                                <p>@tesseractx</p>
                            </div>
                        </div>
                        <div className="follow-block-btn">
                            <button>Follow</button>
                        </div>
                    </div>
                    <div className="follow-block-feed-inner-flex">
                        <div className="right-top-feed">
                            <img
                                src={"../../images/profile-img-product.png"}
                                alt="img"
                            ></img>
                            <div className="right-top-feed-content">
                                <h4>SY</h4>
                                <p>@tesseractx</p>
                            </div>
                        </div>
                        <div className="follow-block-btn">
                            <button>Follow</button>
                        </div>
                    </div>
                    <div className="follow-block-feed-inner-flex">
                        <div className="right-top-feed">
                            <img
                                src={"../../images/profile-img-product.png"}
                                alt="img"
                            ></img>
                            <div className="right-top-feed-content">
                                <h4>SY</h4>
                                <p>@tesseractx</p>
                            </div>
                        </div>
                        <div className="follow-block-btn">
                            <button>Follow</button>
                        </div>
                    </div> */}
                </div>
                {!topCollectorsLoading && topCollectorsHasMore ? (
                    <div className="show-more">
                        <button onClick={topCollectorsPageChange}>
                            Show more
                        </button>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </>
    );
};

export default FollowBlockRIght;
