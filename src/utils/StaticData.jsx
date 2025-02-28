/////////////////////////////////////
///   product images

import product1 from "../images/products/brown-bear-cushion.jpg";
import product2 from "../images/products/brown-bear-notebook.jpg";
import product3 from "../images/products/today-is-a-good-day-framed-poster.jpg";
import product4 from "../images/products/brown-bear-notebook1.jpg";
import product5 from "../images/products/brown-bear-printed-sweater.jpg";
import product6 from "../images/products/hummingbird-cushion.jpg";
import product7 from "../images/products/hummingbird-printed-t-shirt.jpg";
import product8 from "../images/products/mountain-fox-cushion.jpg";
import product9 from "../images/products/mug-the-adventure-begins.jpg";
import product10 from "../images/products/the-adventure-begins-framed-poster.jpg";
import product11 from "../images/products/the-best-is-yet-to-come-framed-poster.jpg";
/////////////////////////////////////
///   blog posters

import poster1 from "../images/blogitem/consectetur-adipiscing.jpg";
import poster2 from "../images/blogitem/lorem-ipsum-dolo.jpg";
import poster3 from "../images/blogitem/lorem-ipsum-dolor-sit-amet.jpg";
import poster4 from "../images/blogitem/lorem-ipsum-dolor.jpg";

/////////////////////////////////////
///   blog preview poster

import previewPoster1 from "../images/blog/consectetur-adipiscing.jpg";
import previewPoster2 from "../images/blog/lorem-ipsum-dolo.jpg";
import previewPoster3 from "../images/blog/lorem-ipsum-dolor.jpg";

/////////////////////////////////////
///   users profile pic

import profile1 from "../images/testimonial/sample-1.jpg";
import profile2 from "../images/testimonial/sample-2.jpg";
import profile3 from "../images/testimonial/sample-3.jpg";

/////////////////////////////////////
///  intro banners

import banner1 from "../images/banner-1.jpg";
import banner2 from "../images/banner-2.jpg";

/////////////////////////////////////
///  category carousel thumbs

import thumb1 from "../images/category_carousel/thumb-1.png";
import thumb2 from "../images/category_carousel/thumb-2.png";
import thumb3 from "../images/category_carousel/thumb-3.png";
import thumb4 from "../images/category_carousel/thumb-4.png";
import thumb5 from "../images/category_carousel/thumb-5.png";
import thumb6 from "../images/category_carousel/thumb-6.png";

/////////////////////////////////////
///  there promo images

import promo1 from "../images/promo/promo-banner-1.jpg";
import promo2 from "../images/promo/promo-banner-2.jpg";
import promo3 from "../images/promo/promo-banner-3.jpg";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

/////////////////////////////////////
///   there promo data
export const promoData = [
  {
    promoTitle: "gardening tools",
    promoDesc: "flat 50% discount",
    promoLink: "#things to buy",
    promoImg: promo1,
  },
  {
    promoTitle: "best quality products",
    promoDesc: "buy garden equipments",
    promoLink: "#things to buy",
    promoImg: promo2,
  },
  {
    promoTitle: "gardening tools",
    promoDesc: "flat 50% discount",
    promoLink: "#things to buy",
    promoImg: promo3,
  },
];
/////////////////////////////////////
///   category carousel data
export const CategoryCarouselArray = [
  {
    id: 1,
    image: thumb1,
    text: "Plants",
  },
  {
    id: 2,
    image: thumb2,
    text: "Shovel & Rake",
  },
  {
    id: 3,
    image: thumb3,
    text: "Fertilizer",
  },
  {
    id: 4,
    image: thumb4,
    text: "Seed Bag",
  },
  {
    id: 5,
    image: thumb5,
    text: "Watering Can",
  },
  {
    id: 6,
    image: thumb6,
    text: "Accessories",
  },
];
/////////////////////////////////////
///   intro data

export const introData = [
  {
    id: 1,
    promoTitle: "Best Quality Gardenning Tools",
    promoDesc: "Discount Up To 40% Off",
    promoBanner: banner1,
    promoLink: "link1",
  },
  {
    id: 2,
    promoTitle: "Latest Garden Flowring Plants",
    promoDesc: "Shipping & Cash on Delivery Avaliable",
    promoBanner: banner2,
    promoLink: "link2",
  },
];

/////////////////////////////////////
///   products data

export const productData = [
  {
    id: 1,
    productImage: product1,
    productName: "wheel barrows",
    discountPrice: "43",
    originalPrice: "56",
  },
  {
    id: 2,
    productImage: product2,
    productName: "micro rain",
    discountPrice: "22",
    originalPrice: "35",
  },
  {
    id: 3,
    productImage: product3,
    productName: "pulsating sprinklers",
    discountPrice: "40",
    originalPrice: "60",
  },
  {
    id: 4,
    productImage: product4,
    productName: "drive sprinkler",
    discountPrice: "43",
    originalPrice: "60",
  },

  {
    id: 5,
    productImage: product6,
    productName: "pruninig saw",
    discountPrice: "41",
    originalPrice: "60",
  },

  {
    id: 6,
    productImage: product8,
    productName: "garden fork",
    discountPrice: "20",
    originalPrice: "33",
  },
  {
    id: 7,
    productImage: product9,
    productName: "husqvarna LC 140S husqvarna LC 140S",
    // productName: "husqvarna LC 140S",
    discountPrice: "25",
    originalPrice: "50",
  },
  {
    id: 8,
    productImage: product10,
    productName: "cutco garden trowel",
    discountPrice: "10",
    originalPrice: "32",
  },
  {
    id: 9,
    productImage: product11,
    productName: "camping shovel",
    discountPrice: "15",
    originalPrice: "27",
  },
];

