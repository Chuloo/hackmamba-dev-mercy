import { graphql, useStaticQuery } from "gatsby";
import React, { useRef, useEffect, useState } from "react";
import Img from "gatsby-image";
import purpleIcon from "../images/purpleIcon.svg";
import greyIcon from "../images/greyIcon.svg";
import greenIcon from "../images/greenIcon.svg";
import orangeIcon from "../images/orangeIcon.svg";
import useIO from "../hooks/useIO";

export default function Cards() {
  const data = useStaticQuery(graphql`
    query FolderQuery {
      green: file(relativePath: { eq: "green.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      grey: file(relativePath: { eq: "grey.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      purple: file(relativePath: { eq: "purple.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      orange: file(relativePath: { eq: "orange.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sm1: file(relativePath: { eq: "sm1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sm2: file(relativePath: { eq: "sm2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sm3: file(relativePath: { eq: "sm3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sm4: file(relativePath: { eq: "sm4.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const folderRow1 = [
    {
      image: data.purple.childImageSharp.fluid,
      mobileImg: data.sm1.childImageSharp.fluid,
      title: "Accelerate Product Delivery",
      description:
        "Why slow down? Ship your product features accompanied by excellent documentation, tutorials and use-case blog posts.",
      icon: purpleIcon,
    },
    {
      image: data.grey.childImageSharp.fluid,
      mobileImg: data.sm2.childImageSharp.fluid,
      title: "Drive Purchase Decision",
      description:
        "We generate compelling and accurate communications that guide through understanding your product and helping them.",
      wide: true,
      icon: greyIcon,
    },
  ];
  const folderRow2 = [
    {
      image: data.green.childImageSharp.fluid,
      mobileImg: data.sm3.childImageSharp.fluid,
      title: "Reduce Support Costs",
      description:
        "Excellent content gives your product a competitive advantage while lowering total support costs .",
      wide: true,
      icon: greenIcon,
    },
    {
      image: data.orange.childImageSharp.fluid,
      mobileImg: data.sm4.childImageSharp.fluid,
      title: "Increase Customer Retention",
      description:
        "Customers who find your product easy to use are more inclined to repurchase or upgrade their purchase.",
      icon: orangeIcon,
    },
  ];

  const cardRef = useRef();

  const { isVisible } = useIO({ ref: cardRef });
  console.log("isVisible", isVisible);

  return (
    <div ref={cardRef} className={`cards ${isVisible ? "show" : " "}`}>
      <div className={`sm:mt-[80px] mt-[112px] row`}>
        <FolderRow rowContent={folderRow1} />
      </div>
      <div className="sm:mt-[48px] mt-[64px] row">
        <FolderRow rowContent={folderRow2} />
      </div>
    </div>
  );
}

function FolderRow({ rowContent }) {
  return (
    <div className="flex sm:gap-[48px] gap-[64px] flex-col sm:flex-row ">
      {rowContent.map((eachObject) => (
        <Folder content={eachObject} />
      ))}
    </div>
  );
}

function Folder({ content }) {
  return (
    <div
      className={`flex-1 bg-cover bg-no-repeat relative card ${
        content.wide ? "max-w-[634px]" : "max-w-[488px]"
      }`}
    >
      {content?.image ? (
        <>
          <Img
            className={`shadow-folderShadow hidden sm:block`}
            fluid={content?.image}
          />
        </>
      ) : null}

      {content?.mobileImg ? (
        <>
          <Img
            className={`shadow-cardShadow block sm:hidden`}
            fluid={content?.mobileImg}
          />
        </>
      ) : null}

      <div className="absolute top-0 left-0">
        <div>
          <img
            src={content?.icon}
            alt="icon"
            className={`ml-[auto] sm:mt-[32px] mt-[24px] mr-[24px] sm:mr-[32px]  ${
              content.wide ? "sm:translate-x-[60px]" : "sm:translate-x-[10px]"
            }`}
          />
        </div>
        <div className="sm:mt-[18px] sm:ml-[40px] ml-[0] px-[16px] mt-[12px]">
          <h2 className="lg:!text-[32px] !text-[24px] sm:leading-10  leading-[32px] sm:max-w-[345px] max-w-[266px]">
            {content.title}
          </h2>

          <p
            className={`text-base text-white leading-6 ${
              content.wide
                ? "sm:max-w-[502px] max-w-[277px]"
                : "sm:max-w-[408px] max-w-[277px]"
            }  mt-[16px]`}
          >
            {content.description}
          </p>
        </div>
      </div>
    </div>
  );
}
