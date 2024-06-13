import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    createContactUsServices,
    getAllBlogTagsServices,
    getAllCategoryService,
    getAllTokensServices,
    getTokenRateServices,
    getUserService,
    updateUserService,
    addFCMkeys,
    addNotificationPreference,
    addNotificationEmail,
    removeNotificationEmail
} from "../services/globalServices";
import {
    FollowService,
    collectionLikeService,
    itemLikeService,
} from "../services/itemServices";
import { toast } from "react-toastify";
import { Toast, fromWei, resizeFile } from "@/utils";
import { AxiosError } from "axios";
import { ethers } from "ethers";
import { RPC_URLS } from "@/constant";

export const getCategoryActions = createAsyncThunk(
    "global/getCategoryActions",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await getAllCategoryService();
            return data?.data;
        } catch (err) {
            return rejectWithValue(err?.message);
        }
    }
);

export const getBlogTagsActions = createAsyncThunk(
    "global/getBlogTagsActions",
    async (_, { rejectWithValue }) => {
        console.log("getBlogTagsActions");
        try {
            const { data } = await getAllBlogTagsServices();
            return data?.data;
        } catch (err) {
            return rejectWithValue(err?.message);
        }
    }
);

export const getUserAction = createAsyncThunk(
    "global/getUserAction",
    async (payload, { rejectWithValue }) => {

        try {
            const { data } = await getUserService(
                payload.account,
                payload.params
            );
            return data?.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return Toast.error(err.message);
            }
            return Toast.error(err.message);
        }
    }
);

export const itemLikeAction = createAsyncThunk(
    "global/itemLikeAction",
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await itemLikeService(payload);

            if (data?.success) {
                return {
                    id: payload?.id,
                    like: data?.like,
                    likeCount: data?.likeCount,
                };
                // dispatch(getCollectionNftsAction(filter));
            }
            return {};
        } catch (err) {
            rejectWithValue(err.message);
        }
    }
);

export const collectionLikeAction = createAsyncThunk(
    "global/collectionLikeAction",
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await collectionLikeService(payload);

            if (data?.success) {
                return {
                    id: payload?.id,
                    like: data?.like,
                    likeCount: data?.likeCount,
                };
            }
            return {};
        } catch (err) {
            rejectWithValue(err.message);
        }
    }
);

export const followAction = createAsyncThunk(
    "global/followAction",
    async (payload, { rejectWithValue }) => {
        try {
            const { data } = await FollowService(payload);

            if (data?.success) {
                return {
                    id: payload?.follower,
                    follow: data?.follow,
                    followCount: data?.followCount
                };
                // dispatch(getCollectionNftsAction(filter));
            }
            return {};
        } catch (err) {
            rejectWithValue(err.message);
        }
    }
);

export const getTokensActions = createAsyncThunk(
    "global/getTokensActions",
    async (payload, rejectWithValue) => {
        try {
            const { data } = await getAllTokensServices(payload);
            return data?.data;
        } catch (err) {
            return rejectWithValue(err?.message);
        }
    }
);

export const getUserBalance = createAsyncThunk(
    "global/getUserBalance",
    async (payload, rejectWithValue) => {
        try {
            const provider = new ethers.providers.JsonRpcProvider(
                RPC_URLS[payload.chainId]
            );
            const balance = await provider.getBalance(payload.account);
            let data = await fromWei(balance?.toString());
            return { chainId: [payload.chainId], data: data };
        } catch (error) {
            return rejectWithValue(err?.message);
        }
    }
);

export const getTokenRate = createAsyncThunk(
    "global/getTokenRate",
    async (payload, rejectWithValue) => {
        try {
            const { data } = await getTokenRateServices(payload);
            if (data?.success) {
                return data?.data;
            }
            return {};
        } catch (err) {
            return rejectWithValue(err?.message);
        }
    }
);

