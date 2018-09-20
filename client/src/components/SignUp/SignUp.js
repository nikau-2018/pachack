import React, { Component} from 'react'

export default class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // handleSubmit (e) {
  // }

  render () {
    return (
      <div>
        <p>Username: <input className='username'
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.handleChange}/>
        </p>
        <p>Password: <input className='password'
          type='text'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}/>
        <button type='submit' />
        </p>
      </div>
    )
  }
}
