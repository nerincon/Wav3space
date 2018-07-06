import React, { Component } from 'react'
import { Container, Grid, Image } from 'semantic-ui-react'
import './UpcomingShows.css'

class UpcomingShows extends Component {
  render () {
    return (
      <Grid.Column width={12} padded>
        <Container className='foo'>
          <h1>Popular Bands</h1>
        </Container>
        <Container className='upcoming'>
          <figure style={{display: 'inline-block'}}>
            <Image style={{borderRadius: '15px'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg/215px-Blink-182_-_Enema_of_the_State_cover.jpg' />
            <figcaption>Band Name Here</figcaption>
          </figure>
          <figure style={{display: 'inline-block'}}>
            <Image style={{borderRadius: '15px'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg/215px-Blink-182_-_Enema_of_the_State_cover.jpg' />
            <figcaption>Band Name Here</figcaption>
          </figure>
          <figure style={{display: 'inline-block'}}>
            <Image style={{borderRadius: '15px'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg/215px-Blink-182_-_Enema_of_the_State_cover.jpg' />
            <figcaption>Band Name Here</figcaption>
          </figure>
          <figure style={{display: 'inline-block'}}>
            <Image style={{borderRadius: '15px'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg/215px-Blink-182_-_Enema_of_the_State_cover.jpg' />
            <figcaption>Band Name Here</figcaption>
          </figure>
          <figure style={{display: 'inline-block'}}>
            <Image style={{borderRadius: '15px'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg/215px-Blink-182_-_Enema_of_the_State_cover.jpg' />
            <figcaption>Band Name Here</figcaption>
          </figure>
          <figure style={{display: 'inline-block'}}>
            <Image style={{borderRadius: '15px'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg/215px-Blink-182_-_Enema_of_the_State_cover.jpg' />
            <figcaption>Band Name Here</figcaption>
          </figure>
          <figure style={{display: 'inline-block'}}>
            <Image style={{borderRadius: '15px'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg/215px-Blink-182_-_Enema_of_the_State_cover.jpg' />
            <figcaption>Band Name Here</figcaption>
          </figure>
          <figure style={{display: 'inline-block'}}>
            <Image style={{borderRadius: '15px'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg/215px-Blink-182_-_Enema_of_the_State_cover.jpg' />
            <figcaption>Band Name Here</figcaption>
          </figure>
          <figure style={{display: 'inline-block'}}>
            <Image style={{borderRadius: '15px'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg/215px-Blink-182_-_Enema_of_the_State_cover.jpg' />
            <figcaption>Band Name Here</figcaption>
          </figure>
        </Container>
      </Grid.Column>
    )
  }
}

export default UpcomingShows
