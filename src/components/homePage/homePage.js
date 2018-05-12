import React , {Component} from 'react';
import {Menu,Button,Icon,Grid} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';
import CourseGrid from '../grid/courseGrid';
import getCourses from '../services/getCourses';
import MenuBar from '../menuBar/menuBar';
import LexChat from '../lexChat/lexChat';
import LoginModal from "../loginModal/loginModal";

class homePage extends Component {
        constructor(props){
            super(props);
        this.state= {
            logoutRedirect:false,
            courses:[]
        }}

componentWillMount(){
            getCourses().then(result=>{
                this.setState({courses:result.data});
            })
                .catch(error=>{
                    console.log(error);
                    }
                )

}


render(){

    if(this.state.logoutRedirect){
        return(<Redirect to={'/'}/>)
    }

    return(
        <div>
            <MenuBar/>
                <Grid style={{marginTop:'10%',marginLeft:'7%'}} centered columns={3} >
                    <CourseGrid />
                </Grid>
            <LexChat botName="SpartanConnection"
                     IdentityPoolId="us-east-1:0c8a5c08-b163-43be-9b65-feb4ae15dc76"
                     placeholder="How Can I Help You?"
                     height='230px'
                     headerText="CHATBOT"/>

        </div>
    );
    }
}

export default homePage;