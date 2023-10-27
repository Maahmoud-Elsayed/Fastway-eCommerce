import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import bag from "../../assets/bag.png"
import { useAuth } from "../../context/AuthContext";
import * as Yup from "yup";
import {
  Link,
  useActionData,
  useLocation,
  useNavigate,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { BsEye, BsEyeSlash, BsGithub, BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import ErrorModule from "../Ui/ErrorModule";
import ButtonSpinner from "../Ui/ButtonSpinner";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const data = useActionData();

  const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";

  const { gitHubSignIn, twitterSignIn, googleSignIn, facebookSignIn, user } =
    useAuth();
  const submit = useSubmit();
  const navigation = useNavigation();

  useEffect(() => {
    if (data?.error) {
      setError(data.error);
    }
  }, [data]);

  useEffect(() => {
    if (user) {

        navigate(from, { replace: true });
      }
    
  }, [user]);

  const facebookSignInHandler = async () => {
    try {
      await facebookSignIn();
    } catch (e) {
      setError(e.code.split("/")[1].replace(/-/g, " "));

    }
  };
  const googleSignInHandler = async () => {
    try {
      await googleSignIn();
    } catch (e) {
      setError(e.code.split("/")[1].replace(/-/g, " "));

    }
  };
  const twitterSignInHandler = async () => {
    try {
      await twitterSignIn();
    } catch (e) {
      setError(e.code.split("/")[1].replace(/-/g, " "));

    }
  };
  const gitHubSignInHandler = async () => {
    try {
      await gitHubSignIn();
    } catch (e) {
      setError(e.code.split("/")[1].replace(/-/g, " "));
    }
  };

  const showPwHandler = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is Required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = async (values) => {
    submit(values, { method: "post" });
  };

  return (
    <div className="container-fixed flex items-center justify-center relative my-5 sm:my-20  ">
      <div className="flex max-w-sm w-full lg:max-w-fit   border border-gray-200 rounded-lg shadow-md overflow-hidden p-5 lg:p-0">
        <div className="bg-gray-300 min-h-full w-1/2  justify-center items-center hidden lg:flex">
          <img className="" src={bag} />
        </div>
        <div className="  max-w-sm w-full h-full  text-gray-600 lg:p-5 lg:pb-5 mx-auto  ">
          <div className="text-center">
            <div className="">
              <h3 className="text-gray-600 text-xl  sm:text-3xl my-10 ">
                Login to your account
              </h3>

              {error && <ErrorModule>{error}</ErrorModule>}
            </div>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form>
                <div>
                  <label htmlFor="email" className="font-medium ml-4">
                    Email
                  </label>
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    className="w-full input my-2 px-3 py-2 "
                  />
                </div>
                <div>
                  <label htmlFor="password" className="font-medium ml-4">
                    Password
                  </label>
                  <div className="relative ">
                    <Field
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className="w-full input my-2 px-3 py-2 "
                    />
                    {showPassword ? (
                      <BsEyeSlash
                        className="absolute right-5 top-5 cursor-pointer text-gray-600 hover:text-secondary "
                        onClick={showPwHandler}
                      />
                    ) : (
                      <BsEye
                        className="absolute right-5 top-5 cursor-pointer text-gray-600 hover:text-secondary "
                        onClick={showPwHandler}
                      />
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2 py-2 text-sm">
                  <label
                    htmlFor="rememberMe"
                    className="flex items-center justify-between gap-x-3"
                  >
                    <Field
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      className="checkbox-item peer hidden"
                    />
                    <span className="relative flex w-5 h-5 shadow-sm bg-transparent peer-checked:bg-secondary rounded-full border border-gray-300 ring-offset-2 ring-secondary duration-150 peer-active:ring cursor-pointer">
                      <span className="after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"></span>
                    </span>
                    <p className="cursor-pointer">Remember me</p>
                  </label>

                  <Link
                    to="/reset-password"
                    className="text-center hover:text-primary text-secondary"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  disabled={
                    !(formik.isValid && formik.dirty) ||
                    navigation.state === "submitting"
                  }
                  className="w-full flex justify-center items-center gap-2  mt-4 px-4 py-2 btn active-btn  rounded-full  font-medium   disabled:cursor-not-allowed disabled:bg-gray-400"
                >
                  <span> Sign in </span>
                  {navigation.state === "submitting" && <ButtonSpinner />}
                </button>
              </Form>
            )}
          </Formik>

          <div className="relative my-8">
            <span className="block w-full h-px bg-gray-400"></span>
            <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-3 inset-x-0 mx-auto">
              Or continue with
            </p>
          </div>
          <div className="space-y-4 text-sm font-medium">
            <button
              onClick={facebookSignInHandler}
              className="w-full flex items-center justify-center gap-x-3 py-2.5 border shadow-sm  border-gray-300 rounded-full hover:bg-gray-100 active-btn duration-150 active:bg-primary"
            >
              <ImFacebook2 className=" text-[#4267B2] w-5 h-5" />
              Continue with Facebook
            </button>
            <button
              onClick={googleSignInHandler}
              className="w-full flex items-center justify-center gap-x-3 py-2.5 border shadow-sm  border-gray-300 rounded-full hover:bg-gray-100 active-btn duration-150 active:bg-primary"
            >
              <FcGoogle className="w-5 h-5" />
              Continue with Google
            </button>
            <button
              onClick={twitterSignInHandler}
              className="w-full flex items-center justify-center gap-x-3 py-2.5 border shadow-sm  border-gray-300 rounded-full hover:bg-gray-100 active-btn duration-150 active:bg-primary"
            >
              <BsTwitter className="w-5 h-5 text-blue-400" />
              Continue with Twitter
            </button>
            <button
              onClick={gitHubSignInHandler}
              className="w-full flex items-center justify-center gap-x-3 py-2.5 border shadow-sm  border-gray-300 rounded-full hover:bg-gray-100 active-btn duration-150 active:bg-primary"
            >
              <BsGithub className="w-5 h-5 text-gray-900" />
              Continue with Github
            </button>
            <p className="text-center">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-sm hover:text-primary text-secondary"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
