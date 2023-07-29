import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React, { useEffect } from "react";
import base from "../images/base.svg";
import base3 from "../images/base3.svg";
import logo2 from "../images/logo2.svg";
import Btn from "./Btn";
import anime from "animejs/lib/anime.es.js";

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

  useEffect(() => {
    const path = anime.path(".path1");
    const path2 = anime.path(".path3");
    const path3 = anime.path(".path2");
    const path4 = anime.path(".path2");
    const path5 = anime.path(".path1");
    const path6 = anime.path(".path3", 100);

    anime({
      targets: ".item1",
      translateX: path("x"),
      translateY: path("y"),
      // rotate: path("angle"),
      easing: "linear",
      duration: 12000,
      loop: true,
    });

    anime({
      targets: ".item2",
      translateX: path2("x"),
      translateY: path2("y"),
      // rotate: path("angle"),
      easing: "linear",
      duration: 15000,
      loop: true,
      direction: "reverse",
    });
    anime({
      targets: ".item3",
      translateX: path3("x"),
      translateY: path3("y"),
      // rotate: path("angle"),
      easing: "linear",
      duration: 17000,
      loop: true,
    });
    anime({
      targets: ".item4",
      translateX: path4("x"),
      translateY: path4("y"),
      // rotate: path("angle"),
      easing: "linear",
      duration: 20000,
      loop: true,
      direction: "reverse",
      
    });
    anime({
      targets: ".item5",
      translateX: path5("x"),
      translateY: path5("y"),
      // rotate: path("angle"),
      easing: "linear",
      duration: 15000,
      loop: true,
      
    });
    anime({
      targets: ".item6",
      translateX: path6("x"),
      translateY: path6("y"),
      // rotate: path("angle"),
      easing: "linear",
      duration: 17000,
      loop: true,
      direction: "reverse",
    });
  }, []);
  return (
    <section className=" bg-productSectionBg sm:pt-[102px] pt-[136px] sm:pb-[18px] pb-[243px] relative overflow-hidden">
      <div className=" max-w-[1170px] mx-[auto]">
        <div className="rounded-[480.87px] w-[353px] h-[481px] opacity-[0.2800000011920929] bg-greenGradient blur-[167px] absolute top-[-238px] left-[766px] hidden sm:block"></div>
        <div className=" max-w-[1084px] mx-[auto] relative ">
          {/* <img src={base} alt="img" className="hidden lg:block" /> */}
          <svg
            width="1113"
            height="749"
            viewBox="0 0 1113 749"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="base-bg"
          >
            <g clip-path="url(#clip0_3248_250)">
              <path
                opacity="0.1"
                d="M556.5 748C863.294 748 1112 580.778 1112 374.5C1112 168.222 863.294 1 556.5 1C249.706 1 1 168.222 1 374.5C1 580.778 249.706 748 556.5 748Z"
                stroke="url(#paint0_linear_3248_250)"
                stroke-width="1.53846"
                className="path1"
              />
              <path
                opacity="0.1"
                d="M556 711C818.335 711 1031 560.568 1031 375C1031 189.432 818.335 39 556 39C293.665 39 81 189.432 81 375C81 560.568 293.665 711 556 711Z"
                stroke="url(#paint1_linear_3248_250)"
                stroke-width="1.53846"
                className="path2"
              />
              <path
                opacity="0.1"
                d="M556.5 675C782.108 675 965 540.685 965 375C965 209.315 782.108 75 556.5 75C330.892 75 148 209.315 148 375C148 540.685 330.892 675 556.5 675Z"
                stroke="url(#paint2_linear_3248_250)"
                stroke-width="1.53846"
                className="path3"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_3248_250"
                x1="1112"
                y1="375.283"
                x2="1"
                y2="375.283"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F8FBFF" />
                <stop offset="0.469679" stop-color="#5E3F99" stop-opacity="0" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_3248_250"
                x1="1031"
                y1="375.705"
                x2="81"
                y2="375.704"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F8FBFF" />
                <stop offset="0.469679" stop-color="#5E3F99" stop-opacity="0" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_3248_250"
                x1="965"
                y1="375.629"
                x2="148"
                y2="375.629"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F8FBFF" />
                <stop offset="0.469679" stop-color="#5E3F99" stop-opacity="0" />
                <stop offset="1" stop-color="white" />
              </linearGradient>
              <clipPath id="clip0_3248_250">
                <rect width="1113" height="749" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <Img
            fluid={data.item1.childImageSharp.fluid}
            className="sm:w-[130px] w-[60px] !absolute item1 top-[-55px] left-[-65px] origin-center rotate-[45]"
          />

          <Img
            fluid={data.item2.childImageSharp.fluid}
            className="sm:w-[130px] w-[60px] item2 !absolute top-[-56px] left-[-56px]"
          />

          <Img
            fluid={data.item3.childImageSharp.fluid}
            className="sm:w-[130px] w-[50px] !absolute top-[-50px] left-[-56px] item3"
          />

          <Img
            fluid={data.item4.childImageSharp.fluid}
            className="sm:w-[130px] w-[60px] item4 !absolute top-[-50px] left-[-56px]"
          />

          <Img
            fluid={data.item5.childImageSharp.fluid}
            className="sm:w-[130px] w-[60px] item5 !absolute top-[-60px] left-[-56px]"
          />

          <Img
            fluid={data.item6.childImageSharp.fluid}
            className="sm:w-[130px] w-[50px] item6 !absolute top-[-50px] left-[-56px]"
          />

          <img src={base3} alt="img" className="block lg:hidden w-full" />
        </div>
        <img
          src={logo2}
          alt="img"
          className=" absolute top-0 left-[50%] translate-x-[-50%] mt-[120px] sm:w-[unset] w-[72px]"
        />

        {/* <div className="flex flex-col sm:w-[1084px] w-[100%]">
                 </div> */}

        {/* <div className="absolute sm:top-[328px] top-[220px] flex flex-col sm:w-[1084px] w-[100%] items-end">
          
        </div> */}

        <div className="w-[132px] h-[180px] bg-white opacity-[0.30000001192092896] absolute top-[410px] right-[-23px] blur-[132px]"></div>

        <div className="text-white  mx-[auto] absolute sm:top-[50%] sm:translate-x-[-50%] sm:left-[50%] sm:translate-y-[-50%] top-0 sm:mt-[65px] mt-[224px] w-full">
          <h2 className="mx-[auto] sm:max-w-[629px] max-w-[286px] text-center sm:mb-[16px] mb-[32px] sm:leading-[56px] leading-[40px]">
            Join Our Technical Writing Community
          </h2>
          <p className="text-center sm:mb-[88px] mb-[48px] text-white sm:max-w-[602px] m-[auto] max-w-[273px] leading-[32px] sm:leading-[32px]">
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
