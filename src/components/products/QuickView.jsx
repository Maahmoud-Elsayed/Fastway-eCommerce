import React, { Fragment} from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import StarRatings from "react-star-ratings";
import { Dialog, Transition } from "@headlessui/react";
import { cartActions } from "../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { wishListActions } from "../../store/wishList-slice";
import Size from "./Size";

const QuickView = ({
  title,
  rate,
  price,
  image,
  count,
  id,
  discount,
  category,
  description,
  discountedPrice,
  discountPercentage,
  onShow,
  showQuickView,
}) => {

  const dispatch = useDispatch();

    const wishListItems = useSelector((state) => state.wishList.items);

    const isInWishList = wishListItems.some((item) => item.id === id);

  const itemToAdd = {
    id,
    title,
    image,
    description,
    price: discount ? discountedPrice : price,
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
    <Transition.Root show={showQuickView} as={Fragment}>
      <Dialog as="div" className="relative z-50 " onClose={onShow}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex ">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <Dialog.Panel className=" pb-2 relative m-auto flex w-full h-full md:w-[60%] md:h-[80%]   flex-col rounded-xl overflow-y-auto bg-white  shadow-xl ">
              <button
                type="button"
                className=" p-2  text-gray-500 hover:text-secondary outline-none ml-auto mr-2 mt-2"
                onClick={onShow}
              >
                <span className="sr-only">Close panel</span>
                <IoCloseCircleOutline
                  className="h-7 w-7 p-0"
                  aria-hidden="true"
                />
              </button>
              <div className="flex justify-center items-center pb-3 px-10 my-auto">
                <div className="  relative h-full  w-full grid gap-5 grid-cols-1 lg:grid-cols-2 bg-white">
                  <div className="my-auto h-[350px]">
                    <img
                      className="  w-full  h-full p-3 object-center object-contain "
                      src={image}
                    />
                  </div>
                  <div className="  flex justify-start items-start flex-col ">
                    <h2 className=" lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 font-semibold">
                      {title}
                    </h2>
                    <div className=" flex justify-start items-center mt-4">
                      <div className="mb-1">
                        <StarRatings
                          rating={rate}
                          starRatedColor="#F59E0B"
                          starEmptyColor="#9CA3AF"
                          starDimension="20px"
                          starSpacing="1px"
                        />
                      </div>
                      <p className="  ml-2 font-normal text-sm leading-3  text-gray-500 underline">
                        {count} <span className="italic">reviews</span>
                      </p>
                    </div>

                    <div className=" text-lg font-bold flex gap-2 items-center mt-1 ">
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
                            ? "line-through decoration-gray-600 text-gray-400 text-sm"
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
                      {discount && (
                        <span className="text-white px-1 rounded-full bg-green-500 text-[12px] font-[400]">
                          Save {discountPercentage}%
                        </span>
                      )}
                    </div>

                    {category === "men's clothing" ||
                    category === "women's clothing" ? (
                      <Size/>
                      // <>
                      //   <div className="  mt-5">
                      //     <p
                      //       className={`font-semibold text-base leading-4 ${selectedColor.textColor}`}
                      //     >
                      //       {color}
                      //     </p>
                      //     <div className=" flex space-x-2 mt-4">
                      //       {colorOptions.map((option) => (
                      //         <div
                      //           key={option.color}
                      //           tabIndex="0"
                      //           onClick={() => getColor(option.color)}
                      //           className={
                      //             (color === option.color
                      //               ? "outline-none ring-2 ring-offset-2 ring-primary"
                      //               : "") +
                      //             " rounded-full cursor-pointer w-8 h-8 " +
                      //             option.className
                      //           }
                      //         ></div>
                      //       ))}
                      //     </div>
                      //   </div>
                      //   <div className=" mt-5 w-full">
                      //     <div className=" flex justify-between">
                      //       <p className="font-semibold text-base leading-4 text-gray-800">
                      //         Size
                      //       </p>
                      //       <p className="cursor-pointer  font-medium text-base leading-4 text-gray-500 hover:text-primary underline">
                      //         Size guide
                      //       </p>
                      //     </div>

                      //     {
                      //       <div className=" gap-10 flex flex-wrap md:gap-4 justify-start mt-4">
                      //         {sizeOptions.map((sz) => (
                      //           <div
                      //             key={sz}
                      //             onClick={() => getSize(sz)}
                      //             tabIndex="0"
                      //             className={
                      //               "font-medium text-base leading-4 text-gray-800 border py-3 w-16 text-center cursor-pointer rounded-full " +
                      //               (size === sz
                      //                 ? "bg-primary text-white"
                      //                 : "border-gray-200")
                      //             }
                      //           >
                      //             {sz}
                      //           </div>
                      //         ))}
                      //       </div>
                      //     }
                      //   </div>
                      //   <p className=" mt-4 font-normal text-sm leading-3 text-gray-500 hover:text-primary duration-100 underline cursor-pointer">
                      //     Find the perfect size?
                      //   </p>
                      // </>
                    ) : (
                      <div className="pt-4 text-sm">{description}</div>
                    )}

                    <div className="flex flex-col w-full space-y-4 mt-5">
                      <button
                        className=" w-full   py-2 btn active-btn"
                        onClick={addItemHandler}
                      >
                        Add to cart
                      </button>
                      <button
                        onClick={WishItemHandler}
                        className="w-full   py-2 btn active-btn"
                      >
                        {isInWishList
                          ? "Remove from wishlist"
                          : "Add to Wishlist"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default QuickView;
