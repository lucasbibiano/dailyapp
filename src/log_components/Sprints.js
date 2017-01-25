import React, { Component } from 'react';
import './Sprints.css';

import Sprint from './Sprint'

class Sprints extends Component {

  render() {
    return (
      <div className="Sprints">
        {this.props.sprints.map((sprint) => {
          return <Sprint {...sprint} />
        })}
      </div>
    );
  }
}

export default Sprints;
