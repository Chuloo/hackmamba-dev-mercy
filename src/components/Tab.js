import React from "react";

export default function Tab({ text }) {
  return (
    <div className="mt-[137px]">
      <h2 className="text-primary text-[40px] mb-[36px]">{text}</h2>
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
