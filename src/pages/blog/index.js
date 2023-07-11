import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import Input from "../../components/Input";
import BlogFolder from "../../components/BlogFolder";
import SmallFolder from "../../components/SmallFolder";
import Community from "../../components/Community";

export default function Blog() {
  const data = useStaticQuery(graphql`
    query BlogQuery {
      featuredTrue: allMarkdownRemark(
        filter: { frontmatter: { featured: { eq: true } } }
        limit: 4
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
                fluid {
                  src
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
        <div className="max-w-[1170px] mx-[auto]">
          <div className="my-[120px] flex justify-between items-center relative">
            <div>
              <h2 className="text-[56px] text-primary mb-[40px]">
                The Hackmamba Blog
              </h2>
              <Input btnLabel="Suscribed" />
            </div>

            <p className="max-w-[479px] mt-[80px]">
              Risus a sit tortor vel et. Dolor velit facilisis dictum ipsum.
              Nisi elementum ultrices auctor amet neque. Dui feugiat ut nibh
              vestibulum.
            </p>
            <div className="w-[16.813rem] h-[16.813rem] opacity-[0.4000000059604645] rounded-[16.813rem] blur-[150px] absolute top-0 right-0 mt-[1.875rem] bg-blogGradient"></div>
          </div>
          <div>
            <h2 className="text-primary text-[40px] mb-[32px]">
              Featured Articles
            </h2>
            <div className="flex justify-between">
              <BlogFolder wide post={mainPost} />
              <div className="flex flex-col gap-[48px]">
                {restPost.map((post) => (
                  <SmallFolder post={post} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-[137px]">
            <h2 className="text-primary text-[40px] mb-[36px]">Categories</h2>
            <div className="flex gap-[16px]">
              <p className="tab-style">All Posts</p>
              <p className="tab-style">Machine Learning</p>
              <p className="tab-style">Devops</p>
              <p className="tab-style">Flutter</p>
              <p className="tab-style">Web development</p>
              <p className="tab-style">Artificial Intelligence</p>
              <p className="tab-style">Sharing</p>
              <p className="tab-style">Building</p>
            </div>
          </div>

          <div className="grid grid-cols-3 mt-[27px] mb-[120px]">
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
