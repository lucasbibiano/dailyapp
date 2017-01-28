import React, { Component } from 'react';
import './Event.css';

class Event extends Component {

  render() {
    return (
      <div className="ui fluid card">
        <div className="content">
          <div className="header">{this.props.name}</div>
          <div className="meta left floated">{this.props.reporter}</div>
          {this.props.notes &&
            <div className="description left floated">
              {this.props.notes}
            </div>
          }
          <div className="right floated labels">
            {this.props.tags.split(',').map((tag) => {
              return <span className="ui label">{tag}</span>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Event;