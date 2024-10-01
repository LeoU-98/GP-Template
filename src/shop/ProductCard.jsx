import propTypes from "prop-types";
import AddToCartButton from "./AddToCartButton";
import StarRating from "../ui/StarRating";
import { Link } from "react-router-dom";

export default function ProductCard({ data, className }) {
  const { productImage, productName, discountPrice, originalPrice } = data;
  return (
    <div
      className={`flex h-full max-w-[312px] cursor-pointer flex-col items-center overflow-hidden rounded-md border-2 bg-white ${className}`}
    >
      {/* image and stars  */}
      <div className="group relative flex flex-col items-center">
        <Link to="##" className="max-h-[280] max-w-[280px] outline-none">
          <img
            src={productImage}
            alt="product"
            className="duration-300 group-hover:scale-110"
          />
          <StarRating
            NumOfStars={4}
            style={
              "absolute bottom-2 left-1/2  -translate-x-1/2 justify-center "
            }
          />
        </Link>
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
  );
}
ProductCard.propTypes = {
  data: propTypes.object,
  className: propTypes.string,
};
