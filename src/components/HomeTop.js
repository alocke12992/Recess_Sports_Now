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
      <img src={props.ad[0].node.frontmatter.image} style={{height: '100%', width: '100%'}} />
    </div>
    <div className="homeTopSubscribe">
      <h1 style={{fontFamily: 'Roboto'}} className="mytextwithicon">Subscribe</h1>
      <ContactForm />
    </div>
  </div>
)

export default HomeTop