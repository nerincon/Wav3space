import React, { Component } from 'react'
import { Container, Grid, Image } from 'semantic-ui-react'
import './UpcomingShows.css'

class UpcomingShows extends Component {
  render () {
    return (
      <Grid.Column width={12} padded>
        <Container className='upcoming'>
          <Image style={{display: 'inline-block', padding: '1.5rem'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg/220px-Blink-182_-_Enema_of_the_State_cover.jpg' />
          <Image style={{display: 'inline-block', padding: '1.5rem'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg/220px-Blink-182_-_Enema_of_the_State_cover.jpg' />
          <Image style={{display: 'inline-block', padding: '1.5rem'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg/220px-Blink-182_-_Enema_of_the_State_cover.jpg' />
          <Image style={{display: 'inline-block', padding: '1.5rem'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg/220px-Blink-182_-_Enema_of_the_State_cover.jpg' />
          <Image style={{display: 'inline-block', padding: '1.5rem'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg/220px-Blink-182_-_Enema_of_the_State_cover.jpg' />
          <Image style={{display: 'inline-block', padding: '1.5rem'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg/220px-Blink-182_-_Enema_of_the_State_cover.jpg' />
        </Container>
      </Grid.Column>
    )
  }
}

export default UpcomingShows
