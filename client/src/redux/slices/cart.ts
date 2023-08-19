import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Product, ProductCart } from "../../types/type";

type InitialState = {
  cartList: ProductCart[];
};

const initialState: InitialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartList: (state, action: PayloadAction<Product>) => {
      state.cartList.push({ ...action.payload, quantity: 1 });
    },
    increaseQuantity: (state, action: PayloadAction<Product>) => {
      const foundProductCart = state.cartList.find(
        (item) => item.title === action.payload.title
      );
      if (foundProductCart) {
        foundProductCart.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<Product>) => {
      const foundProductCart = state.cartList.find(
        (item) => item.title === action.payload.title
      );
      if (foundProductCart) {
        foundProductCart.quantity -= 1;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
