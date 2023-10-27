import React, { Suspense } from "react";

import { useLoaderData, defer, Await } from "react-router-dom";
import Loading from "../components/Ui/Loading";
import ProductsList from "../components/products/ProductsList";
import axios from "axios";

const CategoryPage = () => {
  const { category } = useLoaderData();
  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={category}>
        {(category) => <ProductsList products={category} />}
      </Await>
    </Suspense>
  );
};

export default CategoryPage;

async function loadCategory(id) {
  try {
  const response = await axios.get(
    "https://fakestoreapi.com/products/category/" + id
  );
    const resData = await response.data;
    return resData;
  } catch (error) {
    throw new Error("Could not fetch category");
  }
}

export function loader({ params }) {
  const id = params.category;
  return defer({
    category: loadCategory(id),
  });
}
