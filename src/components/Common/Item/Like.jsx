import { globalState } from "@/redux/reducer/globalSlice";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

const Like = ({ item, count = false }) => {
    const [liked, setLiked] = useState(item?.liked);
    const [likeCount, setLikeCount] = useState(item?.likeCount);
    const { recentLikedItem } = useSelector(globalState);

    useEffect(() => {
        if (!item) return;
        if (item?._id === recentLikedItem?.id) {
             setLiked(recentLikedItem?.like);
             setLikeCount(recentLikedItem?.likeCount)
        }
        // setLiked(item?.liked);
    }, [recentLikedItem, item]);

    return (
        <>
            {count ? (
                <svg
                    width="23"
                    height="20"
                    viewBox="0 0 23 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer"
                >
                    <path
                        d="M11.5547 18.25C11.5547 18.25 1.80469 13 1.80469 6.8125C1.80469 5.46984 2.33806 4.18217 3.28746 3.23277C4.23686 2.28337 5.52453 1.75 6.86719 1.75C8.985 1.75 10.7991 2.90406 11.5547 4.75C12.3103 2.90406 14.1244 1.75 16.2422 1.75C17.5848 1.75 18.8725 2.28337 19.8219 3.23277C20.7713 4.18217 21.3047 5.46984 21.3047 6.8125C21.3047 13 11.5547 18.25 11.5547 18.25Z"
                        stroke={liked ? "#FB4EF1" : "#191820"}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill={liked ? "#FB4EF1" : ""}
                    />
                </svg>
            ) : (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2.78922 8.75842L6.36783 12.5299C7.25506 13.4649 8.74493 13.4649 9.63217 12.5299L13.2108 8.75842C14.5964 7.29812 14.5964 4.93052 13.2108 3.47022C11.8252 2.00993 9.57862 2.00993 8.19299 3.47022C8.08808 3.58078 7.91192 3.58078 7.80701 3.47022C6.42138 2.00993 4.17484 2.00993 2.78922 3.47022C1.40359 4.93052 1.40359 7.29812 2.78922 8.75842Z"
                        fill={liked ? "#FB4EF1" : "#B9B8BB"}
                    />
                </svg>
            )}

            {count ? <h4>{likeCount || 0}</h4> : ""}
        </>
    );
};

export default Like;
