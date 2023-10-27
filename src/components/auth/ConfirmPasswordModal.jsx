import React, { useState } from "react";
import ErrorModule from "../Ui/ErrorModule";
import ButtonSpinner from "../Ui/ButtonSpinner";

const ConfirmPasswordModal = ({ error, onClose, onSubmit,loading }) => {
  const [password, setPassword] = useState("");
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-md  w-full max-w-lg "
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-medium mb-4">Confirm Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 input"
        />
        {error && <ErrorModule>{error}</ErrorModule>}
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-200 text-gray-800 w-[90px] py-2 rounded-full"
          >
            Cancel
          </button>
          <button
            onClick={() => onSubmit(password)}
            disabled={loading}
            className=" w-[90px]  flex justify-center items-center gap-2  btn-sec disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            <span>Confirm</span>
            {loading && <ButtonSpinner />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPasswordModal;
