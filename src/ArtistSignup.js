import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import logo from './logo.png'
import MainMenu from './MainMenu'
import axios from 'axios';

class ArtistSignup extends Component {
  state = {
    bandname: '',
    bandemail: '',
    password: '',
    verifypassword: '',
    error_msg:[],
    success_msg:[]
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:9090/bands/signup', {
      bandname: this.state.bandname,
      bandemail: this.state.bandemail,
      password: this.state.password,
      verifypassword: this.state.verifypassword
    })
      .then(({data}) => {
        console.log(data.bandname + ' added to the database.')
        console.log(data.error_msg);
        this.setState({
          bandname: '',
          bandemail: '',
          password: '',
          verifypassword: '',
      })
    })
      .catch(err => console.log(err));
  };


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
                <Form size='large' onSubmit={this.handleFormSubmit.bind(this)}>
                  <Segment stacked>
                    <Form.Input fluid icon='group' iconPosition='left' value={this.state.bandname} onChange={this.handleInputChange} name='bandname' placeholder='Band Name' />
                    <Form.Input fluid icon='user' iconPosition='left' value={this.state.bandemail} onChange={this.handleInputChange} name='bandemail' placeholder='E-mail address' />
                    <Form.Input fluid icon='lock' iconPosition='left' value={this.state.password} onChange={this.handleInputChange} name='password' placeholder='Password' type='password' />
                    <Form.Input fluid icon='lock' iconPosition='left' value={this.state.verifypassword} onChange={this.handleInputChange} name='verifypassword' placeholder='Verify Password' type='password' />
                    <Button color='green' fluid size='large' type='submit'>
                      Sign-up
                    </Button>
                  </Segment>
                </Form>
                <Message>Already have a Wav3space account?  <Link to="/login">Log-In</Link></Message>
              </Grid.Column>
            </Grid>
          </div>
        )
    }

}

export default ArtistSignup