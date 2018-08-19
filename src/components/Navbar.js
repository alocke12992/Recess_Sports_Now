import React from 'react';
import RsnLogo from '../img/splashLogo.png';
import Search from './Search';
import NavMenu from './NavMenu';
import FixedNav from './FixedNav'
import Link from 'gatsby-link';

class NavbarComponent extends React.Component {
  state = {location: null}
  componentDidMount() {
    this.getScroll()
  }

  getScroll = () => {
    window.addEventListener('scroll', () => {
      const navMenuNode = document.getElementById('navMenu').getClientRects()[0]
      this.setState({location: navMenuNode.top})
    })
  }

  render() {
    const {location} = this.state
    return (
      <div className="columns" style={{marginBottom: '0px'}} id="nav">
        <div className="column is-12">
          <div className="columns">
            <div className="column is-8 is-offset-2 navWrapper">
              <figure className="image is-3by1">
                <img src={this.props.headerAd} style={{height: '250px'}} id="logo" />
              </figure>
              <div className="columns" style={{paddingTop: '20px'}}>
                <div className='column is-one-third is-offset-4'>
                  <Link to="/">
                    <figure className="image is-3by1">
                      <img src={RsnLogo} />
                    </figure>
                  </Link>
                </div>
              </div>
              <div className="columns" id="navMenu">
                <div className="column is-12">
                  <NavMenu toggleSearch={this.props.toggleSearch} location={location} getSearch={this.props.getSearch} toggleSearch={this.props.toggleSearch} />
                </div>
              </div>
            </div>
          </div>
          {
            location < 0 ?
              <div className="fixedNav">
                <FixedNav logo={RsnLogo} toggleSearch={this.props.toggleSearch} location={location} />
              </div>
              :
              null
          }
        </div>
      </div>
    )
  }
}

export default NavbarComponent
