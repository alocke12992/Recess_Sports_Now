import React from 'react';
import Link from 'gatsby-link';
import {kebabCase} from 'lodash';
import {Icon} from 'bloomer';
import Search from './Search';

const tags = [
  "Entertainment",
  "Business",
  "Lifestyle",
  "Podcast",
  "RecessSportsTv"
]

class NavMenu extends React.Component {
  state = {isActive: false, searchHover: false}

  onClickNav = () => {
    this.setState((state => {
      return {isActive: !state.isActive}
    })
    )
  }

  toggleSearch = () => {
    const searchIcon = document.getElementById("mainSearchBar")
    if (searchIcon.style["display"] === "block") {
      searchIcon.style["display"] = "none"
    } else {
      searchIcon.style["display"] = "block"
    }
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
        <div id="searchIcon" onMouseEnter={this.toggleSearch} onMouseLeave={this.toggleSearch}>
          <div id="mainSearchBar" >
            <Search getSearch={this.props.getSearch} />
          </div>
          <Icon isSize='small'>
            <span className="fa fa-search" />
          </Icon>
        </div>
      </React.Fragment>
    )
  }

  render() {
    return (
      <div className="navBar">
        <div className="navMenu">
          {this.links()}
        </div>
      </div>
    )
  }
}

export default NavMenu;