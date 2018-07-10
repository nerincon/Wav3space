import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
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
  { menuItem: 'Band Artists', render: () => <Tab.Pane><AddArtistModal /> <ArtistCard /></Tab.Pane> },
  { menuItem: 'Band Albums', render: () => <Tab.Pane><Album /></Tab.Pane> },
  { menuItem: 'Band Songs', render: () => <Tab.Pane><SongsTable /></Tab.Pane> },
  { menuItem: 'Band Videos', render: () => <Tab.Pane><BandVideo /></Tab.Pane> }
]

class BandPage extends Component {
  componentDidMount () {
    console.log(this.props.bands.band.bandname)
  // this.props.bandArtistsInfo(this.props.match.params.name)
  }

  render () {
    return (
      <div>
        <MainMenu />
        <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
      </div>
    )
  }
}

export default connect(({bands}) => ({bands}), {bandArtistsInfo})(withRouter(BandPage))
