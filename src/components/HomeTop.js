import React from 'react';
import {Image} from 'semantic-ui-react';
import CarouselContainer from './CarouselContainer';
import ContactForm from './ContactForm';

const HomeTop = (props) => (
  <div className="columns">
    <div className="column is-two-thirds">
      <CarouselContainer posts={props.posts} />
    </div>
    <div className="column">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-12">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child">
              <Image src={props.ad[0].node.frontmatter.image} />
            </article>
            <article className="tile is-child">
              <h1 style={{fontFamily: 'Roboto'}}>Subscribe</h1>
              <ContactForm />
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HomeTop