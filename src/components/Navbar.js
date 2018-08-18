import React from 'react';
import RsnLogo from '../img/splashLogo.png';
import Search from './Search';
import NavMenu from './NavMenu';

class NavbarComponent extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="columns" style={{marginBottom: '0px'}}>
        <div className="column is-8 is-offset-2 navWrapper">
          <div>
            <figure className="image is-3by1">
              <img src={this.props.headerAd} style={{height: '250px'}} />
            </figure>
            <div className="columns" style={{paddingTop: '20px'}}>
              <div className='column is-one-third is-offset-4'>
                <figure className="image is-3by1">
                  <img src={RsnLogo} />
                </figure>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <NavMenu toggleSearch={this.props.toggleSearch} />
              {
                this.props.showSearch ?
                  <Search getSearch={this.props.getSearch} toggleSearch={this.props.toggleSearch} />
                  :
                  null
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavbarComponent
