import propTypes from "prop-types";
import { Rating } from "@material-tailwind/react";
import AddToCartButton from "../ui/AddToCartButton";

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
