import { ListBulletIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";

function ProductSortBar() {
  const [cardType, setCardType] = useState("grid");

  return (
    <div className="mb-3 flex items-center gap-4 border-[1px] border-gray-300 bg-white p-2">
      <div className="flex items-center gap-1">
        <button
          onClick={() => setCardType("grid")}
          className={`rounded-full border-[0.5px] border-gray-200 p-1 text-gray-800 outline-none ${cardType === "grid" && "border-0 bg-lima-500 text-white"} `}
        >
          <Squares2X2Icon className="size-6 stroke-1" />
        </button>
        <button
          onClick={() => setCardType("list")}
          className={`rounded-full border-[0.5px] border-gray-200 p-1 text-gray-800 outline-none ${cardType === "list" && "border-0 bg-lima-500 text-white"} `}
        >
          <ListBulletIcon className="size-6 stroke-1" />
        </button>
      </div>
      <p className="mr-auto text-sm text-gray-600">There are 16 products</p>
      <SortSelect />
    </div>
  );
}

export default ProductSortBar;

function SortSelect() {
  const [sort, setSort] = useState("Best Sellers");
  return (
    <div className="leading w-72">
      <Select
        onChange={(value) => setSort(value)}
        // value="Best Sellers"
        value={sort}
        className="rounded-md border-[1px] border-gray-300 p-0 text-sm text-gray-900"
        label="Sort By:"
        labelProps={{
          className:
            "before:hidden top-0 items-center  after:hidden -left-14 text-gray-700 text-sm leading-normal",
        }}
        containerProps={{
          className: "h-8",
        }}
      >
        <Option className="text-xs" value="Best Sellers">
          Best Sellers
        </Option>
        <Option className="text-xs" value="Name, A to Z">
          Name, A to Z
        </Option>
        <Option className="text-xs" value="Name, Z to A">
          Name, Z to A
        </Option>
        <Option className="text-xs" value="Price, Low to High">
          Price, Low to High
        </Option>
        <Option className="text-xs" value="Price, High to Low">
          Price, High to Low
        </Option>
      </Select>
    </div>
  );
}
