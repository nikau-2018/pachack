import React, { Component } from 'react'

import Footer from '../Footer'
import SignIn from '../SignIn'
import logo from '../Header/images/lb_logo.png'
import kids from './lunchbunchers.png'

export default class SignInScreen extends Component {
  render () {
    return (

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 jumbotron">
            <div className="row">
              <div className="col-md-6">
                <h1 className="display-4">Lunch Bunch</h1>
              </div>
              <div className="col-md-3">
                <img src={logo}/>
              </div>
            </div>
            <p className="lead">welcome to lunch bunch</p>
            <hr className="my-4"/>
            <p>Create amazing lunches. Sign up to create a fantastic lunch!</p>
          </div>

          <div className="col-md-6">
            <SignIn />
          </div>

        </div>

        <img src={kids} />
        <Footer />
      </div>
    )
  }
}
