import { CheckCircleIcon } from "@heroicons/react/24/outline";

function MerchantForm() {
  return (
    <form>
      <div className="flex h-full w-fit flex-col gap-8 bg-white p-5 pt-28">
        {/* name  */}
        <div className="flex justify-between gap-5">
          <label className="flex-grow">
            First Name
            <input
              type="text"
              name="firstName"
              placeholder="LeoU"
              className="block w-full border-b-2 px-3 py-[6px] outline-none focus:border-b-lima-500"
            />
          </label>
          <label className="flex-grow">
            Last Name
            <input
              type="text"
              name="lastName"
              placeholder="The G"
              className="block w-full border-b-2 px-3 py-[6px] outline-none focus:border-b-lima-500"
            />
          </label>
        </div>
        {/* email */}
        <label>
          Email
          <input
            type="text"
            name="email"
            placeholder="LeoU_98@gmail.com"
            className="block w-full border-b-2 px-3 py-[6px] outline-none focus:border-b-lima-500"
          />
        </label>

        {/* address  */}
        <label>
          Address
          <input
            type="text"
            name="address"
            placeholder="159 2nd St APT 705, Jersey City, NJ 07302"
            className="block w-full border-b-2 px-3 py-[6px] outline-none focus:border-b-lima-500"
          />
        </label>
        {/* phone  */}
        <div className="flex gap-5">
          <label className="flex-grow">
            Phone
            <input
              type="text"
              name="phone"
              placeholder="01145024481"
              className="block w-full border-b-2 px-3 py-[6px] outline-none focus:border-b-lima-500"
            />
          </label>
          <label className="flex-grow">
            Another Phone
            <input
              type="text"
              name="anotherPhone"
              placeholder="01145024481"
              className="block w-full border-b-2 px-3 py-[6px] outline-none focus:border-b-lima-500"
            />
          </label>
        </div>

        {/* offers */}
        <label className="cursor-pointer select-none capitalize">
          <input
            type="checkbox"
            name="offers"
            className="relative top-[2px] mr-2 size-4 cursor-pointer capitalize accent-lima-500"
          />
          receive offers from our partners
        </label>
        {/* Newsletter */}
        <label className="cursor-pointer select-none capitalize">
          <input
            type="checkbox"
            name="newsletter"
            className="relative top-[2px] mr-2 size-4 cursor-pointer capitalize accent-lima-500"
          />
          sign up for our Newsletter
          <div>(You may unsubscribe at any moment)</div>
        </label>
        {/* policy  */}
        <label className="cursor-pointer select-none sm:text-balance lg:text-pretty">
          <input
            type="checkbox"
            name="policy"
            className="relative top-[2px] mr-2 size-4 cursor-pointer accent-lima-500"
          />
          By creating an account, you agree to our{" "}
          <a className="text-lima-500 underline hover:text-lima-400">Terms</a>{" "}
          and have read and acknowledge the{" "}
          <a className="text-lima-500 underline hover:text-lima-400">
            Global Privacy Statement
          </a>
        </label>
        <button className="rounded-xl bg-lima-500 py-4 text-sm font-semibold uppercase text-white hover:bg-black">
          sign up
        </button>
      </div>
    </form>
  );
}

function MerchantFeatures() {
  return (
    <div className="flex flex-grow flex-col items-center bg-gradient-to-tr from-[#0ea5e9] from-10% to-lima-400 to-90% p-5 text-white">
      <h2 className="mx-auto p-3 pb-0 text-xl capitalize">
        Merchant Membership
      </h2>
      <div>
        <div className="p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            id="store"
            className="fill-white"
          >
            <path
              fillRule="evenodd"
              d="M458.333 204.379v250.477H499c2.754 0 5 2.246 5 5V495c0 2.754-2.246 5-5 5H13a5.01 5.01 0 0 1-5-5v-35.145c0-2.754 2.246-5 5-5h40.667v-250.48a68.954 68.954 0 0 0 19.467 2.792 68.942 68.942 0 0 0 22.02-3.593c17.119-5.765 30.845-17.837 38.931-33.116 11.574 21.833 34.529 36.709 60.96 36.709a68.942 68.942 0 0 0 22.02-3.593c17.119-5.765 30.845-17.837 38.931-33.116 11.574 21.833 34.529 36.709 60.96 36.709a68.942 68.942 0 0 0 22.02-3.593c17.119-5.765 30.845-17.837 38.931-33.116 11.574 21.833 34.529 36.709 60.96 36.709a69.037 69.037 0 0 0 19.466-2.788zM144.47 130.212 175.625 12H248v118.212H144.47zM159.078 12H88.223c-.84 0-1.385.331-1.773 1.075L25.372 130.212h102.552L159.078 12zm-138.3 134.212c3.856 25.453 25.825 44.956 52.355 44.956 5.754 0 11.46-.92 16.914-2.756 18.946-6.38 32.481-22.824 35.436-42.199H20.778v-.001zm121.911 0c3.856 25.453 25.825 44.956 52.355 44.956 5.754 0 11.46-.92 16.914-2.756 18.946-6.38 32.481-22.824 35.436-42.199H142.689v-.001zm121.911 0c3.856 25.453 25.825 44.956 52.355 44.956 5.754 0 11.46-.92 16.914-2.756 18.946-6.38 32.481-22.824 35.436-42.199H264.6v-.001zm102.93-16L336.376 12H264v118.212h103.53zm18.981 16c3.856 25.453 25.825 44.956 52.355 44.956 5.754 0 11.46-.92 16.914-2.756 18.946-6.38 32.481-22.824 35.436-42.199H386.511v-.001zM352.922 12h70.855c.84 0 1.385.331 1.773 1.075l61.078 117.137H384.076L352.922 12zm-63.573 353.062c-5.508 0-10 4.492-10 10v10.97c0 5.508 4.492 10 10 10h107.565c5.508 0 10-4.492 10-10v-10.97c0-5.508-4.492-10-10-10H289.349zm0-115.767c-5.508 0-10 4.492-10 10v61.111c0 5.508 4.492 10 10 10h107.565c5.508 0 10-4.492 10-10v-61.111c0-5.508-4.492-10-10-10H289.349zm-169.962 0c-5.508 0-10 4.492-10 10v195.56H220.73v-195.56c0-5.508-4.492-10-10-10h-91.343z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <h3 className="pl-2">Features</h3>
        <div>
          <ul className="flex flex-col gap-3 px-4 py-2">
            <li className="text-base">
              <CheckCircleIcon className="mb-1 mr-1 inline-block size-5" />
              Lorem ipsum dolor sit amet ipsam.
            </li>
            <li className="text-base">
              <CheckCircleIcon className="mb-1 mr-1 inline-block size-5" />
              Lorem ipsum dolor sit amet ipsam.
            </li>
            <li className="text-base">
              <CheckCircleIcon className="mb-1 mr-1 inline-block size-5" />
              Lorem ipsum dolor sit amet ipsam.
            </li>
            <li className="text-base">
              <CheckCircleIcon className="mb-1 mr-1 inline-block size-5" />F
              Lorem ipsum dolor sit amet ipsam.
            </li>
            <li className="text-base">
              <CheckCircleIcon className="mb-1 mr-1 inline-block size-5" />
              Lorem ipsum dolor sit amet ipsam.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function MerchantSignup() {
  return (
    <div className="flex flex-col-reverse gap-0 md:flex-row">
      <MerchantForm />
      <MerchantFeatures />
    </div>
  );
}

export default MerchantSignup;
