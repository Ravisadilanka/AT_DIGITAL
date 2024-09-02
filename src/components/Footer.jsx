import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col bg-primary_color px-20 text-white pt-10 pb-5">
      <div className="flex justify-between ">
        <div className="flex flex-col gap-4 w-430px">
          <Logo />
          <p className="font-Lato">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="flex justify-between gap-20">
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-21px">Our Technologies</h1>
            <p>ReactJS</p>
            <p>Gatsby</p>
            <p>NextJS</p>
            <p>NodeJSs</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-21px">Our Services</h1>
            <p>Social Media Marketing</p>
            <p>web & Mobile App Development</p>
            <p>Data & Analytics</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-10">
        <div className="flex gap-2 w-630px border-t border-white items-center justify-center pt-1">
          <Link>
            <p>Privacy Policy</p>
          </Link>
          <span>|</span>
          <Link>
            <p>Terms & Conditions</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
