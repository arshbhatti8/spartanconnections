import React , {Component} from 'react';
import {Segment,Grid,Menu,Icon,Button,Header} from 'semantic-ui-react';
import ProfileCourseGrid from '../grid/profileCourseGrid';
import ProfileCard from '../cards/profileCard';

class ProfilePage extends Component {


    render(){
        return(
        <div>
            <Menu
                borderless
                fixed='top'
                style={{
                    border: 'none',
                    padding:0,
                    boxShadow: 'none',
                    margin:0,
                }}
                inverted
                pointing
                size="huge">
                <Menu.Item>
                   <Header style={{color:'white'}}>
                       <Icon name='pied piper alternate' size='big'/>SPARTAN CONNECTIONS
                   </Header>
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button
                        primary>Log out
                    </Button>
                </Menu.Item>
            </Menu>
            <Grid container style={{marginTop:'5%'}}>
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