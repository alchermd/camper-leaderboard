import React from 'react'
import Last30 from './Last30'
import AllTime from './AllTime'
import DisplayCampers from './DisplayCampers'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      campers: [],
      active: null
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
    this.setState({active: 'recent'})
  }

  fetchAllTime() {
    this.fetchCampers("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
    this.setState({active: 'alltime'})
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
    const {active, campers} = this.state

    return (
      <div className="container">
        <h1 className="text-center">Camper Leaderboard</h1>
        <p className="text-center lead">Who has the most brownie points?</p>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th><Last30 onClick={this.fetchRecent} active={active === 'recent'}/></th>
              <th><AllTime onClick={this.fetchAllTime} active={active === 'alltime'}/></th>
            </tr>
          </thead>

          <DisplayCampers campers={campers} activeState={active}/>
        </table>
      </div>
    )
  }
}

export default App