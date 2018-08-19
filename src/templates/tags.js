import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

class TagRoute extends React.Component {

  showPosts = () => {

  }

  render() {
    const tag = this.props.pathContext.tag
    const title = this.props.data.site.siteMetadata.title
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <Link to={post.node.fields.slug} key={post.node.fields.slug}>
        <div className="columns">
          <div className="column is-6" style={{display: 'flex', alignItems: 'center'}}>
            <figure className="image is-5by3" style={{height: '100%'}}>
              <img src={post.node.frontmatter.featuredImage} style={{height: '100%', objectFit: 'cover'}} />
            </figure>
          </div>
          <div className="column is-6">
            <div id="tagName">{tag}</div>
            <h3 id="postList">{post.node.frontmatter.title}</h3>
            <p style={{color: '#454545'}}>{post.node.frontmatter.description ? `${post.node.frontmatter.description.substring(0, 100)}...` : null}</p>
          </div>
        </div>
      </Link>
    ))
    return (
      <section className="section">
        <Helmet title={`${tag} | ${title}`} />
        <div className="container content">
          <div className="columns">
            <div
              className="column is-8 is-offset-2"
              style={{marginBottom: '6rem'}}
            >
              <h2 className="tagTitle">{tag}<span></span></h2>
              {postLinks}
              <p>
                <Link to="/tags/">Browse all tags</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage
            description
          }
        }
      }
    }
  }
`
