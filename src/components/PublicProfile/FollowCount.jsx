import { globalState } from "@/redux/reducer/globalSlice";
import { CountParser } from "@/utils";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FollowCount = ({ user }) => {
    const [count, setCount] = useState(user?.followCount);
    const { recentFollowItem } = useSelector(globalState);

    useEffect(() => {
        if (user?.address === recentFollowItem?.id) {
            setCount(recentFollowItem?.followCount);
        }
    }, [recentFollowItem, user]);

    return <>{CountParser(count || 0, 1)}</>;
};

export default FollowCount;
