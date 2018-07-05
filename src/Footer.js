import React, { Component } from 'react'
import { Container, Image, List, Segment } from 'semantic-ui-react'
import logo from './logo.png'
import './footer.css'

class Footer extends Component {
  render () {
    return (
      <div className='foot'>
        <Segment inverted vertical style={{ margin: '20em 0em 0em', padding: '1.5em 0em' }}>
          <Container textAlign='center'>
            <List horizontal inverted divided link>
              <List.Item><Image centered size='mini' src={logo} /></List.Item>
              <List.Item as='a' href='#'>Site Map</List.Item>
              <List.Item as='a' href='#'>Contact Us</List.Item>
              <List.Item as='a' href='#'>Terms and Conditions</List.Item>
              <List.Item as='a' href='#'>Privacy Policy</List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    )
  }
}

export default Footer
