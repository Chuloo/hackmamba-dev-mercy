import React from "react";
import avatar from "../images/avatar.png";
import arrow from "../images/arrow.svg";
import { Link } from "gatsby";
import Img from "gatsby-image";

export default function BlogFolder({ wide, post }) {
  return (
    <section>
      <Link to={`/blog/${post.frontmatter.slug}`} key={post.id}>
        {wide ? (
          <div className="relative">
            <div className="max-w-[698px]">
              <Img fluid={post.frontmatter.thumb.childImageSharp.fluid} />
        
              <div className="bg-folderBgColor py-[16px] pl-[24px] pr-[13px] border-t-2 backdrop-blur-[12px] border-borderFolderBgColor-500 absolute top-[283px] left-0 w-[698px]">
                <div className="flex justify-between">
                  <p className="folder-style z-10">{post.frontmatter.author}</p>
                  <p className="folder-style z-10">
                    {post.frontmatter.publish}
                  </p>
                </div>
              </div>
              <h2 className="text-[32px] leading-[42px] tracking-[1px] text-primary mt-[40px] mb-[16px]">
                {post.frontmatter.title}
              </h2>
              <p className="text-folderTextColor leading-[24px] text-base">
                {post.frontmatter.desc}
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="max-w-[342px] relative ">
              <Img
                fluid={post.frontmatter.thumb.childImageSharp.fluid}
                className="h-[293px]"
              />
              <img
                src={avatar}
                alt="img"
                className="w-[40px] absolute top-[21px] right-[24px]"
              />
              <div className="bg-folderBgColor py-[16px] px-[24px]  border-t-2 backdrop-blur-[12px] border-borderFolderBgColor-500 absolute top-[229px] left-0 w-[342px]">
                <div className="flex justify-between">
                  <p className="folder-style z-10">Authors Name</p>
                  <p className="folder-style z-10">Publish Date</p>
                </div>
              </div>
              <h2 className="text-[24px] tracking-[0.2px] text-primary my-[16px] leading-[32px]">
                Rapid development on AWS EKS using Garden{" "}
              </h2>
              <p className="text-folderTextColor leading-[20px] text-sm mb-[16px]">
                Risus a sit tortor vel et. Dolor velit facilisis dictum ipsum.
                Nisi elementum ultrices...
              </p>
              <div className="flex items-center">
                <p className="text-sm text-readBlogColor font-bold leading-[22px]">
                  Read Blog
                </p>
                <img src={arrow} alt="icon" className="mt-[3px] ml-[8px]" />
              </div>
            </div>
          </div>
        )}
      </Link>
    </section>
  );
}
