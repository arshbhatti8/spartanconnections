import React , {Component} from 'react';
import {Segment,Grid} from 'semantic-ui-react';
import ProfileCourseGrid from '../grid/profileCourseGrid';
import ProfileCard from '../cards/profileCard';
import MenuBar from '../menuBar/menuBar'

class ProfilePage extends Component {


    render(){
        return(
        <div>
           <MenuBar/>
            <Grid container style={{marginTop:'10%'}}>
                    <Grid.Column width={4} floated='left'>
                        <ProfileCard/>
                    </Grid.Column>
                <Grid.Column textAlign='center' width={10} floated='left'>
                    <Segment>
                        <ProfileCourseGrid/>
                    </Segment>
                </Grid.Column>
            </Grid>

        </div>

        );
    }
}

export default ProfilePage;