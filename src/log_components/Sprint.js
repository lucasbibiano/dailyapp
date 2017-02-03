import React, { Component } from 'react';
import './Sprint.css';

import _ from 'lodash'

import Event from './Event'
import Release from './Release'

const renderEventByType = (event) => {
  if (event.type === "release") {
    return <Release {...event} />
  } else {
    return <Event {...event} />
  }
}

const renderEvents = (events) => {
  return (
    <div>
      <h4>{events[0].type} ({events.length})</h4>
      {events.map((event) => {
        return renderEventByType(event)
      })}
    </div>
  )
}

const renderEventsByType = (events) => {
  let eventsByType = _.groupBy(events, 'type');

  return (
    <div className="events">
      <h3>{events[0].date}</h3>

      <div className="ui">
        {Object.keys(eventsByType).map((type) => {
          return renderEvents(eventsByType[type])
        })}
      </div>
    </div>
  )
}

const renderEventsByDate = (events) => {
  let eventsByDate = _.groupBy(events, 'date');

  return (
    Object.keys(eventsByDate).map((date) => {
      return renderEventsByType(eventsByDate[date])
    })
  );
}

const Sprint = (props) => {

  return (
    <div className="Sprint">
      <h1>Sprint {props.start_date} - {props.end_date}</h1>
      {renderEventsByDate(props.events)}
    </div>
  );
}

export default Sprint;
