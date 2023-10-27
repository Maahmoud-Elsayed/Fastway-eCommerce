import React from "react";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;

export const action = async (auth, { request }) => {
  const { login, remember } = auth;
  const data = await request.formData();

  const email = data.get("email");
  const password = data.get("password");
  const rememberMe = data.get("rememberMe");
  try {
    await remember(rememberMe);
    const res = await login(email, password);
    return res;
  } catch (e) {
    console.log(e.code);
    return { error: e.code.split("/")[1].replace(/-/g, " ") };
  }
};
