import React, {Component} from 'react';
import {Menu,Icon,Button} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';



class MenuBar extends Component  {
    constructor(props){
        super(props);

        this.state={
            logout:false,
            homePageRedirect:false,
            profilePageRedirect:false,
            atHomePage:this.props.atHomePage,
            atProfilePage:this.props.atProfilePage
        };
    }
    logoutUser=()=>{
        this.setState({logout:true})
        sessionStorage.clear();
    };
    homepageRedirect=()=>{
      this.setState({homePageRedirect:true,atProfilePage:false,atHomePage:false});
    };
    profilePageRedirect=()=>{
        this.setState({profilePageRedirect:true,atProfilePage:true});
    };
    render(){
       if(this.state.logout){
            return<Redirect to={'/'}/>
        }
        if(this.state.homePageRedirect){
            return<Redirect to={'/home'}/>
        }
        if(this.state.profilePageRedirect){
            return<Redirect to={'/profile'}/>;
        }
        return (
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

                        <Button onClick={this.homepageRedirect} disabled={this.state.atHomePage}
                                primary>Home
                        </Button>

                        <Button onClick={this.profilePageRedirect} disabled={this.state.atProfilePage}
                            primary>Profile
                        </Button>
s
                        <Button onClick={this.logoutUser}
                                primary>Log out
                        </Button>

                    </Menu.Item>

                </Menu>
            </div>
        );
    }


}
export default MenuBar
