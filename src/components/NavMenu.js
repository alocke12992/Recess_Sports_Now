import React from 'react';
import Link from 'gatsby-link';
import {kebabCase} from 'lodash';
import {Icon, Button, Navbar, NavbarStart, NavbarMenu, NavbarBrand, NavbarItem, NavbarBurger} from 'bloomer';

const tags = [
  "ENTERTAINMENT",
  "BUSINESS",
  "TECH",
  "LIFESTYLE",
  "PODCASTS",
  "ORIGINALS"
]

class NavMenu extends React.Component {
  state = {isActive: false}

  onClickNav = () => {
    this.setState((state => {
      return {isActive: !state.isActive}
    })
    )
  }

  socialMedia = () => {
    return (
      <React.Fragment>
        <Button onClick={() => this.props.toggleSearch()} className="searchButton navItem">
          <Icon isSize='small'>
            <span className="fa fa-search" />
          </Icon>
        </Button>
        <a rel="noopener noreferral" target="_blank" className="navItem">
          <Icon isSize='small'>
            <span className="fa fa-info-circle" />
          </Icon>
        </a>
        <a href="https://www.facebook.com/pg/RecessSports/posts/?ref=page_internal" rel="noopener noreferral" target="_blank" className="navItem">
          <Icon isSize='small'>
            <span className="fa fa-facebook-f" />
          </Icon>
        </a>
        <a href="https://twitter.com/Recesssportsnow" rel="noopener noreferral" target="_blank" className="navItem">
          <Icon isSize='small'>
            <span className="fa fa-twitter" />
          </Icon>
        </a>
        <a href="https://www.instagram.com/recesssportsnow/" rel="noopener noreferral" target="_blank" className="navItem">
          <Icon isSize='small'>
            <span className="fa fa-instagram" />
          </Icon>
        </a>
      </React.Fragment>
    )
  }

  links = () => {
    return (
      <React.Fragment>
        {
          tags.map(tag => (
            <Link className="navItem" key={tag + 'tag'} to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
          ))
        }
        <Link to="/contact" className="navItem">
          CONTACT
        </Link >
      </React.Fragment>
    )
  }

  render() {
    return (
      <div className="navBar">
        {
          this.props.location < 0 ?
            <NavbarBrand>
              <NavbarItem>
                <Link to="/">
                  <img src={this.props.logo} style={{height: '100px', width: 'auto'}} />
                </Link>
              </NavbarItem>
            </NavbarBrand>
            :
            null
        }
        <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
        <div className="navMenu">
          {this.links()}
          {this.props.location < 0 ?
            this.socialMedia()
            :
            null
          }
        </div>
      </div>
    )
  }
}

export default NavMenu;