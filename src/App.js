import React, { Component } from 'react'
import Navbar from './MainMenu'
import Sidebar from './SideMenu'
import './App.css'
import Footer from './Footer'
import TopMessage from './TopMessage'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navbar />
        <TopMessage />
        <Sidebar />
        <Footer />
      </div>
    )
  }
}

export default App
