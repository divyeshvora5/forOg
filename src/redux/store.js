import { configureStore } from "@reduxjs/toolkit";
import { globalReducer } from "./reducer/globalSlice";
import { marketReducer } from "./reducer/marketSlice";

export const store = configureStore({
	reducer: {
		global: globalReducer,
		market: marketReducer,
	},
});
