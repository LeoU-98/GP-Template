import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from "../images/banner-1.jpg";
import banner2 from "../images/banner-2.jpg";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

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

export default function IntroCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dotsClass: "slick-dots  bottom-[0] ",
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
    <div className="">
      <Slider {...settings}>
        {introData.map((item, key) => (
          <div key={key}>
            <IntroItem data={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

const introData = [
  {
    promoTitle: "Best Quality Gardenning Tools",
    promoDesc: "Discount Up To 40% Off",
    promoBanner: banner1,
    promoLink: "link1",
  },
  {
    promoTitle: "Latest Garden Flowring Plants",
    promoDesc: "Shipping & Cash on Delivery Avaliable",
    promoBanner: banner2,
    promoLink: "link2",
  },
];

function IntroItem({ data }) {
  const { promoTitle, promoDesc, promoBanner, promoLink } = data;

  return (
    <div className="relative bg-green-500">
      <div className="h-full w-full">
        <img src={promoBanner} alt="banner"></img>
      </div>
      <div className="absolute left-[5%] top-1/2 z-10 -translate-y-1/2 text-red-500">
        <div className="text-[10px] text-gray-600 sm:text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          {promoDesc}
        </div>

        <h1 className="my-1 text-xs text-black sm:text-sm md:text-xl lg:mt-3 lg:text-3xl xl:text-4xl 2xl:mt-6 2xl:text-5xl">
          {promoTitle}
        </h1>
        <Link
          to={promoLink}
          className="mt-2 inline-block cursor-pointer rounded-full bg-lima-500 p-1 px-2 text-[10px] text-white duration-300 hover:bg-black sm:text-sm md:text-base lg:mt-6 lg:px-4 2xl:mt-12"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}

IntroItem.propTypes = {
  data: propTypes.object,
};
