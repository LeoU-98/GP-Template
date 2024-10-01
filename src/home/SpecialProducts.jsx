import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import propTypes from "prop-types";
import ProductCard from "../shop/ProductCard";
import { productData } from "../utils/StaticData";

function SpecialProducts() {
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: false,
    dots: false,
    speed: 500,
    rows: 2,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          dots: false,
          infinite: false,
        },
      },
      {
        breakpoint: 1140,

        settings: {
          slidesToShow: 3,
          dots: false,
          infinite: false,
        },
      },

      {
        breakpoint: 960,

        settings: {
          slidesToShow: 2,
          dots: false,
          infinite: false,
        },
      },
      {
        breakpoint: 540,

        settings: {
          slidesToShow: 1,
          dots: false,
          infinite: false,
        },
      },
    ],
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="relative mb-6 ml-3 w-fit border-b-[1px] border-b-gray-400 pb-1 text-xl capitalize text-gray-900 after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:mx-auto after:block after:h-[3px] after:w-16 after:bg-lima-400 sm:mx-auto md:text-2xl lg:text-3xl">
            special products
          </h2>
        </div>

        <Slider {...settings}>
          {productData.map((product) => (
            <ProductCard
              data={product}
              key={product.id}
              className="mx-auto mb-[10px] w-full md:mx-0 md:max-w-none"
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SpecialProducts;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} -top-10 right-[2%] size-7 rounded-full bg-white opacity-100 duration-500 before:absolute before:left-1/2 before:top-1/2 before:z-10 before:-translate-x-1/2 before:translate-y-[-62%] before:rounded-full before:text-xs before:font-bold before:text-black before:content-['⟩'] hover:bg-lima-400 lg:size-9`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} -top-10 left-[79%] size-7 rounded-full bg-white duration-500 before:absolute before:left-1/2 before:top-1/2 before:z-10 before:-translate-x-1/2 before:translate-y-[-62%] before:rounded-full before:text-xs before:font-bold before:text-black before:content-['⟨'] hover:bg-lima-400 sm:left-[85%] md:left-[87%] lg:left-[89%] lg:size-9 xl:left-[90%]`}
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
