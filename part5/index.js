import React from 'react'
import { render } from 'react-dom'
import Repository from './repository'

const repositories = [
  {
    id: 1,
    name: 'jackfranklin/react-remote-data',
    stars: 34,
  },
  {
    id: 2,
    name: 'ReactTraining/react-router',
    stars: 25000,
  },
  {
    id: 3,
    name: 'facebook/react',
    stars: 80000,
  },
]

class App extends React.Component {
  state = {
    removedIds: [],
  }

  hideRepository = id => {
    this.setState(prevState => ({
      removedIds: [...prevState.removedIds, id],
    }))
  }

  render() {
    return (
      <div className="content">
        <header>
          <h1>ReactHub!</h1>
          <span className="tagline">GitHub, for React things</span>
        </header>
        <ul className="results">
          {repositories
            .filter(
              repository => this.state.removedIds.indexOf(repository.id) === -1
            )
            .map(repository => (
              <li key={repository.id}>
                <Repository repository={repository} />
                <button
                  className="removeBtn"
                  onClick={() => this.hideRepository(repository.id)}
                >
                  X
                </button>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

render(<App />, document.getElementById('react-root'))
