import { globalState } from "@/redux/reducer/globalSlice";
import {
    getConversationServices,
    getUserChatsServices,
    sendMessageService,
} from "@/redux/services/chatService";
import { useRouter } from "next/router";
import { useReducer } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const STATE = {
    STOPLOADING: "STOPLOADING",
    STARTLOADING: "STARTLOADING",
    STARTSENDING: "STARTSENDING",
    STOPSENDING: "STOPSENDING",
    STARTUCLOADING: "STARTUCLOADING",
    ACCOUNTCHANGE: "ACCOUNTCHANGE",
    QUERYCHANGE: "QUERYCHANGE",
    PAGECHANGE: "PAGECHANGE",
    UCPAGECHANGE: "UCPAGECHANGE",
    UPDATEONLINEUSERS: "UPDATEONLINEUSERS",
    SETSOCKETMESSAGES: "SETSOCKETMESSAGES",
    SETUSERCHATS: "SETUSERCHATS",
    SETUSERCHATSFORSOCKET: "SETUSERCHATSFORSOCKET",
    SELECTEDCHATCHANGE: "SELECTEDCHATCHANGE",
    SETMESSAGES: "SETMESSAGES",
    INPUTCHANGE: "INPUTCHANGE",
    SENDMESSAGE: "SENDMESSAGE",
    MESSAGESTATUSUPDATE: "MESSAGESTATUSUPDATE",
    USERCHATSTATUSUPDATE: "USERCHATSTATUSUPDATE",
    SETUNREADMESSAGESCOUNT: "SETUNREADMESSAGESCOUNT",
    SEARCH: "SEARCH",
    SETNEWCHAT: "SETNEWCHAT",
};

