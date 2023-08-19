import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useDispatch } from "react-redux";

import { productActions } from "../../redux/slices/products";

export default function SortForm() {
  const [sortField, setSortField] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSortField(event.target.value as string);
  };
  const dispatch = useDispatch();
  if (sortField === "lowestPrice") {
    dispatch(productActions.sortProductLowestPrice());
  }
  if (sortField === "highestPrice") {
    dispatch(productActions.sortProductHighestPrice());
  }
  if (sortField === "AZ") {
    dispatch(productActions.sortProductAZ());
  }
  if (sortField === "ZA") {
    dispatch(productActions.sortProductZA());
  }
  return (
    <FormControl className="sort"
      variant="standard"
      sx={{ m: 1, width: 140, marginLeft: 120, marginBottom: 10 }}
    >
      <InputLabel id="demo-simple-select-standard-label">Sort by</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={sortField}
        onChange={handleChange}
        label="sortField"
      >
        <MenuItem value={"lowestPrice"}>Lowest price</MenuItem>
        <MenuItem value={"highestPrice"}>Highest price</MenuItem>
        <MenuItem value={"AZ"}>A-Z</MenuItem>
        <MenuItem value={"ZA"}>Z-A</MenuItem>
        <MenuItem value={"ok"}>ZipCode</MenuItem>
        <MenuItem value={"ZA"}>Studio</MenuItem>
        <MenuItem value={"AZ"}>Apartment</MenuItem>
        <MenuItem value={"ZA"}>office space</MenuItem>
      </Select>
    </FormControl>
  );
}
