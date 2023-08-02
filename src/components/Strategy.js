import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React, { useRef } from "react";
import useIO from "../hooks/useIO";

export default function Strategy() {
  const data = useStaticQuery(graphql`
    query StrategyImgQuery {
      shield: file(relativePath: { eq: "Shield.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const stratRef = useRef();

  const { isVisible } = useIO({ ref: stratRef });

  return (
    <section className="sm:max-w-[1170px] mx-[auto] mt-0 sm:py-[160px] py-[120px] sm:px-[80px] max-w-[310px]  bg-strategyBg rounded-b-[40px] ">
      <div
        className={`max-w-[262px] m-[auto] sm:max-w-[unset] sm:m-[unset] flex justify-between sm:flex-row flex-col ${
          isVisible ? "fadeDown" : " "
        }`}
        ref={stratRef}
      >
        <div className="sm:max-w-[605px] max-w-[268px] fadeDown">
          <h2 className=" text-primary sm:mb-[20px] mb-[16px] sm:!leading-[56px] !leading-[39px]">
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
          className="h-[300px] w-[300px] sm:mt-0 mt-[32px] sm:left-0 sm:translate-x-0 left-[50%] translate-x-[-50%]"
        />
      </div>
    </section>
  );
}
