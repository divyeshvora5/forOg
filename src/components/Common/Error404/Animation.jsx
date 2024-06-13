import React from "react";
import Lottie from "react-lottie";
import TesseractX404error from "@/components/Common/Error404/TesseractX404error.json";

const Animation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: TesseractX404error,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <>
            <Lottie options={defaultOptions}/>
        </>
    );
};

export default Animation;
