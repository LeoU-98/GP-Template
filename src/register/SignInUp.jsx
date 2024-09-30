import { Link } from "react-router-dom";

function SignInUp() {
  return (
    <div className="flex flex-col gap-3 border-[1px] border-gray-300 bg-white p-4 md:flex-row">
      <Link
        to="/account/signin"
        className="flex h-96 basis-1/2 items-center justify-center rounded-xl bg-white py-12 text-4xl text-gray-700 shadow-xl duration-300 hover:translate-x-1 hover:translate-y-1 hover:text-lima-500 md:py-0 md:text-gray-900"
      >
        Sign In
      </Link>
      <Link
        to="/account/register"
        className="flex h-96 basis-1/2 items-center justify-center rounded-xl bg-white py-12 text-4xl text-gray-700 shadow-xl duration-300 hover:translate-x-1 hover:translate-y-1 hover:text-lima-500 md:py-0 md:text-gray-900"
      >
        Sign Up
      </Link>
    </div>
  );
}

export default SignInUp;
