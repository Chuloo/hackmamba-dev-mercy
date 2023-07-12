import React from "react";
import tick from "../images/tick.svg";
import curvedLine from "../images/curvedLine.svg";

export default function CurvedLine({ headingText, headingWidth }) {
  return (
    <section className="relative">
      <img src={curvedLine} alt="line" className="ml-[112px] mt-[80px]" />
      <div className="flex gap-[80px] absolute top-[-75px] left-0">
        <img src={tick} alt="img" />
        <h2 className={headingWidth + " p-[24px] bg-subColor rounded-[24px]"}>
          {headingText}
        </h2>
      </div>
    </section>
  );
}
