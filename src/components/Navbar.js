import { Link } from "gatsby";
import React from "react";
import logo from "../images/logo.svg";
import Btn from "./Btn";

export default function Navbar() {
  return (
    <div className="Navbar-container max-w-[1170px] my-0 mx-auto flex justify-between items-center pt-8 text-sm">
      <nav>
        <ul className="flex items-center text-primary font-medium">
          <li>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li className="ml-[3rem] ">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-[2.69rem]">
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
        </ul>
      </nav>

      <Btn text="Contact Us" backgroundColor="bg-secondary" />
    </div>
  );
}
