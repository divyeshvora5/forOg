import { ITEM_LISTING_STATUS } from "@/constant";
import React from "react";
import Countdown from "react-countdown";

const Completionist = ({ endMessage }) => <p>{endMessage}</p>;
const Simple = ({ days, hours, minutes, seconds }) => (
  <p>
    <span>{days > 0 && <>{days}d :</>}</span> <span>{hours}h :</span> <span>{minutes}m :</span> <span>{seconds}s</span>
  </p>
);

const AuctionTimer = ({ days, hours, minutes, seconds }) => {
    return (
        <>
            {days < 730 ? (
                <div className="time-line-block-inner">
                    <h3>
                        <span>{days}</span>
                        <span className="dots-block">:</span>
                        <span>{hours}</span>
                        <span className="dots-block">:</span>
                        <span>{minutes}</span>
                        <span className="dots-block">:</span>
                        <span>{seconds}</span>
                    </h3>
                </div>
            ) : (
                ""
            )}
        </>
    );
};

const Renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
    handleComplate,
    endMessage,
    type,
}) => {
    if (completed) {
        typeof handleComplate === "function" && handleComplate();

        if (type === ITEM_LISTING_STATUS.AUCTION) {
            return (
                <div className="time-line-block-inner">
                    <h3>Auction end!</h3>
                </div>
            );
        }
        // Render a completed state
        return <Completionist endMessage={endMessage} />;
    } else {
        // Render a countdown

        if (type === ITEM_LISTING_STATUS.AUCTION) {
            return (
                <AuctionTimer
                    days={days}
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                />
            );
        }

        return (
            <Simple
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

const CountDownTimer = ({
    date,
    handleComplate,
    endMessage = "Listing ended!",
    type,
}) => {
    return (
        <Countdown
            date={date}
            renderer={(props) => (
                <Renderer
                    handleComplate={handleComplate}
                    endMessage={endMessage}
                    type={type}
                    {...props}
                />
            )}
        />
    );
};

export default CountDownTimer;
