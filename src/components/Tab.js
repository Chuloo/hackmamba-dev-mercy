import React from "react";

export default function Tab({ text }) {
  return (
    <div className="sm:mt-[137px] mt-[120px]">
      <h2 className="text-primary sm:!text-[48px] mb-[36px] !text-[24px] sm:leading-[60px] leading-[32px]">
        {text}
      </h2>
      <div className="overflow-x-scroll sm:overflow-x-auto w-full tab-scroll">
        <div className="flex sm:gap-[16px] gap-[8px] whitespace-nowrap">
          <div className="item">
            <pre className="tab-style">All Posts</pre>
          </div>
          <div className="item">
            {" "}
            <pre className="tab-style">Machine Learning</pre>
          </div>
          <div className="item">
            <pre className="tab-style">Devops</pre>
          </div>
          <div className="item">
            <pre className="tab-style">Flutter</pre>
          </div>
          <div className="item">
            <pre className="tab-style">Web development</pre>
          </div>
          <div className="item">
            <pre className="tab-style">Artificial Intelligence</pre>
          </div>
          <div className="item">
            <pre className="tab-style">Sharing</pre>
          </div>
          <div className="item">
            {" "}
            <pre className="tab-style">Building</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
