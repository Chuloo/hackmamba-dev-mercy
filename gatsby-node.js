const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            nextPost
            slug
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach(async (node) => {
    actions.createPage({
      path: "/blog/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/blog-details.js"),
      context: { 
        slug: node.frontmatter.slug, 
        nextPostSlug: node.frontmatter.nextPost
      },
    });
  });
};
