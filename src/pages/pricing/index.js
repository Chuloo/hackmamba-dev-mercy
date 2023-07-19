import React from "react";
import Layout from "../../components/Layout";
import Info from "../../components/Info";
import session from "../../images/session.svg";
import contactus2 from "../../images/contactus2.svg";
import PricingFee from "../../components/PricingFee";
import icon1 from "../../images/feeIcon1.svg";
import icon2 from "../../images/feeIcon2.svg";
import icon3 from "../../images/feeIcon3.svg";
import blueTick from "../../images/blue-tick.svg";
import greenTick from "../../images/green-tick.svg";
import orangeTick from "../../images/orange-tick.svg";

export default function Pricing() {
  return (
    <Layout>
      <section className="relatiove">
        <div className="text-center max-w-[587px] mx-[auto] mt-[120px] mb-[80px]">
          <h2 className="text-[64px] leading-[80px] text-primary mb-[32px]">
            Pricing built for all{" "}
            <span className="span-style px-[10px]">sizes</span>
          </h2>
          <p>
            Risus urna malesuada dolor velit sollicitudin quisque in, Et mattis
            donec a venenatis vestibulum elit nunc enim{" "}
          </p>
          <div className="gradient-style top-[180px] right-[135px] sm:block hidden"></div>
        </div>

        <div className="max-w-[1200px] mx-[auto] flex">
          <PricingFee
            icon={<img src={icon1} alt="icon" />}
            text="This is a perfect plan for starters"
            icon2={<img src={blueTick} alt="icon" />}
            num="10,000"
            num2="1"
            num3="1"
            rounded="rounded-l-2xl"
            price="$0"
            month="/monthly"
          />
          <div className="mt-[-32px]">
            <PricingFee
              icon={<img src={icon2} alt="icon" />}
              text="This is a perfect plan for starters"
              icon2={<img src={greenTick} alt="icon" />}
              num="10,000"
              num2="1"
              num3="4"
              rounded="rounded-2xl"
              price="$35"
              month="/monthly"
              height
            />
          </div>
          <PricingFee
            icon={<img src={icon3} alt="icon" />}
            text="This is a perfect plan for starters"
            icon2={<img src={orangeTick} alt="icon" />}
            num="$1/10,000 events"
            num2="$5/project"
            num3=" $5/team member"
            rounded="rounded-r-2xl"
            price="Custom"
          />
        </div>

        <div className="bg-productSectionBg relative mt-[160px]">
          <div className="flex gap-[48px] sm:max-w-[1170px]  mx-[auto] py-[80px] sm:flex-row flex-col">
            <Info
              title="Join Our Technical Writing Community"
              desc="Do you have an interest in technical writing? "
              Icon={
                <img src={session} alt="icon" className="w-[56px] h-[56px]" />
              }
            />
            <Info
              title="Have any feedback or questions?"
              desc="We’d love to hear from you. "
              Icon={
                <img
                  src={contactus2}
                  alt="icon"
                  className="w-[56px] h-[56px]"
                />
              }
              textBtn="Contact Us"
            />
          </div>
          <div></div>
        </div>
      </section>
    </Layout>
  );
}
