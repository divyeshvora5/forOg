import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "@/styles/pages/main.style";
import { useBuyPointCollections } from "@/hooks/useFetchHooks";
import { CountParser, Toast } from "@/utils";
import { useRouter } from "next/router";
import { PATH_DASHBOARD } from "@/routes/paths";

const BuyPointsModal = ({ show = false, handleClose = () => {} }) => {
    const { data, loading } = useBuyPointCollections();
    const [selectedPoints, setSelectedPoints] = useState();
    const { push } = useRouter();

    const handleSelectPoints = (item) => {
        setSelectedPoints(item);
    };

    const handleBuyPoints = () => {
        if (!selectedPoints?.address) {
            return Toast.error("Please select Points");
        }
        push({
            pathname: PATH_DASHBOARD.explore.collection(
                selectedPoints?.address,
                selectedPoints?.chainId
            ),
        });
    };
    return (
        <>
            <Modal
                show={show}
                className="reward-modal"
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Body>
                    <div className="modal-body-reward">
                        <div className="fire-block">
                            <img
                                src={"../../images/noto_fire.png"}
                                alt="blog-img"
                            ></img>
                        </div>
                        <h2>Get Hyper Points</h2>

                        <div className="check-volume-block">
                            {!loading &&
                                data?.length > 0 &&
                                data.map((item, index) => (
                                    <div
                                        className={`check-volume-block-inner ${
                                            selectedPoints?.point ===
                                            item?.point
                                                ? "selected"
                                                : ""
                                        }`}
                                        key={index}
                                        onClick={() => handleSelectPoints(item)}
                                    >
                                        <p>
                                            {CountParser(
                                                item?.point || 0,
                                                _,
                                                0
                                            )}
                                        </p>
                                    </div>
                                ))}
                            {/* <div className="check-volume-block-inner">
                                <p>1K</p>
                            </div>
                            <div className="check-volume-block-inner">
                                <p>10K</p>
                            </div>
                            <div className="check-volume-block-inner">
                                <p>100K</p>
                            </div>
                            <div className="check-volume-block-inner">
                                <p>1M</p>
                            </div> */}
                        </div>
                        {/* <div className="check-volume-block check-volume-block-second">
                            <div className="check-volume-block-inner">
                                <p>2x</p>
                            </div>
                            <div className="check-volume-block-inner">
                                <p>5x</p>
                            </div>
                            <div className="check-volume-block-inner">
                                <p>10x</p>
                            </div>
                        </div> */}

                        <Button className="modal-btn" onClick={handleBuyPoints}>
                            Buy
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default BuyPointsModal;
