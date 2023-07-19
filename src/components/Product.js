import React, { useEffect, useRef } from "react";
import texture from "../images/texture.png";
import union from "../images/union.svg";
import union2 from "../images/union2.svg";
import Cards from "./Cards";
import { useLocation } from "@reach/router";

export default function Product() {
  const location = useLocation();
  const aboutRef = useRef(null);
  console.log(location);

  useEffect(() => {
    if (location.hash === "#about") {
      aboutRef.current.scrollIntoView();
    }
  }, [location]);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="bg-productSectionBg rounded-[40px] sm:mt-[200px] mt-[180px] mx-[8px] sm:px-[111px] px-0 sm:py-[200px] py-[100px] bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(${texture})` }}
    >
      <div className="max-w-[310px] m-auto sm:max-w-[unset] sm:m-[unset]">
        <img
          src={union}
          alt="arrow"
          className="absolute left-[111px] top-[248px] sm:block hidden"
        />
        <img
          src={union2}
          alt="arrow"
          className="absolute sm:left-[111px] sm:top-[248px] left-[26px] top-[211px] lg:hidden"
        />
        <h2 className="sm:max-w-[830px] sm:ml-[80px] max-w-[284px] translate-x-[33px] sm:translate-x-0 ">
          Let’s Distil Your Product's Essence Through Crisp Technical Content
        </h2>
        <p className="text-white sm:max-w-[635px] sm:ml-[auto] sm:mt-[80px] mt-[32px] max-w-[237px] translate-x-[63px] sm:translate-x-0 text-[18px] leading-[32px]">
          Content production is vital to business processes to enhance customer
          acquisition and retention capacities, minimize operating costs and
          enable better user decision-making.
        </p>

        <div className="">
          <Cards />
        </div>
      </div>
    </section>
  );
}
