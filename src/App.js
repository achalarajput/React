import React, { Component } from 'react';
import './App.css';
import HelloHindi from './components/HelloHindi';
import HelloEnglish from './components/HelloEnglish';

class App extends Component {
  render() {
    return (
      <div>
        Username: <input type="text"></input>
        <HelloHindi/> <br/>
        <HelloEnglish/>
      </div>
    );
  }
}

export default App;
