import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "../features/ui-slice";
import cartSlice from "../features/cart-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
