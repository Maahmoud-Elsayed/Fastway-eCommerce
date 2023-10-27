import React from "react";
import SignupForm from "../components/auth/SignupForm";

const SignupPage = () => {
  return (
    <div>
      <SignupForm />
    </div>
  );
};

export default SignupPage;

export const action =
  
  async (auth,{ request }) => {
    const { signup, changeUserName } = auth;
    const data = await request.formData();

    const email = data.get("email");
    const password = data.get("password");
    const userName = data.get("userName");
    try {
      const res = await signup(email, password);
      await changeUserName(userName);
      return res;
    } catch (e) {
      console.log(e.code);
      return { error: e.code.split("/")[1].replace(/-/g, " ") };
    }
  };
