import image from "../images/products/hummingbird-printed-t-shirt.jpg";
import propTypes from "prop-types";
import { useState } from "react";
import { Dialog } from "@material-tailwind/react";
import {
  MinusIcon,
  PlusIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function ProductItemModal({ className, svgClassName }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button
        onClick={handleOpen}
        className={`flex items-center rounded-e-full bg-lima-500 px-2 pr-5 text-xs capitalize text-white duration-300 hover:bg-black ${className}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className={`hidden size-4 fill-white sm:inline-block sm:size-7 sm:px-1 ${svgClassName}`}
        >
          <path d="M236,69.4A16.13,16.13,0,0,0,223.92,64H176a48,48,0,0,0-96,0H32.08a16.13,16.13,0,0,0-12,5.4,16,16,0,0,0-3.92,12.48l14.26,120a16,16,0,0,0,16,14.12H209.67a16,16,0,0,0,16-14.12l14.26-120A16,16,0,0,0,236,69.4ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm81.76,168a.13.13,0,0,1-.09,0H46.25L32.08,80H224Z"></path>
        </svg>
        <span className="text-nowrap">add to cart</span>
      </button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className="w-auto max-w-none sm:w-auto sm:max-w-none md:w-auto md:max-w-none lg:w-auto lg:max-w-none xl:w-auto xl:max-w-none 2xl:w-auto 2xl:max-w-none"
      >
        <div className="">
          <div className="relative flex items-center justify-end bg-black px-2 py-3 text-sm capitalize text-white sm:text-base">
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1 text-nowrap">
              <CheckIcon className="relative bottom-[1px] size-5" />
              <span className="">Product is added successfully </span>
            </div>
            <XMarkIcon
              className="size-5 cursor-pointer duration-500 hover:rotate-180"
              onClick={handleOpen}
            />
          </div>
          <ItemPreview handleOpen={handleOpen} />
        </div>
      </Dialog>
    </>
  );
}

export default ProductItemModal;

function ItemPreview({ handleOpen }) {
  return (
    <div className="mx-auto flex w-fit flex-col bg-white p-3 py-6 lg:flex-row lg:px-6 lg:py-12">
      {/* left */}
      <div className="flex flex-col items-center sm:flex-row">
        <div className="size-40">
          <img src={image} className="w-full" />
        </div>
        <div className="flex lg:ml-2">
          <div className="flex flex-col gap-1 text-sm">
            <span className="text-base capitalize text-lima-500">
              Water pump
            </span>
            <span className="">$500</span>
            <span className="">Quantity: 50</span>
            <span className="mb-2">Total Price: $400</span>
            <ItemCounter />
          </div>
          <Specification />
        </div>
      </div>
      {/* right  */}
      <div>
        <div className="mt-3 border-t-[1px] border-gray-300 pt-3 text-sm lg:ml-5 lg:mt-0 lg:border-l-[1px] lg:border-t-0 lg:px-4 lg:pt-0">
          <p className="mb-3 text-base sm:text-lg">
            There are 37 items in your cart
          </p>
          <div className="mb-3 flex justify-between px-1">
            <span>Total products:</span>
            <span>$800</span>
          </div>
          <div className="mb-3 flex justify-between px-1">
            <span>Total shipping:</span>
            <span>$200</span>
          </div>
          <div className="mb-5 flex justify-between bg-gray-200 p-1">
            <span>Total</span>
            <span>$1000 (tax incl.)</span>
          </div>
          <div className="flex flex-col items-center gap-2 lg:flex-row">
            <button
              onClick={handleOpen}
              className="outline-normal flex w-full items-center justify-center text-nowrap rounded-full bg-lima-500 px-6 py-3 text-xs uppercase leading-[normal] text-white duration-300 hover:bg-black lg:w-auto"
            >
              continue shopping
            </button>
            <button
              onClick={handleOpen}
              className="outline-normal flex w-full items-center justify-center text-nowrap rounded-full bg-lima-500 px-6 py-3 text-xs uppercase leading-[normal] text-white duration-300 hover:bg-black lg:w-auto"
            >
              proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Specification() {
  return (
    <div className="ml-3 flex flex-col gap-2 text-sm lg:ml-5">
      <h3 className="border-b-[1px] border-gray-300 pb-1 text-base">
        Specification
      </h3>
      <span>
        Size: <span>S</span>
      </span>
      <span>
        Color: <span>White</span>
      </span>
      <span>
        Diemension: <span>40x60 cm</span>
      </span>
    </div>
  );
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

ItemPreview.propTypes = {
  handleOpen: propTypes.func,
};
ProductItemModal.propTypes = {
  className: propTypes.string,
  svgClassName: propTypes.string,
};
