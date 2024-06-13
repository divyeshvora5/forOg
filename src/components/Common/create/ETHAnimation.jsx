import React from "react";
import Lottie from "react-lottie";
import ETHjson from "@/components/Common/create/etherum.json";

const ETHAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: ETHjson,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <>
            <Lottie options={defaultOptions} />
        </>
    );
};

export default ETHAnimation;
