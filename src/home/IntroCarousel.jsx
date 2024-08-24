import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from "../images/banner-1.jpg";
import banner2 from "../images/banner-2.jpg";
import propTypes from "prop-types";

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

{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg> */
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-lima-500 hover:bg-lima-600 right-5 z-10 size-10 rounded-full opacity-100 before:absolute before:left-1/2 before:top-1/2 before:z-10 before:-translate-x-1/2 before:translate-y-[-62%] before:rounded-full before:text-base before:content-['⟩']`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-lima-500 hover:bg-lima-600 left-5 z-10 size-10 rounded-full opacity-100 before:absolute before:left-1/2 before:top-1/2 before:z-10 before:-translate-x-1/2 before:translate-y-[-62%] before:rounded-full before:text-base before:content-['⟨']`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

export default function IntroCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dotsClass: "slick-dots  bottom-[0] ",
    customPaging: () => (
      <div className="active-helper bg-lima-500 size-2 rounded-full opacity-50"></div>
    ),
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
    <div className="">
      <Slider {...settings}>
        <div>
          <IntroItem />
        </div>
        <div>
          <IntroItem />
        </div>
        <div>
          <IntroItem />
        </div>
        <div>
          <IntroItem />
        </div>
      </Slider>
    </div>
  );
}

function IntroItem() {
  return (
    <div className="relative bg-green-500">
      <div className="h-full w-full">
        <img src={banner1} alt="banner"></img>
      </div>
      <div className="absolute left-[5%] top-1/2 z-10 -translate-y-1/2 text-red-500">
        <p className="animate-fadeInLeft text-[10px] text-gray-600 sm:text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Shipping & Cash on Delivery Avaliable
        </p>

        <h1 className="animate-fadeInLeft my-1 text-xs text-black sm:text-sm md:text-xl lg:mt-3 lg:text-3xl xl:text-4xl 2xl:mt-6 2xl:text-5xl">
          Latest Garden Flowring Plants
        </h1>
        <button className="animate-fadeInLeft bg-lima-500 mt-2 cursor-pointer rounded-full p-1 px-2 text-[10px] text-white duration-300 hover:bg-black sm:text-sm md:text-base lg:mt-6 lg:px-4 2xl:mt-12">
          Shop Now
        </button>
      </div>
    </div>
  );
}
