import logo from "../images/logo.jpg";
import CartPreview from "../cart/CartPreview";
import { UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProfileMenu from "./Mid/ProfileMenu";

function HeaderMid() {
  const [isCartPreviewOpen, setIsCartPreviewOpen] = useState(false);
  const logged = false;

  return (
    <div className="bg-white">
      <div className="container mx-auto flex flex-wrap justify-between sm:px-3">
        {/* left */}
        <div className="flex items-center p-4 sm:p-0 sm:py-2">
          {logged ? (
            <ProfileMenu />
          ) : (
            <Link
              to={"/account/signin"}
              className="group flex w-fit items-center gap-2 self-center rounded-full border border-lima-500 text-sm duration-500 hover:border-gray-500"
            >
              <div className="w-fit rounded-full bg-lima-500 p-2 duration-500 group-hover:bg-black">
                <UserIcon className="size-8 text-white" />
              </div>
              <p className="cursor pl-1 pr-4 text-base duration-500 group-hover:text-lima-500">
                Login
              </p>
            </Link>
          )}
        </div>

        {/* middle  */}
        <div className="-order-1 flex w-1/2 basis-full items-center justify-center p-4 md:-order-none md:w-1/3 md:basis-1/3">
          <img src={logo} alt="our logo"></img>
        </div>

        {/* right */}
        <div className="relative flex w-fit items-center justify-end gap-2 p-4 sm:p-0 sm:py-2">
          <div
            onClick={() => setIsCartPreviewOpen((state) => !state)}
            className="flex aspect-square cursor-pointer rounded-full bg-lima-500 p-2 duration-500 hover:bg-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="size-8 fill-white"
            >
              <path d="M236,69.4A16.13,16.13,0,0,0,223.92,64H176a48,48,0,0,0-96,0H32.08a16.13,16.13,0,0,0-12,5.4,16,16,0,0,0-3.92,12.48l14.26,120a16,16,0,0,0,16,14.12H209.67a16,16,0,0,0,16-14.12l14.26-120A16,16,0,0,0,236,69.4ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm81.76,168a.13.13,0,0,1-.09,0H46.25L32.08,80H224Z"></path>
            </svg>
          </div>

          <div className="text-xs md:text-sm">
            <span>$00.0</span>
            <span> - </span>
            <span>0 items</span>
          </div>
          <CartPreview
            isCartPreviewOpen={isCartPreviewOpen}
            setIsCartPreviewOpen={setIsCartPreviewOpen}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderMid;
