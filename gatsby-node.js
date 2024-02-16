const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const { data } = await graphql(`query {
      allMarkdownRemark (filter: {frontmatter: {title: {eq: "Project"}}}){
        nodes {
         id
         frontmatter {
            slug
          }
        }
      }
    }
  `)
    console.log(data)
    const projectTemplate = path.resolve(`src/templates/project.js`)
    data.allMarkdownRemark.nodes.forEach(node => {
        createPage({
            path: `/project/${node.frontmatter.slug}`,
            component: projectTemplate,
            context: {
                // This time the entire product is passed down as context
                slug: node.frontmatter.slug,
            },
        })

    })
}