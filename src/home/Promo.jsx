import { Link } from "react-router-dom";
import { promoData } from "../utils/StaticData";
import propTypes from "prop-types";

function Promo() {
  return (
    <div className="container mx-auto grid gap-3 px-4 py-16 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 lg:gap-4">
      <div className="sm:row-start-2 lg:col-start-1 lg:row-start-1">
        <PromoItem data={promoData[0]} />
      </div>
      <div className="sm:col-span-2 sm:row-start-1 lg:col-span-1 lg:col-start-2">
        <PromoItemCenter data={promoData[1]} />
      </div>
      <div className="sm:row-start-2 lg:col-start-3 lg:row-start-1">
        <PromoItem data={promoData[2]} />
      </div>
    </div>
  );
}

function PromoItem({ data }) {
  const { promoTitle, promoDesc, promoLink, promoImg } = data;

  return (
    <article className="group relative overflow-hidden">
      <div>
        <img
          src={promoImg}
          alt="Promo Banner"
          className="h-full w-full duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute top-1/2 w-1/2 min-w-[66px] -translate-y-1/2 pl-3 sm:pl-6">
        <p className="text-sm capitalize text-gray-400 sm:text-xs md:text-sm xl:text-base">
          {promoDesc}
        </p>
        <p className="black mb-2 capitalize sm:text-sm md:text-base xl:mb-5 xl:text-xl">
          {promoTitle}
        </p>
        <Link
          to={promoLink}
          className="cursor-pointer rounded-3xl bg-lima-500 px-2 py-[6px] text-xs uppercase text-white duration-300 hover:bg-black hover:text-white md:py-[6px] lg:px-4 lg:py-[10px] xl:text-sm"
        >
          Shop Now
        </Link>
      </div>
    </article>
  );
}

function PromoItemCenter({ data }) {
  const { promoTitle, promoDesc, promoLink, promoImg } = data;
  return (
    <article className="group relative">
      <div className="overflow-hidden">
        <img
          src={promoImg}
          alt="Promo Banner"
          className="h-full w-full duration-500 group-hover:scale-110"
        />
      </div>

      <div className="absolute left-1/2 top-1/2 flex h-[90%] w-[95%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 border-2 text-center text-white">
        <p className="capitalize sm:text-xl lg:text-lg">{promoTitle}</p>
        <p className="capitalize sm:text-2xl lg:mb-4 lg:text-xl">{promoDesc}</p>
        <Link
          to={promoLink}
          className="cursor-pointer rounded-3xl bg-white px-2 py-3 text-xs uppercase text-black duration-300 hover:bg-black hover:text-white sm:px-3 sm:text-base lg:px-4 lg:py-2 lg:text-xs xl:text-sm"
        >
          <span className="relative top-[2px]">shop now</span>
        </Link>
      </div>
    </article>
  );
}

export default Promo;

PromoItem.propTypes = {
  data: propTypes.object,
};
PromoItemCenter.propTypes = {
  data: propTypes.object,
};
