import React, { Component } from 'react'
import Navbar from './MainMenu'
import SidebarList from './SideMenu'
import './Home.css'
import Footer from './Footer'
import TopMessage from './TopMessage'

class Home extends Component {
  render () {
    return (
      <div className='Home'>
        <Navbar />
        <TopMessage />
        <SidebarList />
        <Footer />
      </div>
    )
  }
}

export default Home
