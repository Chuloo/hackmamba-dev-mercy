import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import avatar from "../images/avatar.png";
import facebook from "../images/facebook-purple.svg";
import twitter from "../images/twitter-purple.svg";
import linkedin from "../images/facebook-purple.svg";
import BlogFolder from "./BlogFolder";
import Info from "./Info";
import session from "../images/session.svg";
import contactus2 from "../images/contactus2.svg";
import SingleBlogFolder from "./SingleBlogFolder";

export default function BlogContent(props) {
  const data = useStaticQuery(graphql`
    query BlogDetailsQuery($slug: String, $nextPostSlug: String) {
      post: markdownRemark(
        frontmatter: { slug: { eq: $slug }, featured: { eq: false } }
      ) {
        html
        frontmatter {
          title
          publish
          author
          slug
          featuredImg {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      nextPost: markdownRemark(
        frontmatter: { slug: { eq: $nextPostSlug }, featured: { eq: false } }
      ) {
        frontmatter {
          title
          publish
          author
          slug
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      relatedPost: allMarkdownRemark(
        filter: { frontmatter: { featured: { eq: false } } }
        limit: 3
      ) {
        nodes {
          frontmatter {
            author
            desc
            publish
            slug
            title
            thumb {
              childImageSharp {
                fluid(quality: 100) {
                  sizes
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                  tracedSVG
                  aspectRatio
                }
              }
            }
          }
          id
        }
      }
    }
  `);

  const { html } = data?.post;
  const { title, publish, author, featuredImg } = data?.post?.frontmatter;
  const post = data?.relatedPost?.nodes;

  console.log(data?.nextPost);

  return (
    <section>
      <div className="flex  mt-[120px] sm:max-w-[1040px] max-w-[358px] mx-[auto]">
        <div className="sm:mr-[116px] sm:max-w-[722px]">
          <h2 className="sm:text-[40px] text-primary sm:leading-[56px] text-[32px] leading-[40px]">
            {title}
          </h2>
          <div className="mt-[32px] mb-[40px]">
            <Img fluid={featuredImg.childImageSharp.fluid} />
          </div>

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* <BlogFolder /> */}
        </div>

        <div className="sm:block hidden">
          <div className="gradient-style top-[262px] right-[135px] sm:block hidden"></div>

          <div className="mb-[96px]">
            <img src={avatar} alt="img" className="w-[40px]" />
            <p>{author}</p>
          </div>
          <div className="mb-[181px]">
            <p>6 min read</p>
            <p>{publish}</p>
          </div>
          <div>
            <p>Share to:</p>
            <div className="flex gap-[14px]">
              <img src={facebook} alt="icon" />
              <img src={twitter} alt="icon" />
              <img src={linkedin} alt="icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="sm:max-w-[1040px] mx-[auto] sm:mt-[160px] max-w-[358px] mt-[56px]">
        <h2 className="text-primary text-[40px] mb-[10px]">Related Blogs</h2>

        <div className=" grid sm:grid-cols-3 grid-cols-1 gap-[32px] ">
          {/* for next post */}
          {/* {data?.nextPost ? <BlogFolder post={data?.nextPost} /> : null}
        {data?.nextPost ? <BlogFolder post={data?.nextPost} /> : null}
        {data?.nextPost ? <BlogFolder post={data?.nextPost} /> : null} */}
          {post.map((post) => (
            <SingleBlogFolder post={post} />
          ))}
        </div>
      </div>

      <div className="bg-productSectionBg relative mt-[160px]">
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
              <img src={contactus2} alt="icon" className="w-[56px] h-[56px]" />
            }
            textBtn="Contact Us"
          />
        </div>
        <div></div>
      </div>
    </section>
  );
}
