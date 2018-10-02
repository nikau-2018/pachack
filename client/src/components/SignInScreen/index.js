import React, { Component } from 'react'

import './styles.css'
import SignIn from '../SignIn'
import logo from './logo.png'
import apple from './apple.png'

export default class SignInScreen extends Component {
  render () {
    return (
      <div className='signin'>
        <div className='row'>
          <div className='col text-center'>
            <img className='logo' src={logo} />
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <h2>Sign in or sign up to create amazing lunches!</h2>
          </div>
        </div>

        <div className='row form-container'>
          <div className='col form text-center'>
            <img className='apple' src={apple} />
            <SignIn />
          </div>
        </div>
      </div>
    )
  }
}
