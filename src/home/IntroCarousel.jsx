import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import propTypes from "prop-types";
import { introData } from "../utils/StaticData";
import { Link } from "react-router-dom";

export default function IntroCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dotsClass: "slick-dots  bottom-[0] ",
    className: "intro-carousel",
    customPaging: () => (
      <div className="active-helper size-2 rounded-full bg-lima-500 opacity-50"></div>
    ),
    autoplay: true,
    speed: 1300,
    autoplaySpeed: 3000,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1530,
        settings: {
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          dots: false,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {introData.map((item, key) => (
        <IntroItem data={item} key={key} />
      ))}
    </Slider>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} right-5 z-10 size-10 rounded-full bg-lima-500 opacity-100 duration-300 before:absolute before:left-1/2 before:top-1/2 before:z-10 before:-translate-x-1/2 before:translate-y-[-62%] before:rounded-full before:text-base before:content-['⟩'] hover:bg-black`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} left-5 z-10 size-10 rounded-full bg-lima-500 opacity-100 duration-300 before:absolute before:left-1/2 before:top-1/2 before:z-10 before:-translate-x-1/2 before:translate-y-[-62%] before:rounded-full before:text-base before:content-['⟨'] hover:bg-black`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function IntroItem({ data }) {
  const { promoTitle, promoDesc, promoBanner, promoLink } = data;

  return (
    <article className="relative">
      <div className="h-full w-full">
        <img src={promoBanner} alt="banner" className="min-h-52"></img>
      </div>
      <div className="absolute left-[5%] top-1/2 z-10 -translate-y-1/2 text-red-500">
        <p className="text-[10px] text-gray-600 sm:text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          {promoDesc}
        </p>

        <p className="my-1 text-xs text-black sm:text-sm md:text-xl lg:mt-3 lg:text-3xl xl:text-4xl 2xl:mt-6 2xl:text-5xl">
          {promoTitle}
        </p>
        <Link
          to={promoLink}
          className="mt-2 inline-block cursor-pointer rounded-full bg-lima-500 px-3 py-1 text-sm text-white duration-300 hover:bg-black md:text-base lg:mt-6 2xl:mt-12"
        >
          Shop Now
        </Link>
      </div>
    </article>
  );
}

//////////////////////////////////

SamplePrevArrow.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  onClick: propTypes.func,
};
SampleNextArrow.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  onClick: propTypes.func,
};
IntroItem.propTypes = {
  data: propTypes.object,
};
