import React from "react";
import tick from "../images/tick.svg";

export default function Outcome() {
  return (
    <section className="mx-[80px] bg-productSectionBg rounded-[40px] py-[120px] px-[55px] mt-[80px]">
      <div className="flex gap-[80px]">
        <img src={tick} alt="img" />
        <h2 className="max-w-[441px] p-[24px] bg-subColor rounded-[24px]">Focus On High-Value Outcomes</h2>
      </div>
    </section>
  );
}
