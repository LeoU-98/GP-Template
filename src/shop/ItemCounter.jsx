import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateItemCount } from "../cart/cartSlice";

export default function ItemCounter({ itemID, handleOpen }) {
  const dispatch = useDispatch();
  const item = useSelector((store) =>
    store.cart.find((item) => item.id === itemID),
  );

  function handleInc() {
    dispatch(updateItemCount({ id: itemID, count: item.count + 1 }));
  }
  function handleDec(e) {
    if (item.count === 1) {
      e.stopPropagation();
      dispatch(removeItem({ id: itemID }));
      handleOpen((state) => !state);
      return;
    }

    dispatch(updateItemCount({ id: itemID, count: item.count - 1 }));
  }

  function handleSetCount(e) {
    dispatch(updateItemCount({ id: itemID, count: Number(e.target.value) }));
  }

  return (
    <div className="flex items-center justify-between gap-2">
      <button
        onClick={(e) => handleDec(e)}
        className={`flex items-center justify-center rounded-full border-none ${item?.count === 1 ? "bg-red-500" : "bg-lima-500"} fill-white p-1 text-white duration-300 hover:bg-black`}
      >
        {item?.count === 1 ? (
          <TrashIcon className="size-4" />
        ) : (
          <MinusIcon className="size-4" />
        )}
      </button>
      <input
        type="text"
        value={item?.count ? item?.count : 0}
        onChange={handleSetCount}
        className="w-8 text-center outline-none focus:ring-1 focus:ring-lima-500"
      />
      <button
        onClick={handleInc}
        className="flex items-center justify-center rounded-full border-none bg-lima-500 fill-white p-1 text-white duration-300 hover:bg-black"
      >
        <PlusIcon className="size-4" />
      </button>
    </div>
  );
}

ItemCounter.propTypes = {
  itemID: propTypes.number,
  handleOpen: propTypes.func,
};
