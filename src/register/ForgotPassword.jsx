import { ChevronLeftIcon, EnvelopeIcon } from "@heroicons/react/16/solid";
import forgotPassword from "../images/forgotPassword.svg";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="flex flex-col border-[1px] border-gray-300 bg-white xl:flex-row">
      <form className="mx-auto max-w-[524px] basis-1/2 px-10 py-16 xl:mx-0">
        <h3 className="mb-4 text-2xl text-gray-900">Forgot Password</h3>
        <p className="mb-8 text-sm text-gray-600">
          Enter your email & We&apos;ll send you a link to reset your password{" "}
        </p>
        <label className="mb-6 flex flex-row-reverse justify-end gap-2">
          <input
            type="text"
            name="email"
            placeholder="leou123@gmail.com"
            className="peer w-full rounded-lg px-2 py-1 outline-none ring-1 ring-gray-400 focus:ring-lima-500"
          />
          <EnvelopeIcon className="size-9 peer-focus:fill-lima-500 peer-focus:text-lima-500" />
        </label>
        <button
          type="submit"
          className="mx-auto mb-5 block w-full rounded-lg bg-lima-500 px-10 py-2 text-white outline-none duration-500 hover:bg-black focus:ring-2 focus:ring-lima-800 active:translate-y-1"
        >
          Submit
        </button>
        <Link
          to="/account/signin"
          className="mx-auto flex w-fit items-center text-gray-900 duration-300 hover:text-lima-500 focus:outline-lima-500"
        >
          <ChevronLeftIcon className="size-6" />
          Back to Login
        </Link>
      </form>
      <div className="flex basis-1/2 items-center justify-center">
        <img src={forgotPassword} className="size-96" />
      </div>
    </div>
  );
}

export default ForgotPassword;
