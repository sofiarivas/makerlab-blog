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
      
      <section><h4>Who am I?</h4> 👋🏼 Hi! I'm <Link to="/about">Sofia.</Link> Frontend Developer and UI Designer driven by curiosity. Currently working as Software Engineer at <a href="https://www.wizeline.com/" rel="noopener" target="_blank">@Wizeline</a></section>
      <section>
        <h4>I like building stuff:</h4>
        <ul>{postsListContainer}</ul>
      </section>
      <section>
        <h4>Find me at:</h4>
        <a className="home__social-link" rel="noopener" href="https://www.linkedin.com/in/sofiarivas/" target="_blank">LinkedIn</a>
        <a className="home__social-link" rel="noopener" href="https://twitter.com/rivas_sm" target="_blank"> Twitter</a>
        <a className="home__social-link" rel="noopener" href="https://www.polywork.com/sofiarivas" target="_blank"> Polywork</a>
        <a className="home__social-link" rel="noopener" href="mailto:sofi.rivasm@gmail.com"> sofi.rivasm@gmail.com</a>
      </section>
      <section>
      <ImageMasonry
        imageUrls={[
          'https://res.cloudinary.com/sofia-rivas/image/upload/c_scale,q_100,w_500/v1626315045/Blog/first-model_nlsm3a.png',
          'https://res.cloudinary.com/sofia-rivas/image/upload/c_scale,q_100,w_400/v1626238388/Blog/maker-cat_wj7l9l.jpg',
          'https://res.cloudinary.com/sofia-rivas/image/upload/c_scale,q_100,w_400/v1626238945/Blog/maker-topi_xjesnt.jpg',
          'https://res.cloudinary.com/sofia-rivas/image/upload/c_scale,q_100,w_500/v1626315083/Blog/clock-WIP_mzhbnt.jpg',
          'https://res.cloudinary.com/sofia-rivas/image/upload/c_scale,q_100,w_500/v1626315141/Blog/robot_wlp0u0.jpg',
          'https://res.cloudinary.com/sofia-rivas/image/upload/c_scale,q_100,w_500/v1626315102/Blog/breadboard_uxlbft.jpg',
          'https://res.cloudinary.com/sofia-rivas/image/upload/c_scale,q_100,w_500/v1626315115/Blog/lego-clock_msmtkz.jpg',
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
