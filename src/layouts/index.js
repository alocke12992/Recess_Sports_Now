import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {AdContext} from '../components/AdContext';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import './all.sass';


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
    const headerAd = ads.filter(ad => ad.node.frontmatter.templateKey === 'headerAd')
    return (
      <Fragment>
        <Helmet title="Recess Sports Now" />
        <section className="section navTop">
          <Navbar headerAd={headerAd[0].node.frontmatter.image} />
        </section>
        <AdContext.Provider value={ads}>
          <div>{children()}</div>
        </AdContext.Provider>
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