import React from "react";
import { NavLink } from "react-router";
import { FaHome } from "react-icons/fa";


const Nav2 = () => {
  return (
    <div>
      <div className="flex justify-between m-4  ">
        <NavLink>
          <img
            src="http://demo.webshree.in/shreeanant/images/logo.png"
            alt="logo"
          />
        </NavLink>
        <ul className="flex items-center   ">
          <li  >
          <NavLink className={({isActive})=>(isActive? "activeColor": "  ")}        to="/"   ><FaHome className="px-10 py-2.5 text-9xl"  /></NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>(isActive? "activeColor py-2.5 px-10  text-3xl": "py-2.5 px-10 text-3xl")}    to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>(isActive? "activeColor py-2.5 px-10  text-3xl": " py-2.5 px-10 text-3xl")}    to="/product">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>(isActive? "activeColor py-2.5 px-10 text-3xl": "py-2.5 px-10 text-3xl")}    to="/export">
              Export
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav2;
