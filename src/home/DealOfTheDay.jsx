import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import propTypes from "prop-types";

import shovel from "../images/products/the-adventure-begins-framed-poster.jpg";
import redBear from "../images/products/brown-bear-notebook1.jpg";

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
      className={`${className} -top-8 right-[2%] size-7 rounded-full bg-white opacity-100 before:absolute before:left-1/2 before:top-1/2 before:z-10 before:-translate-x-1/2 before:translate-y-[-62%] before:rounded-full before:text-xs before:font-bold before:text-black before:content-['⟩'] lg:size-9`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} -top-8 left-[78%] size-7 rounded-full bg-white before:absolute before:left-1/2 before:top-1/2 before:z-10 before:-translate-x-1/2 before:translate-y-[-62%] before:rounded-full before:text-xs before:font-bold before:text-black before:content-['⟨'] sm:left-[86%] md:left-[89%] lg:left-[90%] lg:size-9 xl:left-[91%]`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function DealOfTheDay() {
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: false,
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          dots: false,
          infinite: false,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-2 py-10 lg:px-0">
      <h2 className="relative mb-5 ml-2 w-fit border-b-[1px] border-b-gray-400 pb-1 text-xl capitalize text-[#222] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:mx-auto after:block after:h-[3px] after:w-16 after:bg-lima-400 sm:mx-auto md:text-2xl lg:text-3xl xl:mb-8">
        deal of the day
      </h2>
      <div className="">
        <Slider {...settings}>
          <DealOfTheDayItem />
          <DealOfTheDayItem />
        </Slider>
      </div>
    </div>
  );
}

export default DealOfTheDay;

function DealOfTheDayItem() {
  return (
    <div className="group mx-auto flex max-w-[400px] cursor-pointer flex-col xl:mx-4 xl:max-w-[685px] xl:flex-row 2xl:mx-auto">
      <div className="mx-auto w-full overflow-hidden">
        <img
          src={shovel}
          alt="deal of the day product"
          className="h-full w-full duration-300 group-hover:scale-110"
        />
      </div>
      <div className="mx-auto flex w-full flex-col gap-2 bg-white p-5">
        <ItemTimer />
        <p className="text-gray-900">Broadfork</p>
        <p className="text-lima-500">
          $34.46
          <span className="ml-1 text-sm text-gray-700 line-through">
            $43.50
          </span>
        </p>
        <div className="">⭐⭐⭐⭐⭐</div>
        <p className="max-w-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod...
        </p>
        {/* add to cart & other  */}
        <div className="flex justify-start gap-4 border-t-2 border-gray-300 pt-3">
          <CartButton />
          <a
            href="add to wish list"
            className="rounded-full bg-mercury-100 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
              viewBox="0 0 256 256"
            >
              <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path>
            </svg>
          </a>
          <a
            href="add to wish list"
            className="rounded-full bg-mercury-100 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
              viewBox="0 0 256 256"
            >
              <path d="M237.66,178.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L212.69,192H200.94a72.12,72.12,0,0,1-58.59-30.15l-41.72-58.4A56.1,56.1,0,0,0,55.06,80H32a8,8,0,0,1,0-16H55.06a72.12,72.12,0,0,1,58.59,30.15l41.72,58.4A56.1,56.1,0,0,0,200.94,176h11.75l-10.35-10.34a8,8,0,0,1,11.32-11.32ZM143,107a8,8,0,0,0,11.16-1.86l1.2-1.67A56.1,56.1,0,0,1,200.94,80h11.75L202.34,90.34a8,8,0,0,0,11.32,11.32l24-24a8,8,0,0,0,0-11.32l-24-24a8,8,0,0,0-11.32,11.32L212.69,64H200.94a72.12,72.12,0,0,0-58.59,30.15l-1.2,1.67A8,8,0,0,0,143,107Zm-30,42a8,8,0,0,0-11.16,1.86l-1.2,1.67A56.1,56.1,0,0,1,55.06,176H32a8,8,0,0,0,0,16H55.06a72.12,72.12,0,0,0,58.59-30.15l1.2-1.67A8,8,0,0,0,113,149Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

//////////////////////////////////

function ItemTimer() {
  return (
    <div className="flex w-fit justify-between gap-2">
      {/* days */}
      <div className="rounded-full bg-mercury-100">
        <div className="flex size-14 flex-col items-center justify-center">
          <span className="block text-gray-900">60</span>
          <span className="block text-xs text-mercury-600">Days</span>
        </div>
      </div>
      {/* hours */}
      <div className="rounded-full bg-mercury-100">
        <div className="flex size-14 flex-col items-center justify-center">
          <span className="block text-gray-900">43</span>
          <span className="block text-xs text-mercury-600">Hours</span>
        </div>
      </div>
      {/* mins */}
      <div className="rounded-full bg-mercury-100">
        <div className="flex size-14 flex-col items-center justify-center">
          <span className="block text-gray-900">23</span>
          <span className="block text-xs text-mercury-600">Mins</span>
        </div>
      </div>
      {/* secs */}
      <div className="rounded-full bg-mercury-100">
        <div className="flex size-14 flex-col items-center justify-center">
          <span className="block text-gray-900">13</span>
          <span className="block text-xs text-mercury-600">Secs</span>
        </div>
      </div>
    </div>
  );
}

function CartButton() {
  return (
    <div className="flex">
      <div className="flex rounded-s-full bg-mercury-100 ps-3 sm:py-1">
        <input
          type="text"
          defaultValue="1"
          className="w-[24px] bg-mercury-100"
        />
        <div className="flex w-fit flex-col justify-between gap-1 px-1 sm:px-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-3"
            viewBox="0 0 256 256"
          >
            <path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-3"
            viewBox="0 0 256 256"
          >
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        </div>
      </div>
      <button className="flex items-center text-nowrap rounded-e-full bg-lima-500 px-3 pe-4 text-xs capitalize text-white duration-300 hover:bg-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="hidden size-4 fill-white sm:size-7 sm:px-1 2xl:inline-block"
        >
          <path d="M236,69.4A16.13,16.13,0,0,0,223.92,64H176a48,48,0,0,0-96,0H32.08a16.13,16.13,0,0,0-12,5.4,16,16,0,0,0-3.92,12.48l14.26,120a16,16,0,0,0,16,14.12H209.67a16,16,0,0,0,16-14.12l14.26-120A16,16,0,0,0,236,69.4ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm81.76,168a.13.13,0,0,1-.09,0H46.25L32.08,80H224Z"></path>
        </svg>
        <span>add to cart</span>
      </button>
    </div>
  );
}
