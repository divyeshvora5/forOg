import React, { useEffect, useState } from "react";
import { globalState } from "@/redux/reducer/globalSlice";
import {
  Button,
  CommonModalMain,
  FormGroup,
  Input,
  Label,
} from "@/styles/pages/main.style";
import { toast } from "react-toastify";
import { Modal, Spinner } from "react-bootstrap";
import { useEditUser } from "@/hooks/useProfileHook";
import { useSelector } from "react-redux";
const Mailpopup = ({ isOpen, onRequestClose, trigger, content }) => {
  const { updateNotificationEmail } = useEditUser();
  const { userDetails, loading } = useSelector(globalState) || {};
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (userDetails) {
     setEmail(userDetails.email)
    }
  }, [userDetails]);



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    // Check if the email format is valid using regular expressions
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      // If the email format is not valid, display an error message or take appropriate action
      toast.error('Invalid email format');
      return; // Exit the function if the email format is not valid
    }
  
    // If the email format is valid, proceed with submitting the email for updates
    console.log(email, "email");
    await updateNotificationEmail(email, "enabled");
    console.log("Email submitted:", email);
    // You can add further logic to submit the email to your backend for updates
  }


  return (
    <CommonModalMain show={isOpen} onHide={onRequestClose}>
      <Modal.Header closeButton>
        <Modal.Title>Subscribe for Updates</Modal.Title>
      </Modal.Header>

      <div
        style={{
          padding: "20px",
        }}
        className=""
      >
        <div className="price-block-inner">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            style={{
              marginBottom: "20px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Button disabled={loading} onClick={handleSubmit}>
              {userDetails?.emailEnabled ? "Update" : "Subscribe"}
            </Button>
          </div>
        </div>
      </div>
    </CommonModalMain>
  );
};

export default Mailpopup;
