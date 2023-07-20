import React from "react";
import line from "../images/line.svg";

export default function PricingFee({
  icon,
  text,
  icon2,
  num,
  num2,
  num3,
  rounded, // all left right
  price,
  month,
  height,
}) {
  return (
    <section className="cursor-pointer">
      {height ? (
        <div
          className={` bg-pricingFeeBg w-fit pb-[32px] rounded-2xl shadow-pricingFeeShadow`}
        >
          <div className="head-wrapper bg-pricinghoverbg rounded-t-[16px] px-[32px] pt-[64px]">
            <div className="flex gap-[16px] items-center mb-[24px]">
              <div>{icon}</div>
              <div>
                <p className="text-pricingFeeText1 leading-[20px]">For</p>
                <h2 className="text-pricingFeeText4 text-[24px] leading-[35px]">
                  Free
                </h2>
              </div>
            </div>
            <p className="text-[14px] text-pricingFeeText3 mb-[25px]">{text}</p>
            <div className="flex items-center gap-[10px] mb-[26px]">
              <h2 className="text-primary">{price}</h2>
              <p className="text-pricingFeeText3">{month}</p>
            </div>

            <div className="">
              <img src={line} alt="line" />
            </div>
          </div>

          <div className="px-[32px]">
            <p className="text-base font-bold leading-[30px] my-[16px]">
              What’s Included
            </p>
            <div className="flex justify-between">
              <div className="flex items-center gap-[16px]">
                {icon2}
                <p className="text-base">Lorem Ipsum</p>
              </div>
              <div>
                <p className="text-base text-folderTextColor">{num}</p>
              </div>
            </div>

            <div className="flex justify-between my-[32px]">
              <div className="flex items-center gap-[16px] ">
                {icon2}
                <p className="text-base">Lorem Ipsum</p>
              </div>
              <div>
                <p className="text-base text-folderTextColor">{num2}</p>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-[16px]">
                {icon2}
                <p className="text-base">Lorem Ipsum</p>
              </div>
              <div>
                <p className="text-base text-folderTextColor">{num3}</p>
              </div>
            </div>

            <div className="flex items-center justify-between py-[12px] pl-[24px] pr-[17px] rounded-[1000px] border-2 border-pricingFeeborder sm:mt-[74px] mt-[42px] bg-secondary ">
              <p className="text-base text-white">Get Started</p>
              <svg
                width="79"
                height="14"
                viewBox="0 0 79 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-white"
              >
                <rect
                  opacity="0.1"
                  y="5.82843"
                  width="19"
                  height="2"
                  rx="1"
                  fill="#12141D"
                  className="fill-white"
                />
                <rect
                  opacity="0.2"
                  x="24"
                  y="5.82843"
                  width="19"
                  height="2"
                  rx="1"
                  fill="#12141D"
                  className="fill-white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M72.1213 0.292893C71.7308 -0.0976311 71.0976 -0.0976311 70.7071 0.292893C70.3166 0.683417 70.3166 1.31658 70.7071 1.70711L75.8284 6.82843L70.7071 11.9498C70.3166 12.3403 70.3166 12.9734 70.7071 13.364C71.0976 13.7545 71.7308 13.7545 72.1213 13.364L77.7782 7.70711C78.0172 7.46804 78.11 7.13804 78.0563 6.82843C78.11 6.51883 78.0172 6.18882 77.7782 5.94975L72.1213 0.292893ZM48 6.58578C48 6.0335 48.4477 5.58578 49 5.58578H71C71.5523 5.58578 72 6.0335 72 6.58578C72 7.13807 71.5523 7.58578 71 7.58578H49C48.4477 7.58578 48 7.13807 48 6.58578Z"
                  fill="#12141D"
                  className="fill-white"
                />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={` group bg-pricingFeeBg pb-[32px] w-fit ${rounded === "left" ? "sm:!rounded-r-none" : ""} ${rounded === "right" ? "sm:!rounded-l-none" : ""} rounded-2xl shadow-pricingFeeShadow`}
        >
          <div className="head-wrapper px-[32px] pt-[32px] rounded-t-[16px]">
            <div className="flex gap-[16px] items-center mb-[24px]">
              <div>{icon}</div>
              <div>
                <p className="text-pricingFeeText1 leading-[20px]">For</p>
                <h2 className="text-pricingFeeText4 text-[24px] leading-[35px]">
                  Free
                </h2>
              </div>
            </div>
            <p className="text-[14px] text-pricingFeeText3 mb-[25px]">{text}</p>
            <div className="flex items-center gap-[10px] mb-[26px]">
              <h2 className="text-primary">{price}</h2>
              <p className="text-pricingFeeText3">{month}</p>
            </div>

            <div className="">
              <img src={line} alt="line" />
            </div>
          </div>

          <div className="px-[32px]">
            <p className="text-base font-bold leading-[30px] my-[16px]">
              What’s Included
            </p>
            <div className="flex justify-between">
              <div className="flex items-center gap-[16px]">
                {icon2}
                <p className="text-base">Lorem Ipsum</p>
              </div>
              <div>
                <p className="text-base text-folderTextColor">{num}</p>
              </div>
            </div>

            <div className="flex justify-between my-[32px]">
              <div className="flex items-center gap-[16px] ">
                {icon2}
                <p className="text-base">Lorem Ipsum</p>
              </div>
              <div>
                <p className="text-base text-folderTextColor">{num2}</p>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-[16px]">
                {icon2}
                <p className="text-base">Lorem Ipsum</p>
              </div>
              <div>
                <p className="text-base text-folderTextColor">{num3}</p>
              </div>
            </div>

            <div className="flex items-center justify-between py-[12px] pl-[24px] pr-[17px] bg-white rounded-[1000px] border-2 border-pricingFeeborder mt-[42px]">
              <p className="text-base">Get Started</p>
              <svg
                width="79"
                height="14"
                viewBox="0 0 79 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.1"
                  y="5.82843"
                  width="19"
                  height="2"
                  rx="1"
                  fill="#12141D"
                />
                <rect
                  opacity="0.2"
                  x="24"
                  y="5.82843"
                  width="19"
                  height="2"
                  rx="1"
                  fill="#12141D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M72.1213 0.292893C71.7308 -0.0976311 71.0976 -0.0976311 70.7071 0.292893C70.3166 0.683417 70.3166 1.31658 70.7071 1.70711L75.8284 6.82843L70.7071 11.9498C70.3166 12.3403 70.3166 12.9734 70.7071 13.364C71.0976 13.7545 71.7308 13.7545 72.1213 13.364L77.7782 7.70711C78.0172 7.46804 78.11 7.13804 78.0563 6.82843C78.11 6.51883 78.0172 6.18882 77.7782 5.94975L72.1213 0.292893ZM48 6.58578C48 6.0335 48.4477 5.58578 49 5.58578H71C71.5523 5.58578 72 6.0335 72 6.58578C72 7.13807 71.5523 7.58578 71 7.58578H49C48.4477 7.58578 48 7.13807 48 6.58578Z"
                  fill="#12141D"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
