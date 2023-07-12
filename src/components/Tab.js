import React from "react";

export default function Tab({ text }) {
  return (
    <div className="mt-[137px]">
      <h2 className="text-primary text-[40px] mb-[36px]">{text}</h2>
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
  );
}
