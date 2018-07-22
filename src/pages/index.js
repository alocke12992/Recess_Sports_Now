import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {AdContext} from '../components/AdContext';
import HomeTop from '../components/HomeTop';

export default class IndexPage extends React.Component {
  render() {
    const {data} = this.props
    const {edges: posts} = data.allMarkdownRemark
    const car = posts.filter(({node: post}) => post.frontmatter.carousel === true)
    return (
      <AdContext.Consumer>
        {ads => (
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
            </div>
            <HomeTop posts={car} ad={ads.filter(ad => ad.node.frontmatter.templateKey === "sideAd")} />
            <div className="columns is-multiline">
              {posts
                .map(({node: post}) => (
                  <div
                    className={post.frontmatter.featured ? "column is-one-third" : "column is-one-quarter"}
                    style={{border: '1px solid #eaecee'}}
                    key={post.id}
                  >
                    <img src={post.frontmatter.featuredImage} />
                    <p>
                      <Link className="has-text-primary" to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                    </p>
                    <p>
                      {post.excerpt}
                    </p>
                  </div>
                )
                )}
            </div>
          </div>
        )}
      </AdContext.Consumer>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          fields {
            slug
          }
          frontmatter {
            featuredImage
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featured
            carousel
          }
        }
      }
    }
  }
`
