import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaCartArrowDown, FaHome, FaUserPlus } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import {
  MdAddCard,
  MdManageAccounts,
  MdOutlineSupportAgent,
  MdPendingActions,
  MdProductionQuantityLimits,
  MdShoppingCart,
} from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router";
import useRole from "../Hooks/useRole";

const DashboardLayout = () => {
  const [role] = useRole();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-4">
            <h1>Inventor</h1>
          </div>
        </nav>
        {/* Page content here */}
        <Outlet />
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            <li>
              <NavLink
                to="/"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                {/* Home icon */}
                <FaHome />
                <span className="is-drawer-close:hidden">Homepage</span>
              </NavLink>
            </li>

            {/* Admin Links */}
            {role === "Admin" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/manage-users"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Manage User"
                  >
                    <FaUserPlus />

                    <span className="is-drawer-close:hidden">Manage User</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/all-products"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="All Products"
                  >
                    <MdProductionQuantityLimits />

                    <span className="is-drawer-close:hidden">All Products</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/all-orders"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="All Orders"
                  >
                    <MdShoppingCart />

                    <span className="is-drawer-close:hidden">All Orders</span>
                  </NavLink>
                </li>
              </>
            )}

            {/* manager dashboard */}

            {role === "Manager" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/add-product"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Add Product"
                  >
                    <MdAddCard />

                    <span className="is-drawer-close:hidden">Add Product</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manage-products"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Manage Product"
                  >
                    <MdManageAccounts />

                    <span className="is-drawer-close:hidden">
                      Manage Product
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/pending-orders"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Pending Orders"
                  >
                    <MdPendingActions />

                    <span className="is-drawer-close:hidden">
                      Pending Orders
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/approve-orders"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Approve Orders"
                  >
                    <MdOutlineSupportAgent />

                    <span className="is-drawer-close:hidden">
                      Approve Orders
                    </span>
                  </NavLink>
                </li>
              </>
            )}

            {/* buyer dashboard */}

            {role === "Buyer" && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/my-order"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="My Order"
                  >
                    <FaCartArrowDown />

                    <span className="is-drawer-close:hidden">My Order</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/track-order"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Track Order"
                  >
                    <FaMapLocationDot />

                    <span className="is-drawer-close:hidden">Track Order</span>
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink
                to="/dashboard/my-profile"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Profile"
              >
                <CgProfile />

                <span className="is-drawer-close:hidden">My Profile</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
