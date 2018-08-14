import React from 'react';
import Link from 'gatsby-link';
import Swiper from 'react-id-swiper';
import CarouselSlide from './CarouselSlide';

class CarouselContainer extends React.Component {
  render() {
    const posts = this.props.posts
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
      spaceBetween: 30
    }
    return (
      <Swiper {...params}>
        {posts.map(({node: post}) => (
          <div>
            <Link to={post.fields.slug}>
              <img src={post.frontmatter.featuredImage} style={{height: '100%', width: '100%'}} />
            </Link>
          </div>
        ))}
      </Swiper>
    )
  }
}

export default CarouselContainer