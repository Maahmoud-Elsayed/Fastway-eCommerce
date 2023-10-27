import { useDispatch, useSelector } from "react-redux";
import StarRatings from "react-star-ratings";
import { cartActions } from "../../store/cart-slice";
import { wishListActions } from "../../store/wishList-slice";
import Size from "./Size";

const Product = ({ product }) => {

  const dispatch = useDispatch();

  const { id, description, category, title, image, price, rating } = product;
  const discount = id % 2 === 0;
  let discountPercentage = 0;
  let discountedPrice = 0;
  if (discount) {
    discountPercentage = 20;
    discountedPrice = price - price * (discountPercentage / 100);
  }
  const isClothing =
    category === "men's clothing" || category === "women's clothing";

  const wishListItems = useSelector((state) => state.wishList.items);
  const isInWishList = wishListItems.some((item) => item.id === id);

  const itemToAdd = {
    id,
    title,
    image,
    description,
    category,
    price: discount ? discountedPrice : price,
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

  return (
    <div className="container-fixed mt-10">
      <div className=" flex gap-5 md:gap-10 border border-gray-200 flex-col lg:flex-row justify-center items-center p-5 shadow-lg rounded-lg">
        <div className="flex items-center flex-col-reverse md:flex-row gap-2 w-full min-h-full  ">
          <div className="flex flex-row md:flex-col gap-2 pt-1 ">
            <div
              tabIndex={0}
              className=" h-[50px] w-[50px] border border-gray-400 rounded-md cursor-pointer focus:border-none focus:ring-1 focus:ring-primary "
            >
              <img
                className="  w-full  h-full p-3 object-center object-contain "
                src={image}
              />
            </div>
            <div
              tabIndex={0}
              className=" h-[50px] w-[50px] border border-gray-400 rounded-md cursor-pointer focus:border-none focus:ring-1 focus:ring-primary"
            >
              <img
                className="  w-full  h-full p-3 object-center object-contain "
                src={image}
              />
            </div>
            <div
              tabIndex={0}
              className=" h-[50px] w-[50px] border border-gray-400 rounded-md cursor-pointer focus:border-none focus:ring-1 focus:ring-primary"
            >
              <img
                className="  w-full  h-full p-3 object-center object-contain "
                src={image}
              />
            </div>
          </div>
          <div className="my-auto h-[350px]  lg:h-[450px] w-full ">
            <img
              className="  w-full  h-full  object-contain py-5 lg:px-5  "
              src={image}
            />
          </div>
        </div>
        <div className="  relative h-full  w-full grid gap-5 grid-cols-1  bg-white">
          <div className="  flex justify-start items-start flex-col ">
            <h2 className=" lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 font-semibold">
              {title}
            </h2>
            <div className=" flex justify-start items-center mt-4">
              <div className="mb-1">
                <StarRatings
                  rating={rating.rate}
                  starRatedColor="#F59E0B"
                  starEmptyColor="#9CA3AF"
                  starDimension="20px"
                  starSpacing="1px"
                />
              </div>
              <a
                href="#reviews"
                className="  ml-2 font-normal text-sm leading-3 hover:text-primary duration-100 cursor-pointer text-gray-500 underline"
              >
                {rating.count} <span className="italic">reviews</span>
              </a>
            </div>
            <div className=" text-lg font-bold flex gap-2 items-center mt-2 ">
              {discount && (
                <div>
                  <span className="text-green-500 ">&#36;</span>
                  <span className="text-gray-600 ">
                    {discountedPrice.toFixed(2)}
                  </span>
                </div>
              )}
              <span
                className={` ${
                  discount
                    ? "line-through decoration-gray-600 text-gray-400 text-sm"
                    : "text-gray-600"
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
              {discount && (
                <span className="text-white px-1 rounded-full bg-green-500 text-[12px] font-[400]">
                  Save {discountPercentage}%
                </span>
              )}
            </div>
            {isClothing && <Size />}
            <div className="flex  flex-col sm:flex-row w-full gap-3  mt-5">
              <button
                className="  w-full text-base font-medium leading-4 btn active-btn py-4"
                onClick={addItemHandler}
              >
                Add to cart
              </button>
              <button
                className="w-full text-base font-medium leading-4 btn active-btn py-4"
                onClick={WishItemHandler}
              >
                {isInWishList ? "Remove from wishlist" : "Add to Wishlist"}
              </button>
            </div>
            <div className="">
              <h3 className="py-5 text-lg text-gray-600 font-semibold">
                Description
              </h3>
              <p className="text-base leading-normal text-gray-600">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
