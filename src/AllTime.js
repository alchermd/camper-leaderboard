import React from 'react'
import './AllTime.css'

const AllTime = ({onClick, active}) => {
  const arrow = <span>&#9660;</span>
  return (
    <span className="Last30" onClick={() => onClick()}>
      AllTime {active ? arrow : ""}
    </span>
  )
}
export default AllTime