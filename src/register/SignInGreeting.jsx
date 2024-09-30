import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function SignInGreeting({ className }) {
  return (
    <div className={className}>
      <h3 className="text-2xl">Welcome Back 😊</h3>
      <p className="text-center">
        Welcome back We are so happy to have you here. it&apos;s great to see
        you again. We hope you had a safe and enjoyable time away.
      </p>
      <Link
        className="rounded-full bg-white/20 px-3 py-2 duration-500 hover:translate-x-1 hover:translate-y-1 hover:text-gray-900"
        to="/account/register"
      >
        No account yet? Signup.
      </Link>
    </div>
  );
}

SignInGreeting.propTypes = { className: propTypes.string };
