

import { useSelector } from "react-redux";

const CheckoutItems = () => {

    const cartTotalPrice = useSelector((state) => state.cart.totalPrice);
    const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);


  return (
    <div className="overflow-y-hidden ">
      <div className="flex justify-center items-center container-fixed lg:py-16 md:py-12 py-9 ">
        <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
          <div className="flex w-full  flex-col justify-start items-start">
            <div>
              <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                Check out
              </p>
            </div>
            <div className="mt-2"></div>
            <div className="mt-12">
              <p className="text-xl font-semibold leading-5 text-gray-800">
                Shipping Details
              </p>
            </div>
            <div className="mt-16 flex flex-col justify-start items-start w-full space-y-4">
              <label className="ml-4" htmlFor="firstName">
                First Name
              </label>
              <input
                id="firstName"
                className="px-2 input py-3 w-full"
                type="text"
              />

              <label className="ml-4" htmlFor="lastName">
                Last Name
              </label>
              <input
                id="lastName"
                className="px-2 input py-3 w-full"
                type="text"
              />

              <label className="ml-4" htmlFor="address">
                Address
              </label>
              <input
                id="address"
                className="px-2 input py-3 w-full"
                type="text"
              />

              <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                <div className="w-full space-y-4">
                  <label className="ml-4" htmlFor="city">
                    City
                  </label>
                  <input
                    id="city"
                    className="input px-2 py-3 w-full"
                    type="text"
                  />
                </div>
                <div className="w-full space-y-4">
                  <label className="ml-4" htmlFor="region">
                    Region
                  </label>
                  <input
                    id="region"
                    className="input px-2 py-3 w-full"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                <div className="w-full space-y-4">
                  <label className="ml-4 " htmlFor="country">
                    Country
                  </label>
                  <input
                    id="country"
                    className="input px-2 py-3 w-full"
                    type="text"
                  />
                </div>
                <div className="w-full space-y-4">
                  <label className="ml-4" htmlFor="zipCode">
                    Zip Code
                  </label>
                  <input
                    id="zipCode"
                    className="input px-2 py-3 w-full"
                    type="text"
                  />
                </div>
              </div>

              <label className="ml-4" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                className="input px-2 py-3 w-full"
                type="text"
              />
            </div>

            <button className=" mt-8 text-base font-medium  leading-4  py-4 w-full md:w-4/12 lg:w-full btn  rounded-full text-center active-btn">
              Proceed to payment
            </button>
          </div>
          <div className="flex flex-col justify-start items-start bg-gray-100 shadow-inner rounded-lg w-full p-6 md:p-14">
            <div>
              <h1 className="text-2xl font-semibold leading-6 text-gray-800">
                Order Summary
              </h1>
            </div>
            <div className="flex mt-7 flex-col items-end w-full space-y-6">
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Total items</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  {cartTotalQuantity}
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Price</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  $ {cartTotalPrice ? Number(cartTotalPrice).toFixed(2) : 0}
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">
                  Shipping charges
                </p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  {cartTotalQuantity ? "$90" : "$0"}
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Tax and Fees </p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  {cartTotalQuantity ? "$50" : "$0"}
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full items-center mt-32">
              <p className="text-xl font-semibold leading-4 text-gray-800">
                Total Price
              </p>
              <p className="text-lg font-semibold leading-4 text-gray-800">
                {cartTotalQuantity
                  ? `$${(Number(cartTotalPrice) + 90 + 50).toFixed(2)}`
                  : "$0"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default CheckoutItems;