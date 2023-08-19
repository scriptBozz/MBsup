import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { productActions } from "../../redux/slices/products";

export default function SearchForm() {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");

  function searchHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
    dispatch(productActions.searchProduct(userInput));
  }

  return (
    <div className="search">
      <TextField
        id="standard-basic"
        label="Search"
        variant="standard"
        onChange={searchHandler}
        helperText="Search properties by name, location..."
      />
    </div>
  );
}
