import product1 from "../images/products/brown-bear-printed-sweater.jpg";
import product2 from "../images/products/hummingbird-cushion.jpg";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function CartPreviewItem() {
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
