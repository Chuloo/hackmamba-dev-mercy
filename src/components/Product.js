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

  console.log(progress)

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
            width="395"
            height="506"
            viewBox="0 0 395 506"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:block hidden"
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

          <svg
            width="247"
            height="824"
            viewBox="0 0 247 824"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute sm:left-[111px] sm:top-[248px] left-[0px] top-[0px] lg:hidden"
          >
            <path
              d="M242.785 819.191L242.776 764.276L242.082 744.682C240.847 709.765 211.835 682.291 176.902 682.957L122.228 684L63.4137 685.122V685.122C31.1176 685.738 4.60765 659.698 4.61718 627.395C4.66853 453.191 4.70213 339.223 4.75782 150.397L4.77555 104.747C4.78928 69.4115 33.4379 40.7732 68.7738 40.7722L101.392 40.7713"
              stroke="#403A5C"
              stroke-width="8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M242.785 819.191L242.776 764.276L242.082 744.682C240.847 709.765 211.835 682.291 176.902 682.957L122.228 684L63.4137 685.122V685.122C31.1176 685.738 4.60765 659.698 4.61718 627.395C4.66853 453.191 4.70213 339.223 4.75782 150.397L4.77555 104.747C4.78928 69.4115 33.4379 40.7732 68.7738 40.7722L101.392 40.7713"
              stroke="#98C1EC"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
              style={{
                strokeDashoffset: `${(progress * 1.3) * -1035}px`,
                strokeDasharray: `1035px`,
              }}
              
            />
            <path
              d="M119 80C141.091 80 159 62.0914 159 40C159 17.9086 141.091 0 119 0C96.9086 0 79 17.9086 79 40C79 62.0914 96.9086 80 119 80Z"
              fill="#2E3648"
            />
            <path
              d="M136.334 40.0001C136.334 30.4271 128.573 22.6667 119 22.6667C109.427 22.6667 101.667 30.4271 101.667 40.0001C101.667 49.573 109.427 57.3334 119 57.3334C128.573 57.3334 136.334 49.573 136.334 40.0001Z"
              fill="#98C1EC"
            />
            <path
              d="M109.771 40.7517L118.484 47.8876"
              stroke="#221C3F"
              stroke-width="3.88267"
            />
            <path
              d="M129.154 33.0557L116.553 48.0529"
              stroke="#221C3F"
              stroke-width="3.88267"
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
