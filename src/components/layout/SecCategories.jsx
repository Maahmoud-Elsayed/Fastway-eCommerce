import React from "react";
import { Link } from "react-router-dom";
import { GiBeveledStar } from "react-icons/gi";

const SecCategories = () => {

  const imageUrls = [
    'https://images.unsplash.com/photo-1625899845678-3fad6a4a1846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
    'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
  ];

  return (
    <div className="container-fixed flex justify-center items-center py-10 ">
      <div className="2xl:mx-auto 2xl:container 2xl:px-0 w-full">
        <div className="flex flex-col jusitfy-center items-center">
          <div className="flex flex-col justify-center items-center mb-10">
            <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 mb-5 text-gray-800">
              Shop By Category
            </h1>
            <div className="flex gap-5 justify-center items-center my-2">
              <GiBeveledStar className="  w-6 h-6 text-secondary" />
              <p className="text-xl leading-5 text-gray-600">
                2023 Trendsetters
              </p>
              <GiBeveledStar className="  w-6 h-6 text-secondary" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <div className="relative group flex justify-center items-center h-96 md:h-full w-full">
              <img
                className="object-center rounded-lg object-cover h-full w-full"
                src={imageUrls[0]}
                loading="lazy"
              />
              <Link
                to="/products/women's clothing"
                className="bg-slate-500 hover:bg-yellow-600 hover:outline-none hover:ring-2 shadow-inner hover:shadow-lg hover:ring-offset-2 hover:ring-yellow-700 text-white rounded-full bottom-4 z-10 absolute left-1/2 transform -translate-x-1/2 text-center font-medium leading-none py-3 w-36"
              >
                Women
              </Link>
              <div className="absolute opacity-0 rounded-lg group-hover:opacity-100 transition duration-500 bottom-0 py-6 z-0 px-20 h-full w-full bg-white bg-opacity-20" />
            </div>

            <div className="grid grid-rows-2 gap-6 mt-4 md:mt-0">
              <div className="relative group justify-center items-center h-full w-full">
                <img
                  className="object-center rounded-lg object-cover h-full w-full"
                  src={imageUrls[1]}
                  loading="lazy"
                />
                <Link
                  to="/products/electronics"
                  className="bg-slate-500 hover:bg-yellow-600 hover:outline-none hover:ring-2 shadow-inner hover:shadow-lg hover:ring-offset-2 hover:ring-yellow-700 text-white rounded-full bottom-4 z-10 absolute left-1/2 transform -translate-x-1/2 text-center font-medium leading-none py-3 w-36"
                >
                  Electronics
                </Link>
                <div className="absolute opacity-0 rounded-lg group-hover:opacity-100 transition duration-500 bottom-0 py-6 z-0 px-20 h-full w-full bg-white bg-opacity-20" />
              </div>

              <div className="relative group justify-center items-center h-full w-full">
                <img
                  className="object-center rounded-lg object-cover h-full w-full"
                  src={imageUrls[2]}
                  loading="lazy"
                />
                <Link
                  to="/products/men's clothing"
                  className="bg-slate-500 hover:bg-yellow-600 hover:outline-none hover:ring-2 shadow-inner hover:shadow-lg hover:ring-offset-2 hover:ring-yellow-700 text-white rounded-full bottom-4 z-10 absolute left-1/2 transform -translate-x-1/2 text-center font-medium leading-none py-3 w-36"
                >
                  Men
                </Link>
                <div className="absolute opacity-0 rounded-lg group-hover:opacity-100 transition duration-500 bottom-0 py-6 z-0 px-20 h-full w-full bg-white bg-opacity-20" />
              </div>
            </div>

            <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
              <img
                className="object-center rounded-lg object-cover h-full w-full"
                src={imageUrls[3]}
                loading="lazy"
              />
              <Link
                to="/products/jewelery"
                className="bg-slate-500 hover:bg-yellow-600 hover:outline-none hover:ring-2 shadow-inner hover:shadow-lg hover:ring-offset-2 hover:ring-yellow-700 text-white rounded-full bottom-4 z-10 absolute left-1/2 transform -translate-x-1/2 text-center font-medium leading-none py-3 w-36"
              >
                Jewelery
              </Link>
              <div className="absolute opacity-0 rounded-lg group-hover:opacity-100 transition duration-500 bottom-0 py-6 z-0 px-20 h-full w-full bg-white bg-opacity-20" />
            </div>

            <div className="relative group flex justify-center items-center h-96 w-full mt-4 md:hidden md:mt-8 lg:hidden">
              <img
                className="object-center object-cover rounded-lg h-full w-full hidden md:block"
                src={imageUrls[3]}
                loading="lazy"
              />
              <img
                className="object-center object-cover rounded-lg h-full w-full md:hidden"
                src={imageUrls[3]}
                loading="lazy"
              />
              <Link
                to="/products/jewelery"
                className="bg-slate-500 hover:bg-yellow-600 hover:outline-none hover:ring-2 shadow-inner hover:shadow-lg hover:ring-offset-2 hover:ring-yellow-700 text-white rounded-full bottom-4 z-10 absolute left-1/2 transform -translate-x-1/2 text-center font-medium leading-none py-3 w-36"
              >
                Jewelery
              </Link>
              <div className="absolute opacity-0 rounded-lg group-hover:opacity-100 transition duration-500 bottom-0 py-6 z-0 px-20 h-full w-full bg-white bg-opacity-20" />
            </div>
          </div>
          <div className="relative group hidden md:flex justify-center items-center h-96 w-full mt-4 md:mt-8 lg:hidden">
            <img
              className="object-center object-cover rounded-lg h-full w-full hidden md:block"
              src={imageUrls[3]}
              loading="lazy"
            />
            <img
              className="object-center object-cover rounded-lg h-full w-full sm:hidden"
              src={imageUrls[3]}
              loading="lazy"
            />
            <Link
              to="/products/jewelery"
              className="bg-slate-500 hover:bg-yellow-600 hover:outline-none hover:ring-2 shadow-inner hover:shadow-lg hover:ring-offset-2 hover:ring-yellow-700 text-white rounded-full bottom-4 z-10 absolute left-1/2 transform -translate-x-1/2 text-center font-medium leading-none py-3 w-36"
            >
              Jewelery
            </Link>
            <div className="absolute opacity-0 rounded-lg group-hover:opacity-100 transition duration-500 bottom-0 py-6 z-0 px-20 h-full w-full bg-white bg-opacity-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecCategories;
