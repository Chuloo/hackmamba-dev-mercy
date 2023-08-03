import React, { useRef, useState, useEffect } from "react";
import tick from "../images/tick.svg";

export default function CurvedLine({ headingText, headingWidth }) {
  const lineRef = useRef();
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const draw = () => {
      let progress =
        lineRef.current.getBoundingClientRect().top / window.innerHeight;

      progress = Math.min(progress, 1);
      progress = Math.max(progress, 0);
      setProgress(progress);
    };

    window.addEventListener("scroll", draw);
    return () => {
      window.removeEventListener("scroll", draw);
    };
  }, []);

  return (
    <section className="relative">
      <div ref={lineRef}>
        <svg
          width="973"
          height="211"
          viewBox="0 0 973 211"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-[112px] mt-[80px] hidden lg:block"
        >
          <path
            d="M5.00002 5.00001H209.517H904C939.346 5.00001 968 33.6538 968 69V205"
            stroke="#403A5D"
            strokeWidth="10"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path
            d="M5 5H209.517H904C939.346 5 968 33.6538 968 69L968 205.5"
            stroke="#98C1EC"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDashoffset: `${progress * 1200}px`,
              strokeDasharray: `1200px`,
            }}
          />
        </svg>

        <svg
          width="204"
          height="491"
          viewBox="0 0 204 491"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="lg:hidden sm:translate-y-0 translate-y-[76px] sm:translate-x-0 translate-x-[45px]"
        >
          <path
            d="M5.45285 5.50598L5.42661 73.034L5.35455 258.514C5.34068 294.232 34.5666 323.049 70.2813 322.532L141.623 321.499C172.121 321.057 197.336 345.156 198.276 375.642V375.642L198.278 485.005"
            stroke="#403A5D"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.45241 5.50616L5.42618 73.0342L5.35412 258.514C5.34025 294.232 34.5662 323.049 70.2809 322.532L141.623 321.499C172.12 321.057 197.336 345.156 198.275 375.642V375.642L198.275 484"
            stroke="#98C1EC"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDashoffset: `${progress * 622}px`,
              strokeDasharray: `622px`,
            }}
          />
        </svg>
      </div>

      <div className="flex sm:gap-[80px] gap-[75px] absolute sm:top-[-75px] top-0 left-0 sm:flex-row flex-col">
        <img
          src={tick}
          alt="img"
          className="sm:w-[unset] w-[80px] sm:ml-0 ml-[10px]"
        />
        <h2
          className={
            headingWidth +
            " sm:p-[24px] py-[24px] px-[14px] bg-subColor rounded-[24px] sm:max-w-[441px] max-w-[358px] sm:leading-[56px] leading-[40px]"
          }
        >
          {headingText}
        </h2>
      </div>
    </section>
  );
}
