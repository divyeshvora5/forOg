import { CommonModalMain } from "@/styles/pages/main.style";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import MainLoaderComponent from "./MainLoaderComponent";
const ETHAnimation = dynamic(
    () => import("@/components/Common/create/ETHAnimation"),
    { ssr: false }
);

const ProgressModal = ({ show, progress = 25 }) => {
    return (
        <>
            <CommonModalMain show={show} className="modal-progress-bar">
                <Modal.Header>
                    <Modal.Title>Minting Progress</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="w-full d-flex">
                        <div className="check-block-group w-2/3">
                            {/* <div className="check-block-group-inner complete-block-check">
                                <div className="icon-check">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        id="check"
                                        fill="#BDBBC5"
                                    >
                                        <path
                                            fill="none"
                                            d="M0 0h24v24H0V0z"
                                        ></path>
                                        <path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"></path>
                                    </svg>
                                </div>
                                <h4>Uploading Media to IPFS</h4>
                            </div>
                            <div className="check-block-group-inner progress-block-check">
                                <div className="icon-check">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        id="check"
                                        fill="#BDBBC5"
                                    >
                                        <path
                                            fill="none"
                                            d="M0 0h24v24H0V0z"
                                        ></path>
                                        <path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"></path>
                                    </svg>
                                </div>
                                <h4>Uploading metadata to IPFS</h4>
                            </div>
                            <div className="check-block-group-inner">
                                <div className="icon-check">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        id="check"
                                        fill="#BDBBC5"
                                    >
                                        <path
                                            fill="none"
                                            d="M0 0h24v24H0V0z"
                                        ></path>
                                        <path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"></path>
                                    </svg>
                                </div>
                                <h4>Creating NFT</h4>
                            </div>
                            <div className="check-block-group-inner">
                                <div className="icon-check">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        id="check"
                                        fill="#BDBBC5"
                                    >
                                        <path
                                            fill="none"
                                            d="M0 0h24v24H0V0z"
                                        ></path>
                                        <path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z"></path>
                                    </svg>
                                </div>
                                <h4>Syncing Marketplace</h4>
                            </div> */}
                            <MainLoaderComponent progress={progress} />
                        </div>
                        <div className="w-1/3 relative h-96 m-auto flex items-center justify-center">
                            <div>
                                <ETHAnimation />
                            </div>
                        </div>
                    </div>
                    <ProgressBar variant="success" now={Math.floor(progress)} />
                    <div className="persantage-block">
                        <h3>{Math.floor(progress)}%</h3>
                    </div>
                </Modal.Body>
            </CommonModalMain>
        </>
    );
};

export default ProgressModal;
