import {
  CommonModalMain,
} from "@/styles/pages/main.style";
import React from "react";
import { Modal } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const ShareURLModal = ({ show, handleClose, url }) => {
  return (
    <CommonModalMain show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Share Item Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="top-token-block">
          <div className="d-flex justify-content-center">
            <FacebookShareButton url={url} className="mx-3">
              <FacebookIcon size={50} round={true} />
            </FacebookShareButton>
            <FacebookMessengerShareButton url={url} className="mx-3">
              <FacebookMessengerIcon size={50} round={true} />
            </FacebookMessengerShareButton>
            <WhatsappShareButton url={url} className="mx-3">
              <WhatsappIcon size={50} round={true} />
            </WhatsappShareButton>
            <TelegramShareButton url={url} className="mx-3">
              <TelegramIcon size={50} round={true} />
            </TelegramShareButton>
            <TwitterShareButton url={url} className="mx-3">
              <TwitterIcon size={50} round={true} />
            </TwitterShareButton>
          </div>
        </div>
      </Modal.Body>
    </CommonModalMain>
  );
};

export default ShareURLModal;
