import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bandArtistsInfo } from './actions/index'
import { withRouter } from 'react-router-dom'

class ArtistCard extends Component {
  render () {
    return (
      <div>
        {this.props.bands.band && this.props.bands.band.map((artist) => {
          return (
            <Card style={{display: 'inline-block', marginLeft: '4rem', marginTop: '2rem'}}>
              <Image src={artist.artist_img} />
              <Card.Content>
                <Card.Header>{artist.bandname}</Card.Header>
                <Card.Meta>
                  <span className='date'>{artist.artist_role}</span>
                </Card.Meta>
                <Card.Description>{artist.artist_bio}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                22 Followers
                </a>
              </Card.Content>
            </Card>
          )
        })}
      </div>

    )
  }
}

export default connect(({bands}) => ({bands}), {bandArtistsInfo})(withRouter(ArtistCard))
