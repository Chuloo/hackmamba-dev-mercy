import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import map from "../images/map.png";
import prev from "../images/prev.svg";
import next from "../images/next.svg";
import Img from "gatsby-image";

export default function Testimonial() {
  const data = useStaticQuery(graphql`
    query PhotoQuery {
      file(relativePath: { eq: "photo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section className="max-w-[1246px] mx-[auto] mt-[160px] ">
      <div
        className="bg-no-repeat bg-contain bg-[center_top_6rem] pb-[188px]"
        style={{ backgroundImage: `url(${map})` }}
      >
        <div className="">
          <h2 className="max-w-[489px] mx-[auto] text-center text-primary">
            Don’t just take our word for it
          </h2>
          <p className=" max-w-[489px] mx-[auto] text-center mt-[24px] text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, netus
            euismod amet consequat.
          </p>
        </div>
        <div className="max-w-[759px] mx-[auto] px-[56px] pb-[45px] rounded-[24px] bg-white shadow-testimonialShadow mt-[96px] relative">
          <Img
            fluid={data.file.childImageSharp.fluid}
            className="w-[80px] h-[80px] left-[50%] translate-x-[-50%] top-[-30px] absolute shadow-testimonialShadow2"
          />

          <p className="text-base font-normal text-center leading-[32px] ">
            Working with Hackmamba has been a highly professional experience.
            They deliver high-quality content and handle the review process on
            their end, which saves us a lot of time and resources. Hackmamba
            also excels at creating use cases that don't currently exist,
            providing valuable resources for developers to explore and learn
            from. If you don't currently have a content team or are not using a
            content service, you are missing out on the opportunity to attract
            and retain top developers.
          </p>
          <div className="">
            <img
              src={prev}
              alt="prev"
              className="absolute left-[-17px] top-[50%] translate-y-[-50%] cursor-pointer"
            />
            <img
              src={next}
              alt="next"
              className="absolute right-[-17px] top-[50%] translate-y-[-50%] cursor-pointer"
            />
          </div>
          <p className="text-base leading-[20px] text-center mt-[32px] mb-[8px]">
            Tessa Mero
          </p>
          <p className="text-base leading-[20px] font-normal text-center">
            VP of Developer Relations, Appwrite
          </p>
        </div>
      </div>
    </section>
  );
}
