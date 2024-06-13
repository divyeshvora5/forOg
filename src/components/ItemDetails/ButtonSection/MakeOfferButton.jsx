import { Button } from "@/styles/pages/main.style";
import { useState } from "react";
import OfferModel from "../Model/OfferModel";
import { Toast, validateNetwork } from "@/utils";
import { ACTION_TYPE, marketState } from "@/redux/reducer/marketSlice";
import { useSelector } from "react-redux";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";
import { Spinner } from "react-bootstrap";

const MakeOfferButton = () => {
    const { chainId, account } = useActiveWeb3React();
    const { itemDetails, contractLoading, currentAction } =
        useSelector(marketState);
    const [show, setShow] = useState(false);
    const handleShow = () => {
        const validate = validateNetwork(
            account,
            chainId,
            itemDetails?.chainId
        );
        if (!validate.status) {
            return Toast.error(validate.message);
        }
        setShow(true);
    };
    const handleClose = () => setShow(false);
    return (
        <>
            {!(
                itemDetails?.owners?.length === 1 &&
                itemDetails?.owners[0]?.address === account?.toLowerCase()
            ) && (
                <div className="button-block-tabs-inner">
                    <OfferModel show={show} handleClose={handleClose} />
                    <Button disabled={contractLoading} onClick={handleShow}>
                        {contractLoading &&
                        currentAction === ACTION_TYPE.MAKEOFFER ? (
                            <Spinner animation="border" size="sm" />
                        ) : (
                            "Make Offer"
                        )}
                    </Button>
                </div>
            )}
        </>
    );
};

export default MakeOfferButton;
