import { useState } from "react";
import product1 from "../images/products/brown-bear-printed-sweater.jpg";
import product2 from "../images/products/hummingbird-cushion.jpg";
import propTypes from "prop-types";

import { XMarkIcon } from "@heroicons/react/24/outline";

CartPreview.propTypes = {
  open: propTypes.bool,
};

function CartPreview({ open }) {
  return (
    <div
      className={`absolute right-0 top-full z-50 w-80 origin-top scale-y-0 rounded-md border-b-2 border-lima-500 bg-white px-5 duration-500 ${open ? "scale-y-100 py-5" : ""} `}
    >
      {/* items  */}
      <ul className="max-h-72 min-h-6 overflow-y-auto p-2">
        <CartPreviewItem />
        <CartPreviewItem />
        <CartPreviewItem />
        <CartPreviewItem />
        <CartPreviewItem />
        <CartPreviewItem />
        <CartPreviewItem />
      </ul>
      {/* total  */}
      <div className="flex justify-between border-y-[1px] border-gray-400 py-4">
        <span className="font-bold text-gray-900">Total</span>
        <span className="ml-2 text-lima-500">$315.20</span>
      </div>
      {/* action & checkout  */}
      <div className="flex justify-center gap-2 py-2">
        <a className="cursor-pointer rounded-full bg-lima-500 px-5 py-3 text-sm uppercase text-white duration-300 hover:bg-black">
          view cart
        </a>
        <a className="cursor-pointer rounded-full bg-lima-500 px-5 py-3 text-sm uppercase text-white duration-300 hover:bg-black">
          check out
        </a>
      </div>
    </div>
  );
}

export default CartPreview;

function CartPreviewItem() {
  return (
    <li className="mb-4">
      <div className="grid grid-cols-3">
        {/* image  */}
        <div className="size-20 overflow-hidden border-[1px] border-gray-400">
          <img src={product1} alt="product"></img>
        </div>
        {/* text & Pricing  */}
        <div className="">
          <h4>
            <a className="cursor-pointer text-gray-700 hover:text-lima-500">
              Sharpner
            </a>
          </h4>
          <div>
            <span className="text-gray-700">
              1<span className="text-sm">x</span>
            </span>
            <span className="ml-2 text-lima-500">$20.15</span>
          </div>
        </div>

        {/* delete btn  */}

        <div className="justify-self-end">
          <button>
            <XMarkIcon className="size-5 duration-300 hover:stroke-red-400" />
          </button>
        </div>
      </div>
    </li>
  );
}
