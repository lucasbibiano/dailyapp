import React, { Component } from 'react';
import './Sprint.css';

import _ from 'lodash'

import Event from './Event'
import Release from './Release'


const groupByDate = entries => _.groupBy(entries, 'date');
const groupByType = entries => _.groupBy(entries, 'type');

const groupBy = (entries, ...groupFuncs) => {
  let groupFunc = groupFuncs[0];

  if (groupFuncs.length <= 0) return entries;

  let groupedEntries = groupFunc(entries);

  _.forEachRight(groupedEntries, (value, key) => {
    groupedEntries[key] = groupBy(value, ...groupFuncs.slice(1))
  });

  return groupedEntries;
}

const Events = ({groupEvents}) =>
  <div>
    { Object.keys(groupEvents).map( (date) =>
      <div className="events">
        <h3>{date}</h3>

        <div className="ui">
          { Object.keys(groupEvents[date]).map( (type) =>
            <div>
              <h4>{type} ({groupEvents[date][type].length})</h4>
              { groupEvents[date][type].map( (event) =>
                (event.type === "release")
                  ? <Release {...event} />
                  : <Event {...event} />
              )}
            </div>
          )}
        </div>
      </div>
    )}
  </div>

const Sprint = ({start_date, end_date, events}) =>
  <div className="Sprint">
    <h1>Sprint {start_date} - {end_date}</h1>
    <Events groupEvents={groupBy(events, groupByDate, groupByType)} />
  </div>

export default Sprint;
