import SignInForm from "./SignInForm";
import SignInGreeting from "./SignInGreeting";

function SignIn() {
  return (
    <div className="flex flex-col md:flex-row">
      <SignInForm className="flex basis-1/2 flex-col gap-5 bg-white px-5 py-6" />
      <SignInGreeting className="flex shrink-0 grow-0 basis-1/2 flex-col items-center justify-center gap-4 bg-gradient-to-tr from-[#0ea5e9] from-10% to-lima-400 to-90% px-4 py-14 text-gray-100 sm:px-8 md:px-4" />
    </div>
  );
}

export default SignIn;
