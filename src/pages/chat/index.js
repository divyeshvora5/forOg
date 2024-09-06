import { ConnectionGuard } from "@/components";
import ChatMainComponent from "@/components/chat/ChatMainComponent";
import { ChatProvider } from "@/context/ChatContext";
import React from "react";

const chatPage = () => {
    return (
        <ConnectionGuard>
            {/* <ChatProvider> */}
                <ChatMainComponent />
            {/* </ChatProvider> */}
        </ConnectionGuard>
    );
};

export default chatPage;
