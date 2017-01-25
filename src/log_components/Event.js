import React, { Component } from 'react';
import './Event.css';

class Event extends Component {

  render() {
    return (
      <div className="Activity">
        <h3>{this.props.name}</h3>

        <p>{this.props.tags}</p>

        <p>{this.props.reporter}</p>

        <p>{this.props.notes}</p>

        <p>{this.props.date}</p>
      </div>
    );
  }
}

export default Event;
