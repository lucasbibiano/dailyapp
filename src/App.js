import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Sprints from './log_components/Sprints'

import data from './fake_data/data.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sprints {...data}/>
      </div>
    );
  }
}

export default App;
