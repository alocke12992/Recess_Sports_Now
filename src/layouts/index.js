import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {AdContext} from '../components/AdContext';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import './all.sass';


class TemplateWrapper extends React.Component {
  state = {password: 'Playground2018', isAuthenticated: false}

  showWebsite = () => {
    const {children, data} = this.props
    const {edges: ads} = data.allMarkdownRemark
    const headerAd = ads.filter(ad => ad.node.frontmatter.templateKey === "headerAd")
    return (
      <section className="section" >
        <Helmet title="Recess Sports Now" />
        <div className="columns">
          <div className="column is-one-fifth" style={{background: "blue"}}>
          </div>
          <div className="column is-three-fifths">
            <Navbar headerAd={headerAd[0].node.frontmatter.image} />
            <AdContext.Provider value={ads.filter(ad => ad.node.frontmatter.templateKey !== "headerAd")}>
              <div>{children()}</div>
            </AdContext.Provider>
          </div>
          <div className="column is-one-fifth" style={{background: "blue"}}>
          </div>
        </div>
      </section>
    )
  }

  toggleForm = () => {
    this.setState((state) => {
      return {isAuthenticated: !state.isAuthenticated}
    })
  }


  render() {
    const {isAuthenticated, password} = this.state
    if (isAuthenticated) {
      return (
        <section className="section" >
          <Helmet title="Recess Sports Now" />
          {this.showWebsite()}
        </section>
      )
    } else {
      return (
        <section className="section">
          <Helmet title="Recess Sports Now" />
          <Login closeForm={this.toggleForm} password={password} />
        </section>
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