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
    <div className="hover:translate-y-[-3px] ease-in duration-300">
      {slimBtn ? (
        <div className={backgroundColor + " rounded-full w-fit "}>
          <button
            className={
              textColor +
              "  sm:text-base font-medium px-[45px] py-[13px] !text-sm"
            }
          >
            <div
              className={`flex items-center  ${flexItem} ${
                flexItem ? "gap-[9px]" : "gap-[16px]"
              }`}
            >
              {text}
              {Icon && (
                <div className="icon">
                  {/* <Icon /> */}
                  {Icon}
                </div>
              )}
            </div>
          </button>
        </div>
      ) : (
        <div className={backgroundColor + " rounded-full  w-fit"}>
          <button
            className={`${textColor} sm:text-base font-medium sm:px-[2.7rem] py-[16px] px-[20px] text-sm`}
          >
            <div
              className={`flex items-center gap-[16px]
              }`}
            >
              {text}
              {Icon && (
                <div className="icon">
                  {/* <Icon /> */}
                  {Icon}
                </div>
              )}
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
