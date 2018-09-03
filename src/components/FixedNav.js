import React from 'react';
import Link from 'gatsby-link';
import {kebabCase} from 'lodash';
import Logo from '../img/rsnLogo.png';
import {Icon} from 'bloomer';
import MobileNav from './MobileNav';
import Search from './Search';

const tags = [
  "Entertainment",
  "Business",
  "Lifestyle",
  "Podcast",
  "RecessSportsTV"
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
            <Search getSearch={this.props.getSearch} />
          </div>
          <Icon isSize='small'>
            <span className="fa fa-search" />
          </Icon>
        </div>
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
        <a href="https://www.youtube.com/channel/UCqT7vtCF7kJNmUPR8BqZDQA" rel="noopener noreferral" target="_blank" className="navItem">
          <Icon isSize='small'>
            <span className="fab fa-youtube" />
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
          Contact
        </Link>
      </React.Fragment>
    )
  }

  render() {
    return (
      <div className="menuWrapper">
        <div className="navMenu">
          <Link to="/">
            <img src={Logo} className="navBarLogo" />
          </Link>
          {this.links()}
          {this.socialMedia()}
        </div>
        <MobileNav />
      </div>
    )
  }
}

export default FixedNav;