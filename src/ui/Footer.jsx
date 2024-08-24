import React from "react";
import propTypes from "prop-types";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import logo from "../images/logo.jpg";
import paymentImage from "../images/payment.png";
import {
  Collapse,
  ListItem,
  Menu,
  MenuHandler,
} from "@material-tailwind/react";

//////////////////////////
//    Temp Data for UI  //
//////////////////////////

const informationData = [
  {
    title: "delivery",
    href: "#d",
  },
  {
    title: "legal notice",
    href: "#l",
  },
  {
    title: "about Us",
    href: "#a",
  },
  {
    title: "secure payment",
    href: "#s",
  },
  {
    title: "contact us",
    href: "#c",
  },
];

const myAccountData = [
  {
    title: "person info",
    href: "#d",
  },
  {
    title: "orders",
    href: "#l",
  },
  {
    title: "credit slips",
    href: "#a",
  },
  {
    title: "addresses",
    href: "#s",
  },
  {
    title: "my wishlists",
    href: "#c",
  },
];

const myContactData = [
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-white"
        viewBox="0 0 256 256"
      >
        <path d="M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z"></path>
      </svg>
    ),
    text: "0123-456-789, 123-456-7890",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-white"
        viewBox="0 0 256 256"
      >
        <path d="M200,224H150.54A266.56,266.56,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25a88,88,0,0,0-176,0c0,31.4,14.51,64.68,42,96.25A266.56,266.56,0,0,0,105.46,224H56a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16ZM128,72a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"></path>
      </svg>
    ),
    text: "71 penningtion lane vernon rockville, ct 06066",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-white"
        viewBox="0 0 256 256"
      >
        <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
      </svg>
    ),
    text: "demo@yourstore.com",
  },
];

///////////////////////////////
//    List Items Components  //
///////////////////////////////

RenderContactItems.propTypes = {
  svg: propTypes.element,
  text: propTypes.string,
};

MobileDropDown.propTypes = {
  dataCategory: propTypes.string,
  data: propTypes.array,
  type: propTypes.string,
};

function RenderContactItems({ data }) {
  return data.map(({ svg, text }, key) => (
    <div className="mb-3 flex items-center gap-2" key={key}>
      <div className="bg-lima-500 size-8 overflow-hidden rounded-full p-2">
        {svg}
      </div>
      <div>
        <span className="text-xs capitalize text-gray-500">{text}</span>
      </div>
    </div>
  ));
}

function RenderFooterLinks({ data }) {
  return data.map(({ href, title }, key) => (
    <a href={href} key={key} className="mb-3 block">
      <div className="left-underline w-fit capitalize text-gray-600 hover:after:w-full">
        {title}
      </div>
    </a>
  ));
}

