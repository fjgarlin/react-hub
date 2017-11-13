import React from 'react'
import Repository from './repository'
import fetch from 'so-fetch-js'
import { Route } from 'react-router-dom'

const getSearchUrl = query => `
  http://github-proxy-api.herokuapp.com/search/repositories?q=${query}+language:javascript+fork:false+stars:>=1000
`

export default class App extends React.Component {
  state = {
    repositories: [],
    isLoading: true,
    removedIds: [],
    searchQuery: 'react',
    activeRepository: -1,
  }

  fetchSearch() {
    this.setState(prevState => ({ isLoading: true, repositories: [] }))

    fetch(getSearchUrl(this.state.searchQuery)).then(result => {
      this.setState(prevState => ({
        isLoading: false,
        repositories: result.data.items,
      }))
    })
  }

  componentDidMount() {
    this.fetchSearch()
  }

  hideRepository = id =>
    this.setState(prevState => ({
      removedIds: [...prevState.removedIds, id],
    }))

  updateSearchQuery = event => {
    this.setState({ searchQuery: event.target.value })
  }

  searchGithub = event => {
    event.preventDefault()
    this.fetchSearch()
  }

  onRepositoryClick = id => {
    this.setState(() => ({ activeRepository: id }))
  }

  render() {
    return (
      <div className="content">
        <header>
          <h1>ReactHub!</h1>
          <span className="tagline">GitHub, for React things</span>
        </header>
        {this.state.isLoading && <div className="loader">Loading...</div>}
        <form onSubmit={this.searchGithub}>
          <input
            type="text"
            className="search-query"
            placeholder="react"
            value={this.state.searchQuery}
            onChange={this.updateSearchQuery}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        <ul className="results">
          {this.state.repositories
            .filter(r => this.state.removedIds.indexOf(r.id) === -1)
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
        <div className="main-content">
          {/* EXERCISE: replace this with a <Route /> that is active for /repository/:id
            * and shows the user the right thing
            * it should check we have repositories
            * and that the ID is valid
            */}
        </div>
      </div>
    )
  }
}
