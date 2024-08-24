import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import propTypes from "prop-types";
import thumb1 from "../images/category_carousel/thumb-1.png";
import thumb2 from "../images/category_carousel/thumb-2.png";
import thumb3 from "../images/category_carousel/thumb-3.png";
import thumb4 from "../images/category_carousel/thumb-4.png";
import thumb5 from "../images/category_carousel/thumb-5.png";
import thumb6 from "../images/category_carousel/thumb-6.png";

import Slider from "react-slick";

const CategoryCarouselArray = [
  {
    image: thumb1,
    text: "Plants",
  },
  {
    image: thumb2,
    text: "Shovel & Rake",
  },
  {
    image: thumb3,
    text: "Fertilizer",
  },
  {
    image: thumb4,
    text: "Seed Bag",
  },
  {
    image: thumb5,
    text: "Watering Can",
  },
  {
    image: thumb6,
    text: "Accessories",
  },
];

export default function CategoryCarousel() {
  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          arrows: false,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="max-w-screen-2xl px-2 py-16">
      <Slider {...settings}>
        {CategoryCarouselArray.map((item, index) => (
          <CategoryItem data={item} key={index} />
        ))}
      </Slider>
    </div>
  );
}

function CategoryItem({ data }) {
  return (
    <a href="#ss" className="group block max-w-44 text-center text-xs">
      <div className="mx-auto mb-2 w-[90%] cursor-pointer overflow-hidden rounded-full border-2 border-mercury-200 bg-white duration-700 group-hover:border-b-orange-500 group-hover:border-l-lima-500 group-hover:border-r-orange-500 group-hover:border-t-lima-500 group-hover:[transform:rotateY(180deg)]">
        <img
          src={data.image}
          alt="category image"
          className="mx-auto block w-full"
        />
      </div>
      <div className="middle-underline relative mx-auto w-fit py-2 group-hover:after:w-full sm:text-sm md:text-base">
        {data.text}
      </div>
    </a>
  );
}

CategoryItem.propTypes = {
  data: propTypes.object,
};
