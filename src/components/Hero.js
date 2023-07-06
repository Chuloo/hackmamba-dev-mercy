import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import connection from "../images/connection.svg";
import longArrow from "../images/longArrow.svg";
import vector from "../images/vector.svg";
import Img from "gatsby-image";
import Input from "./Input";
import saasToday from "../images/saastoday.svg";
import askimat from "../images/askimat.svg";
import martino from "../images/martino.svg";
import rocker from "../images/rocker.svg";

export default function Hero() {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      illustration1: file(relativePath: { eq: "Illustrations01.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      illustration2: file(relativePath: { eq: "Illustrations02.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      illustration3: file(relativePath: { eq: "Illustrations03.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section className="hero-section flex max-w-[1170px] mx-auto my-0 relative">
      <div>
        <div className="relative flex-1 min-w-[676px] h-fit">
          <h1 className="font-headerFont max-w-[42.25rem] leading-[5rem] mt-[7.5rem] z-10 text-[4rem]">
            Create Superior{" "}
            <span className="span-style px-[0.906rem]">Technical Content </span>
            for Your World Changing{" "}
            <span className="span-style px-4">Products</span>{" "}
          </h1>
          <img
            src={connection}
            alt="vector"
            className="absolute right-0 bottom-0 translate-y-[-1.438rem] translate-x-[9px]"
          />
        </div>
        <Input />

        <div className="mt-[180px]">
          <p>We work with organisations like</p>
          <div className="organisations flex gap-[45px] mt-[27px]">
            <img src={saasToday} alt="logo1" />
            <img src={askimat} alt="logo2" />
            <img src={martino} alt="logo3" />
            <img src={rocker} alt="logo4" />
          </div>
        </div>
      </div>

      <div className="relative flex-1">
        <img
          src={longArrow}
          about="alt='circle"
          className="absolute top-[-5.5rem] ml-[8.7rem] "
          alt="arrow"
        />
        {data?.illustration1 ? (
          <Img
            className="image-item w-[221px] h-[204px] ml-[76px] shadow-heroIllustration rounded-[16px] mt-[58px] z-10"
            fluid={data?.illustration1?.childImageSharp?.fluid}
            alt="image"
          />
        ) : null}

        {data?.illustration2 ? (
          <Img
            className="image-item w-[223px] h-[216px] ml-[76px] !absolute top-[206px] right-0 shadow-heroIllustration rounded-[16px] z-10"
            fluid={data?.illustration2?.childImageSharp?.fluid}
            alt="image"
          />
        ) : null}

        <div className="w-[16.813rem] h-[16.813rem] opacity-[0.23999999463558197] rounded-[16.813rem] bg-circleBg blur-[9.375rem] absolute top-[193px] right-[12px] mt-[1.875rem]"></div>

        {data?.illustration3 ? (
          <Img
            className="image-item w-[128px] h-[166px] ml-[76px] shadow-heroIllustration rounded-[16px] mt-[153px] left-[15px]"
            fluid={data?.illustration3?.childImageSharp?.fluid}
            alt="image"
          />
        ) : null}

        <img
          src={vector}
          alt="vector"
          className="absolute top-[347px] right-0"
        />
        <p className="w-[530px] pt-[152px]">
          We develop high-quality, authoritative technical content to assist
          your users in getting the most out of your product, decrease pain
          points, and ramp up product adoption.
        </p>
      </div>
    </section>
  );
}
