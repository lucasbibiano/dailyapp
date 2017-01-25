import React, { Component } from 'react';
import './Sprint.css';


import _ from 'lodash'

import Event from './Event'
import Release from './Release'

class Sprint extends Component {

  renderByType(event) {
    if (event.type === "release") {
      return <Release {...event} />
    } else {
      return <Event {...event} />
    }
  }

  render() {
    let groupedEvents = _.groupBy(this.props.events, 'type');

    return (
      <div className="Sprint">
        <h1>Sprint {this.props.start_date} - {this.props.end_date}</h1>

        {Object.keys(groupedEvents).map((type) => {
          let events = groupedEvents[type];

          return (
            <div className="events">
              <h2>{type} ({events.length})</h2>

              <div className="ui">
                {events.map((event) => {
                  return this.renderByType(event)
                })}
              </div>
            </div>
          )
        })}

      </div>
    );
  }
}

export default Sprint;
