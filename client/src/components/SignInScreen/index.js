import React, { Component } from 'react'

import './styles.css'
import SignIn from '../SignIn'
import logo from './logo.png'
import apple from './apple.png'

export default class SignInScreen extends Component {
  render () {
    return (
      <div>
        <div className='row'>
          <div className='col text-center'>
            <img className='logo' src={logo} />
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <h4>Welcome to Lunch Bunch</h4>
            <p>Create amazing lunches.</p>
            <p>Sign In or Sign Up to get started.</p>
          </div>
        </div>

        <div className='row'>
          <div className='col form'>
            <img className='apple' src={apple} />
            <SignIn />
          </div>
          <div className='col'>&nbsp;</div>
        </div>
      </div>
    )
  }
}
