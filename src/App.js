import React from 'react'
import Last30 from './Last30'
import AllTime from './AllTime'
import DisplayCampers from './DisplayCampers'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      campers: []
    }
  }

  componentDidMount() {
    const recentAPI = "https://fcctop100.herokuapp.com/api/fccusers/top/recent"
    fetch(recentAPI)
      .then(result => result.json())
      .then(json => 
        this.setState({campers: json.map((camper, index) => 
          ({...camper, key: index})
        )})
      )
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Camper Leaderboard</h1>

        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th><Last30 /></th>
              <th><AllTime /></th>
            </tr>
          </thead>

          <DisplayCampers campers={this.state.campers} />
        </table>
      </div>
    )
  }
}

export default App