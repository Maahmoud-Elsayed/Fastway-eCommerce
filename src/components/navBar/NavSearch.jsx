import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { useLocation, useNavigate } from "react-router-dom";

const NavSearch = () => {
  const [searchItem, setSearchItem] = useState("");
  const showDropMenu = useSelector((state) => state.ui.dropMenuIsVisible);
  const search = useSelector((state) => state.ui.search);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname === "/products/search") {
      setSearchItem(search ? search : "");
    } else {
      setSearchItem("");
    }
  }, [pathname, search]);

  const seachItemHandler = (e) => {
    e.preventDefault();
    if (searchItem.length === 0) {
      return;
    } else {
      if (showDropMenu) {
        dispatch(uiActions.dropMenuToggle());
      }
      dispatch(uiActions.searchHandler(searchItem));
      navigate("/products/search");
    }
  };

  return (
    <form
      onSubmit={seachItemHandler}
      className="flex w-full max-w-screen-lg mx-auto px-1 py-1 shadow-inner rounded-full border-2 bg-white grow"
    >
      <div className="flex justify-between w-full overflow-hidden">
        <div className="">
          <button
            type="submit"
            className="inline-flex items-center justify-center m-1 p-2 btn active-btn"
          >
            <span className="sr-only">Search</span>

            <BsSearch className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <input
          className="grow block  w-full h-full py-2 px-2 sm:text-sm border-gray-300 rounded-full focus:outline-none focus:none focus:border-transparent"
          type="text"
          placeholder="What are you looking for?"
          aria-label="Search"
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
        />
      </div>
    </form>
  );
};

export default NavSearch;
