import propTypes from "prop-types";

export default function SignInForm({ className }) {
  return (
    <form className={className}>
      <h2 className="text-center text-4xl">Sign In</h2>
      <label>
        Email
        <input
          type="text"
          name="email"
          className="block w-full border-b-2 px-3 py-[6px] outline-none focus:border-b-lima-500"
        />
      </label>
      <label>
        Password
        <div className="flex">
          <input
            type="text"
            name="password"
            className="block w-full border-b-2 px-3 py-[6px] outline-none focus:border-b-lima-500"
          />
          <button className="rounded-sm bg-lima-500 p-1 text-white duration-300 hover:bg-black">
            show
          </button>
        </div>
      </label>
      <button className="rounded-xl bg-lima-500 py-4 text-sm font-semibold uppercase text-white duration-300 hover:bg-black focus:translate-y-1">
        sign in
      </button>

      <div>
        <a className="cursor-pointer capitalize text-gray-900 duration-300 hover:text-lima-500">
          forget your password?
        </a>
      </div>
    </form>
  );
}

SignInForm.propTypes = { className: propTypes.string };
