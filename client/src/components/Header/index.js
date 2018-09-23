import React from 'react'
import logo from './images/lb_logo.png'

const Header = () => (
  <div style={{background: '#B6EAEB'}}className="row">
    <img style={{height: 100}} className="logo" src={logo} />
    <h1 style={{padding: 20}}></h1>
  </div>
)

export default Header
