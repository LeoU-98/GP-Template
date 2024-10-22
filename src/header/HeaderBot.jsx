import { useState, useEffect } from "react";
import { Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavList from "./Bot/NavList";

function HeaderBot() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <div className="border-t-2 border-t-gray-200 bg-white">
      <div className="container mx-auto px-2 sm:px-3">
        <div className="grid-rows[auto_auto] grid max-w-none grid-cols-[auto_auto] justify-between rounded-none px-0 py-1 shadow-none">
          {/* left top */}
          <div className="col-span-1 col-start-1 row-span-1 row-start-1">
            <div className="flex items-center text-blue-gray-900">
              <div className="hidden lg:block">
                <NavList />
              </div>
              <IconButton
                variant="text"
                className="text-gray-600 lg:hidden"
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <XMarkIcon className="size-6" strokeWidth={2} />
                ) : (
                  <Bars3Icon className="size-6" strokeWidth={2} />
                )}
              </IconButton>
            </div>
          </div>

          {/* center bot */}
          <div className="col-span-2 row-start-2">
            <Collapse open={openNav}>
              <NavList className="absolute" />
            </Collapse>
          </div>

          {/* right top */}
          <div className="col-span-1 col-start-2 row-span-1 row-start-1 max-h-12 self-center">
            <div className="flex items-center text-xs">
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  className="rounded-l-full bg-gray-100 px-4 py-[10px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-lima-500 md:w-64"
                />
                <button className="rounded-r-full bg-lima-500 p-[10px] uppercase text-white duration-300 hover:bg-black">
                  <span className="relative top-[1px]">search</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBot;
