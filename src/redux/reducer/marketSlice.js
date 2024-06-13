import {
	acceptOfferAction,
	buyFromListingAction,
	cancleAuctionAction,
	cancleListingAction,
	cancleOfferAction,
	collectAuctionPayoutAction,
	collectAuctionTokensAction,
	collectionUriUpdateAction,
	createAuctionAction,
	createCollectionAction,
	createMultipleNftAction,
	createSingleNftAction,
	creatingListingAction,
	importCollectionAction,
	makeOfferAction,
	placeBidInAuctionAction,
	purchaseMembership,
} from "../actions/marketAction";

const { createSlice } = require("@reduxjs/toolkit");

export const ACTION_TYPE = {
	CANCLE: "CANCEL",
	BUY: "BUY",
	CANCLEAUCTION: "CANCLEAUCTION",
	CLOSEFORBUYER: "CLOSEFORBUYER",
	CLOSEFORSELLER: "CLOSEFORSELLER",
	BID: "BID",
	MAKEOFFER: "MAKEOFFER",
	CANCLEOFFER: "CANCLEOFFER",
	ACCEPTOFFER: "ACCEPTOFFER",
};

const initialState = {
	contractLoading: false,
	tokenAddress: null,
	refetch: null,
	selectedItem: {},
	itemDetails: null,
	currentAction: null,
	progress: null,
};

