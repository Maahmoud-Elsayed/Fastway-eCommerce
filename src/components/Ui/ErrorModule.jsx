import React from 'react'

const ErrorModule = ({children}) => {
  return (
    <div className="my-5 w-full px-4 rounded-md border-l-4 border-red-500 bg-red-50 ">
      <div className="flex justify-between py-3">
        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="self-start ml-3">
            <span className="text-red-600 font-semibold block text-left">
              Error
            </span>
            <p className="text-red-600 mt-1">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ErrorModule