import React, { Component } from 'react'

import './Lunchbox.css'
import Food from '../Food'
import logo from '../SignIn/logo.png'

export default class Lunchbox extends Component {
  componentDidMount () {
    this.props.getFoods()
  }

  render () {
    const { currentBox, foods } = this.props

    if (!foods.foods) {
      // <Loading />
      return <div>Loading component goes here</div>
    }

    const { foods: { produce, protein, dairy, grains, other }, pending } = foods

    return (
      <div>
        <img className='logo2' src= {logo}/>
        <h1>Your Lunchbox</h1>

        <div className='lunchbox'>
          <div className='row top'>
            <div className='col-md-6 container-fluid produce1'>
              {produce.map((item) => {
                return <Food
                  key={item.id}
                  category={'produce'}
                  name={item.name}
                  currentBox={currentBox}
                />
              })}
            </div>
            <div className='col-md-6 container-fluid grains1'>
              {grains.map((item) => {
                return <Food
                  key={item.id}
                  category={'grains'}
                  name={item.name}
                  currentBox={currentBox}
                />
              })}
            </div>
          </div>

          <div className='row bottom'>
            <div className='col-md-4 container-fluid dairy1'>
              {dairy.map((item) => {
                return <Food
                  key={item.id}
                  category={'dairy'}
                  name={item.name}
                  currentBox={currentBox}
                />
              })}
            </div>
            <div className='col-md-4 container-fluid protein1'>
              {protein.map((item) => {
                return <Food
                  key={item.id}
                  category={'protein'}
                  name={item.name}
                  currentBox={currentBox}
                />
              })}
            </div>
            <div className='col-md-4 container-fluid other1'>
              {other.map((item) => {
                return <Food
                  key={item.id}
                  category={'other'}
                  name={item.name}
                  currentBox={currentBox}
                />
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// Lunchbox.defaultProps = {
//   foods: {
//     produce: [
//       { id: 66601, name: 'cucumber', categoryId: 1 },
//       { id: 66602, name: 'cucumber', categoryId: 1 },
//       { id: 66603, name: 'cucumber', categoryId: 1 }
//     ],
//     grains: [
//       { id: 66618, name: 'muesli bar', categoryId: 2 },
//       { id: 66619, name: 'muesli bar', categoryId: 2 },
//       { id: 66620, name: 'muesli bar', categoryId: 2 }
//     ],
//     dairy: [
//       { id: 66621, name: 'yoghurt', categoryId: 3 },
//       { id: 66622, name: 'yoghurt', categoryId: 3 },
//       { id: 66623, name: 'yoghurt', categoryId: 3 }

//     ],
//     protein: [
//       { id: 66630, name: 'egg', categoryId: 4 },
//       { id: 66631, name: 'egg', categoryId: 4 },
//       { id: 66632, name: 'egg', categoryId: 4 }
//     ],
//     other: [
//       { id: 66640, name: 'snack balls', categoryId: 5 },
//       { id: 66641, name: 'snack balls', categoryId: 5 },
//       { id: 66642, name: 'snack balls', categoryId: 5 }
//     ]
//   }
// }
