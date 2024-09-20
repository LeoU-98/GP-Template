import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogPreviewData } from "../utils/StaticData";
import BlogPreviewCard from "./BlogPreviewCard";
import propTypes from "prop-types";

function BlogPreview() {
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: false,
    dots: false,
    speed: 500,
    slidesToShow: 3,
    className: "blog-review",
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          dots: false,
          infinite: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          dots: false,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-14">
      <h2 className="relative mb-6 ml-[6px] w-fit border-b-[1px] border-b-gray-400 pb-1 text-xl font-[500] capitalize text-gray-900 after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:mx-auto after:block after:h-[3px] after:w-16 after:bg-lima-400 sm:mx-auto md:text-2xl lg:text-3xl">
        from our blog
      </h2>

      <Slider {...settings}>
        {blogPreviewData.map((el, key) => (
          <BlogPreviewCard data={el} key={key} />
        ))}
      </Slider>
    </div>
  );
}

export default BlogPreview;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} -top-10 right-[2%] size-7 rounded-full bg-white opacity-100 before:absolute before:left-1/2 before:top-1/2 before:z-10 before:-translate-x-1/2 before:translate-y-[-62%] before:rounded-full before:text-xs before:font-bold before:text-black before:content-['⟩'] hover:bg-lima-500 lg:size-9`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} -top-10 left-[78%] size-7 rounded-full bg-white before:absolute before:left-1/2 before:top-1/2 before:z-10 before:-translate-x-1/2 before:translate-y-[-62%] before:rounded-full before:text-xs before:font-bold before:text-black before:content-['⟨'] hover:bg-lima-500 sm:left-[86%] md:left-[89%] lg:left-[90%] lg:size-9 xl:left-[91%]`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

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
