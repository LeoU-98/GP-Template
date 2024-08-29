import BreadCrumb from "../ui/BreadCrumb";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

/////////////////////////////////////////////////
////         Fade Data
import { productData } from "../utils/ProductsData";

/////////////////////////////////////////////////
////         Components

function CartView() {
  return (
    <div className="container mx-auto mb-20">
      <BreadCrumb />

      <div className="mt-4 flex flex-col justify-between gap-4 px-2 lg:flex-row">
        <div className="basis-3/5 border-[1px] border-gray-300 bg-white">
          <h2 className="border-b-[1px] border-gray-300 px-3 py-3 text-[20px] font-[500] text-gray-900">
            Shopping Cart
          </h2>
          <div>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>
        <ActionAside />
      </div>
    </div>
  );
}

export default CartView;

function CartItem() {
  const Item = productData[0];

  return (
    <div className="flex flex-col items-center border-b-[1px] border-gray-300 px-2 md:flex-row">
      <div className="size-40">
        <img src={Item.productImage} alt="cart item image" />
      </div>
      {/* text */}
      <div className="flex justify-center lg:mr-auto">
        <div className="flex flex-col gap-1 py-4">
          <span className="capitalize">{Item.productName}</span>
          <div className="flex gap-4">
            <span className="flex items-center justify-center text-sm text-gray-600 line-through">{`$${Item.discountPrice}`}</span>
            <span className="flex items-center justify-center bg-lima-500 px-[6px] py-[3px] text-xs text-white">
              -20%
            </span>
          </div>
          <span className="text-base text-lima-500">{`$${Item.originalPrice}`}</span>
        </div>
        <Specification />
      </div>
      <ItemAction />
    </div>
  );
}

function ItemAction() {
  return (
    <div className="flex items-center justify-center gap-4">
      {/* count */}
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
      {/* total price */}
      <div className="flex items-center justify-center">{`$${150}`}</div>
      {/* delete btn  */}
      <div className="flex cursor-pointer items-center justify-center fill-gray-900 p-6 duration-300 hover:text-red-500">
        <TrashIcon className="size-5" />
      </div>
    </div>
  );
}

function Specification() {
  return (
    <div className="ml-5 flex flex-col gap-2 py-4 text-sm">
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

function ActionAside() {
  return (
    <div className="h-fit basis-2/5 border-[1px] border-gray-300 bg-white">
      <div>
        <div className="flex justify-between border-b-[1px] border-gray-300 px-3 py-4">
          <span className="text-sm">21 items</span>
          <span>$512.10</span>
        </div>
        <div className="flex justify-between border-b-[1px] border-gray-300 px-3 py-4">
          <span className="text-sm">Total(tax incl.)</span>
          <span className="text-lg">$512.10</span>
        </div>
        <form className="py-4">
          <button className="mx-auto block rounded-full bg-lima-500 px-5 py-2 text-sm uppercase text-white duration-300 hover:bg-black">
            proceed to checkout
          </button>
        </form>
      </div>
    </div>
  );
}
