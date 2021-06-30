import React from "react"
import { Link, graphql } from "gatsby"
import ImageMasonry from "react-image-masonry"

import DefaultLayout from "../layouts/default"
import Image from "../components/image"
import SEO from "../components/seo"

import { groupBy, getDateYear } from "../utils"

const IndexPage = ({ data }) => {
  // all posts without dates are assumed to be drafts or pages
  // not to be added to postsList
  const posts = data.allMarkdownRemark.edges.filter(
    p => p.node.frontmatter.date !== null
  )
  const postsList = posts =>
    posts.map(post => (
      <li key={post.node.id}>
        <div className="post-date code">
          <small>{post.node.frontmatter.date}</small>
        </div>
        <div className="title">
          <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
        </div>
      </li>
    ))

  const postsListContainer = groupBy(posts, getDateYear)
    .map(({ year, posts }, i) => (
      <div key={i}>
        {postsList(posts)}
      </div>
    ))
    .reverse()
  return (
    <DefaultLayout>
      <SEO title="Sofia Rivas - Driven by curiosity" />
      
      <section><h4>Who am I?</h4> 👋🏼 Hi! I'm <Link to="/about">Sofia.</Link> Frontend Developer and UI Designer driven by curiosity. Currently working as Software Engineer at <a href="https://www.wizeline.com/" target="_blank">@Wizeline</a></section>
      <section>
        <h4>I like building stuff:</h4>
        <ul>{postsListContainer}</ul>
      </section>
      <section class="home__social-container">
        <h4>Find me at:</h4>
        <a className="home__social-link" href="https://www.linkedin.com/in/sofiarivas/" target="_blank">Linkedin</a>
        <a className="home__social-link" href="https://twitter.com/rivas_sm" target="_blank"> Twitter</a>
        <a className="home__social-link" href="https://www.polywork.com/sofiarivas" target="_blank"> Polywork</a>
        <a className="home__social-link" href="mailto:sofi.rivasm@gmail.com"> sofi.rivasm@gmail.com</a>
      </section>
      <section>
      <ImageMasonry
        imageUrls={[
          'https://storage.googleapis.com/maker-blog-assets/3d-model/first-model.png',
          'https://storage.googleapis.com/maker-blog-assets/maker-cat.jpg',
          'https://storage.googleapis.com/maker-blog-assets/maker-topi.jpg',
          'https://storage.googleapis.com/maker-blog-assets/lego-led-clock/clock-WIP.jpg',
          'https://storage.googleapis.com/maker-blog-assets/avoiding-robot/robot.jpg',
          'https://storage.googleapis.com/maker-blog-assets/lego-led-clock/breadboard.jpg',
          'https://storage.googleapis.com/maker-blog-assets/lego-led-clock/lego-clock.jpg',
          ]}
        numCols={2}
      />
      </section>
    </DefaultLayout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YY")
            title
          }
        }
      }
    }
  }
`
