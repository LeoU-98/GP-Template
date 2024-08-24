import propTypes from "prop-types";
import { Rating } from "@material-tailwind/react";

function CartButton() {
  return (
    <div className="flex">
      <div className="flex rounded-s-full bg-mercury-100 py-1 ps-3 sm:py-1">
        <input
          type="text"
          defaultValue="1"
          className="w-[24px] bg-transparent outline-none"
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
      <button className="flex items-center rounded-e-full bg-lima-500 px-2 pr-5 text-xs capitalize text-white duration-300 hover:bg-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="hidden size-4 fill-white sm:inline-block sm:size-7 sm:px-1"
        >
          <path d="M236,69.4A16.13,16.13,0,0,0,223.92,64H176a48,48,0,0,0-96,0H32.08a16.13,16.13,0,0,0-12,5.4,16,16,0,0,0-3.92,12.48l14.26,120a16,16,0,0,0,16,14.12H209.67a16,16,0,0,0,16-14.12l14.26-120A16,16,0,0,0,236,69.4ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm81.76,168a.13.13,0,0,1-.09,0H46.25L32.08,80H224Z"></path>
        </svg>
        <span className="text-nowrap">add to cart</span>
      </button>
    </div>
  );
}

export default function ProductItem({ data }) {
  const { productImage, productName, discountPrice, originalPrice } = data;
  return (
    <div className="h-full">
      {/* inner Card Data  */}
      <div className="flex h-full max-w-[312px] cursor-pointer flex-col items-center overflow-hidden rounded-md border-2 bg-white">
        {/* image and stars  */}
        <div className="group relative flex flex-col items-center">
          <div className="max-h-[280] max-w-[280px]">
            <img
              src={productImage}
              alt="product"
              className="duration-300 group-hover:scale-110"
            />
          </div>
          <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2">
            {/* <div className="absolute bottom-2 left-1/2 flex w-60 -translate-x-1/2"> */}
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
          <CartButton />
        </div>
      </div>
    </div>
  );
}
ProductItem.propTypes = {
  data: propTypes.object,
};
