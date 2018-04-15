'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class ArchitectSummary extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {};
    }
    
    render() {
        return (
            <div name="architecture-summary">
                <h1 className = "title" > {this.props.title} </h1>
                <p className = "description">  {this.props.description} </p>
                <p className = "budget">  {this.props.budget} </p>
                <p className = "deadline"> {this.props.deadline} days</p>
            </div>
        );
    }
}
