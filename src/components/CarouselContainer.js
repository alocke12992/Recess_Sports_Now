import React from 'react';
import Link from 'gatsby-link';
import Carousel from 'nuka-carousel';
import CarouselSlide from './CarouselSlide';

const CarouselContainer = (props) => {
  const posts = props.posts
  console.log(posts)
  return (
    <Carousel 
      cellAlign="center" 
      wrapAround={true}
      swiping={true}
      autoplay={true}
      width="100%"
    >
      {posts.map(({node: post}) => (
        <CarouselSlide post={post} key={post.id}/>
      ))}
    </Carousel>
  )
}

export default CarouselContainer