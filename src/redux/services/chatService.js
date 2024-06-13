import { Axios } from "@/utils";

export const createChatService = async (payload) => {
    return await Axios.post("chats", payload);
};

export const getUserChatsServices = async (params) => {
    return await Axios.get("chats", {
        params: params,
    });
};

// messages

export const sendMessageService = async (payload) => {
    return await Axios.post("messages", payload);
};

export const getConversationServices = async (params) => {
    return await Axios.get("messages", {
        params: params,
    });
};
