import sendIcon from "../images/send-icon.png";

function NewsLetter() {
  return (
    <div className="newsletter-background">
      <div className="block pb-24 pt-5 lg:container lg:mx-auto lg:flex lg:items-center lg:pb-72 lg:pt-12">
        {/* text */}
        <div className="block lg:flex lg:w-1/2 lg:items-center">
          <div className="hidden lg:block">
            <img src={sendIcon} />
          </div>
          <div className="mb-2 text-center text-white lg:text-start">
            <h3 className="text-base font-bold lg:text-2xl">
              Sign Up To Newsletter
            </h3>
            <p className="text-xs lg:text-base">
              stay up to date with new collections and exclusive offers.
            </p>
          </div>
        </div>
        {/* form  */}
        <div className="mx-auto w-4/5 lg:mx-0 lg:w-1/2">
          <form className="text-nowrap text-center">
            <input
              type="text"
              name="email"
              placeholder="Your Email Address"
              className="w-[70%] rounded-s-full px-6 py-2 text-sm outline-none lg:py-3"
            />
            <button className="rounded-e-full bg-lima-500 px-2 py-2 pe-3 text-sm uppercase text-white duration-300 hover:bg-black lg:py-3">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
