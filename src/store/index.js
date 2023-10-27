import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";

import selection from "./selection-slice";
import cartSlice from "./cart-slice";
import wishListSlice from "./wishList-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    wishList: wishListSlice.reducer,
    selection: selection.reducer,
  },
});

export default store;
