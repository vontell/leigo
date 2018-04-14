'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class ArchitectSummary extends React.Component {
  render() {
    return (
      <div name="architecture-summary">
        <h1 className = "title" > {this.prop.title} </h1>
        <p className = "description">  {this.prop.description} </p>
        <p className = "budget">  {this.prop.budget} </p>
        <p className = "deadline"> {this.prop.deadline} days</p>
      </div>
    );
  }
}
