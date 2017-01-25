import React, { Component } from 'react';
import './Release.css';

class Release extends Component {

  render() {
    return (
      <div className="ui fluid card">
        <div className="content">
          <div className="header">{this.props.system}</div>
          <div className="meta">{this.props.version}</div>
          <div className="description">
            {this.props.notes || <i>No notes</i>}
          </div>
        </div>
      </div>
    );
  }
}

export default Release;