/////////////////////////////////////
///   Mega Menu Data

export const megaMenuData = [
  {
    categoryItem: "Agricultural Products",
    categoryLink: "Products/AgriculturalProducts",
    items: [
      {
        itemTitle: "Crops & Fresh Produce",
        itemLink: "Products/AgriculturalProducts/Crop&FreshProduce",
      },
      {
        itemTitle: "Seeds & Saplings",
        itemLink: "Products/AgriculturalProducts/Seeds&Saplings",
      },
      {
        itemTitle: "Organic & Sustainable Products",
        itemLink: "Products/AgriculturalProducts/Organic&SustainableProducts",
      },
    ],
  },
  {
    categoryItem: "Farming Equipments",
    categoryLink: "Products/FarmingEquipments",
    items: [
      {
        itemTitle: "Machinery & Tools",
        itemLink: "Products/FarmingEquipments/Machinery&Tools",
      },
      {
        itemTitle: "Agri-Tech Solutions",
        itemLink: "Products/FarmingEquipments/Agri-TechSolution",
      },
      {
        itemTitle: "Storage & Processing ",
        itemLink: "Products/FarmingEquipments/Storage&Processing ",
      },
    ],
  },
  {
    categoryItem: "Farm Supplies",
    categoryLink: "Products/FarmSupplies",
    items: [
      {
        itemTitle: "Irrigation & Water Management",
        itemLink: "Products/FarmSupplies/Irrigation",
      },
      {
        itemTitle: "Livestock & Poultry Supplies",
        itemLink: "Products/FarmSupplies/Livestock",
      },
      {
        itemTitle: "Protective Gear & Packaging",
        itemLink: "Products/FarmSupplies/Packaging",
      },
    ],
  },
];

/////////////////////////////////////
///   Blog Page  data

export const blogItemData = [
  {
    blogImage: poster4,
    blogAuthor: "LeoU",
    blogComments: 98,
    blogReviews: 9999,
    blogHeading: "Lorem Ipsum Dolor",
    blogDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type an",
    blogLink: "blog link",
  },
  {
    blogImage: poster3,
    blogAuthor: "Deez",
    blogComments: 99,
    blogReviews: 10000,
    blogHeading: "Lorem Ipsum Dolor",
    blogDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type an",
    blogLink: "blog link",
  },
  {
    blogImage: poster2,
    blogAuthor: "Nuts",
    blogComments: 55,
    blogReviews: 2500,
    blogHeading: "Lorem Ipsum Dolor",
    blogDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type an",
    blogLink: "blog link",
  },
  {
    blogImage: poster1,
    blogAuthor: "Woah Woah",
    blogComments: 89,
    blogReviews: 5000,
    blogHeading: "Lorem Ipsum Dolor",
    blogDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type an",
    blogLink: "blog link",
  },
];

export const asideData = [
  {
    sectionTitle: "Popular Articles",
    sectionItems: [
      {
        itemImage: poster1,
        itemTitle: "Lorem Ipsum Dolo",
        itemDate: "Apr 21, 2022",
        itemLink: "Lorem Ipsum Dolo",
      },
      {
        itemImage: poster2,
        itemTitle: "Lorem Ipsum Dolo",
        itemDate: "Apr 21, 2022",
        itemLink: "Lorem Ipsum Dolo",
      },
    ],
  },
  {
    sectionTitle: "Recent Articles",
    sectionItems: [
      {
        itemImage: poster3,
        itemTitle: "Lorem Ipsum Dolo",
        itemDate: "Apr 21, 2022",
        itemLink: "Lorem Ipsum Dolo",
      },
      {
        itemImage: poster4,
        itemTitle: "Lorem Ipsum Dolo",
        itemDate: "Apr 21, 2022",
        itemLink: "Lorem Ipsum Dolo",
      },
    ],
  },
];

/////////////////////////////////////
///   Feature Promo

