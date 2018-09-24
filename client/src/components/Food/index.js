import React from 'react'

const Food = (props) => (
  // bootstrap pesentational class
  <div className={props.className}>
    <div className={props.category}>
      <div className={`${props.category}button`}>
        <button>{props.name}</button>
      </div>
      <div className={`currentstate-${props.category}`}>
        {props.currentBox.lunchbox ? props.currentBox.lunchbox.produce : <p>empty</p>}
      </div>
    </div>
  </div>
)

export default Food
