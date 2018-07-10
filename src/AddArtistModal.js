import React, { Component } from 'react'
import { Icon, Modal, Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bandArtistsInfo } from './actions/index'


class AddArtistModal extends Component {
  
    render() {
      return (
        <Modal id='modal' trigger={<Button>New Artist</Button>}>
          <Modal.Header>New Artist</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Form size='large'>
                <Form.Input
                  fluid icon='spy'
                  iconPosition='left'
                  placeholder='Artist Name'
                  name='artistname' />
                <Form.Input
                  fluid
                  icon='headphones'
                  iconPosition='left'
                  placeholder='Artist Band Role'
                  name='artistrole' />
                <Form.Input
                  fluid
                  icon='image'
                  iconPosition='left'
                  placeholder='Artist Image Url'
                  name='artistimage' />
                <Form.Input
                  fluid
                  icon='content'
                  iconPosition='left'
                  placeholder='Artist Short Bio'
                  name='artistbio' />
              </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button primary>
              Add Artist <Icon name='right chevron' />
            </Button>
          </Modal.Actions>
        </Modal>
      )
    }
  }

  export default AddArtistModal

//   export default connect(({bandArtistsInfo: items}) => items, {bandArtistsInfo})(AddArtistModal)