import { Link } from "gatsby";
import React from "react";
import logo from "../images/logo.svg";
import Btn from "./Btn";

export default function Navbar() {
  return (
    <div className="Navbar-container max-w-[1170px] my-0 mx-auto flex justify-between items-center pt-8 text-sm">
      <nav>
        <ul className="flex items-center text-navBarTextColor font-medium">
          <li>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li className="ml-[3rem] hover:text-primary">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-[2.69rem] hover:text-primary">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="hover:text-primary">
            <Link to="/community">Community</Link>
          </li>
        </ul>
      </nav>
      <Link to="/contact">
        <Btn
          text="Contact Us"
          backgroundColor="bg-secondary"
          textColor="text-white"
        />
      </Link>
    </div>
  );
}
