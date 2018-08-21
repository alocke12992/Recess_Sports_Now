import React from 'react';
import RsnLogo from '../img/splashLogo.png';
import Search from './Search';
import NavMenu from './NavMenu';
import FixedNav from './FixedNav'
import Link from 'gatsby-link';
import {Icon} from 'bloomer';

class NavbarComponent extends React.Component {
  state = {location: null, showSearch: false}
  componentDidMount() {
    this.getScroll()
  }

  getScroll = () => {
    window.addEventListener('scroll', () => {
      const navMenuNode = document.getElementById('navMenu').getClientRects()[0]
      this.setState({location: navMenuNode.top})
    })
  }

  showSearch = () => {
    this.setState((state) => {
      return {showSearch: !state.showSearch}
    })
  }

  render() {
    const {location} = this.state
    if (window.location.pathname === "/") {
      return (
        <div className="columns" style={{marginBottom: '0px'}} id="nav">
          <div className="column is-12">
            <div className="columns">
              <div className="column is-8 is-offset-2 navWrapper">
                <figure className="image is-3by1" id="headerAd">
                  <img src={this.props.headerAd} style={{height: '250px'}} id="logo" />
                </figure>
                <div className="columns" style={{paddingTop: '20px'}}>
                  <div className='column is-one-third is-offset-4' id="logoLaptop">
                    <Link to="/" onClick={this.props.clearSearch}>
                      <figure className="image is-3by1">
                        <img src={RsnLogo} />
                      </figure>
                    </Link>
                  </div>
                  <div className='column is-12 mobileNav' id="logoMobile">
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
                    {

                      this.state.showSearch ?
                        <div>
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
            {
              location < 0 ?
                <div className="fixedNav">
                  <FixedNav logo={RsnLogo} toggleSearch={this.props.toggleSearch} location={location} getSearch={this.props.getSearch} />
                </div>
                :
                null
            }
          </div>
        </div>
      )
    } else {
      return (
        <div className="fixedNav" id="navMenu" style={{marginBottom: '25px'}}>
          <FixedNav logo={RsnLogo} toggleSearch={this.props.toggleSearch} location={location} getSearch={this.props.getSearch} />
        </div>
      )
    }
  }
}

export default NavbarComponent
