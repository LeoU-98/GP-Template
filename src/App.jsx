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
        children: [
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "signin",
            element: <SignIn />,
          },
        ],
      },
      {
        path: "cartview",
        element: <CartView />,
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
