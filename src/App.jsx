import Blog from "./Blog/Blog";
import Account from "./register/Account";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./home/Home";
import Products from "./shop/Products";
import CartView from "./cart/CartView";
import Register from "./register/Register";
import SignIn from "./register/SignIn";
import ProductView from "./shop/ProductView";
import BlogView from "./Blog/BlogView";
import ForgotPassword from "./register/ForgotPassword";
import ResetPassword from "./register/ResetPassword";
import EnterCode from "./register/EnterCode";
import MyProfile from "./profile/MyProfile";
import AccountDetails from "./profile/AccountDetails";
import ProductsDashboard from "./Dashoard/ProductsDashboard";
import EquipmentDashboard from "./Dashoard/EquipmentDashboard";
import SuppliesDashboard from "./Dashoard/SuppliesDashboard";
import DashboardLayout from "./Dashoard/DashboardLayout";

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
        path: "Dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "ProductsDashboard",
            element: <ProductsDashboard />,
          },
          {
            path: "EquipmentDashboard",
            element: <EquipmentDashboard />,
          },
          {
            path: "SuppliesDashboard",
            element: <SuppliesDashboard />,
          },
        ],
      },

      {
        path: "MyProfile",
        element: <MyProfile />,
        children: [
          {
            index: true,
            path: "AccountDetails",
            element: <AccountDetails />,
          },
        ],
      },

      {
        path: "account",
        element: <Account />,
        children: [
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "signin",
            element: <SignIn />,
          },
          {
            path: "forgotpassword",
            element: <ForgotPassword />,
          },
          {
            path: "resetpassword",
            element: <ResetPassword />,
          },
          {
            path: "EnterCode",
            element: <EnterCode />,
          },
        ],
      },
      {
        path: "view-cart",
        element: <CartView />,
      },

      {
        path: "Products",
        element: <Products />,
        children: [
          {
            path: "AgriculturalProducts",
            element: <Products />,
          },

          {
            path: "AgriculturalProducts/Crop&FreshProduce",
            element: <Products />,
          },
          {
            path: "AgriculturalProducts/Seeds&Saplings",
            element: <Products />,
          },
          {
            path: "AgriculturalProducts/Organic&SustainableProducts",
            element: <Products />,
          },
        ],
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "itemview",
        element: <ProductView />,
      },

      {
        path: "blogView",
        element: <BlogView />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="bg-mercury-50">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
