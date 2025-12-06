import React from "react";
import logo from '../../assets/logo (2).png'

const Logo = () => {
  return (
    <div className="flex gap-2.5 items-center">
      <img className="w-16 rounded-full" src={logo} alt="logo" />
      <h1 className="font-bold text-xl -ms-3">Garments</h1>
    </div>
  );
};

export default Logo;
