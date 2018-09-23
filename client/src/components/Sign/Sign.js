import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'

class Sign extends Component {
  constructor (props) {
    super(props)
    this.state = {
      signin: true,
      currentUser: props.currentUser
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    this.setState({
      signin: !this.state.signin
    })
  }

  render () {
    const { currentUser, login } = this.props

    if (currentUser === 'pending') {
      return (
        <div>Logging in...</div>
      )
    }

    if (currentUser && currentUser.id) {
      return (
        <Redirect to='/profile' />
      )
    }

    return (
      <div style={{padding: 40}}>

        <div className="col-md-2">
          <button style={{marginBottom: 50, background: '#B6EAEB', color: 'black', border: 'none'}}className="btn btn-primary" onClick={this.handleSubmit}>Sign Up</button>
        </div>

        <div className="row">
          <div className="col-md-4">
            <p>{this.state.signin ? <SignIn login={login} /> : <SignUp/>}</p>
          </div>
        </div>

      </div>
    )
  }
}

export default Sign
