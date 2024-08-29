import { Breadcrumbs } from "@material-tailwind/react";
import { SlashIcon } from "@heroicons/react/24/outline";
import { NavLink, useLocation } from "react-router-dom";

function BreadCrumb() {
  const location = useLocation();
  let currentLocation = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, key) => {
      currentLocation += `/${crumb}`;

      return (
        <NavLink
          to={currentLocation}
          key={key}
          className="block h-full w-full capitalize hover:text-lima-500"
        >
          {crumb.replace("-", " ")}
        </NavLink>
      );
    });

  const currentItem = currentLocation.replaceAll("-", " ").split("/").pop();

  return (
    <div className="mx-2">
      {/* <div className="px-2"> */}
      <div className="my-4 items-center justify-between border-[1px] border-gray-300 bg-white px-5 py-2 sm:flex">
        <div className="text-center">
          <span className="uppercase">{currentItem}</span>
        </div>
        <div className="mx-auto w-fit sm:mx-0">
          <Breadcrumbs
            separator={
              <SlashIcon
                className="size-4 bg-transparent text-gray-900"
                strokeWidth={1}
              />
            }
            className="bg-transparent p-1"
          >
            {crumbs}
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumb;
