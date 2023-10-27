import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import ConfirmPasswordModal from "./ConfirmPasswordModal";
import { BiError } from "react-icons/bi";
import ReloginModal from "./ReloginModal";
import ErrorModule from "../Ui/ErrorModule";
import { useDispatch } from "react-redux";
import { deleteUserData } from "../../store/cart-actions";

const DeleteAcount = () => {
  const { deleteAcount, reauthenticate, user } = useAuth();
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [showPwModal, setShowPwModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const isProvider = !user?.providerData.some(
    (provider) => provider.providerId === "password"
  );

  const checkProviderHandler = () => {
    if (isProvider) {
      setShowDeleteModal(true);
    } else {
      setShowPwModal(true);
    }
  };
  const closeReloginHandler = () => {
    setIsModalOpen(false);
  };

  const pwSubmitHandler = async (password) => {
    try {
      await reauthenticate(password);
      setShowPwModal(false);
      setShowDeleteModal(true);
    } catch (e) {
      setError(e.code.split("/")[1].replace(/-/g, " "));
      return;
    }
  };

  const deleteAcountHandler = async () => {
    try {
      dispatch(deleteUserData());
      await deleteAcount();
      setError(null);
      setMessage("updated succesfully");
      setShowDeleteModal(false);
    } catch (e) {
      setError(e.code.split("/")[1].replace(/-/g, " "));
      if (e.code === "auth/requires-recent-login") {
        setShowDeleteModal(false);
        setIsModalOpen(true);
        setError(null);
      }
    }
  };
  const closeHandler = () => {
    setShowPwModal(false);
    setError(null);
  };
  return (
    <>
      <div className="flex items-center justify-between p-5">
        <h3 className="text-lg font-medium text-gray-600">Delete account</h3>
        <button
          onClick={checkProviderHandler}
          className="text-white bg-red-600 w-[90px] py-2 rounded-full outline-none hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-red-600 duration-150 active:bg-primary active:ring-primary"
        >
          Delete
        </button>
      </div>
      {showPwModal && (
        <ConfirmPasswordModal
          error={error}
          onClose={closeHandler}
          onSubmit={pwSubmitHandler}
        />
      )}
      {showDeleteModal && (
        <div
          className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50"
          onClick={() => setShowDeleteModal(false)}
        >
          <div
            className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mt-3">
              <div className="mt-2 text-center">
                <h4 className="text-xl font-semibold text-gray-800">
                  Delete account
                </h4>
                <div className="px-4 mt-4 rounded-md bg-amber-50 ">
                  <div className="py-3">
                    <div className="flex">
                      <div>
                        <BiError className="w-6 h-6 rounded-full text-amber-500" />
                      </div>
                      <div className="ml-3 ">
                        <span className="block font-semibold text-left text-amber-600">
                          Warning
                        </span>
                        <p className="mt-1 text-left text-amber-600">
                          After you delete account, it's permanently deleted with all your saved data.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {error && <ErrorModule>{error}</ErrorModule>}
            <div className="items-center gap-2 mt-3 sm:flex">
              <button
                className="w-full mt-2 p-2.5 flex-1 text-gray-800 bg-gray-300 hover:bg-gray-200 rounded-full outline-none"
                onClick={() => {
                  setShowDeleteModal(false);
                  setError(null);
                }}
              >
                Cancel
              </button>
              <button
                className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 hover:bg-red-500  rounded-full outline-none hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-red-600 duration-150 active:bg-primary active:ring-primary"
                onClick={deleteAcountHandler}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && <ReloginModal onClose={closeReloginHandler} />}
    </>
  );
};

export default DeleteAcount;
