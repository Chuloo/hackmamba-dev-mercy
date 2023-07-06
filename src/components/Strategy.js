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
    <section className="max-w-[1170px] mx-[auto] mt-0 py-[160px] px-[80px] flex justify-between bg-strategyBg rounded-b-[40px]">
      {console.log(data)}
      <div className="max-w-[605px]">
        <h2 className=" text-primary mb-[20px]">
          Enjoy Community-Backed Content Amplification Strategy
        </h2>
        <p>
          High-quality content can only fly with an appropriate distribution
          strategy, and businesses will fail to fulfill their content production
          ROI. Hackmamba leverages its extensive community and partners for
          strategic content distribution.
        </p>
      </div>
      <Img
        fluid={data.shield.childImageSharp.fluid}
        className="h-[300px] w-[300px]"
      />
    </section>
  );
}
