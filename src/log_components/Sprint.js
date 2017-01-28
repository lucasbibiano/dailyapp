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
    let eventsByDate = _.groupBy(this.props.events, 'date');

    return (
      <div className="Sprint">
        <h1>Sprint {this.props.start_date} - {this.props.end_date}</h1>

        {Object.keys(eventsByDate).map((date) => {
          let eventsByType = _.groupBy(eventsByDate[date], 'type');

          return (
            <div className="events">
              <h3>{date}</h3>

              <div className="ui">
                {Object.keys(eventsByType).map((type) => {
                  let events = eventsByType[type];

                  return (
                    <div>
                      <h4>{type} ({events.length})</h4>
                      {events.map((event) => {
                        return this.renderByType(event)
                      })}
                    </div>
                  )
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
