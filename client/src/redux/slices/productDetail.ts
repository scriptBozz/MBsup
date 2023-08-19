 import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/type";

type InitialState = {
  loading: boolean;
  productDetail: null | Product;
};

const initialState: InitialState = {
  loading: false,
  productDetail: null,
};

const productSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    getProductDetail: (state, action) => {
      state.productDetail = action.payload;
      state.loading = false;
    },
  },
});

export const productDetailActions = productSlice.actions;
const productDetailReducer = productSlice.reducer;
export default productDetailReducer;
