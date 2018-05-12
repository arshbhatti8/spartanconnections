import React , {Component} from 'react';
import {Menu,Button,Icon,Grid} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';
import CourseGrid from '../grid/courseGrid';
import getCourses from '../services/getCourses';



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
                    <Icon name='pied piper alternate' size='big'/>
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button
                        primary>Log out
                    </Button>
                </Menu.Item>
            </Menu>
                <Grid style={{marginTop:'10%',marginLeft:'7%'}} centered columns={3} >
                        <CourseGrid />
                </Grid>
        </div>
    );
    }
}

export default homePage;