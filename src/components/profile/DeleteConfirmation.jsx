import React from "react";
import { CommonModalMain } from "@/styles/pages/main.style";
import { Modal } from "react-bootstrap";
import { Button } from "@/styles/pages/main.style";
import { useDeleteUser } from "@/hooks/useProfileHook";

const DeleteConfirmation = ({
    show,
    handleClose,
    account = "",
}) => {
    const { deleteAccount } = useDeleteUser();
    const onConfirm = () => {
        deleteAccount();
        handleClose();
    };
    return (
        <>
            <CommonModalMain show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-center">
                        Delete Account
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="text-center">
                        Are you sure you want to delete this account "
                        <span className="fw-bold text-[#FF0000]">
                            {account}
                        </span>
                        "?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <div className="w-full d-flex no-wrap">
                        <div className="w-50 px-4">
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                        </div>
                        <div className="w-50 px-4">
                            <Button variant="primary" onClick={onConfirm}>
                                Delete
                            </Button>
                        </div>
                    </div>
                </Modal.Footer>
            </CommonModalMain>
        </>
    );
};

export default DeleteConfirmation;
