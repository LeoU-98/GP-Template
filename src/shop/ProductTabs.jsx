import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";
import ProductReviewsTab from "./ProductReviewsTab";
import ProductDetailsTab from "./ProductDetailsTab";
import ProductDescryptionTab from "./ProductDescryptionTab";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("Descryption");
  const data = [
    {
      label: "Descryption",
      value: "descryption",
      element: <ProductDescryptionTab />,
    },
    {
      label: "Details",
      value: "productDetails",
      element: <ProductDetailsTab />,
    },

    {
      label: "Reviews",
      value: "reviews",
      element: <ProductReviewsTab />,
    },
  ];

  return (
    <Tabs id="custom-animation" value="descryption" className="mt-16">
      <TabsHeader
        className="bg-gray-300 p-0"
        indicatorProps={{
          className: "",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`hover:text-lima-500 ${activeTab === value ? "text-lima-500" : ""}`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { x: 500 },
          mount: { x: 0 },
          unmount: { x: 500 },
        }}
      >
        {data.map(({ value, element }) => (
          <TabPanel key={value} value={value} className="mt-3 p-0">
            {element}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
