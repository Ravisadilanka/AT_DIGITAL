import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="bg-primary_color flex items-center justify-between h-20 px-20">
      <Logo />
      <div className="flex justify-start gap-7">
        <Link className="text-white text-sm">SERVICES</Link>
        <Link className="text-white text-sm">ABOUT US</Link>
        <Link className="text-white text-sm">CONTACT US</Link>
        <Link className="text-white text-sm">CAREERS</Link>
      </div>
    </div>
  );
};

export default Header;
