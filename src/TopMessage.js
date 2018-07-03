import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import './TopMessage.css'
import pic from './concert.jpg'

class TopMessage extends Component {
  render () {
    return (
      <div>
        <div className='mainshow'>
          <Image src={pic} />
        </div>
      </div>
    )
  }
}

export default TopMessage
