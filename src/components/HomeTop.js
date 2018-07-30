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
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-12">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child">
              <Image src={props.ad[0].node.frontmatter.image} />
            </article>
            <article class="tile is-child box">
              <h1>Subscribe</h1>
              <ContactForm />
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 
)

export default HomeTop