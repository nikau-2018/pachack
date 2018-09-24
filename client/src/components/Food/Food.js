import React, { Component } from 'react'

export default class Food extends Component {

}

const Food = (props) => (
  <div className={props.category}>
    <div className={`${props.category}button`}>
      <button>{props.name}</button>
    </div>
  </div>
)

