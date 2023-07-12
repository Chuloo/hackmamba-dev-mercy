import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import arrow2 from "../images/arrow2.svg";
import Btn from "./Btn";
import Img from "gatsby-image";

export default function Info({ title, desc, Icon, textBtn }) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "triangle.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="max-w-[1170px] mx-[auto]">
      <div className="relative w-fit ">
        <div>
          <div className="gradient-radial bg-gradientRadial w-[505px] h-[368px]"></div>
          <div className=" w-[548px] h-[368px] absolute bottom-[16px] right-[16px]">
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
        </div>
        <div className="absolute top-[15px]">
          {Icon}
          <h2 className="text-[32px] leading-[40px] max-w-[422px] my-[24px]">
            {title}
          </h2>
          <p className="text-white mb-[32px]">{desc}</p>
          <Btn
            slimBtn
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
