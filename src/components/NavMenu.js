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

  render() {
    return (
      <Navbar>
        {
          this.props.location < 1 ?
            <NavbarBrand>
              <NavbarItem>
                <Link to="/">
                  <img src={this.props.logo} style={{height: '100px', width: 'auto'}} />
                </Link>
              </NavbarItem>
              <NavbarItem isHidden='desktop'>
                <Icon className='fa fa-github' />
              </NavbarItem>
              <NavbarItem isHidden='desktop'>
                <Icon className='fa fa-twitter' style={{color: '#55acee'}} />
              </NavbarItem>
              <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
            </NavbarBrand>
            :
            null
        }
        <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
        <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
          <NavbarStart>
            {tags.map(tag => (
              <Link key={tag + 'tag'} to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
            ))}
            <Link to="/contact">
              CONTACT
            </Link>
            {this.props.location < 1 ?
              <React.Fragment>
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
              </React.Fragment>
              :
              null
            }
          </NavbarStart>
        </NavbarMenu>
      </Navbar>
    )
  }
}

export default NavMenu;