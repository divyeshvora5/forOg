import React from "react";
import Lottie from "react-lottie";
import Success from "@/components/Common/Success/Success.json";

const SuccessAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Success,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
            scale: 0.05,
        },
    };
    return (
        <>
            <Lottie options={defaultOptions}/>
        </>
    );
};

export default SuccessAnimation;
