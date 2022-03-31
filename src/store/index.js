import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cart-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cardSlice.reducer,
  },
});

export default store;
