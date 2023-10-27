import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import MiniCart from "./MiniCart";

const WishListModal = () => {
  const showWishList = useSelector((state) => state.ui.wishListIsVisible);
  const wishListItems = useSelector((state) => state.wishList.items);
  const dispatch = useDispatch();
  const toggleWishListHandler = () => {
    dispatch(uiActions.wishListToggle());
  };
  const goToCartHandler = () => {
    dispatch(uiActions.wishListToggle());
    dispatch(uiActions.cartToggle());
  };

  return (
    <Transition.Root show={showWishList} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={toggleWishListHandler}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className=" fixed inset-y-0 right-0 flex max-w-full ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen md:w-[450px] ">
                  <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Wishlist
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="mt-2 p-2 text-gray-500 hover:text-secondary  outline-none"
                            onClick={toggleWishListHandler}
                          >
                            <span className="sr-only">Close panel</span>
                            <IoCloseCircleOutline
                              className="h-7 w-7 p-0 "
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          {!wishListItems.length && (
                            <p className=" absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                              Your wishlist is empty !
                            </p>
                          )}
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {wishListItems?.map((item) => (
                              <MiniCart
                                key={item.id}
                                cart={false}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                category={item.category}
                                original={item.original}
                                onClose={toggleWishListHandler}
                              />
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <button
                        onClick={goToCartHandler}
                        className=" flex items-center w-full justify-center rounded-full max-w-[402px] mx-auto  px-6 py-3 text-base font-medium text-white btn active-btn"
                      >
                        Go to Cart
                      </button>

                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-primary pl-1"
                            onClick={toggleWishListHandler}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default WishListModal;
