import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import arrow2 from "../images/arrow2.svg";
import Btn from "./Btn";
import Img from "gatsby-image";

export default function Info({ title, desc, Icon, textBtn }) {
  const data = useStaticQuery(graphql`
    query TriangleQuery {
      triangle:file(relativePath: { eq: "triangle2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      triangle2:file(relativePath: { eq: "BG.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);


  return (
    <div className="sm:max-w-[1170px] max-w-[358px] mx-[auto]">
      <div className="relative w-fit ">
        <div>
          {/* <div className="gradient-radial bg-gradientRadial w-[505px] h-[368px]"></div> */}
          <div className=" sm:w-[548px] ">
            <Img fluid={data.triangle.childImageSharp.fluid} className="hidden sm:block" />
          </div>
          <div className=" w-[358px] ">
            <Img fluid={data.triangle2.childImageSharp.fluid} className="block sm:hidden" />
          </div>
        </div>
        <div className="absolute top-0 left-0 pt-[30px] px-[40px] ">
          <div className="sm:w-[unset] w-[56px]">{Icon}</div>
          <h2 className="sm:!text-[32px] !text-[24px] leading-[40px] sm:max-w-[422px] max-w-[302px] sm:my-[24px] mt-[24px] mb-[16px]">
            {title}
          </h2>
          <p className="text-white sm:mb-[32px] mb-[24px] sm:max-w-[unset] max-w-[302px]">{desc}</p>
          <Btn
            text={textBtn || "Join Our Community"}
            backgroundColor="bg-communityBg"
            Icon={<img src={arrow2} alt="icon" />}
            flexItem="flex-row-reverse"
          />
        </div>
      </div>
    </div>
  );
}
