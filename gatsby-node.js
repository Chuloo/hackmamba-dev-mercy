const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  console.log("first");
  const { data } = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  console.log({ data });

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: "/blog/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/blog-details.js"),
      context: { slug: node.frontmatter.slug },
    });
  });
};
