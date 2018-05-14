import React , {Component} from 'react';
import {Segment,Grid} from 'semantic-ui-react';
import ProfileCourseGrid from '../grid/profileCourseGrid';
import ProfileCard from '../cards/profileCard';
import MenuBar from '../menuBar/menuBar'
import getUser from '../services/getUser';
import getCourses from '../services/getCourses';

class ProfilePage extends Component {
    constructor(props){
        super(props);
        this.state= {
            logoutRedirect:false,
            allCourses:[],
            userEnrolledCourses: [],
            atProfilePage:true
        }}

    componentWillMount() {
        getUser().then(result => {
            this.setState({user: result.data});
            console.log("this is user info");
            console.log(this.state.user.enrolledCourses);
        })
            .catch(error => {
                    console.log(error);
                }
            );

        getCourses().then(result=>{
            this.setState({allCourses:result.data});
            console.log("this is list of all courses" );
            console.log(this.state.allCourses[0]);


        })
            .catch(error=>{
                    console.log(error);
                }
            );

    }
    // componentDidMount(){
    //     let userEnrolledSubjects=[];
    //     this.state.user.enrolledCourses.map(enrolledSubject=>{
    //         this.state.allCourses.map(course=>{
    //             if(enrolledSubject === course.name){
    //                 userEnrolledSubjects.push(course);
    //             }
    //         })
    //     });
    //     this.setState({allCourses:userEnrolledSubjects});
    //
    //     console.log("subjects");
    //     console.log(userEnrolledSubjects);
    // }


    render(){
        return(
        <div>
           <MenuBar atProfilePage={this.state.atProfilePage} />
            <Grid container style={{marginTop:'10%'}}>
                    <Grid.Column width={4} floated='left'>
                        <ProfileCard/>
                    </Grid.Column>
                <Grid.Column textAlign='center' width={10} floated='left'>
                    <Segment>
                        <ProfileCourseGrid enrolledCourseList={this.state.userEnrolledCourses}/>
                    </Segment>
                </Grid.Column>
            </Grid>

        </div>

        );
    }
}

export default ProfilePage;