import React from "react";

export default function Tab({ text }) {
  return (
    <div className="sm:mt-[137px] mt-[120px]">
      <h2 className="text-primary sm:!text-[48px] mb-[36px] !text-[24px] sm:leading-[60px] leading-[32px]">{text}</h2>
      <div className="flex sm:gap-[16px] gap-[8px] overflow-hidden">
        <pre className="tab-style">All Posts</pre>
        <pre className="tab-style">Machine Learning</pre>
        <pre className="tab-style">Devops</pre>
        <pre className="tab-style">Flutter</pre>
        <pre className="tab-style">Web development</pre>
        <pre className="tab-style">Artificial Intelligence</pre>
        <pre className="tab-style">Sharing</pre>
        <pre className="tab-style">Building</pre>
      </div>
    </div>
  );
}
