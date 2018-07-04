import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from './logo.png'
import MainMenu from './MainMenu'

class ArtistSignup extends Component {
    render() {
        return (

  <div className='login-form'>
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <MainMenu />
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='green' textAlign='center'>
          <Image src={logo} /> Sign-Up
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='group' iconPosition='left' placeholder='Band Name' />
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Re-Type Password' type='password' />
            <Button color='green' fluid size='large'>
              Sign-up
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have a Wav3space account?  <a href='#'>Log In</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)
    }

}

export default ArtistSignup