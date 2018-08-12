import React from 'react';
import {Tile, Box, Title, Image, Media, MediaContent, Content, MediaLeft} from 'bloomer';

const LikePost = (props) => {
  console.log(props.likePosts[1])
  return (
    <Tile isAncestor>
      <Tile isSize={12} isVertical isParent>
        {props.likePosts.map(post => {
          return (
            <Tile isChild key={post.node.id} render={
              props => (
                <div style={{marginBottom: '15px'}}>
                  <div className="fill">
                    <img src={post.node.frontmatter.featuredImage} />
                  </div>
                  <span style={{fontSize: '.9vw'}}>
                    {post.node.frontmatter.title}
                  </span>
                </div>
              )
            } />
          )
        })
        }
      </Tile>
    </Tile>
  )
}

export default LikePost