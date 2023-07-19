import { Link } from "gatsby";
import React, { useState } from "react";
import logo from "../images/logo.svg";
import Btn from "./Btn";
import hamburger from "../images/hamburger.svg";

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className="Navbar-container sm:max-w-[1170px] max-w-[358px] my-0 mx-auto  pt-8 text-sm relative">
      <nav className="flex items-center justify-between ">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div
          className="sm:hidden"
          onClick={() => {
            setMenuIsOpen(!menuIsOpen);
          }}
        >
          <img src={hamburger} alt="img" />
        </div>
        <div
          className={`sm:flex flex-col sm:flex-row items-center sm:justify-between text-navBarTextColor font-medium sm:w-[1170px] sm:static absolute top-[80px] left-[50%] translate-x-[-50%] sm:translate-x-0 text-center sm:bg-inherit bg-white w-[100vw] h-[100vh] py-[30px] sm:p-0 sm:h-[unset] sm:opacity-100 sm:pointer-events-auto z-20 transition-opacity ease-out duration-400 ${
            !menuIsOpen ? "opacity-0 pointer-events-none" : ""
          }`}
        >
          <ul className="sm:flex gap-[2.69rem]">
            <li className="sm:ml-[3rem] hover:text-primary">
              <Link to="/#about">About</Link>
            </li>
            <li className=" hover:text-primary my-[2.69rem] sm:my-0">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:text-primary">
              <Link to="/community">Community</Link>
            </li>
          </ul>

          <Link
            to="/contact"
            className="my-[2.69rem] mx-auto block w-fit sm:m-0"
          >
            <Btn
              text="Contact Us"
              backgroundColor="bg-secondary"
              textColor="text-white"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
}
