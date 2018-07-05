import React, { Component } from 'react'
import Navbar from './MainMenu'
import Sidebar from './SideMenu'
import './Home.css'
import Footer from './Footer'
import TopMessage from './TopMessage'

class Home extends Component {
  render () {
    return (
      <div className='Home'>
        <Navbar />
        <TopMessage />
        <Sidebar />
        <Footer />
      </div>
    )
  }
}

export default Home