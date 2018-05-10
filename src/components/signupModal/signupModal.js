import React,{Component} from 'react'
import {Header,Form,Segment,Button,Icon,Radio} from 'semantic-ui-react';
import PostData from '../services/postSignup'
import './signupModal.css';

class SignupModal extends Component {
    constructor(props){
        super(props);
        this.state={
            'id':'',
            'passwd':'',
            'name':'',
            'level':'',
            'birthday':'',
            'description':''
        }
    }

    signupSubmit=()=> {
        if (this.state.id &&
            this.state.passwd &&
            this.state.name &&
            this.state.level &&
            this.state.birthday &&
            this.state.description) {

            PostData(this.state);
            this.props.clearState();
            this.props.successfulSignUp();
        //     PostData(this.state).then((result)=>{
        //         let responseJSON= result;
        //         console.log(responseJSON);
        //         //clearing state to return to landing page
        //         this.props.clearState();
        //         this.props.successfulSignUp();
        //
        //     });
         }
    };

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
        console.log(this.state);
    };

    changeType=(e, { value}) => this.setState({...this.state,level:value });

    render() {
        return(
            <div id='form'>
                    <Header as='h2' style={{color:'white'}} textAlign='center'>
                    {' '}Sign up
                </Header>
                <Form size='large' style={{fontWeight:'bold'}}>
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
                            placeholder='Enter your name here'
                            name='name'
                            onChange={this.onChange}
                        />
                        <Form.Input
                            fluid
                            icon='at'
                            iconPosition='left'
                            placeholder='Enter the User ID you wish to have'
                            name='id'
                            onChange={this.onChange}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Enter the Password you desire'
                            name='passwd'
                            type='password'
                            onChange={this.onChange}
                        />
                        <Form.Input
                            fluid
                            icon='birthday'
                            iconPosition='left'
                            placeholder='Enter your Birthday here (MM/DD/YY)'
                            name='birthday'
                            onChange={this.onChange}
                        />
                        <Form.TextArea
                            label='About'
                            name='description'
                            placeholder='Tell us more about you...'
                            onChange={this.onChange}/>
                        <Form.Field>
                            Pick User Level:
                            <br/>
                            <Radio
                            label='Admin'
                            value='1'
                            onChange={this.changeType}
                            checked={this.state.level === '1'}/>
                        </Form.Field>
                        <br/>
                        <Form.Field>
                            <Radio
                            label='Doctor'
                            value='2'
                            onChange={this.changeType}
                            checked={this.state.level === '2'}/>
                        </Form.Field>
                        <br/>
                        <Form.Field><Radio
                            label='Patient'
                            value='3'
                            onChange={this.changeType}
                            checked={this.state.level === '3'}/>
                        </Form.Field>

                        <Button
                            onClick={this.signupSubmit}
                            color='teal'
                            fluid
                            size='large'>Signup</Button>
                    </Segment>
                </Form>


            </div>


        )}
}
export default SignupModal;