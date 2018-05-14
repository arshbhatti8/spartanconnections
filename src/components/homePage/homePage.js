import React , {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';
import CourseGrid from '../grid/courseGrid';
import getCourses from '../services/getCourses';
import MenuBar from '../menuBar/menuBar';
import LexChat from '../lexChat/lexChat';
import postEnrollCourse from '../services/postEnrollCourse';
import getUser from '../services/getUser';


class homePage extends Component {
        constructor(props){
            super(props);
        this.state= {
            logoutRedirect:false,
            courses:[],
            atHomePage:true
        }}

    componentWillMount(){
            getUser().then(result=>{
                this.setState({user:result.data});
            })
                .catch(error=>{
                        console.log(error);
                    }
                );


            getCourses().then(result=>{
                this.setState({courses:result.data});
            })
                .catch(error=>{
                    console.log(error);
                    }
                )

}

enrollCourse=(name)=>{
    let copyCourses=[];
    copyCourses.push(name);
    this.state.user.enrolledCourses.map(course=>{
        if(course !== name){
            copyCourses.push(course);
        }

    });

    let copyState={...this.state.user,enrolledCourses:copyCourses};

    postEnrollCourse(copyState).then((result)=>{
        sessionStorage.setItem('enrolledCourses',copyCourses);
        this.setState({user:copyState});
    })
    .catch (err=>{
        console.log(err);
    })
};

render(){
    if(!sessionStorage.getItem('userID')){
        return<Redirect to={'/'}/>;
    }
    // if(this.state.logoutRedirect){
    //     return(<Redirect to={'/'}/>)
    // }

    return(
        <div>
            <MenuBar atHomePage={this.state.atHomePage}/>
                <Grid style={{marginTop:'10%',marginLeft:'7%'}} centered columns={3} >
                    <CourseGrid enrollCourse={this.enrollCourse} courses={this.state.courses}/>
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