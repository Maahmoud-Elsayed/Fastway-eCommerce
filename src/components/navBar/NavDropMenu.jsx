import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import NavSearch from "./NavSearch";
import { BsCart3 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";
import { useAuth } from "../../context/AuthContext";

const pages = [
  { name: "Products", href: "/products" },
  { name: "Electronics", href: "/products/electronics" },
  { name: "Jewelery", href: "/products/jewelery" },
  { name: "Women", href: "/products/women's clothing" },
  { name: "Men", href: "/products/men's clothing" },
];

const NavDropMenu = () => {
  const showDropMenu = useSelector((state) => state.ui.dropMenuIsVisible);
  const language = useSelector((state) => state.selection.language);
  const currency = useSelector((state) => state.selection.currency);
  const dispatch = useDispatch();

  const { user, logout } = useAuth();

    const logoutHandler = () => {
      logout();
    };

  const toggleCartHandler = () => {
    dispatch(uiActions.dropMenuToggle());
    dispatch(uiActions.cartToggle());
  };

  const toggleDropMenuHandler = () => {
    dispatch(uiActions.dropMenuToggle());
  };

  const toggleLanguagueHandler = () => {
    dispatch(uiActions.dropMenuToggle());
    dispatch(uiActions.langShowToggle());
  };
  const toggCurrencyHandler = () => {
    dispatch(uiActions.dropMenuToggle());
    dispatch(uiActions.currShowToggle());
  };
  const togglewishListHandler = () => {
    dispatch(uiActions.dropMenuToggle());
    dispatch(uiActions.wishListToggle());
  };
  return (
    <Transition.Root show={showDropMenu} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={toggleDropMenuHandler}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex ">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-500 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-500 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-screen md:w-[450px]  flex-col overflow-y-auto bg-white  shadow-xl">
              <div className="flex justify-between px-4 pt-5 pb-2">
                <div className="flex lg:ml-0">
                  <div className="flex-shrink-0 text-center">
                    <Link
                      to="/"
                      className="items-center justify-center text-lg font-medium"
                    >
                      <strong className="text-4xl text-blue-500 sm:text-5xl baloo ">
                        Fastway
                      </strong>
                      <p className="flow-root text-xs pt-1.5 text-gray-500">
                        <span className="hidden sm:inline-block">
                          Fastet &{" "}
                        </span>{" "}
                        Easiest way to shopping
                      </p>
                    </Link>
                  </div>
                </div>
                <button
                  type="button"
                  className="p-2 mt-2 text-gray-500 outline-none hover:text-secondary"
                  onClick={toggleDropMenuHandler}
                >
                  <span className="sr-only">Close menu</span>
                  <IoCloseCircleOutline
                    className="h-7 w-7 "
                    aria-hidden="true"
                  />
                </button>
              </div>

              <div className="px-4 py-6 space-y-6 border-t border-gray-200">
                <NavSearch />

                {pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <Link
                      to={page.href}
                      onClick={toggleDropMenuHandler}
                      className="block p-2 -m-2 text-base font-medium text-gray-600 rounded-lg hover:bg-primary hover:text-white"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>

              <div className="px-4 py-6 space-y-6 border-t border-gray-400">
                {user ? (
                  <div className="flow-root">
                    <button
                      onClick={logoutHandler}
                      className="block w-full p-2 py-3 text-sm text-center btn active-btn"
                    >
                      Log out
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flow-root">
                      <Link
                        to="/login"
                        onClick={toggleDropMenuHandler}
                        className="block p-2 py-3 text-sm text-center btn active-btn"
                      >
                        Sign in
                      </Link>
                    </div>
                    <div className="flow-root">
                      <Link
                        to="/signup"
                        onClick={toggleDropMenuHandler}
                        className="block p-2 py-3 text-sm text-center btn active-btn"
                      >
                        Create account
                      </Link>
                    </div>
                  </>
                )}

                <Link
                  className="flex items-center w-full text-gray-600 gap-7 hover:text-primary "
                  to="/my-account"
                  onClick={toggleDropMenuHandler}
                >
                  <FaUserCircle className="w-8 h-8 " />

                  <span className="text-base font-medium ">My Account</span>
                </Link>

                <button
                  className="flex items-center w-full text-gray-600 gap-7 hover:text-primary "
                  onClick={toggleCartHandler}
                >
                  <BsCart3 className="w-8 h-8 " />

                  <span className="text-base font-medium ">My cart</span>
                </button>

                <button
                  className="flex items-center w-full gap-6 text-gray-600 hover:text-primary "
                  onClick={togglewishListHandler}
                >
                  <HiOutlineHeart className="h-9 w-9 " />
                  <span className="text-base font-medium ">Wish list</span>
                </button>

                <button
                  className="flex items-center w-full text-gray-600 gap-7 hover:text-primary "
                  onClick={toggleLanguagueHandler}
                >
                  <div className="text-left ">
                    <ReactCountryFlag
                      alt={language}
                      countryCode={language}
                      svg
                      onClick={toggleLanguagueHandler}
                      className="cursor-pointer min-w-[30px] min-h-[30px] rounded-full object-cover"
                    />
                  </div>
                  <span className="text-base font-medium ">Language</span>
                </button>

                <button
                  className="flex items-center w-full gap-6 text-gray-600 hover:text-primary "
                  onClick={toggCurrencyHandler}
                >
                  <span className="text-base font-medium text-left t">
                    {currency}
                  </span>

                  <span className="text-base font-medium ">Currency</span>
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default NavDropMenu;
