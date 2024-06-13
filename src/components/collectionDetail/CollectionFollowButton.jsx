import { itemLikeAction } from "@/redux/actions/globalAction";
import { globalState } from "@/redux/reducer/globalSlice";
import { Button } from "@/styles/pages/main.style";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CollectionFollowButton = ({ item, handleFollow = () => {}, children }) => {
    const {
        walletDetalis: { account },
    } = useSelector(globalState);
    const [follow, setFollow] = useState(item?.like);
    const { recentLikedItem } = useSelector(globalState);

    useEffect(() => {
        if (item?._id === recentLikedItem?.id) {
            setFollow(recentLikedItem?.like);
        }
    }, [recentLikedItem, item]);

    return (
        <>
            {account !== item?.address && (
                <Button
                    isBorderBtn={true}
                    className="button-following"
                    onClick={() => handleFollow(item?._id)}
                >
                    {children}<span>{follow ? "Following" : "Follow"}</span>
                </Button>
            )}
        </>
    );
};

export default CollectionFollowButton;
