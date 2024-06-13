import React, { useRef, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import WaveSurfer from "wavesurfer.js";

const Waveform = ({ src = "", thumbnail = "" }) => {
    const waveformRef = useRef(null);
    const [waveSurfer, setWaveSurfer] = useState(null);
    const [isMuted, setIsMuted] = useState(false);
    const [prevVolume, setPrevVolume] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!src) return;
        if (waveformRef.current && !waveSurfer) {
            const wavesurfer = WaveSurfer.create({
                container: waveformRef.current,
                waveColor: "#2BD7EF",
                progressColor: "#FB4EF1",
                cursorColor: "#FB4EF1",
                height: 100,
                barWidth: 3,
                barRadius: 3,
                responsive: true,
                normalize: true,
                backend: "WebAudio",
            });
            wavesurfer.load(src);
            wavesurfer.on("ready", () => {
                setLoading(false);
            });
            setWaveSurfer(wavesurfer);
        }
        return () => {
            if (waveSurfer) {
                waveSurfer.destroy();
            }
        };
    }, [waveSurfer, src]);

    const handlePlay = () => {
        if (waveSurfer) {
            waveSurfer.play();
        }
    };
    const handlePause = () => {
        if (waveSurfer) {
            waveSurfer.pause();
        }
    };

    const handleMuteUnmute = () => {
        if (waveSurfer) {
            if (isMuted) {
                waveSurfer.setVolume(prevVolume);
            } else {
                setPrevVolume(waveSurfer.getVolume());
                waveSurfer.setVolume(0);
            }
            setIsMuted(!isMuted);
        }
    };

    return (
        <div
            className="waveform-container"
            style={{
                background: `url(${
                    thumbnail || "/images/audioCover.png"
                }) no-repeat center center`,
                backgroundSize: "cover",
            }}
        >
            {!loading ? (
                <div className="controls">
                    <button onClick={handlePlay} className="control-button">
                        <img
                            src="/images/playButton.svg"
                            alt="Play"
                            style={{ width: "20px", borderRadius: "0px" }}
                        />
                    </button>
                    <button onClick={handlePause} className="control-button">
                        <img
                            src="/images/pauseButton.svg"
                            alt="Pause"
                            style={{ width: "20px", borderRadius: "0px" }}
                        />
                    </button>
                    <button
                        onClick={handleMuteUnmute}
                        className="control-button"
                    >
                        <img
                            src={
                                isMuted
                                    ? "/images/muteButton.svg"
                                    : "/images/unMuteButton.svg"
                            }
                            alt={isMuted ? "Unmute" : "Mute"}
                            style={{
                                width: `${isMuted ? "30px" : "37px"}`,
                                borderRadius: "0px",
                            }}
                        />
                    </button>
                </div>
            ) : (
                <Spinner animation="border" size="md" />
            )}
            <div ref={waveformRef} className="waveform"></div>
        </div>
    );
};

export default Waveform;
