import React from "react";
import Btn from "./Btn";

export default function Input({ btnLabel }) {
  return (
    <div className="relative sm:mt-[48px] sm:max-w-[526px] mt-[32px] w-full">
      <input
        placeholder="Enter your work email"
        className="rounded-full sm:placeholder:text-[16px] placeholder:text-[14px] sm:w-[526px] !text-lg pl-[24px] py-[19px] shadow-heroIllustration focus:border focus:border-spanBg focus:outline-none text-inputColor w-full"
      />
      <div className="absolute top-[50%] translate-y-[-50%]  right-[0] pr-[5px] rounded-24px">
        <Btn
          text={btnLabel || "Get Started"}
          backgroundColor="bg-secondary"
          textColor="text-white"
        />
      </div>
    </div>
  );
}
