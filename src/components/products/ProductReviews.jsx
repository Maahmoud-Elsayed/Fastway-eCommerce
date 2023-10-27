import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { IoIosArrowDown } from "react-icons/io";

const ProductReviews = ({ product }) => {
  const [menu, setMenu] = useState(true);
  const [menu1, setMenu1] = useState(false);
  const { image } = product;
  return (
    <div
      className="mt-16 py-10 flex justify-center items-center bg-gray-100"
      id="reviews"
    >
      <div className="  flex flex-col justify-start items-start w-full">
        <div className=" container-fixed flex justify-start items-start">
          <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
            Reviews
          </p>
        </div>
        <div className="bg-gray-100 w-full  mt-8 pb-6 ">
          <div className="container-fixed">
            <div className="px-5 flex justify-start items-start flex-col bg-gray-100">
              <div className="flex my-6 w-full justify-between ">
                <div className=" flex justify-start items-center flex-row space-x-2.5">
                  <div>
                    <img
                      src="https://i.ibb.co/QcqyrVG/Mask-Group.png"
                      alt="girl-avatar"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start space-y-2">
                    <p className="text-base font-medium leading-none text-gray-800">
                      Anna Smith
                    </p>
                    <p className="text-sm leading-none text-gray-600">
                      14 July 2021
                    </p>
                  </div>
                </div>

                <StarRatings
                  rating={3.5}
                  starRatedColor="#F59E0B"
                  starEmptyColor="#9CA3AF"
                  starDimension="20px"
                  starSpacing="1px"
                />
              </div>

              <div className="flex flex-col md:flex-row justify-between w-full bg-gray-100 ">
                <div className="flex flex-row justify-between items-center ">
                  <p className="text-lg  font-medium leading-normal ">
                    Beautiful addition to the theme
                  </p>
                  <button
                    onClick={() => setMenu(!menu)}
                    className="ml-4 md:hidden"
                  >
                    <IoIosArrowDown
                      className={
                        "transform " + (menu ? "rotate-180" : "rotate-0")
                      }
                    />
                  </button>
                </div>
              </div>
              {/* className={"md:block " + (menu1 ? "block" : "hidden")} */}
              <div
                className={
                  "md:block bg-gray-100 " + (menu ? "block" : "hidden")
                }
              >
                <p className="mt-3 text-base leading-normal text-gray-600 w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sed purus nec diam mattis varius. Aliquam ultrices
                  pellentesque sapien, sed congue mi iaculis eget. Duis quis
                  tellus vel ex aliquet dictum quis eu lectus.
                </p>
                <div className=" mt-6 flex justify-start items-start flex-wrap  gap-2">
                  <div className="h-[100px] w-[90px] p-4 border border-gray-300 cursor-pointer rounded-lg bg-white">
                    <img
                      className="object-contain object-center h-full w-full"
                      src={image}
                    />
                  </div>
                  <div className="h-[100px] w-[90px] p-4 border border-gray-300 cursor-pointer rounded-lg bg-white">
                    <img
                      className="object-contain object-center h-full w-full"
                      src={image}
                    />
                  </div>
                  <div className="h-[100px] w-[90px] p-4 border border-gray-300 cursor-pointer rounded-lg bg-white">
                    <img
                      className="object-contain object-center h-full w-full"
                      src={image}
                    />
                  </div>
                  <div className="h-[100px] w-[90px] p-4 border border-gray-300 cursor-pointer rounded-lg bg-white">
                    <img
                      className="object-contain object-center h-full w-full"
                      src={image}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-start items-start flex-col bg-gray-100  pt-8">
                <div className="my-6 flex justify-between w-full">
                  <div className=" flex justify-start items-center flex-row space-x-2.5">
                    <div className="">
                      <img
                        src="https://i.ibb.co/RCTGZTc/Mask-Group-1.png"
                        alt="girl-avatar"
                      />
                    </div>
                    <div className="flex flex-col justify-start items-start space-y-2">
                      <p className="text-base font-medium leading-none text-gray-800">
                        James
                      </p>
                      <p className="text-sm leading-none text-gray-600">
                        23 June 2021
                      </p>
                    </div>
                  </div>
                  <StarRatings
                    rating={4.5}
                    starRatedColor="#F59E0B"
                    starEmptyColor="#9CA3AF"
                    starDimension="20px"
                    starSpacing="1px"
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between w-full bg-gray-100">
                  <div className="flex flex-row justify-between items-center bg-gray-100">
                    <p className="text-lg  font-medium leading-normal text-gray-800">
                      Comfortable and minimal, just how I like it!
                    </p>
                    <button
                      onClick={() => setMenu1(!menu1)}
                      className="ml-4 md:hidden"
                    >
                      <IoIosArrowDown
                        className={
                          "transform " + (menu1 ? "rotate-180" : "rotate-0")
                        }
                      />
                    </button>
                  </div>
                </div>
                <div
                  className={
                    "md:block bg-gray-100 " + (menu1 ? "block" : "hidden")
                  }
                >
                  <p className="mt-3 text-base leading-normal text-gray-600 w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sed purus nec diam mattis varius. Aliquam ultrices
                    pellentesque sapien, sed congue mi iaculis eget. Duis quis
                    tellus vel ex aliquet dictum quis eu lectus.
                  </p>
                  <div className="mt-6 flex gap-2 justify-start items-start  flex-wrap">
                    <div className="h-[100px] w-[90px] p-4 border border-gray-300 cursor-pointer rounded-lg bg-white">
                      <img
                        className="object-contain object-center h-full w-full bg-white"
                        src={image}
                      />
                    </div>
                    <div className="h-[100px] w-[90px] p-4 border border-gray-300 cursor-pointer rounded-lg bg-white ">
                      <img
                        className="object-contain object-center h-full w-full"
                        src={image}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
