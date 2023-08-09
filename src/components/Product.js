import React, { useEffect, useRef, useState } from "react";
import texture from "../images/texture.png";
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
      className="bg-productSectionBg rounded-[40px] sm:mt-[200px] mt-[180px] mx-[8px]  px-0 sm:pt-[120px] sm:pb-[200px] pt-[47px] pb-[100px] bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(${texture})` }}
    >
      <div className="max-w-[310px] mx-auto sm:max-w-[1170px] relative">
        <div ref={lineRef}>
          <svg
            width="397"
            height="512"
            viewBox="0 0 397 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:block hidden"
          >
            <path
              d="M106 47.5H64C31.4152 47.5 5 73.9152 5 106.5V106.5V305.5C5 335.6 29.4005 360 59.5 360V360H336V360C366.928 360 392 385.072 392 416V506.5"
              stroke="#403A5D"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M106 47.5H64C31.4152 47.5 5 73.9152 5 106.5V106.5V305.5C5 335.6 29.4005 360 59.5 360V360H336V360C366.928 360 392 385.072 392 416V506.5"
              stroke="#98C1EC"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDashoffset: `${progress * 875}px`,
                strokeDasharray: `875px`,
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
              strokeWidth="3.88267"
            />
            <path
              d="M155.216 46.2783L137.574 67.2745"
              stroke="#221C3F"
              strokeWidth="3.88267"
            />
          </svg>

          <svg
            width="252"
            height="840"
            viewBox="0 0 252 840"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute sm:left-[111px] sm:top-[248px] left-[0px] top-[0px] lg:hidden"
          >
            <path
              d="M68.1576 37V37C33.2766 37 5 65.2766 5 100.158V139.575V617.092C5 635.675 20.5175 650.493 39.0801 649.638V649.638H211.982V649.638C231.571 650.517 247 666.654 247 686.262V835"
              stroke="#403A5D"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M68.1576 37V37C33.2766 37 5 65.2766 5 100.158V139.575V616.081C5 634.903 20.2582 650.161 39.0801 650.161V650.161H211.982V650.161C231.322 650.161 247 665.84 247 685.179V835"
              stroke="#98C1EC"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDashoffset: `${progress * 1.7 * 1060}px`,
                strokeDasharray: `1060px`,
              }}
            />
            <path
              d="M103.5 73C123.658 73 140 56.6584 140 36.5C140 16.3416 123.658 0 103.5 0C83.3416 0 67 16.3416 67 36.5C67 56.6584 83.3416 73 103.5 73Z"
              fill="#2E3648"
            />
            <path
              d="M119.317 36.5C119.317 27.7647 112.236 20.6833 103.5 20.6833C94.765 20.6833 87.6836 27.7647 87.6836 36.5C87.6836 45.2353 94.765 52.3167 103.5 52.3167C112.236 52.3167 119.317 45.2353 119.317 36.5Z"
              fill="#98C1EC"
            />
            <path
              d="M95.0781 37.1862L103.028 43.6977"
              stroke="#221C3F"
              strokeWidth="3.88267"
            />
            <path
              d="M112.766 30.1636L101.267 43.8486"
              stroke="#221C3F"
              strokeWidth="3.88267"
            />
          </svg>
        </div>
        <div className="sm:absolute top-[154px] left-[20px] w-full">
          <h2 className="sm:max-w-[830px] sm:ml-[80px] max-w-[284px] translate-x-[33px] sm:translate-x-0 pt-[126px] sm:pt-[unset]">
            Let’s Distil Your Product's Essence Through Crisp Technical Content
          </h2>
          <p className="text-white sm:max-w-[635px] sm:ml-[auto] sm:mt-[80px] mt-[8px] max-w-[274px] translate-x-[63px] sm:translate-x-0 text-[18px] leading-[32px]">
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
