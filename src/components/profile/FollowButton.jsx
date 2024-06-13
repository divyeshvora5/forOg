import { globalState } from "@/redux/reducer/globalSlice";
import { Button } from "@/styles/pages/main.style";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FollowButton = ({ item, handleFollow = () => {}, children }) => {
    const {
        walletDetalis: { account },
    } = useSelector(globalState);
    const [follow, setFollow] = useState(item?.follow);
    const { recentFollowItem } = useSelector(globalState);

    useEffect(() => {
        if (item?.address === recentFollowItem?.id) {
            setFollow(recentFollowItem?.follow);
        }
    }, [recentFollowItem, item]);

    return (
        <>
            {account !== item?.address && (
                <Button
                    isBorderBtn={true}
                    className="button-following"
                    onClick={() => handleFollow(item.address)}
                >
                    {children}<span>{follow ? "Following" : "Follow"}</span>
                </Button>
            )}
        </>
    );
};

export default FollowButton;
