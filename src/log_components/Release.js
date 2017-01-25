import React, { Component } from 'react';
import './Release.css';

class Release extends Component {

  render() {
    return (
      <div className="Release">
        <p>{this.props.system} {this.props.version}</p>
      </div>
    );
  }
}

export default Release;
