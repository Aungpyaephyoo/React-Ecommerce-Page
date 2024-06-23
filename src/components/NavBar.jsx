// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../assets/logo/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { DropdownLinks, Menus } from "../constants";

const NavBar = () => {
  const orderHandle = () => {
    alert("Order not available yet.");
  };

  return (
    <div className=" shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className=" bg-primary/40 py-2">
        <div className=" container flex justify-between items-center">
          <div>
            <a
              href="#"
              className=" font-bold text-2xl justify-center items-center sm:text-3xl flex gap-2"
            >
              <img src={Logo} alt="Logo" className="w-14" />
              Shop
            </a>
          </div>
          <div className=" flex justify-center items-center gap-4">
            <div className=" relative group hidden sm:block ">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800 "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button
              onClick={orderHandle}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className=" group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            <DarkMode />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ul className=" sm:flex hidden items-center gap-4 group">
          {Menus.map((menu, index) => (
            <li key={index}>
              <a
                className=" inline-block px-4 hover:text-primary duration-200"
                href={menu.link}
              >
                {menu.name}
              </a>
            </li>
          ))}
          <li className="group-relative cursor-pointer">
            <a href="#" className=" flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className=" transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className=" absolute z-[9999] hidden group-hover:block w-[150px] rounded-sm bg-white p-2 text-black shadow-md">
              <ul className="">
                {DropdownLinks.map((DropdownLink, index) => (
                  <li key={index}>
                    <a
                      href={DropdownLink.link}
                      className=" inline-block w-full hover:text-primary py-2 "
                    >
                      {DropdownLink.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
