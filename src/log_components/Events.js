import React, { Component } from 'react';
import './Events.css';

import _ from 'lodash';

import Event from './Event'
import Release from './Release'

class Events extends Component {

  renderByType(event) {
    if (event.type === "release") {
      return <Release {...event} />
    } else {
      return <Event {...event} />
    }
  }

  render() {
    let groupedEvents = _.groupBy(this.props, 'type');

    return (
      <div className="Events">
        {Object.keys(groupedEvents).map((type) => {
          let events = groupedEvents[type];

          return (
            <div>
              <h1>{type} ({events.length})</h1>

              {events.map((event) => {
                return this.renderByType(event)
              })}
            </div>
          )
        })}
      </div>
    );
  }
}

export default Events;
