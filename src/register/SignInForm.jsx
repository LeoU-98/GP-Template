import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import propTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignInForm({ className }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className={className}>
      <h2 className="text-center text-4xl">Sign In</h2>
      <label>
        Email
        <input
          type="text"
          name="email"
          className="block w-full border-b-2 px-3 py-2 outline-none duration-300 hover:border-b-lima-500 focus:border-b-lima-500"
        />
      </label>
      <label>
        Password
        <div className="flex">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="block w-full border-b-2 px-3 py-2 outline-none duration-300 hover:border-b-lima-500 focus:border-b-lima-500"
          />
          <button
            type="button"
            className="rounded-sm bg-lima-500 p-1 text-white duration-300 hover:bg-black"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-6 w-7" />
            ) : (
              <EyeIcon className="h-6 w-7" />
            )}
          </button>
        </div>
      </label>
      <button
        type="submit"
        className="rounded-xl bg-lima-500 py-3 text-sm font-semibold uppercase text-white duration-300 hover:bg-black focus:bg-black active:translate-y-1"
      >
        sign in
      </button>

      <div>
        <Link
          to="/account/forgotPassword"
          className="cursor-pointer capitalize text-gray-900 duration-300 hover:text-lima-500"
        >
          forget your password?
        </Link>
      </div>
    </form>
  );
}

SignInForm.propTypes = { className: propTypes.string };
