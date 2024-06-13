import { useEditUser } from "@/hooks/useProfileHook";
import { globalState } from "@/redux/reducer/globalSlice";
import { Button, FormGroup, Input, Label } from "@/styles/pages/main.style";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AccountSettings = () => {
    const {
        formik,
        nameLoading,
        unique,
        handleFileChange,
        // handleCheckBox,
        handleRadioChange,
    } = useEditUser();
    const [show, setShow] = useState({
        Website: false,
        Discord: false,
        Instagram: false,
        Twitter: false,
        Telegram: false,
    });
    const handleToggle = (name) => {
        setShow({ ...show, [name]: !show[name] });
    };

    return (
        <div className="tab-block-right">
            <h2 className="title-text-right">Edit Profile</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="tab-block-right-account">
                    <div className="tab-block-right-account-left">
                        <h3>Account information</h3>
                        <FormGroup>
                            <Label>Full name</Label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                placeholder="Name"
                                disabled={formik.values.usePns === "Yes"}
                                // disabled={formik.values.usePns}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-danger">
                                    {formik.errors.name}
                                </div>
                            ) : null}
                        </FormGroup>

                        <FormGroup className="d-flex align-items-center">
                            <p>Use Domain Name:</p>
                            <div className="d-flex align-items-center mx-2">
                                <input
                                    type="radio"
                                    id="useENS"
                                    name="useDomain"
                                    value="ENS"
                                    onChange={handleRadioChange}
                                    checked={formik.values.useDomain === "ENS"}
                                />
                                <label htmlFor="useENS" className="ms-1">
                                    <a
                                        href="https://ens.domains/"
                                        target="_blank"
                                        className="ms-2"
                                    >
                                        <img
                                            src="/images/nameDomains/ens.svg"
                                            alt="ENS"
                                            height={"20px"}
                                        />
                                    </a>
                                </label>
                            </div>
                            <div className="d-flex align-items-center mx-2">
                                <input
                                    type="radio"
                                    id="usePNS"
                                    name="useDomain"
                                    value="PNS"
                                    onChange={handleRadioChange}
                                    checked={formik.values.useDomain === "PNS"}
                                />
                                <label htmlFor="usePNS" className="ms-1">
                                    <a
                                        href="https://www.pulse.domains/"
                                        target="_blank"
                                        className="ms-1"
                                    >
                                        <img
                                            src="/images/nameDomains/pns.png"
                                            alt="PNS"
                                            height={"24px"}
                                        />
                                    </a>
                                </label>
                            </div>
                            <div className="d-flex align-items-center mx-2">
                                <input
                                    type="radio"
                                    id="useBNS"
                                    name="useDomain"
                                    value="BNS"
                                    onChange={handleRadioChange}
                                    checked={formik.values.useDomain === "BNS"}
                                />
                                <label htmlFor="useBNS" className="ms-1">
                                    <a
                                        href="https://basens.domains/"
                                        target="_blank"
                                        className="ms-1"
                                    >
                                        <img
                                            src="/images/nameDomains/bns.png"
                                            alt="BNS"
                                            height={"22px"}
                                        />
                                    </a>
                                </label>
                            </div>
                        </FormGroup>

                        {/* <FormGroup className="d-flex">
                            <Label>Use Domain Name</Label>
                            <input
                                type="checkbox"
                                name="usePns"
                                onChange={handleCheckBox}
                                checked={formik.values.usePns === "Yes"}
                            />
                            <div className="d-flex flex-no-wrap align-items-center mx-2">
                                <p>Use</p>
                                <a
                                    href="https://ens.domains/"
                                    target="_blank"
                                    className="ms-2"
                                >
                                    <img
                                        src="/images/nameDomains/ens.svg"
                                        alt="ENS"
                                        height={"20px"}
                                    />
                                </a>
                                <p className="ms-1">/</p>
                                <a
                                    href="https://www.pulse.domains/"
                                    target="_blank"
                                    className="ms-1"
                                >
                                    <img
                                        src="/images/nameDomains/pns.png"
                                        alt="PNS"
                                        height={"24px"}
                                    />
                                </a>
                                <p className="ms-1">/</p>
                                <a
                                    href="https://basens.domains/"
                                    target="_blank"
                                    className="ms-1"
                                >
                                    <img
                                        src="/images/nameDomains/bns.png"
                                        alt="BNS"
                                        height={"22px"}
                                    />
                                </a>
                                <p className="ms-2">name</p>
                            </div>
                        </FormGroup> */}
                        {/* <FormGroup>
                            <Label>Email </Label>
                            <Input
                                type="text"
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                placeholder="exampleEmail@gmail.com"
                            />
                        </FormGroup>
                        {formik.touched.email && formik.errors.email ? (
                            <div className="error">{formik.errors.email}</div>
                        ) : null}
                        <FormGroup>
                            <Label>Bio </Label>
                            <Input
                                type="text"
                                id="bio"
                                name="bio"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.bio}
                                placeholder="Best NFT seller and designer"
                            />
                        </FormGroup>
                        {formik.touched.bio && formik.errors.bio ? (
                            <div className="error">{formik.errors.bio}</div>
                        ) : null} */}
                        <FormGroup className="file-input">
                            <Label>Profile Image</Label>
                            <Input
                                type="file"
                                className="file-input__input"
                                name="profilePic"
                                onChange={handleFileChange}
                                id="input-file-1"
                                accept="image/*"
                            />
                            <label class="file-input__label" for="input-file-1">
                                <img src="/images/plus-icon.svg"></img>
                            </label>
                        </FormGroup>
                        <FormGroup className="file-input">
                            <Label>Banner Image</Label>
                            <Input
                                type="file"
                                name="banners"
                                onChange={handleFileChange}
                                id="input-file-2"
                                className="file-input__input"
                                accept="image/*"
                            />
                            <label class="file-input__label" for="input-file-2">
                                <img src="/images/plus-icon.svg"></img>
                            </label>
                        </FormGroup>
                    </div>
                    <div className="tab-block-right-account-right">
                        <h3>Add Social Media</h3>
                        <div className="tab-block-right-account-social">
                            <div className="social-block-inner">
                                <div className="social-block">
                                    <div className="icon-svg">
                                        <svg
                                            width="25"
                                            height="25"
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M2.31779 11.2949H6.72904C6.9766 8.24396 7.99773 5.31532 9.68331 2.78174C5.75597 3.80434 2.77389 7.16899 2.31779 11.2949ZM12.1945 3.06989C10.3509 5.44507 9.22299 8.29918 8.94563 11.2949H15.4433C15.166 8.29918 14.0381 5.44507 12.1945 3.06989ZM15.4433 13.5033C15.166 16.4989 14.0381 19.3532 12.1945 21.7283C10.3509 19.3532 9.22299 16.4989 8.94563 13.5033H15.4433ZM6.72904 13.5033H2.31779C2.77389 17.6292 5.75597 20.9938 9.68331 22.0164C7.99773 19.4828 6.9766 16.5543 6.72904 13.5033ZM14.7057 22.0164C16.3912 19.4828 17.4124 16.5543 17.6599 13.5033H22.0712C21.6151 17.6292 18.6331 20.9938 14.7057 22.0164ZM22.0712 11.2949H17.6599C17.4124 8.24396 16.3912 5.31532 14.7057 2.78174C18.6331 3.80434 21.6151 7.16899 22.0712 11.2949ZM0.0488281 12.3991C0.0488281 5.69122 5.48663 0.253418 12.1945 0.253418C18.9024 0.253418 24.3402 5.69122 24.3402 12.3991C24.3402 19.107 18.9024 24.5448 12.1945 24.5448C5.48663 24.5448 0.0488281 19.107 0.0488281 12.3991Z"
                                                fill="#565660"
                                            />
                                        </svg>
                                    </div>
                                    <h4>Website</h4>
                                    <button
                                        type="button"
                                        className="btn"
                                        onClick={() => handleToggle("Website")}
                                    >
                                        <svg
                                            width="20"
                                            height="21"
                                            viewBox="0 0 20 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.5 14.775V17.9H5.625L14.8417 8.68332L11.7167 5.55832L2.5 14.775ZM17.2583 6.26665C17.3356 6.18956 17.3969 6.09798 17.4387 5.99717C17.4805 5.89636 17.502 5.78829 17.502 5.67915C17.502 5.57001 17.4805 5.46194 17.4387 5.36113C17.3969 5.26032 17.3356 5.16875 17.2583 5.09165L15.3083 3.14165C15.2312 3.0644 15.1397 3.00311 15.0389 2.96129C14.938 2.91947 14.83 2.89795 14.7208 2.89795C14.6117 2.89795 14.5036 2.91947 14.4028 2.96129C14.302 3.00311 14.2104 3.0644 14.1333 3.14165L12.6083 4.66665L15.7333 7.79165L17.2583 6.26665Z"
                                                fill="#C2C2C2"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                {show.Website && (
                                    <div className="edit-input-block">
                                        <FormGroup>
                                            <Input
                                                type="text"
                                                id="other"
                                                name="other"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.other}
                                                placeholder="https://example.com"
                                            />
                                        </FormGroup>
                                        {/* <Button>Update</Button> */}
                                    </div>
                                )}
                            </div>
                            <div className="social-block-inner">
                                <div className="social-block">
                                    <div className="icon-svg">
                                        <svg
                                            width="33"
                                            height="33"
                                            viewBox="0 0 33 33"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M25.5467 7.1932C23.8264 6.36474 21.9818 5.75437 20.0529 5.40479C20.0178 5.39804 19.9827 5.41489 19.9647 5.44862C19.7274 5.8915 19.4645 6.46927 19.2806 6.9234C17.206 6.59742 15.1422 6.59742 13.1101 6.9234C12.9261 6.45918 12.6537 5.8915 12.4154 5.44862C12.3973 5.41602 12.3622 5.39916 12.3271 5.40479C10.3994 5.75325 8.55466 6.36362 6.83332 7.1932C6.81842 7.19994 6.80565 7.2112 6.79716 7.2258C3.29809 12.7124 2.33955 18.0642 2.80978 23.3496C2.81191 23.3755 2.82573 23.4002 2.84489 23.416C5.15348 25.1954 7.38974 26.2757 9.58447 26.9917C9.6196 27.0029 9.65682 26.9894 9.67917 26.959C10.1983 26.2149 10.6611 25.4303 11.0579 24.6052C11.0813 24.5569 11.059 24.4995 11.0111 24.4805C10.2771 24.1882 9.57809 23.8319 8.90572 23.4272C8.85255 23.3947 8.84828 23.3148 8.89722 23.2766C9.0387 23.1653 9.18022 23.0495 9.31534 22.9326C9.33978 22.9113 9.37384 22.9067 9.40257 22.9202C13.8198 25.0369 18.6018 25.0369 22.9668 22.9202C22.9955 22.9056 23.0297 22.9101 23.0552 22.9315C23.1903 23.0484 23.3317 23.1653 23.4744 23.2766C23.5232 23.3148 23.5201 23.3947 23.4669 23.4272C22.7945 23.8398 22.0956 24.1882 21.3605 24.4793C21.3126 24.4985 21.2912 24.5569 21.3147 24.6052C21.72 25.4292 22.1827 26.2138 22.6923 26.958C22.7136 26.9894 22.752 27.0029 22.7871 26.9917C24.9924 26.2757 27.2287 25.1954 29.5373 23.416C29.5575 23.4002 29.5703 23.3766 29.5724 23.3508C30.1352 17.2402 28.6298 11.9323 25.5818 7.22692C25.5743 7.2112 25.5617 7.19994 25.5467 7.1932ZM11.7175 20.1314C10.3877 20.1314 9.29191 18.8499 9.29191 17.2762C9.29191 15.7024 10.3664 14.4211 11.7175 14.4211C13.0793 14.4211 14.1644 15.7138 14.1431 17.2762C14.1431 18.8499 13.0686 20.1314 11.7175 20.1314ZM20.686 20.1314C19.356 20.1314 18.2604 18.8499 18.2604 17.2762C18.2604 15.7024 19.3348 14.4211 20.686 14.4211C22.0476 14.4211 23.1328 15.7138 23.1116 17.2762C23.1116 18.8499 22.0476 20.1314 20.686 20.1314Z"
                                                fill="#565660"
                                            />
                                        </svg>
                                    </div>
                                    <h4>Discord</h4>
                                    <button
                                        type="button"
                                        className="btn"
                                        onClick={() => handleToggle("Discord")}
                                    >
                                        <svg
                                            width="20"
                                            height="21"
                                            viewBox="0 0 20 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.5 14.775V17.9H5.625L14.8417 8.68332L11.7167 5.55832L2.5 14.775ZM17.2583 6.26665C17.3356 6.18956 17.3969 6.09798 17.4387 5.99717C17.4805 5.89636 17.502 5.78829 17.502 5.67915C17.502 5.57001 17.4805 5.46194 17.4387 5.36113C17.3969 5.26032 17.3356 5.16875 17.2583 5.09165L15.3083 3.14165C15.2312 3.0644 15.1397 3.00311 15.0389 2.96129C14.938 2.91947 14.83 2.89795 14.7208 2.89795C14.6117 2.89795 14.5036 2.91947 14.4028 2.96129C14.302 3.00311 14.2104 3.0644 14.1333 3.14165L12.6083 4.66665L15.7333 7.79165L17.2583 6.26665Z"
                                                fill="#C2C2C2"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                {show.Discord && (
                                    <div className="edit-input-block">
                                        <FormGroup>
                                            <Input
                                                type="text"
                                                id="discord"
                                                name="discord"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.discord}
                                                placeholder="https://discordapp.com/users/example"
                                            />
                                        </FormGroup>
                                        {/* <Button>Update</Button> */}
                                    </div>
                                )}
                            </div>
                            <div className="social-block-inner">
                                <div className="social-block">
                                    <div className="icon-svg">
                                        <svg
                                            width="33"
                                            height="34"
                                            viewBox="0 0 33 34"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16.192 10.7598C12.7453 10.7598 9.95312 13.5533 9.95312 16.9986C9.95312 20.4453 12.7453 23.2388 16.192 23.2388C19.636 23.2388 22.4308 20.4453 22.4308 16.9986C22.4308 13.5533 19.636 10.7598 16.192 10.7598ZM16.192 21.0526C13.9532 21.0526 12.138 19.2375 12.138 17C12.138 14.7611 13.9532 12.9473 16.192 12.9473C18.4309 12.9473 20.2433 14.7611 20.2433 17C20.2433 19.2375 18.4309 21.0526 16.192 21.0526Z"
                                                fill="#565660"
                                            />
                                            <path
                                                d="M22.6801 11.985C23.4835 11.985 24.1349 11.3337 24.1349 10.5302C24.1349 9.72677 23.4835 9.07544 22.6801 9.07544C21.8766 9.07544 21.2253 9.72677 21.2253 10.5302C21.2253 11.3337 21.8766 11.985 22.6801 11.985Z"
                                                fill="#565660"
                                            />
                                            <path
                                                d="M27.7085 9.05049C27.0756 7.41892 25.7868 6.12878 24.1553 5.49856C23.2119 5.14364 22.2146 4.95335 21.2052 4.93176C19.9056 4.87508 19.494 4.85889 16.1985 4.85889C12.9029 4.85889 12.4805 4.85889 11.1917 4.93176C10.185 4.952 9.18767 5.14229 8.24435 5.49856C6.61144 6.12878 5.32265 7.41892 4.69107 9.05049C4.33615 9.99516 4.14586 10.9911 4.12562 12.0005C4.06759 13.2988 4.05005 13.7104 4.05005 17.0073C4.05005 20.3028 4.05005 20.7225 4.12562 22.014C4.14586 23.0234 4.33615 24.0194 4.69107 24.9654C5.32399 26.5956 6.61279 27.8858 8.2457 28.5173C9.18497 28.8844 10.1823 29.0922 11.1944 29.1246C12.494 29.1813 12.9056 29.1988 16.2012 29.1988C19.4967 29.1988 19.9191 29.1988 21.2079 29.1246C22.216 29.1044 23.2133 28.9127 24.1579 28.5592C25.7895 27.9262 27.0783 26.6375 27.7112 25.0059C28.0662 24.0612 28.2564 23.0653 28.2767 22.0558C28.3347 20.7576 28.3523 20.346 28.3523 17.0491C28.3523 13.7522 28.3523 13.3339 28.2767 12.0424C28.2591 11.0194 28.0702 10.006 27.7085 9.05049ZM26.0648 21.9141C26.0554 22.6915 25.915 23.462 25.6451 24.1921C25.2335 25.2542 24.3955 26.0936 23.3347 26.5012C22.6127 26.7697 21.8516 26.9101 21.081 26.9208C19.799 26.9802 19.4373 26.9951 16.1499 26.9951C12.8597 26.9951 12.5237 26.9951 11.2173 26.9208C10.4495 26.9114 9.68564 26.7697 8.965 26.5012C7.90023 26.0949 7.05678 25.2555 6.64517 24.1921C6.38067 23.4715 6.23762 22.709 6.22547 21.9398C6.16744 20.6577 6.15395 20.2961 6.15395 17.0086C6.15395 13.7198 6.15395 13.3838 6.22547 12.0761C6.23492 11.2988 6.37527 10.5296 6.64517 9.79948C7.05678 8.73471 7.90023 7.89665 8.965 7.4891C9.68564 7.22189 10.4495 7.08019 11.2173 7.0694C12.5007 7.01137 12.8611 6.99518 16.1499 6.99518C19.4387 6.99518 19.7761 6.99518 21.081 7.0694C21.8516 7.07885 22.6127 7.22054 23.3347 7.4891C24.3955 7.898 25.2335 8.7374 25.6451 9.79948C25.9096 10.5201 26.0527 11.2826 26.0648 12.0518C26.1229 13.3352 26.1377 13.6955 26.1377 16.9843C26.1377 20.2718 26.1377 20.6253 26.0797 21.9155L26.0648 21.9141Z"
                                                fill="#565660"
                                            />
                                        </svg>
                                    </div>
                                    <h4>Instagram</h4>
                                    <button
                                        type="button"
                                        className="btn"
                                        onClick={() =>
                                            handleToggle("Instagram")
                                        }
                                    >
                                        <svg
                                            width="20"
                                            height="21"
                                            viewBox="0 0 20 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.5 14.775V17.9H5.625L14.8417 8.68332L11.7167 5.55832L2.5 14.775ZM17.2583 6.26665C17.3356 6.18956 17.3969 6.09798 17.4387 5.99717C17.4805 5.89636 17.502 5.78829 17.502 5.67915C17.502 5.57001 17.4805 5.46194 17.4387 5.36113C17.3969 5.26032 17.3356 5.16875 17.2583 5.09165L15.3083 3.14165C15.2312 3.0644 15.1397 3.00311 15.0389 2.96129C14.938 2.91947 14.83 2.89795 14.7208 2.89795C14.6117 2.89795 14.5036 2.91947 14.4028 2.96129C14.302 3.00311 14.2104 3.0644 14.1333 3.14165L12.6083 4.66665L15.7333 7.79165L17.2583 6.26665Z"
                                                fill="#C2C2C2"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                {show.Instagram && (
                                    <div className="edit-input-block">
                                        <FormGroup>
                                            <Input
                                                type="text"
                                                id="instagram"
                                                name="instagram"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.instagram}
                                                placeholder="https://www.instagram.com/example/"
                                            />
                                        </FormGroup>
                                        {/* <Button>Update</Button> */}
                                    </div>
                                )}
                            </div>
                            <div className="social-block-inner">
                                <div className="social-block">
                                    <div className="icon-svg">
                                        <svg
                                            width="28"
                                            height="28"
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g
                                                clip-path="url(#clip0_552_17304)"
                                                filter="url(#filter0_i_552_17304)"
                                            >
                                                <path
                                                    d="M27.3436 5.23173C26.4552 5.61442 25.5211 5.88091 24.5646 6.02461C25.0118 5.94788 25.6698 5.14221 25.9318 4.8161C26.3297 4.3242 26.633 3.76266 26.8262 3.16C26.8262 3.11525 26.8709 3.0513 26.8262 3.01933C26.8036 3.00702 26.7784 3.00057 26.7527 3.00057C26.727 3.00057 26.7018 3.00702 26.6792 3.01933C25.6406 3.58229 24.5352 4.01196 23.3891 4.29817C23.3492 4.31039 23.3067 4.31148 23.2662 4.30134C23.2256 4.2912 23.1886 4.27021 23.1591 4.24062C23.0699 4.13431 22.9739 4.03392 22.8717 3.9401C22.4042 3.52092 21.8739 3.17785 21.3001 2.92342C20.5255 2.60536 19.6888 2.46761 18.8533 2.52058C18.0425 2.57183 17.251 2.78948 16.5279 3.16C15.8158 3.55064 15.1899 4.08133 14.688 4.72019C14.1599 5.37774 13.7787 6.14084 13.57 6.95816C13.3978 7.7356 13.3783 8.53912 13.5125 9.32401C13.5125 9.45829 13.5125 9.47748 13.3975 9.45829C8.84247 8.7869 5.10518 7.16917 2.05147 3.69712C1.91731 3.54366 1.84703 3.54366 1.73843 3.69712C0.409615 5.71769 1.05486 8.91479 2.71587 10.4942C2.93947 10.7052 3.16946 10.9098 3.41222 11.1016C2.65066 11.0475 1.90769 10.8409 1.22735 10.4942C1.09958 10.411 1.0293 10.4558 1.02291 10.6092C1.0048 10.822 1.0048 11.0359 1.02291 11.2487C1.15621 12.2683 1.55768 13.2342 2.18626 14.0476C2.81484 14.861 3.64798 15.4927 4.60049 15.8781C4.83268 15.9776 5.07463 16.0526 5.32239 16.1019C4.61737 16.2408 3.89428 16.2624 3.18223 16.1658C3.02891 16.1338 2.97141 16.217 3.02891 16.364C3.96802 18.9217 6.00596 19.7018 7.50087 20.1366C7.70531 20.1686 7.90974 20.1686 8.13973 20.2197C8.13973 20.2197 8.13973 20.2197 8.1014 20.2581C7.66059 21.0638 5.87819 21.6073 5.06046 21.8886C3.56789 22.4252 1.97654 22.6303 0.396838 22.4897C0.147686 22.4513 0.0901893 22.4577 0.026304 22.4897C-0.0375812 22.5216 0.026304 22.592 0.0965778 22.6559C0.416004 22.8669 0.73543 23.0524 1.06763 23.2314C2.05661 23.7713 3.10215 24.2002 4.18523 24.5102C9.79435 26.0576 16.1062 24.9195 20.3162 20.7313C23.6255 17.4446 24.7882 12.9112 24.7882 8.37128C24.7882 8.19863 24.999 8.09633 25.1204 8.00681C25.9576 7.35389 26.6958 6.58281 27.3117 5.71769C27.4184 5.58873 27.473 5.42453 27.465 5.2573C27.465 5.16139 27.465 5.18057 27.3436 5.23173Z"
                                                    fill="#565660"
                                                />
                                            </g>
                                            <defs>
                                                <filter
                                                    id="filter0_i_552_17304"
                                                    x="0"
                                                    y="0.0671387"
                                                    width="27.4658"
                                                    height="27.771"
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
                                                    <feOffset dy="0.305175" />
                                                    <feGaussianBlur stdDeviation="0.762938" />
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
                                                        result="effect1_innerShadow_552_17304"
                                                    />
                                                </filter>
                                                <clipPath id="clip0_552_17304">
                                                    <rect
                                                        width="27.4658"
                                                        height="27.4658"
                                                        fill="white"
                                                        transform="translate(0 0.0671387)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h4>Twitter</h4>
                                    <button
                                        type="button"
                                        className="btn"
                                        onClick={() => handleToggle("Twitter")}
                                    >
                                        <svg
                                            width="20"
                                            height="21"
                                            viewBox="0 0 20 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.5 14.775V17.9H5.625L14.8417 8.68332L11.7167 5.55832L2.5 14.775ZM17.2583 6.26665C17.3356 6.18956 17.3969 6.09798 17.4387 5.99717C17.4805 5.89636 17.502 5.78829 17.502 5.67915C17.502 5.57001 17.4805 5.46194 17.4387 5.36113C17.3969 5.26032 17.3356 5.16875 17.2583 5.09165L15.3083 3.14165C15.2312 3.0644 15.1397 3.00311 15.0389 2.96129C14.938 2.91947 14.83 2.89795 14.7208 2.89795C14.6117 2.89795 14.5036 2.91947 14.4028 2.96129C14.302 3.00311 14.2104 3.0644 14.1333 3.14165L12.6083 4.66665L15.7333 7.79165L17.2583 6.26665Z"
                                                fill="#C2C2C2"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                {show.Twitter && (
                                    <div className="edit-input-block">
                                        <FormGroup>
                                            <Input
                                                type="text"
                                                id="twitter"
                                                name="twitter"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.twitter}
                                                placeholder="https://twitter.com/example"
                                            />
                                        </FormGroup>
                                        {/* <Button>Update</Button> */}
                                    </div>
                                )}
                            </div>
                            <div className="social-block-inner">
                                <div className="social-block">
                                    <div className="icon-svg">
                                        <svg
                                            width="28"
                                            height="29"
                                            viewBox="0 0 28 29"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g filter="url(#filter0_i_552_17308)">
                                                <path
                                                    d="M3.32881 13.42C3.32881 13.42 14.1266 8.63137 17.8714 6.94515C19.307 6.27072 24.1753 4.11236 24.1753 4.11236C24.1753 4.11236 26.4222 3.16816 26.235 5.46132C26.1725 6.40561 25.6732 9.71045 25.1739 13.2852C24.4249 18.3437 23.6135 23.8743 23.6135 23.8743C23.6135 23.8743 23.4887 25.4256 22.4277 25.6954C21.3667 25.9652 19.619 24.7512 19.307 24.4813C19.0572 24.2791 14.6258 21.2439 13.0031 19.76C12.5662 19.3554 12.0669 18.5461 13.0654 17.6018C15.3124 15.376 17.9962 12.6107 19.619 10.8571C20.368 10.0477 21.1169 8.15922 17.9962 10.4524C13.5648 13.7573 9.19579 16.8599 9.19579 16.8599C9.19579 16.8599 8.19713 17.5343 6.32471 16.9273C4.45221 16.3203 2.2677 15.5109 2.2677 15.5109C2.2677 15.5109 0.769835 14.4992 3.32881 13.42Z"
                                                    fill="#565660"
                                                />
                                            </g>
                                            <defs>
                                                <filter
                                                    id="filter0_i_552_17308"
                                                    x="0"
                                                    y="0.867065"
                                                    width="27.4658"
                                                    height="27.771"
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
                                                    <feOffset dy="0.305175" />
                                                    <feGaussianBlur stdDeviation="0.762938" />
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
                                                        result="effect1_innerShadow_552_17308"
                                                    />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h4>Telegram</h4>
                                    <button
                                        type="button"
                                        className="btn"
                                        onClick={() => handleToggle("Telegram")}
                                    >
                                        <svg
                                            width="20"
                                            height="21"
                                            viewBox="0 0 20 21"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.5 14.775V17.9H5.625L14.8417 8.68332L11.7167 5.55832L2.5 14.775ZM17.2583 6.26665C17.3356 6.18956 17.3969 6.09798 17.4387 5.99717C17.4805 5.89636 17.502 5.78829 17.502 5.67915C17.502 5.57001 17.4805 5.46194 17.4387 5.36113C17.3969 5.26032 17.3356 5.16875 17.2583 5.09165L15.3083 3.14165C15.2312 3.0644 15.1397 3.00311 15.0389 2.96129C14.938 2.91947 14.83 2.89795 14.7208 2.89795C14.6117 2.89795 14.5036 2.91947 14.4028 2.96129C14.302 3.00311 14.2104 3.0644 14.1333 3.14165L12.6083 4.66665L15.7333 7.79165L17.2583 6.26665Z"
                                                fill="#C2C2C2"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                {show.Telegram && (
                                    <div className="edit-input-block">
                                        <FormGroup>
                                            <Input
                                                type="text"
                                                id="telegram"
                                                name="telegram"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.telegram}
                                                placeholder="https://t.me/example"
                                            />
                                        </FormGroup>
                                        {/* <Button>Update</Button> */}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="load-more-btn full-width-block">
                    <Button
                        type="submit"
                        disabled={
                            nameLoading || (!unique && formik.touched.name)
                        }
                    >
                        Update Profile
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AccountSettings;
