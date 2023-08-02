import React, { useRef } from "react";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import { Link } from "gatsby";
import useIO from "../hooks/useIO";

export default function Moto() {
  const motoRef = useRef();

  const { isVisible } = useIO({ ref: motoRef });
  return (
    <section className="bg-[linear-gradient(0deg,_#FFF_0%,_#ffffff00_100%)]">
      <div
        className="sm:max-w-[1010px] max-w-[358px] my-0 mx-[auto] flex justify-between sm:pt-[121px]  pt-[240px] pb-[120px] sm:flex-row flex-col"
        ref={motoRef}
      >
        <div className={`${isVisible ? "fadeRight" : " "}`}>
          <h2 className="text-primary sm:max-w-[399px] max-w-[358px] sm:mb-[34px] mb-[16px] leading-[39px] sm:leading-[56px]">
            Thought Leadership Is Our Forte!
          </h2>
          <p className="pt-[12px] text-[18px] leading-[32px]">
            Join the conversation on social media.
          </p>
        </div>
        <div className={`max-w-[484px] ${isVisible ? "fadeLeft" : " "}`}>
          <p className="sm:pt-[36px] pt-[12px] leading-[32px]">
            Hackmamba believes in being uniquely different. We only engage the
            finest professionals, thought leaders, and technology specialists
            from various tech stacks.
          </p>
          <div className="flex sm:gap-[36px] gap-[50px] sm:mt-[70px] mt-[48px]">
            <Link to="#">
              <img src={twitter} alt="logo" />
            </Link>
            <Link to="#">
              <img src={linkedin} alt="logo" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
