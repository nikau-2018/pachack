import React, { Component } from 'react'

import './Lunchbox.css'
import {getFoods} from './actions'

export default class Lunchbox extends Component {
  componentDidMount () {
    getFoods()
  }

  render () {
    const {currentBox} = this.props

    return (
      <div className='lunchboxScreen'>

        <div>
          <h1> Your Lunchbox</h1>
        </div>
        <div className='lunchbox'>
          <div className='row'>
            <div className='col-md-6 container-fluid produce' >
              <div className='produce'>
                <div className='producebutton'>
                  <button>Cucumber</button>
                </div>
                <div className='currentstate-produce'>
                  {currentBox.lunchbox ? currentBox.lunchbox.produce : <p>empty</p>}
                </div>
              </div>
            </div>

            <div className='col-md-6 container-fluid grains'>
              <div className='grains'>
                <div className='grainsbutton'>
                  <button>Wheat</button>
                </div>
                <div className='currentstate-grains'>
                  {currentBox.lunchbox ? currentBox.lunchbox.grains : <p>empty</p>}
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-4 container-fluid dairy'>
              <div className='dairy'>
                <div className='dairybutton'>
                  <button>Milk</button>
                </div>
                <div className='currentstate-dairy'>
                  {currentBox.lunchbox ? currentBox.lunchbox.dairy : <p>empty</p>}
                </div>
              </div>
            </div>

            <div className='col-md-4 container-fluid protein'>
              <div className='protein'>
                <div className='proteinbutton'>
                  <button>Chicken</button>
                </div>
                <div className='currentstate-protein'>
                  {currentBox.lunchbox ? currentBox.lunchbox.protein : <p>empty</p>}
                </div>
              </div>
            </div>

            <div className='col-md-4 container-fluid other'>
              <div className='other'>
                <div className='otherbutton'>
                  <button>Chocolate</button>
                </div>
                <div className='currentstate-other'>
                  {currentBox.lunchbox ? currentBox.lunchbox.other : <p>empty</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
