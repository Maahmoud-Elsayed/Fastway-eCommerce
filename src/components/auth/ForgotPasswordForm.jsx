import React, { useState, useEffect } from "react";
import {  useActionData, useNavigation, useSubmit } from "react-router-dom";
import ErrorModule from "../Ui/ErrorModule";
import SuccessModule from "../Ui/SuccessModule";
import ButtonSpinner from "../Ui/ButtonSpinner";


const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [canResend, setCanResend] = useState(true);
  const [remainingTime, setRemainingTime] = useState(10);

  const submit = useSubmit();
  const data = useActionData();
  const navigation = useNavigation();

  const isValid = email && /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCanResend(false);
    submit({email: email}, {method: "POST"});
    setRemainingTime(10);
  };


  useEffect(() => {
    if (data?.error) {
      setCanResend(true);}
    if (data?.message) {
      const timeout = setInterval(() => {
        if (remainingTime === 0) {
          clearInterval(timeout);
          setCanResend(true);
        } else {
          setRemainingTime((prevTime) => prevTime - 1);
        }
      }, 1000);
      return () => clearInterval(timeout);
    }
  }, [data, remainingTime]);

  return (
    <div className="container-fixed py-20">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-4 ml-4"
          >
            Email address:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className=" w-full py-2 px-4 input"
          />
        </div>
        <div className="mb-4">
          {data?.message && <SuccessModule>{data?.message}</SuccessModule>}
          {data?.error && canResend && <ErrorModule>{data?.error}</ErrorModule>}

          <button
            type="submit"
            disabled={
              !canResend || !isValid || navigation.state === "submitting"
            }
            className={`flex justify-center w-[90px] items-center  gap-2 py-2 px-4 btn-sec disabled:bg-gray-400 disabled:cursor-not-allowed`}
          >
            <span>Reset</span>
            {navigation.state === "submitting" && <ButtonSpinner />}
          </button>
          {!canResend && data?.message && (
            <span className="text-gray-500 ml-2 text-sm">
              Resend email in {remainingTime} seconds
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
