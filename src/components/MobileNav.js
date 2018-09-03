import HamburgerMenu from 'react-hamburger-menu'
import React from 'react';
import RsnLogo from '../img/rsnLogo.png';
import Search from './Search';
import {kebabCase} from 'lodash';
import Link from 'gatsby-link';
import {
  Icon, 
  Navbar, 
  NavbarBrand, 
  NavbarBurger, 
  NavbarItem, 
  NavbarMenu, 
  NavbarStart, 
  NavbarEnd,
  Button,
  Field,
  Control
} from 'bloomer';

const tags = [
  "Entertainment",
  "Business",
  "Lifestyle",
  "Podcast",
  "RecessSportsTV"
]

class MobileNav extends React.Component {
  state = {isActive: false, showSearch: false}

  onClickNav = () => {
    this.setState((state) => {
      return {isActive: !state.isActive}
    });
  }

  showSearch = () => {
    this.setState((state) => {
      return {showSearch: !state.showSearch}
    })
  }

  render() {
    return (
      <div className='column is-12 mobileNav' id="logoMobile">
      <Navbar style={{ width: '100%', margin: '0' }}>
        <NavbarBrand>
          <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav}/>
          <NavbarItem>
            <Link to="/">
              <img src={RsnLogo}/>
            </Link>
          </NavbarItem>
          <NavbarItem>
              <div onClick={() => this.showSearch()}>
                <Icon isSize='small' id="searchIcon">
                  <span className="fa fa-search" />
                </Icon>
              </div>
          </NavbarItem>
        </NavbarBrand>
        <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
          <NavbarStart>
              <NavbarItem><Link to="/">Home</Link></NavbarItem>
              {
                tags.map(tag => (
                  <NavbarItem key={tag + 'tag'}>
                    <Link className="navItem" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </NavbarItem>
                ))
              }
            <NavbarItem>
              <Link to="/contact" className="navItem">
                Contact
              </Link>
            </NavbarItem>
          </NavbarStart>
        <NavbarEnd>
          <NavbarItem>
            <Field isGrouped>
              <Control>
                <Button id="twitter" data-social-network="Twitter" data-social-action="tweet"
                data-social-target="http://bloomer.js.org" target="_blank" href="https://twitter.com/intent/tweet?text=bloomer:
                a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark">
                    <Icon className="fa fa-twitter" />
                    <span>Tweet</span>
                </Button>
              </Control>
            </Field>
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
          {

            this.state.showSearch ?
              <div id="mobileSearch">
                <Search getSearch={this.props.getSearch} />
              </div>
              :
              null
          }
    </Navbar>
      </div>
    )
  }
}


export default MobileNav