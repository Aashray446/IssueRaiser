import React from "react";
import Logo from "../assets/png/logo-no-background.png";
import ErrorPopup from "./ErrorPopup";


const LogoHeader = () => {

  return (
    < div className="sticky top-0 z-10">
    <div className="w-100 bg-primary-400 p-1 flex justify-center items-center rounded-b-sm  top-0 left-0 right-0">
      <img className="h-10 p-1" src={Logo} />
    </div>
    <ErrorPopup></ErrorPopup>
    </div>
  );
};

export default LogoHeader;




