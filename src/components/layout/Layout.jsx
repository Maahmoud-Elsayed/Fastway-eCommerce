import React from "react";
import ProductsCategories from "./ProductsCategories";
import SecCategories from "./SecCategories";
import SliderBar from "./Slider";
import Sale from "./Sale";

const Layout = () => {
  return (
    <>
      <Sale />
      <ProductsCategories />
      <SliderBar />
      <SecCategories />
    </>
  );
};

export default Layout;
