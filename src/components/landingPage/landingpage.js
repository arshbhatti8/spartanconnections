import React , {Component} from 'react';
import LoginModal from '../loginModal/loginModal';
import SignupModal from '../signupModal/signupModal';
import {Button,Message} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';
import './landingpage.css';


class landingPage extends Component {
    constructor(props){
        super(props);

        this.state={
            loginActive:false,
            signupActive:false,
            renderSuccessMessage:false,
            loginRedirect:false,
            failedLogin:false,
            failedSignup:false
        };
    }

    setLoginRedirect=()=>{
      this.setState({loginRedirect:true})
    };

    renderLogin=()=>{

        this.setState({
            loginActive:true,
            signupActive:false})
    };

    renderSignup=()=>{
        this.setState({
            loginActive:false,
            signupActive:true})
    };

    clearState=()=>{
        this.setState({
            loginActive:false,
            signupActive:false})
    };

    successfulSignup=()=>{
        this.setState({renderSuccessMessage:true});
    };

    failedLogin=()=>{
        this.setState({failedLogin:true});
        this.setState({loginActive:false});
    };
    failedSignup=()=>{
        this.setState({failedSignup:true});
        this.setState({signupActive:false});
    };

    handleDismiss=()=>{
        this.setState({renderSuccessMessage:false});
    };

    handleLoginDismiss=()=>{
      this.setState({failedLogin:false});
    };

    handleSignupDismiss=()=>{
        this.setState({failedSignup:false});
    };


    render() {
        //render LoginModal if Login button pressed
        let renderOutput=null;
        if(this.state.loginActive){
            renderOutput=<LoginModal id='loginModal' clearState={this.clearState} setLoginRedirect={this.setLoginRedirect} loginFail={this.failedLogin}/>
        }
        //render LoginModal if SignUp button pressed
        if(this.state.signupActive){
            renderOutput=<SignupModal id='signupModal' clearState={this.clearState} successfulSignUp={this.successfulSignup} signupFail={this.failedSignup}/>
        }
        //render Success Message if signup successful
        let renderSuccessMessage=  null;

        if(this.state.renderSuccessMessage){
            renderSuccessMessage= <Message
                id='message'
                onDismiss={this.handleDismiss}
                size='huge'
                success
                header='Your user registration was successful'
                content='You may now log-in with the username you have chosen'/>
        }

        //unsuccessful Login message display
        let renderFailedLoginMessage=null;

        if(this.state.failedLogin){
            renderFailedLoginMessage= <Message
                id='message'
                onDismiss={this.handleLoginDismiss}
                size='massive'
                negative
                header='Login Failed'
                content='Login Failed because of some reason'/>
        }

        //unsuccessful Signup message display
        let renderFailedSignupMessage=null;

        if(this.state.failedSignup){
            renderFailedSignupMessage= <Message
                id='message'
                onDismiss={this.handleSignupDismiss}
                size='massive'
                negative
                header='Login Failed'
                content='Login Failed because of some reason'/>
        }

        if(this.state.loginRedirect){
            return(<Redirect to={'/profile'}/>)
        }

        return (
        <div id='background' >
            <video style={{height: 'auto', width:'100%', top: 0, padding: 0}}
                   className="videoTag"
                   muted
                   autoPlay
                   loop>
                <source src={require('../../assets/video/backgroundVideo.mp4')} type='video/mp4'/>
            </video>
            {renderSuccessMessage}
            {renderFailedLoginMessage}
            {renderFailedSignupMessage}
            <Button
                id='login'
                color='teal'
                onClick={this.renderLogin}
                size='huge'>Login
               </Button>
            <p id='or'>or</p>
            <Button
                id='signup'
                color='teal'
                size='huge'
                content='Signup'
                onClick={this.renderSignup}/>
            {renderOutput}

        </div>
        )

    }
}

export default landingPage;