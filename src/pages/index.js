import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {AdContext} from '../components/AdContext';
import HomeTop from '../components/HomeTop';
import Post from '../components/Post';

export default class IndexPage extends React.Component {

  showAllPosts(passedProps) {
    const {data} = this.props
    const {edges: posts} = data.posts
    const carouselImages = posts.filter(({node: post}) => post.frontmatter.carousel === true)
    return (
      <div className='columns'>
        <div className='column is-8 is-offset-2 mainContent'>
          <HomeTop posts={carouselImages} ad={passedProps.ads.filter(ad => ad.node.frontmatter.templateKey === "sideAd")} />
          <div className="containerGrid">
            {posts
              .map(({node: post}) => (
                <div key={post.id} className={post.frontmatter.featured ? "big" : ""} style={{height: '100%'}}>
                  <Post post={post} />
                </div>
              )
              )}
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <AdContext.Consumer>
        {props => (
          <Fragment>
            {
              this.showAllPosts(props)
            }
          </Fragment>
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
    posts: allMarkdownRemark(
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
            tags
            description
          }
        }
      }
    }
  	siteData: site {
      siteMetadata {
        facebook{
          appId
        }
      }
    }
  }
`
