import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import SignIn from "./SignIn";
import Register from "./Register";
import BreadCrumb from "../ui/BreadCrumb";
import { Link } from "react-router-dom";
import image1 from "../images/sidebar_banner.jpg";

function Account() {
  const data = [
    {
      label: "Sign In",
      value: "signin",
      form: <SignIn />,
    },
    {
      label: "Register",
      value: "register",
      form: <Register />,
    },
  ];

  return (
    <div className="container mx-auto mb-8">
      <div>
        <BreadCrumb />
      </div>

      <div className="flex gap-3">
        {/* aside  */}
        <div className="hidden h-fit w-96 overflow-hidden lg:block">
          <Link to="offer">
            <img src={image1} className="w-full duration-300 hover:scale-110" />
          </Link>
        </div>
        {/* account */}
        <div>
          <Tabs id="custom-animation" value={"register"}>
            <TabsHeader
              className=""
              indicatorProps={{
                className:
                  "bg-transparent border-2   border-b-2 border-green-500 pb-[56px] z-30 border-b-white shadow-none   rounded-lg rounded-b-none ",
              }}
            >
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  className="border-b-2 border-lima-500 bg-white py-4 text-gray-900 hover:text-lima-500"
                  // className="border-b-2 border-lima-500 text-gray-900 hover:text-lima-500"
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { x: 2000 },
                mount: { x: 0 },
                unmount: { x: 2000 },
              }}
            >
              <div className="mt-10">
                {data.map(({ value, form }) => (
                  <TabPanel key={value} value={value}>
                    {form}
                  </TabPanel>
                ))}
              </div>
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Account;
