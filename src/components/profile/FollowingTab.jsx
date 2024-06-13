import { useFollowUser, useFollowingItems } from "@/hooks/useProfileHook";
import React from "react";
import FollowButton from "./FollowButton";
import { Button } from "@/styles/pages/main.style";
import { Dropdown, Spinner } from "react-bootstrap";
import { PATH_DASHBOARD } from "@/routes/paths";
import { useRouter } from "next/router";
import Link from "next/link";

const FollowingTab = () => {
    const {
        loading,
        items,
        count,
        totalPages,
        page,
        limit,
        hasMore,
        payload,
        handlePageChange,
    } = useFollowingItems();
    const { handleFollow } = useFollowUser();
    const router = useRouter();

    const handleRouteChange = (address) => {
        router.push({
            pathname: PATH_DASHBOARD.user.detail(address),
        });
    };

    return (
        <>
            <div className="tab-block-right">
                <h2 className="title-text-right">Following</h2>
                <div className="following-block-main">
                    {items.length ? (
                        items.map((item, index) => (
                            <div className="following-block-main-inner">
                                <div className="following-block-main-block">
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant="success"
                                            id="dropdown-basic"
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M5.00016 11.6666C4.54183 11.6666 4.14933 11.5033 3.82266 11.1766C3.496 10.8499 3.33294 10.4577 3.3335 9.99992C3.3335 9.54159 3.49683 9.14909 3.8235 8.82242C4.15016 8.49575 4.54239 8.3327 5.00016 8.33325C5.4585 8.33325 5.851 8.49659 6.17766 8.82325C6.50433 9.14992 6.66739 9.54214 6.66683 9.99992C6.66683 10.4583 6.5035 10.8508 6.17683 11.1774C5.85016 11.5041 5.45794 11.6671 5.00016 11.6666ZM10.0002 11.6666C9.54183 11.6666 9.14933 11.5033 8.82266 11.1766C8.496 10.8499 8.33294 10.4577 8.3335 9.99992C8.3335 9.54159 8.49683 9.14909 8.8235 8.82242C9.15016 8.49575 9.54239 8.3327 10.0002 8.33325C10.4585 8.33325 10.851 8.49659 11.1777 8.82325C11.5043 9.14992 11.6674 9.54214 11.6668 9.99992C11.6668 10.4583 11.5035 10.8508 11.1768 11.1774C10.8502 11.5041 10.4579 11.6671 10.0002 11.6666ZM15.0002 11.6666C14.5418 11.6666 14.1493 11.5033 13.8227 11.1766C13.496 10.8499 13.3329 10.4577 13.3335 9.99992C13.3335 9.54159 13.4968 9.14909 13.8235 8.82242C14.1502 8.49575 14.5424 8.3327 15.0002 8.33325C15.4585 8.33325 15.851 8.49659 16.1777 8.82325C16.5043 9.14992 16.6674 9.54214 16.6668 9.99992C16.6668 10.4583 16.5035 10.8508 16.1768 11.1774C15.8502 11.5041 15.4579 11.6671 15.0002 11.6666Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item>
                                                <Link
                                                    href={PATH_DASHBOARD.chat.user(
                                                        item?.address
                                                    )}
                                                >
                                                    Send Message
                                                </Link>
                                            </Dropdown.Item>
                                            {/* <Dropdown.Item
                                                  href={PATH_DASHBOARD.chat.user(
                                                      item?.address
                                                  )}
                                              >
                                                  Send Message
                                              </Dropdown.Item> */}
                                            {/* <Dropdown.Item href="#/action-3">
                                                  Something else
                                              </Dropdown.Item> */}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <img
                                        src={item.image || "/images/user.svg"}
                                        alt="profile-img"
                                        className="pointer"
                                        onClick={() =>
                                            handleRouteChange(item?.address)
                                        }
                                    ></img>
                                    <h4>{item.name || "NoName"}</h4>
                                    <p>
                                        {item.totalItemsCount || 0}{" "}
                                        <span>items</span>
                                    </p>
                                    <FollowButton
                                        item={item}
                                        handleFollow={handleFollow}
                                    />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="d-flex justify-content-center w-100 align-items-center" style={{height:"350px"}}>
                        <p>
                            You are not following anyone yet.</p>
                        </div>
                    )}
                </div>
                {loading ? (
                    <div className="text-center">
                        <Spinner size="md" />
                    </div>
                ) : (
                    ""
                )}
                {hasMore ? (
                    <div className="load-more-btn">
                        <Button
                            isBorderBtn={true}
                            onClick={handlePageChange}
                            className="border-dark-button"
                        >
                            Load More
                        </Button>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </>
    );
};

export default FollowingTab;

// "_id": "656ea2d470c28db31c1042ab",
// "address": "0x085426ca3958bd760f4817f7cf139ce0cbb9f7af",
// "image": null,
// "name": null,
// "totalItemsCount": 8,
// "follow": false
