import { XMarkIcon } from "@heroicons/react/24/outline";
import propTypes from "prop-types";
import { removeItem } from "./cartSlice";
import { useDispatch } from "react-redux";

export default function CartPreviewItem({ data }) {
  const { id, productImage, productName, discountPrice, count } = data;
  const dispatch = useDispatch();

  return (
    <li className="mb-4">
      <div className="grid grid-cols-[90px_1fr_auto]">
        {/* image  */}
        <div className="size-20 overflow-hidden border-[1px] border-gray-400">
          <img src={productImage} alt={productName}></img>
        </div>
        {/* text & Pricing  */}
        <div className="">
          <h4>
            <a className="line-clamp-1 cursor-pointer text-gray-700 hover:text-lima-500">
              {productName}
            </a>
          </h4>
          <div>
            <span className="text-gray-700">
              {count}
              <span className="text-sm">x</span>
            </span>
            <span className="ml-2 text-lima-500">${discountPrice}</span>
          </div>
        </div>
        {/* delete btn  */}
        <div className="justify-self-end">
          <button onClick={() => dispatch(removeItem({ id: id }))}>
            <XMarkIcon className="size-5 duration-300 hover:stroke-red-400" />
          </button>
        </div>
      </div>
    </li>
  );
}

CartPreviewItem.propTypes = { data: propTypes.object };
