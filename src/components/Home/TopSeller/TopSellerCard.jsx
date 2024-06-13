import { PATH_DASHBOARD } from "@/routes/paths";
import { fixDecimal } from "@/utils";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

const TopSellerCard = ({ user, index }) => {
    const router = useRouter();
    const userRouteHandler = useCallback(() => {
        // user-collections
        router.push(PATH_DASHBOARD.user.detail(user?.address));
    }, [user]);
    return (
        <div className="top-seller-block-inner">
            <div
                className="top-seller-collection-profile-flex pointer hover:shadow-xl hover:translate-y-[-6px] transition-all ease-in"
                onClick={userRouteHandler}
            >
                <div className="top-seller-collection-profile">
                    <div className="top-seller-collection-profile-img">
                        <img
                            src={
                                user?.userLogo ||
                                "/images/user.svg"
                            }
                            alt={user?.userName}
                        />
                        {/* <div className="verify-icon-block">
							<img
								src={"../../images/verify-icon-check.svg"}
								alt="verify-img"
							></img>
						</div> */}
                    </div>
                    <div className="top-seller-collection-profile-content">
                        <h4>{user?.userName || "unKnown"}</h4>
                        <div
                            className="d-flex justify-content-between w-full"
                            style={{ width: "200px" }}
                        >
                            <p>
                                <span className="text-black-50">Buy: </span>
                                {fixDecimal(user?.buyNumber || 0, 2)}
                            </p>
                            <p>
                                <span className="text-black-50">Sell: </span>
                                {fixDecimal(user?.sellAmount || 0, 2)}
                            </p>
                            <p>
                                <span className="text-black-50">Volume: </span>
                                {fixDecimal(user?.tradingVolume || 0, 2)}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="top-seller-item-block">
                    <div className="add-check-icon">
                        <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 14 14"
                            width="14"
                            height="14"
                        >
                            <path
                                id="Layer"
                                class="s0"
                                d="m7 0q-0.2 0-0.4 0.1-0.2 0.1-0.3 0.2-0.1 0.1-0.2 0.3-0.1 0.2-0.1 0.4v5h-5q-0.4 0-0.7 0.3-0.3 0.3-0.3 0.7 0 0.4 0.3 0.7 0.3 0.3 0.7 0.3h5v5q0 0.4 0.3 0.7 0.3 0.3 0.7 0.3 0.4 0 0.7-0.3 0.3-0.3 0.3-0.7v-5h5q0.4 0 0.7-0.3 0.3-0.3 0.3-0.7 0-0.4-0.3-0.7-0.3-0.3-0.7-0.3h-5v-5q0-0.2-0.1-0.4-0.1-0.2-0.2-0.3-0.1-0.1-0.3-0.2-0.2-0.1-0.4-0.1z"
                            />
                        </svg>
                        <img
                            src={"../../images/check-icon-1.svg"}
                            alt="check-img"
                        ></img>
                    </div>
                    <div className="number-block-list">
                        <h4>
                            # <span>{index + 1}</span>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSellerCard;
