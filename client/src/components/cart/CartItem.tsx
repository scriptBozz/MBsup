import React from "react";
import {  Paper, Typography } from "@mui/material";

import { ProductCart } from "../../types/type";
// import { useDispatch } from "react-redux";
// import { cartActions } from "../../redux/slices/cart";

type Prop = {
  item: ProductCart;
};

export default function CartItem({ item }: Prop) {
  // const dispatch = useDispatch();

  // function increaseQuantityHandler() {
  //   dispatch(cartActions.increaseQuantity(item));
  // }

  // function decreaseQuantityHandler() {
  //   dispatch(cartActions.decreaseQuantity(item));
  // }
  return (
    <div className="cartItem">
      <Paper
        sx={{
          width: 400,
          height: 100,
        }}
      >
        <Typography>
          <p>Property Title:</p>
          <p> Rent: €{item.price} Monthly</p>
        </Typography>
      </Paper>
      <Typography>
        <div style={{display:"flex", gap:"10px", }}>
          <p>City:</p>
          <p>street:
          </p>
        </div>
      </Typography>

      {/* <Button variant="outlined" onClick={increaseQuantityHandler}>
        +
      </Button> */}
      {/* <p>{item.quantity}</p> */}
      {/* <Button variant="outlined" size="small" onClick={decreaseQuantityHandler}>
        -
      </Button> */}
    </div>
  );
}
