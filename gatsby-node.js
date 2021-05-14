const path = require("path")
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const {errors, data} = await graphql(`
    {
        allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
            edges {
              node {
                childMarkdownRemark {
                  frontmatter {
                    title
                  }
                }
                name
              }
            }
          }
    }
    `)
  // Handle errors
  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create pages for each markdown file.
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`)
  data.allFile.edges.forEach(({ node }) => {
    const path = node.name
    const title = node.childMarkdownRemark.frontmatter.title
    createPage({
      path,
      component: blogPostTemplate,
      context: {
        slug: title,
      },
    })
  })
}