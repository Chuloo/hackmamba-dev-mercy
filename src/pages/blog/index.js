import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import Input from "../../components/Input";
import BlogFolder from "../../components/BlogFolder";
import SmallFolder from "../../components/SmallFolder";
import Community from "../../components/Community";
import Tab from "../../components/Tab";

export default function Blog() {
  const data = useStaticQuery(graphql`
    query BlogQuery {
      featuredTrue: allMarkdownRemark(
        filter: { frontmatter: { featured: { eq: true } } }
        limit: 4
        sort: { frontmatter: { date: ASC } }
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
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          id
        }
      }

      featuredFalse: allMarkdownRemark(
        filter: { frontmatter: { featured: { eq: false } } }
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
                fluid(quality:100) {
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

  const mainPost = [...data?.featuredTrue?.nodes].shift();
  const restPost = [...data?.featuredTrue?.nodes].slice(1);

  const subPost = data?.featuredFalse?.nodes;

  return (
    <Layout>
      <section>
        <div className="sm:max-w-[1170px] mx-[auto] max-w-[358px] ">
          <div className="sm:my-[120px] mt-[108px] mb-[71px] relative sm:flex-row flex-col">
            <div>
              <h2 className="text-[56px] text-primary sm:mb-[8px] mb-[19px] leading-[40px] sm:leading-[unset]">
                The Hackmamba Blog
              </h2>
              <div className="flex justify-between items-center sm:flex-row flex-col-reverse">
                <Input btnLabel="Suscribed" />

                <p className="max-w-[479px] text-[18px] leading-[32px]">
                  Risus a sit tortor vel et. Dolor velit facilisis dictum ipsum.
                  Nisi elementum ultrices auctor amet neque. Dui feugiat ut nibh
                  vestibulum.
                </p>
              </div>
            </div>

            <div className="gradient-style top-0 right-0 sm:block hidden"></div>
          </div>
          <div>
            <h2 className="text-primary sm:!text-[40px] !text-[24px] mb-[32px]">
              Featured Articles
            </h2>
            <div className="flex justify-between sm:flex-row flex-col">
              <BlogFolder wide post={mainPost} />
              <div className="flex flex-col gap-[48px]">
                {restPost.map((post) => (
                  <SmallFolder post={post} />
                ))}
              </div>
            </div>
          </div>

          <Tab text="Categories" />

          <div className="grid sm:grid-cols-3 grid-cols-1 sm:mt-[27px] mt-[32px] sm:mb-[120px] mb-[160px] gap-[32px]">
            {subPost.map((post) => (
              <BlogFolder post={post} />
            ))}
          </div>
        </div>
        <Community />
      </section>
    </Layout>
  );
}
