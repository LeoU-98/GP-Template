import CustomerSignup from "./CustomerSignup";
import MerchantSignup from "./MerchantSignup";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function Register() {
  const data = [
    {
      label: "Customer",
      value: "customer",
      form: <CustomerSignup />,
    },
    {
      label: "Merchant",
      value: "merchant",
      form: <MerchantSignup />,
    },
  ];

  return (
    <Tabs id="custom-animation" value={"customer"}>
      <TabsHeader className="p-0">
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            className="text-gray-900 hover:text-lima-500"
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 2000 },
          mount: { y: 0 },
          unmount: { y: 2000 },
        }}
      >
        {data.map(({ value, form }) => (
          <TabPanel key={value} value={value} className="mt-4 p-0">
            {form}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