export const updateUserAction = createAsyncThunk(
    "user/updateUserAction",
    async ({ payload, signMessage, fileRatio }, { dispatch, getState }) => {
        let sign_toast_id;
        sign_toast_id = toast.loading("Signing...");
        try {
            const { global } = getState();
            const { userDetails, account } = global;
            const signature = await signMessage({
                message: `I want to update my profile :${account?.toLowerCase()}:${userDetails?.nonce}`
            });
            if (!signature) {
                Toast.error("Signing failed!");

                return;
            }
            toast.dismiss(sign_toast_id);
            const formData = new FormData();
            formData.append("address", account);
            formData.append("name", payload.name || "NoName");
            formData.append("usePns", payload.usePns || "No");
            formData.append("useDomain", payload.useDomain || "");
            formData.append("bio", payload.bio || "");
            formData.append("email", payload.email || "");
            formData.append("twitter", payload.twitter || "");
            formData.append("instagram", payload.instagram || "");
            formData.append("other", payload.other || "");
            formData.append("discord", payload.discord || "");
            formData.append("telegram", payload.telegram || "");
            // here we take signature
            formData.append("signature", signature);


            if (payload.profilePic && payload.profilePic instanceof File) {
                const lowFile = await resizeFile(
                    payload.profilePic,
                    100,
                    Math.floor(100 * fileRatio)
                );
                const mediumFile = await resizeFile(
                    payload.profilePic,
                    250,
                    Math.floor(250 * fileRatio)
                );
                const highFile = await resizeFile(
                    payload.profilePic,
                    500,
                    Math.floor(500 * fileRatio)
                );
                formData.append("originals", payload.profilePic);
                formData.append("lows", lowFile);
                formData.append("mediums", mediumFile);
                formData.append("highs", highFile);
            } else {
                formData.append(
                    "originalLogo",
                    userDetails?.originalLogo || ""
                );
                formData.append("lowLogo", userDetails?.lowLogo || "");
                formData.append("mediumLogo", userDetails?.mediumLogo || "");
                formData.append("highLogo", userDetails?.highLogo || "");
            }

            if (payload.banners) {
                formData.append("banners", payload.banners);
            } else {
                formData.append("bannerUrl", userDetails?.bannerUrl || "");
            }
            console.log("formData", formData);
            const { data } = await updateUserService(formData);
            dispatch(getUserAction({ account }));
            return data?.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return Toast.error(err.message);
            } else if (err.code === "ACTION_REJECTED") {
                return Toast.error("User rejected transaction");
            }
            return Toast.error(err.message);
        } finally {
            toast.dismiss(sign_toast_id);
        }
    }
);

export const addUserFCMkeys = createAsyncThunk(
    "user/addUserFCMkeys",
    async ({ fcmToken, signMessage }, { dispatch, getState }) => {
        let sign_toast_id;
        sign_toast_id = toast.loading("Signing...");
        try {
            const { global } = getState();
            const { userDetails, account } = global;
            const signature = await signMessage({
                message: `I want to update my profile :${account?.toLowerCase()}:${userDetails?.nonce}`
            });
            if (!signature) {
                Toast.error("Signing failed!");

                return;
            }
            toast.dismiss(sign_toast_id);
            const data = {
                address: account,
                signature,
                fcmToken
            }
            const res = await addFCMkeys(data);
            dispatch(getUserAction({ account }));
            toast.success("Success!")

            return data?.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return Toast.error(err.message);
            } else if (err.code === "ACTION_REJECTED") {
                return Toast.error("User rejected transaction");
            }
            return Toast.error(err.message);
        } finally {
            toast.dismiss(sign_toast_id);
        }
    }
);

export const updateNotificationPreference = createAsyncThunk(
    "user/updateNotificationPreference",
    async ({ signMessage, mainObj, dataObj }, { dispatch, getState }) => {
        let sign_toast_id;
        sign_toast_id = toast.loading("Signing...");
        try {
            const { global } = getState();
            const { userDetails, account } = global;
            const signature = await signMessage({
                message: `I want to update my profile :${account?.toLowerCase()}:${userDetails?.nonce}`
            });
            if (!signature) {
                Toast.error("Signing failed!");

                return;
            }
            toast.dismiss(sign_toast_id);
            const data = {
                address: account,
                mainObj,
                signature,
                dataObj
            }


            const res = await addNotificationPreference(data);
            dispatch(getUserAction({ account }));
            toast.success("Success!")
            return res.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return Toast.error(err.message);
            } else if (err.code === "ACTION_REJECTED") {
                return Toast.error("User rejected transaction");
            }
            return Toast.error(err.message);
        } finally {
            toast.dismiss(sign_toast_id);
        }
    }
);

export const UpdateEmail = createAsyncThunk(
    "user/UpdateEmail",
    async ({ signMessage, email, type }, { dispatch, getState }) => {
        let sign_toast_id;
        console.log(email, "email");
        sign_toast_id = toast.loading("Signing...");
        try {
            const { global } = getState();
            const { userDetails, account } = global;
            const signature = await signMessage({
                message: `I want to update my email :${account?.toLowerCase()}:${userDetails?.nonce}`
            });
            if (!signature) {
                Toast.error("Signing failed!");

                return;
            }
            toast.dismiss(sign_toast_id);

            if (type == "disabled") {
                const dataObj = {
                    address: account,
                    signature,
                }
                const res = await removeNotificationEmail(dataObj);
                dispatch(getUserAction({ account }));
                toast.success("Success!")
                return res?.data;
            } else {
                const data = {
                    address: account,
                    email,
                    signature,

                }
                const res = await addNotificationEmail(data);
                dispatch(getUserAction({ account }));
                toast.success("Success!")
                return res?.data;
            }


        } catch (err) {
            if (err instanceof AxiosError) {
                return Toast.error(err.message);
            } else if (err.code === "ACTION_REJECTED") {
                return Toast.error("User rejected transaction");
            }
            return Toast.error(err.message);
        } finally {
            toast.dismiss(sign_toast_id);
        }
    }
);

// contactus action
export const createContactus = createAsyncThunk(
    "global/createContactus",
    async (payload) => {
        try {
            const { data } = await createContactUsServices(payload);
            if (data?.success) {
                return data;
            }
            return {};
        } catch (err) {
            return rejectWithValue(err?.message);
        }
    }
);
