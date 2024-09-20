import BreadCrumb from "../ui/BreadCrumb";
import { Link, Outlet } from "react-router-dom";
import image1 from "../images/sidebar_banner.jpg";

function Account() {
  return (
    <>
      <BreadCrumb />
      <main className="container mx-auto mb-8">
        <div className="flex gap-3 px-2">
          {/* aside  */}
          <div className="hidden h-fit flex-shrink-0 flex-grow-0 basis-[22%] overflow-hidden lg:block">
            <Link to="offer">
              <img
                src={image1}
                className="w-full duration-300 hover:scale-110"
              />
            </Link>
          </div>
          {/* account */}
          <div className="flex-grow">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}
export default Account;
