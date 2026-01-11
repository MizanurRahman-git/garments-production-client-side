import React from "react";
import logo from '../../assets/logo (2).png'

const Logo = () => {
  return (
    <div className="flex pl-3 gap-6 items-center">
      <img className="hidden md:block w-16 rounded-full" src={logo} alt="logo" />
      <h1 className="font-bold text-xl -ms-3">FEBRIC FASION</h1>
    </div>
  );
};

export default Logo;
