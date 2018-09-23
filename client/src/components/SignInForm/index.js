import React, { Component } from 'react'

import './SignInForm.css'

export default class SignInForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    this.props.signIn(this.state.username, this.state.password)
  }

  render () {
    const {error} = this.props

    return (
      <div>
        <h3>Log In</h3>
        {error && <p className='error'>{error}</p>}
        <p>Username: <input className='username form-control'
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.handleChange}/>
        </p>
        <p>Password: <input className='password form-control'
          type='text'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}/>
        <button
          onClick={this.handleSubmit}
          className="btn btn-primary"
          style={{margin: 20, marginBottom: 50, background: '#B6EAEB', color: 'black', border: 'none'}}
          type='submit'>Submit</button>
        </p>
      </div>
    )
  }
}
