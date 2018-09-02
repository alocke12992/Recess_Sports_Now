import React from 'react';
import RsnLogo from '../img/rsn_logo.png';
import Search from './Search';
import NavMenu from './NavMenu';
import FixedNav from './FixedNav'
import Link from 'gatsby-link';
import {Icon} from 'bloomer';

class NavbarComponent extends React.Component {
  state = {showSearch: false}

  componentDidMount() {
    if (this.props.location === "/") {
      this.getScroll()
    }
    return
  }

  getScroll = () => {
    debugger
    window.addEventListener('scroll', () => {
      const navMenuNode = document.getElementById('navMenu').getClientRects()[0]
      this.props.setScroll(navMenuNode.top)
    })
  }

  showSearch = () => {
    this.setState((state) => {
      return {showSearch: !state.showSearch}
    })
  }

  render() {
    const {location} = this.state
    return (
      <div className="columns" style={{marginBottom: '0px'}} id="nav">
        <div className="column is-12">
          <div className="navWrapper">
            <figure className="image is-3by1" id="headerAd">
              <img src={this.props.headerAd} style={{height: '90px'}} id="logo" />
            </figure>
            <div className="columns" style={{paddingTop: '20px'}}>
              <div className='column is-6 is-offset-3' id="logoLaptop">
                <Link to="/" onClick={this.props.clearSearch}>
                  <figure className="image is-3by1">
                    <img src={RsnLogo} />
                  </figure>
                </Link>
              </div>
              <div className='column is-12 mobileNav' id="logoMobile">
                <div id="mobileMenu">
                  <div>
                    <Icon isSize='small' id="">
                      <span className="fas fa-bars" />
                    </Icon>
                  </div>
                  <div>
                    <Link to="/" onClick={this.props.clearSearch}>
                      <figure className="image is-3by1" style={{display: 'flex', justifyContent: 'center'}}>
                        <img src={RsnLogo} style={{height: '20%', width: '20%'}} />
                      </figure>
                    </Link>
                  </div>
                  <div onClick={() => this.showSearch()}>
                    <Icon isSize='small' id="searchIcon">
                      <span className="fa fa-search" />
                    </Icon>
                  </div>
                </div>
                {

                  this.state.showSearch ?
                    <div id="mobileSearch">
                      <Search getSearch={this.props.getSearch} />
                    </div>
                    :
                    null
                }
              </div>
            </div>
            <div className="columns" id="navMenu">
              <div className="column is-12">
                <NavMenu />
              </div>
            </div>
          </div>
        </div>
        {/* {
            location < 0 ?
              <div className="fixedNav">
                <FixedNav logo={RsnLogo} toggleSearch={this.props.toggleSearch} location={location} getSearch={this.props.getSearch} />
              </div>
              :
              null
          } */}
      </div>
    )
  }
}

export default NavbarComponent
