import React from 'react'

const Post = (post) => (
  <div>
    {console.log(post)}
    <img src={post.post.frontmatter.featuredImage} />
    <p style={{fontSize: '0.5em'}}>
      {/* <Link className="has-text-primary" to={slug}> */}
      {post.post.frontmatter.title}
      {/* </Link> */}
    </p>
    <p style={{fontSize: '0.4em'}}>
      {post.post.frontmatter.excerpt}
    </p>
  </div>
)

export default Post