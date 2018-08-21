import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import SearchResults from '../components/SearchResults';

class TagRoute extends React.Component {

  showPosts = () => {

  }

  render() {
    const tag = this.props.pathContext.tag
    const title = this.props.data.site.siteMetadata.title
    const posts = this.props.data.allMarkdownRemark.edges
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
              <SearchResults posts={posts} title={title} tag={tag} />
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
