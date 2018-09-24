import React from 'react'

const Food = (props) => (
  <div className={props.category}>
    <div className={`${props.category}button`}>
      <button>{props.name}</button>
    </div>
    <div className={`currentstate-${props.category}`}>
      {props.currentBox.lunchbox ? props.currentBox.lunchbox.produce : <p>empty</p>}
    </div>
  </div>
)

export default Food
