import { NavLink, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="container mx-auto my-8 items-center rounded-lg bg-gray-400 p-8">
      <ul className="mb-4 flex w-full items-center justify-center gap-2 p-4">
        <li>
          <NavLink
            className="rounded-full bg-lima-500 px-3 py-2 text-white duration-300 hover:bg-black"
            to={"./ProductsDashboard"}
          >
            Products Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className="rounded-full bg-lima-500 px-3 py-2 text-white duration-300 hover:bg-black"
            to={"./EquipmentDashboard"}
          >
            Equipments Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className="rounded-full bg-lima-500 px-3 py-2 text-white duration-300 hover:bg-black"
            to={"./SuppliesDashboard"}
          >
            Supplies Dashboard
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
