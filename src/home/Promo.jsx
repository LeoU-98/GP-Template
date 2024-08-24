import promo1 from "../images/promo/promo-banner-1.jpg";
import promo2 from "../images/promo/promo-banner-2.jpg";
import promo3 from "../images/promo/promo-banner-3.jpg";

function Promo() {
  return (
    <div className="container mx-auto grid gap-3 px-2 py-16 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 lg:gap-4">
      <div className="sm:row-start-2 lg:col-start-1 lg:row-start-1">
        <PromoItem />
      </div>
      <div className="sm:col-span-2 sm:row-start-1 lg:col-span-1 lg:col-start-2">
        <PromoItemCenter />
      </div>
      <div className="sm:row-start-2 lg:col-start-3 lg:row-start-1">
        <PromoItem />
      </div>
    </div>
  );
}

function PromoItem() {
  return (
    <div className="group relative overflow-hidden">
      <a href="#things to buy">
        <img
          src={promo1}
          alt="Promo Banner"
          className="h-full w-full duration-500 group-hover:scale-105"
        />
      </a>
      <div className="absolute top-1/2 w-1/2 min-w-[66px] -translate-y-1/2 pl-3 sm:pl-6">
        <span className="block text-sm capitalize text-gray-400 sm:text-xs md:text-sm xl:text-base">
          flat 50% discount
        </span>
        <p className="black mb-2 capitalize sm:text-sm md:text-base xl:mb-5 xl:text-xl">
          gardening tools
        </p>
        <a className="cursor-pointer rounded-3xl bg-lima-500 px-2 py-[6px] text-xs uppercase text-white duration-300 hover:bg-black hover:text-white md:py-[6px] lg:px-4 lg:py-[10px] xl:text-sm">
          Shop Now
        </a>
      </div>
    </div>
  );
}

function PromoItemCenter() {
  return (
    <a href="#another thing to buy" className="group relative">
      <div className="overflow-hidden">
        <img
          src={promo2}
          alt="Promo Banner"
          className="h-full w-full duration-500 group-hover:scale-110"
        />
      </div>

      <div className="absolute left-1/2 top-1/2 flex h-[90%] w-[95%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 border-2 text-center text-white">
        <span className="capitalize sm:text-xl lg:text-lg">
          best quality products
        </span>
        <p className="capitalize sm:text-2xl lg:text-xl">
          buy garden equipments
        </p>
        <a className="cursor-pointer rounded-3xl bg-white px-2 py-[6px] text-xs uppercase text-black duration-300 hover:bg-black hover:text-white sm:px-3 sm:text-base lg:mt-4 lg:px-4 lg:py-2 lg:text-xs xl:text-sm">
          shop now
        </a>
      </div>
    </a>
  );
}

export default Promo;
