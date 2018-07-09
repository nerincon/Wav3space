import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { allBandsInfo } from './actions/index'
import './UpcomingShows.css'


class UpcomingShows extends Component {

  componentDidMount = () => {
    this.props.allBandsInfo()
  };

  render () {
    return (
      <Grid.Column width={12} padded>
        <Container className='foo'>
          <h1>Popular Bands</h1>
        </Container>
        <Container className='upcoming'>
          {this.props.items && this.props.items.map((band) => {
            return (
              <figure style={{display: 'inline-block', backgroundImage: `url('${band.main_image}')`}} key={band.bandname}>
                <figcaption>{band.bandname}</figcaption>
              </figure>
            )
          })
          }
        </Container>
      </Grid.Column>
    )
  }
}

export default connect(({allBandsInfo: items}) => items, {allBandsInfo})(UpcomingShows)
