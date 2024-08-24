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

  ///  tab border bottom only
  ///  moving bg border all except bottom

  return (
    <div className="container mx-auto mb-8">
      <div>
        <BreadCrumb />
      </div>

      <div className="flex gap-3">
        <div className="hidden w-96 bg-red-500 lg:block">Aside</div>
        <div>
          <Tabs id="custom-animation" value={"register"}>
            <TabsHeader
              className=""
              indicatorProps={{
                className:
                  "bg-transparent border-2   border-b-2 border-green-500 pb-[56px] z-30 border-b-white shadow-none   rounded-lg rounded-b-none ",
                // "bg-transparent border-2 border-b-black border-b-0 border-green-500   shadow-none rounded-none",
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

// function Account() {
//   const data = [
//     {
//       label: "Sign In",
//       value: "signin",
//       form: <SignIn />,
//     },
//     {
//       label: "Register",
//       value: "register",
//       form: <Register />,
//     },
//   ];

//   return (
//     <div className="container mx-auto">
//       <Tabs id="custom-animation" value="signin">
//         <TabsHeader>
//           {data.map(({ label, value }) => (
//             <Tab
//               key={value}
//               value={value}
//               className="text-gray-900 hover:text-lima-500"
//             >
//               {label}
//             </Tab>
//           ))}
//         </TabsHeader>
//         <TabsBody
//           animate={{
//             initial: { x: 2000 },
//             mount: { x: 0 },
//             unmount: { x: 2000 },
//           }}
//         >
//           {data.map(({ value, form }) => (
//             <TabPanel key={value} value={value}>
//               {form}
//             </TabPanel>
//           ))}
//         </TabsBody>
//       </Tabs>
//     </div>
//   );
// }

export default Account;
