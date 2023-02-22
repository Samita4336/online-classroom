import React from "react";
import { Link } from "react-router-dom";


import logo from "../assets/logo2.png";
const Navbar = () => {
  return (
    <div className="bg-black/90">
      <div className=" h-[5rem] flex items-center justify-between px-4 md:max-w-[90vw] mx-auto">
        {/* Left */}
        <div className="flex items-center">
          <div className="flex w-[3rem] h-[3rem] bg-white rounded-full">
            <img src={logo} alt="" className="object-cover " />
          </div>
          <div className="text-white font-bold">
            <p className="text-[21px] pl-2">WCU Online Video Class Room </p>
          </div>
        </div>

        {/* Right */}
        <div className="">
          <ul className="text-white font-bold flex items-center gap-4 cursor-pointer">
            <li> <Link to="./Course/Course">Courses</Link></li>
            <li> <Link to="./About-us/About" target="_blank"> About Us</Link></li>
            <li> <Link to="/"> Product</Link></li>
            <li>Blogs</li>
            <li> <Link to="/">Logout</Link> </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
