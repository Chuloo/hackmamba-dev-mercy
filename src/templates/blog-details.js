import React from "react";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import avatar from '../images/avatar.png'

export default function BlogDetails() {
  return (
    <Layout>
      <section className="flex ml-[200px] mr-[135px]">
        <div className="mr-[116px]">
          <h2 className="ml-[32px]">title</h2>
          <div>{/* <Img fluid={} /> */}</div>

          {/* <div dangerouslySetInnerHTML={} /> */}
        </div>

        <div>
            
        </div>
      </section>
    </Layout>
  );
}
