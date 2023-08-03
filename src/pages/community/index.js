import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import texture from "../../images/texture.png";
import CurvedLine from "../../components/CurvedLine";
import Tab from "../../components/Tab";
import CommunityFolder from "../../components/CommunityFolder";
import Info from "../../components/Info";
import session from "../../images/session.svg";
import contactus2 from "../../images/contactus2.svg";
import base2 from "../../images/base4.svg";
import Btn from "../../components/Btn";
import logo from "../../images/logo2.svg";
import CommunityGroup from "../../components/CommunityGroup";
import Img from "gatsby-image";
import Typewriter from "../../components/Typewriter";
import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";

export default function Community({ data }) {
  const mainPost = data?.allMarkdownRemark?.nodes;

  useEffect(() => {
    const path = anime.path(".path1");
    const path2 = anime.path(".path2");
    const path3 = anime.path(".path3");
    const path4 = anime.path(".path2");
    const path5 = anime.path(".path1");

    anime({
      targets: ".item1",
      translateX: path("x"),
      translateY: path("y"),
      easing: "linear",
      duration: 9000,
      loop: true,
    });

    anime({
      targets: ".item2",
      translateX: path2("x"),
      translateY: path2("y"),
      // rotate: path("angle"),
      easing: "linear",
      duration: 10000,
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
  }, []);

  return (
    <Layout>
      <section className="relative">
        <div className="flex sm:max-w-[1170px] max-w-[358px] mx-[auto] sm:flex-row flex-col">
          <div className="sm:pt-[166px] pt-[108px] sm:pb-[216px] pb-[40px]">
            <h2 className="text-primary max-w-[580px] text-[64px] sm:leading-[80px] leading-[40px]">
              Join Our Technical Writing{" "}
              <span className="span-style px-[10px] sm:px-[15px] relative sm:block w-fit">
                <Typewriter value="Community" />
              </span>
            </h2>
            <p className="max-w-[587px] mt-[16px] text-[18px] leading-[32px]">
              Do you have an interest in technical writing? Join our community
              of aspiring and veteran technical writers to network, get
              mentorship, and advance your technical writing career.
            </p>

            <div className="mt-[32px]">
              <Btn
                text="Join Now"
                backgroundColor="bg-secondary"
                textColor="text-white"
                slimBtn
              />
            </div>
          </div>
          <div className="sm:w-[150px] sm:ml-[145px] ml-[24px]">
            <img
              src={logo}
              alt="logo"
              className="sm:w-[100%] sm:mt-[290px] sm:static absolute  mt-[314px] w-[118px]"
            />
          </div>
          <div className="relative flex-1 w-full">
            <div className="w-[350px]  h-[305px] absolute left-[-318px] top-[-91px] transparent-gradient sm:block hidden"></div>
            <div className="w-[350px]  h-[305px] absolute left-[-318px] bottom-[0px] transparent-gradient sm:block hidden"></div>
            <svg
              width="518"
              height="749"
              viewBox="0 0 518 749"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="!absolute sm:top-[-10px] sm:w-[516px] sm:right-[0] z-[-10] sm:block hidden  w-[388px]"
            >
              <path
                opacity="0.1"
                d="M-0.000382049 73.5269C204.081 73.5269 369.521 207.947 369.521 373.763C369.521 539.58 204.081 674 -0.000382049 674"
                stroke="url(#paint0_linear_800_4079)"
                stroke-width="1.53846"
                className="path1"
              />
              <path
                opacity="0.1"
                d="M22.1011 38.3501C250.594 38.3501 435.824 188.85 435.824 374.5C435.824 560.151 250.594 710.65 22.1011 710.65"
                stroke="url(#paint1_linear_800_4079)"
                stroke-width="1.53846"
                className="path2"
              />
              <path
                opacity="0.1"
                d="M56.5772 1.00003C310.458 1.00003 516.27 168.222 516.27 374.5C516.27 580.778 310.458 748 56.5772 748"
                stroke="url(#paint2_linear_800_4079)"
                stroke-width="1.53846"
                className="path3"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_800_4079"
                  x1="369.521"
                  y1="674"
                  x2="-0.000396729"
                  y2="674"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4F00A3" />
                  <stop offset="1" stopColor="white" stopOpacity="0.41" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_800_4079"
                  x1="435.824"
                  y1="710.65"
                  x2="22.1011"
                  y2="710.65"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4F00A3" />
                  <stop offset="1" stopColor="white" stopOpacity="0.41" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_800_4079"
                  x1="516.27"
                  y1="748"
                  x2="56.5772"
                  y2="748"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4F00A3" />
                  <stop offset="1" stopColor="white" stopOpacity="0.41" />
                </linearGradient>
              </defs>
            </svg>
            <div className="sm:static absolute sm:block flex flex-col sm:w-[unset] w-[338px] top-0 right-0 mt-[565px] sm:mt-0">
              <Img
                fluid={data?.item1?.childImageSharp?.fluid}
                className="sm:w-[100px] w-[97px] sm:top-[-40px]  sm:left-[-275px] mt-[-525px] !absolute item1 sm:mt-0"
              />

              <Img
                fluid={data?.item2?.childImageSharp?.fluid}
                className="sm:w-[120px] w-[117px] sm:left-[-300px] sm:top-[-60px] item2 !absolute mt-[-380px] ml-[180px] sm:mt-0 sm:ml-0"
              />

              <Img
                fluid={data?.item5?.childImageSharp?.fluid}
                className="sm:w-[130px] w-[113px] sm:left-[-305px] sm:top-[-70px] item3 !absolute mt-[-225px] ml-[235px] sm:mt-0 sm:ml-0"
              />

              <Img
                fluid={data?.item3?.childImageSharp?.fluid}
                className="w-[90px] sm:top-[-40px] sm:left-[-273px] item4 !absolute mt-[-30px] ml-[168px] sm:ml-0 sm:mt-0"
              />

              <Img
                fluid={data?.item4?.childImageSharp?.fluid}
                className="sm:w-[130px] w-[113px] sm:top-[-60px] sm:left-[-305px] item5 !absolute top-[40px]"
              />
            </div>
          </div>
          <div className=" w-[338px]  z-[-10] sm:hidden block">
            <img src={base2} alt="img" />
          </div>
          {/* 
          <div className="absolute flex flex-col sm:w-[516px] w-[338px] top-0 right-0 mt-[565px] sm:mt-0">
            <Img
              fluid={data?.item1?.childImageSharp?.fluid}
              className="sm:w-[100px] w-[97px] sm:mt-[-40px]  sm:ml-[-240px] mt-[-35px] "
            />
            <Img
              fluid={data?.item2?.childImageSharp?.fluid}
              className="sm:w-[120px] w-[117px] sm:ml-[0px] mt-[10px] ml-[153px] item2"
            />
            <Img
              fluid={data?.item5?.childImageSharp?.fluid}
              className="sm:w-[130px] w-[113px] sm:ml-[268px] sm:mt-[40px] mt-[60px] ml-[223px] item3"
            />

            <Img
              fluid={data?.item3?.childImageSharp?.fluid}
              className="w-[90px] sm:ml-[175px] sm:mt-[5px] mt-[50px] ml-[168px] item4"
            />

            <Img
              fluid={data?.item4?.childImageSharp?.fluid}
              className="sm:w-[130px] w-[113px] sm:mt-[2px] sm:ml-[-45px] mt-[40px] item5"
            />
          </div> */}
        </div>

        <div
          className="bg-productSectionBg bg-cover bg-no-repeat sm:py-[120px] py-[80px] relative overflow-hidden sm:overflow-visible background-none"
          style={{ backgroundImage: `url(${texture})` }}
        >
          <div className="sm:max-w-[1170px] max-w-[358px] mx-[auto]">
            <div className="w-[866px]">
              <div className="pl-[4px]">
                <CurvedLine
                  headingText="Why you should join our community"
                  headingWidth="sm:max-w-[536px]"
                />
              </div>
            </div>
            <div className="mb-[80px] ">
              <CommunityGroup />
            </div>
            <CommunityGroup flexReverse="sm:flex-row-reverse flex-col" />
          </div>
        </div>
        <div />

        <div className="sm:mt-[160px] mt-[120px] sm:max-w-[1170px] max-w-[358px] mx-[auto]">
          <Tab text="Community Events" />

          <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-[32px] gap-[64px] sm:mt-[57px] mt-[40px] mb-[160px]">
            {mainPost.map((post) => (
              <CommunityFolder post={post} />
            ))}
          </div>
        </div>

        <div className="bg-productSectionBg relative">
          <div className="flex gap-[48px] sm:max-w-[1170px]  mx-[auto] py-[80px] sm:flex-row flex-col">
            <Info
              title="Join Our Technical Writing Community"
              desc="Do you have an interest in technical writing? "
              Icon={
                <img src={session} alt="icon" className="w-[56px] h-[56px]" />
              }
            />
            <Info
              title="Have any feedback or questions?"
              desc="We’d love to hear from you. "
              Icon={
                <img
                  src={contactus2}
                  alt="icon"
                  className="w-[56px] h-[56px]"
                />
              }
              textBtn="Contact Us"
            />
          </div>
          <div></div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query CommunityBlogQuery {
    allMarkdownRemark(filter: { frontmatter: { community: { eq: true } } }) {
      nodes {
        frontmatter {
          title
          desc
          thumb {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    item1: file(relativePath: { eq: "item7.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    item2: file(relativePath: { eq: "item8.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    item3: file(relativePath: { eq: "item9.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    item4: file(relativePath: { eq: "item10.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    item5: file(relativePath: { eq: "item11.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
