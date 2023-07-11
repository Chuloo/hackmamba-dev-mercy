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
          fluid {
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
      title: "Lean Team",
      description:
        "Maintain an efficient technical writing team. Focus on the most impactful product outcomes & delegate the rest.",
    },
    {
      icon: icon2,
      image: data.outcomeFolder.childImageSharp.fluid,
      title: "Faster Delivery",
      description:
        "Ship quality documentation, blog posts, and articles at three times the speed with fewer people to manage.",
    },
    {
      icon: icon3,
      image: data.outcomeFolder.childImageSharp.fluid,
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
        <div className="folder-img w-[354px]   rounded-[24px]">
          {content?.image ? <Img fluid={content.image} /> : null}
        </div>
        {/* <img
          src={untitled}
          alt="dff"
          className="folder-img w-[354px] bg-[linear-gradient(0deg,_#ffffff1f_0%,_#ffffff00_100%)] blur[70px] rounded-[24px]"
        /> */}
        <div className="absolute top-0 left-[24px] mt-[24px]">
          <div>
            <img
              src={content.icon}
              alt="icon"
              className="w-[60px] h-[60px] ml-auto"
            />
          </div>
          <div>
            <h2 className="text-[24px] leading-[32px] mb-[8px] mt-[19px]">
              {content.title}
            </h2>

            <p className="text-base leading-6 max-w-[306px] text-outcomePText">
              {content.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="mx-[80px] bg-productSectionBg rounded-[40px] py-[120px] px-[55px] my-[80px] relative overflow-hidden">
      <div className="green-gradient top-[-128px] left-[-9px] w-[350px] h-[350px] opacity-[0.2800000011920929] bg-greenGradient blur-[167px] absolute "></div>
      <CurvedLine headingText="Focus On High-Value Outcomes" />
      <div className="flex gap-[54px] ">
        <FolderRow rowContent={outcomeRow} />
      </div>
    </section>
  );
}
