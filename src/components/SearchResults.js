import React from 'react';
import Link from 'gatsby-link'

const SearchResults = (props) => {
  return (
    props.posts.map(post => {
      return (
        <Link to={post.node.fields.slug} key={post.node.fields.slug}>
          <div className="columns">
            <div className="column is-6" style={{display: 'flex', alignItems: 'center'}}>
              <figure className="image is-5by3" style={{height: '100%'}}>
                <img src={post.node.frontmatter.featuredImage} style={{height: '100%', objectFit: 'cover'}} />
              </figure>
            </div>
            <div className="column is-6">
              {props.tag ? <div id="tagName">{props.tag}</div> : null}
              <h3 id="postList">{post.node.frontmatter.title}</h3>
              <p style={{color: '#454545'}}>{post.node.frontmatter.description ? `${post.node.frontmatter.description.substring(0, 100)}...` : null}</p>
            </div>
          </div>
        </Link>
      )
    })
  )
}

export default SearchResults