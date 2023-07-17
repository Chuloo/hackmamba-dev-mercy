import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import CurvedLine from "./CurvedLine";
import Img from "gatsby-image";
import icon1 from "../images/icon1.svg";
import icon2 from "../images/icon2.svg";
import icon3 from "../images/icon3.svg";
// import untitled from "../images/untitled.svg";

export default function Outcome() {
  const data = useStaticQuery(graphql`
    query OutcomeFolderQuery {
      outcomeFolder: file(relativePath: { eq: "outcome-folder.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileFolder: file(relativePath: { eq: "vector4.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const outcomeRow = [
    {
      icon: icon1,
      image: data.outcomeFolder.childImageSharp.fluid,
      mobileImage: data.mobileFolder.childImageSharp.fluid,
      title: "Lean Team",
      description:
        "Maintain an efficient technical writing team. Focus on the most impactful product outcomes & delegate the rest.",
    },
    {
      icon: icon2,
      image: data.outcomeFolder.childImageSharp.fluid,
      mobileImage: data.mobileFolder.childImageSharp.fluid,
      title: "Faster Delivery",
      description:
        "Ship quality documentation, blog posts, and articles at three times the speed with fewer people to manage.",
    },
    {
      icon: icon3,
      image: data.outcomeFolder.childImageSharp.fluid,
      mobileImage: data.mobileFolder.childImageSharp.fluid,
      title: "Lower Cost",
      description:
        "Receive the support of content strategists, editors, and SEO specialists at 40% less cost.",
    },
  ];

  const FolderRow = ({ rowContent }) => {
    return rowContent.map((eacObject) => <Folder content={eacObject} />);
  };

  function Folder({ content }) {
    return (
      <div className="relative">
        <div className="folder-img sm:w-[354px] w-full rounded-[24px]">
          <>
            {content?.image ? (
              <Img fluid={content.image} className="sm:block hidden" />
            ) : null}
            {content?.image ? (
              <Img fluid={content.mobileImage} className="block sm:hidden" />
            ) : null}
          </>
        </div>

        <div className="absolute top-0 sm:left-[24px] left-0 mt-[24px] w-full">
          <div>
            <img
              src={content.icon}
              alt="icon"
              className="w-[60px] h-[60px] ml-auto sm:translate-x-[-47px] translate-x-[-24px]"
            />
          </div>
          <div className="sm:max-w-0 max-w-[277px] m-auto">
            <h2 className="!text-[24px] leading-[32px] mb-[8px] sm:mt-[19px] mt-[12px]">
              {content.title}
            </h2>

            <p className="text-base leading-6 sm:max-w-[306px]  text-outcomePText">
              {content.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="sm:mx-[80px] mx-[16px] bg-productSectionBg rounded-[40px] py-[120px] sm:px-[55px] px-[24px] sm:my-[80px] relative overflow-hidden">
      <div className="green-gradient top-[-128px] left-[-9px] w-[350px] h-[350px] opacity-[0.2800000011920929] bg-greenGradient blur-[167px] absolute "></div>
      <CurvedLine headingText="Focus On High-Value Outcomes" />

      <div className="flex sm:gap-[54px] gap-[72px] sm:flex-row flex-col sm:mt-0 mt-[52px]">
        <FolderRow rowContent={outcomeRow} />
      </div>
    </section>
  );
}
