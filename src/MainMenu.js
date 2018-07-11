import React, { Component } from 'react'
import { Menu, Dropdown, Container, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import blacklogo from './wav3space-logo-black.png'

import './MainMenu.css'

class Navbar extends Component {
  render () {
    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item header >
            <Image size='mini' src={blacklogo} style={{ marginRight: '1.5em' }} /><Link to='/'>Wav3space</Link></Menu.Item>
          <Menu.Item ><Link to='/'>Shop</Link></Menu.Item>
          <Dropdown item simple text='Discover'>
            <Dropdown.Menu>
              <Dropdown.Item>Bands</Dropdown.Item>
              <Dropdown.Item>Shows</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Other</Dropdown.Header>
              <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Opportunities</span>
                <Dropdown.Menu>
                  <Dropdown.Item>National Gigs</Dropdown.Item>
                  <Dropdown.Item>International Gigs</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>Studio Time</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item position='right'><Link to='/login'>Log-In</Link></Menu.Item>
          <Menu.Item><Link to='/bands/signup'>Sign-Up</Link></Menu.Item>
          <Menu.Item>Logout</Menu.Item>
        </Container>
      </Menu>

    )
  }
}

export default Navbar
