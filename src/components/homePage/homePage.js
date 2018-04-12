import React , {Component} from 'react';
import axios from 'axios';
import {Grid,Card,Button,Segment,Menu,Sidebar,Image} from 'semantic-ui-react';
import Posts from '../posts/posts';
import profileImage from '../../assets/images/profile.jpg';
class homePage extends Component {

        state= {
            courses: [],
            posts: []
        };
    //sending AJAX request to get courses
    componentDidMount() {
        // axios.get('https://spartanconnections-api.herokuapp.com/courses')
        //     .then(response=>{
        //         this.setState({courses:response.data});
        //     });
        axios.get('https://spartanconnections-api.herokuapp.com/posts')
            .then(response=>{
                this.setState({posts:response.data});

            });
    }


render(){
    const courses=this.state.courses.map(course=>{
        return <Card style={{margin:'1em'}} raised header={course.courseTitle} description={course.courseDescription}/>
    });

    return(
        <div>
                <Sidebar direction='left'  visible='true' as={Menu} inverted vertical>
                    <Menu.Item ><Image src={profileImage}/></Menu.Item>
                    <Menu.Item as='a'>Work</Menu.Item>
                    <Menu.Item as='a'>Company</Menu.Item>
                    <Menu.Item as='a'>Careers</Menu.Item>
                    <Menu.Item as='a'>Log in</Menu.Item>
                    <Menu.Item as='a'>Sign Up</Menu.Item>
                </Sidebar>
            <Grid textAlign='center'>
                <Grid.Column width={4}>
                <Sidebar.Pusher style={{ minHeight: '100vh',margin:"4em 2em" }}>
                    <Posts posts={this.state.posts}/>

                </Sidebar.Pusher>
                </Grid.Column>
            </Grid>


        </div>
    );
    }
}

export default homePage;