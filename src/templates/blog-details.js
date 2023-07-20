import React from "react";
import Layout from "../components/Layout";

import BlogContent from "../components/BlogContent";

export default function BlogDetails(props) {
  return (
    <Layout>
      <BlogContent {...props} />
    </Layout>
  );
}
