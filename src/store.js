import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./redux/productSlice";
import cartSlice from "./redux/cartSlice";

export default configureStore({
    reducer: {
        productSlice,
        cartSlice,
    }
})