export const featurePromoData = [
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-7"
        viewBox="0 0 256 256"
      >
        <path d="M185.33,114.21l29.14-27.42.17-.17a32,32,0,0,0-45.26-45.26c0,.06-.11.11-.17.17L141.79,70.67l-83-30.2a8,8,0,0,0-8.39,1.86l-24,24a8,8,0,0,0,1.22,12.31l63.89,42.59L76.69,136H56a8,8,0,0,0-5.65,2.34l-24,24A8,8,0,0,0,29,175.42l36.82,14.73,14.7,36.75.06.16a8,8,0,0,0,13.18,2.47l23.87-23.88A8,8,0,0,0,120,200V179.31l14.76-14.76,42.59,63.89a8,8,0,0,0,12.31,1.22l24-24a8,8,0,0,0,1.86-8.39Zm-.07,97.23-42.59-63.88A8,8,0,0,0,136.8,144c-.27,0-.53,0-.79,0a8,8,0,0,0-5.66,2.35l-24,24A8,8,0,0,0,104,176v20.69L90.93,209.76,79.43,181A8,8,0,0,0,75,176.57l-28.74-11.5L59.32,152H80a8,8,0,0,0,5.66-2.34l24-24a8,8,0,0,0-1.22-12.32L44.56,70.74l13.5-13.49,83.22,30.26a8,8,0,0,0,8.56-2L180.78,52.6A16,16,0,0,1,203.4,75.23l-32.87,30.93a8,8,0,0,0-2,8.56l30.26,83.22Z"></path>
      </svg>
    ),
    title: "free worldwide shipping",
    descryption: "On order over $150",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-7"
        viewBox="0 0 256 256"
      >
        <path d="M216,64H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,56V184a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,128H56a8,8,0,0,1-8-8V78.63A23.84,23.84,0,0,0,56,80H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,132Z"></path>
      </svg>
    ),
    title: "money back guarantee",
    descryption: "cash on delivery",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-7"
        viewBox="0 0 256 256"
      >
        <path d="M216,72H180.92c.39-.33.79-.65,1.17-1A29.53,29.53,0,0,0,192,49.57,32.62,32.62,0,0,0,158.44,16,29.53,29.53,0,0,0,137,25.91a54.94,54.94,0,0,0-9,14.48,54.94,54.94,0,0,0-9-14.48A29.53,29.53,0,0,0,97.56,16,32.62,32.62,0,0,0,64,49.57,29.53,29.53,0,0,0,73.91,71c.38.33.78.65,1.17,1H40A16,16,0,0,0,24,88v32a16,16,0,0,0,16,16v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM149,36.51a13.69,13.69,0,0,1,10-4.5h.49A16.62,16.62,0,0,1,176,49.08a13.69,13.69,0,0,1-4.5,10c-9.49,8.4-25.24,11.36-35,12.4C137.7,60.89,141,45.5,149,36.51Zm-64.09.36A16.63,16.63,0,0,1,96.59,32h.49a13.69,13.69,0,0,1,10,4.5c8.39,9.48,11.35,25.2,12.39,34.92-9.72-1-25.44-4-34.92-12.39a13.69,13.69,0,0,1-4.5-10A16.6,16.6,0,0,1,84.87,36.87ZM40,88h80v32H40Zm16,48h64v64H56Zm144,64H136V136h64Zm16-80H136V88h80v32Z"></path>
      </svg>
    ),
    title: "special gift card",
    descryption: "offer special bonuses with gift",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-7"
        viewBox="0 0 256 256"
      >
        <path d="M201.89,54.66A103.43,103.43,0,0,0,128.79,24H128A104,104,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88.12,88.12,0,0,1,190.54,65.93,87.39,87.39,0,0,1,215.65,120H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h24a24,24,0,0,1-24,24H136a8,8,0,0,0,0,16h56a40,40,0,0,0,40-40V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm128,56a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24v56Z"></path>
      </svg>
    ),
    title: "best online support",
    descryption: "Call us 24/7 at 123-456-789",
  },
];

/////////////////////////////////////
///   Blog Preview

export const blogPreviewData = [
  {
    image: previewPoster1,
    title: "Consectetur Adipiscing",
    descryption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...",

    date: "21 April 2022",
  },
  {
    image: previewPoster2,
    title: "Lorem Ipsum Dolo",
    descryption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...",

    date: "24 June 2022",
  },
  {
    image: previewPoster3,
    title: "The Standard Lorem Ipsum",
    descryption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...",
    date: "8 December 2022",
  },
];

/////////////////////////////////////
///   Testimonial Data

export const testimonialData = [
  {
    image: profile1,
    name: "sandra",
    role: "customer",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    image: profile2,
    name: "scarlet",
    role: "engineer",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    image: profile3,
    name: "mai",
    role: "farmer",
    feedback:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

////////////////////////////////////////
//////////  Merchant Features

export const merchantFeatures = [
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "AI Features To Enhance Your Bussiness ",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Ability To Expand Your Business By Reaching More Clients",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Access to a large customer base",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Tools for promoting products within the marketplace",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Unlimited product listings",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Basic analytics on sales and traffic",
  },
];

////////////////////////////////////////
//////////  Customer Features

export const customerFeatures = [
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "AI Features To Enhance Your Bussiness ",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Ability To Expand Your Business By Reaching More Clients",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Access to a large customer base",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Tools for promoting products within the marketplace",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Unlimited product listings",
  },
  {
    featureIcon: <CheckCircleIcon className="size-5" />,
    featureDesc: "Basic analytics on sales and traffic",
  },
];
