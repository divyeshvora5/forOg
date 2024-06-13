import { client } from "@/constant/walletPrefrences";
import { useState, useEffect } from "react";
import { MediaRenderer } from "thirdweb/react";
import Waveform from "./audioVisualizer/AudioVisualizer";

const ImageLoader = ({
    src,
    alt,
    click = () => {},
    rounded = false,
    classProp = "",
    style = { width: "100%", height: "100%" },
    mediaRenderer = true,
    visualizer = false,
    thumbnail = "",
}) => {
    //State
    const [imageLoaded, setImageLoaded] = useState(false);

    //Handler
    const handleImageLoad = () => {
        setImageLoaded(true);
    };
    // const handleAudioPlay = () => {
    //     console.log("🚀 ~ handleAudioPlay:");
    // };

    // // Handler for audio pause
    // const handleAudioPause = () => {
    //     console.log("🚀 ~ handleAudioPause:");
    // };

    return (
        <>
            {mediaRenderer ? (
                !visualizer ? (
                    <MediaRenderer
                        client={client}
                        src={src || thumbnail}
                        style={style}
                        // poster="/192.png"
                        // onPlay={handleAudioPlay} // Handle play event
                        // onPause={handleAudioPause} // Handle pause event
                    />
                ) : (
                    <Waveform src={src} thumbnail={thumbnail} />
                )
            ) : (
                <div
                    className={`image-loader ${
                        imageLoaded ? "image-loaded" : ""
                    } ${rounded ? "rounded-circle" : ""} ${classProp}`}
                >
                    <img
                        src={src}
                        alt={alt}
                        onLoad={handleImageLoad}
                        className={imageLoaded ? "fade-in" : ""}
                        onClick={click}
                    />
                    <div className={!imageLoaded ? "loading-animation" : ""} />
                </div>
            )}
        </>
    );
};

export default ImageLoader;
