import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {Grid} from 'semantic-ui-react';

import Navbar from '../components/Navbar'
import './all.sass'

class TemplateWrapper extends React.Component {
  render() {
    const {children, data} = this.props
    const {edges: ads} = data.allMarkdownRemark
    console.log(ads)
    return (
      <Grid columns={3}>
        <Grid.Column width={4}>

        </Grid.Column>
        <Grid.Column width={4}>
          <Helmet title="Home | Gatsby + Netlify CMS" />
          <Navbar headerAd={ads[2].node.frontmatter.image} />
          <div>{children()}</div>
        </Grid.Column>
        <Grid.Column width={4}>

        </Grid.Column>
      </Grid>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const adQuery = graphql`
  query AdQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "ad" } }}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            templateKey
            image
            link
          }
        }
      }
    }
  }
`