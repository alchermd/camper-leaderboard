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

    // Method binding.
    this.fetchRecent = this.fetchRecent.bind(this)
    this.fetchAllTime = this.fetchAllTime.bind(this)
    this.fetchCampers = this.fetchCampers.bind(this)
  }

  componentDidMount() {
    this.fetchRecent()
  }

  fetchRecent() {
    this.fetchCampers("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
  }

  fetchAllTime() {
    this.fetchCampers("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
  }

  fetchCampers(APILink) {
    fetch(APILink)
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
              <th><Last30 onClick={this.fetchRecent}/></th>
              <th><AllTime onClick={this.fetchAllTime}/></th>
            </tr>
          </thead>

          <DisplayCampers campers={this.state.campers} />
        </table>
      </div>
    )
  }
}

export default App