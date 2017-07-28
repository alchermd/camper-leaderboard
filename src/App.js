import React from 'react'

class App extends React.Component {
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
        </table>
      </div>
    )
  }
}

export default App