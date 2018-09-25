import React, { Component } from 'react'

import Footer from '../Footer'
import SignIn from '../SignIn'
import logo from '../SignIn/logo.png'
import apple from '../SignIn/apple.png'

export default class SignInScreen extends Component {
  render () {
    return (
      <div className='container-fluid bg'>
        <div className="row signin">

          <div className="col-md-6">
            <img className='logo' src= {logo}/>
          </div>

          <div className="col-md-6">
            <div className="form">
              <img className='apple' src= {apple}/>
              <h4>Welcome to Lunch Bunch</h4>
              <p>Create amazing lunches.<br/>
            Sign In or Sign Up ro get started.</p>
              <SignIn />
            </div>
          </div>

        </div>
      </div>
    )
  }
}
