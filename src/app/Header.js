import React, { Component } from 'react'
import logo from '../assets/images/logo.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logoBox">
          <img src={logo} alt="Logomarca"/>
        </div>
        <div className="titleBox">
          <h2>ranking</h2>
        </div>
    </div>
    )
  }
}

export default Header