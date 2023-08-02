import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import check from "../images/check.svg";
import Img from "gatsby-image";

export default function CommunityGroup({ flexReverse }) {
  const data = useStaticQuery(graphql`
    query CommunityQuery {
      gradient1: file(relativePath: { eq: "gradient.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      gradient2: file(relativePath: { eq: "gradient2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div>
      <div
        className={`flex justify-between ${flexReverse} sm:flex-row flex-col-reverse`}
      >
        <div className="sm:mt-0 mt-[72px]">
          <h2 className="text-[32px] leading-[32px] font-bold mb-[36px]">
            Lorem Ipsum
          </h2>
          <div className={`flex sm:gap-[96px] gap-[64px] sm:flex-row flex-col`}>
            <div className="flex gap-[24px] ">
              <img src={check} alt="icon" className="mt-[-25px]" />
              <p className="max-w-[250px] text-white text-[18px] leading-[30px]">
                Risus urna malesuada dolor velit sollicitudin quisque in.
              </p>
            </div>
            <div className="flex gap-[24px] ">
              <img src={check} alt="icon" className="mt-[-25px]" />
              <p className="max-w-[250px] text-white text-[18px] leading-[30px]">
                Risus urna malesuada dolor velit sollicitudin quisque in.
              </p>
            </div>
          </div>

          <div className="flex sm:gap-[96px] gap-[64px] sm:mt-[48px] mt-[64px] sm:flex-row flex-col">
            <div className="flex gap-[24px] ">
              <img src={check} alt="icon" className="mt-[-25px]" />
              <p className="max-w-[250px] text-white text-[18px] leading-[30px]">
                Risus urna malesuada dolor velit sollicitudin quisque in.
              </p>
            </div>
            <div className="flex gap-[24px] ">
              <img src={check} alt="icon" className="mt-[-25px]" />
              <p className="max-w-[250px] text-white text-[18px] leading-[30px]">
                Risus urna malesuada dolor velit sollicitudin quisque in.
              </p>
            </div>
          </div>
        </div>

        <Img
          fluid={data?.gradient1?.childImageSharp?.fluid}
          className="w-[351px] sm:mt-[-32px] mt-[54px] sm:block hidden"
        />
        <Img
          fluid={data?.gradient2?.childImageSharp?.fluid}
          className="w-[351px] sm:mt-[-32px] mt-[54px] block sm:hidden"
        />
      </div>
    </div>
  );
}
