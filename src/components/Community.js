import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import base from "../images/base.svg";
import logo2 from "../images/logo2.svg";
import Btn from "./Btn";

export default function Community() {
  const data = useStaticQuery(graphql`
    query ItemQuery {
      item1: file(relativePath: { eq: "Item1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      item2: file(relativePath: { eq: "Item2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      item3: file(relativePath: { eq: "Item3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      item4: file(relativePath: { eq: "Item4.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      item5: file(relativePath: { eq: "Item5.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      item6: file(relativePath: { eq: "Item6.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section className=" bg-productSectionBg pt-[102px] pb-[18px] relative overflow-hidden">
      <div className=" max-w-[1170px] mx-[auto] ">
        <div className="rounded-[480.87px] w-[353px] h-[481px] opacity-[0.2800000011920929] bg-greenGradient blur-[167px] absolute top-[-238px] left-[766px]"></div>
        <div className=" max-w-[1084px] mx-[auto] ">
          <img src={base} alt="img" />
        </div>
        <img
          src={logo2}
          alt="img"
          className=" absolute top-0 left-[50%] translate-x-[-50%] mt-[120px]"
        />

        <div className="absolute top-[266px] flex flex-col w-[1084px]">
          <Img
            fluid={data.item1.childImageSharp.fluid}
            className="w-[130px] ml-[5px]"
          />

          <Img
            fluid={data.item2.childImageSharp.fluid}
            className="ml-[127px] mt-[17px] w-[130px]"
          />

          <Img
            fluid={data.item3.childImageSharp.fluid}
            className="w-[130px] mt-[10px] ml-[90px]"
          />
        </div>

        <div className="absolute top-[328px] flex flex-col w-[1084px]  items-end">
          <Img
            fluid={data.item4.childImageSharp.fluid}
            className="w-[130px] mr-[-16px] "
          />

          <Img
            fluid={data.item5.childImageSharp.fluid}
            className="w-[130px] mr-[-98px] mt-[-13px]"
          />

          <Img
            fluid={data.item6.childImageSharp.fluid}
            className="w-[130px] mt-[-40px] mr-[80px]"
          />
        </div>

        <div className="w-[132px] h-[180px] bg-white opacity-[0.30000001192092896] absolute top-[410px] right-[-23px] blur-[132px]"></div>

        <div className="text-white max-w-[602px] mx-[auto] absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] mt-[65px]">
          <h2 className="mx-[auto] max-w-[629px] text-center mb-[16px]">
            Join Our Technical Writing Community
          </h2>
          <p className="text-center mb-[88px] text-white">
            Do you have an interest in technical writing? Join our community of
            aspiring and veteran technical writers to network, get mentorship,
            and advance your technical writing career.
          </p>
          <div className="flex justify-center">
            <Btn
              text="Join Our Community"
              backgroundColor="bg-communityBg"
              textColor="text-primary"
            />
          </div>
          <div className="w-[164px] h-[223px] bg-greenGradient2  blur-[132px] absolute bottom-[-260px] opacity-[0.2199999988079071]"></div>
        </div>
      </div>
    </section>
  );
}
