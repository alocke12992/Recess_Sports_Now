import React from 'react';
import Link from 'gatsby-link';
import {kebabCase} from 'lodash';
import {Icon, Button, Navbar, NavbarStart, NavbarMenu, NavbarDropdown, NavbarItem} from 'bloomer';

const tags = [
  "ENTERTAINMENT",
  "BUSINESS",
  "TECH",
  "LIFESTYLE",
  "PODCAST",
  "ORIGINALS",
]

class NavMenu extends React.Component {

  render() {
    return (
      <Navbar>
        <NavbarMenu>
          <NavbarStart>
            <Link to="/">
              HOME
            </Link>
            <NavbarItem hasDropdown isHoverable>
              CATEGORIES
              <NavbarDropdown>
                {tags.map(tag => (
                  <NavbarItem><Link key={tag + 'tag'} to={`/tags/${kebabCase(tag)}/`}>{tag}</Link></NavbarItem>
                ))}
              </NavbarDropdown>
            </NavbarItem>
            <Link to="/contact">
              CONTACT
            </Link>
            <Button onClick={() => this.props.toggleSearch()}>
              <Icon isSize='small'>
                <span className="fa fa-search" />
              </Icon>
            </Button>
            <a href="https://www.linkedin.com/in/andrewmlocke/" rel="noopener noreferral" target="_blank">
              <Icon isSize='small'>
                <span className="fa fa-info-circle" />
              </Icon>
            </a>
            <a href="https://www.linkedin.com/in/andrewmlocke/" rel="noopener noreferral" target="_blank">
              <Icon isSize='small'>
                <span className="fa fa-facebook-f" />
              </Icon>
            </a>
            <a href="https://www.linkedin.com/in/andrewmlocke/" rel="noopener noreferral" target="_blank">
              <Icon isSize='small'>
                <span className="fa fa-twitter" />
              </Icon>
            </a>
            <a href="https://www.linkedin.com/in/andrewmlocke/" rel="noopener noreferral" target="_blank">
              <Icon isSize='small'>
                <span className="fa fa-instagram" />
              </Icon>
            </a>
            <a href="https://www.linkedin.com/in/andrewmlocke/" rel="noopener noreferral" target="_blank">
              <Icon isSize='small'>
                <span className="fa fa-youtube" />
              </Icon>
            </a>
          </NavbarStart>
        </NavbarMenu>
      </Navbar>
    )
  }
}

export default NavMenu;