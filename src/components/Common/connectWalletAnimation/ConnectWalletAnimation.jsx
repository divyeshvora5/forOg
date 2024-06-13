import React from "react";
import Lottie from "react-lottie";
import connectWallet from "@/components/Common/connectWalletAnimation/connectWallet.json";


const ConnectWalletAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: connectWallet,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
            scale: 0.05,
        },
    };
    return (
        <>
            <Lottie options={defaultOptions} />
        </>
    );
};

export default ConnectWalletAnimation;
