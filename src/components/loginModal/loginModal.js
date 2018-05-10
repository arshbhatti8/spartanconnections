import React,{Component} from 'react'
import {Header,Form,Segment,Button,Icon} from 'semantic-ui-react';
import './loginModal.css';
import PostData from '../services/postLogin';


class LoginModal extends Component {
    constructor(props){
        super(props);
        this.state={
            'id':'',
            'passwd':'',
        }
    }

    login =()=>{
        if(this.state.id && this.state.passwd){
            PostData(this.state);
            this.props.clearState();
            this.props.setLoginRedirect();

            // PostData(this.state).then((result)=>{
            //     console.log(result);
            //     //clearing state to return to landing page
            //     this.props.clearState();
            //     this.setState({redirect:true});
            //     this.props.setLoginRedirect();
            // });
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
                                style={{float:"right"}}
                                onClick={this.props.clearState}
                                size='large'/>
                            <Form.Input
                                fluid
                                icon='user'
                                iconPosition='left'
                                name='id'
                                placeholder='Enter your ID here'
                                onChange={this.onChange}
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                name='passwd'
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