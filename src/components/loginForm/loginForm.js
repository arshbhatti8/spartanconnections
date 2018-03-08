import React,{Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

class LoginForm extends Component {
    constructor(){
        super();
        this.state={
            showForm:false,
            showLoading:true
        };
        console.log("constructor running");
    }

    componentDidMount(){
        const showFormState=this.state.showForm;
        const showLoadingState=this.state.showLoading;

        let handleTimeout=()=> {

            this.setState({showForm:!showFormState,showLoading:!showLoadingState});

        };

        setTimeout(handleTimeout,2000);
        console.log("componentDidMount");
    }

    render() {

             let displayForm;

            if(this.state.showForm) {
                displayForm =
                    <div>
                        <Header as='h2' style={{color: "white"}} textAlign='center'>
                            <Image src={require('../../assets/images/logo.png')}/>
                            {' '}Log-in to your account
                        </Header>
                        <Form size='large'>
                            <Segment
                                raised>
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
            }


            if(this.state.showLoading) {
                displayForm =
                    <div>
                        <Segment
                            raised
                            loading>
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
                    </div>;
            }



        return(
        <div className='login-form'>
            {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
            <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>

            <Grid
                textAlign='center'
                style={{height: '100%'}}
                verticalAlign='middle'
                centered>
                <Grid.Row centered columns={2} style={{margin: "0 auto"}}>
                    <p><br/><br/><br/><br/></p>
                    <p><br/><br/><br/><br/></p>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column style={{maxWidth: 450}}>
                        {displayForm}


                    </Grid.Column>
                </Grid.Row>
            </Grid>
            {console.log("End of parsing")}

        </div>

        )

    }
}
export default LoginForm;