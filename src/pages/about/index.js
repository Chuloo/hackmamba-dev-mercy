import React from "react";
import Layout from "../../components/Layout";
import Input from "../../components/Input";

export default function About() {
  return (
    <Layout>
      <div className="max-w-[1170px] mx-[auto] mt-[120px]">
        <div>
          <h2 className="text-[56px] text-primary mb-[40px]">
            The Hackmamba Blog
          </h2>
          <Input />
        </div>
      </div>
    </Layout>
  );
}
