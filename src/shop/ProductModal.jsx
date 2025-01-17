import propTypes from "prop-types";
import { Dialog } from "@material-tailwind/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ItemCounter from "./ItemCounter";
import { useSelector } from "react-redux";
import { useCart } from "../cart/cartSlice";
import { Link } from "react-router-dom";

function ProductModal({ handleOpen, open, itemID }) {
  return (
    <>
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
          <ItemPreview handleOpen={handleOpen} itemID={itemID} />
        </div>
      </Dialog>
    </>
  );
}

export default ProductModal;

function ItemPreview({ handleOpen, itemID }) {
  const item = useSelector((store) =>
    store.cart.find((item) => item.id === itemID),
  );
  const { totalItemsInCart, totalCartPrice } = useCart();

  const totalItemPrice = item?.count * item?.discountPrice;

  return (
    <div className="mx-auto flex w-fit flex-col bg-white p-3 py-6 lg:flex-row lg:px-6 lg:py-12">
      {/* left */}
      <div className="flex flex-col items-center sm:flex-row">
        <div className="size-40">
          {item?.productImage ? (
            <img src={item?.productImage} className="w-full" />
          ) : (
            <XMarkIcon className="w-36 text-red-500" />
          )}
        </div>
        <div className="flex lg:ml-2">
          <div className="flex flex-col gap-1 text-sm">
            <span className="max-w-40 text-base capitalize text-lima-500">
              {item?.productName}
            </span>
            <span className="">
              ${item?.discountPrice ? item?.discountPrice : 0}
            </span>
            <span className="">Quantity:{item?.count ? item?.count : 0}</span>
            <span className="mb-2">
              Total Price: ${totalItemPrice.toFixed(2).replace(/\.?0+$/, "")}
            </span>
            <ItemCounter itemID={itemID} handleOpen={handleOpen} />
          </div>
          <Specification />
        </div>
      </div>
      {/* right  */}
      <div>
        <div className="mt-3 border-t-[1px] border-gray-300 pt-3 text-sm lg:ml-5 lg:mt-0 lg:border-l-[1px] lg:border-t-0 lg:px-4 lg:pt-0">
          <p className="mb-3 text-base sm:text-lg">
            There are {totalItemsInCart} items in your cart
          </p>
          <div className="mb-3 flex justify-between px-1">
            <span>Total products:</span>
            <span>${totalCartPrice.toFixed(2).replace(/\.?0+$/, "")}</span>
          </div>
          <div className="mb-3 flex justify-between px-1">
            <span>Total shipping:</span>
            <span>$200</span>
          </div>
          <div className="mb-5 flex justify-between bg-gray-200 p-1">
            <span>Total</span>
            <span>
              ${(totalCartPrice + 200).toFixed(2).replace(/\.?0+$/, "")} (tax
              incl.)
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 lg:flex-row">
            <button
              onClick={handleOpen}
              className="outline-normal flex w-full items-center justify-center text-nowrap rounded-full bg-lima-500 px-6 py-3 text-xs uppercase leading-[normal] text-white duration-300 hover:bg-black lg:w-auto"
            >
              continue shopping
            </button>
            <Link
              to="/view-cart"
              className="outline-normal flex w-full items-center justify-center text-nowrap rounded-full bg-lima-500 px-6 py-3 text-xs uppercase leading-[normal] text-white duration-300 hover:bg-black lg:w-auto"
            >
              View Cart
            </Link>
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

ItemPreview.propTypes = {
  handleOpen: propTypes.func,
  itemID: propTypes.number,
};
ProductModal.propTypes = {
  handleOpen: propTypes.func,
  open: propTypes.bool,
  itemID: propTypes.number,
};
