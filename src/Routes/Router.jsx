import { createBrowserRouter } from "react-router";
import Mainlayouts from "../Layouts/Mainlayouts";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import DashboardLayout from "../Layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayouts/>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path:'/all-products',
        element: <AllProducts/>
      },
      {
        path:'/about-us',
        element: <AboutUs/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout/>
  }
]);

export default router