import { globalState } from "@/redux/reducer/globalSlice";
import { CountParser } from "@/utils";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const LikeCount = ({ item }) => {
    const [count, setCount] = useState(item?.likeCount);
    const { recentLikedItem } = useSelector(globalState);

    useEffect(() => {
        if (item?._id === recentLikedItem?.id) {
            setCount(recentLikedItem?.likeCount);
        }
    }, [recentLikedItem, item]);

    return <>{CountParser(count || 0, 1)}</>;
};

export default LikeCount;
