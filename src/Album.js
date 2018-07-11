import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
// import { connect } from 'react-redux'
// import { bandArtistsInfo } from './actions/index'


class Album extends Component {
  
    render() {
      return (
        <figure style={{display: 'inline-block'}}>
          <Image style={{borderRadius: '15px'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg/215px-Blink-182_-_Enema_of_the_State_cover.jpg' />
          <figcaption>Enema of the State</figcaption>
        </figure>
      )
    }
  }

  export default Album

//   export default connect(({bandArtistsInfo: items}) => items, {bandArtistsInfo})(Album)