import React from "react";
import base from "../images/base.svg";
import logo2 from "../images/logo2.svg";
import item1 from "../images/item1.png";
import item2 from "../images/item2.png";
import item3 from "../images/item3.png";
import item4 from "../images/item4.png";
import item5 from "../images/item5.png";
import item6 from "../images/item6.png";
import Btn from "./Btn";

export default function Community() {
  return (
    <section className=" bg-productSectionBg pt-[102px] pb-[18px] relative overflow-hidden">
      <div className=" max-w-[1170px] mx-[auto] ">
        <div className="rounded-[480.87px] w-[353px] h-[481px] opacity-[0.2800000011920929] bg-greenGradient blur-[167px] absolute top-[-238px] left-[766px]"></div>
        <div className=" max-w-[1084px] mx-[auto] ">
          <img src={base} alt="img" />
        </div>
        <img
          src={logo2}
          alt="img"
          className=" absolute top-0 left-[50%] translate-x-[-50%] mt-[120px]"
        />

        <div className="absolute top-[266px]">
          <img src={item1} alt="img" className="max-w-[130px]" />
          <img
            src={item2}
            alt="img"
            className="max-w-[130px] ml-[127px] mt-[17px] "
          />
          <img
            src={item3}
            alt="img"
            className="max-w-[130px] mt-[10px] ml-[90px]"
          />
        </div>

        <div className="absolute top-[328px] flex flex-col w-[1084px] align-bottom items-end">
          <img src={item4} alt="img" className="max-w-[130px] mr-[-16px]" />
          <img
            src={item5}
            alt="img"
            className="max-w-[130px] mr-[-98px] mt-[-13px]"
          />
          <img
            src={item6}
            alt="img"
            className="max-w-[130px] mt-[-40px] mr-[80px]"
          />
        </div>

        <div className="w-[132px] h-[180px] bg-white opacity-[0.30000001192092896] absolute top-[410px] right-[-23px] blur-[132px]"></div>

        <div className="text-white max-w-[602px] mx-[auto] absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] mt-[65px]">
          <h2 className="mx-[auto] max-w-[629px] text-center mb-[16px]">
            Join Our Technical Writing Community
          </h2>
          <p className="text-center mb-[88px] text-white">
            Do you have an interest in technical writing? Join our community of
            aspiring and veteran technical writers to network, get mentorship,
            and advance your technical writing career.
          </p>
          <div className="flex justify-center">
            <Btn
              text="Join Our Community"
              backgroundColor="bg-communityBg"
              textColor="text-primary"
            />
          </div>
          <div className="w-[164px] h-[223px] bg-greenGradient2  blur-[132px] absolute bottom-[-260px] opacity-[0.2199999988079071]"></div>
        </div>
      </div>
    </section>
  );
}
