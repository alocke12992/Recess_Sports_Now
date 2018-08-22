import React, {Fragment} from 'react';
import Link from 'gatsby-link';
const Post = (post) => (
  <Link to={post.post.fields.slug}>
    <div className="fillImage">
      <img src={post.post.frontmatter.featuredImage} />
    </div>
    <h1 style={{fontSize: '12px', color: 'black', fontWeight: 'bold'}}>{post.post.frontmatter.title}</h1>
  </Link>
)

export default Post