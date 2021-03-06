import React, { Component } from 'react'
import Home from './Home'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Login'
import BandPage from './BandPage'
import { Provider } from 'react-redux'
import store from './store.js'
import RegisterTabs from './Register'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/signup' component={RegisterTabs} />
            <Route path='/login' component={Login} />
            <Route path='/bandinfo/:name' component={BandPage} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
