import React from "react";
import ForgotPasswordForm from "../components/auth/ForgotPasswordForm";

const ResetPasswordPage = () => {
  return <ForgotPasswordForm />;
};

export default ResetPasswordPage;

export const action = async (auth, { request }) => {
  const { resetPassword } = auth;
  const data = await request.formData();

  const email = data.get("email");

  try {
    await resetPassword(email);
    return {
      message:
        "An email with instructions has been sent to your email address.",
    };
  } catch (e) {
    return { error: e.code.split("/")[1].replace(/-/g, " ") };
  }
};
