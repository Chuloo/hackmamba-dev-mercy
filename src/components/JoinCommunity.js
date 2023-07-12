import React from "react";
import checkIcon from "../images/check.svg";

export default function JoinCommunity({
  flexRow,
  leftPosition,
  rightPosition,
}) {
  return (
    <div className={"flex " + flexRow}>
      <div>
        <h2 className="text-[32px] font-bold leading-[32px] mb-[32px]">
          Lorem Ipsum
        </h2>
        <div className="flex gap-[96px]">
          <div>
            <div className="flex items-center gap-[24px] mb-[48px]">
              <img src={checkIcon} alt="icon" />
              <p className="max-w-[250px] text-white leading-[30px]">
                Risus urna malesuada dolor velit sollicitudin quisque in.
              </p>
            </div>
            <div className="flex items-center gap-[24px]">
              <img src={checkIcon} alt="icon" />
              <p className="max-w-[250px] text-white leading-[30px]">
                Risus urna malesuada dolor velit sollicitudin quisque in.
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-[24px] mb-[48px]">
              <img src={checkIcon} alt="icon" />
              <p className="max-w-[250px] text-white leading-[30px]">
                Risus urna malesuada dolor velit sollicitudin quisque in.
              </p>
            </div>
            <div className="flex items-center gap-[24px]">
              <img src={checkIcon} alt="icon" />
              <p className="max-w-[250px] text-white leading-[30px]">
                Risus urna malesuada dolor velit sollicitudin quisque in.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[360px] right-[135px] ${leftPosition} ${rightPosition} `}
      >
        <div className="relative w-fit">
          <div className="gradient-radial bg-gradientRadial"></div>
          <div className="gradient-radial bg-gradientRadial2 absolute bottom-[16px] right-[16px]"></div>
        </div>
      </div>
    </div>
  );
}
