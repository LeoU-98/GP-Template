import { CheckIcon } from "@heroicons/react/24/outline";

export default function CustomerForm() {
  return (
    <form className="basis-3/5">
      <div className="flex h-full w-fit flex-col gap-2 bg-white p-5 pt-8">
        {/* name  */}
        <div className="flex justify-between gap-5">
          <label className="flex-grow">
            First Name
            <input
              type="text"
              name="firstName"
              placeholder="LeoU"
              className="block w-full border-b-2 px-2 py-1 outline-none focus:border-b-lima-500"
            />
          </label>
          <label className="flex-grow">
            Last Name
            <input
              type="text"
              name="lastName"
              placeholder="The G"
              className="block w-full border-b-2 px-2 py-1 outline-none focus:border-b-lima-500"
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
            className="block w-full border-b-2 px-2 py-1 outline-none focus:border-b-lima-500"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            className="block w-full border-b-2 px-2 py-1 outline-none focus:border-b-lima-500"
          />
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            className="block w-full border-b-2 px-2 py-1 outline-none focus:border-b-lima-500"
          />
        </label>

        {/* address  */}
        <label>
          Address
          <input
            type="text"
            name="address"
            placeholder="159 2nd St APT 705, Jersey City, NJ 07302"
            className="block w-full border-b-2 px-2 py-1 outline-none focus:border-b-lima-500"
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
              className="block w-full border-b-2 px-2 py-1 outline-none focus:border-b-lima-500"
            />
          </label>
          <label className="flex-grow">
            Second Phone
            <input
              type="text"
              name="secondPhone"
              placeholder="01145024481"
              className="block w-full border-b-2 px-2 py-1 outline-none focus:border-b-lima-500"
            />
          </label>
        </div>

        <div className="mt-5">
          {/* <div className="mt-3 flex flex-col gap-2"> */}
          {/* offers */}
          {/* <label className="cursor-pointer select-none">
            <div className="relative top-1 mr-1 inline-flex">
              <input
                type="checkbox"
                name="offers"
                className="peer relative h-4 w-4 shrink-0 appearance-none rounded-sm border-[1px] border-lima-500 bg-white checked:border-0 checked:bg-lima-500"
              />
              <CheckIcon className="absolute hidden size-4 stroke-[3px] font-bold text-white peer-checked:block" />
            </div>
            receive offers from our partners
          </label> */}
          {/* Newsletter */}
          {/* <label className="cursor-pointer select-none">
            <div className="relative top-1 mr-1 inline-flex">
              <input
                type="checkbox"
                name="newsletter"
                className="peer relative h-4 w-4 shrink-0 appearance-none rounded-sm border-[1px] border-lima-500 bg-white checked:border-0 checked:bg-lima-500"
              />
              <CheckIcon className="absolute hidden size-4 stroke-[3px] font-bold text-white peer-checked:block" />
            </div>
            sign up for our Newsletter
            <div>(You may unsubscribe at any moment)</div>
          </label> */}
          {/* policy  */}
          <label className="cursor-pointer select-none">
            <div className="relative top-[2px] mr-1 inline-flex">
              <input
                type="checkbox"
                name="policy"
                className="peer relative h-4 w-4 shrink-0 appearance-none rounded-sm border-[1px] border-lima-500 bg-white checked:border-0 checked:bg-lima-500"
              />
              <CheckIcon className="absolute hidden size-4 stroke-[3px] font-bold text-white peer-checked:block" />
            </div>
            By creating an account, you agree to our{" "}
            <a className="text-lima-500 underline hover:text-lima-400">Terms</a>
            and have read and acknowledge the{" "}
            <a className="text-lima-500 underline hover:text-lima-400">
              Global Privacy Statement
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="rounded-xl bg-lima-500 py-4 text-sm font-semibold uppercase text-white outline-none hover:bg-black"
        >
          sign up
        </button>
      </div>
    </form>
  );
}
