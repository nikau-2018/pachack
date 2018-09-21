import React, { Component } from 'react'

import './Lunchbox.css'
import Header from '../Header/Header'

export default class Lunchbox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lunchbox: props.lunchbox
    }
  }
  render () {
    return (
      <div className='container'>
        <Header />
        <div className='lunchbox'>

          <div className='produce'>
            <div className='currentstate-produce'>
              {this.state.lunchbox.produce}
            </div>
            <div className='producebutton'>
              <button>Cucumber</button>
            </div>
          </div>

          <div className='grains'>
            <div className='currentstate-grains'>
              {this.state.lunchbox.grains}
            </div>
            <div className='grainsbutton'>
              <button>Wheat</button>
            </div>
          </div>

          <div className='dairy'>
            <div className='currentstate-dairy'>
              {this.state.lunchbox.dairy}
            </div>
            <div className='dairybutton'>
              <button>Milk</button>
            </div>
          </div>

          <div className='protein'>
            <div className='currentstate-protein'>
              {this.state.lunchbox.protein}
            </div>
            <div className='proteinbutton'>
              <button>Chicken</button>
            </div>
          </div>

          <div className='other'>
            <div className='currentstate-other'>
              {this.state.lunchbox.other}
            </div>
            <div className='otherbutton'>
              <button>Chocolate</button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
