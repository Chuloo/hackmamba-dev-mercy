import { Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";

export default function SmallFolder({ title, post }) {
  return (
    <section className="hover:translate-y-[-5px] ease-in duration-300">
      <Link to={post.frontmatter.slug} key={post.id}>
        <div className="grid grid-cols-[99px_309px] gap-[16px]">
          <div>
            <Img fluid={post.frontmatter.thumb.childImageSharp.fluid} />
          </div>

          <h2 className="text-primary !text-base font-semibold leading-[24px] tracking-[1px] sm:max-w-[309px] max-w-[243px]">
            {post.frontmatter.title}
          </h2>
        </div>

        <div className="flex justify-between pt-[16px] pb-[32px] border-b-2 border-borderLine-500">
          <p className="folder-style z-10">{post.frontmatter.author}</p>
          <p className="folder-style z-10">{post.frontmatter.publish}</p>
        </div>
      </Link>
    </section>
  );
}
