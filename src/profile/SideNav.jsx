import {
  ArchiveBoxXMarkIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import propTypes from "prop-types";
import { NavLink } from "react-router-dom";

const navData = [
  {
    path: "AccountDetails",
    icon: <UserIcon className="size-6 text-white" />,
    title: "Profile Info",
  },
  {
    path: "ChangePassword",
    icon: <KeyIcon className="size-6 text-white" />,
    title: "Change Password",
  },
  {
    path: "DeactivateAccount",
    icon: <ArchiveBoxXMarkIcon className="size-6 text-white" />,
    title: "Deactivate Account",
  },
];

function SideNav() {
  return (
    <aside className="mt-5 basis-[20%] rounded-2xl bg-black">
      <nav className="">
        <ul className="p-6">
          {navData.map((page, key) => (
            <NavIcon data={page} key={key} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default SideNav;

function NavIcon({ data }) {
  const { path, icon, title } = data;

  console.log(icon);
  return (
    <li className="group relative mb-3 cursor-pointer py-2">
      <div className="absolute top-1/2 h-0 w-0 -translate-y-1/2 bg-lima-500 [transition:_width_0.3s,height_0.4s_cubic-bezier(1,-0.05,.56,.69)] group-hover:h-full group-hover:w-full"></div>
      <NavLink
        to={path}
        className="relative z-50 flex items-center gap-2 px-4 text-white"
      >
        {icon}
        <span>{title}</span>
      </NavLink>
    </li>
  );
}

NavIcon.propTypes = {
  data: propTypes.object,
};
