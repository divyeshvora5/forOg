import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { Like } from "..";
import { PATH_DASHBOARD } from "@/routes/paths";
import {  } from "@/hooks/useFetchHooks";
import { useLikeCollection } from "@/hooks/useHome";
import ImageLoader from "./ImageLoader";

const CollectionCard = ({ item }) => {
    const { handleLike } = useLikeCollection();

    const router = useRouter();
    const handleRouteChange = useCallback(() => {
        router.push({
            pathname: PATH_DASHBOARD.explore.collection(item?.address),
        });
    }, [item]);

    return (
        <div key={item?._id} className="common-product-block-inner">
            <div className="common-product-block-inner-width">
                <div className="top-block-product">
                    <h4>{item?.name}</h4>

                    <span onClick={() => handleLike(item?._id)}>
                        <Like item={item} />
                    </span>
                </div>
                <div className="product-details-profile full-width">
                    <div className="product-profile">
                        <img
                            src={
                                item?.creatorLogo ||
                                "/images/user.svg"
                            }
                            alt=""
                        ></img>
                        <div className="product-profile-details">
                            <p>Creator</p>
                            <h5>{item?.creatorName}</h5>
                        </div>
                    </div>
                </div>
                <div className="product-img-time">
                <ImageLoader src={item?.image} alt=""/>
                    {/* <img src={item?.image} alt="" /> */}
                </div>
                <div className="btn-product">
                    <button onClick={handleRouteChange}>
                        <span>Show Details</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CollectionCard;
