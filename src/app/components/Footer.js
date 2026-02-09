import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="flex flex-col md:flex-row md:justify-around px-6 md:px-10 py-12 text-black gap-8">
        <div className="logo flex-1">
          <Image src="/logoFooter.png" alt="Logo" width={200} height={80} />
          <p className="text-gray-600 font-medium ps-4 text-base md:text-xl max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pharetra condimentum.
          </p>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-xl md:text-3xl mb-4 md:mb-6">
            Contact Information
          </h3>
          <ul className="text-gray-600 font-medium text-sm md:text-xl space-y-3">
            <li className="flex items-center">
              <IoLocationSharp className="m-1 text-black" />
              732 Despard St, Atlanta
            </li>
            <li className="flex items-center">
              <IoIosCall className="m-1 text-black" />
              +97 888 8888
            </li>
            <li className="flex items-center">
              <IoMdMail className="m-1 text-black" />
              info@traveller.com
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-xl md:text-3xl mb-4 md:mb-6">
            Quick Link
          </h3>
          <ul className="text-gray-600 text-sm md:text-xl font-medium space-y-3">
            <li>Home</li>
            <li>About us</li>
            <li>Tours</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-xl md:text-3xl mb-4 md:mb-6">
            Follow Us
          </h3>
          <ul className="flex gap-6 md:gap-8 text-gray-800 text-2xl md:text-3xl">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-black text-gray-200 my-5 text-center py-4">
        <h4 className="text-sm md:text-2xl">
          Copyright &copy; All rights reserved (Website Developed & Managed by
          CREATIVECHROMA)
        </h4>
      </div>
    </footer>
  );
};
