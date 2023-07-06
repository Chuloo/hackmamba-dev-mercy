import React from "react";
import Btn from "./Btn";

export default function Input() {
  return (
    <div className="relative mt-[48px]">
      <input
        placeholder="Enter your work email"
        type="email"
        name="email"
        className="rounded-full placeholder:text-[16px] w-[526px] !text-lg pl-[24px] py-[19px] shadow-heroIllustration focus:border focus:border-spanBg focus:outline-none text-inputColor"
      />
      <div className="absolute top-[50%] translate-y-[-50%]  right-[155px]">
        <Btn text="Get Started" backgroundColor="bg-secondary" />
      </div>
    </div>
  );
}
