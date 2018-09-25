import React, { Component} from 'react'

export default class RegisterForm extends Component {
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

  handleSubmit () {
    this.props.register(this.state.username, this.state.password)
  }

  render () {
    const {error} = this.props

    return (
      <div>
        <h3>Create User</h3>
        {error && <p className='error'>{error}</p>}
        <p>Username: <input className='username form-control'
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.handleChange}/>
        </p>
        <p>Password: <input className='username form-control'
          type='text'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}/>
        <button
          onClick={this.handleSubmit}
          style={{marginBottom: 50, background: '#B6EAEB', color: 'black', border: 'none'}}
          className="btn btn-primary"
          type='submit'>Submit</button>
        </p>
      </div>
    )
  }
}
