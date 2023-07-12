import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import texture from "../../images/texture.png";
import CurvedLine from "../../components/CurvedLine";
import JoinCommunity from "../../components/JoinCommunity";
import Tab from "../../components/Tab";
import CommunityFolder from "../../components/CommunityFolder";
import Info from "../../components/Info";
import session from "../../images/session.svg";
import contactus2 from "../../images/contactus2.svg";
import base from "../../images/base2.svg";
import Btn from "../../components/Btn";
import logo from "../../images/logo2.svg";
import Img from "gatsby-image";

export default function Community() {
  const data = useStaticQuery(graphql`
    query CommunityBlogQuery {
      allMarkdownRemark(filter: { frontmatter: { community: { eq: true } } }) {
        nodes {
          frontmatter {
            title
            desc
            thumb {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      item1: file(relativePath: { eq: "Item1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      item2: file(relativePath: { eq: "Item2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      item3: file(relativePath: { eq: "Item3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      item4: file(relativePath: { eq: "Item4.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      item5: file(relativePath: { eq: "Item5.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  console.log(data);

  const mainPost = data?.allMarkdownRemark?.nodes;

  return (
    <Layout>
      <section className="relative">
        <div className="flex  max-w-[1170px] mx-[auto]  ">
          <div className="pt-[120px] pb-[262px]">
            <h2 className="text-primary max-w-[580px] text-[64px] leading-[80px]">
              Join Our Technical Writing{" "}
              <span className="span-style px-[10px]">Community</span>
            </h2>
            <p className="max-w-[587px] mt-[16px]">
              Do you have an interest in technical writing? Join our community
              of aspiring and veteran technical writers to network, get
              mentorship, and advance your technical writing career.
            </p>

            <div className="mt-[32px]">
              <Btn
                text="Join Now"
                backgroundColor="bg-secondary"
                textColor="text-white"
              />
            </div>
          </div>
          <div className="w-[150px] ml-[145px]">
            <img src={logo} alt="logo" className="w-[100%] mt-[238px]" />
          </div>
          <div className="absolute top-[-56px] w-[516p] right-[178px]">
            <img src={base} alt="img" />
          </div>

          <div className="absolute flex flex-col w-[516px] right-0">
            <Img
              fluid={data?.item1?.childImageSharp?.fluid}
              className="w-[100px] mt-[23px] ml-[-60px]"
            />
            <Img
              fluid={data?.item2?.childImageSharp?.fluid}
              className="w-[100px]"
            />
            <Img
              fluid={data?.item3?.childImageSharp?.fluid}
              className="w-[100px]"
            />
            <Img
              fluid={data?.item4?.childImageSharp?.fluid}
              className="w-[61px]"
            />
            <Img
              fluid={data?.item5?.childImageSharp?.fluid}
              className="w-[100px]"
            />
          </div>
        </div>

        <div
          className="bg-productSectionBg  bg-cover bg-no-repeat pt-[120px] relative"
          style={{ backgroundImage: `url(${texture})` }}
        >
          <div className="max-w-[1170px] mx-[auto]">
            <div className="w-[866px]">
              <CurvedLine
                headingText="Why you should join our community"
                headingWidth="max-w-[536px]"
              />
            </div>

            <div className="mb-[238px]">
              <JoinCommunity />
            </div>
            <div className="pb-[196px]">
              <JoinCommunity
                flexRow="flex-row-reverse"
                leftPosition="left-[135px]"
                rightPosition="top-[814px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-[160px] max-w-[1170px] mx-[auto]">
          <Tab text="Community Events" />

          <div className="grid grid-cols-3 gap-[32px] mt-[57px] mb-[160px]">
            {mainPost.map((post) => (
              <CommunityFolder post={post} />
            ))}
          </div>
        </div>
        <div className="bg-productSectionBg  relative">
          <div className="flex gap-[48px] max-w-[1170px] mx-[auto] translate-x-[30px] py-[80px]">
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
                <img
                  src={contactus2}
                  alt="icon"
                  className="w-[56px] h-[56px]"
                />
              }
              textBtn="Contact Us"
            />
          </div>
          <div></div>
        </div>
      </section>
    </Layout>
  );
}
