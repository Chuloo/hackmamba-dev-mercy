import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import arrow from "../images/arrow.svg";
import { Link } from "gatsby";
import Img from "gatsby-image";
import folder from '../images/thumbs/folder1.png'

export default function BlogFolder({ wide, post }) {
  const data = useStaticQuery(graphql`
    query AvatarQuery {
      file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section>
      <Link to={`/blog/${post?.frontmatter.slug}`} key={post?.id}>
        {wide ? (
          <div>
            <div className="max-w-[698px] mb-[48px] sm:mb-[unset]">
              <div className="relative">
                <div>
                  {/* <Img fluid={post.frontmatter.thumb.childImageSharp.fluid} /> */}
                  <img src={folder} alt="dd"/>
                </div>

                <div className="bg-folderBgColor py-[16px] pl-[24px] pr-[13px] border-t-2 backdrop-blur-[12px] border-borderFolderBgColor-500 absolute bottom-[0] left-0 sm:w-[698px] w-full ">
                  <div className="flex justify-between">
                    <p className="folder-style z-10 sm:text-base text-sm">
                      {post.frontmatter.author}
                    </p>
                    <p className="folder-style z-10 sm:text-base text-sm">
                      {post.frontmatter.publish}
                    </p>
                  </div>
                </div>
              </div>
              <h2 className="sm:!text-[32px] !text-[24px] sm:leading-[42px] leading-[32px] tracking-[1px] text-primary sm:mt-[40px] mb-[16px] mt-[24px]">
                {post.frontmatter.title}
              </h2>
              <p className="text-folderTextColor leading-[24px] text-base">
                {post.frontmatter.desc}
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="max-w-[342px] sm:m-[unset] mx-auto relative ">
              <Img
                fluid={post?.frontmatter.thumb.childImageSharp.fluid}
                className="h-[293px]"
              />
              <div className="w-[40px] absolute top-[21px] right-[24px]">
                <Img fluid={data.file.childImageSharp.fluid} />
              </div>
              {/* <img
                src={avatar}
                alt="img"
                className="w-[40px] absolute top-[21px] right-[24px]"
              /> */}
              <div className="bg-folderBgColor py-[16px] px-[24px]  border-t-2 backdrop-blur-[12px] border-borderFolderBgColor-500 absolute sm:top-[236px] top-[229px] left-0 w-[342px]">
                <div className="flex justify-between">
                  <p className="folder-style z-10">{post?.frontmatter.author}</p>
                  <p className="folder-style z-10">
                    {post?.frontmatter.publish}
                  </p>
                </div>
              </div>
              <h2 className="!text-[24px] tracking-[0.2px] text-primary sm:my-[16px] mt-[24px] mb-[16px] leading-[32px]">
                {post?.frontmatter.title}
              </h2>
              <p className="text-folderTextColor leading-[20px] text-sm mb-[16px]">
                {post?.frontmatter.desc}
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
