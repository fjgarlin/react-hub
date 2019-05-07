import React from 'react'
import { render } from 'react-dom'
import Repository from './repository'

const App = () => {
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
  ]

  return (
    <div className="content">
      <header>
        <h1>ReactHub!</h1>
        <span className="tagline">GitHub, for React things</span>
      </header>
      <ul className="results">
        {repositories.map(repository => (
          <Repository key={repository.id} repository={repository} />
        ))}
      </ul>
    </div>
  )
}

render(<App />, document.getElementById('react-root'))
