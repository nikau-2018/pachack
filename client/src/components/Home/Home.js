import React, { Component } from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Sign from '../Sign'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: ''
    }
  }
  render () {
    return (
      <div className="container-fluid">
        <Header />
        <Sign />
        <Footer />
      </div>
    )
  }
}

export default Home
