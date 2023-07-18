import { graphql } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import texture from "../../images/texture.png";
import CurvedLine from "../../components/CurvedLine";
import Tab from "../../components/Tab";
import CommunityFolder from "../../components/CommunityFolder";
import Info from "../../components/Info";
import session from "../../images/session.svg";
import contactus2 from "../../images/contactus2.svg";
import base from "../../images/base2.svg";
import base2 from "../../images/base4.svg";
import Btn from "../../components/Btn";
import logo from "../../images/logo2.svg";
import CommunityGroup from "../../components/CommunityGroup";
import Img from "gatsby-image";

export default function Community({ data }) {
  const mainPost = data?.allMarkdownRemark?.nodes;

  return (
    <Layout>
      <section className="relative">
        <div className="flex sm:max-w-[1170px] max-w-[358px] mx-[auto] sm:flex-row flex-col">
          <div className="sm:pt-[166px] pt-[108px] sm:pb-[216px] pb-[40px]">
            <h2 className="text-primary max-w-[580px] text-[64px] sm:leading-[80px] leading-[40px]">
              Join Our Technical Writing{" "}
              <span className="span-style px-[10px]">Community</span>
            </h2>
            <p className="max-w-[587px] mt-[16px] text-[18px] leading-[32px]">
              Do you have an interest in technical writing? Join our community
              of aspiring and veteran technical writers to network, get
              mentorship, and advance your technical writing career.
            </p>

            <div className="mt-[32px]">
              <Btn
                text="Join Now"
                backgroundColor="bg-secondary"
                textColor="text-white"
                slimBtn
              />
            </div>
          </div>
          <div className="sm:w-[150px] sm:ml-[145px] ml-[24px]">
            <img src={logo} alt="logo" className="sm:w-[100%] sm:mt-[290px] sm:static absolute  mt-[314px] w-[118px]" />
          </div>
          <div className="absolute top-[-10px] w-[516px] right-[178px] z-[-10] sm:block hidden">
            <img src={base} alt="img" />
          </div>
          <div className=" w-[338px]  z-[-10] sm:hidden block">
            <img src={base2} alt="img" />
          </div>

            <div className="absolute flex flex-col sm:w-[516px] w-[338px] top-0 right-0 mt-[565px] sm:mt-0">
            <Img
              fluid={data?.item1?.childImageSharp?.fluid}
              className="sm:w-[100px] w-[97px] sm:mt-[68px]  sm:ml-[-56px] mt-[-35px]"
            />
            <Img
              fluid={data?.item2?.childImageSharp?.fluid}
              className="sm:w-[120px] w-[117px] sm:ml-[156px] mt-[10px] ml-[153px]"
            />
            <Img
              fluid={data?.item5?.childImageSharp?.fluid}
              className="sm:w-[130px] w-[113px] sm:ml-[268px] sm:mt-[40px] mt-[60px] ml-[223px]"
            />

            <Img
              fluid={data?.item3?.childImageSharp?.fluid}
              className="w-[90px] sm:ml-[175px] sm:mt-[5px] mt-[50px] ml-[168px]"
            />

            <Img
              fluid={data?.item4?.childImageSharp?.fluid}
              className="sm:w-[130px] w-[113px] sm:mt-[2px] sm:ml-[-45px] mt-[40px]"
            />
          </div>  
        </div>

        <div
          className="bg-productSectionBg bg-cover bg-no-repeat sm:py-[120px] py-[80px] relative overflow-hidden sm:overflow-visible"
          style={{ backgroundImage: `url(${texture})` }}
        >
          <div className="sm:max-w-[1170px] max-w-[358px] mx-[auto]">
            <div className="w-[866px]">
              <div className="pl-[4px]">
                <CurvedLine
                  headingText="Why you should join our community"
                  headingWidth="sm:max-w-[536px]"
                />
              </div>
            </div>
            <div className="mb-[80px] ">
              <CommunityGroup />
            </div>
            <CommunityGroup flexReverse="sm:flex-row-reverse flex-col" />
          </div>
        </div>
        <div />

        <div className="sm:mt-[160px] mt-[120px] sm:max-w-[1170px] max-w-[358px] mx-[auto]">
          <Tab text="Community Events" />

          <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-[32px] gap-[64px] sm:mt-[57px] mt-[40px] mb-[160px]">
            {mainPost.map((post) => (
              <CommunityFolder post={post} />
            ))}
          </div>
        </div>

        <div className="bg-productSectionBg relative">
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

export const query = graphql`
  query CommunityBlogQuery {
    allMarkdownRemark(filter: { frontmatter: { community: { eq: true } } }) {
      nodes {
        frontmatter {
          title
          desc
          thumb {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    item1: file(relativePath: { eq: "item7.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    item2: file(relativePath: { eq: "item8.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    item3: file(relativePath: { eq: "item9.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    item4: file(relativePath: { eq: "item10.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    item5: file(relativePath: { eq: "item11.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
