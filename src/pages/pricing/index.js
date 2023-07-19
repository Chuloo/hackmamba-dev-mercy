import React from "react";
import Layout from "../../components/Layout";
import Info from "../../components/Info";
import session from '../../images/session.svg'
import contactus2 from '../../images/contactus2.svg'

export default function Pricing() {
  return (
    <Layout>
      <div>Pricing</div>

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
              <img src={contactus2} alt="icon" className="w-[56px] h-[56px]" />
            }
            textBtn="Contact Us"
          />
        </div>
        <div></div>
      </div>
    </Layout>
  );
}
