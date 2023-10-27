import React, { Suspense } from "react";

import { useLoaderData, defer, Await } from "react-router-dom";
import Loading from "../components/Ui/Loading";
import ProductsList from "../components/products/ProductsList";
import axios from "axios";
import { useSelector } from "react-redux";

const SearchPage = () => {
  const { products } = useLoaderData();
  const searchItem = useSelector((state) => state.ui.search);
  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={products}>
        {(Products) => (
          <ProductsList products={Products} all search={searchItem} />
        )}
      </Await>
    </Suspense>
  );
};

export default SearchPage;

async function loadProducts() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const resData = await response.data;
    return resData;
  } catch (error) {
    throw new Error("Could not fetch products");
  }
}

export function loader() {
  return defer({
    products: loadProducts(),
  });
}
