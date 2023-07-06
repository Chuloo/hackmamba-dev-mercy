import React from "react";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import { Link } from "gatsby";

export default function Moto() {
  return (
    <section className="bg-[linear-gradient(0deg,_#FFF_0%,_#ffffff00_100%)]">
      <div className="max-w-[1010px] my-0 mx-[auto] flex justify-between pt-[121px] pb-[128px]">
        <div>
          <h2 className="text-primary max-w-[399px] mb-[34px]">
            Thought Leadership Is Our Forte!
          </h2>
          <p>Join the conversation on social media.</p>
        </div>
        <div className="max-w-[484px]">
          <p className="pt-[36px]">
            Hackmamba believes in being uniquely different. We only engage the
            finest professionals, thought leaders, and technology specialists
            from various tech stacks.
          </p>
          <div className="flex gap-[36px] mt-[70px]">
            <Link to="#">
              <img src={twitter} alt="logo" />
            </Link>
            <Link to="#">
              <img src={linkedin} alt="logo" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
