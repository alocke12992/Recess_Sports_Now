import React, {Fragment} from 'react';
import Link from 'gatsby-link';
const Post = (props) => (
  <Link to={props.post.fields.slug}>
    <div className="carouselSlides" style={{width: '100%', height: '100%', objectFit: 'cover'}}>
      <img src={props.post.frontmatter.featuredImage} style={{height: '100%', width: '100%'}} />
      <div className="carouselTextContainer">
        <div className="carouselText">
          <h1>{props.post.frontmatter.title}</h1>
          <p className="carouselDescription">
            {props.post.frontmatter.description}
          </p>
        </div>
      </div>
    </div>
  </Link>
)

export default Post