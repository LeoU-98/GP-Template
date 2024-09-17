import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import propTypes from "prop-types";

//////////////////////////
///    fake data       ///
//////////////////////////

import { blogPreviewData } from "../utils/StaticData";

///////////////////////
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

///////////////////////

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
          <BlogPreviewItem data={el} key={key} />
        ))}
      </Slider>
    </div>
  );
}

export default BlogPreview;

function BlogPreviewItem({ data }) {
  const { image, title, descryption, date } = data;

  return (
    <div className="mx-[5px] overflow-hidden rounded-md bg-white">
      <div className="w-full">
        <img src={image} className="w-full" alt="blog image" />
      </div>
      <div className="mx-auto px-4 pb-8 pt-4">
        <h3 className="line-clamp-1 text-xl font-bold">{title}</h3>
        <p className="mt-2 border-b-2 border-b-mercury-200 pb-5 text-gray-700">
          {descryption}
        </p>
        <div className="flex justify-between pt-4 text-gray-900">
          <span>{date}</span>
          <a href="#read" className="duration-300 hover:text-lima-500">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

BlogPreviewItem.propTypes = {
  data: propTypes.object,
};
