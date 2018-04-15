'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class ArchitectSummary extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {project: props.project};
    }
    
    render() {
        
        if (this.state.project) {
            return (
                <div name="architecture-summary">
                    <h1 className = "title" > {this.state.project.title} </h1>
                    <p className = "description">  {this.state.project.description} </p>
                    <p className = "budget">  {this.state.project.budget} </p>
                    <p className = "deadline"> {this.state.project.deadline} days</p>
                </div>
            );
        } else {
            <div name="architecture-summary">
                <p>No project selected</p>
            </div>
        }
        
    }
}
