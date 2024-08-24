import bigPromoImage from "../images/big-promo/banner-3.jpg";

function BigPromo() {
  return (
    <div className="group relative overflow-hidden">
      <a href="/shop big promo now">
        <img
          src={bigPromoImage}
          alt="big promo image"
          className="duration-700 group-hover:scale-110"
        />
      </a>
      {/* text part */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center lg:gap-4">
        <span className="hidden capitalize text-gray-600 sm:block md:text-xl lg:text-xl">
          special offer 20% flat
        </span>
        <h3 className="capitalize text-[#222] sm:text-2xl md:text-3xl lg:mb-5 2xl:text-5xl">
          best amazing flowers plants 2021
        </h3>
        <a
          href="# shop now"
          className="md bg-lima-500 rounded-full px-3 py-2 text-xs uppercase text-white duration-300 hover:bg-black sm:px-4 lg:px-8 lg:py-3"
        >
          shop now
        </a>
      </div>
    </div>
  );
}

export default BigPromo;
