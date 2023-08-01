import React, { useEffect, useRef, useState } from "react";
import texture from "../images/texture.png";
import union from "../images/union.svg";
import union2 from "../images/union2.svg";
import Cards from "./Cards";
import { useLocation } from "@reach/router";

export default function Product() {
  const location = useLocation();
  const aboutRef = useRef(null);

  const lineRef = useRef();
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (location.hash === "#about") {
      aboutRef.current.scrollIntoView();
    }
    const draw = () => {
      let progress =
        lineRef.current?.getBoundingClientRect().top / window.innerHeight;

      progress = Math.min(progress, 1);
      progress = Math.max(progress, 0);
      setProgress(progress);
    };

    window.addEventListener("scroll", draw);
    return () => {
      window.removeEventListener("scroll", draw);
    };
  }, [location]);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="bg-productSectionBg rounded-[40px] sm:mt-[200px] mt-[180px] mx-[8px]  px-0 sm:pt-[120px] sm:pb-[200px] py-[100px] bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(${texture})` }}
    >
      <div className="max-w-[310px] mx-auto sm:max-w-[1170px] relative">
        <svg
          width="395"
          height="506"
          viewBox="0 0 395 506"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={lineRef}
        >
          <path
            d="M390 501L390 414C390 378.654 361.346 350 326 350H86.7642H69C33.6538 350 5 321.346 5 286V156.5V112C5 76.6538 33.6538 48 69 48H93"
            stroke="#403A5D"
            stroke-width="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M390 501L390 414C390 378.654 361.346 350 326 350H86.7642H69C33.6538 350 5 321.346 5 286V156.5V112C5 76.6538 33.6538 48 69 48H93"
            stroke="#98C1EC"
            stroke-width="10"
            stroke-linecap="round"
            stroke-linejoin="round"
            style={{
              strokeDashoffset: `${progress * -845}px`,
              strokeDasharray: `845px`,
            }}
          />
          <path
            d="M141 112C171.928 112 197 86.9279 197 56C197 25.0721 171.928 0 141 0C110.072 0 85 25.0721 85 56C85 86.9279 110.072 112 141 112Z"
            fill="#2E3648"
          />
          <path
            d="M165.267 56C165.267 42.5979 154.402 31.7333 141 31.7333C127.598 31.7333 116.733 42.5979 116.733 56C116.733 69.4021 127.598 80.2667 141 80.2667C154.402 80.2667 165.267 69.4021 165.267 56Z"
            fill="#98C1EC"
          />
          <path
            d="M128.079 57.0529L140.277 67.0432"
            stroke="#221C3F"
            stroke-width="3.88267"
          />
          <path
            d="M155.216 46.2783L137.574 67.2745"
            stroke="#221C3F"
            stroke-width="3.88267"
          />
        </svg>

        <img
          src={union2}
          alt="arrow"
          className="absolute sm:left-[111px] sm:top-[248px] left-[26px] top-[211px] lg:hidden"
        />
        <div className="sm:absolute top-[154px] left-[20px] w-full">
          <h2 className="sm:max-w-[830px] sm:ml-[80px] max-w-[284px] translate-x-[33px] sm:translate-x-0 ">
            Let’s Distil Your Product's Essence Through Crisp Technical Content
          </h2>
          <p className="text-white sm:max-w-[635px] sm:ml-[auto] sm:mt-[80px] mt-[32px] max-w-[237px] translate-x-[63px] sm:translate-x-0 text-[18px] leading-[32px]">
            Content production is vital to business processes to enhance
            customer acquisition and retention capacities, minimize operating
            costs and enable better user decision-making.
          </p>
        </div>

        <div className="" id="productCard">
          <Cards />
        </div>
      </div>
    </section>
  );
}
