import { NavLink, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="container mx-auto my-8 items-center rounded-lg bg-gray-400 p-8">
      <ul className="mx-auto mb-4 flex items-center gap-2 p-4">
        <li>
          <NavLink className="px-3 py-2" to={"./ProductsDashboard"}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className="px-3 py-2" to={"./EquipmentDashboard"}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className="px-3 py-2" to={"./SuppliesDashboard"}>
            Products
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
