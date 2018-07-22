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
import {Menu, Image, Grid} from 'semantic-ui-react';

const tags = [
  "Entertainment",
  "Business",
  "Tech",
  "Lifestyle",
  "podcast",
  "Originals",
]

class Navbar extends React.Component {

  render() {
    return (
      <Grid centered>
        <Grid.Row centered>
          <div className='fill'>
            <img src={this.props.headerAd} />
          </div>
        </Grid.Row>
        <Grid.Row>
          <Splash>
            <Logo src={RsnLogo} />
          </Splash>
        </Grid.Row>
        <Grid.Row centered>
          <Center textAlign='center'>
            <Nav>
              <Link to="/" className="navbar-item">
                Home
              </Link>
              {tags.map(tag => (
                <Link key={tag + `tag`} className="navbar-item" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              ))}
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <a className="navbar-item" href="https://www.linkedin.com/in/andrewmlocke/" rel="noopener noreferral" target="_blank">
                <IconImg src={Info} />
              </a>
              <a className="navbar-item" href="https://www.linkedin.com/in/andrewmlocke/" rel="noopener noreferral" target="_blank">
                <IconImg src={FacebookLogo} />
              </a>
              <a className="navbar-item" href="https://www.linkedin.com/in/andrewmlocke/" rel="noopener noreferral" target="_blank">
                <IconImg src={Twitter} />
              </a>
              <a className="navbar-item" href="https://www.linkedin.com/in/andrewmlocke/" rel="noopener noreferral" target="_blank">
                <IconImg src={Instagram} />
              </a>
              <a className="navbar-item" href="https://www.linkedin.com/in/andrewmlocke/" rel="noopener noreferral" target="_blank">
                <IconImg src={Youtube} />
              </a>
            </Nav>
          </Center>
        </Grid.Row>
      </Grid>
    )
  }
}

const Logo = styled(Image)`
      height: 200px !important;
      margin-bottom: 15px !important;
`

const IconImg = styled.img`
  height: 21px;
  width: 21px;
`

const Center = styled(Grid.Column)`
  display: flex !important;
  justify-content: center !important;
  
`
const Splash = styled(Center)`
      margin-bottom: -45px !important;
`

const Nav = styled(Menu)`
  display: flex !important;
  justify-content: space-around !important;
  width: 80% !important;
  color: #333;
  font-size: 11px;
  line-height: 19px;
`

export default Navbar