export const useChat = () => {
    const {
        walletDetalis: { account },
        socket,
    } = useSelector(globalState);
    const initialState = {
        // userChats states
        search: "",
        ucLoading: false,
        ucState: null,
        ucPage: 1,
        ucLimit: 10,
        userChats: [],
        ucHasMore: false,
        unreadMessages: 0,
        // messages states
        loading: false,
        isSending: false,
        state: null,
        page: 1,
        limit: 15,
        messages: [],
        hasMore: false,
        // other states
        onlineUsers: [],
        newMessage: null,
        selectedChat: null,
        currentRecipient: null,
    };
    const router = useRouter();

    const reducer = (state, { type, payload }) => {
        switch (type) {
            case STATE.SETUNREADMESSAGESCOUNT:
                return {
                    ...state,
                    unreadMessages: payload,
                };
            case STATE.UCPAGECHANGE:
                return {
                    ...state,
                    ucState: STATE.PAGECHANGE,
                    ucPage: state.ucPage + 1,
                };
            case STATE.PAGECHANGE:
                return {
                    ...state,
                    state: STATE.PAGECHANGE,
                    page: state.page + 1,
                };
            case STATE.ACCOUNTCHANGE:
                return {
                    ...state,
                    state: STATE.ACCOUNTCHANGE,
                    ucState: STATE.ACCOUNTCHANGE,
                    selectedChat: null,
                    currentRecipient: null,
                    page: 1,
                    ucPage: 1,
                };
            case STATE.QUERYCHANGE:
                return {
                    ...state,
                    state: STATE.QUERYCHANGE,
                    page: 1,
                    currentRecipient: payload,
                };
            case STATE.UPDATEONLINEUSERS:
                return {
                    ...state,
                    onlineUsers: payload,
                };
            case STATE.SETUSERCHATS:
                return {
                    ...state,
                    userChats:
                        state.ucPage === 1
                            ? payload.userChats
                            : [...state.userChats, ...payload.userChats],
                    ucHasMore: payload.totalPages > state.ucPage,
                    ucLoading: false,
                    ucState: null,
                    // selectedChat: payload.selectedChat,
                };

            case STATE.SETNEWCHAT:
                return {
                    ...state,
                    userChats: [payload, ...state.userChats],
                };
            case STATE.SETUSERCHATSFORSOCKET:
                return {
                    ...state,
                    userChats: payload,
                };

            case STATE.SETSOCKETMESSAGES:
                let updatedMsgs = [...state.messages];
                const chatIndex = state.userChats.findIndex(
                    (chat) => chat._id === payload.chatId
                );

                if (payload.chatId === state?.selectedChat?._id) {
                    updatedMsgs = [payload, ...state.messages];
                }

                if (chatIndex !== -1) {
                    const updatedUserChats = [...state.userChats];
                    updatedUserChats[chatIndex] = {
                        ...updatedUserChats[chatIndex],
                        recentMessage: payload,
                        unreadMessageCount:
                            (updatedUserChats[chatIndex].unreadMessageCount ||
                                0) + 1,
                    };
                    return {
                        ...state,
                        messages: updatedMsgs,
                        userChats: updatedUserChats,
                    };
                }
                return {
                    ...state,
                    messages: updatedMsgs,
                };
            case STATE.SELECTEDCHATCHANGE:
                const ChatIndex = state.userChats.findIndex(
                    (chat) => chat._id === payload._id
                );
                if (ChatIndex !== -1) {
                    const UpdatedUserChats = [...state.userChats];
                    UpdatedUserChats[ChatIndex] = {
                        ...UpdatedUserChats[ChatIndex],
                        unreadMessageCount: 0,
                    };
                    return {
                        ...state,
                        selectedChat: payload,
                        userChats: UpdatedUserChats,
                    };
                }
                return {
                    ...state,
                    selectedChat: payload,
                };
            case STATE.SETMESSAGES:
                return {
                    ...state,
                    state: null,
                    messages:
                        state.page === 1
                            ? payload.messages
                            : [...state.messages, ...payload.messages],
                    hasMore: payload?.totalPages > state.page,
                    loading: false,
                };
            case STATE.USERCHATSTATUSUPDATE:
                const updatedUserChats = state.userChats.map((chat) => {
                    if (chat._id === payload.chatId && chat.recentMessage) {
                        chat.recentMessage.status =
                            payload?.updatedMessages[0].status;
                    }
                    return chat;
                });

                return {
                    ...state,
                    userChats: updatedUserChats,
                };
            case STATE.MESSAGESTATUSUPDATE:
                const updatedMessages = state.messages.map((message) => {
                    const updatedMessage = payload.find(
                        (updatedMessage) =>
                            updatedMessage.messageId === message._id
                    );
                    if (updatedMessage) {
                        return {
                            ...message,
                            status: updatedMessage.status,
                        };
                    } else {
                        return message;
                    }
                });
                const updatedChats = state.userChats.map((chat) => {
                    const updatedMessage = payload.find(
                        (updatedMessage) =>
                            updatedMessage.messageId ===
                            chat?.recentMessage?._id
                    );
                    if (updatedMessage) {
                        return {
                            ...chat,
                            recentMessage: {
                                ...chat?.recentMessage,
                                status: updatedMessage.status,
                            },
                        };
                    } else {
                        return chat;
                    }
                });
                return {
                    ...state,
                    messages: updatedMessages,
                    userChats: updatedChats,
                };
            case STATE.STARTSENDING:
                return {
                    ...state,
                    isSending: true,
                };
            case STATE.STOPSENDING:
                return {
                    ...state,
                    isSending: false,
                };

            case STATE.SENDMESSAGE:
                return {
                    ...state,
                    messages: [payload, ...state.messages],
                    newMessage: "",
                    // messages: payload,
                    loading: false,
                };
            case STATE.INPUTCHANGE:
                return {
                    ...state,
                    newMessage: payload,
                };
            case STATE.SEARCH:
                return {
                    ...state,
                    ucState: STATE.SEARCH,
                    search: payload,
                    ucPage: 1,
                };
            case STATE.STARTLOADING:
                return {
                    ...state,
                    state: null,
                    loading: true,
                };
            case STATE.STARTUCLOADING:
                return {
                    ...state,
                    ucState: null,
                    ucLoading: true,
                };
            case STATE.STOPLOADING:
                return {
                    ...state,
                    state: null,
                    loading: false,
                };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.onlineUsers?.length && state.userChats?.length) {
            // Update UserChats
            const updatedChats = state.userChats?.map((chat) => {
                const isOnline = state.onlineUsers?.some(
                    (user) => user.account === chat.recipient?.address
                );
                return {
                    ...chat,
                    recipient: {
                        ...chat?.recipient,
                        onlineStatus: isOnline,
                    },
                };
            });
            dispatch({
                type: STATE.SETUSERCHATSFORSOCKET,
                payload: updatedChats,
            });
            // Update selectedChat
            if (state.selectedChat?.recipient?.address) {
                const isOnline = state.onlineUsers?.some(
                    (user) =>
                        user.account === state.selectedChat.recipient.address
                );
                let currentChat = {
                    ...state.selectedChat,
                    recipient: {
                        ...state.selectedChat.recipient,
                        onlineStatus: isOnline,
                    },
                };
                dispatch({
                    type: STATE.SELECTEDCHATCHANGE,
                    payload: currentChat,
                });
            }
        }
    }, [state.onlineUsers]);

    useEffect(() => {
        if (!state.userChats.length) return;
        let totalUnreadMessages = 0;
        state.userChats.forEach((message) => {
            totalUnreadMessages += message.unreadMessageCount;
        });
        dispatch({
            type: STATE.SETUNREADMESSAGESCOUNT,
            payload: totalUnreadMessages,
        });
    }, [state.userChats]);

    const getUserChats = async () => {
        if (!account) return;
        dispatch({
            type: STATE.STARTUCLOADING,
        });
        let query = {
            page: state.ucPage,
            limit: state.ucLimit,
            search: state.search,
            account,
        };
        try {
            const { data } = await getUserChatsServices(query);
            dispatch({
                type: STATE.SETUSERCHATS,
                payload: {
                    userChats: data?.data,
                    totalPages: data?.totalPages,
                },
            });
        } catch (error) {
            console.log("error:", error);
        }
    };

    useEffect(() => {
        if (socket && account) {
            socket.emit("addNewUser", account);
            socket.on("getOnlineUsers", (res) => {
                dispatch({
                    type: STATE.UPDATEONLINEUSERS,
                    payload: res,
                });
            });
            socket.on("getMessage", (message) => {
                dispatch({
                    type: STATE.SETSOCKETMESSAGES,
                    payload: message?.newMessage,
                });
            });
            socket.on("messageStatusUpdate", (messages) => {
                dispatch({
                    type: STATE.MESSAGESTATUSUPDATE,
                    payload: messages,
                });
            });
            socket.on("UserChatsUpdate", (response) => {
                dispatch({
                    type: STATE.USERCHATSTATUSUPDATE,
                    payload: response,
                });
            });
            socket.on("UserChatsWithMessagesUpdate", (response) => {
                dispatch({
                    type: STATE.MESSAGESTATUSUPDATE,
                    payload: response,
                });
            });
        }
        return () => {
            socket?.off("getOnlineUsers");
        };
    }, [socket]);

    useEffect(() => {
        if (!account) return;
        dispatch({
            type: STATE.ACCOUNTCHANGE,
        });
    }, [account]);

    useEffect(() => {
        if (!router.isReady || !router.query?.recipient) return;
        dispatch({
            type: STATE.QUERYCHANGE,
            payload: router.query?.recipient.toLowerCase(),
        });
    }, [router.isReady, router.query]);

    const handleSelectedChat = (chat) => {
        if (
            !chat.recipient.address ||
            state.currentRecipient === chat.recipient.address
        )
            return;
        dispatch({
            type: STATE.QUERYCHANGE,
            payload: chat.recipient.address,
        });
    };

    useEffect(() => {
        getConversation();
    }, [state.state]);

    useEffect(() => {
        if (!state.ucState) return;
        let timer;
        if (state.ucState === STATE.SEARCH) {
            timer = setTimeout(() => {
                getUserChats();
            }, 800);
        } else {
            getUserChats();
        }
        return () => clearTimeout(timer);
    }, [state]);

    const getConversation = async () => {
        if (!state.state || !state.currentRecipient) return;
        dispatch({
            type: STATE.STARTLOADING,
        });
        try {
            const query = {
                page: state.page,
                limit: state.limit,
                recipient: state.currentRecipient,
                account,
            };
            const { data } = await getConversationServices(query);
            if (data?.success) {
                if (state.page == 1) {
                    dispatch({
                        type: STATE.SELECTEDCHATCHANGE,
                        payload: data?.chat,
                    });
                }
                dispatch({
                    type: STATE.SETMESSAGES,
                    payload: {
                        messages: data?.data,
                        totalPages: data?.totalPages,
                        count: data?.count,
                    },
                });
                if (data?.isNew) {
                    dispatch({ type: STATE.SETNEWCHAT, payload: data?.chat });
                }
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    const handleInputMessage = (e) => {
        let { value } = e.target;
        dispatch({ type: STATE.INPUTCHANGE, payload: value });
    };

    const handleSearch = (e) => {
        let { value } = e.target;
        dispatch({ type: STATE.SEARCH, payload: value });
    };

    const handleNext = () => {
        dispatch({ type: STATE.PAGECHANGE });
    };

    const handleNextUserChats = () => {
        dispatch({ type: STATE.UCPAGECHANGE });
    };

    const sendMessage = async () => {
        const recipientAccount = state.selectedChat?.recipient?.address;
        const message = state.newMessage.trim();
        if (!message || !account || !recipientAccount) return;
        // const recipientAccount = state.selectedChat?.members?.find(
        //     (member) => member !== account
        // );
        dispatch({
            type: STATE.STARTSENDING,
        });
        let payload = {
            chatId: state.selectedChat?._id,
            sender: account,
            text: message,
            recipientAccount: recipientAccount,
        };
        try {
            const { data } = await sendMessageService(payload);
            if (data?.success) {
                socket.emit("sendMessage", {
                    newMessage: data?.data,
                    recipientAccount,
                });
                dispatch({
                    type: STATE.SENDMESSAGE,
                    payload: data?.data,
                });

                const updatedUserChats = state.userChats.map((chat) => {
                    if (chat._id === payload.chatId) {
                        return {
                            ...chat,
                            recentMessage: data?.data,
                        };
                    } else {
                        return chat;
                    }
                });
                dispatch({
                    type: STATE.SETUSERCHATSFORSOCKET,
                    payload: updatedUserChats,
                });
                // setMessages((prevMessages) => [...prevMessages, data?.data]);
                // socket.emit("sendMessage", payload);
                // setNewMessage("");
            }
        } catch (error) {
            console.log("error", error);
        } finally {
            dispatch({
                type: STATE.STOPSENDING,
            });
        }
    };

    return {
        ...state,
        handleSelectedChat,
        handleInputMessage,
        sendMessage,
        handleNext,
        handleNextUserChats,
        handleSearch,
        // account,
        // filterChange,
        // handlePageChange,
        // handleSearch,
    };
};

// export const useMessages = ({ chatId }) => {
//     const {
//         walletDetalis: { account },
//         socket,
//     } = useSelector(globalState);
//     const initialState = {
//         loading: false,
//         state: null,
//         hasMore: false,
//         selectedChat: null,
//         messages: [],
//         newMessage: null,
//         page: 1,
//         limit: 25,
//     };

//     const reducer = (state, { type, payload }) => {
//         switch (type) {
//             // case STATE.PAGECHANGE:
//             //     return {
//             //         ...state,
//             //         state: STATE.PAGECHANGE,
//             //         page: state.page + 1,
//             //     };

//             case STATE.ACCOUNTCHANGE:
//                 return {
//                     ...state,
//                     state: STATE.ACCOUNTCHANGE,
//                     page: 1,
//                 };
//             case STATE.STARTLOADING:
//                 return {
//                     ...state,
//                     state: null,
//                     loading: true,
//                 };
//             case STATE.SETSOCKETMESSAGES:
//                 const chatIndex = state.userChats.findIndex(
//                     (chat) => chat._id === payload.chatId
//                 );
//                 if (chatIndex !== -1) {
//                     const updatedUserChats = [...state.userChats];
//                     updatedUserChats[chatIndex] = {
//                         ...updatedUserChats[chatIndex],
//                         recentMessage: payload,
//                     };
//                     return {
//                         ...state,
//                         messages: [...state.messages, payload],
//                         userChats: updatedUserChats,
//                     };
//                 }
//                 return {
//                     ...state,
//                     messages: [...state.messages, payload],
//                 };
//             case STATE.SETMESSAGES:
//                 return {
//                     ...state,
//                     messages:
//                         state.page === 1
//                             ? payload.messages
//                             : [...state.messages, ...payload.messages],
//                     hasMore: payload?.totalPages > state.page,
//                     loading: false,
//                 };
//             case STATE.STOPLOADING:
//                 return {
//                     ...state,
//                     state: null,
//                     loading: false,
//                 };
//             default:
//                 return state;
//         }
//     };

//     const [state, dispatch] = useReducer(reducer, initialState);

//     useEffect(() => {
//         if (socket && account) {
//             socket.on("getMessage", (message) => {
//                 dispatch({
//                     type: STATE.SETSOCKETMESSAGES,
//                     payload: message?.newMessage,
//                 });
//             });
//         }
//         return () => {
//             socket?.off("getOnlineUsers");
//         };
//     }, [socket]);

//     const getConversation = async () => {
//         let chatID = state.selectedChat?._id || chatId;
//         if (!account || !chatID) return;
//         dispatch({
//             type: STATE.STARTLOADING,
//         });
//         try {
//             const query = {
//                 page: state.page,
//                 limit: state.limit,
//                 chatId: chatID,
//                 account,
//             };
//             const { data } = await getConversationServices(query);
//             dispatch({
//                 type: STATE.SETMESSAGES,
//                 payload: {
//                     messages: data?.data,
//                     totalPages: data?.totalPages,
//                     count: data?.count,
//                 },
//             });
//         } catch (error) {
//             console.log("error", error);
//         }
//     };

//     useEffect(() => {
//         if (!state) return;
//         getConversation();
//     }, [state]);

//     useEffect(() => {
//         if (!account) return;
//         dispatch({
//             type: STATE.ACCOUNTCHANGE,
//         });
//     }, [account]);
// };
