import React from 'react';
import {Icon} from 'bloomer';
import CarouselContainer from './CarouselContainer';
import ContactForm from './ContactForm';

const HomeTop = (props) => (
  <div className="homeTop">
    <div className="carousel">
      <CarouselContainer posts={props.posts} />
    </div>
    <div className="homeTopAd">
      <a href={props.ad[0].node.frontmatter.link} target="_blank" rel="noopener noreferrer">
        <img src={props.ad[0].node.frontmatter.image} style={{height: '100%', width: '100%'}} alt={props.ad[0].node.frontmatter.title} />
      </a>
    </div>
    <div className="homeTopSubscribe">
      <h1 style={{fontFamily: 'Roboto'}} className="mytextwithicon">Subscribe</h1>
      <ContactForm />
    </div>
  </div>
)

export default HomeTop