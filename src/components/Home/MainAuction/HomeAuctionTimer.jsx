"use client";
import React from "react";
import Countdown from "react-countdown";

const Completionist = ({ endMessage }) => <p>{endMessage}</p>;

const Renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
    handleComplate,
    endMessage,
    useFor="Home"
}) => {
    if (completed) {
        typeof handleComplate === "function" && handleComplate();

        return <Completionist endMessage={endMessage} />;
    } else {
        if( useFor == "auction"){
            return (
                <h3>
                <span>{days}</span>
                <span className="dots-block">:</span>
                <span>{hours}</span>
                <span className="dots-block">:</span>
                <span>{minutes}</span>
                <span className="dots-block">:</span>
                <span>{seconds}</span>
            </h3>
            )
        }
        // Render a countdown

        return (
            <h2>
                <span>
                    {days} : {hours} : {minutes} : {seconds}
                </span>
            </h2>
        );
    }
};

const HomeAuctionTimer = ({
    date,
    handleComplate,
    endMessage = "Listing ended!",
    useFor="Home"
}) => {
    return (
        <Countdown
            date={date}
            renderer={(props) => (
                <Renderer
                    handleComplate={handleComplate}
                    endMessage={endMessage}
                    useFor={useFor}
                    {...props}
                />
            )}
        />
    );
};

export default HomeAuctionTimer;
