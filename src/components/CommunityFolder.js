import { Link } from "gatsby";
import React from "react";
import date from "../images/date.svg";
import location from "../images/location.svg";
import Img from "gatsby-image";

export default function CommunityFolder({ post }) {
  return (
    <Link to="#">
      <div className="max-w-[369px] relative hover:translate-y-[-12px] ease-in duration-300">
        <Img fluid={post.frontmatter.thumb.childImageSharp.fluid} />

        <h2 className="text-[24px] tracking-[0.2px] text-primary my-[16px] leading-[32px]">
          {post.frontmatter.title}
        </h2>

        <div className="flex gap-[16px] items-center mb-[8px]">
          <img src={date} alt="img" />
          <p className="text-communityFolderText text-sm leading-[18px] font-normal">
            Date and time here
          </p>
        </div>

        <div className="flex gap-[16px] items-center mb-[8px]">
          <img src={location} alt="img" />
          <p className="text-communityFolderText text-sm leading-[18px] font-normal">
            Location here
          </p>
          <Link
            to="#"
            className="text-[12px] leading-[18px] text-communityFolderText2"
          >
            View Map
          </Link>
        </div>

        <p className="text-communityFolderText leading-[20px] text-sm mt-[16px] font-normal">
          {post.frontmatter.desc}
        </p>

        <div className="flex gap-[16px] mt-[24px]">
          <p className="folder-tab-style">Find out more</p>
          <p className="folder-tab-style">Addto calendar</p>
        </div>
      </div>
    </Link>
  );
}
