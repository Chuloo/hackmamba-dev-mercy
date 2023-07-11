const path = require("path");

exports.createPages = async ({ graphgl, actions }) => {
  console.log('first')
  const { data } = await graphgl(`
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

  console.log({data});

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: "/blog/" + node.frontmatter.slug,
      component: path.resolve("./src/templates.blog-details.js"),
      context: { slug: node.frontmatter.slug },
    });
  });
};
