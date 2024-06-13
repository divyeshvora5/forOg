import { createSlice } from "@reduxjs/toolkit";
import {
    collectionLikeAction,
    createContactus,
    followAction,
    getBlogTagsActions,
    getCategoryActions,
    getTokenRate,
    getTokensActions,
    getUserAction,
    getUserBalance,
    itemLikeAction,
    updateUserAction,
    updateNotificationPreference,
    UpdateEmail
} from "../actions/globalAction";
import { getStorageData, saveStorageData } from "@/utils";
import { STORAGE_KEYS, THEME_MODES } from "@/constant";

const initialState = {
    loading: false,
    chainId: null,
    account: null,
    socket: null,
    categorys: [],
    tokens: [],
    blogTags: [],
    userDetails: null,
    recentLikedItem: {},
    recentFollowItem: {},
    themeMode: getStorageData(STORAGE_KEYS.THEME_MODE) || "light-theme",
    walletDetalis: {
        chainId: null,
        account: null,
        status: null,
    },
    walletBalance: {
        943: { loading: true },
        84532: { loading: true },
        11155111: { loading: true },
        8453: { loading: true },
        1: { loading: true },
        369: { loading: true },
    },
};

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setWalletDetails: (state, { payload }) => {
            state.walletDetalis.account = payload.account;
            state.walletDetalis.chainId = payload.chainId;
            state.walletDetalis.status = payload.status;
            state.chainId = payload.chainId;
            state.account = payload.account;
        },
        setChainId: (state, { payload }) => {
            state.walletDetalis.chainId = payload;
        },
        setUserImage: (state, { payload }) => {
            if (state.userDetails) {
                state.userDetails.highLogo = payload.profileImage;
            }
        },
        setUserBanner: (state, { payload }) => {
            if (state.userDetails) {
                state.userDetails.bannerUrl = payload.bannerUrl;
            }
        },
        toggleThemeMode: (state, { payload }) => {
            if (payload.themeMode) {
                saveStorageData(STORAGE_KEYS.THEME_MODE, payload.themeMode);
                state.themeMode = payload.themeMode;
            }
        },
        setSocket: (state, { payload }) => {
            state.socket = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTokensActions.pending, (state) => {
                state.loading = true;
            })
            .addCase(getTokensActions.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.tokens = payload;
            })
            .addCase(getTokensActions.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(getUserBalance.pending, (state) => {
                // state.loading = true;
            })
            .addCase(getUserBalance.fulfilled, (state, { payload }) => {
                // state.loading = false;
                const chainId = payload?.chainId;
                if (chainId) {
                    state.walletBalance[chainId].loading = false;
                    state.walletBalance[chainId].balance = payload?.data;
                }
            })
            .addCase(getUserBalance.rejected, (state, { payload }) => {
                // state.loading = false;
                const chainId = payload?.chainId;
                if (chainId) {
                    state.walletBalance[chainId].loading = false;
                    state.error = payload;
                }
            })
            .addCase(getTokenRate.pending, (state) => {
                state.loading = true;
            })
            .addCase(getTokenRate.fulfilled, (state, { payload }) => {
                state.loading = false;
                payload?.forEach(({ chainId, rate }) => {
                    if (state.walletBalance[chainId]) {
                        state.walletBalance[chainId].tokenRate = rate;
                    }
                });
            })
            .addCase(getTokenRate.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(getCategoryActions.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCategoryActions.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.categorys = payload;
            })
            .addCase(getCategoryActions.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getBlogTagsActions.pending, (state) => {
                state.loading = true;
            })
            .addCase(getBlogTagsActions.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.blogTags = payload;
            })
            .addCase(getBlogTagsActions.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getUserAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUserAction.fulfilled, (state, { payload }) => {
                state.userDetails = payload;
                state.loading = false;
            })
            .addCase(getUserAction.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(itemLikeAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(itemLikeAction.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.recentLikedItem = payload;
            })
            .addCase(itemLikeAction.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(collectionLikeAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(collectionLikeAction.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.recentLikedItem = payload;
            })
            .addCase(collectionLikeAction.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(followAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(followAction.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.recentFollowItem = payload;
            })
            .addCase(followAction.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(updateUserAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUserAction.fulfilled, (state, { payload }) => {
                state.loading = false;
            })
            .addCase(updateUserAction.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(createContactus.pending, (state) => {
                // contact us page
                state.loading = true;
            })
            .addCase(createContactus.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(createContactus.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            })
            .addCase(updateNotificationPreference.pending, (state) => {
                // contact us page
                state.loading = true;
            })
            .addCase(updateNotificationPreference.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(updateNotificationPreference.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            }).addCase(UpdateEmail.pending, (state) => {
                // contact us page
                state.loading = true;
            })
            .addCase(UpdateEmail.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(UpdateEmail.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
            });
    },
});

export const globalState = (state) => state.global;

export const {
    setWalletDetails,
    setChainId,
    setUserImage,
    setUserBanner,
    toggleThemeMode,
    setSocket,
} = globalSlice.actions;

export const globalReducer = globalSlice.reducer;
