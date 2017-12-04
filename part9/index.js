import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import App from './app'
import About from './about'

const AppWithRouter = () => (
  <BrowserRouter basename="/part9">
    <div>
      <p><Link to="/">Home</Link> | <Link to="/about">About</Link></p>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>
)

render(<AppWithRouter />, document.getElementById('react-root'))
