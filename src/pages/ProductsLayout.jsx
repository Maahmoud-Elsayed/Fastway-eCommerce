import React from "react";
import { Outlet } from "react-router-dom";

import BreadCrumb from "../components/Ui/BreadCrumb";

const ProductsLayout = () => {
  return (
    <>
      <BreadCrumb />

      <Outlet />
    </>
  );
};

export default ProductsLayout;
