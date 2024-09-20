import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ItemCounter() {
  const [count, setCount] = useState(0);

  function handleInc() {
    setCount(count + 1);
  }
  function handleDec() {
    if (count === 0) return;
    setCount(count - 1);
  }
  function handleSetCount(e) {
    setCount(Number(e.target.value));
  }

  return (
    <div className="flex items-center justify-between gap-2">
      <button
        onClick={handleDec}
        className="flex items-center justify-center rounded-full border-none bg-lima-500 fill-white p-1 text-white duration-300 hover:bg-black"
      >
        <MinusIcon className="size-4" />
      </button>
      <input
        type="text"
        value={count}
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
