import React from "react";
import Layout from "../../components/Layout";
import map from "../../images/map2.svg";
import twitter from "../../images/twitter2.svg";
import linkedin from "../../images/linkedin2.svg";
import contactUs from "../../images/contactus.svg";
import envelope from "../../images/env.svg";
import Btn from "../../components/Btn";

export default function Contact() {
  return (
    <Layout>
      <section
        className="bg-no-repeat bg-contain relative sm:mb-[100px] mb-[unset] bg-[center_top_3.5rem]"
        style={{ backgroundImage: `url(${map})` }}
      >
        <div className="sm:max-w-[1170px]  max-w-[358px]  mx-[auto] pt-[120px] flex justify-between sm:flex-row flex-col">
          <div className="sm:mb-[60px] mb-[382px]">
            <h2 className="text-primary max-w-[488px] leading-[60px] mb-[16px]">
              Hello there, how can we help you?
            </h2>
            <p className="text-contactTextColor3 max-w-[489px] font-[400]">
              Contact us if you have any questions about our company or
              products. We will try to provide an answer within a few days.
            </p>
            <div className="gradient-style top-[180px] right-[126px] sm:block hidden"></div>
          </div>

          <div className="sm:max-w-[513px] w-[358px] sm:w-[unset] sm:p-[56px] px-[16px] pt-[40px] pb-[48px] bg-white shadow-contactInputShadow rounded-[24px] flex flex-col gap-[32px] absolute sm:right-[135px] sm:top-[120px] top-[380px]">
            <div>
              <p className="text-contactTextColor2 text-base mb-[14px]">
                Full name *
              </p>
              <input
                placeholder="Julia William"
                type="text"
                name="text"
                className=" sm:w-[401px] w-full pt-[17px] pl-[20px] pb-[11px] placeholder:text-[16px] placeholder:text-contactTextColor border border-contactBorder rounded-[8px]"
              />
            </div>
            <div>
              <p className="text-contactTextColor2 text-base mb-[14px]">
                Email *
              </p>
              <input
                placeholder="you@example.com"
                type="email"
                name="email"
                className=" sm:w-[401px] w-full pt-[17px] pl-[20px] pb-[11px] placeholder:text-[16px] placeholder:text-contactTextColor border border-contactBorder rounded-[8px]"
              />
            </div>
            <div>
              <p className="text-contactTextColor2 text-base mb-[14px]">
                Company *
              </p>
              <input
                placeholder="UI Designer"
                type="text"
                name="text"
                className=" sm:w-[401px] w-full pt-[17px] pl-[20px] pb-[11px] placeholder:text-[16px] placeholder:text-contactTextColor border border-contactBorder rounded-[8px]"
              />
            </div>
            <div>
              <p className="text-contactTextColor2 text-base mb-[14px]">
                Company *
              </p>
              <textarea
                placeholder="How can we help you"
                type="text"
                name="text"
                className=" sm:w-[401px] w-full pt-[17px] pl-[20px] pb-[11px] placeholder:text-[16px] placeholder:text-contactTextColor border border-contactBorder rounded-[8px] resize-none h-[137px]"
              ></textarea>
            </div>

            <Btn
              slimBtn
              text="Send Message"
              backgroundColor="bg-secondary"
              textColor="text-white"
              Icon={<img src={envelope} alt="img" />}
            />
          </div>
        </div>

        <div className="bg-productSectionBg sm:pt-[80px] pt-[528px] pb-[116px] sm:pl-[135px] sm:pr-[50px] flex justify-between items-center sm:flex-row flex-col">
          <img src={contactUs} alt="image" />
          <div className="flex sm:flex-col flex-row sm:gap-[24px] gap-[32px] mt-[120px] sm:m-[unset]">
            <img src={twitter} alt="image" className="" />
            <img src={linkedin} alt="image" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
