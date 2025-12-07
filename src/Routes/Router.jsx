import { createBrowserRouter } from "react-router";
import Mainlayouts from "../Layouts/Mainlayouts";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import DashboardLayout from "../Layouts/DashboardLayout";
import AuthLayouts from "../Layouts/AuthLayouts";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../Dashboard/AdminDashboard/ManageUsers";
import AllOrders from "../Dashboard/AdminDashboard/AllOrders";
import ManageAllProducts from "../Dashboard/AdminDashboard/ManageAllProducts";
import AddProducts from "../Dashboard/ManagerDashboard/AddProducts";
import ManageProducts from "../Dashboard/ManagerDashboard/ManageProducts";
import PendingOrders from "../Dashboard/ManagerDashboard/PendingOrders";
import ApproveOrders from "../Dashboard/ManagerDashboard/ApproveOrders";
import MyProfile from "../Dashboard/ManagerDashboard/MyProfile";
import MyOrder from "../Dashboard/BuyerDashboard/MyOrder";
import TrackOrder from "../Dashboard/BuyerDashboard/TrackOrder";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import OrderForm from "../Components/OrderForm/OrderForm";
import PaymentSuccess from "../Components/Payments/PaymentSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayouts />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/orderform/:id",
        element: (
          <PrivateRoute>
            <OrderForm />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment-success",
        element: <PaymentSuccess/>
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayouts />,
    children: [
      {
        path: "/logIn",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/manage-users",
        element: <ManageUsers />,
      },
      {
        path: "/dashboard/all-products",
        element: <ManageAllProducts />,
      },
      {
        path: "/dashboard/all-orders",
        element: <AllOrders />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProducts />,
      },
      {
        path: "/dashboard/manage-products",
        element: <ManageProducts />,
      },
      {
        path: "/dashboard/pending-orders",
        element: <PendingOrders />,
      },
      {
        path: "/dashboard/approve-orders",
        element: <ApproveOrders />,
      },
      {
        path: "/dashboard/my-profile",
        element: <MyProfile />,
      },
      {
        path: "/dashboard/my-order",
        element: <MyOrder />,
      },
      {
        path: "/dashboard/track-order",
        element: <TrackOrder />,
      },
    ],
  },
]);

export default router;
