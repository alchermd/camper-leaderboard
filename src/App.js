import React from 'react'
import Last30 from './Last30'
import AllTime from './AllTime'
import DisplayCampers from './DisplayCampers'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      campers: [
        {"username":"SkyC0der","img":"https://avatars2.githubusercontent.com/u/24684319?v=3","alltime":2027,"recent":354,"lastUpdate":"2017-07-27T09:07:55.970Z"},
        {"username":"sjames1958gm","img":"https://avatars2.githubusercontent.com/u/4639625?v=3","alltime":7731,"recent":311,"lastUpdate":"2017-07-14T06:41:32.735Z"},
        {"username":"Chrono79","img":"https://avatars0.githubusercontent.com/u/9571508?v=3","alltime":4129,"recent":306,"lastUpdate":"2017-06-28T11:24:49.080Z"},
      ]
    }
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