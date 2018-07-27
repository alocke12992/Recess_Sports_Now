import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {Grid} from 'semantic-ui-react';
import {AdContext} from '../components/AdContext'

import Navbar from '../components/Navbar'
import './all.sass'


class TemplateWrapper extends React.Component {
  render() {
    const {children, data} = this.props
    const {edges: ads} = data.allMarkdownRemark
    const headerAd = ads.filter(ad => ad.node.frontmatter.templateKey === "headerAd")
    return (
      <div className="wrapper">
        <Helmet title="Home | Gatsby + Netlify CMS" />
        <div className="content">
          <div className="columns">
            <div className="main">
              <Navbar headerAd={headerAd[0].node.frontmatter.image} />
              <AdContext.Provider value={ads.filter(ad => ad.node.frontmatter.templateKey !== "headerAd")}>
                <div>{children()}</div>
              </AdContext.Provider>
            </div>
            <aside className="sidebar-first">
              Content
            </aside>
            <aside className="sidebar-second">
              Content
            </aside>
          </div>
        </div> 
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