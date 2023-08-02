import { Link } from "gatsby";
import React from "react";
import Input from "./Input";
import footerLogo from "../images/footer-logo.svg";
import footerTwitter from "../images/footer-twitter.svg";
import footerLinkedin from "../images/footer-linkedin.svg";
import connection2 from "../images/connection2.svg";
import connection3 from "../images/connection3.svg";
import Typewriter from "./Typewriter";

export default function Footer() {
  return (
    <section>
      <div className="sm:max-w-[1170px] max-w-[358px] mx-[auto] sm:p-[80px] py-[80px] rounded-[40px] bg-strategyBg translate-y-[160px]">
        <div className="sm:max-w-[unset] sm:m-[unset] max-w-[327px] m-auto ">
          <h2 className="text-[56px] leading-[80px] max-w-[813px] text-primary sm:block hidden">
            Managing a business is hard enough, let us handle{" "}
            <span className="span-style px-4 relative ">
              <Typewriter value="your" />{" "}
            </span>
            <span className="span-style px-[11px] relative block w-fit">
              <Typewriter value="content." />
            </span>
          </h2>

          <h2 className="text-[56px] sm:leading-[80px] leading-[39px] max-w-[813px] text-primary block sm:hidden">
            Managing a business is hard enough,
            <span className="inline-block">
              Let us handle{" "}
              <span className="span-style px-2.5 relative">
                {" "}
                <Typewriter value="your" />{" "}
              </span>
              <span className="span-style px-[11px] relative">
                <Typewriter value="content." />
              </span>
            </span>
          </h2>

          <div className="absolute top-[193px] left-[331px] hidden sm:block">
            <img src={connection2} alt="img" className="sm:block hidden" />
          </div>
          <div className="absolute top-[166px] left-[167px]">
            <img src={connection3} alt="img" className="sm:hidden block" />
          </div>

          <div className="flex justify-between items-center sm:mt-[38px] mt-[24px] sm:flex-row flex-col">
            <p className=" sm:max-w-[unset] text-[18px] leading-[32px] m-auto">
              Write 10x faster, engage your audience, & never struggle with the
              blank page again.
            </p>
            <Input />
          </div>
        </div>
      </div>
      <div>
        <section className="bg-productSectionBg sm:pt-[233px] pt-[256px] sm:pb-[93px] pb-[80px] px-[24px]">
          <div className="max-w-[1170px] mx-[auto] flex justify-between sm:flex-row flex-col">
            <Link to="/">
              <img src={footerLogo} alt="logo" />
            </Link>

            <ul className="flex items-center sm:gap-[43px] gap-[34px] text-white text-[14px] leading-[24px] font-medium flex-wrap sm:mt-0 mt-[56px]">
              <li className="">
                <Link to="/about">About</Link>
              </li>
              <li className="">
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/community">Community</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="#">
                  <img src={footerTwitter} alt="logo" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src={footerLinkedin} alt="logo" />
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}
