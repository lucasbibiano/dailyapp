import React, { Component } from 'react';
import './card.css';

class Release extends Component {

  render() {
    return (
      <div className={`ui fluid card ${this.props.type}`}>
        <div className="content">
          <div className="header">{this.props.system}</div>
          <div className="meta">{this.props.version}</div>
          {this.props.notes &&
            <div className="description">
              {this.props.notes}
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Release;
