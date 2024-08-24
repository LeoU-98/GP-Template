import React from "react";
import propTypes from "prop-types";
import {
  Navbar,
  Collapse,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

//////////////////////////////////////////////////

function HeaderBot() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <div className="border-t-2 border-t-gray-200 bg-white">
      <div className="container mx-auto">
        <Navbar className="grid-rows[auto_auto] grid max-w-none grid-cols-[auto_auto] justify-between rounded-none px-0 py-1 shadow-none">
          {/* left top */}
          <div className="col-span-1 col-start-1 row-span-1 row-start-1">
            <div className="flex items-center text-blue-gray-900">
              <div className="hidden lg:block">
                <NavList />
              </div>
              <IconButton
                variant="text"
                color="blue-gray"
                className="lg:hidden"
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                ) : (
                  <Bars3Icon className="h-6 w-6" strokeWidth={2} />
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
              <from>
                <input
                  type="text"
                  placeholder="Search..."
                  className="rounded-l-full bg-gray-200 px-4 py-2 focus:bg-lima-500 focus:outline-none focus:ring-1 focus:ring-inset"
                />
                <button className="rounded-r-full bg-lima-500 p-2 uppercase text-white">
                  search
                </button>
              </from>
            </div>
          </div>
        </Navbar>
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
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <a href="#" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </a>
      <NavListMenuWithCategory data={CategoryItemArray} handlerText={"Hello"} />
      <NavListMenuWithCategory data={CategoryItemArray} handlerText={"HI"} />

      <a href="#" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Fertilizer
        </ListItem>
      </a>
      <a href="#" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">Blog</ListItem>
      </a>
    </List>
  );
}

/////////////////////////
//    Mega Menu Stuff  //
/////////////////////////

const CategoryItemArray = [
  {
    categoryItem: "Garden Equipment",
    Items: ["bow Rake", "Garden Kinfe", "Pruning Shears"],
  },
  {
    categoryItem: "Garden Equipment1",
    Items: ["bow Rake", "Garden Kinfe", "Pruning Shears"],
  },
  {
    categoryItem: "Garden Equipment2",
    Items: ["bow Rake", "Garden Kinfe", "Pruning Shears"],
  },
];

function CateogroyList({ categoryItem, Items }) {
  return (
    <List className="bg-white hover:bg-none">
      {/* Cateogroy  */}
      <ListItem className="rounded-none border-b-2 border-gray-200 hover:bg-white hover:text-green-500">
        {categoryItem}
      </ListItem>
      {/* Rest of Items  */}
      {Items?.map((el) => (
        <ListItem className="hover:bg-white hover:text-green-500" key={el}>
          {el}
        </ListItem>
      ))}
    </List>
  );
}

CateogroyList.propTypes = {
  categoryItem: propTypes.string,
  Items: propTypes.array,
};

function NavListMenuWithCategory({ data, handlerText }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = data.map(({ categoryItem, Items }, key) => (
    <li key={key}>
      <Menu className="flex items-center gap-4 rounded-md border-2 border-green-500">
        <CateogroyList
          categoryItem={categoryItem}
          Items={Items}
        ></CateogroyList>
      </Menu>
    </li>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <div className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {handlerText}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </div>
        </MenuHandler>
        <MenuList className="left-0 hidden max-w-screen-xl rounded-xl border-b-2 border-b-green-500 lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

NavListMenuWithCategory.propTypes = {
  data: propTypes.array,
  handlerText: propTypes.string,
};
