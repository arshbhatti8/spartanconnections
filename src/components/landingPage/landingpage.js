import React , {Component} from 'react';
import LoginModal from '../loginModal/loginModal';
import './landingpage.css';
class landingPage extends Component {

    render() {

        return (
        <div id='background' >
            <LoginModal />
        </div>
        )

    }
}

export default landingPage;