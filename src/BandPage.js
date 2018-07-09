import React, { Component } from 'react'
import { Tab, Card, Icon, Image, Modal, Button, Form } from 'semantic-ui-react'
import MainMenu from './MainMenu'
import SongsTable from './SongsTable'
import BandVideo from './BandVideo'
import './BandPage.css'

const AddArtistModal = () => (
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

const ArtistCard = () => (
  <Card>
    <Image src='http://vegasmagazine.com/get/files/image/galleries/blink-182-vegas.jpg' />
    <Card.Content>
      <Card.Header>Travis Barker</Card.Header>
      <Card.Meta>
        <span className='date'>Drummer</span>
      </Card.Meta>
      <Card.Description>an American musician and producer</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
          22 Followers
      </a>
    </Card.Content>
  </Card>
)

const Album = () => (
  <figure style={{display: 'inline-block'}}>
    <Image style={{borderRadius: '15px'}} src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg/215px-Blink-182_-_Enema_of_the_State_cover.jpg' />
    <figcaption>Enema of the State</figcaption>
  </figure>
)

const panes = [
  { menuItem: 'Band Artists', render: () => <Tab.Pane><AddArtistModal /> <ArtistCard /></Tab.Pane> },
  { menuItem: 'Band Albums', render: () => <Tab.Pane><Album /></Tab.Pane> },
  { menuItem: 'Band Songs', render: () => <Tab.Pane><SongsTable /></Tab.Pane> },
  { menuItem: 'Band Videos', render: () => <Tab.Pane><BandVideo /></Tab.Pane> }
]

class BandPage extends Component {
  render () {
    return (
      <div>
        <MainMenu />
        <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
      </div>
    )
  }
}

export default BandPage
