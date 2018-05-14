import React,{Component} from 'react'
import {Header,Form,Segment,Button,Icon} from 'semantic-ui-react';
import './loginModal.css';
import PostData from '../services/postLogin';


class LoginModal extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
        }
    }

    login =()=>{
        if(this.state.email && this.state.password){
            PostData(this.state).then((result)=>{
                // console.log(result.data.data.user);
                // sessionStorage.setItem('enrolledCoursesList',result.data.data.user.enrolledCourses);
                 sessionStorage.setItem('userID',result.data.data.user._id);
                //clearing state to return to landing page
                this.props.clearState();
                this.props.setLoginRedirect();
            })
                .catch((error)=>{
                    this.props.loginFail();
                    return error;
                });

        }
    };


    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    };

    render() {

        return(
                <div id='form'>
                    <Header as='h2' style={{color: "white"}} textAlign='center'>
                        {' '}Log-in to your account
                    </Header>
                    <Form size='large'>
                        <Segment raised>
                            <Icon
                                name='window close'
                                id='closeIcon'
                                style={{float:"right"}}
                                onClick={this.props.clearState}
                                size='large'/>
                            <Form.Input
                                fluid
                                icon='user'
                                iconPosition='left'
                                name='email'
                                placeholder='Enter your email here'
                                onChange={this.onChange}
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                name='password'
                                placeholder='Enter your password'
                                type='password'
                                onChange={this.onChange}
                            />
                            <Button
                                onClick={this.login}
                                color='teal'
                                fluid
                                size='large'>Login</Button>
                        </Segment>
                    </Form>
                </div>


        )}
}
export default LoginModal;