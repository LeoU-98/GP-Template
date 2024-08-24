function SignIn() {
  return (
    <div className="">
      <form>
        <div className="mx-auto flex flex-col gap-5 bg-white px-5 py-6">
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
              <button className="rounded-sm bg-lima-500 p-1 text-white hover:bg-black">
                show
              </button>
            </div>
          </label>
          <button className="rounded-xl bg-lima-500 py-4 text-sm font-semibold uppercase text-white hover:bg-black">
            sign in
          </button>

          <div>
            <a className="cursor-pointer capitalize text-gray-900 hover:text-lima-500">
              forget your password?
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
