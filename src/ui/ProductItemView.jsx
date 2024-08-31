import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import BreadCrumb from "./BreadCrumb";
import ProductItemModal from "./ProductItemModal";

function ProductItemView() {
  return (
    <div className="container mx-auto mb-16">
      <BreadCrumb />

      <div className="flex">
        <ProductItemImagePreview />
        <ProductItemDetails />
      </div>

      <div></div>
    </div>
  );
}

export default ProductItemView;

//////////////////////////////////////////
///          Product Image Preview

function ProductItemImagePreview() {
  return <div className="size-[650px] basis-1/2 bg-blue-500">Item Preview</div>;
}

//////////////////////////////////////////
///          Product Details

function ProductItemDetails() {
  return (
    <div className="basis-1/2 bg-white px-2">
      <div className="">
        <h3 className="mb-5 text-xl">Axe</h3>
        <div className="mb-2">
          <span className="">⭐⭐⭐⭐⭐</span>
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
      <ItemViewSpecification />
      <div>
        <span>Quantity</span>
        <div className="mb-4 flex items-center gap-3">
          <ItemCounter />
          <ProductItemModal className="justify-center rounded-full px-2 py-1" />
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
            <span className="inline-block text-sm text-gray-700">
              Add to Wishlist
            </span>
          </a>
        </div>
        <ShareSection />
      </div>
    </div>
  );
}

function ShareSection() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-black">Share</span>
      <a
        className="flex cursor-pointer items-center justify-center duration-300 hover:fill-lima-500"
        href="facebook lol"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="size-6"
        >
          <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
        </svg>
      </a>
      <a
        className="flex cursor-pointer items-center justify-center duration-300 hover:fill-lima-500"
        href="facebook lol"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="size-6"
        >
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
      </a>
      <a
        className="flex cursor-pointer items-center justify-center duration-300 hover:fill-lima-500"
        href="facebook lol"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="size-6"
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      </a>
      <a
        className="flex cursor-pointer items-center justify-center duration-300 hover:fill-lima-500"
        href="facebook lol"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="size-6"
        >
          <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
        </svg>
      </a>
    </div>
  );
}

function ItemViewSpecification() {
  return <div className="mb-4 h-20 bg-blue-300">some spec</div>;
}

function ItemCounter() {
  return (
    <div className="flex w-fit items-center justify-between gap-1">
      <button className="flex items-center justify-center rounded-full border-none bg-lima-500 fill-white p-1 text-white hover:bg-black">
        <MinusIcon className="size-4" />
      </button>
      <input
        type="text"
        defaultValue={50}
        className="w-8 text-center outline-none focus:ring-1 focus:ring-lima-500"
      />
      <button className="flex items-center justify-center rounded-full border-none bg-lima-500 fill-white p-1 text-white hover:bg-black">
        <PlusIcon className="size-4" />
      </button>
    </div>
  );
}
