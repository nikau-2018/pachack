import React, { Component } from 'react'

import Footer from '../Footer'
import SignIn from '../SignIn'

export default class SignInScreen extends Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <SignIn />
          </div>

        </div>
        <Footer />
      </div>
    )
  }
}
