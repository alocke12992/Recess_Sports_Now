import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import {AdContext} from '../components/AdContext';
import HomeTop from '../components/HomeTop';

export default class IndexPage extends React.Component {
  render() {
    const {data} = this.props
    const {edges: posts} = data.allMarkdownRemark
    const carouselImages = posts.filter(({node: post}) => post.frontmatter.carousel === true)
    return (
      <AdContext.Consumer>
        {ads => (
          <section className='section'>
            <div className='columns'>
              <div className='column is-2'>
              </div>
              <div className='column is-8'>
                <HomeTop posts={carouselImages} ad={ads.filter(ad => ad.node.frontmatter.templateKey === "sideAd")} />
                <div className="columns is-multiline">
                  {posts
                    .map(({node: post}) => (
                      <div
                        className={post.frontmatter.featured ? "column is-one-third" : "column is-one-quarter"}
                        style={{border: '0.5px solid #eaecee'}}
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
              <div className='column is-2'>
              </div>
            </div>
          </section>
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
