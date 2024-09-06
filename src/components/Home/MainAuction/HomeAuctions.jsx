import MainAuction from "./MainAuction";
import LiveAuctions from "./LiveAuctions";
import { useHomeAuction } from "@/hooks/useHome";
import RecentlySoldItems from "../RecentlySoldItems/RecentlySoldItems";
import TrendingCollections from "../TrendingCollections/TrendingCollections";

const HomeAuctions = () => {
    const { auctions, loading, fetchAuctions } = useHomeAuction();

    return (
        <>
            <MainAuction
                items={auctions?.slice(0, 3)}
                loading={loading}
                fetchAuctions={fetchAuctions}
            />
            <TrendingCollections />
            <RecentlySoldItems />
            <LiveAuctions
                items={auctions}
                loading={loading}
                fetchAuctions={fetchAuctions}
            />
        </>
    );
};

export default HomeAuctions;
