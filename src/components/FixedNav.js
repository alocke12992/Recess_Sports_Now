import React from 'react';
import Link from 'gatsby-link';
import {kebabCase} from 'lodash';
import {Icon, Button, Navbar, NavbarStart, NavbarMenu, NavbarBrand, NavbarItem, NavbarBurger} from 'bloomer';
import Search from './Search';

const tags = [
  "ENTERTAINMENT",
  "BUSINESS",
  "TECH",
  "LIFESTYLE",
  "PODCASTS",
  "ORIGINALS"
]

class FixedNav extends React.Component {
  state = {isActive: false, searchHover: false}

  onClickNav = () => {
    this.setState((state => {
      return {isActive: !state.isActive}
    })
    )
  }

  toggleSearch = () => {
    const searchIcon = document.getElementById("searchBar")
    if (searchIcon.style["display"] === "block") {
      searchIcon.style["display"] = "none"
    } else {
      searchIcon.style["display"] = "block"
    }
  }

  socialMedia = () => {

    return (
      <React.Fragment>
        <div id="searchIcon" onMouseEnter={this.toggleSearch} onMouseLeave={this.toggleSearch}>
          <div id="searchBar" >
            <Search />
          </div>
          <Icon isSize='small'>
            <span className="fa fa-search" />
          </Icon>
        </div>
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
      <div className="menuWrapper">
        <Link to="/">
          <img src={this.props.logo} style={{width: 'auto', height: '50px', padding: '10px 15px'}} className="navBarLogo" />
        </Link>
        <div className="navMenu">
          {this.links()}
          {this.socialMedia()}
        </div>
      </div>
    )
  }
}

export default FixedNav;