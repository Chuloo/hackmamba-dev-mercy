import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import purpleIcon from "../images/purpleIcon.svg";
import greyIcon from "../images/greyIcon.svg";
import greenIcon from "../images/greenIcon.svg";
import orangeIcon from "../images/orangeIcon.svg";

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
    }
  `);

  const folderRow1 = [
    {
      image: data.purple.childImageSharp.fluid,
      title: "Accelerate Product Delivery",
      description:
        "Why slow down? Ship your product features accompanied by excellent documentation, tutorials and use-case blog posts.",
      icon: purpleIcon,
    },
    {
      image: data.grey.childImageSharp.fluid,
      title: "Drive Purchase Decision",
      description:
        "We generate compelling and accurate communications that guide new users through understanding your product and helping them.",
      wide: true,
      icon: greyIcon,
    },
  ];
  const folderRow2 = [
    {
      image: data.green.childImageSharp.fluid,
      title: "Reduce Support Costs",
      description:
        "Excellent content gives your product a competitive advantage while lowering total support costs.",
      wide: true,
      icon: greenIcon,
    },
    {
      image: data.orange.childImageSharp.fluid,
      title: "Increase Customer Retention",
      description:
        "Customers who find your product easy to use are more inclined to repurchase or upgrade their purchase.",
      icon: orangeIcon,
    },
  ];

  return (
    <div>
      {/* <div className="flex odd:flex-row-reverse">
        {folderRow1.map((c) => (
          <Folder content={c} />
        ))}
      </div>

      <div className="flex odd:flex-row-reverse">
        {folderRow2.map((c) => (
          <Folder content={c} />
        ))}
      </div> */}
      <div className="mt-[80px]">
        <FolderRow rowContent={folderRow1} />
      </div>
      <div className="mt-[48px]">
        <FolderRow rowContent={folderRow2} />
      </div>
    </div>
  );
}

function FolderRow({ rowContent }) {
  return (
    <div className="flex gap-[48px]">
      {rowContent.map((eachObject) => (
        <Folder content={eachObject} />
      ))}
    </div>
  );
}

function Folder({ content }) {
  return (
    <div
      className={`flex-1 bg-cover bg-no-repeat relative ${
        content.wide ? "max-w-[634px]" : "max-w-[488px]"
      }`}
    >
      {content?.image ? (
        <Img className={`shadow-folderShadow `} fluid={content?.image} />
      ) : null}
      <div className="absolute top-0 left-0">
        <div>
          <img
            src={content?.icon}
            alt="icon"
            className={`ml-[auto] mt-[32px]  ${
              content.wide ? "translate-x-[60px]" : "translate-x-[10px]"
            }`}
          />
        </div>
        <div className="mt-[18px] ml-[40px]">
          <h2 className="text-[32px] leading-10 max-w-[345px]">
            {content.title}
          </h2>

          <p
            className={`ext-base text-white leading-6 ${
              content.wide ? "max-w-[502px]" : "max-w-[408px]"
            }  mt-[16px]`}
          >
            {content.description}
          </p>
        </div>
      </div>
    </div>
  );
}

