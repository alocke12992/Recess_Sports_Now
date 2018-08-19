import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {AdContext} from '../components/AdContext';
import HomeTop from '../components/HomeTop';
import Post from '../components/Post';

export default class IndexPage extends React.Component {

  showAllPosts(passedProps) {
    const {data} = this.props
    const {edges: posts} = data.allMarkdownRemark
    const carouselImages = posts.filter(({node: post}) => post.frontmatter.carousel === true)
    return (
      <div className='columns'>
        <div className='column is-8 is-offset-2 mainContent'>
          <HomeTop posts={carouselImages} ad={passedProps.ads.filter(ad => ad.node.frontmatter.templateKey === "sideAd")} />
          <div className="containerGrid">
            {posts
              .map(({node: post}) => (
                <div key={post.id} className={post.frontmatter.featured ? "big" : ""}>
                  <Post post={post} />
                </div>
              )
              )}
          </div>
        </div>
      </div>
    )
  }

  filterPosts(posts, searchTerm) {
    let filteredPosts = []
    posts.forEach(post => {
      let tags = post.node.frontmatter.tags
      tags.forEach(tag => {
        tag = tag.toLowerCase()
        if (tag.includes(searchTerm)) {
          filteredPosts.push(post)
        }
      })
    })
    return filteredPosts
  }

  showSearch(passedProps) {
    const {data} = this.props
    const {edges: posts} = data.allMarkdownRemark
    let searchTerm = passedProps.searchTerm.toLowerCase()
    let filteredPosts = []
    if (searchTerm !== "") {
      posts.forEach(post => {
        let tags = post.node.frontmatter.tags
        tags.forEach(tag => {
          tag = tag.toLowerCase()
          if (tag.includes(searchTerm)) {
            filteredPosts.push(post)
          }
        })
      })
    }
    return (
      <div className='columns'>
        <div className='column is-8 is-offset-2 mainContent'>
          {
            passedProps.searchTerm !== "" ?
              <div>

                <h2>{filteredPosts.length} Posts tagged with "{passedProps.searchTerm}"</h2>
                <div className="containerGrid">
                  {filteredPosts
                    .map(({node: post}) => (
                      <div key={post.id} className="item">
                        <Post post={post} />
                      </div>
                    )
                    )}
                </div>
              </div>
              :
              null
          }
        </div>
      </div>
    )
  }

  likePosts = () => {

  }

  render() {
    return (
      <AdContext.Consumer>
        {props => (
          <Fragment>
            {props.searchTerm !== "" ?
              this.showSearch(props)
              :
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
            tags
          }
        }
      }
    }
  }
`
