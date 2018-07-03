import React, { Component } from 'react'
import { Menu, Dropdown, Container, Image } from 'semantic-ui-react'
import logo from './logo.png'

import './MainMenu.css'

class Navbar extends Component {
  render () {
    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
          Wav3space
          </Menu.Item>
          <Menu.Item as='a'>Home</Menu.Item>

          <Dropdown item simple text='Dropdown'>
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item position='right' as='a'>Log-In</Menu.Item>
          <Menu.Item as='a'>Sign-Up</Menu.Item>
        </Container>
      </Menu>

    )
  }
}

export default Navbar
