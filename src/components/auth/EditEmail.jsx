
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import ConfirmPasswordModal from "./ConfirmPasswordModal";
import SuccessModule from "../Ui/SuccessModule";

const EditEmail = (props) => {

  const { changeEmail, reauthenticate, user } = useAuth();
const [newEmail, setNewEmail] = useState(user?.email ||"");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

  const isProvider = !user?.providerData.some(
    (provider) => provider.providerId === "password"
  );


  const handleSubmit = async (password) => {
        setLoading(true);
    try {
      await reauthenticate(password);
    } catch (e) {
      setError(e.code.split("/")[1].replace(/-/g, " "));
       setLoading(false);
      return;
    }

    try {
      await changeEmail(newEmail);
      setError(null);
      setMessage("Email updated succesfully");
      setIsModalOpen(false);
       setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e.code);
    }
  };
    const closeHandler = () => {
      setIsModalOpen(false);
      setError(null);
    };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        disabled={isProvider}
        type="text"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        className="w-full px-4 py-2 mt-5 mb-2 input"
      />

      {message && <SuccessModule>{message}</SuccessModule>}
      {isProvider && (
        <div className="flex justify-between w-full p-4 mt-2 rounded-md  bg-amber-50">
          <div className="flex gap-3 sm:items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-amber-500"
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
            <p className="text-amber-600 sm:text-sm">
              Sorry, you are signed in with{" "}
              {user?.providerData[0].providerId.replace(".com", "")}. Before
              attempting to change your email address, please set a password for
              your account,{" "}
              <button
                className="font-medium underline hover:text-amber-700"
                onClick={props.onSetPw}
              >
                Set password?
              </button>
            </p>
          </div>
        </div>
      )}
      <button
        disabled={isProvider}
        onClick={() => setIsModalOpen(true)}
        className=" self-end  w-[90px] mt-4 py-2 btn-sec disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        Save
      </button>

      {/* Render the PasswordModal component */}
      {isModalOpen && (
        <ConfirmPasswordModal
          error={error}
          loading={loading}
          onClose={closeHandler}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};


export default EditEmail