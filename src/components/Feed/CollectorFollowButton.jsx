import { globalState } from "@/redux/reducer/globalSlice";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

const CollectorFollowButton = ({ item, handleFollow = () => {} }) => {
    const {
        walletDetalis: { account },
    } = useSelector(globalState);
    const [follow, setFollow] = useState(false);
    const [loading, setLoading] = useState(false);
    const { recentFollowItem } = useSelector(globalState);

    useEffect(() => {
        if (item?.address === recentFollowItem?.id) {
            setFollow(recentFollowItem?.follow);
        }
    }, [recentFollowItem, item]);

    const handleClick = (address) => {
        setLoading(true);
        handleFollow(address);
    };

    return (
        <>
            {account !== item?.address && !follow && (
                <div className="follow-block-btn">
                    <button
                        onClick={() => handleClick(item.address)}
                        disabled={loading}
                    >
                        {loading ? (
                            <Spinner animation="border" size="sm" />
                        ) : (
                            "Follow"
                        )}
                    </button>
                </div>
            )}
        </>
    );
};

export default CollectorFollowButton;

