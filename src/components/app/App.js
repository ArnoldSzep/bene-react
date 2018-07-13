import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg';
import './App.css';
import MultiInput from '../MultiInput/MultiInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" width="113" height="80" />
        </header>
        <p className="App-intro">
          Ttest test o get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <MultiInput />
      </div>
    );
  }
}

export default App;
