import propTypes from "prop-types";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  Collapse,
  ListItem,
  Menu,
  MenuHandler,
} from "@material-tailwind/react";
import { useState } from "react";
import RenderFooterLinks from "./RenderFooterLinks";
import RenderContactItems from "./RenderContactItems";

export default function FooterMobileDropDown({ dataCategory, data, type }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems =
    type === "links" ? (
      <RenderFooterLinks data={data} />
    ) : (
      <RenderContactItems data={data} />
    );

  return (
    <>
      <Menu>
        <MenuHandler>
          <div className="mb-2">
            <ListItem
              className="flex items-center justify-between gap-2 rounded-none bg-transparent p-0 py-2 font-medium text-gray-900 transition-none hover:bg-transparent focus:bg-transparent active:bg-transparent"
              selected={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <span className="uppercase">{dataCategory}</span>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </div>
        </MenuHandler>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
}

FooterMobileDropDown.propTypes = {
  dataCategory: propTypes.string,
  data: propTypes.array,
  type: propTypes.string,
};
