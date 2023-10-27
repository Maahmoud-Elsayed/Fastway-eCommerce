import React from 'react'
import { useAuth } from "../../context/AuthContext";

const ReloginModal = ({ onClose }) => {
    const { logout } = useAuth();
    const reLoginHandler=()=>{
logout()
onClose()
    }
  return (
    <div
      className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="w-full p-6 bg-white rounded-lg shadow-md md:w-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-amber-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="px-4 py-3 mt-2 rounded-md bg-amber-50">
          <p className="text-amber-600">
            Important: Please note that To ensure the security of your account,
            please log in again before attempting any changes to your account.
          </p>
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-200 text-gray-800 w-[90px] py-2 rounded-full"
          >
            Cancel
          </button>
          <button
            onClick={reLoginHandler}
            className=" py-2 rounded-full w-[90px] btn-sec"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};


export default ReloginModal;