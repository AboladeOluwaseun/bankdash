import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Profile from "./Project";
import notification from '../../assets/notification.svg'
import settings from "../../assets/settings.svg";
import hamburger from "../../assets/hamburger.svg";
const Header = () => {
  return (
    <div className="sticky bg-white px-6 lg:px-none lg:none top-0">
      <div className="flex bg-white items-center justify-between lg:grid grid-cols-headerGrid ">
        <Logo />
        <div className=" block lg:hidden cursor-pointer">
          <img src={hamburger} alt="hamburger" />
        </div>
        <div className=" bg-white px-6 py-6 flex items-center justify-between  ">
          <h2 className=" text-[1.25rem] ml-6 font-[600] text-primaryBlueLight ">
            Overview
          </h2>
          <div className="hidden lg:flex items-center space-x-[1.5rem] ">
            {" "}
            <div className=" ">
              {" "}
              <Search />
            </div>
            <div className=" cursor-pointer bg-mainBackground p-[0.69rem] active:scale-125 rounded-full">
              <img className="  " src={notification} alt="notification" />
            </div>
            <div className=" cursor-pointer bg-mainBackground p-[0.69rem] active:scale-125 rounded-full ">
              <img className="" src={settings} alt="settings" />
            </div>
            <div>
              {" "}
              <Profile />
            </div>
          </div>
        </div>
        <div className=" block lg:hidden">        <Profile />
</div>
      </div>
      <div className=" flex justify-center items-center mt-6 lg:hidden">
        {" "}
        <Search />
      </div>
    </div>
  );
};

export default Header;
