import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

import SignInForm from '../SignInForm'
import RegisterForm from '../RegisterForm'

export default class SignIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showSignInForm: true
    }
    this.flipButton = this.flipButton.bind(this)
  }

  componentDidMount () {
    this.props.refreshUser()
  }

  flipButton (e) {
    const {showSignInForm} = this.state

    this.setState({
      showSignInForm: !showSignInForm
    })
  }

  render () {
    // Confused by this syntax? It's just another destructure, but we're looking for the inside
    // contents of `currentUser`! See
    // https://javascript.info/destructuring-assignment#nested-destructuring for more info
    const { currentUser: { error, pending, user }, register, signIn } = this.props
    const { showSignInForm } = this.state

    // Still waiting for request to finish
    if (pending) {
      return (
        <div>Logging in...</div>
      )
    }

    // We have a user, don't show <SignInForm />
    if (user) {
      return (
        <Redirect to='/profile' />
      )
    }

    return (
      <div>
        <div className='row'>
          <div className='col'>
            {this.state.showSignInForm
              ? <SignInForm error={error} signIn={signIn} />
              : <RegisterForm error={error} register={register} />}
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <button
              className="btn btn-primary form-control"
              onClick={this.flipButton}>{showSignInForm ? 'Register' : 'Sign in'}</button>
          </div>
        </div>
      </div>
    )
  }
}
