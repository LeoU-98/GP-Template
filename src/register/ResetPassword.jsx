import {
  ChevronLeftIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/16/solid";

import forgotPassword from "../images/forgotPassword.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import propTypes from "prop-types";

function ResetPassword() {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  return (
    <div className="flex flex-col border-[1px] border-gray-300 bg-white xl:flex-row">
      <form className="max-w-[524px] basis-1/2 px-10 py-12 md:mx-auto md:w-[524px] xl:mx-0">
        <h3 className="mb-8 text-center text-2xl text-gray-900">
          Reset Password
        </h3>

        <label className="mb-4 block">
          Password
          <div className="relative flex overflow-hidden rounded-r-lg p-[1px]">
            <input
              type={showPassword.password ? "text" : "password"}
              name="password"
              className="w-full rounded-lg px-2 py-1 outline-none ring-1 ring-gray-400 focus:ring-lima-500"
            />
            <ShowPasswordButton
              showPassword={showPassword.password}
              onClick={() =>
                setShowPassword({
                  ...showPassword,
                  password: !showPassword.password,
                })
              }
            />
          </div>
        </label>
        <label className="mb-6 block">
          Confirm Password
          <div className="relative flex overflow-hidden rounded-r-lg p-[1px]">
            <input
              type={showPassword.confirmPassword ? "text" : "password"}
              name="confirmPassword"
              className="w-full rounded-lg px-2 py-1 outline-none ring-1 ring-gray-400 focus:ring-lima-500"
            />
            <ShowPasswordButton
              showPassword={showPassword.confirmPassword}
              onClick={() =>
                setShowPassword({
                  ...showPassword,
                  confirmPassword: !showPassword.confirmPassword,
                })
              }
            />
          </div>
        </label>
        <button
          type="submit"
          className="mx-auto block w-full rounded-lg bg-lima-500 px-10 py-2 text-white outline-none duration-500 hover:bg-black focus:bg-black active:translate-y-1"
        >
          Reset
        </button>
      </form>
      <div className="flex basis-1/2 items-center justify-center">
        <img src={forgotPassword} className="size-96" />
      </div>
    </div>
  );
}

export default ResetPassword;

function ShowPasswordButton({ onClick, showPassword }) {
  return (
    <button
      type="button"
      className="absolute right-0 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center bg-lima-500 px-1 py-2 text-white outline-none duration-300 hover:bg-black focus:bg-black"
      onClick={onClick}
    >
      {showPassword ? (
        <EyeSlashIcon className="h-6 w-7" />
      ) : (
        <EyeIcon className="h-6 w-7" />
      )}
    </button>
  );
}

ShowPasswordButton.propTypes = {
  onClick: propTypes.func,
  showPassword: propTypes.bool,
};
