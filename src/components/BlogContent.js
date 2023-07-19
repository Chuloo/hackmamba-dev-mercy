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

export default function BlogContent({ post }) {
  const data = useStaticQuery(graphql`
    query BlogDetailsQuery($slug: String) {
      markdownRemark(
        frontmatter: { slug: { eq: $slug }, featured: { eq: true } }
      ) {
        html
        frontmatter {
          title
          publish
          author
          featuredImg {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const { html } = data?.markdownRemark;
  const { title, publish, author, featuredImg } =
    data?.markdownRemark?.frontmatter;

  return (
    <section>
      <div className="flex gap-[116px] mt-[120px] sm:max-w-[unset] max-w-[358px] mx-[auto]">
        <div className="sm:mr-[116px] sm:ml-[200px] sm:max-w-[722px]">
          <h2 className="sm:text-[40px] text-primary sm:leading-[56px] text-[32px] leading-[40px]">{title}</h2>
          <div className="mt-[32px] mb-[40px]">
            <Img fluid={featuredImg.childImageSharp.fluid} />
          </div>

          <div dangerouslySetInnerHTML={{ __html: html }} />

          {/* <BlogFolder /> */}
        </div>

        <div className="sm:block hidden">
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
