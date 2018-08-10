import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {AdContext} from '../components/AdContext';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import './all.sass';


class TemplateWrapper extends React.Component {
  state = {password: 'Playground2018', isAuthenticated: false, location: ''}

  toggleForm = () => {
    this.setState((state) => {
      return {isAuthenticated: !state.isAuthenticated}
    })
  }

  render() {
    console.log(this.props.location)
    const {children, data} = this.props
    const {edges: ads} = data.allMarkdownRemark
    let headerAd = ads.filter(ad => ad.node.frontmatter.templateKey === 'headerAd')
    let backgroundAd = ads.filter(ad => ad.node.frontmatter.templateKey === 'backgroundAd')
    if (this.state.isAuthenticated) {
      if (this.props.location.pathname === "/") {
        return (
          <Fragment>
            <Helmet title="Recess Sports Now" />
            <div style={{backgroundImage: `url(${backgroundAd[0].node.frontmatter.image})`, backgroundAttachment: 'fixed'}}>
              <Navbar headerAd={headerAd[0].node.frontmatter.image} />
              <AdContext.Provider value={ads}>
                <div style={{marginTop: '0px'}}>{children()}</div>
              </AdContext.Provider>
            </div>
          </Fragment>
        )
      } else {
        return (
          <Fragment>
            <Helmet title="Recess Sports Now" />
            <div>
              <Navbar headerAd={headerAd[0].node.frontmatter.image} />
              <AdContext.Provider value={ads}>
                <div style={{marginTop: '0px'}}>{children()}</div>
              </AdContext.Provider>
            </div>
          </Fragment>
        )
      }
    } else {
      return (
        <Login password={this.state.password} closeForm={this.toggleForm} />
      )
    }
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