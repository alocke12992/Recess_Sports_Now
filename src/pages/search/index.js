import React from 'react'
import {kebabCase} from 'lodash'
import Helmet from 'react-helmet'
import {withPrefix} from 'gatsby-link'
import Post from '../../components/Post';
import {AdContext} from '../../components/AdContext';
import SearchResults from '../../components/SearchResults';

class SearchPage extends React.Component {

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
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div
              className="column is-8 is-offset-2"
              style={{marginBottom: '6rem'}}
            >
              {
                passedProps.searchTerm !== "" ?
                  <div>
                    <h2 className="tagTitle">{filteredPosts.length} Posts tagged with "{passedProps.searchTerm}"</h2>
                    <SearchResults posts={filteredPosts} />
                  </div>
                  :
                  null
              }
            </div>
          </div>
        </div></section>
    )
  }

  render() {
    return (
      <AdContext.Consumer>
        {props => (
          <React.Fragment>
            {
              this.showSearch(props)
            }
          </React.Fragment>
        )}
      </AdContext.Consumer>
    )
  }
}

export default SearchPage

export const searchPageQuery = graphql`
  query SearchQuery {
    site {
      siteMetadata {
        title
      }
    }
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
            tags
            description
          }
        }
      }
    }
  }
`