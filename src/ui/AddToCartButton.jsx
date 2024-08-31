import ProductItemModal from "./ProductItemModal";

export default function AddToCartButton() {
  return (
    <div className="flex">
      <div className="flex rounded-s-full bg-mercury-100 py-1 ps-3 sm:py-1">
        <input
          type="text"
          defaultValue="1"
          className="w-[24px] bg-transparent outline-none"
        />
        <div className="flex w-fit flex-col justify-between gap-1 px-1 sm:px-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-3"
            viewBox="0 0 256 256"
          >
            <path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-3"
            viewBox="0 0 256 256"
          >
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
        </div>
      </div>
      <ProductItemModal />
    </div>
  );
}
