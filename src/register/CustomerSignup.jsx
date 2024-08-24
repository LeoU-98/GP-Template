import { CheckCircleIcon } from "@heroicons/react/24/outline";

function CustomerSignup() {
  return (
    <div className="flex flex-col-reverse gap-0 md:flex-row">
      <CustomerForm />
      <CustomerFeatures />
    </div>
  );
}

export default CustomerSignup;

function CustomerForm() {
  return (
    <div className="basis-3/5">
      <form>
        <div className="flex h-full w-fit flex-col gap-8 bg-white p-5 pt-8">
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
    </div>
  );
}

function CustomerFeatures() {
  return (
    <div className="flex flex-grow flex-col items-center bg-gradient-to-tr from-[#0ea5e9] from-10% to-lima-400 to-90% p-5 text-white">
      <h2 className="mx-auto p-3 pb-0 text-xl capitalize">
        Customer Membership
      </h2>
      <div>
        <div className="p-4">
          <CustomerSvg />
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

function CustomerSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      id="customer "
      className="fill-white"
    >
      <path
        fill="#fff"
        d="M14.5 31h-3.1c-.3 0-.5-.2-.5-.5V30c0-1.8 1.4-3.4 3.2-3.6.2 0 .4.1.5.2.3.5.4 1 .4 1.6v2.3c0 .3-.2.5-.5.5zm-2.6-1H14v-1.8c0-.3-.1-.5-.2-.8-1.1.3-1.9 1.4-1.9 2.6zM3.5 14c-.1 0-.2 0-.2-.1-.2 0-.3-.2-.3-.4V12h-.5c-.8 0-1.5-.7-1.5-1.5v-8C1 1.7 1.7 1 2.5 1h12c.8 0 1.5.7 1.5 1.5v8c0 .8-.7 1.5-1.5 1.5H6.7l-2.9 1.9c-.1.1-.2.1-.3.1zm-1-12c-.3 0-.5.2-.5.5v8c0 .3.2.5.5.5h1c.3 0 .5.2.5.5v1.1l2.2-1.5c.1-.1.2-.1.3-.1h8c.3 0 .5-.2.5-.5v-8c0-.3-.2-.5-.5-.5h-12zM28.5 14c-.1 0-.2 0-.3-.1L25.4 12h-4.8c-.8 0-1.5-.7-1.5-1.5v-5c-.1-.8.6-1.5 1.4-1.5h9c.8 0 1.5.7 1.5 1.5v5c0 .8-.7 1.5-1.5 1.5H29v1.5c0 .2-.1.4-.3.4 0 .1-.1.1-.2.1zm-8-9c-.3 0-.5.2-.5.5v5c0 .3.2.5.5.5h5c.1 0 .2 0 .3.1l2.2 1.5v-1.1c0-.3.2-.5.5-.5h1c.3 0 .5-.2.5-.5v-5c0-.3-.2-.5-.5-.5h-9zM24 26.4c-.8 0-1.5-.3-1.9-.9-.3-.3-.4-.7-.4-1v-1.3c0-.3.2-.5.5-.5s.5.2.5.5v1.3c0 .1.1.3.2.4.5.7 1.8.7 2.3 0 .1-.1.2-.3.2-.4v-1.3c0-.3.2-.5.5-.5s.5.2.5.5v1.3c0 .3-.1.7-.4 1-.5.6-1.2.9-2 .9z"
      ></path>
      <path
        fill="#fff"
        d="M24 24.1c-2.2 0-4-1.8-4-4v-.9c0-.3.2-.5.5-.5s.5.2.5.5v.9c0 1.7 1.3 3 3 3s3-1.3 3-3v-.9c0-.3.2-.5.5-.5s.5.2.5.5v.9c0 2.2-1.8 4-4 4z"
      ></path>
      <path
        fill="#fff"
        d="M20.5 19.8h-.1c-.2 0-.3-.2-.3-.3l-.6-1.8c-.1-.6 0-1.1.3-1.6.2-.3.6-.5.9-.6.1-.5.3-.9.7-1.2.5-.4 1.1-.6 1.7-.5l3.8.6c.6.1 1.1.4 1.4.9.3.5.5 1 .4 1.6l-.7 2.5c0 .2-.2.3-.3.4-.2.1-.3 0-.5-.1l-1.3-1c-.1-.1-.2-.1-.3-.1h-3.3c-.1 0-.2 0-.3.1l-1.2 1c-.1 0-.2.1-.3.1zm2.2-5c-.3 0-.5.1-.7.3-.2.2-.4.5-.4.8 0 .3-.2.5-.5.5-.2 0-.5.1-.6.3-.2.2-.2.4-.2.7l.4 1 .7-.6c.3-.2.6-.3 1-.3h3.3c.3 0 .7.1 1 .3l.6.5.4-1.7c0-.3 0-.6-.2-.8-.2-.2-.4-.4-.7-.5l-3.8-.6c-.2.1-.2.1-.3.1zM30.5 31h-13c-.3 0-.5-.2-.5-.5v-2.3c0-1.3.9-2.5 2.1-2.9l2.9-1c.3-.1.5.1.6.3.1.3-.1.5-.3.6l-2.9 1c-.9.3-1.4 1.1-1.4 2V30h12v-1.8c0-.9-.6-1.7-1.4-2l-2.9-1c-.3-.1-.4-.4-.3-.6s.4-.4.6-.3l2.9 1c1.3.4 2.1 1.6 2.1 2.9v2.3c0 .3-.2.5-.5.5z"
      ></path>
      <path
        fill="#fff"
        d="M30.5 31h-3.1c-.3 0-.5-.2-.5-.5V30c0-1.8 1.4-3.4 3.2-3.6.2 0 .4.1.5.2.3.5.4 1 .4 1.6v2.3c0 .3-.2.5-.5.5zm-2.6-1H30v-1.8c0-.3-.1-.5-.2-.8-1.1.3-1.9 1.4-1.9 2.6zM20.6 31h-3.1c-.3 0-.5-.2-.5-.5v-2.3c0-.6.2-1.1.4-1.6.1-.2.3-.3.5-.2 1.8.2 3.2 1.8 3.2 3.6v.5c0 .3-.2.5-.5.5zM18 30h2.1c0-1.2-.8-2.2-2-2.5-.1.2-.2.5-.2.8V30zM9.5 9h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3c.3 0 .5-.2.5-.5S9.8 7 9.5 7h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c.8 0 1.5.7 1.5 1.5S10.3 9 9.5 9z"
      ></path>
      <path
        fill="#fff"
        d="M8.5 7h-1C6.7 7 6 6.3 6 5.5S6.7 4 7.5 4h3c.3 0 .5.2.5.5s-.2.5-.5.5h-3c-.3 0-.5.2-.5.5s.2.5.5.5h1c.3 0 .5.2.5.5s-.2.5-.5.5z"
      ></path>
      <path
        fill="#fff"
        d="M8.5 5c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5s.5.2.5.5v1c0 .3-.2.5-.5.5zM8.5 10c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5s.5.2.5.5v1c0 .3-.2.5-.5.5zM23.5 10c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7l3-3c.2-.2.5-.2.7 0s.2.5 0 .7l-3 3c0 .1-.2.1-.3.1z"
      ></path>
      <circle cx="23.8" cy="6.8" r=".8" fill="#fff"></circle>
      <circle cx="26.2" cy="9.3" r=".8" fill="#fff"></circle>
      <path
        fill="#fff"
        d="M8 26.8h-.2c-.2-.1-2.1-1-2.1-2.3V23c0-.3.2-.5.5-.5s.5.2.5.5v1.5c0 .4.7.9 1.3 1.3.6-.3 1.3-.9 1.3-1.3V23c0-.3.2-.5.5-.5s.5.2.5.5v1.5c0 1.3-1.9 2.2-2.1 2.3H8z"
      ></path>
      <path
        fill="#fff"
        d="M8 24c-1.7 0-3-1.3-3-3v-2.5c0-.3.2-.5.5-.5s.5.2.5.5V21c0 1.1.9 2 2 2s2-.9 2-2v-2.5c0-.3.2-.5.5-.5s.5.2.5.5V21c0 1.7-1.3 3-3 3zM14.5 31h-13c-.3 0-.5-.2-.5-.5v-2.3c0-1.3.9-2.5 2.1-2.9l2.9-1c.3-.1.5.1.6.3.1.3-.1.5-.3.6l-2.9 1c-.9.3-1.4 1.1-1.4 2V30h12v-1.8c0-.9-.6-1.7-1.4-2l-2.9-1c-.3-.1-.4-.4-.3-.6.1-.3.4-.4.6-.3l2.9 1c1.3.4 2.1 1.6 2.1 2.9v2.3c0 .3-.2.5-.5.5z"
      ></path>
      <path
        fill="#fff"
        d="M14.5 31h-3.1c-.3 0-.5-.2-.5-.5V30c0-1.8 1.4-3.4 3.2-3.6.2 0 .4.1.5.2.3.5.4 1 .4 1.6v2.3c0 .3-.2.5-.5.5zm-2.6-1H14v-1.8c0-.3-.1-.5-.2-.8-1.1.3-1.9 1.4-1.9 2.6zM4.6 31H1.5c-.3 0-.5-.2-.5-.5v-2.3c0-.6.2-1.1.4-1.6.1-.2.3-.3.5-.2 1.8.2 3.2 1.8 3.2 3.6v.5c0 .3-.2.5-.5.5zM2 30h2.1c0-1.2-.8-2.2-2-2.5 0 .2-.1.4-.1.7V30zM6 19h-.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H6c.3 0 .5-.2.5-.5s.2-.5.5-.5.5.2.5.5c0 .8-.7 1.5-1.5 1.5zM12.5 22c-.3 0-.5-.2-.5-.5v-1c0-.8-.7-1.5-1.5-1.5h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c1.4 0 2.5 1.1 2.5 2.5v1c0 .3-.2.5-.5.5z"
      ></path>
      <path
        fill="#fff"
        d="M10 19H8c-.8 0-1.5-.7-1.5-1.5 0-.3.2-.5.5-.5s.5.2.5.5.2.5.5.5h2c.3 0 .5.2.5.5s-.2.5-.5.5zM9 22h-.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H9c.6 0 1-.4 1-1 0-.3.2-.5.5-.5s.5.2.5.5c0 1.1-.9 2-2 2z"
      ></path>
      <path
        fill="#fff"
        d="M9.8 24.5c-.1 0-.2 0-.3-.1-.1-.1-.2-.2-.2-.4v-1c0-.3.2-.5.5-.5s.5.2.5.5v.4c.4-.1.7-.1 1-.2l.2-.1c.2 0 .4-.3.4-.5V19c0-2.2-1.8-4-4-4s-4 1.8-4 4v3.7c0 .2.2.4.4.5l.2.1c.3.1.7.1 1 .2V23c0-.3.2-.5.5-.5s.5.2.5.5v1c0 .1-.1.3-.2.4-.1.1-.2.1-.4.1-.6-.1-1.2-.2-1.7-.3l-.2-.1c-.5-.1-1-.7-1-1.4V19c0-2.8 2.2-5 5-5s5 2.2 5 5v3.7c0 .7-.5 1.3-1.2 1.5l-.2.1c-.6.1-1.1.1-1.8.2.1 0 0 0 0 0z"
      ></path>
    </svg>
  );
}
