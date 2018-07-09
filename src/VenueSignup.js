import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import whitelogo from './wav3space-logo-white.png'
import MainMenu from './MainMenu'

class VenueSignup extends Component {
  render () {
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
        <Grid textAlign='center' style={{ height: '140%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='green' textAlign='center'>
              <Image src={whitelogo} /> Sign-Up
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='bars' iconPosition='left' name='venuename' placeholder='Venue Name' />
                <Form.Input fluid icon='home' iconPosition='left' name='country' placeholder='Country' />
                <Form.Input fluid icon='home' iconPosition='left' name='state' placeholder='State' />
                <Form.Input fluid icon='user' iconPosition='left' name='email' placeholder='E-mail Address' />
                <Form.Input fluid icon='address card' iconPosition='left' name='address' placeholder='Venue Address' />
                <Form.Input fluid icon='phone' iconPosition='left' name='phone' placeholder='Phone Number' />
                <Form.Input fluid icon='lock' iconPosition='left' name='password' placeholder='Password' type='password' />
                <Button color='green' fluid size='large'>
              Sign-up
                </Button>
              </Segment>
            </Form>
            <Message>Already have a Wav3space account?  <Link to='/login'>Log-In</Link></Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default VenueSignup
