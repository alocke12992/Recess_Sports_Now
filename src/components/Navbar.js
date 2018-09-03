import React from 'react';
import RsnLogo from '../img/rsnLogo.png';
import Search from './Search';
import NavMenu from './NavMenu';
import FixedNav from './FixedNav'
import Link from 'gatsby-link';
import {Icon} from 'bloomer';
import MobileNav from './MobileNav';


class NavbarComponent extends React.Component {
  state = {showSearch: false}

  componentDidMount() {
    if (this.props.location === "/") {
      this.getScroll()
    }
    return
  }

  getScroll = () => {
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
            <a href={this.props.headerAd.link} target="_blank" rel="noopener noreferrer">
              <figure className="image is-3by1" id="headerAd">
                <img src={this.props.headerAd.image} style={{height: '90px'}} id="logo" alt={this.props.headerAd.title} />
              </figure>
            </a>
            <div className="columns" style={{paddingTop: '20px'}}>
              <div className='column is-6 is-offset-3' id="logoLaptop">
                <Link to="/" onClick={this.props.clearSearch}>
                  <figure className="image is-3by1">
                    <img src={RsnLogo} />
                  </figure>
                </Link>
              </div>
              <MobileNav getSearch={this.props.getSearch} clearSearch={this.props.clearSearch} />
            </div>
            <div className="columns" id="navMenu">
              <div className="column is-12">
                <NavMenu getSearch={this.props.getSearch} />
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
