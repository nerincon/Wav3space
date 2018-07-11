import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { allBandsInfo, bandArtistsInfo } from './actions/index'
import './UpcomingShows.css'
import { withRouter } from 'react-router-dom'


class UpcomingShows extends Component {

  componentDidMount = () => {
    this.props.allBandsInfo()
  };

  goToBandPage = (bandname, history) => {
    this.props.bandArtistsInfo(bandname, this.props.history)
  }

  render () {
    return (
      <Grid.Column width={12}>
        <Container className='foo'>
          <h1>Popular Bands</h1>
        </Container>
        <Container className='upcoming'>
          {this.props.items && this.props.items.map((band) => {
            return (
              <figure 
              style={{display: 'inline-block', backgroundImage: `url('${band.main_image}')`}} 
              key={band.bandname}> 
              <figcaption><button onClick={ () => this.goToBandPage(band.bandname)}>{band.bandname}</button></figcaption>
              </figure>
            )
          })
          }
        </Container>
      </Grid.Column>
    )
  }
}

export default connect(({allBandsInfo: items}) => items, {allBandsInfo, bandArtistsInfo})(withRouter(UpcomingShows))
