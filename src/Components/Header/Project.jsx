import React from "react";
import profile from "../../assets/profile.png";
const Profile = () => {
  return (
    <div className=" rounded-full cursor-pointer active:scale-125 w-[2.5rem] h-[2.5rem]">
      <img className=" rounded-full" src={profile} alt="profile" />
    </div>
  );
};

export default Profile;
