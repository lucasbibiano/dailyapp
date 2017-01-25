import React, { Component } from 'react';
import './Sprint.css';

import data from '../fake_data/data.json'
import Events from './Events'

class Sprint extends Component {

  render() {
    return (
      <div className="Sprint">
        <h1>{this.props.start_date} - {this.props.end_date}</h1>
        <Events {...this.props.events} />
      </div>
    );
  }
}

export default Sprint;
