import { PATH_DASHBOARD } from "@/routes/paths";
import { CommonModalMain } from "@/styles/pages/main.style";
import { shortenText } from "@/utils";
import { useRouter } from "next/router";
import { Modal } from "react-bootstrap";

const OwnersModel = ({ owners, show, handleClose }) => {
    const router = useRouter();
    const handleRouteChange = (address) => {
        router.push({
            pathname: PATH_DASHBOARD.user.detail(address),
        });
    };
    return (
        <CommonModalMain show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Owned by</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="top-token-block">
                    {owners?.map((owner) => (
                        <div
                            key={owner?.address}
                            className="top-token-block-inner my-3 pointer"
                            onClick={() => handleRouteChange(owner?.address)}
                        >
                            <div className="top-token-block-inner-left">
                                <div className="icon-bg">
                                    <img
                                        src={
                                            owner?.userLogo ||
                                            "/images/profile-img-new.png"
                                        }
                                        alt="ethe-icon"
                                    ></img>
                                </div>
                                <div className="top-token-block-inner-content">
                                    <h4>{owner?.name}</h4>
                                    <p>{shortenText(owner?.address, 6, 4)}</p>
                                </div>
                            </div>
                            <div className="top-token-block-inner-right">
                                <p>{owner?.balance} items</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Modal.Body>
        </CommonModalMain>
    );
};

export default OwnersModel;
