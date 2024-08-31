import image from "../images/products/hummingbird-printed-t-shirt.jpg";
import propTypes from "prop-types";

import React from "react";
import { Button, Dialog } from "@material-tailwind/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

function ProductItemModal() {
  return (
    <div>
      <DialogCustomAnimation />
      {/* <ItemPreview /> */}
    </div>
  );
}

export default ProductItemModal;

function DialogCustomAnimation() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>
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
          <div className="flex items-center justify-center bg-black py-3 text-xs capitalize text-white sm:text-base">
            Product successfully added to your shopping cart
          </div>
          <ItemPreview handleOpen={handleOpen} />
        </div>
      </Dialog>
    </>
  );
}

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
