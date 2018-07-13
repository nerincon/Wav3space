import React, { Component } from 'react'
import { Icon, Modal, Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bandArtistsInfo } from './actions/index'


const url = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/add' : 'https://backendapiwav3space.herokuapp.com/add'

const axiosInstance = axios.create({
  baseURL: url
})

class AddArtistModal extends Component {
  state = {
    artistname: '',
    artistrole: '',
    artistimg: '',
    artistbio: '',
  }

  onComponentMount () {
    this.setState({
      signedup: false,
    })
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    var wholepath = this.props.history.location.pathname
    var splitpath = wholepath.split('/')
    var bandname = splitpath.pop()
    axiosInstance.post('/bandartist', {
      bandname: bandname,
      artistname: this.state.artistname,
      artistrole: this.state.artistrole,
      artistimg: this.state.artistimg,
      artistbio: this.state.artistbio
    })
      .then(({data}) => {
        console.log(data.artistname + ' added to the database.')
        this.setState({
          artistname: '',
          artistrole: '',
          artistimg: '',
          artistbio: '',
      })
        window.location.reload(); 
    })
      .catch(err => console.log(err));
  };
  
    render() {
      return (
        <Modal id='modal' style={{padding: '2rem'}} trigger={<Button>New Artist</Button>}>
          <Modal.Header>New Artist</Modal.Header>
          <Form size='large' onSubmit={this.handleFormSubmit}>
          <Modal.Content image>
            <Modal.Description>
                <Form.Input
                  fluid icon='spy'
                  iconPosition='left'
                  placeholder='Artist Name'
                  value={this.state.artistname}
                  onChange={this.handleInputChange}
                  name='artistname' />
                <Form.Input
                  fluid
                  icon='headphones'
                  iconPosition='left'
                  placeholder='Artist Band Role'
                  value={this.state.artistrole}
                  onChange={this.handleInputChange}
                  name='artistrole' />
                <Form.Input
                  fluid
                  icon='image'
                  iconPosition='left'
                  placeholder='Artist Image Url'
                  value={this.state.artistimg}
                  onChange={this.handleInputChange}
                  name='artistimg' />
                <Form.Input
                  fluid
                  icon='content'
                  iconPosition='left'
                  placeholder='Artist Short Bio'
                  value={this.state.artistbio}
                  onChange={this.handleInputChange}
                  name='artistbio' />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' type='submit'>Add Artist <Icon name='right chevron' /></Button>
          </Modal.Actions>
          </Form>
        </Modal>
      )
    }
  }


  export default connect(({bands}) => ({bands}), {bandArtistsInfo})(withRouter(AddArtistModal))