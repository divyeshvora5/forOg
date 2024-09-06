import { SocketAxios } from "@/utils";

// export const createChatService = async (payload) => {
//     return await SocketAxios.post("chats", payload);
// };

export const getUserChatsServices = async (params) => {
    return await SocketAxios.get("chats", {
        params: params,
    });
};

// messages

export const sendMessageService = async (payload) => {
    return await SocketAxios.post("messages", payload);
};

export const getConversationServices = async (params) => {
    return await SocketAxios.get("messages", {
        params: params,
    });
};
