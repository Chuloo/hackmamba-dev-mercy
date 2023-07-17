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
          fluid(quality:100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      illustration2: file(relativePath: { eq: "Illustrations02.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      illustration3: file(relativePath: { eq: "Illustrations03.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section className="hero-section sm:flex sm:max-w-[1170px] max-w-[358px] mx-auto my-0 relative">
      <div>
        <div className="relative flex-1 sm:min-w-[676px] h-fit">
          <h1 className="font-headerFont sm:max-w-[42.25rem] sm:leading-[5rem] sm:mt-[7.5rem] z-10 sm:text-[4rem] text-[32px] leading-[40px] max-w-[358px] mt-[108px]">
            Create Superior{" "}
            <span className="span-style px-[0.906rem]">Technical Content </span>
            for Your World Changing{" "}
            <span className="span-style px-4">Products</span>{" "}
          </h1>
          <img
            src={connection}
            alt="vector"
            className="absolute right-0 bottom-0 sm:translate-y-[-1.438rem] sm:w-[unset] sm:translate-x-[9px] w-[43px] translate-y-[-10px]"
          />
        </div>
        <Input />

        <div className="sm:mt-[180px] mt-[56px]">
          <p>We work with organisations like</p>
          <div className="organisations flex sm:gap-[45px] gap-[40px] mt-[27px] overflow-hidden sm:overflow-auto">
            <img src={saasToday} alt="logo1" className="sm:w-[unset] w-[73px]" />
            <img src={askimat} alt="logo2" className="sm:w-[unset] w-[100px]" />
            <img src={martino} alt="logo3" className="sm:w-[unset] w-[100px]" />
            <img src={rocker} alt="logo4" className="sm:w-[unset] w-[100px]" />
          </div>
        </div>
      </div>

      <div className="relative flex-1">
        <img
          src={longArrow}
          about="alt='circle"
          className="absolute sm:top-[-5.5rem] top:[44px] sm:ml-[8.7rem] ml-[43px] sm:h-[unset] h-[670px]"
          alt="arrow"
        />
        {data?.illustration1 ? (
          <Img
            className="image-item w-[221px] h-[204px] sm:ml-[76px] ml-0 shadow-heroIllustration rounded-[16px] mt-[58px] z-10"
            fluid={data?.illustration1?.childImageSharp?.fluid}
            alt="image"
          />
        ) : null}

        {data?.illustration2 ? (
          <Img
            className="image-item w-[223px] h-[216px] sm:ml-[76px] !absolute sm:top-[206px] sm:right-0 shadow-heroIllustration rounded-[16px] z-10 right-0 top-[180px]"
            fluid={data?.illustration2?.childImageSharp?.fluid}
            alt="image"
          />
        ) : null}

        <div className="w-[16.813rem] h-[16.813rem] opacity-[0.23999999463558197] rounded-[16.813rem] bg-circleBg blur-[9.375rem] absolute top-[193px] right-[12px] mt-[1.875rem]"></div>

        {data?.illustration3 ? (
          <Img
            className="image-item w-[128px] h-[166px] sm:ml-[76px] ml-0 shadow-heroIllustration rounded-[16px] sm:mt-[153px] mt-[200px] sm:left-[15px] left-0"
            fluid={data?.illustration3?.childImageSharp?.fluid}
            alt="image"
          />
        ) : null}

        <img
          src={vector}
          alt="vector"
          className="absolute sm:top-[347px] right-0 sm:w-[unset] w-[278px] top-[353px]"
        />
        <p className="sm:w-[530px] sm:pt-[152px] pt-[124px] text-[18px] w-[358px]">
          We develop high-quality, authoritative technical content to assist
          your users in getting the most out of your product, decrease pain
          points, and ramp up product adoption.
        </p>
      </div>
    </section>
  );
}
