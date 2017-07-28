import React from 'react'
import './Last30.css'

const Last30 = ({onClick, active}) => {
  const arrow = <span>&#9660;</span>
  return (
    <span className="Last30" onClick={() => onClick()}>
      Last 30 Days {active ? arrow : ""}
    </span>
  )
}

export default Last30