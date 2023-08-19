import { AppDispatch } from "../store";
import { productActions } from "../slices/products";
import { productDetailActions } from "../slices/productDetail";

export function fetchProductData() {
  const productUrl = "https://api.escuelajs.co/api/v1/products";
  return async (dispatch: AppDispatch) => {
    const response = await fetch(productUrl);
    const productData = await response.json();
    dispatch(productActions.getProductData(productData));
  };
}

export function fetchProductDetail(productId: string) {
  const productDetailUrl = `https://api.escuelajs.co/api/v1/products/${productId}`;
  return async (dispatch: AppDispatch) => {
    const response = await fetch(productDetailUrl);
    const productDetailData = await response.json();
    dispatch(productDetailActions.getProductDetail(productDetailData));
  }; 
}
