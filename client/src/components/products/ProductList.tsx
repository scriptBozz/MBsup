import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import Loading from "../loading/Loading";
import ProductItem from "./ProductItem";
import { fetchProductData } from "../../redux/thunk/product";
import { Box } from "@mui/material";

export default function ProductList() {
  const products = useSelector((state: RootState) => state.products.products);
  const searchProducts = useSelector(
    (state: RootState) => state.products.searchResult
  );

  const isLoading = useSelector((state: RootState) => state.products.loading);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  // theme
  const theme = useSelector((state: RootState) => state.theme.theme);

  let backGroundColor;
  if (theme === "dark") {
    backGroundColor = "black";
  }
  let productList = products;

  if (isLoading) {
    return <Loading />;
  }
  if (searchProducts.length > 0) {
    productList = searchProducts;
  }

  return (
    <Box className="productList" sx={{ backgroundColor: backGroundColor }}>
      {productList.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </Box>
  );
}
