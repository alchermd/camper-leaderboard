import React from 'react'
import './DisplayCampers.css'

const DisplayCampers = ({campers, activeState}) =>
  (<tbody>
    {campers.map((camper, index) => {
      return (
        <tr key={index}>
          <td>{camper.key + 1}</td>
          <td>
            <img src={camper.img} alt={camper.username} className="avatar"/> 
            <a href={`https://www.freecodecamp.com/${camper.username}`} target={'_blank'}>
              {camper.username}
            </a>
          </td>
          <td>
            { !index && activeState === 'recent'?
              <strong>{camper.recent}</strong> :
              camper.recent 
            }
          </td>
          <td>
            { !index && activeState === 'alltime'?
              <strong>{camper.alltime}</strong> :
              camper.alltime
            }
          </td>
        </tr>
      )
    })}
  </tbody>)

export default DisplayCampers