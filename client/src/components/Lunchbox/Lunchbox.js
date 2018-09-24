import React, { Component } from 'react'

import './Lunchbox.css'
// import {getFoods} from './actions'
import Food from '../Food'

export default class Lunchbox extends Component {
  // componentDidMount () {
  //   getFoods()
  // }

  render () {
    const {currentBox} = this.props
    const { produce, protein, dairy, grains, other } = this.props.foods

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

Lunchbox.defaultProps = {
  foods: {
    produce: [
      { id: 66601, name: 'cucumber', categoryId: 1 }
    ],
    grains: [
      { id: 66618, name: 'almonds', categoryId: 2 }
    ],
    dairy: [
      { id: 66610, name: 'yoghurt', categoryId: 3 }
    ],
    protein: [
      { id: 66614, name: 'egg', categoryId: 4 }
    ],
    other: [
      { id: 66617, name: 'snack balls', categoryId: 5 }
    ]
  }
}
