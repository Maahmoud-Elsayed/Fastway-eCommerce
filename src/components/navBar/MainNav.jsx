import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import NavSearch from "./NavSearch";
import Login from "./LoginSection";

import { BsCart3, BsSearch } from "react-icons/bs";
import { Fragment, useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { Link, NavLink } from "react-router-dom";
import { sendCartData, fetchCartData } from "../../store/cart-actions";
import {
  fetchWishListData,
  sendWishListData,
} from "../../store/wishList-actions";
import { AiOutlineBars } from "react-icons/ai";
import {
  fetchSelectionData,
  sendSelectionData,
} from "../../store/selection-actions";
import SecNav from "./SecNav";
import { useAuth } from "../../context/AuthContext";

const pages = [
  { name: "Products", href: "/products" },
  { name: "Electronics", href: "/products/electronics" },
  { name: "Jewelery", href: "/products/jewelery" },
  { name: "Women", href: "/products/women's clothing" },
  { name: "Men", href: "/products/men's clothing" },
];

const MainNav = () => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      const height = window.innerWidth <= 640 ? 84 : 44;

      if (currentScrollPos <= height) {
        setIsTop(true);
        setIsHidden(false);
      } else if (prevScrollPos > currentScrollPos && prevScrollPos > height) {
        setIsTop(false);
        setIsHidden(false);
      } else {
        setIsTop(false);
        setIsHidden(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const dispatch = useDispatch();

  const language = useSelector((state) => state.selection.language);
  const currency = useSelector((state) => state.selection.currency);
  const cartotalQuantity = useSelector((state) => state.cart.totalQuantity);

  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);
  const cart = useSelector((state) => state.cart);
  const selection = useSelector((state) => state.selection);
  const wishList = useSelector((state) => state.wishList);
  const showSearch = useSelector((state) => state.ui.searchIsVisible);

  const { user } = useAuth();

  useEffect(() => {
    dispatch(fetchCartData());
    dispatch(fetchWishListData());
    dispatch(fetchSelectionData());
  }, [dispatch, user]);
  useEffect(() => {
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  useEffect(() => {
    if (wishList.changed) {
      dispatch(sendWishListData(wishList));
    }
  }, [wishList, dispatch]);
  useEffect(() => {
    if (selection.changed) {
      dispatch(sendSelectionData(selection));
    }
  }, [selection, dispatch]);

  useEffect(() => {
    if (cart.changed) {
      setBtnIsHighlighted(true);
    }

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cart]);

  const showSearchHandler = () => {
    dispatch(uiActions.searchToggle());
  };

  const toggleLanguagueHandler = () => {
    dispatch(uiActions.langShowToggle());
  };
  const toggleCurrencyHandler = () => {
    dispatch(uiActions.currShowToggle());
  };
  const toggleCartHandler = () => {
    dispatch(uiActions.cartToggle());
  };

  const toggleDropMenuHandler = () => {
    dispatch(uiActions.dropMenuToggle());
  };

  const navbarClasses = `w-full z-50 bg-white transition-all duration-500 ease-in-out  ${
    isTop
      ? "fixed top-0"
      : !isHidden && !isTop
      ? "fixed top-[-38px] sm:top-0"
      : "fixed top-[-84px] sm:top-[-45px]"
  } `;

  return (
    <header className="bg-white ">
      <nav aria-label="Top" className={navbarClasses}>
        <SecNav />

        <div className="border-b-2 container-fixed border-b-gray-200">
          <div className="relative flex items-center justify-between w-full gap-2 py-1 sm:gap-3 md:gap-5">
            <div className="flex items-center justify-center gap-5">
              <button
                type="button"
                className="text-gray-600 bg-white rounded-md lg:hidden"
                onClick={toggleDropMenuHandler}
              >
                <AiOutlineBars
                  className="h-7 w-7 shrink-0"
                  aria-hidden="true"
                />
              </button>

              {/* Logo */}
              <div className="flex-shrink-0 text-center">
                <Link
                  to="/"
                  className="items-center justify-center text-lg font-medium"
                >
                  <strong className="text-4xl text-primary sm:text-5xl baloo ">
                    Fastway
                  </strong>
                  <p className="flow-root text-xs pt-1.5 text-gray-500">
                    <span className="hidden sm:inline-block">Fastet & </span>{" "}
                    Easiest way to shopping
                  </p>
                </Link>
              </div>
            </div>
            {/* Search */}
            <div className="flex-shrink-0 hidden lg:block grow">
              <NavSearch />
            </div>
            <div className="lg:hidden">
              <button
                onClick={showSearchHandler}
                className="inline-flex items-center justify-center p-2 m-1 btn active-btn"
              >
                <span className="sr-only">Search</span>

                <BsSearch
                  className="w-4 h-4 md:h-5 md:w-5"
                  aria-hidden="true"
                />
              </button>
            </div>{" "}
            {/* Language & Currency */}
            <button
              data-text="Select your language"
              className="relative hidden lg:block afterBtn "
            >
              <ReactCountryFlag
                alt={language}
                countryCode={language}
                svg
                onClick={toggleLanguagueHandler}
                data-text="Select your language"
                className="cursor-pointer min-w-[36px] min-h-[36px] rounded-full object-cover hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-yellow-700"
              />
            </button>
            <button
              className={`hidden lg:block  afterBtn text-sm text-white  w-[38px]  h-[38px] bg-secondary  rounded-full  cursor-pointer relative hover:outline-none hover:ring-2  hover:ring-offset-2 hover:ring-yellow-700`}
              data-text="Select your currency"
              onClick={toggleCurrencyHandler}
            >
              {currency}
            </button>
            <div className="w-1 h-8 align-middle bg-gray-300 rounded-full "></div>
            {/* Login */}
            <Login />
            <div className="hidden w-1 h-8 align-middle bg-gray-300 rounded-full sm:block"></div>
            {/* Cart */}
            <div className="flex gap-2 cursor-pointer ">
              <div
                className="relative items-center justify-center flex-1 p-3 font-medium h-fit"
                onClick={toggleCartHandler}
              >
                <span
                  className={`${
                    btnIsHighlighted ? "animate-bump" : ""
                  } absolute inline-flex items-center justify-center right-1 top-0  w-6 h-6 text-center leading-none text-white bg-yellow-600 p-1.5 rounded-full shadow-md text-sm font-semibold`}
                >
                  {cartotalQuantity}
                </span>
                <BsCart3 className="h-7 w-7 lg:h-8 lg:w-8 hover:text-primary " />
              </div>

              <button
                className="self-center hidden w-16 text-sm font-medium text-gray-600 md:flex md:flex-col group hover:text-primary"
                type="button"
                onClick={toggleCartHandler}
              >
                <span className="text-base ">My Cart</span>
                <span className="">
                  ${" "}
                  {cartTotalPrice ? Number(cartTotalPrice).toFixed(2) : "0.00"}
                </span>
              </button>
            </div>
          </div>
          {showSearch && (
            <div className="pb-2 lg:hidden">
              <NavSearch />
            </div>
          )}
        </div>
      </nav>

      <nav className={`hidden lg:block mx-auto sm:mt-[125.5px]  `}>
        <div className="flex items-center justify-center gap-8 bg-gray-100 shadow-inner ">
          {pages.map((page, index) => (
            <Fragment key={page.name}>
              <NavLink
                to={page.href}
                className={({ isActive }) =>
                  isActive
                    ? "py-4 font-base text-primary text-lg "
                    : "py-4 font-base text-gray-600 hover:text-primary text-lg"
                }
                end
              >
                {page.name}
              </NavLink>
              {index !== pages.length - 1 && (
                <div className="w-1 h-8 align-middle bg-white rounded-full "></div>
              )}
            </Fragment>
          ))}
        </div>
      </nav>


    </header>
  );
};
export default MainNav;
