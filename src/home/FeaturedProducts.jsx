import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import propTypes from "prop-types";

////////////////////////////
///       fake data     ///
///////////////////////////

import { productData } from "../utils/StaticData";
import StarRating from "../ui/StarRating";

/////////////////////////////

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
      className={`${className} -top-11 right-[2%] size-7 rounded-full bg-white opacity-100 duration-500 before:absolute before:left-1/2 before:top-1/2 before:z-10 before:-translate-x-1/2 before:translate-y-[-62%] before:rounded-full before:text-xs before:font-bold before:text-black before:content-['⟩'] hover:bg-lima-400 lg:size-9`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} -top-11 left-[78%] size-7 rounded-full bg-white duration-500 before:absolute before:left-1/2 before:top-1/2 before:z-10 before:-translate-x-1/2 before:translate-y-[-62%] before:rounded-full before:text-xs before:font-bold before:text-black before:content-['⟨'] hover:bg-lima-400 sm:left-[86%] md:left-[89%] lg:left-[90%] lg:size-9 xl:left-[83%]`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

//////////////////////////////
function FeaturedProducts() {
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: false,
    dots: false,
    speed: 500,
    rows: 2,
    slidesToShow: 3,
    centerPadding: "60px",

    responsive: [
      {
        breakpoint: 1319,
        settings: {
          slidesToShow: 2,
          dots: false,
          infinite: false,
        },
      },
      {
        breakpoint: 1139,
        settings: {
          slidesToShow: 3,
          dots: false,
          infinite: false,
        },
      },

      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          dots: false,
          infinite: false,
        },
      },
      {
        breakpoint: 539,
        settings: {
          slidesToShow: 3,
          dots: false,
          infinite: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          dots: false,
          infinite: false,
        },
      },
    ],
  };
  return (
    <section className="min-h-64 xl:h-80 xl:min-w-[33rem] xl:max-w-[550px] 2xl:w-[640px] 2xl:max-w-none">
      <h3 className="mb-6 ml-2 text-xl capitalize sm:mx-auto sm:w-fit sm:text-2xl md:text-2xl lg:text-3xl xl:mx-0">
        featured products
      </h3>
      <Slider {...settings}>
        {productData.map((el, key) => (
          <OtherProductsItem data={el} key={key} />
        ))}
      </Slider>
    </section>
  );
}

export default FeaturedProducts;

function OtherProductsItem({ data }) {
  const { productImage, productName, discountPrice, originalPrice } = data;

  return (
    <article className="mb-[10px] flex flex-col items-center gap-1 bg-white p-2 sm:flex-row sm:p-3 xl:max-w-64">
      <div className="mx-auto max-h-20 max-w-20 2xl:w-2/5">
        <img src={productImage} className="w-full" alt="product image" />
      </div>
      <div className="">
        <p className="mx-auto line-clamp-1 w-fit text-balance capitalize text-gray-800 sm:mx-0">
          {productName}
        </p>
        <div className="mx-auto w-fit text-lima-500 sm:mx-0">
          ${discountPrice}
          <span className="ml-1 text-sm text-gray-700 line-through">
            ${originalPrice}
          </span>
        </div>
        <StarRating starSize="20px" NumOfStars={5} />
      </div>
    </article>
  );
}

OtherProductsItem.propTypes = {
  data: propTypes.object,
};
