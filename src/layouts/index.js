import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import RsnLogo from '../img/rsn_logo.png';
import {AdContext} from '../components/AdContext';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import {navigateTo} from 'gatsby-link';
import './all.sass';
import 'font-awesome/css/font-awesome.css';
import FixedNav from '../components/FixedNav';


class TemplateWrapper extends React.Component {
  state = {password: 'Playground2018', isAuthenticated: false, searchTerm: '', showSearch: false, scroll, }

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

  setScroll = (location) => {
    this.setState({scroll: location})
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
          {this.state.scroll < 0 ?
            <div className="columns">
              <div className="column is-12">
                <div className="fixedNav">
                  <FixedNav logo={RsnLogo} toggleSearch={this.toggleSearch} location={this.state.scrollLocation} getSearch={this.getSearch} />
                </div>
              </div>
            </div>
            :
            null
          }
          <div className="columns">
            <div className="column is-2" style={{backgroundImage: `url(${backgroundAd[0].node.frontmatter.image})`, backgroundAttachment: 'fixed'}}></div>
            <div className="column is-8">
              <Navbar
                headerAd={headerAd[0].node.frontmatter.image}
                getSearch={this.getSearch}
                clearSearch={this.clearSearch}
                location={this.props.location.pathname}
                setScroll={this.setScroll}
              />
              <AdContext.Provider value={props}>
                <div style={{marginTop: '0px'}}>{children()}</div>
              </AdContext.Provider>
            </div>
            <div className="column is-2" style={{backgroundImage: `url(${backgroundAd[0].node.frontmatter.image})`, backgroundAttachment: 'fixed'}}></div>
          </div>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <Helmet title="Recess Sports Now" />
          <div className="columns">
            <div className="column is-12">
              <div className="fixedNav">
                <FixedNav logo={RsnLogo} toggleSearch={this.toggleSearch} getSearch={this.getSearch} />
              </div>
            </div>
          </div>
          <div className="mainWrapper">
            <AdContext.Provider value={props}>
              <div style={{marginTop: '75px'}}>{children()}</div>
            </AdContext.Provider>
          </div>
          <div id="navMenu"></div>
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