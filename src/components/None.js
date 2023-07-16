import React from "react";
import Img from "gatsby-image";
import avatar from "../images/avatar.png";
import facebook from "../images/facebook-purple.svg";
import twitter from "../images/twitter-purple.svg";
import linkedin from "../images/facebook-purple.svg";

export default function None() {
  return (
    <section className="flex gap-[116px] mt-[120px] ">
      <div className="mr-[116px] ml-[200px]">
        <h2 className="">title</h2>
        <div>{/* <Img fluid={} /> */}</div>

        {/* <div dangerouslySetInnerHTML={} /> */}
      </div>

      <div>
        <div className="mb-[96px]">
          <img src={avatar} alt="img" className="w-[40px]" />
          <p>Authors name</p>
        </div>
        <div className="mb-[181px]">
          <p>6 min read</p>
          <p>Publish Date here</p>
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
    </section>
  );
}
