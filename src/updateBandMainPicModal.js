import React, { Component } from 'react'
import { Icon, Modal, Button, Form } from 'semantic-ui-react'
// import axios from 'axios';
// import { withRouter } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { bandArtistsInfo } from './actions/index'


// const url = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/add' : 'https://backendapiwav3space.herokuapp.com/add'

// const axiosInstance = axios.create({
//   baseURL: url
// })

class UpdateImgModal extends Component {
  state = {
    img: '',
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };
  
    render() {
      return (
        <Modal id='modal' style={{padding: '2rem'}} trigger={<Button>Update Main Image</Button>}>
          <Modal.Header>Update Main Image</Modal.Header>
          <Form size='large' onSubmit={this.handleFormSubmit}>
          <Modal.Content image>
            <Modal.Description>
                <Form.Input
                  fluid icon='image'
                  iconPosition='left'
                  placeholder='image url'
                  value={this.state.img}
                  onChange={this.handleInputChange}
                  name='artistname' />
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' type='submit'>Update Img <Icon name='right chevron' /></Button>
          </Modal.Actions>
          </Form>
        </Modal>
      )
    }
  }


  export default UpdateImgModal