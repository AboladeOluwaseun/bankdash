import React from "react";
import logo from "../../assets/logo.png";
import logoName from "../../assets/logoName.png";
const Logo = () => {
  return (
    <div className=" hidden bg-white px-6 py-6 lg:flex items-center gap-[0.1rem] border-solid border-r-[1px] border-r-mainBackground">
      <img src={logo} alt="logo" />
      <img className=" " src={logoName} alt="logo-name" />
    </div>
  );
};

export default Logo;
