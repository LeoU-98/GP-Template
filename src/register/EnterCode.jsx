import { ChevronLeftIcon, EnvelopeIcon } from "@heroicons/react/16/solid";
import forgotPassword from "../images/forgotPassword.svg";
import { Link } from "react-router-dom";
import AuthCode from "react-auth-code-input";
import React, { useState } from "react";

function EnterCode() {
  const [result, setResult] = useState();
  const handleOnChange = (res) => {
    setResult(res);
  };
  return (
    <div className="flex flex-col border-[1px] border-gray-300 bg-white xl:flex-row">
      <form className="mx-auto max-w-[524px] basis-1/2 px-10 py-16 xl:mx-0">
        <h3 className="mb-4 text-center text-3xl text-gray-900">
          Check Your Email
        </h3>
        <p className="mb-6 px-2 text-center text-sm text-gray-800">
          Please enter your 6-digit code. Sent to{" "}
          <span className="font-semibold text-gray-900">Leou@Example.com</span>
        </p>

        <AuthCode
          allowedCharacters="numeric"
          onChange={handleOnChange}
          containerClassName=" flex gap-2 justify-center mb-8"
          inputClassName="block p-1 sm:size-12 size-9 text-center sm:text-4xl text-2xl  border-gray-400 outline-none focus-visible:border-lima-500 border-[1px] rounded-lg"
        />

        <button
          type="submit"
          className="mx-auto mb-7 block w-full rounded-lg bg-lima-500 px-10 py-2 text-white outline-none duration-500 hover:bg-black focus:bg-black active:translate-y-1"
        >
          Confirm Code
        </button>
        <div className="flex justify-between">
          <Link
            to="/account/signin"
            className="flex w-fit items-center text-gray-900 duration-300 hover:text-lima-500 focus:outline-lima-500"
          >
            <ChevronLeftIcon className="size-6" />
            Back to Login
          </Link>
          <button
            type="button"
            className="block text-center duration-300 hover:text-lima-500 focus:outline-lima-500"
          >
            Send another code
          </button>
        </div>
      </form>
      <div className="flex basis-1/2 items-center justify-center">
        <img src={forgotPassword} className="size-96" />
      </div>
    </div>
  );
}

export default EnterCode;
