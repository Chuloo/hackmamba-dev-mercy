import { Link } from "gatsby";
import React from "react";
import Input from "./Input";
import footerLogo from "../images/footer-logo.svg";
import footerTwitter from "../images/footer-twitter.svg";
import footerLinkedin from "../images/footer-linkedin.svg";

export default function Footer() {
  return (
    <section>
      <div className="max-w-[1170px] mx-[auto] p-[80px] rounded-[40px] bg-strategyBg translate-y-[160px]">
        <h2 className="text-[56px] leading-[80px] max-w-[813px] text-primary">
          Managing a business is hard enough, let us handle{" "}
          <span className="span-style px-4">your </span>
          <span className="span-style px-4">content.</span>
        </h2>

        <div className="flex justify-between items-center mt-[38px]">
          <p>
            Write 10x faster, engage your audience, & never struggle with the
            blank page again.
          </p>
          <Input />
        </div>
      </div>
      <div>
        <section className="bg-productSectionBg pt-[233px] pb-[93px] ">
          <div className="max-w-[1170px] mx-[auto] flex justify-between">
            <Link to="/">
              <img src={footerLogo} alt="logo" />
            </Link>

            <ul className="flex items-center gap-[43px] text-white text-[14px] leading-[24px] font-medium">
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
