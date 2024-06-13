import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import { CommonProductBLock } from "@/styles/pages/main.style";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import React, { useState } from "react";
import Select from "react-select";
import Pagination from "react-bootstrap/Pagination";
import Modal from "react-bootstrap/Modal";
const profilepage = () => {
    const options = [
        { value: "chocolate", label: "Recently Listed" },
        { value: "strawberry", label: "Recently Sold" },
        { value: "vanilla", label: "Recently Received" },
        { value: "strawberry", label: "Recently Soon" },
        { value: "strawberry", label: "Recently Low to Hight" },
        { value: "strawberry", label: "Recently Last Sale" },
        { value: "strawberry", label: "Oldest" },
    ];
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <CommonPageBlockPad>
            <Container>
                <div className="common-profile-block-main">
                    <div className="overlay-profile-cover"></div>
                    <img src={"../../images/cover-img.svg"} alt="cover"></img>
                    <div className="profile-social-link">
                        <ul>
                            <li>
                                <Link href="{}">
                                    <svg
                                        width="25"
                                        height="25"
                                        viewBox="0 0 25 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_101_13290)">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M5.61802 11.1973H8.8914C9.0751 8.93332 9.83283 6.76011 11.0836 4.88006C8.16933 5.63888 5.95646 8.13563 5.61802 11.1973ZM12.9471 5.09388C11.579 6.85639 10.7421 8.9743 10.5362 11.1973H15.3579C15.1521 8.9743 14.3151 6.85639 12.9471 5.09388ZM15.3579 12.836C15.1521 15.0589 14.3151 17.1769 12.9471 18.9394C11.579 17.1769 10.7421 15.0589 10.5362 12.836H15.3579ZM8.8914 12.836H5.61802C5.95646 15.8976 8.16933 18.3944 11.0836 19.1532C9.83283 17.2732 9.0751 15.1 8.8914 12.836ZM14.8105 19.1532C16.0613 17.2732 16.819 15.1 17.0027 12.836H20.2761C19.9376 15.8976 17.7248 18.3944 14.8105 19.1532ZM20.2761 11.1973H17.0027C16.819 8.93332 16.0613 6.76011 14.8105 4.88006C17.7248 5.63888 19.9376 8.13563 20.2761 11.1973ZM3.93433 12.0166C3.93433 7.03905 7.96947 3.00391 12.9471 3.00391C17.9247 3.00391 21.9598 7.03905 21.9598 12.0166C21.9598 16.9943 17.9247 21.0294 12.9471 21.0294C7.96947 21.0294 3.93433 16.9943 3.93433 12.0166Z"
                                                fill="white"
                                            />
                                        </g>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="{}">
                                    <svg
                                        width="33"
                                        height="33"
                                        viewBox="0 0 33 33"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_4_28199)">
                                            <path
                                                d="M25.6609 7.18734C23.9407 6.35888 22.0961 5.74851 20.1672 5.39893C20.1321 5.39218 20.097 5.40904 20.0789 5.44276C19.8417 5.88565 19.5788 6.46341 19.3949 6.91754C17.3202 6.59157 15.2564 6.59157 13.2244 6.91754C13.0403 6.45332 12.768 5.88565 12.5297 5.44276C12.5116 5.41016 12.4765 5.3933 12.4414 5.39893C10.5137 5.74739 8.66891 6.35776 6.94757 7.18734C6.93268 7.19409 6.91991 7.20534 6.91142 7.21994C3.41235 12.7066 2.45381 18.0584 2.92404 23.3438C2.92617 23.3697 2.93999 23.3944 2.95915 23.4102C5.26773 25.1895 7.50399 26.2698 9.69873 26.9858C9.73386 26.997 9.77108 26.9836 9.79343 26.9532C10.3126 26.2091 10.7754 25.4245 11.1722 24.5994C11.1956 24.551 11.1732 24.4937 11.1254 24.4747C10.3913 24.1824 9.69235 23.8261 9.01998 23.4214C8.96681 23.3888 8.96254 23.3089 9.01148 23.2708C9.15296 23.1594 9.29448 23.0436 9.4296 22.9268C9.45404 22.9054 9.4881 22.9009 9.51683 22.9144C13.934 25.0311 18.716 25.0311 23.0811 22.9144C23.1098 22.8998 23.144 22.9042 23.1695 22.9257C23.3045 23.0426 23.446 23.1594 23.5886 23.2708C23.6375 23.3089 23.6344 23.3888 23.5812 23.4214C22.9087 23.8339 22.2098 24.1824 21.4747 24.4734C21.4268 24.4926 21.4055 24.551 21.429 24.5994C21.8342 25.4234 22.297 26.208 22.8066 26.9521C22.8279 26.9836 22.8662 26.997 22.9013 26.9858C25.1067 26.2698 27.343 25.1895 29.6516 23.4102C29.6717 23.3944 29.6845 23.3708 29.6867 23.345C30.2494 17.2344 28.7441 11.9265 25.696 7.22106C25.6886 7.20534 25.6759 7.19409 25.6609 7.18734ZM11.8318 20.1256C10.502 20.1256 9.40617 18.8441 9.40617 17.2704C9.40617 15.6966 10.4807 14.4152 11.8318 14.4152C13.1935 14.4152 14.2787 15.7079 14.2574 17.2704C14.2574 18.8441 13.1829 20.1256 11.8318 20.1256ZM20.8002 20.1256C19.4703 20.1256 18.3746 18.8441 18.3746 17.2704C18.3746 15.6966 19.4491 14.4152 20.8002 14.4152C22.1619 14.4152 23.2471 15.7079 23.2259 17.2704C23.2259 18.8441 22.1619 20.1256 20.8002 20.1256Z"
                                                fill="#fff"
                                            ></path>
                                        </g>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="{}">
                                    <svg
                                        width="25"
                                        height="25"
                                        viewBox="0 0 25 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_101_13296)">
                                            <path
                                                d="M12.0814 7.38672C9.52377 7.38672 7.45184 9.45965 7.45184 12.0163C7.45184 14.5739 9.52377 16.6468 12.0814 16.6468C14.6371 16.6468 16.711 14.5739 16.711 12.0163C16.711 9.45965 14.6371 7.38672 12.0814 7.38672ZM12.0814 15.0245C10.4201 15.0245 9.07314 13.6776 9.07314 12.0173C9.07314 10.3559 10.4201 9.01001 12.0814 9.01001C13.7428 9.01001 15.0877 10.3559 15.0877 12.0173C15.0877 13.6776 13.7428 15.0245 12.0814 15.0245Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M16.896 8.29577C17.4921 8.29577 17.9755 7.81246 17.9755 7.21624C17.9755 6.62004 17.4921 6.13672 16.896 6.13672C16.2998 6.13672 15.8165 6.62004 15.8165 7.21624C15.8165 7.81246 16.2998 8.29577 16.896 8.29577Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M20.6276 6.11821C20.158 4.9075 19.2016 3.95014 17.9909 3.48248C17.2909 3.21911 16.5509 3.07791 15.8018 3.06189C14.8375 3.01983 14.532 3.00781 12.0866 3.00781C9.64106 3.00781 9.32762 3.00781 8.37127 3.06189C7.62421 3.07691 6.88417 3.21811 6.18418 3.48248C4.97246 3.95014 4.01611 4.9075 3.54745 6.11821C3.28408 6.8192 3.14288 7.55824 3.12786 8.3073C3.0848 9.27067 3.07178 9.5761 3.07178 12.0226C3.07178 14.468 3.07178 14.7795 3.12786 15.7378C3.14288 16.4869 3.28408 17.2259 3.54745 17.9279C4.01711 19.1376 4.97347 20.095 6.18518 20.5637C6.88216 20.836 7.62221 20.9903 8.37327 21.0143C9.33763 21.0563 9.64307 21.0694 12.0886 21.0694C14.534 21.0694 14.8475 21.0694 15.8038 21.0143C16.5519 20.9993 17.2919 20.8571 17.9929 20.5947C19.2036 20.125 20.16 19.1687 20.6296 17.958C20.893 17.257 21.0342 16.5179 21.0492 15.7689C21.0923 14.8055 21.1053 14.5001 21.1053 12.0536C21.1053 9.60714 21.1053 9.2967 21.0492 8.33835C21.0362 7.57927 20.896 6.82721 20.6276 6.11821ZM19.4079 15.6637C19.4009 16.2405 19.2968 16.8123 19.0965 17.3541C18.791 18.1422 18.1692 18.7651 17.3821 19.0675C16.8463 19.2668 16.2815 19.371 15.7097 19.379C14.7583 19.423 14.49 19.4341 12.0505 19.4341C9.60902 19.4341 9.35967 19.4341 8.3903 19.379C7.82049 19.372 7.25369 19.2668 6.71893 19.0675C5.92882 18.7661 5.30293 18.1432 4.9975 17.3541C4.80122 16.8194 4.69507 16.2536 4.68606 15.6827C4.643 14.7314 4.63298 14.463 4.63298 12.0236C4.63298 9.58311 4.63298 9.33375 4.68606 8.36338C4.69307 7.78657 4.79722 7.21576 4.9975 6.674C5.30293 5.88388 5.92882 5.262 6.71893 4.95957C7.25369 4.76129 7.82049 4.65614 8.3903 4.64813C9.34264 4.60507 9.61002 4.59305 12.0505 4.59305C14.491 4.59305 14.7413 4.59305 15.7097 4.64813C16.2815 4.65514 16.8463 4.76029 17.3821 4.95957C18.1692 5.263 18.791 5.88588 19.0965 6.674C19.2928 7.20875 19.3989 7.77455 19.4079 8.34536C19.451 9.2977 19.462 9.56508 19.462 12.0056C19.462 14.445 19.462 14.7074 19.4189 15.6647L19.4079 15.6637Z"
                                                fill="white"
                                            />
                                        </g>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="{}">
                                    <svg
                                        width="28"
                                        height="28"
                                        viewBox="0 0 28 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g
                                            clip-path="url(#clip0_4_28207)"
                                            filter="url(#filter0_i_4_28207)"
                                        >
                                            <path
                                                d="M27.6863 5.62595C26.7978 6.00865 25.8638 6.27514 24.9073 6.41883C25.3545 6.3421 26.0125 5.53643 26.2744 5.21033C26.6723 4.71843 26.9756 4.15689 27.1688 3.55423C27.1688 3.50947 27.2135 3.44553 27.1688 3.41356C27.1463 3.40125 27.121 3.39479 27.0953 3.39479C27.0697 3.39479 27.0444 3.40125 27.0219 3.41356C25.9832 3.97652 24.8778 4.40619 23.7318 4.6924C23.6918 4.70461 23.6493 4.70571 23.6088 4.69557C23.5683 4.68543 23.5313 4.66444 23.5018 4.63485C23.4126 4.52853 23.3166 4.42815 23.2143 4.33432C22.7469 3.91515 22.2166 3.57208 21.6427 3.31765C20.8682 2.99958 20.0315 2.86184 19.1959 2.91481C18.3852 2.96606 17.5936 3.18371 16.8705 3.55423C16.1584 3.94487 15.5326 4.47556 15.0306 5.11442C14.5026 5.77196 14.1214 6.53506 13.9126 7.35239C13.7405 8.12983 13.721 8.93334 13.8551 9.71824C13.8551 9.85252 13.8551 9.8717 13.7401 9.85252C9.18512 9.18113 5.44783 7.5634 2.39412 4.09134C2.25996 3.93788 2.18968 3.93788 2.08108 4.09134C0.752267 6.11191 1.39751 9.30901 3.05852 10.8884C3.28212 11.0994 3.51211 11.304 3.75487 11.4958C2.99331 11.4417 2.25034 11.2352 1.57 10.8884C1.44223 10.8053 1.37195 10.85 1.36556 11.0035C1.34745 11.2162 1.34745 11.4301 1.36556 11.6429C1.49887 12.6625 1.90033 13.6284 2.52891 14.4418C3.1575 15.2552 3.99064 15.8869 4.94314 16.2723C5.17533 16.3718 5.41728 16.4468 5.66504 16.4961C4.96002 16.635 4.23693 16.6566 3.52489 16.56C3.37156 16.5281 3.31406 16.6112 3.37156 16.7583C4.31067 19.3159 6.34861 20.096 7.84353 20.5308C8.04796 20.5628 8.25239 20.5628 8.48238 20.614C8.48238 20.614 8.48238 20.614 8.44405 20.6523C8.00324 21.458 6.22084 22.0015 5.40311 22.2828C3.91054 22.8194 2.31919 23.0245 0.73949 22.8839C0.490337 22.8455 0.432841 22.8519 0.368955 22.8839C0.30507 22.9159 0.368955 22.9862 0.439229 23.0501C0.758655 23.2612 1.07808 23.4466 1.41028 23.6256C2.39926 24.1655 3.4448 24.5944 4.52788 24.9045C10.137 26.4519 16.4489 25.3137 20.6589 21.1255C23.9682 17.8389 25.1309 13.3054 25.1309 8.7655C25.1309 8.59286 25.3417 8.49055 25.4631 8.40104C26.3003 7.74812 27.0384 6.97704 27.6543 6.11191C27.761 5.98295 27.8157 5.81876 27.8077 5.65153C27.8077 5.55562 27.8077 5.5748 27.6863 5.62595Z"
                                                fill="#fff"
                                            ></path>
                                        </g>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="{}">
                                    <svg
                                        width="28"
                                        height="28"
                                        viewBox="0 0 28 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g filter="url(#filter0_i_4_28209)">
                                            <path
                                                d="M3.86302 13.0143C3.86302 13.0143 14.6608 8.22566 18.4056 6.53945C19.8412 5.86502 24.7095 3.70666 24.7095 3.70666C24.7095 3.70666 26.9565 2.76246 26.7692 5.05562C26.7067 5.99991 26.2074 9.30475 25.7082 12.8795C24.9591 17.938 24.1477 23.4686 24.1477 23.4686C24.1477 23.4686 24.0229 25.0199 22.9619 25.2897C21.9009 25.5595 20.1532 24.3455 19.8412 24.0756C19.5914 23.8734 15.1601 20.8382 13.5373 19.3543C13.1004 18.9497 12.6011 18.1404 13.5997 17.1961C15.8466 14.9703 18.5304 12.205 20.1532 10.4514C20.9022 9.64201 21.6511 7.75352 18.5304 10.0467C14.099 13.3516 9.73 16.4542 9.73 16.4542C9.73 16.4542 8.73134 17.1286 6.85892 16.5216C4.98642 15.9146 2.80191 15.1052 2.80191 15.1052C2.80191 15.1052 1.30404 14.0935 3.86302 13.0143Z"
                                                fill="#fff"
                                            ></path>
                                        </g>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="profile-img-upload-fill">
                    <div className="profile-block-img">
                        <img
                            height={137}
                            width={137}
                            src={"../../images/profile-img.png"}
                            alt="profile"
                        ></img>
                    </div>
                    <div className="profile-data-main">
                        <div className="profile-name-disc">
                            <div className="profile-name-etc">
                                <h2>Rabby</h2>
                                <span>0x0dD9...7F3B</span>
                                <p>Joined August 2023</p>
                            </div>
                            <div className="profile-share-settings">
                                <Link href="{}">
                                    <img
                                        src="../../images/gear-img.svg"
                                        alt="plus"
                                    ></img>
                                </Link>
                                <Link href="{}">
                                    <img
                                        src="../../images/share-network-icon.svg"
                                        alt="plus"
                                    ></img>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="tab-block-profile">
                <Container className="filter-big-con">
                    <Tabs
                        defaultActiveKey="collection"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="collection" title="Collection">
                            <div className="tab-filter-main-block">
                                <div className="tab-filter-main-block-inner">
                                    <div className="filter-block-left">
                                        <div className="filter-block-common">
                                            <h3>Search</h3>
                                            <div className="search-block-filter">
                                                <form>
                                                    <input
                                                        type="text"
                                                        placeholder="Search NFT"
                                                    />
                                                    <button>
                                                        <img
                                                            src="../../images/Icon-search.svg"
                                                            alt="search-icon"
                                                        ></img>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="filter-block-common border-block-pad">
                                            <h3>Status</h3>
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
                                                        <h4>Buy Now</h4>
                                                    </label>
                                                </div>
                                                <div className="checkbox-filter-block">
                                                    <input
                                                        type="checkbox"
                                                        id="auctions"
                                                    ></input>
                                                    <label for="auctions">
                                                        <span>
                                                            <img
                                                                src={
                                                                    "../../images/check-icon-block.svg"
                                                                }
                                                                alt="check-icon"
                                                            ></img>
                                                        </span>
                                                        <h4>On Auctions</h4>
                                                    </label>
                                                </div>
                                                <div className="checkbox-filter-block">
                                                    <input
                                                        type="checkbox"
                                                        id="offers"
                                                    ></input>
                                                    <label for="offers">
                                                        <span>
                                                            <img
                                                                src={
                                                                    "../../images/check-icon-block.svg"
                                                                }
                                                                alt="check-icon"
                                                            ></img>
                                                        </span>
                                                        <h4>Has Offers</h4>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="filter-block-common border-block-pad">
                                            <h3>Categories</h3>
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
                                                        <h4>Art</h4>
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
                                                        <h4>Music</h4>
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
                                                        <h4>Domain Names</h4>
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
                                                        <h4>Virtual Worlds</h4>
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
                                                        <h4>Trading Cards</h4>
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
                                                        <h4>Collectibles</h4>
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
                                                        <h4>Sports</h4>
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
                                                        <h4>Utility</h4>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="filter-block-common border-block-pad border-none">
                                            <h3>Chains</h3>
                                            <div className="radio-filter-block">
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
                                            </div>
                                        </div>
                                    </div>
                                    <div className="showing-result-block">
                                        <div className="top-showing-result-block">
                                            <p>Showing 1–9 of 144 results</p>
                                            <div className="form-group">
                                                <Select
                                                    name="colors"
                                                    options={options}
                                                    className="TX-select2-wrapper"
                                                    classNamePrefix="TX-fix-select"
                                                />
                                            </div>
                                        </div>
                                        <CommonProductBLock>
                                            <div className="common-product-block">
                                                <div className="common-product-block-inner">
                                                    <div className="common-product-block-inner-width">
                                                        <div className="top-block-product">
                                                            <h4>
                                                                Sweet Baby #1
                                                            </h4>
                                                            <Link href="{}">
                                                                <svg
                                                                    width="16"
                                                                    height="16"
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                                        fill="#B9B8BB"
                                                                    />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                        <div className="product-img-time">
                                                            <img
                                                                src={
                                                                    "../../images/product-img-block.png"
                                                                }
                                                                alt=""
                                                            ></img>
                                                            <p>
                                                                13h : 28m : 36s
                                                            </p>
                                                        </div>
                                                        <div className="product-details-profile">
                                                            <div className="product-profile">
                                                                <img
                                                                    src={
                                                                        "../../images/profile-img-product.png"
                                                                    }
                                                                    alt=""
                                                                ></img>
                                                                <div className="product-profile-details">
                                                                    <p>
                                                                        Creator
                                                                    </p>
                                                                    <h5>
                                                                        Hakunamatata
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <div className="bid-common">
                                                                <p>
                                                                    Current bid
                                                                </p>
                                                                <h5>
                                                                    <span>
                                                                        5 ETH
                                                                    </span>
                                                                    <img
                                                                        src={
                                                                            "../../images/ethe-icon-blue.svg"
                                                                        }
                                                                        alt="ethe-img"
                                                                    ></img>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="btn-product">
                                                            <button>
                                                                <svg
                                                                    width="15"
                                                                    height="15"
                                                                    viewBox="0 0 15 15"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        clip-rule="evenodd"
                                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                                        fill="#565660"
                                                                    />
                                                                </svg>
                                                                <span>
                                                                    Place Bid
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="common-product-block-inner">
                                                    <div className="common-product-block-inner-width">
                                                        <div className="top-block-product">
                                                            <h4>
                                                                Sweet Baby #1
                                                            </h4>
                                                            <Link href="{}">
                                                                <svg
                                                                    width="16"
                                                                    height="16"
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                                        fill="#B9B8BB"
                                                                    />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                        <div className="product-img-time">
                                                            <img
                                                                src={
                                                                    "../../images/product-img-block.png"
                                                                }
                                                                alt=""
                                                            ></img>
                                                            <p>
                                                                13h : 28m : 36s
                                                            </p>
                                                        </div>
                                                        <div className="product-details-profile">
                                                            <div className="product-profile">
                                                                <img
                                                                    src={
                                                                        "../../images/profile-img-product.png"
                                                                    }
                                                                    alt=""
                                                                ></img>
                                                                <div className="product-profile-details">
                                                                    <p>
                                                                        Creator
                                                                    </p>
                                                                    <h5>
                                                                        Hakunamatata
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <div className="bid-common">
                                                                <p>
                                                                    Current bid
                                                                </p>
                                                                <h5>
                                                                    <span>
                                                                        5 ETH
                                                                    </span>
                                                                    <img
                                                                        src={
                                                                            "../../images/ethe-icon-blue.svg"
                                                                        }
                                                                        alt="ethe-img"
                                                                    ></img>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="btn-product">
                                                            <button>
                                                                <svg
                                                                    width="15"
                                                                    height="15"
                                                                    viewBox="0 0 15 15"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        clip-rule="evenodd"
                                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                                        fill="#565660"
                                                                    />
                                                                </svg>
                                                                <span>
                                                                    Place Bid
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="common-product-block-inner">
                                                    <div className="common-product-block-inner-width">
                                                        <div className="top-block-product">
                                                            <h4>
                                                                Sweet Baby #1
                                                            </h4>
                                                            <Link href="{}">
                                                                <svg
                                                                    width="16"
                                                                    height="16"
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                                        fill="#B9B8BB"
                                                                    />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                        <div className="product-img-time">
                                                            <img
                                                                src={
                                                                    "../../images/product-img-block.png"
                                                                }
                                                                alt=""
                                                            ></img>
                                                            <p>
                                                                13h : 28m : 36s
                                                            </p>
                                                        </div>
                                                        <div className="product-details-profile">
                                                            <div className="product-profile">
                                                                <img
                                                                    src={
                                                                        "../../images/profile-img-product.png"
                                                                    }
                                                                    alt=""
                                                                ></img>
                                                                <div className="product-profile-details">
                                                                    <p>
                                                                        Creator
                                                                    </p>
                                                                    <h5>
                                                                        Hakunamatata
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <div className="bid-common">
                                                                <p>
                                                                    Current bid
                                                                </p>
                                                                <h5>
                                                                    <span>
                                                                        5 ETH
                                                                    </span>
                                                                    <img
                                                                        src={
                                                                            "../../images/ethe-icon-blue.svg"
                                                                        }
                                                                        alt="ethe-img"
                                                                    ></img>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="btn-product">
                                                            <button>
                                                                <svg
                                                                    width="15"
                                                                    height="15"
                                                                    viewBox="0 0 15 15"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        clip-rule="evenodd"
                                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                                        fill="#565660"
                                                                    />
                                                                </svg>
                                                                <span>
                                                                    Place Bid
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="common-product-block-inner">
                                                    <div className="common-product-block-inner-width">
                                                        <div className="top-block-product">
                                                            <h4>
                                                                Sweet Baby #1
                                                            </h4>
                                                            <Link href="{}">
                                                                <svg
                                                                    width="16"
                                                                    height="16"
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                                        fill="#B9B8BB"
                                                                    />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                        <div className="product-img-time">
                                                            <img
                                                                src={
                                                                    "../../images/product-img-block.png"
                                                                }
                                                                alt=""
                                                            ></img>
                                                            <p>
                                                                13h : 28m : 36s
                                                            </p>
                                                        </div>
                                                        <div className="product-details-profile">
                                                            <div className="product-profile">
                                                                <img
                                                                    src={
                                                                        "../../images/profile-img-product.png"
                                                                    }
                                                                    alt=""
                                                                ></img>
                                                                <div className="product-profile-details">
                                                                    <p>
                                                                        Creator
                                                                    </p>
                                                                    <h5>
                                                                        Hakunamatata
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <div className="bid-common">
                                                                <p>
                                                                    Current bid
                                                                </p>
                                                                <h5>
                                                                    <span>
                                                                        5 ETH
                                                                    </span>
                                                                    <img
                                                                        src={
                                                                            "../../images/ethe-icon-blue.svg"
                                                                        }
                                                                        alt="ethe-img"
                                                                    ></img>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="btn-product">
                                                            <button>
                                                                <svg
                                                                    width="15"
                                                                    height="15"
                                                                    viewBox="0 0 15 15"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        clip-rule="evenodd"
                                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                                        fill="#565660"
                                                                    />
                                                                </svg>
                                                                <span>
                                                                    Place Bid
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="common-product-block-inner">
                                                    <div className="common-product-block-inner-width">
                                                        <div className="top-block-product">
                                                            <h4>
                                                                Sweet Baby #1
                                                            </h4>
                                                            <Link href="{}">
                                                                <svg
                                                                    width="16"
                                                                    height="16"
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                                        fill="#B9B8BB"
                                                                    />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                        <div className="product-img-time">
                                                            <img
                                                                src={
                                                                    "../../images/product-img-block.png"
                                                                }
                                                                alt=""
                                                            ></img>
                                                            <p>
                                                                13h : 28m : 36s
                                                            </p>
                                                        </div>
                                                        <div className="product-details-profile">
                                                            <div className="product-profile">
                                                                <img
                                                                    src={
                                                                        "../../images/profile-img-product.png"
                                                                    }
                                                                    alt=""
                                                                ></img>
                                                                <div className="product-profile-details">
                                                                    <p>
                                                                        Creator
                                                                    </p>
                                                                    <h5>
                                                                        Hakunamatata
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <div className="bid-common">
                                                                <p>
                                                                    Current bid
                                                                </p>
                                                                <h5>
                                                                    <span>
                                                                        5 ETH
                                                                    </span>
                                                                    <img
                                                                        src={
                                                                            "../../images/ethe-icon-blue.svg"
                                                                        }
                                                                        alt="ethe-img"
                                                                    ></img>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="btn-product">
                                                            <button>
                                                                <svg
                                                                    width="15"
                                                                    height="15"
                                                                    viewBox="0 0 15 15"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        clip-rule="evenodd"
                                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                                        fill="#565660"
                                                                    />
                                                                </svg>
                                                                <span>
                                                                    Place Bid
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="common-product-block-inner">
                                                    <div className="common-product-block-inner-width">
                                                        <div className="top-block-product">
                                                            <h4>
                                                                Sweet Baby #1
                                                            </h4>
                                                            <Link href="{}">
                                                                <svg
                                                                    width="16"
                                                                    height="16"
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                                        fill="#B9B8BB"
                                                                    />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                        <div className="product-img-time">
                                                            <img
                                                                src={
                                                                    "../../images/product-img-block.png"
                                                                }
                                                                alt=""
                                                            ></img>
                                                            <p>
                                                                13h : 28m : 36s
                                                            </p>
                                                        </div>
                                                        <div className="product-details-profile">
                                                            <div className="product-profile">
                                                                <img
                                                                    src={
                                                                        "../../images/profile-img-product.png"
                                                                    }
                                                                    alt=""
                                                                ></img>
                                                                <div className="product-profile-details">
                                                                    <p>
                                                                        Creator
                                                                    </p>
                                                                    <h5>
                                                                        Hakunamatata
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <div className="bid-common">
                                                                <p>
                                                                    Current bid
                                                                </p>
                                                                <h5>
                                                                    <span>
                                                                        5 ETH
                                                                    </span>
                                                                    <img
                                                                        src={
                                                                            "../../images/ethe-icon-blue.svg"
                                                                        }
                                                                        alt="ethe-img"
                                                                    ></img>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="btn-product">
                                                            <button>
                                                                <svg
                                                                    width="15"
                                                                    height="15"
                                                                    viewBox="0 0 15 15"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        clip-rule="evenodd"
                                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                                        fill="#565660"
                                                                    />
                                                                </svg>
                                                                <span>
                                                                    Place Bid
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="common-product-block-inner">
                                                    <div className="common-product-block-inner-width">
                                                        <div className="top-block-product">
                                                            <h4>
                                                                Sweet Baby #1
                                                            </h4>
                                                            <Link href="{}">
                                                                <svg
                                                                    width="16"
                                                                    height="16"
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                                        fill="#B9B8BB"
                                                                    />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                        <div className="product-img-time">
                                                            <img
                                                                src={
                                                                    "../../images/product-img-block.png"
                                                                }
                                                                alt=""
                                                            ></img>
                                                            <p>
                                                                13h : 28m : 36s
                                                            </p>
                                                        </div>
                                                        <div className="product-details-profile">
                                                            <div className="product-profile">
                                                                <img
                                                                    src={
                                                                        "../../images/profile-img-product.png"
                                                                    }
                                                                    alt=""
                                                                ></img>
                                                                <div className="product-profile-details">
                                                                    <p>
                                                                        Creator
                                                                    </p>
                                                                    <h5>
                                                                        Hakunamatata
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <div className="bid-common">
                                                                <p>
                                                                    Current bid
                                                                </p>
                                                                <h5>
                                                                    <span>
                                                                        5 ETH
                                                                    </span>
                                                                    <img
                                                                        src={
                                                                            "../../images/ethe-icon-blue.svg"
                                                                        }
                                                                        alt="ethe-img"
                                                                    ></img>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="btn-product">
                                                            <button>
                                                                <svg
                                                                    width="15"
                                                                    height="15"
                                                                    viewBox="0 0 15 15"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        clip-rule="evenodd"
                                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                                        fill="#565660"
                                                                    />
                                                                </svg>
                                                                <span>
                                                                    Place Bid
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="common-product-block-inner">
                                                    <div className="common-product-block-inner-width">
                                                        <div className="top-block-product">
                                                            <h4>
                                                                Sweet Baby #1
                                                            </h4>
                                                            <Link href="{}">
                                                                <svg
                                                                    width="16"
                                                                    height="16"
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                                        fill="#B9B8BB"
                                                                    />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                        <div className="product-img-time">
                                                            <img
                                                                src={
                                                                    "../../images/product-img-block.png"
                                                                }
                                                                alt=""
                                                            ></img>
                                                            <p>
                                                                13h : 28m : 36s
                                                            </p>
                                                        </div>
                                                        <div className="product-details-profile">
                                                            <div className="product-profile">
                                                                <img
                                                                    src={
                                                                        "../../images/profile-img-product.png"
                                                                    }
                                                                    alt=""
                                                                ></img>
                                                                <div className="product-profile-details">
                                                                    <p>
                                                                        Creator
                                                                    </p>
                                                                    <h5>
                                                                        Hakunamatata
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <div className="bid-common">
                                                                <p>
                                                                    Current bid
                                                                </p>
                                                                <h5>
                                                                    <span>
                                                                        5 ETH
                                                                    </span>
                                                                    <img
                                                                        src={
                                                                            "../../images/ethe-icon-blue.svg"
                                                                        }
                                                                        alt="ethe-img"
                                                                    ></img>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="btn-product">
                                                            <button>
                                                                <svg
                                                                    width="15"
                                                                    height="15"
                                                                    viewBox="0 0 15 15"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        clip-rule="evenodd"
                                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                                        fill="#565660"
                                                                    />
                                                                </svg>
                                                                <span>
                                                                    Place Bid
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="common-product-block-inner">
                                                    <div className="common-product-block-inner-width">
                                                        <div className="top-block-product">
                                                            <h4>
                                                                Sweet Baby #1
                                                            </h4>
                                                            <Link href="{}">
                                                                <svg
                                                                    width="16"
                                                                    height="16"
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                                        fill="#B9B8BB"
                                                                    />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                        <div className="product-img-time">
                                                            <img
                                                                src={
                                                                    "../../images/product-img-block.png"
                                                                }
                                                                alt=""
                                                            ></img>
                                                            <p>
                                                                13h : 28m : 36s
                                                            </p>
                                                        </div>
                                                        <div className="product-details-profile">
                                                            <div className="product-profile">
                                                                <img
                                                                    src={
                                                                        "../../images/profile-img-product.png"
                                                                    }
                                                                    alt=""
                                                                ></img>
                                                                <div className="product-profile-details">
                                                                    <p>
                                                                        Creator
                                                                    </p>
                                                                    <h5>
                                                                        Hakunamatata
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <div className="bid-common">
                                                                <p>
                                                                    Current bid
                                                                </p>
                                                                <h5>
                                                                    <span>
                                                                        5 ETH
                                                                    </span>
                                                                    <img
                                                                        src={
                                                                            "../../images/ethe-icon-blue.svg"
                                                                        }
                                                                        alt="ethe-img"
                                                                    ></img>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="btn-product">
                                                            <button>
                                                                <svg
                                                                    width="15"
                                                                    height="15"
                                                                    viewBox="0 0 15 15"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        clip-rule="evenodd"
                                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                                        fill="#565660"
                                                                    />
                                                                </svg>
                                                                <span>
                                                                    Place Bid
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="common-product-block-inner">
                                                    <div className="common-product-block-inner-width">
                                                        <div className="top-block-product">
                                                            <h4>
                                                                Sweet Baby #1
                                                            </h4>
                                                            <Link href="{}">
                                                                <svg
                                                                    width="16"
                                                                    height="16"
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                                        fill="#B9B8BB"
                                                                    />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                        <div className="product-img-time">
                                                            <img
                                                                src={
                                                                    "../../images/product-img-block.png"
                                                                }
                                                                alt=""
                                                            ></img>
                                                            <p>
                                                                13h : 28m : 36s
                                                            </p>
                                                        </div>
                                                        <div className="product-details-profile">
                                                            <div className="product-profile">
                                                                <img
                                                                    src={
                                                                        "../../images/profile-img-product.png"
                                                                    }
                                                                    alt=""
                                                                ></img>
                                                                <div className="product-profile-details">
                                                                    <p>
                                                                        Creator
                                                                    </p>
                                                                    <h5>
                                                                        Hakunamatata
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <div className="bid-common">
                                                                <p>
                                                                    Current bid
                                                                </p>
                                                                <h5>
                                                                    <span>
                                                                        5 ETH
                                                                    </span>
                                                                    <img
                                                                        src={
                                                                            "../../images/ethe-icon-blue.svg"
                                                                        }
                                                                        alt="ethe-img"
                                                                    ></img>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="btn-product">
                                                            <button>
                                                                <svg
                                                                    width="15"
                                                                    height="15"
                                                                    viewBox="0 0 15 15"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        clip-rule="evenodd"
                                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                                        fill="#565660"
                                                                    />
                                                                </svg>
                                                                <span>
                                                                    Place Bid
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="common-product-block-inner">
                                                    <div className="common-product-block-inner-width">
                                                        <div className="top-block-product">
                                                            <h4>
                                                                Sweet Baby #1
                                                            </h4>
                                                            <Link href="{}">
                                                                <svg
                                                                    width="16"
                                                                    height="16"
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                                        fill="#B9B8BB"
                                                                    />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                        <div className="product-img-time">
                                                            <img
                                                                src={
                                                                    "../../images/product-img-block.png"
                                                                }
                                                                alt=""
                                                            ></img>
                                                            <p>
                                                                13h : 28m : 36s
                                                            </p>
                                                        </div>
                                                        <div className="product-details-profile">
                                                            <div className="product-profile">
                                                                <img
                                                                    src={
                                                                        "../../images/profile-img-product.png"
                                                                    }
                                                                    alt=""
                                                                ></img>
                                                                <div className="product-profile-details">
                                                                    <p>
                                                                        Creator
                                                                    </p>
                                                                    <h5>
                                                                        Hakunamatata
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <div className="bid-common">
                                                                <p>
                                                                    Current bid
                                                                </p>
                                                                <h5>
                                                                    <span>
                                                                        5 ETH
                                                                    </span>
                                                                    <img
                                                                        src={
                                                                            "../../images/ethe-icon-blue.svg"
                                                                        }
                                                                        alt="ethe-img"
                                                                    ></img>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="btn-product">
                                                            <button>
                                                                <svg
                                                                    width="15"
                                                                    height="15"
                                                                    viewBox="0 0 15 15"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        clip-rule="evenodd"
                                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                                        fill="#565660"
                                                                    />
                                                                </svg>
                                                                <span>
                                                                    Place Bid
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="common-product-block-inner">
                                                    <div className="common-product-block-inner-width">
                                                        <div className="top-block-product">
                                                            <h4>
                                                                Sweet Baby #1
                                                            </h4>
                                                            <Link href="{}">
                                                                <svg
                                                                    width="16"
                                                                    height="16"
                                                                    viewBox="0 0 16 16"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                                                                        fill="#B9B8BB"
                                                                    />
                                                                </svg>
                                                            </Link>
                                                        </div>
                                                        <div className="product-img-time">
                                                            <img
                                                                src={
                                                                    "../../images/product-img-block.png"
                                                                }
                                                                alt=""
                                                            ></img>
                                                            <p>
                                                                13h : 28m : 36s
                                                            </p>
                                                        </div>
                                                        <div className="product-details-profile">
                                                            <div className="product-profile">
                                                                <img
                                                                    src={
                                                                        "../../images/profile-img-product.png"
                                                                    }
                                                                    alt=""
                                                                ></img>
                                                                <div className="product-profile-details">
                                                                    <p>
                                                                        Creator
                                                                    </p>
                                                                    <h5>
                                                                        Hakunamatata
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <div className="bid-common">
                                                                <p>
                                                                    Current bid
                                                                </p>
                                                                <h5>
                                                                    <span>
                                                                        5 ETH
                                                                    </span>
                                                                    <img
                                                                        src={
                                                                            "../../images/ethe-icon-blue.svg"
                                                                        }
                                                                        alt="ethe-img"
                                                                    ></img>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="btn-product">
                                                            <button>
                                                                <svg
                                                                    width="15"
                                                                    height="15"
                                                                    viewBox="0 0 15 15"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        clip-rule="evenodd"
                                                                        d="M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z"
                                                                        fill="#565660"
                                                                    />
                                                                </svg>
                                                                <span>
                                                                    Place Bid
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CommonProductBLock>
                                        <div className="pagination-block-custom">
                                            <Pagination>
                                                <Pagination.Prev />
                                                <Pagination.Item>
                                                    {1}
                                                </Pagination.Item>
                                                <Pagination.Item>
                                                    {2}
                                                </Pagination.Item>

                                                <Pagination.Next />
                                            </Pagination>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="activity" title="Activity">
                            <div className="table-activity">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Activity</th>
                                            <th>Item</th>
                                            <th>Price</th>
                                            <th>Rarity</th>
                                            <th>Quantity</th>
                                            <th>From</th>
                                            <th>To</th>
                                            <th className="align-end-th">
                                                Time
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="item-td">
                                                    <img
                                                        src="../../images/sparkle-icon.svg"
                                                        alt="sparkle-icon"
                                                    ></img>
                                                    <h5>Mint</h5>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="profile-td-block">
                                                    <img
                                                        src="../../images/profile-activity-img.png"
                                                        alt="search-icon"
                                                    ></img>
                                                    <div className="profile-td-details">
                                                        <h4>Chimera #977</h4>
                                                        <p>
                                                            One Collection
                                                            #3357537
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>---</td>
                                            <td>---</td>
                                            <td>1</td>
                                            <td>
                                                <span>NullAddress</span>
                                            </td>
                                            <td>
                                                <span>you</span>
                                            </td>
                                            <td className="align-end-td">
                                                3d ago
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-td">
                                                    <img
                                                        src="../../images/tag-table-icon.svg"
                                                        alt="tag-icon"
                                                    ></img>
                                                    <h5>Listed</h5>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="profile-td-block">
                                                    <img
                                                        src="../../images/profile-activity-img.png"
                                                        alt="search-icon"
                                                    ></img>
                                                    <div className="profile-td-details">
                                                        <h4>Chimera #977</h4>
                                                        <p>
                                                            One Collection
                                                            #3357537
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>7.7 PLS</td>
                                            <td>---</td>
                                            <td>1</td>
                                            <td>
                                                <span>NullAddress</span>
                                            </td>
                                            <td>
                                                <span>you</span>
                                            </td>
                                            <td className="align-end-td">
                                                3d ago
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="item-td">
                                                    <img
                                                        src="../../images/transfer-icon.svg"
                                                        alt="transfer-icon"
                                                    ></img>
                                                    <h5>Transferred</h5>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="profile-td-block">
                                                    <img
                                                        src="../../images/profile-activity-img.png"
                                                        alt="search-icon"
                                                    ></img>
                                                    <div className="profile-td-details">
                                                        <h4>Chimera #977</h4>
                                                        <p>
                                                            One Collection
                                                            #3357537
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>7.7 PLS</td>
                                            <td>---</td>
                                            <td>1</td>
                                            <td>
                                                <span>0x29469395e...a20b</span>
                                            </td>
                                            <td>
                                                <span>you</span>
                                            </td>
                                            <td className="align-end-td">
                                                3d ago
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>
                    </Tabs>
                </Container>
            </div>
        </CommonPageBlockPad>
    );
};

export default profilepage;
