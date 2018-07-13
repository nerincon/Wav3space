import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import MainMenu from './MainMenu'
import whitelogo from './wav3space-logo-white.png'
import axios from 'axios';

const url = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://backendapiwav3space.herokuapp.com'

const axiosInstance = axios.create({
  baseURL: url
})

class LoginForm extends Component {
  state= {
    email: '',
    password:'',
    errors: {},
    loggedin: false,
    isLoading:false
  }

  handleFormSubmit = event => {
    event.preventDefault();
    axiosInstance.post('/login', {
      email: this.state.email,
      password: this.state.password,
    })
      .then(({data}) => {
        console.log('is there anythong in data? ' + data.id)
        this.setState({
            email: '',
            password: '',
            loggedin: true}, () => {this.props.history.push('/')})
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  };

    render() {
      const { errors, email, password, isLoading } = this.state
        return (
        <div className='login-form'>
        <MainMenu />
          <style>{`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
              height: 100%;
            }
          `}</style>
          <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='green' textAlign='center'>
                <Image src={whitelogo} /> Log-in to your account
              </Header>
              <Form size='large' onSubmit={this.handleFormSubmit.bind(this)}>
                <Segment stacked>
                  <Form.Input 
                    fluid icon='user' 
                    iconPosition='left' 
                    field='email'
                    value={email}
                    placeholder='E-mail address' 
                    error={errors.password}
                    name='email' 
                    onChange={this.handleInputChange} />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    field='password'
                    value={password}
                    placeholder='Password'
                    error={errors.password}
                    name='password'
                    onChange={this.handleInputChange}
                    type='password'
                  />

                  <Button color='green' fluid size='large' type='submit' disabled={isLoading}>Login</Button>
                </Segment>
              </Form>
              <Message>New to Wav3space?  <Link to="/bands/signup">Sign-Up</Link></Message>
            </Grid.Column>
          </Grid>
        </div>
      )
    }

}

export default LoginForm