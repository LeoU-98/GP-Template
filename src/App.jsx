import Header from "./header/Header";
import CategoryCarousel from "./home/CategoryCarousel";
import banner1 from "./images/banner-1.jpg";
import banner2 from "./images/banner-2.jpg";
import IntroCarousel from "./home/IntroCarousel";
import Promo from "./home/Promo";
import SpecialProducts from "./home/SpecialProducts";
import BigPromo from "./home/BigPromo";
import FeaturePromo from "./home/FeaturePromo";
import DealOfTheDay from "./home/DealOfTheDay";
import OtherProducts from "./home/OtherProducts";
import SimpleSlider from "./ui/SimpleSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsLetter from "./home/NewsLetter";
import Testimonial from "./home/Testimonial";
import Blog from "./home/Blog";
import { MegaMenuDefault } from "./ui/NavSample";
import Footer from "./ui/Footer";
import CartPreview from "./header/CartPreview";
import Account from "./register/Account";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./home/Home";
import FilterBy from "./shop/FilterBy";
import Products from "./shop/Products";
import BreadCrumb from "./ui/BreadCrumb";
import Pagination from "./ui/Pagination";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "account",
        element: <Account />,
      },

      {
        path: "garden-equipment",
        element: <Products />,
        children: [
          {
            path: "bow-rake",
            element: <Products />,
          },
          {
            path: "garden-knife",
            element: <Products />,
          },
          {
            path: "pruning-shears",
            element: <Products />,
          },
        ],
      },
      {
        path: "planting-tools",
        element: <Products />,
        children: [
          {
            path: "gloves",
            element: <Products />,
          },
          {
            path: "hand-trowel",
            element: <Products />,
          },
          {
            path: "pruning-shears",
            element: <Products />,
          },
        ],
      },

      {
        path: "product",
        element: <Products />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="bg-mercury-50">
      {/* <Header />
      <Home />
      <Footer /> */}

      {/* <FilterBy /> */}
      {/* <Account /> */}
      {/* <SimpleSlider /> */}
      {/* <BreadCrumb /> */}

      <RouterProvider router={router} />

      {/* <Pagination /> */}
      {/* <Products /> */}
    </div>
  );
}

export default App;
