import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [isHovering, setIsHovering] = useState(false);
  const { user, logout } = useAuth();

  const logoutHandler = () => {
    logout();
  };

  let userName = "Dear";

  if (user && user.displayName) {
    if (user.displayName.includes(" ")) {
      userName = user.displayName.split(" ")[0];
    } else {
      userName = user.displayName;
    }
  }

  return (
    <>
      <div className="relative hidden sm:block group ">
        <div
          className="flex items-center justify-center hover:opacity-100 group-hover:visible"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="leading-none text-gray-800">
            <p className="text-base font-medium text-gray-600">
              Hello, <span className="text-xs ">{userName}</span>
            </p>
            <Link
              className="text-sm font-medium text-gray-600 cursor-pointer hover:text-blue-400 "
              to="/my-account"
            >
              My Account
            </Link>
          </div>
          <div
            className={`${
              isHovering ? "visible opacity-100" : "invisible opacity-0"
            } absolute z-10 top-[44px] w-40 min-h-full mb-1 left-1/2 transform -translate-x-1/2 transition duration-200 ease-in-out`}
          >
            <div className=" bg-transparent w-full h-[21px] lg:h-[15px]"></div>
            <div
              className={` bg-white border border-t-0 items-center text-gray-800 text-sm pb-4 pt-3 shadow-md rounded-lg px-1 `}
            >
              <div className="flex flex-col items-center justify-center mx-auto align-middle">
                {!user ? (
                  <>
                    <button className="p-2 mt-1 btn active-btn ">
                      <Link
                        className={`px-3 py-2 text-sm font-medium`}
                        to="/login"
                      >
                        Sign in
                      </Link>
                    </button>
                    <div className="pt-3 text-center">
                      <Link
                        className={`underline hover:text-blue-400 text-xs text-gray-600 font-medium pb-2`}
                        to="/signup"
                      >
                        Create a new user
                      </Link>
                    </div>
                  </>
                ) : (
                  <button
                    onClick={logoutHandler}
                    className="px-3 py-2 mt-1 text-sm font-medium btn active-btn"
                  >
                    Log out
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
