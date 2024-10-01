import { useState, useEffect } from "react";
import propTypes from "prop-types";
import {
  Collapse,
  IconButton,
  List,
  Menu,
  MenuHandler,
  MenuList,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { megaMenuData } from "../utils/StaticData";

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

//////////////////////////////
///      NavBar            ///
//////////////////////////////

function NavList() {
  return (
    <nav>
      <ul className="flex min-w-[240px] flex-col gap-4 px-4 py-4 font-sans text-base font-normal text-blue-gray-700 lg:flex-row lg:items-center lg:gap-7 lg:px-0 lg:py-2">
        <li>
          <NavLink
            to="/"
            className="middle-underline block h-full w-full text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
          >
            home
          </NavLink>
        </li>
        <li>
          <NestedNavMenu data={megaMenuData} handlerText={"gardening store"} />
        </li>
        <li>
          <NestedNavMenu data={megaMenuData} handlerText={"shovel & rake"} />
        </li>
        <li>
          <NavLink
            to="fertilizer"
            className="middle-underline block h-full w-full text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
          >
            Fertilizer
          </NavLink>
        </li>

        <li>
          <NavLink
            to="blog"
            className="middle-underline block h-full w-full text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

function CateogroyList({ data }) {
  const { categoryItem, categoryLink, items } = data;

  return (
    <List className="min-w-0 bg-white pt-0 hover:bg-none">
      <ul>
        {/* Cateogroy  */}
        <li className="mb-1">
          <NavLink
            to={categoryLink}
            className="block w-full cursor-pointer rounded-none border-b-2 border-gray-200 p-1 capitalize text-gray-900 hover:bg-white hover:text-green-500"
          >
            {categoryItem}
          </NavLink>
        </li>
        {/* Rest of Items  */}
        {items?.map(({ itemTitle, itemLink }) => (
          <li key={itemTitle}>
            <NavLink
              to={itemLink}
              className="block w-full p-1 text-sm capitalize text-gray-700 hover:bg-white hover:text-lima-500"
            >
              {itemTitle}
            </NavLink>
          </li>
        ))}
      </ul>
    </List>
  );
}

function NestedNavMenu({ data, handlerText }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = data.map((data, key) => (
    <Menu
      className="flex items-center gap-4 rounded-md border-2 border-green-500"
      key={key}
    >
      <CateogroyList data={data} />
    </Menu>
  ));

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom-start"
        allowHover={false}
        // allowHover={true}
      >
        <MenuHandler>
          <div className="font-medium">
            <div
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              className="middle-underline block h-full w-full cursor-pointer text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
            >
              {handlerText}
            </div>
          </div>
        </MenuHandler>
        <MenuList className="left-0 hidden max-w-screen-xl rounded-lg border-b-2 border-b-lima-500 py-3 lg:block">
          <div className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </div>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
}

NestedNavMenu.propTypes = {
  data: propTypes.array,
  handlerText: propTypes.string,
};

CateogroyList.propTypes = {
  data: propTypes.object,
};
