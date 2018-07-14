import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Divider, Image } from 'semantic-ui-react'
import { getBandMainPic } from './actions/index'
import { withRouter } from 'react-router-dom'

class BandMainPic extends Component {
  render () {
    return (
      <div>
        { this.props.img.pic && this.props.img.pic.map((p, idx) => {
          return (
            <div key={idx}>
              <Image src={p.main_image} size='medium' />
              <Divider hidden />
            </div>
          )
        })}
      </div>
    )
  }
}

export default connect(({img}) => ({img}), {getBandMainPic})(withRouter(BandMainPic))
