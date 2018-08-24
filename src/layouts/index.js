import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {AdContext} from '../components/AdContext';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import {navigateTo} from 'gatsby-link';
import './all.sass';
import 'font-awesome/css/font-awesome.css'


class TemplateWrapper extends React.Component {
  state = {password: 'Playground2018', isAuthenticated: false, searchTerm: '', showSearch: false}

  toggleForm = () => {
    this.setState((state) => {
      return {isAuthenticated: !state.isAuthenticated}
    })
  }

  getSearch = (term) => {
    this.setState({searchTerm: term})
    navigateTo(`/search/${term}`)
  }

  clearSearch = () => {
    this.setState({searchTerm: ''})
  }

  share = () => {
    window.FB.ui({
      method: 'share',
      href: 'https://developers.facebook.com/docs/'
    }, function (response) {});
  }

  render() {
    const {children, data} = this.props
    const {edges: ads} = data.allMarkdownRemark
    let headerAd = ads.filter(ad => ad.node.frontmatter.templateKey === 'headerAd')
    let backgroundAd = ads.filter(ad => ad.node.frontmatter.templateKey === 'backgroundAd')
    let props = {ads: ads, searchTerm: this.state.searchTerm, showSearch: this.state.showSearch}

    // if (this.state.isAuthenticated) {
    if (this.props.location.pathname === "/") {
      return (
        <Fragment>
          <Helmet title="Recess Sports Now" />
          <div style={{backgroundImage: `url(${backgroundAd[0].node.frontmatter.image})`, backgroundAttachment: 'fixed'}} className="mainWrapper">
            {this.share}
            <Navbar headerAd={headerAd[0].node.frontmatter.image} getSearch={this.getSearch} clearSearch={this.clearSearch} location={this.props.location.pathname} />
            <AdContext.Provider value={props}>
              <div style={{marginTop: '0px'}}>{children()}</div>
            </AdContext.Provider>
          </div>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <Helmet title="Recess Sports Now" />
          <div className="mainWrapper">
            <Navbar headerAd={headerAd[0].node.frontmatter.image} getSearch={this.getSearch} clearSearch={this.clearSearch} location={this.props.location.pathname} />
            <AdContext.Provider value={props}>
              <div style={{marginTop: '75px'}}>{children()}</div>
            </AdContext.Provider>
          </div>
        </Fragment>
      )
    }
    // } else {
    //   return (
    //     <Login password={this.state.password} closeForm={this.toggleForm} />
    //   )
    // }
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