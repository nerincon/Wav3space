import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import MainMenu from './MainMenu'
import logo from './logo.png'

class LoginForm extends Component {
  state= {
    email: '',
    password:'',
    errors: {},
    isLoading:false
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  } 

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
                <Image src={logo} /> Log-in to your account
              </Header>
              <Form size='large' onSubmit={this.onSubmit.bind(this)}>
                <Segment stacked>
                  <Form.Input 
                    fluid icon='user' 
                    iconPosition='left' 
                    field='email'
                    value={email}
                    placeholder='E-mail address' 
                    error={errors.password} 
                    onChange={this.onChange.bind(this)} />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    field='password'
                    value={password}
                    placeholder='Password'
                    error={errors.password}
                    onChange={this.onChange.bind(this)}
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