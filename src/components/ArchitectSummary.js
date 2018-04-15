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
                    <h1 className = "title" style = {style.title} > {this.state.project.title} </h1>
                    <h2 className = "description" style = {style.subheader}/>
                    <p className = "description" style = {style.info}>  {this.state.project.description} </p>
                    <h2 className = "budget" style = {style.subheader} />
                    <p className = "budget" style = {style.info}>  {this.state.project.budget} </p>
                    <h2 className = "deadline" style = {style.subheader} />
                    <p className = "deadline" style = {style.info}> {this.state.project.deadline} days</p>
                </div>
            );
        } else {
            <div name="architecture-summary">
                <p>No project selected</p>
            </div>
        }
        
    }
}

const style = {
    title : {
        fontsize: '18px',
        fontweight: 'light',
        color: '#FFFFFF',
        align: 'left'
    },
    subheader : {
        color: '#FFFFFF',
        fontsize: '16px',
        fontweight: 'semibold',
        align: 'left'
    },
    info : {
        color: '#FFFFFF',
        fontsize: '14px',
        fontweight: 'light',
        align: 'left'
    }

}
