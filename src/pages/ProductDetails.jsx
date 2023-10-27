import React, { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import Product from "../components/products/Product";
import ProductReviews from "../components/products/ProductReviews";
import Spinner from "../components/Ui/Spinner";
import axios from "axios";

const ProductDetailsPage = () => {
  const { product } = useLoaderData();
  return (
    <Suspense fallback={<Spinner />}>
      <Await resolve={product}>
        {(product) => (
          <>
            <Product product={product} />

            <ProductReviews product={product} />
          </>
        )}
      </Await>
    </Suspense>
  );
};

export default ProductDetailsPage;

async function loadProduct(id) {
  try {
    const response = await axios.get("https://fakestoreapi.com/products/" + id);
    const resData = await response.data;
    return resData;
  } catch (error) {
    throw new Error("Could not fetch project");
  }
}

export function loader({ params }) {
  const id = params.productId;
  return defer({
    product: loadProduct(id),
  });
}
