import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productSlice from "./productSlice.js";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productSlice
    }
});

export default store;