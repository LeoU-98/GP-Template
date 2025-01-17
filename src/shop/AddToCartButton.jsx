import ProductModal from "./ProductModal";
import propTypes from "prop-types";
import { useState } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function AddToCartButton({ svgClassName, itemID }) {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }

  return (
    <>
      <button
        onClick={handleOpen}
        className={`flex items-center gap-1 rounded-full bg-lima-500 px-4 py-[6px] text-xs capitalize text-white duration-300 hover:bg-black`}
      >
        <ShoppingBagIcon className={`size-6 text-white ${svgClassName}`} />
        <span className="relative top-[1px] flex items-center justify-center">
          add to cart
        </span>
      </button>

      <ProductModal handleOpen={handleOpen} open={open} itemID={itemID} />
    </>
  );
}

AddToCartButton.propTypes = {
  data: propTypes.object,
  svgClassName: propTypes.string,
  itemID: propTypes.number,
};
