import React, { Component } from 'react'

import './Lunchbox.css'

export default class Lunchbox extends Component {
  render () {
    const { lunchbox } = this.props

    return (
      <div className='lunchbox'>

        <div className='produce'>
          <div className='currentstate-produce'>
            {lunchbox.produce}
          </div>
          <div className='producebutton'>
            <button>Cucumber</button>
          </div>
        </div>

        <div className='grains'>
          <div className='currentstate-grains'>
            {lunchbox.grains}
          </div>
          <div className='grainsbutton'>
            <button>Wheat</button>
          </div>
        </div>

        <div className='dairy'>
          <div className='currentstate-dairy'>
            {lunchbox.dairy}
          </div>
          <div className='dairybutton'>
            <button>Milk</button>
          </div>
        </div>

        <div className='protein'>
          <div className='currentstate-protein'>
            {lunchbox.protein}
          </div>
          <div className='proteinbutton'>
            <button>Chicken</button>
          </div>
        </div>

        <div className='other'>
          <div className='currentstate-other'>
            {lunchbox.other}
          </div>
          <div className='otherbutton'>
            <button>Chocolate</button>
          </div>
        </div>

      </div>
    )
  }
}
