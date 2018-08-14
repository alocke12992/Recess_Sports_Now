import React from 'react';
import Link from 'gatsby-link';

const CarouselSlide = (props) => (
  <Link to={props.post.fields.slug}>
    <img src={props.post.frontmatter.featuredImage} style={{height: '100%', width: '100%'}} />
  </Link>
)

export default CarouselSlide