import React from 'react'

const DisplayCampers = ({campers}) =>
  (<tbody>
    {campers.map((camper, index) => {
      return (
        <tr key={index}>
          <td>{camper.key + 1}</td>
          <td>{camper.username}</td>
          <td>{camper.recent}</td>
          <td>{camper.alltime}</td>
        </tr>
      )
    })}
  </tbody>)

export default DisplayCampers