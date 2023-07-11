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
        className="bg-no-repeat bg-contain relative mb-[100px]  bg-[center_top_3.5rem]"
        style={{ backgroundImage: `url(${map})` }}
      >
        <div className="max-w-[1170px] mx-[auto] pt-[120px] flex justify-between">
          <div className="mb-[60px]">
            <h2 className="text-primary max-w-[488px] leading-[60px] mb-[16px]">
              Hello there, how can we help you?
            </h2>
            <p className="text-contactTextColor3 max-w-[489px] font-[400]">
              Contact us if you have any questions about our company or
              products. We will try to provide an answer within a few days.
            </p>
            <div className="gradient-style top-[180px] right-[126px]"></div>
          </div>

          <div className="max-w-[513px] p-[56px] bg-white shadow-contactInputShadow rounded-[24px] flex flex-col gap-[32px] absolute right-[135px] top-[120px]">
            <div>
              <p className="text-contactTextColor2 text-base mb-[14px]">
                Full name *
              </p>
              <input
                placeholder="Julia William"
                type="text"
                name="text"
                className=" w-[401px] pt-[17px] pl-[20px] pb-[11px] placeholder:text-[16px] placeholder:text-contactTextColor border border-contactBorder rounded-[8px]"
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
                className=" w-[401px] pt-[17px] pl-[20px] pb-[11px] placeholder:text-[16px] placeholder:text-contactTextColor border border-contactBorder rounded-[8px]"
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
                className=" w-[401px] pt-[17px] pl-[20px] pb-[11px] placeholder:text-[16px] placeholder:text-contactTextColor border border-contactBorder rounded-[8px]"
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
                className=" w-[401px] pt-[17px] pl-[20px] pb-[11px] placeholder:text-[16px] placeholder:text-contactTextColor border border-contactBorder rounded-[8px] resize-none h-[137px]"
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

        <div className="bg-productSectionBg pt-[80px] pb-[116px] pl-[135px] pr-[50px] flex justify-between items-center">
          <img src={contactUs} alt="image" />
          <div>
            <img src={twitter} alt="image" className="mb-[24px]" />
            <img src={linkedin} alt="image" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
