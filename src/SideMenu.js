import React, { Component } from 'react'
import { Menu, Grid, Segment, Sidebar } from 'semantic-ui-react'
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
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Browse</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='bands'
              active={activeItem === 'bands'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='shows'
              active={activeItem === 'shows'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Something else</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='s1'
              active={activeItem === 's1'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='s2'
              active={activeItem === 's2'}
              onClick={this.handleItemClick}
            />
            <Menu.Item name='s3' active={activeItem === 's3'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>SomethingHeader</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='s4'
              active={activeItem === 's4'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='s5'
              active={activeItem === 's5'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>?????</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='s6' active={activeItem === 's6'} onClick={this.handleItemClick}>
              Whaaaaa
            </Menu.Item>

            <Menu.Item name='s7' active={activeItem === 's7'} onClick={this.handleItemClick}>
              the fuckk
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