import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { cartActions } from "../../store/cart-slice";
import { BsFillEyeFill, BsFillHeartFill } from "react-icons/bs";
import QuickView from "./QuickView";
import { wishListActions } from "../../store/wishList-slice";

const Card = ({
  title,
  rate,
  price,
  image,
  count,
  id,
  discount,
  category,
  description,
}) => {
  const [view, setView] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const wishListItems = useSelector((state) => state.wishList.items);
  const isInWishList = wishListItems.some((item) => item.id === id);
  const dispatch = useDispatch();

  let discountPercentage = 0;
  let discountedPrice = 0;
  if (discount) {
    discountPercentage = 20;
    discountedPrice = price - price * (discountPercentage / 100);
  }

  const itemToAdd = {
    id,
    title,
    image,
    description,
    category,
    price: discount ? discountedPrice : Number(price),
    original: price,
  };
  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart(itemToAdd));
  };

  const WishItemHandler = () => {
    if (isInWishList) {
      dispatch(wishListActions.removeItemFromWish(id));
    } else {
      dispatch(wishListActions.addItemToWish(itemToAdd));
    }
  };
  const showQuickViewHandler = () => {
    setShowQuickView((prevState) => !prevState);
  };
  return (
    <>
      <div
        className="relative flex flex-col max-w-sm overflow-hidden duration-300 ease-in-out bg-white border border-gray-200 shadow-md rounded-3xl sm:hover:scale-110 "
        onMouseEnter={() => setView(true)}
        onMouseLeave={() => setView(false)}
      >
        {discount && (
          <div className="absolute top-0 right-0 w-16 h-16">
            <div className="absolute transform rotate-45 gradient-main shadow text-center  text-sm text-white py-1 right-[-35px] top-[32px] w-[170px] z-40 ">
              {discountPercentage}% OFF
            </div>
          </div>
        )}
        <div className="w-full overflow-hidden rounded-t-lg " to={"#"}>
          <div className="relative w-full h-40 p-3 ">
            <img
              className="object-contain object-center w-full h-full m-auto "
              src={image}
              loading="lazy"
            />

            <div className={view ? "block" : "hidden"}>
              <Link
                className="absolute top-0 left-0 z-20 items-center w-full h-full bg-black opacity-10 "
                to={`/products/${category}/${id}`}
              ></Link>
              <button
                className="absolute z-30 p-2 transform -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer bg-slate-300 text-slate-500 hover:text-secondary top-1/2 left-1/2 "
                onClick={showQuickViewHandler}
              >
                <BsFillEyeFill className="w-6 h-6 " />
              </button>
            </div>
          </div>
        </div>
        <Link
          to={`/products/${category}/${id}`}
          className="flex items-center justify-center text-center grow"
        >
          <h5 className="p-2 font-semibold tracking-tight text-gray-500 hover:text-primary">
            {title}
          </h5>
        </Link>
        <div className="px-5 pb-5 ">
          <div className="flex items-center ">
            <div className="flex flex-col items-center justify-between w-full gap-1 pb-1 sm:flex-row">
              <StarRatings
                rating={rate}
                starRatedColor="#F59E0B"
                starEmptyColor="#9CA3AF"
                starDimension="20px"
                starSpacing="1px"
              />
              <div>
                <span className="bg-slate-300 text-blue-700 text-xs font-semibold w-fit  px-2.5 py-0.5 rounded mt-1">
                  {rate}
                </span>{" "}
                <span className="text-[12px] text-gray-500 font-semibold mt-1 ">
                  {count}
                </span>
                <span className="text-[12px] italic text-gray-500 font-semibold mt-1">
                  {" "}
                  reviews
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2 pb-1 text-lg font-bold ">
              {discount && (
                <div>
                  <span className="text-green-500 ">&#36;</span>
                  <span className="text-gray-500 ">
                    {discountedPrice.toFixed(2)}
                  </span>
                </div>
              )}
              <span
                className={` ${
                  discount
                    ? "line-through decoration-gray-600  text-gray-500 text-sm"
                    : "text-gray-500"
                }`}
              >
                <span
                  className={` ${
                    discount ? " text-gray-400" : "text-green-500"
                  }`}
                >
                  &#36;
                </span>
                {price}
              </span>
            </div>
            <div className="flex items-center justify-between w-full gap-2">
              <button
                className=" btn font-medium text-sm px-5 py-2.5 text-center active:bg-primary active:ring-primary  grow "
                onClick={addItemHandler}
              >
                Add to cart
              </button>
              <button
                className={` rounded-full bg-slate-300 h-11 w-11  duration-150 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-yellow-700  active:bg-secondary active:text-white flex justify-center items-center ${
                  isInWishList ? "text-secondary" : "text-slate-500"
                } `}
                onClick={WishItemHandler}
              >
                <BsFillHeartFill className="mt-1 w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <QuickView
        showQuickView={showQuickView}
        onShow={showQuickViewHandler}
        id={id}
        description={description}
        category={category}
        title={title}
        image={image}
        price={price}
        discount={discount}
        discountedPrice={discountedPrice}
        discountPercentage={discountPercentage}
        rate={rate}
        count={count}
      />
    </>
  );
};

export default Card;
