import { Button, CommonModalMain } from "@/styles/pages/main.style";
import { Modal, Spinner } from "react-bootstrap";
import { PayEmbed } from "thirdweb/react";
import { client } from "@/constant/walletPrefrences";
import { base } from "thirdweb/chains";
import { useSelector } from "react-redux";
import { globalState } from "@/redux/reducer/globalSlice";
import { PayEmbedChains } from "@/constant";
import { useActiveWeb3React } from "@/hooks/useActiveWeb3React";

const BuyCryptoModel = ({ show, handleClose = () => {} }) => {
    const { themeMode } = useSelector(globalState);
    const { chainId } = useActiveWeb3React();

    return (
        <CommonModalMain show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Buy Crypto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="w-full d-flex justify-content-center align-items-center">
                    <PayEmbed
                        client={client}
                        theme={`${
                            themeMode === "light-Theme" ? "light" : "dark"
                        }`}
                        payOptions={{
                            prefillBuy: {
                                chain: base, //to set dynamically from constants like... PayEmbedChains[8453]
                                allowEdits: {
                                    amount: true,
                                    token: true,
                                    chain: false,
                                },
                            },
                        }}
                        className="custom-pay-embed-class"
                    />
                </div>
            </Modal.Body>
        </CommonModalMain>
    );
};

export default BuyCryptoModel;
