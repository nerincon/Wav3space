import React, { Component } from 'react'
import { Tab, Grid } from 'semantic-ui-react'
import MainMenu from './MainMenu'
import SongsTable from './SongsTable'
import BandVideo from './BandVideo'
import Album from './Album'
import ArtistCard from './ArtistCard'
import AddArtistModal from './AddArtistModal'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bandArtistsInfo } from './actions/index'
import './BandPage.css'

const panes = [
  { menuItem: 'Band Artists', render: () => <Tab.Pane style={{backgroundColor: '#1b1c1d'}}><AddArtistModal /> <ArtistCard /></Tab.Pane> },
  { menuItem: 'Band Albums', render: () => <Tab.Pane style={{backgroundColor: '#1b1c1d'}}><Album /></Tab.Pane> },
  { menuItem: 'Band Songs', render: () => <Tab.Pane style={{backgroundColor: '#1b1c1d'}}><SongsTable /></Tab.Pane> },
  { menuItem: 'Band Videos', render: () => <Tab.Pane style={{backgroundColor: '#1b1c1d'}}><BandVideo /></Tab.Pane> }
]

class BandPage extends Component {

  componentDidMount () {
    var wholepath = this.props.history.location.pathname
    var splitpath = wholepath.split('/')
    var bandname = splitpath.pop()
    this.goToBandPage(bandname)
  }

  goToBandPage (bandname, history) {
    this.props.bandArtistsInfo(bandname, this.props.history)
  }

  render () {
    return (
      <div>
        <MainMenu />
        <Grid>
          <Grid.Column width={14}>
            <Tab style={{marginTop: '5rem', marginLeft: '2rem'}} menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default connect(({bands}) => ({bands}), {bandArtistsInfo})(withRouter(BandPage))
