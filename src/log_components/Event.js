import React, { Component } from 'react';
import './card.css';

import SeeMore from './common/SeeMore'

const Event = (props) => {

  return (
    <div className={`ui fluid card ${props.type}`}>
      <div className="content">
        <div className="header">{props.name}</div>
        <div className="meta left floated">{props.reporter}</div>
        <SeeMore
          className="description left floated"
          text={props.notes} />
        <div className="right floated labels">
          {props.tags.split(',').map((tag) => {
            return <span className="ui label">{tag}</span>
          })}
        </div>
      </div>
    </div>
  );
}

export default Event;