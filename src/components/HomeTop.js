import React from 'react';
import {Grid, Image} from 'semantic-ui-react';
import CarouselContainer from './CarouselContainer';
import ContactForm from './ContactForm';

const HomeTop = (props) => (
  <Grid>
    <Grid.Column width={6}>
      <CarouselContainer posts={props.posts} />
    </Grid.Column>
    <Grid.Column width={6}>
      <Grid.Row>
        <Image src={props.ad[0].node.frontmatter.image} />
      </Grid.Row>
      <Grid.Row>
        <ContactForm />
      </Grid.Row>
    </Grid.Column>
  </Grid>
)

export default HomeTop