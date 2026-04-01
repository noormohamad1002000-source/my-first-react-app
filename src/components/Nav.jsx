import React from "react";
import { MdMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";

const Nav = () => {
  return (
    <div className="flex justify-between  py-5 px-50  border-2  border-gray-200  "  >
      <div className="flex gap-4  ml-25 mr-25 " >
        <a href="mailto:sales@shreeanant.com" className="flex  items-center gap-2  " >
          <MdMailOutline className="text-3xl text-gray-500 "  /> <span  className=" text-gray-500" >sales@shreeanant.com</span>
        </a>

        <a href="tel:011-44123300" className="flex items-center gap-2" >
          <FaPhoneAlt className="text-3xl text-gray-500" /> <span className="text-gray-500" >011-44123300</span>
        </a>
      </div>
      <div className="flex gap-4 items-center " >
        <a href="#">
          <FaFacebook className="text-blue-800 text-3xl" />
        </a>
        <a href="#">
          <FaXTwitter className="text-blue-800 text-3xl" />
        </a>
        <a href="#">
          <FaLinkedinIn className="text-blue-800 text-3xl" />
        </a>
        <a href="#">
          <FaWhatsappSquare className="text-blue-800 text-3xl" />
        </a>
        <a href="#">
          <FaSquareYoutube className="text-blue-800 text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default Nav;
