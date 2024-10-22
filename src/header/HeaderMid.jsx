import React, { useState } from "react";
import logo from "../images/logo.jpg";
import CartPreview from "../cart/CartPreview";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function HeaderMid() {
  const [isCartPreviewOpen, setIsCartPreviewOpen] = useState(false);

  return (
    <div className="bg-white">
      <div className="container mx-auto flex flex-wrap justify-between sm:px-3">
        {/* left */}
        <div className="flex items-center p-4 sm:p-0 sm:py-2">
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

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pl-0.5 pr-2 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
