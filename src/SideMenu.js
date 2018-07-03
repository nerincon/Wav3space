import React, { Component } from 'react'
import { Menu, Grid, Segment } from 'semantic-ui-react'
import './SideBar.css'
import UpcomingShows from './UpcomingShows';

 class Sidebar extends Component {
     
  handleItemClick = name => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state || {}

    return (
    <Segment vertical style={{ margin: '5em 0em 0em', padding: '0em 0em', border: 'none' }}>
    <Grid>
    <Grid.Row>
    <Grid.Column width={3} padded>
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Browse</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='enterprise'
              active={activeItem === 'enterprise'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='consumer'
              active={activeItem === 'consumer'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>CMS Solutions</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='rails'
              active={activeItem === 'rails'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='python'
              active={activeItem === 'python'}
              onClick={this.handleItemClick}
            />
            <Menu.Item name='php' active={activeItem === 'php'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Hosting</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='shared'
              active={activeItem === 'shared'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='dedicated'
              active={activeItem === 'dedicated'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Support</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='email' active={activeItem === 'email'} onClick={this.handleItemClick}>
              E-mail Support
            </Menu.Item>

            <Menu.Item name='faq' active={activeItem === 'faq'} onClick={this.handleItemClick}>
              FAQs
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

export default Sidebar