import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {AdContext} from '../components/AdContext';
import HomeTop from '../components/HomeTop';
import BackgroundAd from '../components/BackgroundAd';

export default class IndexPage extends React.Component {
  render() {
    const {data} = this.props
    const {edges: posts} = data.allMarkdownRemark
    const carouselImages = posts.filter(({node: post}) => post.frontmatter.carousel === true)
    return (
      <AdContext.Consumer>
        {ads => (
          <div className='columns'>
            <div className='column is-8 is-offset-2 mainContent'>
              <HomeTop posts={carouselImages} ad={ads.filter(ad => ad.node.frontmatter.templateKey === "sideAd")} />
              <div className="columns is-multiline postWrapper">
                {posts
                  .map(({node: post}) => (
                    <div
                      className={post.frontmatter.featured ? "column is-one-third" : "column is-one-quarter"}
                      key={post.id}
                    >
                      <img src={post.frontmatter.featuredImage} />
                      <p style={{fontSize: '0.5em'}}>
                        <Link className="has-text-primary" to={post.fields.slug}>
                          {post.frontmatter.title}
                        </Link>
                      </p>
                      <p style={{fontSize: '0.4em'}}>
                        {post.excerpt}
                      </p>
                    </div>
                  )
                  )}
              </div>
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
