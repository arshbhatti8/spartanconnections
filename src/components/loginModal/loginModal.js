import React,{Component} from 'react'
import {Header,Form,Segment,Button,Message} from 'semantic-ui-react';
import radium from 'radium';
import './loginModal.css';

class LoginModal extends Component {

    render() {
        return(
                <div id='form'>
                    <Header as='h2' style={{color: "white"}} textAlign='center'>
                        {' '}Log-in to your account
                    </Header>
                    <Form size='large'>
                        <Segment raised>
                            <Form.Input
                                fluid
                                icon='user'
                                iconPosition='left'
                                placeholder='E-mail address'
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                            />
                            <Button color='teal' fluid size='large'>Login</Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <a href='#'>Sign Up</a>
                    </Message>
                </div>


        )}
}
export default radium(LoginModal);