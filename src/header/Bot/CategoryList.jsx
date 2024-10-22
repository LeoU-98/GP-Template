import { List } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import propTypes from "prop-types";

export default function CategroyList({ data }) {
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

CategroyList.propTypes = {
  data: propTypes.object,
};
