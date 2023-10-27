import React from "react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import FormInputError from "../Ui/FormInputError";
import ErrorModule from "../Ui/ErrorModule";
import SuccessModule from "../Ui/SuccessModule";
import ReloginModal from "./ReloginModal";
import ButtonSpinner from "../Ui/ButtonSpinner";

const EditPassword = () => {
  const { changePassword, reauthenticate, user } = useAuth();
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isProvider = !user?.providerData.some(
    (provider) => provider.providerId === "password"
  );

      const closeHandler = () => {
        setIsModalOpen(false);
      };

  const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    currentPassword: isProvider
      ? Yup.string()
      : Yup.string().required("Current password is required"),
    newPassword: Yup.string()
      .max(15, "Must be 15 characters or less")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&.*_+=<>-]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter and one number"
      )
      .required("New password is required"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("newPassword")], "Passwords must match"),
  });

  const onSubmit = async (values, submitProps) => {
    if (!isProvider) {
      try {
        await reauthenticate(values.currentPassword);
      } catch (e) {
        setError(e.code.split("/")[1].replace(/-/g, " "));
        submitProps.setSubmitting(false);
        return;
      }
    }

    try {
      await changePassword(values.newPassword);
      setError(null);
      submitProps.resetForm();
      setMessage("Password updated succesfull..");
      submitProps.setSubmitting(false);
    } catch (e) {
      setError(e.code.split("/")[1].replace(/-/g, " "));
      submitProps.setSubmitting(false);
      if (e.code === "auth/requires-recent-login") {
        setIsModalOpen(true);
      }
    }
  };

  return (
    <div className="mt-5">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {(formik) => (
          <Form>
            {!isProvider && (
              <div className="w-full">
                <label htmlFor="currentPassword" className="font-light ">
                  Current password
                </label>
                <Field
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  className="w-full px-4 py-2 my-2 input"
                />
                <ErrorMessage
                  name="currentPassword"
                  component={FormInputError}
                />
              </div>
            )}

            <div>
              <label htmlFor="newPassword" className="ml-4 font-light">
                New password
              </label>
              <Field
                type="password"
                id="newPassword"
                name="newPassword"
                className="w-full px-4 py-2 my-2 input"
              />
              <ErrorMessage name="newPassword" component={FormInputError} />
            </div>
            <div>
              <label htmlFor="password" className="ml-4 font-light">
                Confirm password
              </label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full px-3 py-2 my-2 input"
              />
              <ErrorMessage name="confirmPassword" component={FormInputError} />
            </div>
            {error && <ErrorModule>{error}</ErrorModule>}
            {message && <SuccessModule>{message}</SuccessModule>}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!formik.dirty || formik.isSubmitting}
                className="flex justify-center  items-center gap-2 self-end w-[90px] mt-4 py-2  btn-sec disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                <span>Save</span>
                {formik.isSubmitting && <ButtonSpinner />}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {isModalOpen && <ReloginModal onClose={closeHandler} />}
    </div>
  );
};

export default EditPassword;
