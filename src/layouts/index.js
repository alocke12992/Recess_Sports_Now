import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {AdContext} from '../components/AdContext';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import './all.sass';
import {consolidateStreamedStyles} from '../../node_modules/styled-components';


class TemplateWrapper extends React.Component {
  state = {password: 'Playground2018', isAuthenticated: false}

  toggleForm = () => {
    this.setState((state) => {
      return {isAuthenticated: !state.isAuthenticated}
    })
  }

  render() {
    const {children, data} = this.props
    const {edges: ads} = data.allMarkdownRemark
    let headerAd = ads.filter(ad => ad.node.frontmatter.templateKey === 'headerAd')
    // let backgroundAd = ads[0].node.frontmatter.templateKey === "backgroundAd"
    return (
      <Fragment>
        <Helmet title="Recess Sports Now" />
        <div style={{backgroundImage: `url(${ads[0].node.frontmatter.image})`, backgroundAttachment: 'fixed'}}>
          <Navbar headerAd={headerAd[0].node.frontmatter.image} />
          <AdContext.Provider value={ads}>
            <div style={{marginTop: '0px'}}>{children()}</div>
          </AdContext.Provider>
        </div>
      </Fragment>
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