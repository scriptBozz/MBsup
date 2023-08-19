import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/products";
import productDetailReducer from "./slices/productDetail";
import cartReducer from "./slices/cart";
import themeReducer from "./slices/theme";

const store = configureStore({
  reducer: {
    products: productReducer,
    productDetail: productDetailReducer,
    cartList: cartReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
