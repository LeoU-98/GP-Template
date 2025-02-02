import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function MyProfile() {
  return (
    <main className="container mx-auto mb-16 mt-5 flex bg-white">
      <SideBar />
      <Outlet />
    </main>
  );
}

export default MyProfile;
