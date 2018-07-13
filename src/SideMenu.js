import React, { Component } from 'react'
import { Menu, Grid, Segment } from 'semantic-ui-react'
import './SideBar.css'
import UpcomingShows from './UpcomingShows';

 class SidebarList extends Component {
     
  handleItemClick = name => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state || {}

    return (
    <Segment vertical style={{padding: '0', border: 'none' }}>
    <Grid>
    <Grid.Row>
    <Grid.Column width={3}>
      <Menu vertical id='mainsidemenu'>
        <Menu.Item id='textcolor'>
          <Menu.Header>Browse</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              id='textcolor2'
              name='bands'
              active={activeItem === 'bands'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              id='textcolor3'
              name='shows'
              active={activeItem === 'shows'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item id='textcolor4'>
          <Menu.Header>Something else</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              id='textcolor5'
              name='s1'
              active={activeItem === 's1'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              id='textcolor6'
              name='s2'
              active={activeItem === 's2'}
              onClick={this.handleItemClick}
            />
            <Menu.Item id='textcolor7' name='s3' active={activeItem === 's3'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item id='textcolor7'>
          <Menu.Header>SomethingHeader</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              id='textcolor8'
              name='s4'
              active={activeItem === 's4'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              id='textcolor9'
              name='s5'
              active={activeItem === 's5'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item id='textcolor10'>
          <Menu.Header>?????</Menu.Header>

          <Menu.Menu>
            <Menu.Item id='textcolor11' name='s6' active={activeItem === 's6'} onClick={this.handleItemClick}>
              Something else
            </Menu.Item>

            <Menu.Item id='textcolor12' name='s7' active={activeItem === 's7'} onClick={this.handleItemClick}>
              here
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
      </Grid.Column>
      <UpcomingShows />
    </Grid.Row>
    </Grid>
    </Segment>
    )
  }
}

export default SidebarList