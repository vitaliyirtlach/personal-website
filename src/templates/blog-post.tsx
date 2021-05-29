import { graphql } from "gatsby"
import React from "react"
import Container from "../components/Container"
import Nav from "../components/Nav"

export default function BlogPost({ data }: any) {
    const post = data.markdownRemark
    return (
        <Container className="post">
          <Nav title={post.frontmatter.title}></Nav>
          <div className="post-info">
            <div className="post-title">{post.frontmatter.title}</div>
            <div className="post-date">{post.frontmatter.date}</div>
          </div>
          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
    )
  }


export const query = graphql`
    query GetPost ($slug: String!) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
                date
            }
        }
    }
`