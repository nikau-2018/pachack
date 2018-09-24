import React, { Component } from 'react'

import Footer from '../Footer'
import SignIn from '../SignIn'

export default class SignInScreen extends Component {
  render () {
    return (

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 jumbotron">
            <h1 className="display-4">Lunch Bunch</h1>
            <p className="lead">welcome to lunch bunch</p>
            <hr className="my-4"/>
            <p>Create amazing lunches. Sign up to create a fantastic lunch!</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </div>

          <div className="col-md-6">
            <SignIn />
          </div>

        </div>
        <Footer />
      </div>
    )
  }
}
