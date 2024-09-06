import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "@/styles/pages/main.style";
import { useVoteCollection } from "@/hooks/useHome";
import { useSelector } from "react-redux";
import { globalState } from "@/redux/reducer/globalSlice";
import { CountParser } from "@/utils";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";

const BoostCollectionModal = ({ show = false, id, handleClose = () => {} }) => {
    const {
        POINTS,
        selectedPoints,
        handleVote,
        handleSelectPoints,
        handleInputChange,
    } = useVoteCollection();
    const { userDetails } = useSelector(globalState);
    const handleBoost = () => {
        handleVote(id);
        handleClose();
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
                        <h2>Boost Collection</h2>
                        <div className="total-block-inner">
                            <h4>Total</h4>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.556 6.36406C5.46694 7.31406 5.40444 8.99531 5.96538 9.71094C5.96538 9.71094 5.70132 7.86406 8.0685 5.54687C9.02163 4.61406 9.24194 3.34531 8.90913 2.39375C8.72007 1.85469 8.37475 1.40937 8.07475 1.09844C7.89975 0.915625 8.03413 0.614062 8.28882 0.625C9.82944 0.69375 12.3263 1.12187 13.3873 3.78437C13.8529 4.95312 13.8873 6.16094 13.6654 7.38906C13.5248 8.17344 13.0248 9.91719 14.1654 10.1312C14.9794 10.2844 15.3732 9.6375 15.5498 9.17187C15.6232 8.97812 15.8779 8.92969 16.0154 9.08437C17.3904 10.6484 17.5076 12.4906 17.2232 14.0766C16.6732 17.1422 13.5685 19.3734 10.4841 19.3734C6.631 19.3734 3.56381 17.1687 2.7685 13.1781C2.44819 11.5672 2.61069 8.37969 5.09507 6.12969C5.27944 5.96094 5.581 6.11094 5.556 6.36406Z"
                                    fill="url(#paint0_radial_11721_14403)"
                                />
                                <path
                                    d="M11.8923 12.0969C10.472 10.2688 11.1079 8.18281 11.4564 7.35156C11.5032 7.24219 11.3782 7.13906 11.2798 7.20625C10.6689 7.62188 9.41729 8.6 8.83448 9.97656C8.04542 11.8375 8.10167 12.7484 8.56886 13.8609C8.85011 14.5313 8.52354 14.6734 8.35948 14.6984C8.20011 14.7234 8.05323 14.6172 7.93604 14.5063C7.59892 14.1826 7.35868 13.7714 7.24229 13.3188C7.21729 13.2219 7.09073 13.1953 7.03292 13.275C6.59542 13.8797 6.36886 14.85 6.35792 15.5359C6.32354 17.6563 8.07511 19.375 10.1939 19.375C12.8642 19.375 14.8095 16.4219 13.2751 13.9531C12.8298 13.2344 12.411 12.7641 11.8923 12.0969Z"
                                    fill="url(#paint1_radial_11721_14403)"
                                />
                                <defs>
                                    <radialGradient
                                        id="paint0_radial_11721_14403"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(9.72097 19.422) rotate(-179.751) scale(11.0293 18.0969)"
                                    >
                                        <stop
                                            offset="0.314"
                                            stop-color="#FF9800"
                                        />
                                        <stop
                                            offset="0.662"
                                            stop-color="#FF6D00"
                                        />
                                        <stop
                                            offset="0.972"
                                            stop-color="#F44336"
                                        />
                                    </radialGradient>
                                    <radialGradient
                                        id="paint1_radial_11721_14403"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(10.3407 8.44662) rotate(90.5787) scale(11.5401 8.68476)"
                                    >
                                        <stop
                                            offset="0.214"
                                            stop-color="#FFF176"
                                        />
                                        <stop
                                            offset="0.328"
                                            stop-color="#FFF27D"
                                        />
                                        <stop
                                            offset="0.487"
                                            stop-color="#FFF48F"
                                        />
                                        <stop
                                            offset="0.672"
                                            stop-color="#FFF7AD"
                                        />
                                        <stop
                                            offset="0.793"
                                            stop-color="#FFF9C4"
                                        />
                                        <stop
                                            offset="0.822"
                                            stop-color="#FFF8BD"
                                            stop-opacity="0.804"
                                        />
                                        <stop
                                            offset="0.863"
                                            stop-color="#FFF6AB"
                                            stop-opacity="0.529"
                                        />
                                        <stop
                                            offset="0.91"
                                            stop-color="#FFF38D"
                                            stop-opacity="0.209"
                                        />
                                        <stop
                                            offset="0.941"
                                            stop-color="#FFF176"
                                            stop-opacity="0"
                                        />
                                    </radialGradient>
                                </defs>
                            </svg>
                            <h5>{CountParser(userDetails?.points || 0, 0)}</h5>
                        </div>
                        <div className="total-block-inner-second">
                            <h4>Available</h4>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.556 6.36406C5.46694 7.31406 5.40444 8.99531 5.96538 9.71094C5.96538 9.71094 5.70132 7.86406 8.0685 5.54687C9.02163 4.61406 9.24194 3.34531 8.90913 2.39375C8.72007 1.85469 8.37475 1.40937 8.07475 1.09844C7.89975 0.915625 8.03413 0.614062 8.28882 0.625C9.82944 0.69375 12.3263 1.12187 13.3873 3.78437C13.8529 4.95312 13.8873 6.16094 13.6654 7.38906C13.5248 8.17344 13.0248 9.91719 14.1654 10.1312C14.9794 10.2844 15.3732 9.6375 15.5498 9.17187C15.6232 8.97812 15.8779 8.92969 16.0154 9.08437C17.3904 10.6484 17.5076 12.4906 17.2232 14.0766C16.6732 17.1422 13.5685 19.3734 10.4841 19.3734C6.631 19.3734 3.56381 17.1687 2.7685 13.1781C2.44819 11.5672 2.61069 8.37969 5.09507 6.12969C5.27944 5.96094 5.581 6.11094 5.556 6.36406Z"
                                    fill="url(#paint0_radial_11721_14403)"
                                />
                                <path
                                    d="M11.8923 12.0969C10.472 10.2688 11.1079 8.18281 11.4564 7.35156C11.5032 7.24219 11.3782 7.13906 11.2798 7.20625C10.6689 7.62188 9.41729 8.6 8.83448 9.97656C8.04542 11.8375 8.10167 12.7484 8.56886 13.8609C8.85011 14.5313 8.52354 14.6734 8.35948 14.6984C8.20011 14.7234 8.05323 14.6172 7.93604 14.5063C7.59892 14.1826 7.35868 13.7714 7.24229 13.3188C7.21729 13.2219 7.09073 13.1953 7.03292 13.275C6.59542 13.8797 6.36886 14.85 6.35792 15.5359C6.32354 17.6563 8.07511 19.375 10.1939 19.375C12.8642 19.375 14.8095 16.4219 13.2751 13.9531C12.8298 13.2344 12.411 12.7641 11.8923 12.0969Z"
                                    fill="url(#paint1_radial_11721_14403)"
                                />
                                <defs>
                                    <radialGradient
                                        id="paint0_radial_11721_14403"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(9.72097 19.422) rotate(-179.751) scale(11.0293 18.0969)"
                                    >
                                        <stop
                                            offset="0.314"
                                            stop-color="#FF9800"
                                        />
                                        <stop
                                            offset="0.662"
                                            stop-color="#FF6D00"
                                        />
                                        <stop
                                            offset="0.972"
                                            stop-color="#F44336"
                                        />
                                    </radialGradient>
                                    <radialGradient
                                        id="paint1_radial_11721_14403"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(10.3407 8.44662) rotate(90.5787) scale(11.5401 8.68476)"
                                    >
                                        <stop
                                            offset="0.214"
                                            stop-color="#FFF176"
                                        />
                                        <stop
                                            offset="0.328"
                                            stop-color="#FFF27D"
                                        />
                                        <stop
                                            offset="0.487"
                                            stop-color="#FFF48F"
                                        />
                                        <stop
                                            offset="0.672"
                                            stop-color="#FFF7AD"
                                        />
                                        <stop
                                            offset="0.793"
                                            stop-color="#FFF9C4"
                                        />
                                        <stop
                                            offset="0.822"
                                            stop-color="#FFF8BD"
                                            stop-opacity="0.804"
                                        />
                                        <stop
                                            offset="0.863"
                                            stop-color="#FFF6AB"
                                            stop-opacity="0.529"
                                        />
                                        <stop
                                            offset="0.91"
                                            stop-color="#FFF38D"
                                            stop-opacity="0.209"
                                        />
                                        <stop
                                            offset="0.941"
                                            stop-color="#FFF176"
                                            stop-opacity="0"
                                        />
                                    </radialGradient>
                                </defs>
                            </svg>
                            <h5>
                                {CountParser(
                                    (userDetails?.points || 0) -
                                        (userDetails?.redeemPoints || 0),
                                    0
                                )}
                            </h5>
                        </div>
                        <div className="check-volume-block">
                            {POINTS?.map(({ value, label }, index) => (
                                <div
                                    className={`check-volume-block-inner ${
                                        value == selectedPoints
                                            ? "selected"
                                            : ""
                                    }`}
                                    onClick={() => handleSelectPoints(value)}
                                    key={index}
                                >
                                    <p>{label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="enter-amount-block">
                            <h3>Enter Amount</h3>
                            <input
                                type="text"
                                placeholder="10,000"
                                value={selectedPoints}
                                onChange={handleInputChange}
                            ></input>
                        </div>

                        <Button className="modal-btn" onClick={handleBoost}>
                            Boost
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default BoostCollectionModal;
