import React from 'react';
import {Grid} from 'semantic-ui-react';
import CarouselContainer from './CarouselContainer';

const HomeTop = (props) => (
  <Grid>
    <Grid.Column>

    </Grid.Column>
    <Grid.Column>
      <Grid.Row>
        <CarouselContainer posts={props.posts} />
      </Grid.Row>
      <Grid.Row>
      </Grid.Row>
    </Grid.Column>
  </Grid>
)

export default HomeTop