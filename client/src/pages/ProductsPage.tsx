import React from "react";
import SearchForm from "../components/form/SearchForm";
import ProductList from "../components/products/ProductList";
import SortForm from "../components/form/SortForm";
import { Box } from "@mui/material";

export default function ProductsPage() {
  return (
    <Box>
      <SearchForm />
      <br></br>
      <SortForm />
      <ProductList />
    </Box>
  );
}
