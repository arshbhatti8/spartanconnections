import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/landingPage/landingpage';
import Homepage from './components/homePage/homePage'

class App extends Component {
  render() {
    return (
      <div className='app'>
          <LandingPage/>
      </div>
    )
  }

}

export default App;
