import React, { Fragment } from "react";

import { IoCloseCircleOutline } from "react-icons/io5";
import { BsCheck2 } from "react-icons/bs";
import ReactCountryFlag from "react-country-flag";
import { Dialog, Transition } from "@headlessui/react";

const Selections = (props) => {
  return (
    <Transition.Root show={props.onShow} as={Fragment}>
      <Dialog as="div" className="relative z-50 " onClose={props.onShowHandler}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex ">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-500 transform"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition ease-in-out duration-500 transform"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <Dialog.Panel className="relative m-auto flex w-full h-full md:w-[70%] md:h-[80%] py-5 pl-10  flex-col overflow-y-auto bg-white  shadow-xl ">
              <div className=" flex justify-between align-center mb-3">
                <h2 className="my-5 text-xl">
                  {props.flag ? "Select your language" : "Select your currency"}
                </h2>
                <button
                  className=" text-gray-500 hover:text-secondary outline-none mt-2 mr-2 p-2"
                  onClick={props.onShowHandler}
                >
                  <IoCloseCircleOutline
                    className="w-7 h-7  p-0"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <h3 className="mb-5 text-lg">Suggested for you</h3>
              <div className="">
                <ul className="grid lg:grid-cols-4 text-center gap-4 px-5">
                  {props.suggested.map((country) => (
                    <li key={country.code} className="">
                      <div
                        className="flex justify-between cursor-pointer py-2 pl-3 rounded-lg font-medium text-gray-600 text-sm hover:bg-primary hover:text-white "
                        onClick={(e) => props.onSelect(country.code)}
                      >
                        {props.flag ? (
                          <div className="flex justify-start gap-5 items-center">
                            <ReactCountryFlag
                              countryCode={country.code}
                              svg
                              className="min-w-[25px] min-h-[25px]"
                            />
                            <span>{country.more}</span>
                          </div>
                        ) : (
                          <div className="flex flex-col text-start gap-2">
                            <span className="">{country.more}</span>
                            <span className="">{country.code}</span>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <h3 className="my-5 text-lg">
                {props.flag ? "All languages" : "All currencies"}
              </h3>
              <div className="">
                <ul className="grid lg:grid-cols-4 text-center gap-4 px-5">
                  {props.all.map((country) => {
                    const isSelected = props.selected === country.code;
                    return (
                      <li key={country.code} className="">
                        <div
                          className={` flex justify-between   items-center cursor-pointer py-2 px-3   rounded-lg font-medium text-gray-600 text-sm hover:bg-primary hover:text-white
              ${isSelected ? "bg-primary text-white" : ""} `}
                          onClick={(e) => props.onSelect(country.code)}
                        >
                          {props.flag ? (
                            <div className="flex justify-start gap-5 items-center">
                              <ReactCountryFlag
                                countryCode={country.code}
                                svg
                                className="min-w-[25px] min-h-[25px]"
                              />
                              <span className="">{country.more}</span>
                            </div>
                          ) : (
                            <div
                              className={`flex flex-col text-start gap-2 
                      ${isSelected ? "bg-primary text-white" : ""}`}
                            >
                              <span className="">{country.more}</span>
                              <span className="">{country.code}</span>
                            </div>
                          )}

                          {isSelected && (
                            <BsCheck2
                              className="h-6 w-7 text-white"
                              aria-hidden="true"
                            />
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Selections;
