import React from "react";
import { Divider, List, ListItem, Avatar, Typography } from "@mui/material";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function WishList() {
  const wishList = useSelector((state: RootState) => state.products.wishList);

  if (wishList.length === 0) {
    return (
      <div>
        <Typography>
          <p> Your wish list is empty</p>
        </Typography>
      </div>
    );
  }
  return (
    <List sx={{ width: "20rem" }}>
      <h1>wish list</h1>
      {wishList.map((item) => (
        <ListItem key={item.id} disablePadding>
          <Avatar alt="Remy Sharp" src={item.images[0]} sx={{ m: "10px" }} />
          <Typography>{item.title}</Typography>
          <Divider />
        </ListItem>
      ))}
    </List>
  );
}
