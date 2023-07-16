import React from "react";
import tick from "../images/tick.svg";
import curvedLine from "../images/curvedLine.svg";
import curvedLine2 from "../images/curvedLine2.svg";

export default function CurvedLine({ headingText, headingWidth }) {
  return (
    <section className="relative">
      <img src={curvedLine} alt="line" className="ml-[112px] mt-[80px] hidden lg:block" />
      <img src={curvedLine2} alt="line" className="lg:hidden sm:translate-y-0 translate-y-[80px] sm:translate-x-0 translate-x-[45px]"  />
      <div className="flex sm:gap-[80px] gap-[75px] absolute sm:top-[-75px] top-0 left-0 sm:flex-row flex-col">
        <img src={tick} alt="img" className="sm:w-[unset] w-[80px] sm:ml-0 ml-[4px]" />
        <h2 className={headingWidth + " p-[24px] bg-subColor rounded-[24px] sm:max-w-[441px] max-w-[310px]"}>
          {headingText}
        </h2>
      </div>
    </section>
  );
}
