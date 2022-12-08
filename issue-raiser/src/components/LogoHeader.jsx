import React from "react";
import Logo from "../assets/png/logo-no-background.png";
const LogoHeader = () => {
  return (
    <div className="w-100 bg-primary-400 p-1 flex justify-center items-center rounded-b-sm sticky z-50 top-0 left-0 right-0">
      <img className="h-10 p-1" src={Logo} />
    </div>
  );
};

export default LogoHeader;




