import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import ConfirmPasswordModal from "./ConfirmPasswordModal";
import SuccessModule from "../Ui/SuccessModule";
import FormInputError from "../Ui/FormInputError";

const EditUserName = () => {
  const { changeUserName, reauthenticate, user } = useAuth();
  const [newUsername, setNewUsername] = useState(user?.displayName || "");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const userNameValid = () => {
    const pattern = /^[a-zA-Z][a-zA-Z0-9]*(?:_[a-zA-Z0-9]+)*_?$/;
    if (newUsername.trim().length < 3 || newUsername.trim().length > 15) {
      setError(
        "User name must be between 3 to 15 characters"
      );
      return
    }
    if (!pattern.test(newUsername)) {
        setError(
          "User name must contain only letters, numbers and can't start with number"
        );
        return
    }
        setError("");
    setIsModalOpen(true);
  };

  const handleSubmit = async (password) => {
          setError("");
    setLoading(true);
    try {
      await reauthenticate(password);
    } catch (e) {
      setError(e.code.split("/")[1].replace(/-/g, " "));
      setLoading(false);
      return;
    }

    try {
      await changeUserName(newUsername);
      setError("");
      setMessage("Username updated succesfully");
      setIsModalOpen(false);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e.code);
    }
  };

  const closeHandler = () => {
    setIsModalOpen(false);
    setError("");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        type="text"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
        className="w-full px-4 py-2 mt-5 mb-2 input"
      />
      {error && !isModalOpen && (
        <FormInputError>{error}</FormInputError>
      )}
      {message && <SuccessModule>{message}</SuccessModule>}
      <button
        onClick={userNameValid}
        disabled={
          newUsername === user?.displayName || newUsername.trim().length === 0
        }
        className="self-end w-[90px] mt-4 py-2 btn-sec disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        Save
      </button>

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

export default EditUserName;
