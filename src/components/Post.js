import React, {Fragment} from 'react';
import Link from 'gatsby-link';
const Post = (post) => (
  <Fragment>
    {console.log(post)}
  <Link to={post.post.fields.slug}>
    <img src={post.post.frontmatter.featuredImage} />
  </Link>
  </Fragment>
)

export default Post