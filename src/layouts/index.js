import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

class TemplateWrapper extends React.Component {
  render() {
    const {children, data} = this.props
    const {edges: ads} = data.allMarkdownRemark
    console.log(ads)
    return (
      <div>
        <Helmet title="Home | Gatsby + Netlify CMS" />
        <img src={ads[0].node.frontmatter.backgroundAd} />
        <Navbar />
        <div>{children()}</div>
      </div>
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
      filter: { frontmatter: { templateKey: { eq: "ads" } }}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            templateKey
            backgroundAd
          }
        }
      }
    }
  }
`