'use strict';

import React from 'react';

export default class TaskCard extends React.Component {
  render() {
    var title = this.props.title;
    var tech = this.props.tech;
    var timeScale = this.props.timeScale;
    const divStyle = {
      margin: '40px',
      border: '5px solid blue'
    };
    return (
     <div className= "divStyle"> 
     <div> Title: {title} </div>
     <div> Tech: {tech} </div>
     <div> Timescale: {timeScale} </div>
     </div>
    );
  }
}