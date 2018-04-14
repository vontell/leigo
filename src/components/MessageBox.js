'use strict';

import React from 'react';

export default class TaskCard extends React.Component {
  render() {
    var img = this.props.img;
    var message = this.props.message;
    var user = this.props.user;
    var timestamp = this.props.timestamp;
    const divStyle = {
      margin: '40px',
      border: '5px solid blue'
    };
    return (
     <div className= "divStyle"> 
        <div> Image: {img} </div>
        <div> Message: {message} </div>
        <div> User: {user} </div>
        <div> Timestamp: {timestamp} </div>
     </div>
    );
  }
}