function MobileDropDown({ dataCategory, data, type }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems =
    type === "links" ? (
      <RenderFooterLinks data={data} />
    ) : (
      <RenderContactItems data={data} />
    );

  return (
    <>
      <Menu>
        <MenuHandler>
          <div className="mb-2">
            <ListItem
              className="flex items-center justify-between gap-2 rounded-none bg-transparent p-0 py-2 font-medium text-gray-900 transition-none hover:bg-transparent focus:bg-transparent active:bg-transparent"
              selected={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <span className="uppercase">{dataCategory}</span>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </div>
        </MenuHandler>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
}

///////////////////////////////
//    Footer Main Component  //
///////////////////////////////

function Footer() {
  return (
    <div className="bg-white">
      <div className="container relative mx-auto px-4 lg:py-8">
        <div className="relative py-8 lg:py-12">
          <div className="bg-lima-500 absolute -top-5 left-1/2 size-10 -translate-x-1/2 rounded-full p-[6px] lg:-top-14 lg:size-12">
            <a href="#" className="scroll-smooth">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white"
                viewBox="0 0 256 256"
              >
                <path d="M124.24,140.24h0l21.09-21.09a58,58,0,0,0,26.49,6.79A47.55,47.55,0,0,0,196.67,119c23.07-14,35.42-46.53,33-87.09a6,6,0,0,0-5.64-5.64c-40.56-2.38-73.12,10-87.09,33-9.22,15.22-9.2,33.71-.14,51.35L120,127.51l-14.64-14.63c6.32-13,6.15-26.6-.67-37.86C94.21,57.72,70,48.44,39.85,50.21a6,6,0,0,0-5.64,5.64C32.44,86,41.72,110.2,59,120.69A36.23,36.23,0,0,0,78,126a43.4,43.4,0,0,0,18.93-4.6L111.51,136l-10,10H56a6,6,0,0,0,0,12H67.18l13.57,61a13.91,13.91,0,0,0,13.67,11h67.17a13.91,13.91,0,0,0,13.66-11l13.57-61H200a6,6,0,0,0,0-12H118.48l5.76-5.76Zm23-74.7c11-18.22,37.24-28.33,70.72-27.5.83,33.47-9.28,59.68-27.5,70.72-12.3,7.44-27.09,6.92-41.79-1.43C140.31,92.63,139.79,77.84,147.24,65.54Zm-53.66,44c-10,5.56-20,5.87-28.34.84C52.78,102.87,45.75,85,46,62c23-.29,40.88,6.78,48.42,19.24C99.45,89.54,99.14,99.56,93.58,109.58ZM176.52,158l-13,58.43a2,2,0,0,1-1.95,1.57H94.42a2,2,0,0,1-2-1.57L79.48,158Z"></path>
              </svg>
            </a>
          </div>
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="basis-1/4 pl-3">
              <div>
                <img src={logo} alt="logo" />
              </div>
              <p className="mt-5 text-[#777]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt lorem consectetur tempor incididunt
                enim ad minim simply random text. It has pieceveniam.
              </p>
            </div>

            <div className="mt-4 lg:hidden">
              <MobileDropDown
                dataCategory={"information"}
                data={informationData}
                type={"links"}
              />
              <MobileDropDown
                dataCategory={"my Account"}
                data={myAccountData}
                type={"links"}
              />
              <MobileDropDown
                dataCategory={"contact info"}
                data={myContactData}
              />
            </div>

            {/* Desktop Footer  */}

            <section className="hidden basis-1/5 lg:block">
              <h3 className="mb-3 uppercase">information</h3>
              <div>
                <RenderFooterLinks data={informationData} />
              </div>
            </section>
            <section className="hidden basis-1/5 lg:block">
              <h3 className="mb-3 uppercase">my account</h3>
              <div>
                <RenderFooterLinks data={myAccountData} />
              </div>
            </section>
            <section className="hidden basis-1/4 lg:block">
              <h3 className="mb-3 uppercase">contact info</h3>
              <div>
                <RenderContactItems data={myContactData} />
              </div>
            </section>
          </div>
        </div>
        <FooterBottom />
      </div>{" "}
    </div>
  );
}

export default Footer;

function FooterBottom() {
  return (
    <div className="flex flex-col items-center justify-between gap-3 border-b-2 border-t-2 border-gray-200 py-6 md:flex-row">
      {/* left  */}
      <SocialIcons />
      {/* right  */}
      <div>
        <img src={paymentImage} alt="payment methods"></img>
      </div>
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="flex w-fit gap-2">
      <div className="size-9 bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="fill-blue-900"
        >
          <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
        </svg>
      </div>
      <div className="size-9 rounded-full bg-black p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="fill-white"
        >
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
      </div>
      <div className="size-9 rounded-full bg-red-800 p-1 pt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          className="fill-white"
        >
          <path d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z" />
        </svg>
      </div>
      <div className="size-9 overflow-hidden rounded-full bg-blue-700 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="fill-white"
        >
          <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
        </svg>
      </div>
      <div className="size-9 rounded-full bg-red-900 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="fill-white"
        >
          <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
        </svg>
      </div>
    </div>
  );
}
