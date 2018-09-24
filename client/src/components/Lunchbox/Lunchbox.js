import React, { Component } from 'react'

import './Lunchbox.css'
import {getFoods} from './actions'
import Food from './index'

export default class Lunchbox extends Component {
  componentDidMount () {
    getFoods()
  }

  render () {
    const {currentBox} = this.props
    const { produce } = this.props.foods
    const { protein } = this.props.foods
    const { dairy } = this.props.foods
    const { grains } = this.props.foods
    const { other } = this.props.foods

    return (
      <div className='lunchbox'>
        <div className='row top'>
          {produce.map((item) => {
            return <Food
              key={item.id}
              className={'col-md-6 compartment'}
              category={'produce'}
              name={item.name}
              currentBox={currentBox}
            />
          })}
          {grains.map((item) => {
            return <Food
              key={item.id}
              className={'col-md-6 compartment'}
              category={'grains'}
              name={item.name}
              currentBox={currentBox}
            />
          })}
        </div>

        <div className='row'>
          {dairy.map((item) => {
            return <Food
              key={item.id}
              className={'col-md-4 compartment'}
              category={'dairy'}
              name={item.name}
              currentBox={currentBox}
            />
          })}
          {protein.map((item) => {
            return <Food
              key={item.id}
              className={'col-md-4 compartment'}
              category={'protein'}
              name={item.name}
              currentBox={currentBox}
            />
          })}
          {other.map((item) => {
            return <Food
              key={item.id}
              className={'col-md-4 compartment'}
              category={'other'}
              name={item.name}
              currentBox={currentBox}
            />
          })}
        </div>
      </div>
    )
  }
}
