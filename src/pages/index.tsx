import { graphql, Link } from "gatsby"
import React from "react"
import Container from "../components/Container"

export default function Home({ data }) {
  const posts = data.allFile.edges
  return (
    <Container>
      <div className="bio">
        <img width="200" src="./photo.jpeg" alt="..." />
        <p>Hi my name is Vitaliy! I was born 13.09.2005. I am from Ukraine. My hobby is doing sport like football, volleyball and others. I started learn programming on JavaScript in January 2020 but I interested in it since 2018. I use a lot of different technologies in different projects, but my favourite are:   
        <a href="https://reactjs.org/">React.js</a>, <a href="https://www.postgresql.org/">PostgreSQL</a>, <a href="https://nodejs.org/en/">Node.js</a>. Also I use <a href="https://www.typescriptlang.org/">TypeScript</a> programming language in my projects.
        </p>
        <p>You can find me here: <a href="https://github.com/vitaliyirtlach">GitHub</a>, <a href="https://www.instagram.com/vitaliyirtlach/">Instagram</a>, <a href="https://twitter.com/w13vitaliy">Twitter</a> and Discord (<mark>-vıtalıyırtlach#8948</mark>)</p>
        <p>Posts: </p>
        <div className="list-of-posts">
          {posts.map(({node}) => {
            const title = node.childMarkdownRemark.frontmatter.title
            return <Link key={title} to={node.name}>{title}</Link>
          })}
        </div>
      </div>
    </Container>
  )
}


export const query = graphql`
query GetAllPosts {
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


`
