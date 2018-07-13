import React, { Component } from 'react'
import MainMenu from './MainMenu'
import ArtistSignup from './ArtistSignup'
import VenueSignup from './VenueSignup'
import './Register.css'
import { Menu, Grid } from 'semantic-ui-react'

export default class RegisterTabs extends Component {
  state = { activeItem: 'Register Artist' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state
    return (
    <div>
      <MainMenu />
      <Grid>
      <Grid.Column width={3} id='side'>
      <Menu pointing secondary vertical id='menu'>
        <Menu.Item className='tab' name='Register Artist' active={activeItem === 'Register Artist'} onClick={this.handleItemClick} />
        <Menu.Item className='tab' name='Register Venue' active={activeItem === 'Register Venue'} onClick={this.handleItemClick}
        />
      </Menu>
      </Grid.Column>
      <Grid.Column width={10} className='signup'>
      { this.state.activeItem === 'Register Artist' ? <ArtistSignup /> : <VenueSignup /> }
      </Grid.Column>
      </Grid>
    </div>
    )
  }
}
