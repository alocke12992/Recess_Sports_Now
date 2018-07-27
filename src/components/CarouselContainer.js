import React from 'react';
import Link from 'gatsby-link';
import Carousel from 'nuka-carousel';

const CarouselContainer = (props) => {
  const posts = props.posts
  console.log(posts)
  return (
    <Carousel cellAlign="center" wrapAround={true}>
      {posts.map(({node: post}) => (
        <Link to={post.fields.slug}>
          <img key={post.id} src={post.frontmatter.featuredImage} />
        </Link>
      ))}
    </Carousel>
  )
}

export default CarouselContainer