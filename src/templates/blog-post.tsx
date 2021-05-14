import { graphql, Link } from "gatsby"
import React from "react"
import Container from "../components/Container"

export default function BlogPost({ data }) {
    const post = data.markdownRemark
    return (
        <Container className="post">
          <nav className="post-nav">
            <Link to="/">Back to home</Link>
          </nav>
          <div className="post-info">
            <div className="post-title">{post.frontmatter.title}</div>
            <div className="post-date">{post.frontmatter.date}</div>
          </div>
          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
    )
  }


export const query = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: {title: {eq: $slug}}) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`