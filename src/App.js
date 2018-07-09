import React, { Component } from 'react'
import Home from './Home'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Login'
import ArtistSignup from './ArtistSignup'
import VenueSignup from './VenueSignup'
import BandPage from './BandPage'
import { Provider } from 'react-redux'
import store from './store.js'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/venues/signup' component={VenueSignup} />
            <Route path='/bands/signup' component={ArtistSignup} />
            <Route path='/login' component={Login} />
            <Route path='/bandinfo' component={BandPage} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
