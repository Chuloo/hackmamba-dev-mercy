import React from "react";

export default function Btn({
  text,
  textColor,
  backgroundColor,
  slimBtn,
  Icon,
  flexItem,
}) {
  return (
    <div>
      {slimBtn ? (
        <div className={backgroundColor + " rounded-full w-fit"}>
          <button
            className={textColor + " text-base font-medium px-[45px] py-[12px]"}
          >
            <div
              className={`flex items-center  ${flexItem} ${
                flexItem ? "gap-[9px]" : "gap-[16px]"
              }`}
            >
              {Icon}
              {text}
            </div>
          </button>
        </div>
      ) : (
        <div className={backgroundColor + " rounded-full  w-fit"}>
          <button
            className={textColor + " text-base font-medium px-[2.7rem] py-4"}
          >
            {text}
          </button>
        </div>
      )}
    </div>
  );
}
