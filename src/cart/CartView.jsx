import BreadCrumb from "../ui/BreadCrumb";
import { useCart } from "./cartSlice";
import CartItem from "./CartItem";
import cartBackground_800_650 from "../images/cartBackground_800_650.jpg";

function CartView() {
  const { cart } = useCart();

  return (
    <div className="container mx-auto mb-20">
      <BreadCrumb />

      <div className="mt-4 flex flex-col justify-between gap-4 px-2 lg:flex-row">
        <div className="basis-3/5 border-[1px] border-gray-300 bg-white">
          <h2 className="border-b-[1px] border-gray-300 px-3 py-3 text-[20px] font-[500] text-gray-900">
            Shopping Cart
          </h2>
          <ul>
            {cart.length === 0 ? (
              <div className="relative h-64 overflow-hidden text-center text-xl text-green-500">
                <img
                  src={cartBackground_800_650}
                  className="absolute max-h-96 w-full"
                  alt="Empty Cart Background"
                />
                <p className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 text-nowrap text-2xl">
                  Your Cart is Empty
                </p>
              </div>
            ) : (
              cart.map((item) => <CartItem data={item} key={item.id} />)
            )}
          </ul>
        </div>
        <ActionAside />
      </div>
    </div>
  );
}

export default CartView;

function ActionAside() {
  const { totalItemsInCart, totalCartPrice } = useCart();

  return (
    <div className="h-fit basis-2/5 border-[1px] border-gray-300 bg-white">
      <div>
        <div className="flex justify-between border-b-[1px] border-gray-300 px-3 py-4">
          <span className="text-sm">{totalItemsInCart} items</span>
          <span>${totalCartPrice.toFixed(2).replace(/\.?0+$/, "")}</span>
        </div>
        <div className="flex justify-between border-b-[1px] border-gray-300 px-3 py-4">
          <span className="text-sm">Total Price (tax incl.)</span>
          <span className="text-lg">
            $
            {(totalCartPrice + 0.14 * totalCartPrice)
              .toFixed(2)
              .replace(/\.?0+$/, "")}
          </span>
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
