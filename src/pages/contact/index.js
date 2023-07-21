import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import map from "../../images/map2.svg";
import twitter from "../../images/twitter2.svg";
import linkedin from "../../images/linkedin2.svg";
import contactUs from "../../images/contactus.svg";
import contact from "../../images/contactsvg.svg";
import envelope from "../../images/env.svg";
import Btn from "../../components/Btn";
import Img from "gatsby-image";

export default function Contact({ data }) {
  return (
    <Layout>
      <section
        className="bg-no-repeat bg-contain relative sm:mb-[100px] mb-[unset] bg-[center_top_3.5rem] contact-us"
        style={{ backgroundImage: `url(${map})` }}
      >
        <div className="sm:max-w-[1170px]  max-w-[358px]  mx-[auto] pt-[120px] flex justify-between sm:flex-row flex-col">
          <div className="sm:mb-[60px] mb-[48px]">
            <h2 className="text-primary max-w-[488px] leading-[60px] mb-[16px]">
              Hello there, how can we help you?
            </h2>
            <p className="text-contactTextColor3 max-w-[489px] font-[400]">
              Contact us if you have any questions about our company or
              products. We will try to provide an answer within a few days.
            </p>
            <div className="gradient-style top-[180px] right-[126px] sm:block hidden"></div>
          </div>

          <div className="sm:max-w-[513px] w-[358px] sm:w-[unset] sm:p-[56px] px-[16px] pt-[40px] pb-[48px] bg-white shadow-contactInputShadow rounded-[24px] flex flex-col gap-[32px] z-10">
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

        <div className="bg-productSectionBg sm:pt-[80px] pt-[528px] pb-[116px] relative sm:mt-[-465px] mt-[-375px] overflow-hidden">
          <div className="flex justify-between items-center sm:flex-row flex-col sm:max-w-[1170px] sm:mx-[auto]">
            <div className="sm:flex items-baseline sm:w-[calc(100%-513px)] hidden">
              <img
                src={contactUs}
                alt="img"
                className="flex-shrink-0 translate-x-[3px]"
              />
              <div className=" w-full flex-1 h-[3px] bg-contactLine translate-y-[-2px]"></div>

              <Img
                fluid={data.file.childImageSharp.fluid}
                className="flex-shrink-0 w-[10px] translate-y-[2px] shadow-arrowHeadShadow"
              />
            </div>
            <div className="block sm:hidden mt-[-157px] self-start ml-[24px]">
              <img src={contact} alt="img" />
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-[24px] gap-[32px] mt-[120px] sm:m-[unset] sm:mr-[-95px]">
              <img src={twitter} alt="img" className="" />
              <img src={linkedin} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query ArrowQuery {
    file(relativePath: { eq: "arrowhead.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
