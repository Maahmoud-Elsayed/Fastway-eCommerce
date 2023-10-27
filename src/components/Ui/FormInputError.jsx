import React from "react";

const FormInputError = (props) => {
  return (
    <div className="my-3 w-full flex justify-between rounded-md ">
      <div className="flex gap-3 sm:items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <p className="text-red-600 sm:text-sm">{props.children}.</p>
      </div>
    </div>
  );
};

export default FormInputError;
