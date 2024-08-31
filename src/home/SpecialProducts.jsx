import Slider from "react-slick";
import { Rating } from "@material-tailwind/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import propTypes from "prop-types";

////////////////////////////
////     fake data      ////
////////////////////////////

import { productData } from "../utils/StaticData";
import ProductItemModal from "../ui/ProductItemModal";
import AddToCartButton from "../ui/AddToCartButton";

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
      className={`${className} -top-6 right-[2%] size-7 rounded-full bg-white opacity-100 duration-500 before:absolute before:left-1/2 before:top-1/2 before:z-10 before:-translate-x-1/2 before:translate-y-[-62%] before:rounded-full before:text-xs before:font-bold before:text-black before:content-['⟩'] hover:bg-lima-400 lg:size-9`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} -top-6 left-[78%] size-7 rounded-full bg-white duration-500 before:absolute before:left-1/2 before:top-1/2 before:z-10 before:-translate-x-1/2 before:translate-y-[-62%] before:rounded-full before:text-xs before:font-bold before:text-black before:content-['⟨'] hover:bg-lima-400 sm:left-[86%] md:left-[89%] lg:left-[90%] lg:size-9 xl:left-[91%]`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

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
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          dots: false,
          infinite: false,
        },
      },

      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          dots: false,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: false,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-2 lg:px-0">
        <div>
          <h2 className="relative mb-[10px] ml-2 w-fit border-b-[1px] border-b-gray-400 pb-1 text-xl capitalize text-gray-900 after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:mx-auto after:block after:h-[3px] after:w-16 after:bg-lima-400 sm:mx-auto md:text-2xl lg:text-3xl">
            special products
          </h2>
        </div>

        <div className="">
          <Slider {...settings}>
            {productData.map((el, key) => (
              <ProductItem data={el} key={key} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SpecialProducts;

// function CartButton() {
//   return (
//     <div className="flex">
//       <div className="flex rounded-s-full bg-mercury-100 py-1 ps-3 sm:py-1">
//         <input
//           type="text"
//           defaultValue="1"
//           className="w-[24px] bg-transparent outline-none"
//         />
//         <div className="flex w-fit flex-col justify-between gap-1 px-1 sm:px-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="size-3"
//             viewBox="0 0 256 256"
//           >
//             <path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"></path>
//           </svg>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="size-3"
//             viewBox="0 0 256 256"
//           >
//             <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
//           </svg>
//         </div>
//       </div>
//       <ProductItemModal />
//     </div>
//   );
// }

function ProductItem({ data }) {
  const { productImage, productName, discountPrice, originalPrice } = data;
  return (
    <div className="">
      {/* inner Card Data  */}
      <div className="mx-auto mt-[10px] flex max-w-[312px] cursor-pointer flex-col items-center overflow-hidden rounded-md border-2 bg-white">
        {/* image and stars  */}
        <div className="group relative flex flex-col items-center">
          <div className="size-[280px]">
            <img
              src={productImage}
              alt="product"
              className="duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2">
            {/* ⭐⭐ */}
            <Rating value={4} readonly />
          </div>
        </div>
        {/* text data and cart  */}
        <div className="z-10 flex w-11/12 flex-col items-center gap-2 border-t-2 border-mercury-100 py-4">
          <div className="text-nowrap capitalize text-gray-900">
            {productName}
          </div>
          <div className="text-lima-500">
            ${discountPrice}
            <span className="ml-1 text-sm text-gray-600 line-through">
              ${originalPrice}
            </span>
          </div>
          {/* add to cart data  */}
          <AddToCartButton />
        </div>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  data: propTypes.object,
};
