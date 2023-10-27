import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import bag from "../../assets/bag.png";
import * as Yup from "yup";
import { Link, useFetcher, useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import FormInputError from "../Ui/FormInputError";
import { useAuth } from "../../context/AuthContext";
import ErrorModule from "../Ui/ErrorModule";
import ButtonSpinner from "../Ui/ButtonSpinner";

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const fetcher = useFetcher();
  const { data, state, submit } = fetcher;

  const navigate = useNavigate();

  const { user } = useAuth();

  useEffect(() => {
    if (data?.error) {
      setError(data.error);
    }
  }, [data]);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const showPwHandler = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    userName: Yup.string()
      .min(3, "User name must be at least 3 characters")
      .max(15, "User name must be 15 characters or less")
      .matches(
        /^[a-zA-Z][a-zA-Z0-9]*(?:_[a-zA-Z0-9]+)*_?$/,
        "User name must contain only letters, numbers and can't start with number"
      )
      .required("User name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .max(15, "Must be 15 characters or less")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&.*_+=<>-]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter and one number"
      )
      .required("New password is required"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });

  const onSubmit = async (values) => {
    setError("");
    submit(values, { method: "post", action: "/signup" });
  };

  return (
    <div className="relative flex items-center justify-center my-5 container-fixed sm:my-20 ">
      <div className="flex   border border-gray-200 rounded-lg shadow-md overflow-hidden p-5 lg:p-0 lg:max-w-[844px]">
        <div className="items-center justify-center hidden w-1/2 min-h-full bg-gray-300 lg:flex">
          <img className="" src={bag} />
        </div>
        <div className="w-full h-full max-w-sm mx-auto text-gray-600  lg:p-5 lg:pb-5">
          <div className="text-center">
            <div className="">
              <h3 className="my-10 text-xl text-gray-600 sm:text-3xl ">
                Sign up
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
                  <label htmlFor="userName" className="ml-4 font-medium">
                    User name
                  </label>
                  <Field
                    type="text"
                    id="userName"
                    name="userName"
                    className={`w-full input my-2 px-3 py-2 ${
                      formik.touched.userName && formik.errors.userName
                        ? "border-red-500 focus:border-red-500"
                        : ""
                    }`}
                  />
                  <ErrorMessage name="userName" component={FormInputError} />
                </div>
                <div>
                  <label htmlFor="email" className="ml-4 font-medium">
                    Email
                  </label>
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    className={`w-full input  my-2 px-3 py-2 ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-500 focus:border-red-500"
                        : ""
                    }`}
                  />
                  <ErrorMessage name="email" component={FormInputError} />
                </div>
                <div>
                  <label htmlFor="password" className="ml-4 font-medium">
                    Password
                  </label>
                  <div className="relative ">
                    <Field
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className={`w-full input  my-2 px-3 py-2 ${
                        formik.touched.password && formik.errors.password
                          ? "border-red-500 focus:border-red-500"
                          : ""
                      }`}
                    />
                    {showPassword ? (
                      <BsEyeSlash
                        className="absolute text-gray-600 cursor-pointer right-5 top-5 hover:text-secondary "
                        onClick={showPwHandler}
                      />
                    ) : (
                      <BsEye
                        className="absolute text-gray-600 cursor-pointer right-5 top-5 hover:text-secondary "
                        onClick={showPwHandler}
                      />
                    )}
                  </div>
                  <ErrorMessage name="password" component={FormInputError} />
                </div>
                <div>
                  <label htmlFor="password" className="ml-4 font-medium">
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className={`w-full input  my-2 px-3 py-2 ${
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                        ? "border-red-500 focus:border-red-500"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component={FormInputError}
                  />
                </div>
                <button
                  type="submit"
                  disabled={
                    !(formik.isValid && formik.dirty) || state === "submitting"
                  }
                  className="flex items-center justify-center w-full gap-2 px-4 py-2 mt-4 btn active-btn disabled:cursor-not-allowed disabled:bg-gray-400"
                >
                  <span> Sign up </span>
                  {state === "submitting" && <ButtonSpinner />}
                </button>
              </Form>
            )}
          </Formik>
          <p className="mt-5 text-center">
            Allready have account?{" "}
            <Link
              to="/login"
              className="text-sm font-medium hover:text-primary text-secondary "
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