const marketSlice = createSlice({
	name: "market",
	initialState,
	reducers: {
		setTokenAddress: (state, { payload }) => {
			state.tokenAddress = payload;
		},
		setRefetchAction: (state, { payload }) => {
			state.refetch = payload;
		},
		setSelectedItem: (state, { payload }) => {
			state.selectedItem = payload;
		},
		setActionItem: (state, { payload }) => {
			state.currentAction = payload;
		},
		setItemDetails: (state, { payload }) => {
			state.itemDetails = payload;
		},
		setProgress: (state, { payload }) => {
			state.progress = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(creatingListingAction.pending, (state) => {
				state.contractLoading = true;
			})
			.addCase(creatingListingAction.fulfilled, (state) => {
				state.contractLoading = false;
			})
			.addCase(creatingListingAction.rejected, (state, { payload }) => {
				state.contractLoading = false;
				state.error = payload;
			})
			.addCase(buyFromListingAction.pending, (state) => {
				state.contractLoading = true;
			})
			.addCase(buyFromListingAction.fulfilled, (state) => {
				state.contractLoading = false;
			})
			.addCase(buyFromListingAction.rejected, (state, { payload }) => {
				state.contractLoading = false;
				state.error = payload;
			})
			.addCase(cancleListingAction.pending, (state) => {
				state.contractLoading = true;
			})
			.addCase(cancleListingAction.fulfilled, (state) => {
				state.contractLoading = false;
			})
			.addCase(cancleListingAction.rejected, (state, { payload }) => {
				state.contractLoading = false;
				state.error = payload;
			})
			.addCase(createAuctionAction.pending, (state) => {
				state.contractLoading = true;
			})
			.addCase(createAuctionAction.fulfilled, (state) => {
				state.contractLoading = false;
			})
			.addCase(createAuctionAction.rejected, (state, { payload }) => {
				state.contractLoading = false;
				state.error = payload;
			})
			.addCase(placeBidInAuctionAction.pending, (state) => {
				state.contractLoading = true;
			})
			.addCase(placeBidInAuctionAction.fulfilled, (state) => {
				state.contractLoading = false;
			})
			.addCase(placeBidInAuctionAction.rejected, (state, { payload }) => {
				state.contractLoading = false;
				state.error = payload;
			})
			.addCase(cancleAuctionAction.pending, (state) => {
				state.contractLoading = true;
			})
			.addCase(cancleAuctionAction.fulfilled, (state) => {
				state.contractLoading = false;
			})
			.addCase(cancleAuctionAction.rejected, (state, { payload }) => {
				state.contractLoading = false;
				state.error = payload;
			})
			.addCase(collectAuctionPayoutAction.pending, (state) => {
				state.contractLoading = true;
			})
			.addCase(collectAuctionPayoutAction.fulfilled, (state) => {
				state.contractLoading = false;
			})
			.addCase(
				collectAuctionPayoutAction.rejected,
				(state, { payload }) => {
					state.contractLoading = false;
					state.error = payload;
				}
			)
			.addCase(collectAuctionTokensAction.pending, (state) => {
				state.contractLoading = true;
			})
			.addCase(collectAuctionTokensAction.fulfilled, (state) => {
				state.contractLoading = false;
			})
			.addCase(
				collectAuctionTokensAction.rejected,
				(state, { payload }) => {
					state.contractLoading = false;
					state.error = payload;
				}
			)
			.addCase(makeOfferAction.pending, (state) => {
				state.contractLoading = true;
			})
			.addCase(makeOfferAction.fulfilled, (state) => {
				state.contractLoading = false;
			})
			.addCase(makeOfferAction.rejected, (state, { payload }) => {
				state.contractLoading = false;
				state.error = payload;
			})
			.addCase(cancleOfferAction.pending, (state) => {
				state.contractLoading = true;
			})
			.addCase(cancleOfferAction.fulfilled, (state) => {
				state.contractLoading = false;
			})
			.addCase(cancleOfferAction.rejected, (state, { payload }) => {
				state.contractLoading = false;
				state.error = payload;
			})
			.addCase(acceptOfferAction.pending, (state) => {
				state.contractLoading = true;
			})
			.addCase(acceptOfferAction.fulfilled, (state) => {
				state.contractLoading = false;
			})
			.addCase(acceptOfferAction.rejected, (state, { payload }) => {
				state.contractLoading = false;
				state.error = payload;
			})

			//collections
			.addCase(createCollectionAction.pending, (state) => {
				state.contractLoading = true;
			})
			.addCase(createCollectionAction.fulfilled, (state) => {
				state.contractLoading = false;
			})
			.addCase(createCollectionAction.rejected, (state) => {
				state.contractLoading = false;
			})
			.addCase(importCollectionAction.pending, (state) => {
				state.contractLoading = true;
			})
			.addCase(importCollectionAction.fulfilled, (state) => {
				state.contractLoading = false;
			})
			.addCase(importCollectionAction.rejected, (state) => {
				state.contractLoading = false;
			})

			.addCase(collectionUriUpdateAction.pending, (state) => {
				state.contractLoading = true;
			})
			.addCase(collectionUriUpdateAction.fulfilled, (state) => {
				state.contractLoading = false;
			})
			.addCase(collectionUriUpdateAction.rejected, (state) => {
				state.contractLoading = false;
			})

			//items
			.addCase(createSingleNftAction.pending, (state) => {
				state.contractLoading = true;
			})
			.addCase(createSingleNftAction.fulfilled, (state) => {
				state.contractLoading = false;
			})
			.addCase(createSingleNftAction.rejected, (state) => {
				state.contractLoading = false;
			})
			.addCase(createMultipleNftAction.pending, (state) => {
				state.contractLoading = true;
			})
			.addCase(createMultipleNftAction.fulfilled, (state) => {
				state.contractLoading = false;
			})
			.addCase(createMultipleNftAction.rejected, (state) => {
				state.contractLoading = false;
			})

			//membership
			.addCase(purchaseMembership.pending, (state) => {
				state.contractLoading = true;
			})
			.addCase(purchaseMembership.fulfilled, (state) => {
				state.contractLoading = false;
			})
			.addCase(purchaseMembership.rejected, (state) => {
				state.contractLoading = false;
			});
	},
});

export const marketReducer = marketSlice.reducer;

export const {
	setTokenAddress,
	setRefetchAction,
	setSelectedItem,
	setActionItem,
	setItemDetails,
	setProgress,
} = marketSlice.actions;

export const marketState = (state) => state?.market;
