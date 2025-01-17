import { TrashIcon } from "@heroicons/react/24/outline";

import propTypes from "prop-types";
import ItemCounter from "../shop/ItemCounter";
import { removeItem } from "./cartSlice";
import { useDispatch } from "react-redux";

export default function CartItem({ data }) {
  const { id, productImage, productName, discountPrice, originalPrice, count } =
    data;
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col items-center border-b-[1px] border-gray-300 px-2 md:flex-row">
      <div className="size-40">
        <img src={productImage} alt={productName} />
      </div>
      {/* text */}
      <div className="flex justify-center gap-2 lg:mr-auto">
        <div className="flex w-36 flex-col gap-1 py-4">
          <span className="capitalize">{productName}</span>
          <div className="flex gap-4">
            <span className="flex items-center justify-center text-sm text-gray-600 line-through">{`$${originalPrice}`}</span>
            <span className="flex items-center justify-center bg-lima-500 px-[6px] py-[3px] text-xs text-white">
              -20%
            </span>
          </div>
          <span className="text-base text-lima-500">{`$${discountPrice}`}</span>
        </div>
        <Specification />
      </div>
      <div className="flex items-center justify-center gap-4">
        {/* count */}
        <ItemCounter itemID={id} forCartView={true} />
        {/* total price */}
        <div className="flex min-w-12 items-center justify-center">{`$${(count * discountPrice).toFixed(2).replace(/\.?0+$/, "")}`}</div>
        {/* delete btn  */}
        <button
          onClick={() => dispatch(removeItem({ id: id }))}
          className="flex cursor-pointer items-center justify-center fill-gray-900 p-6 duration-300 hover:text-red-500"
        >
          <TrashIcon className="size-5" />
        </button>
      </div>
    </li>
  );
}

CartItem.propTypes = { data: propTypes.object };

function Specification() {
  return (
    <div className="flex w-36 flex-col gap-2 py-4 text-sm">
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
