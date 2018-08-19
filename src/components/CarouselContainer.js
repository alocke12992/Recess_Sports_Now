import React from 'react';
import Link from 'gatsby-link';
import Swiper from 'react-id-swiper';
import CarouselSlide from './CarouselSlide';

const CarouselContainer = (props) => {
  const posts = props.posts
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    loop: true,
  }

  return (
    <Swiper {...params}>
      {posts.map(({node: post}) => (
        <div key={post.id} className="carouselSlides">
          <CarouselSlide post={post} />
        </div>
      ))}
    </Swiper>
  )
}

export default CarouselContainer