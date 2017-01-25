import React, { Component } from 'react';
import './Event.css';

class Event extends Component {

  render() {
    return (
      <div className="ui fluid card">
        <div className="content">
          <div className="header">{this.props.name}</div>
          <div className="meta">{this.props.date}</div>
          <div className="meta">{this.props.reporter}</div>
          <div className="description">
            {this.props.notes || <i>No notes</i>}
          </div>
        </div>
        <div className="extra content">
          {this.props.tags}
        </div>
      </div>
    );
  }
}

export default Event;