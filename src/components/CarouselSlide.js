import React from 'react';
import Link from 'gatsby-link';

const CarouselSlide = (props) => (
  <Link to={props.post.fields.slug}>
    <img src={props.post.frontmatter.featuredImage} />
  </Link>
)

export default CarouselSlide