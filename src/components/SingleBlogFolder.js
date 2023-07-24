import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import arrow from "../images/arrow.svg";

export default function SingleBlogFolder({ post }) {
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
    <Link to={`/blog/${post?.frontmatter.slug}`} key={post?.id}>
      <section>
        <div>
          <div>
            <div className="max-w-[342px] sm:m-[unset] mx-auto relative ">
              <div className="hover:translate-y-[-5px] ease-in duration-300">
                <Img
                  fluid={post?.frontmatter.thumb?.childImageSharp.fluid}
                  className="w-[342px]"
                />
                <div className="w-[40px] absolute top-[21px] right-[24px]">
                  <Img fluid={data.file.childImageSharp.fluid} />
                </div>

                <div className="bg-folderBgColor py-[16px] px-[24px]  border-t-2 backdrop-blur-[12px] border-borderFolderBgColor-500 absolute sm:top-[236px] top-[229px] left-0 w-[342px]">
                  <div className="flex justify-between">
                    <p className="folder-style z-10">
                      {post?.frontmatter.author}
                    </p>
                    <p className="folder-style z-10">
                      {post?.frontmatter.publish}
                    </p>
                  </div>
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
        </div>
      </section>
    </Link>
  );
}
