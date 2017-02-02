import React, { Component } from 'react';
import './Sprints.css';

import Sprint from './Sprint'

const Sprints = (props) => {

  return (
    <div className="Sprints">
      {props.sprints.map((sprint) => {
        return <Sprint {...sprint} />
      })}
    </div>
  );
}

export default Sprints;
