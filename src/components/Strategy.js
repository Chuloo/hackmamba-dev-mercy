import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";

export default function Strategy() {
  const data = useStaticQuery(graphql`
    query StrategyImgQuery {
      shield: file(relativePath: { eq: "Shield.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section className="sm:max-w-[1170px] mx-[auto] mt-0 sm:py-[160px] py-[120px] sm:px-[80px] max-w-[310px] flex justify-between bg-strategyBg rounded-b-[40px] sm:flex-row flex-col ">
      <div className="max-w-[262px] m-[auto] sm:max-w-[unset] sm:m-[unset]">
        <div className="sm:max-w-[605px] max-w-[268px]">
          <h2 className=" text-primary sm:mb-[20px] mb-[16px] sm:leading-[unset] leading-normal">
            Enjoy Community-Backed Content Amplification Strategy
          </h2>
          <p className="text-[18px] leading-[32px]">
            High-quality content can only fly with an appropriate distribution
            strategy, and businesses will fail to fulfill their content
            production ROI. Hackmamba leverages its extensive community and
            partners for strategic content distribution.
          </p>
        </div>
        <Img
          fluid={data.shield.childImageSharp.fluid}
          className="h-[300px] w-[300px] sm:mt-0 mt-[32px]"
        />
      </div>
    </section>
  );
}
