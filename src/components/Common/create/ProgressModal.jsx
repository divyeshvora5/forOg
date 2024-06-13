import { CommonModalMain } from "@/styles/pages/main.style";
import dynamic from "next/dynamic";
import React from "react";
import { Modal } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
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
                    {/* <div style={{height:"200px"}}>
                        <ETHAnimation />
                    </div> */}
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
