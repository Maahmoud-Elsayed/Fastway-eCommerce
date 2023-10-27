import { useState } from "react";
import EditUserName from "./EditUserName";
import { IoIosArrowDown } from "react-icons/io";
import EditEmail from "./EditEmail";
import EditPassword from "./EditPassword";
import DeleteAcount from "./DeleteAcount";
import { useAuth } from "../../context/AuthContext";

const AccountSettings = () => {
  const [openUsername, setOpenUsername] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

  const { user } = useAuth();

    const isProvider = !user?.providerData.some(
      (provider) => provider.providerId === "password"
    );

  const openUsernameHandler = () => {
    setOpenUsername((prevState) => !prevState);
    setOpenEmail(false);
    setOpenPassword(false);
  };
  const openEmailHandler = () => {
    setOpenEmail((prevState) => !prevState);
    setOpenUsername(false);
    setOpenPassword(false);
  };
  const openPasswordHandler = () => {
    setOpenPassword((prevState) => !prevState);
    setOpenUsername(false);
    setOpenEmail(false);
  };

  return (
    <div className="my-20 container-fixed">
      <h2 className="mx-auto my-10 text-2xl font-semibold text-gray-600 w-fit">
        Account settings
      </h2>
      <div className="max-w-2xl mx-auto border border-gray-200 divide-y-2 rounded-lg shadow-md">
        <div className="p-5 ">
          <div className="flex justify-between">
            <h3 className="text-lg font-medium text-gray-600">
              Change user name
            </h3>
            <button
              className="flex items-center justify-center gap-1 text-gray-600 outline-none hover:text-primary"
              onClick={openUsernameHandler}
            >
              <span className="">Edit</span>
              <IoIosArrowDown
                className={
                  "transform " +
                  (openUsername
                    ? "rotate-180 transition duration-300"
                    : "rotate-0 transition duration-300")
                }
              />
            </button>
          </div>
          {openUsername && <EditUserName />}
        </div>
        <div className="p-5">
          <div className="flex justify-between">
            <h3 className="text-lg font-medium text-gray-600 ">Change email</h3>
            <button
              className="flex items-center justify-center gap-1 text-gray-600 outline-none hover:text-primary"
              onClick={openEmailHandler}
            >
              <span>Edit</span>
              <IoIosArrowDown
                className={
                  "transform " +
                  (openEmail
                    ? "rotate-180 transition duration-300"
                    : "rotate-0 transition duration-300")
                }
              />
            </button>
          </div>
          {openEmail && <EditEmail onSetPw={openPasswordHandler} />}
        </div>
        <div className="p-5">
          <div className="flex justify-between">
            <h3 className="text-lg font-medium text-gray-600">
              {isProvider ? "Set" : "Change"} password
            </h3>
            <button
              className="flex items-center justify-center gap-1 text-gray-600 outline-none hover:text-primary"
              onClick={openPasswordHandler}
            >
              <span>Edit</span>
              <IoIosArrowDown
                className={
                  "transform " +
                  (openPassword
                    ? "rotate-180 transition duration-300"
                    : "rotate-0 transition duration-300")
                }
              />
            </button>
          </div>
          {openPassword && <EditPassword />}
        </div>
        <DeleteAcount />
      </div>
    </div>
  );
};

export default AccountSettings;
