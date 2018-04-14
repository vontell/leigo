'use strict';

import React from 'react';

export default class TaskCard extends React.Component {
  render() {
    var userimg = this.props.userimg;
    var message = this.props.message;
    var username = this.props.username;
    var timestamp = this.props.timestamp;
    const divStyle = {
      margin: '40px',
      border: '5px solid blue'
    };
    return (
     <div className= "divStyle"> 
        <div> Image: {userimg} </div>
        <div> Message: {message} </div>
        <div> User: {username} </div>
        <div> Timestamp: {timestamp} </div>
     </div>
    );
  }
}