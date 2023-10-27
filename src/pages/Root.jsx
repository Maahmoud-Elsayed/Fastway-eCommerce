import React from "react";
import { Outlet } from "react-router-dom";

import MainNav from "../components/navBar/MainNav";
import Footer from "../components/layout/Footer";

import NavDropMenu from "../components/navBar/NavDropMenu";

import CountryList from "../components/options/CountryList";
import CurrencyList from "../components/options/CurrencyList";
import CartModal from "../components/cart/CartModal";

import WishListModal from "../components/cart/wishListModal";
import { useSelector } from "react-redux";

const RootLayout = () => {
  const showSearch = useSelector((state) => state.ui.searchIsVisible);
  return (
    <>
      <MainNav />
      {/* <main className="pt-[157px] sm:pt-[125.5px] lg:pt-0"> */}
      <main
        className={`${
          showSearch
            ? "pt-[215px] sm:pt-[184.5px]"
            : " pt-[157px] sm:pt-[125.5px]"
        } lg:pt-0 `}
      >
        <Outlet />
        <CountryList />
        <CurrencyList />
        <CartModal />
        <WishListModal />
        <NavDropMenu />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
