import { useState } from "react";
import logo from "../images/logo.jpg";
import CartPreview from "./CartPreview";

function HeaderMid() {
  const [isCartPreviewOpen, setIsCartPreviewOpen] = useState(false);

  return (
    <div className="bg-white">
      <div className="container mx-auto flex justify-between">
        {/* left */}
        <div className="hidden w-fit items-center gap-2 text-sm md:flex">
          <div className="w-fit rounded-full bg-lima-500 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="size-6 fill-white md:size-8"
            >
              <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
            </svg>
          </div>

          <div>
            <p>Customer Support</p>
            <p> +20 01145024481</p>
          </div>
        </div>

        {/* middle  */}
        <div className="flex w-1/2 items-center justify-center p-4 md:w-1/3">
          <img src={logo} alt="our logo"></img>
        </div>

        {/* right */}
        <div className="relative flex w-fit items-center justify-end gap-2 p-4">
          <div
            onClick={() => setIsCartPreviewOpen((state) => !state)}
            className="flex aspect-square cursor-pointer rounded-full bg-lima-500 p-2 duration-500 hover:bg-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="size-6 fill-white md:size-8"
            >
              <path d="M236,69.4A16.13,16.13,0,0,0,223.92,64H176a48,48,0,0,0-96,0H32.08a16.13,16.13,0,0,0-12,5.4,16,16,0,0,0-3.92,12.48l14.26,120a16,16,0,0,0,16,14.12H209.67a16,16,0,0,0,16-14.12l14.26-120A16,16,0,0,0,236,69.4ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm81.76,168a.13.13,0,0,1-.09,0H46.25L32.08,80H224Z"></path>
            </svg>
          </div>

          <div className="text-xs md:text-sm">
            <span>$00.0</span>
            <span> - </span>
            <span>0 items</span>
          </div>
          <CartPreview open={isCartPreviewOpen} />
        </div>
      </div>

      {/* {isCartPreviewOpen ?  : null} */}
    </div>
  );
}

export default HeaderMid;
