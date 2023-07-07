import React from "react";

export default function Btn({ text, textColor, backgroundColor, ...prop }) {
  return (
    <div className={backgroundColor + " rounded-full  w-fit"}>
      <button className={textColor + " text-base font-medium px-[2.7rem] py-4"}>
        {text}
      </button>
    </div>
  );
}
