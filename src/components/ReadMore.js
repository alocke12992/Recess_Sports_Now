import React from 'react';
import Link from 'gatsby-link';
import {Tile, Box, Title, Image, Media, MediaContent, Content, MediaLeft} from 'bloomer';

const ReadMore = (props) => {
  const post = props.post.node
  console.log(post)
  return (
    <React.Fragment>
      <Tile isChild render={
        props => (
          <Link to={post.fields.slug}>
            <div style={{marginBottom: '10px'}}>
              <div className="fill">
                <img src={post.frontmatter.featuredImage} />
              </div>
              <span style={{fontSize: '.9vw'}}>
                {post.frontmatter.title}
              </span>
            </div>
          </Link>
        )
      } />
    </React.Fragment>
  )
}

export default ReadMore