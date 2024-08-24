import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
