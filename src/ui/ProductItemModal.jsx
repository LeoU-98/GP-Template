import image from "../images/products/hummingbird-printed-t-shirt.jpg";

function ProductItemModal() {
  return (
    <div>
      {/* <DialogCustomAnimation /> */}
      <Tempcomp />
    </div>
  );
}

export default ProductItemModal;

import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

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
      >
        <DialogHeader>
          Product successfully added to your shopping cart
        </DialogHeader>

        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>

        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

function Tempcomp() {
  return (
    <div className="flex w-fit bg-white p-3 py-6">
      {/* left */}
      <div className="flex">
        <div className="size-60">
          <img src={image} className="w-full" />
        </div>
        <div className="flex">
          <div className="flex flex-col gap-1">
            <span className="capitalize text-lima-500">Water pump</span>
            <span className="">$500</span>
            <ItemCounter />
          </div>
          <Specification />
        </div>
      </div>
      {/* right  */}
      <div>
        <div className="ml-5 border-l-[1px] border-gray-300 px-4">
          <p className="mb-3 text-lg">There are 37 items in your cart</p>
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
          <div className="flex items-center gap-2">
            <button className="outline-normal flex items-center justify-center text-nowrap rounded-full bg-lima-500 px-5 py-[10px] text-xs uppercase leading-[normal] text-white duration-300 hover:bg-black">
              continue shopping
            </button>
            <button className="outline-normal flex items-center justify-center text-nowrap rounded-full bg-lima-500 px-5 py-[10px] text-xs uppercase leading-[normal] text-white duration-300 hover:bg-black">
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
    <div className="ml-5 flex flex-col gap-2 text-sm">
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
    <div className="flex items-center justify-between gap-2">
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
