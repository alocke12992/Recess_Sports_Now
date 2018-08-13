import React, {Fragment} from 'react';
import Link from 'gatsby-link';
const Post = (post) => (
  <Link to={post.post.fields.slug}>
    <div className="fillImage">
      <img src={post.post.frontmatter.featuredImage} />
    </div>
    <h1 style={{fontSize: '.9vw', color: 'black', fontWeight: 'bold'}}>{post.post.frontmatter.title}</h1>
    <p style={{color: 'black', fontSize: '.8vw'}}>{post.post.excerpt}</p>
  </Link>
)

export default Post