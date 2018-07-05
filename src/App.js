import React, { Component } from 'react'
import Home from './Home'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Login'
import ArtistSignup from './ArtistSignup'
import VenueSignup from './VenueSignup'



class App extends Component {
      render() {
        return (
            <Router>
              <div>
                <Route exact path="/" component={Home}/>
                <Route path="/venues/signup" component={VenueSignup} />
                <Route path="/bands/signup" component={ArtistSignup} />
                <Route path="/login" component={Login} />
              </div>
            </Router>
        )
    }
  }

export default App
