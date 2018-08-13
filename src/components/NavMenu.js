import React from 'react';
import Link from 'gatsby-link';
import {kebabCase} from 'lodash';
import {Icon, Button, Navbar, NavbarStart, NavbarMenu, NavbarDropdown, NavbarItem, NavbarBurger} from 'bloomer';

const tags = [
  "ENTERTAINMENT",
  "BUSINESS",
  "TECH",
  "LIFESTYLE",
  "PODCAST",
  "ORIGINALS",
]

class NavMenu extends React.Component {
  state = {isActive: false}

  onClickNav = () => {
    this.setState((state => {
      return {isActive: !state.isActive}
    })
    )

  }

  render() {
    return (
      <Navbar>
        <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
        <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
          <NavbarStart>
            <Link to="/">
              HOME
            </Link>
            <NavbarItem hasDropdown isHoverable>
              CATEGORIES
              <NavbarDropdown>
                {tags.map(tag => (
                  <NavbarItem key={tag + 'tag'}><Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link></NavbarItem>
                ))}
              </NavbarDropdown>
            </NavbarItem>
            <Link to="/contact">
              CONTACT
            </Link>
            <Button onClick={() => this.props.toggleSearch()} className="searchButton">
              <Icon isSize='small'>
                <span className="fa fa-search" />
              </Icon>
            </Button>
            <a rel="noopener noreferral" target="_blank">
              <Icon isSize='small'>
                <span className="fa fa-info-circle" />
              </Icon>
            </a>
            <a href="https://www.facebook.com/pg/RecessSports/posts/?ref=page_internal" rel="noopener noreferral" target="_blank">
              <Icon isSize='small'>
                <span className="fa fa-facebook-f" />
              </Icon>
            </a>
            <a href="https://twitter.com/Recesssportsnow" rel="noopener noreferral" target="_blank">
              <Icon isSize='small'>
                <span className="fa fa-twitter" />
              </Icon>
            </a>
            <a href="https://www.instagram.com/recesssportsnow/" rel="noopener noreferral" target="_blank">
              <Icon isSize='small'>
                <span className="fa fa-instagram" />
              </Icon>
            </a>
          </NavbarStart>
        </NavbarMenu>
      </Navbar>
    )
  }
}

export default NavMenu;