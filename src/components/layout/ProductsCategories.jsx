import React from "react";
import { Link } from "react-router-dom";

const ProductsCategories = () => {

  const imageUrls = [
    "https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
    "https://images.unsplash.com/photo-1610384104075-e05c8cf200c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
  ];

  return (
    <div className="container-fixed flex justify-center items-center w-full py-5 lg:py-11 ">
      <div className="w-full md:w-auto grid lg:grid-cols-3 grid-cols-1 gap-6">
        <div className="relative group">
          <img
            className="lg:block hidden object-center object-cover w-full h-full transition-all rounded-l-lg duration-300 filter grayscale hover:grayscale-0"
            src={imageUrls[0]}
            alt="Women"
            loading="lazy"
          />
          <img
            className="lg:hidden md:block hidden object-top object-cover w-full h-96 transition-all rounded-t-lg duration-300 filter grayscale hover:grayscale-0"
            src={imageUrls[0]}
            alt="Women"
            loading="lazy"
          />
          <img
            className="object-top object-cover w-full h-96 md:hidden transition-all rounded-t-lg duration-300 filter grayscale hover:grayscale-0"
            src={imageUrls[0]}
            alt="Women"
            loading="lazy"
          />
          <span className="text-white bottom-6 z-10 absolute left-1/2 transform -translate-x-1/2 text-center font-medium leading-none  w-fit opacity-0 transition-opacity group-hover:opacity-100">
            Women
          </span>
        </div>
        <div className=" lg:px-6 lg:py-0 md:py-16 md:px-24 py-16 shadow-inner px-6 flex flex-col justify-center items-center text-center bg-gray-100">
          <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-10 leading-9 text-gray-800 lg:w-full md:w-7/12 w-full">
            Shop your Favourite Designers
          </h2>
          <p className=" font-medium text-base leading-6 text-gray-600 mt-4 lg:w-full md:w-7/12 w-full">
            We offer a huge colletion of premium clothing that are crafted with
            excellence for our adored customers
          </p>
          <Link to="/products">
            <button className="rounded-full hover:outline-none hover:ring-2 shadow-inner hover:shadow-lg hover:ring-offset-2 hover:ring-yellow-700 hover:bg-yellow-600 text-white text-base leading-4 bg-slate-500 lg:px-10 py-4 lg:w-auto w-72 mt-16">
              Discover More
            </button>
          </Link>
        </div>
        <div className="relative group">
          <img
            className="lg:block hidden object-center h-full object-cover w-full transition-all rounded-r-lg duration-300 filter grayscale hover:grayscale-0"
            src={imageUrls[1]}
            alt="Man"
            loading="lazy"
          />
          <img
            className="lg:hidden md:block hidden object-center object-cover w-full h-96 transition-all rounded-b-lg duration-300 filter grayscale hover:grayscale-0"
            src={imageUrls[1]}
            alt="Man"
            loading="lazy"
          />
          <img
            className="object-center object-cover w-full h-96 md:hidden transition-all rounded-b-lg duration-300 filter grayscale hover:grayscale-0"
            src={imageUrls[1]}
            alt="Man"
            loading="lazy"
          />
          <span className="text-white bottom-6 z-10 absolute left-1/2 transform -translate-x-1/2 text-center font-medium leading-none  w-fit opacity-0 transition-opacity group-hover:opacity-100">
            Men
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductsCategories;
