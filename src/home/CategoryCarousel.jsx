import propTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CategoryCarouselArray } from "../utils/StaticData";

export default function CategoryCarousel() {
  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    className: "category-carousel",
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
    <section className="container mx-auto px-4 py-16">
      <Slider {...settings}>
        {CategoryCarouselArray.map((item, index) => (
          <CategoryItem data={item} key={index} />
        ))}
      </Slider>
    </section>
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
