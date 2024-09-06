"use client";
import { PATH_DASHBOARD } from "@/routes/paths";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";

const RewardButtonHeader = () => {
    const rewardsRef = useRef(null);
    const [active, setActive] = useState(false);
    const router = useRouter();

    const clickHandler = useCallback(() => {
        setActive(true);
        window.addEventListener("click", onClick);
    }, []);

    const onClick = useCallback((event) => {
        if (rewardsRef.current && !rewardsRef.current.contains(event.target)) {
            setActive(false);
            window.removeEventListener("click", onClick);
        }
    }, []);

    useEffect(() => {
        setActive(false);
    }, [router]);

    return (
        <>
            <div
                className="header-dropdown-block"
                // onMouseEnter={() => handleHoverIn("create")}
                onClick={clickHandler}
                ref={rewardsRef}
            >
                <div className="header-dropdown-block-link group">
                    <span>
                        <p className="inline-block group-hover:bg-gradient-to-r group-hover:from-[#2BD7EF] group-hover:via-indigo-400 group-hover:to-[#FB4EF1] group-hover:!text-transparent group-hover:bg-clip-text">
                            Rewards
                        </p>
                        <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_73_3456)">
                                <path
                                    d="M5.32212 8.35018C5.1429 8.35018 4.9637 8.28175 4.82706 8.14518L0.527285 3.84536C0.253763 3.57184 0.253763 3.12837 0.527285 2.85496C0.800696 2.58155 1.24408 2.58155 1.51762 2.85496L5.32212 6.65968L9.12663 2.85509C9.40016 2.58168 9.84349 2.58168 10.1169 2.85509C10.3905 3.1285 10.3905 3.57197 10.1169 3.8455L5.81717 8.14531C5.68047 8.28191 5.50127 8.35018 5.32212 8.35018Z"
                                    fill="#191820"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_73_3456">
                                    <rect
                                        width="10"
                                        height="10"
                                        fill="white"
                                        transform="translate(0.322144 0.5)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                </div>
                {active && (
                    <div className={`header-dropdown-block-dropdown`}>
                        <Link href={PATH_DASHBOARD.rewards.root}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.74935 1.66663C2.59935 1.66663 1.66602 2.59996 1.66602 3.74996V5.68663C1.66646 6.13219 1.78598 6.56954 2.01219 6.95341C2.23841 7.33728 2.56311 7.65371 2.95268 7.86996L7.74602 10.535C6.74201 11.0418 5.93822 11.8724 5.4645 12.8924C4.99079 13.9125 4.87482 15.0625 5.13533 16.1566C5.39585 17.2507 6.01763 18.225 6.90022 18.9221C7.78281 19.6192 8.87466 19.9984 9.99935 19.9984C11.124 19.9984 12.2159 19.6192 13.0985 18.9221C13.9811 18.225 14.6028 17.2507 14.8634 16.1566C15.1239 15.0625 15.0079 13.9125 14.5342 12.8924C14.0605 11.8724 13.2567 11.0418 12.2527 10.535L17.0477 7.87163C17.4372 7.65502 17.7617 7.33823 17.9876 6.95406C18.2136 6.56989 18.3327 6.13231 18.3327 5.68663V3.74996C18.3327 2.59996 17.3993 1.66663 16.2493 1.66663H3.74935ZM8.33268 8.95329V3.33329H11.666V8.95329L9.99935 9.87996L8.33268 8.95329ZM13.3327 15C13.3327 15.884 12.9815 16.7319 12.3564 17.357C11.7312 17.9821 10.8834 18.3333 9.99935 18.3333C9.11529 18.3333 8.26745 17.9821 7.64233 17.357C7.0172 16.7319 6.66602 15.884 6.66602 15C6.66602 14.1159 7.0172 13.2681 7.64233 12.6429C8.26745 12.0178 9.11529 11.6666 9.99935 11.6666C10.8834 11.6666 11.7312 12.0178 12.3564 12.6429C12.9815 13.2681 13.3327 14.1159 13.3327 15Z"
                                    fill="black"
                                />
                            </svg>
                            <p>Rewards</p>
                        </Link>
                        <Link href={PATH_DASHBOARD.rewards.leaderBoard}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.14258 16.6667V8.33337H6.60341V16.6667H3.14258ZM8.10924 16.6667V3.33337H11.8926V16.6667H8.10924ZM13.3984 16.6667V10H16.8601V16.6667H13.3984Z"
                                    fill="black"
                                />
                            </svg>
                            <p>Leaderboard</p>
                        </Link>
                        <Link href={PATH_DASHBOARD.rewards.achievements}>
                            <svg
                                width="19"
                                height="20"
                                viewBox="0 0 19 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.2507 1.66663C13.5382 1.66663 12.6673 2.49996 12.6673 3.33329H6.33398C6.33398 2.49996 5.46315 1.66663 4.75065 1.66663H1.58398V9.16663C1.58398 9.99996 2.37565 10.8333 3.16732 10.8333H4.90898C5.22565 12.5 6.25482 13.9166 8.70898 14.1666V15.9C6.33398 16.2833 6.33398 18.3333 6.33398 18.3333H12.6673C12.6673 18.3333 12.6673 16.2833 10.2923 15.9V14.1666C12.7465 13.9166 13.7757 12.5 14.0923 10.8333H15.834C16.6257 10.8333 17.4173 9.99996 17.4173 9.16663V1.66663H14.2507ZM4.75065 9.16663H3.16732V3.33329H4.75065V9.16663ZM15.834 9.16663H14.2507V3.33329H15.834V9.16663Z"
                                    fill="black"
                                />
                            </svg>
                            <p>Achievements</p>
                        </Link>
                        <Link href={PATH_DASHBOARD.rewards.membership}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.99935 13.3333C10.4596 13.3333 10.8327 12.9602 10.8327 12.5C10.8327 12.0397 10.4596 11.6666 9.99935 11.6666C9.53911 11.6666 9.16602 12.0397 9.16602 12.5C9.16602 12.9602 9.53911 13.3333 9.99935 13.3333Z"
                                    fill="url(#paint0_linear_8282_16176)"
                                />
                                <path
                                    d="M14.1673 6.66663H8.33398V4.99996C8.33398 4.55793 8.50958 4.13401 8.82214 3.82145C9.1347 3.50889 9.55862 3.33329 10.0007 3.33329C10.4427 3.33329 10.8666 3.50889 11.1792 3.82145C11.4917 4.13401 11.6673 4.55793 11.6673 4.99996C11.6673 5.22097 11.7551 5.43293 11.9114 5.58921C12.0677 5.74549 12.2796 5.83329 12.5007 5.83329C12.7217 5.83329 12.9336 5.74549 13.0899 5.58921C13.2462 5.43293 13.334 5.22097 13.334 4.99996C13.334 4.1159 12.9828 3.26806 12.3577 2.64294C11.7326 2.01782 10.8847 1.66663 10.0007 1.66663C9.1166 1.66663 8.26875 2.01782 7.64363 2.64294C7.01851 3.26806 6.66732 4.1159 6.66732 4.99996V6.66663H5.83398C5.17094 6.66663 4.53506 6.93002 4.06622 7.39886C3.59738 7.8677 3.33398 8.50358 3.33398 9.16663V15.8333C3.33398 16.4963 3.59738 17.1322 4.06622 17.6011C4.53506 18.0699 5.17094 18.3333 5.83398 18.3333H14.1673C14.8304 18.3333 15.4662 18.0699 15.9351 17.6011C16.4039 17.1322 16.6673 16.4963 16.6673 15.8333V9.16663C16.6673 8.50358 16.4039 7.8677 15.9351 7.39886C15.4662 6.93002 14.8304 6.66663 14.1673 6.66663ZM10.0007 15C9.5062 15 9.02285 14.8533 8.61173 14.5786C8.2006 14.3039 7.88017 13.9135 7.69095 13.4567C7.50173 12.9999 7.45222 12.4972 7.54869 12.0122C7.64515 11.5273 7.88325 11.0818 8.23288 10.7322C8.58251 10.3826 9.02797 10.1445 9.51293 10.048C9.99788 9.95153 10.5005 10.001 10.9574 10.1903C11.4142 10.3795 11.8046 10.6999 12.0793 11.111C12.354 11.5222 12.5007 12.0055 12.5007 12.5C12.5007 13.163 12.2373 13.7989 11.7684 14.2677C11.2996 14.7366 10.6637 15 10.0007 15Z"
                                    fill="black"
                                />
                                {/* fill="url(#paint1_linear_8282_16176)"/> */}
                                <defs>
                                    {/* <linearGradient id="paint0_linear_8282_16176" x1="8.84901" y1="12.5" x2="11.1881" y2="12.51" gradientUnits="userSpaceOnUse">
<stop stop-color="#2BD7EF"/>
<stop offset="1" stop-color="#FB4EF1"/>
</linearGradient>
<linearGradient id="paint1_linear_8282_16176" x1="0.797961" y1="9.99996" x2="19.5105" y2="10.0645" gradientUnits="userSpaceOnUse">
<stop stop-color="#2BD7EF"/>
<stop offset="1" stop-color="#FB4EF1"/>
</linearGradient> */}
                                </defs>
                            </svg>
                            <p>Unlock TesseractX</p>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default RewardButtonHeader;
