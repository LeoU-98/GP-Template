import StarRating from "../ui/StarRating";
import AddToCartButton from "./AddToCartButton";
import ItemCounter from "./ItemCounter";
import ProductShare from "./ProductShare";

export default function ProductSpecifications() {
  return (
    <div className="w-full bg-white p-4 lg:w-1/2 xl:w-3/5">
      <div className="">
        <h3 className="mb-5 text-xl">Axe</h3>
        <div className="mb-2">
          <StarRating NumOfStars={5} starSize="20px" />
          <a className="text-gray-700 hover:text-lima-500">1 reviews </a>
          <a className="text-gray-700 hover:text-lima-500">Write a review</a>
        </div>
        <div>
          <span className="text-sm text-gray-800 line-through">$26.60</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center text-2xl text-lima-500">
              $100
            </span>
            <span className="flex h-fit items-center justify-center bg-lima-500 px-1 py-[2px] text-[12px] font-bold text-white">
              Save 20%
            </span>
          </div>
        </div>
        <span className="mb-4 text-xs">Tax included</span>
        <p className="mb-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <ItemSpecifications />
      <div>
        <span>Quantity</span>
        <div className="mb-4 flex items-center gap-3">
          <ItemCounter />
          <AddToCartButton />
        </div>
        <div className="mb-4">
          <a
            href="add to wish list"
            className="flex w-fit items-center justify-center gap-2"
          >
            <span className="inline-block rounded-full bg-mercury-100 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 256 256"
              >
                <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path>
              </svg>
            </span>
            <span className="inline-block text-sm text-gray-700 hover:text-lima-500">
              Add to Wishlist
            </span>
          </a>
        </div>
        <ProductShare />
      </div>
    </div>
  );
}

function ItemSpecifications() {
  return <div className="mb-4 h-20 bg-blue-300">some spec</div>;
}
