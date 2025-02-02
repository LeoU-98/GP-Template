import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  InboxArrowDownIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import leou from "../../images/leou.jpg";
import { NavLink } from "react-router-dom";

const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    path: "MyProfile/AccountDetails",
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
    path: "MyProfile/",
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
    path: "MyProfile/",
  },
];

export default function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-start">
      <MenuHandler>
        <button
          type="button"
          className="flex w-fit items-center gap-2 self-center rounded-full border border-gray-500 pr-2 text-sm outline-none duration-500"
        >
          <img className="size-12 rounded-full" src={leou} />
          <p className="cursor text-base duration-500">LeoU</p>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, path }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <NavLink to={path} key={key}>
              <MenuItem
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded text-gray-900 ${
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
            </NavLink>
          );
        })}
      </MenuList>
    </Menu>
  );
}
