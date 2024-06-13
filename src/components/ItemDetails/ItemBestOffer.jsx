import { marketState } from "@/redux/reducer/marketSlice";
import { GetItemBestOffer } from "@/redux/services/itemServices";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ItemBestOffer = ({ show }) => {
    // GetItemBestOffer;
    const { itemDetails, contractLoading, currentAction } =
        useSelector(marketState);

    const [offer, setOffer] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!show || !itemDetails) return;
        (async () => {
            try {
                setLoading(true);
                const { data } = await GetItemBestOffer({
                    itemCollection: itemDetails.itemCollection,
                    tokenId: itemDetails.tokenId,
                    chainId: itemDetails.chainId,
                });
                setOffer(data?.data);
                console.log("dataOffer", data);
            } catch (err) {
                console.log("err", err);
            } finally {
                setLoading(false);
            }
        })();
    }, [itemDetails, show]);
    return (
        <>
            <p>Best Offer</p>
            <p>
                {loading
                    ? "fetching..."
                    : `${offer?.value || "-"} ${offer?.symbol || "-"}`}
            </p>
        </>
    );
};

export default ItemBestOffer;
