import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/landingPage/landingpage';
import Homepage from './components/homePage/homePage';
import {BrowserRouter,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={LandingPage} exact/>
        <Route path='/home' component={Homepage}/>
          </div>
      </BrowserRouter>
    )}

}

export default App;
