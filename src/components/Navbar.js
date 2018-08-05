import React from 'react';
import Link from 'gatsby-link';
import {kebabCase} from 'lodash';
import RsnLogo from '../img/splashLogo.png';
import styled from 'styled-components';
import FacebookLogo from '../img/facebook-icon.svg';
import Twitter from '../img/twitter-logo.svg';
import Youtube from '../img/youtube-logo.svg';
import Instagram from '../img/instagram-logo.svg';
import Info from '../img/info.svg';

const tags = [
  "ENTERTAINMENT",
  "BUSINESS",
  "TECH",
  "LIFESTYLE",
  "PODCAST",
  "ORIGINALS",
]

class Navbar extends React.Component {

  render() {
    return (
      <div className="columns" style={{marginBottom: '0px'}}>
        <div className="column is-8 is-offset-2 navWrapper">
          <figure className="image is-3by1">
            <img src={this.props.headerAd} style={{height: '250px'}} />
          </figure>
          <div className="columns" style={{paddingTop: '20px'}}>
            <div className='column is-one-third is-offset-4'>
              <figure className="image is-3by1">
                <img src={RsnLogo} />
              </figure>
            </div>
          </div>
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <Link to="/">
              HOME
            </Link>
            {tags.map(tag => (
              <Link key={tag + 'tag'} to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
            ))}
            <Link to="/contact">
              CONTACT
            </Link>
            <a href="https://www.linkedin.com/in/andrewmlocke/" rel="noopener noreferral" target="_blank">
              <IconImg src={Info} />
            </a>
            <a href="https://www.linkedin.com/in/andrewmlocke/" rel="noopener noreferral" target="_blank">
              <IconImg src={FacebookLogo} />
            </a>
            <a href="https://www.linkedin.com/in/andrewmlocke/" rel="noopener noreferral" target="_blank">
              <IconImg src={Twitter} />
            </a>
            <a href="https://www.linkedin.com/in/andrewmlocke/" rel="noopener noreferral" target="_blank">
              <IconImg src={Instagram} />
            </a>
            <a href="https://www.linkedin.com/in/andrewmlocke/" rel="noopener noreferral" target="_blank">
              <IconImg src={Youtube} />
            </a>
          </nav>
        </div>
      </div>
    )
  }
}

const IconImg = styled.img`
  height: auto;
  width: 100%;
`

export default Navbar
