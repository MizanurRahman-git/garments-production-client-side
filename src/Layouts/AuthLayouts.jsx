import React from "react";
import Logo from "../Components/Logo/Logo";
import { Link, Outlet } from "react-router";
import AuthImage from "../assets/login.png";

const AuthLayouts = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <Link to='/' className="flex ms-14">
          <Logo />
        </Link>
        <Outlet />
      </div>
      <div>
        <img src={AuthImage} alt="" />
      </div>
    </div>
  );
};

export default AuthLayouts;
