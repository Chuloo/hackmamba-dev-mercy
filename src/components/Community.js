import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import base from "../images/base.svg";
import base3 from "../images/base3.svg";
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
    <section className=" bg-productSectionBg sm:pt-[102px] pt-[136px] sm:pb-[18px] pb-[243px] relative overflow-hidden">
      <div className=" max-w-[1170px] mx-[auto] ">
        <div className="rounded-[480.87px] w-[353px] h-[481px] opacity-[0.2800000011920929] bg-greenGradient blur-[167px] absolute top-[-238px] left-[766px] hidden sm:block"></div>
        <div className=" max-w-[1084px] mx-[auto] ">
          <img src={base} alt="img" className="hidden lg:block" />
          <img src={base3} alt="img" className="block lg:hidden w-full" />
        </div>
        <img
          src={logo2}
          alt="img"
          className=" absolute top-0 left-[50%] translate-x-[-50%] mt-[120px] sm:w-[unset] w-[72px]"
        />

        <div className="absolute sm:top-[266px] top-[153px] flex flex-col sm:w-[1084px] w-[100%]">
          <Img
            fluid={data.item1.childImageSharp.fluid}
            className="sm:w-[130px] w-[60px] sm:ml-[5px]"
          />

          <Img
            fluid={data.item2.childImageSharp.fluid}
            className="sm:ml-[127px] sm:mt-[17px] mt-[90px] ml-[-3px] sm:w-[130px] w-[60px]"
          />

          <Img
            fluid={data.item3.childImageSharp.fluid}
            className="sm:w-[130px] w-[50px] sm:mt-[10px] mt-[52px] sm:ml-[90px]"
          />
        </div>

        <div className="absolute sm:top-[328px] top-[220px] flex flex-col sm:w-[1084px] w-[100%] items-end">
          <Img
            fluid={data.item4.childImageSharp.fluid}
            className="sm:w-[130px] w-[60px] sm:mr-[-16px] mr-[-9px]"
          />

          <Img
            fluid={data.item5.childImageSharp.fluid}
            className="sm:w-[130px] w-[60px] sm:mr-[-98px] sm:mt-[-13px] mt-[60px] mr-[-6px]"
          />

          <Img
            fluid={data.item6.childImageSharp.fluid}
            className="sm:w-[130px] w-[50px] sm:mt-[-40px] sm:mr-[80px] mt-[62px]"
          />
        </div>

        <div className="w-[132px] h-[180px] bg-white opacity-[0.30000001192092896] absolute top-[410px] right-[-23px] blur-[132px]"></div>

        <div className="text-white  mx-[auto] absolute sm:top-[50%] sm:translate-x-[-50%] sm:left-[50%] sm:translate-y-[-50%] top-0 sm:mt-[65px] mt-[224px] w-full">
          <h2 className="mx-[auto] sm:max-w-[629px] max-w-[286px] text-center sm:mb-[16px] mb-[32px] sm:leading-[unset] leading-[40px]">
            Join Our Technical Writing Community
          </h2>
          <p className="text-center sm:mb-[88px] mb-[48px] text-white sm:max-w-[602px] m-[auto] max-w-[273px] leading-[32px] sm:leading-[unset]">
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
          <div className="w-[164px] h-[223px] bg-greenGradient2  blur-[132px] absolute bottom-[-260px] opacity-[0.2199999988079071] hidden sm:block"></div>
        </div>
      </div>
    </section>
  );
}
