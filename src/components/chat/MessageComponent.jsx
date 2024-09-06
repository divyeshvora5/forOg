import moment from "moment";
import React from "react";

const MessageComponent = ({ message }) => {
    const checkUrl = (text) => {
        if (!text) return text;
        const urlPattern = /(https?:\/\/[^\s]+)/g;
        return text.split(urlPattern).map(
            (part, index) =>
            urlPattern.test(part) ? (
                <a
                    key={index}
                    href={part}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {part}
                </a>
            ) : (
                part
            )
        );
    };

    return (
        <div className="message-box-time-text">
            <div className="message-box">
                <div>
                    <div className="message-boxgrey">
                        <p>
                            {checkUrl(message?.text)}
                            {/* {" "}
                            {message?.sender === account ? message.status : ""} */}
                        </p>
                    </div>
                </div>
            </div>
            <span className="msg-title-text">
                {moment(message?.createdAt).fromNow()}
            </span>
            {/* <span className="msg-title-text">
                11:52pm, Tuesday, November 20 2022
            </span> */}
        </div>
    );
};

export default MessageComponent;
