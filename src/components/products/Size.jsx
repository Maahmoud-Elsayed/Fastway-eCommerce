import { useState } from 'react';

const Size = () => {

      const [color, setColor] = useState("Black");
      const [size, setSize] = useState("M");

      const colorOptions = [
        { color: "Black", className: "bg-black", textColor: "text-black" },
        { color: "Red", className: "bg-red-700", textColor: "text-red-700" },
        {
          color: "Purple",
          className: "bg-purple-500",
          textColor: "text-purple-500",
        },
      ];
      const selectedColor = colorOptions.find(
        (option) => option.color === color
      );
      const sizeOptions = ["XS", "S", "M", "L", "XL"];

        const getColor = (value) => {
          setColor(value);
        };

        const getSize = (value) => {
          setSize(value);
        };

  return (
    <>
      <div className="  mt-5">
        <p
          className={`font-semibold text-base leading-4 ${selectedColor.textColor}`}
        >
          {color}
        </p>
        <div className=" flex space-x-2 mt-4">
          {colorOptions.map((option) => (
            <div
              key={option.color}
              tabIndex="0"
              onClick={() => getColor(option.color)}
              className={
                (color === option.color
                  ? "outline-none ring-2 ring-offset-2 ring-primary"
                  : "") +
                " rounded-full cursor-pointer w-8 h-8 " +
                option.className
              }
            ></div>
          ))}
        </div>
      </div>
      <div className=" mt-5 w-full">
        <div className=" flex justify-between">
          <p className="font-semibold text-base leading-4 text-gray-800">
            Size
          </p>
          <p className="cursor-pointer hover:text-primary text-base font-medium leading-4 text-gray-600 underline">
            Size guide
          </p>
        </div>

        {
          <div className=" gap-10 flex flex-wrap md:gap-4 justify-start mt-4">
            {sizeOptions.map((sz) => (
              <div
                key={sz}
                onClick={() => getSize(sz)}
                tabIndex="0"
                className={
                  "font-medium text-base shadow-md leading-4 text-gray-600 border py-3 w-16 text-center cursor-pointer rounded-full hover:bg-primary hover:text-white " +
                  (size === sz ? "bg-primary text-white " : "border-gray-300 ")
                }
              >
                {sz}
              </div>
            ))}
            <div
              tabIndex="0"
              className=" overflow-hidden relative font-medium text-base leading-4 border border-gray-300 text-gray-400 rounded-full shadow-md py-3 w-16 text-center   cursor-not-allowed bg-gray-50 "
            >
              XXL
              <span className=" absolute w-full h-[2px] bg-gray-300 top-1/2 left-0 transform -translate-y-1/2 skew-y-[-32deg] "></span>
            </div>
          </div>
        }
      </div>
      <p className=" mt-4 font-normal text-sm leading-3 text-gray-600 hover:text-primary duration-100 underline cursor-pointer">
        Find the perfect size?
      </p>
    </>
  );
}

export default Size
