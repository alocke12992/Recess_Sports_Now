import React from 'react';
import RsnLogo from '../img/splashLogo.png';
import Search from './Search';
import NavMenu from './NavMenu';

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
                  <figure className="image is-3by1">
                    <img src={RsnLogo} />
                  </figure>
                </div>
              </div>
              <div className="columns" id="navMenu">
                {
                  location >= 0 ?
                    <div className="column is-10 is-offset-1">
                      <NavMenu toggleSearch={this.props.toggleSearch} location={location} />
                      {
                        this.props.showSearch ?
                          <Search getSearch={this.props.getSearch} toggleSearch={this.props.toggleSearch} />
                          :
                          null
                      }
                    </div>
                    :
                    null
                }
              </div>
            </div>
          </div>
          {
            location < 1 ?
              <div className="fixedNav">
                <NavMenu logo={RsnLogo} toggleSearch={this.props.toggleSearch} location={location} />
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
