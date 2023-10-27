import React from "react";
import { cartActions } from "../../store/cart-slice";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { wishListActions } from "../../store/wishList-slice";
import { Link } from "react-router-dom";

const MiniCart = ({
  id,
  image,
  title,
  price,
  quantity,
  totalPrice,
  cart,
  category,
  original,
  onClose,
}) => {
  const dispatch = useDispatch();

  const discount = id % 2 == 0;

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price:Number(price),
        image,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const removeAllItemHandler = () => {
    if (cart) {
      dispatch(cartActions.removeFullItemFromCart(id));
    } else {
      dispatch(wishListActions.removeItemFromWish(id));
    }
  };

  return (
    <li key={id} className="flex flex-col justify-between sm:flex-row py-6   ">
      <Link
        to={`/products/${category}/${id}`}
        onClick={onClose}
        className=" w-3/5 h-3/5 max-h-[200px] m-auto sm:h-28 sm:w-24 flex  justify-center overflow-hidden rounded-md border border-gray-200  "
      >
        <img src={image} className=" object-contain object-center" />
      </Link>

      <div className="sm:ml-4 gap-2 flex flex-1 flex-col ">
        <div>
          <div className="flex w-full gap-4 justify-between py-4 sm:py-0  text-base font-medium text-gray-900">
            <h3>
              <Link
                className=" hover:text-primary"
                to={`/products/${category}/${id}`}
                onClick={onClose}
              >
                {title}
              </Link>
            </h3>

            <div className="ml-auto flex flex-col gap-1 justify-center text-center shrink-0">
              {quantity > 1 && (
                <span className="">${totalPrice.toFixed(2)}</span>
              )}
              <span
                className={` ${
                  quantity > 1 ? "text-gray-500 italic text-xs" : ""
                }`}
              >
                {quantity > 1
                  ? `( $${price.toFixed(2)} )`
                  : `$${price.toFixed(2)}`}
              </span>
              {!cart && discount && (
                <>
                  <div className="line-through decoration-gray-600  text-gray-500 text-sm">
                    ${original}
                  </div>
                  <div className="text-white px-1 rounded-lg bg-green-500 text-[12px] font-[400]">
                    Save 20%
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div
          className={`${
            !cart ? "gap-14" : ""
          }  flex flex-1 place-items-end justify-between text-sm`}
        >
          {cart ? (
            <div className="flex gap-3 items-center justify-between">
              <button
                className="px-2.5 py-2.5   btn active-btn"
                onClick={() => addItemHandler()}
              >
                <AiOutlinePlus />
              </button>
              <span className="text-gray-600 min-w-[50px] text-center">
                Qty : {quantity}
              </span>
              <button
                className="px-2.5 py-2.5   btn active-btn"
                onClick={() => removeItemHandler()}
              >
                <AiOutlineMinus />
              </button>
            </div>
          ) : (
            <button
              className=" w-full px-2.5 py-2.5 btn active-btn"
              onClick={() => addItemHandler()}
            >
              Add to cart
            </button>
          )}

          <button
            type="button"
            className="font-medium text-red-500 hover:text-primary"
            onClick={removeAllItemHandler}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

export default MiniCart;
