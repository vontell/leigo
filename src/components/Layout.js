'use strict';

import React from 'react';
import { Link } from 'react-router';
import TaskDialog from './TaskDialog';

export default class Layout extends React.Component {
  render() {
    const x = true;
    return (
      <div className="app-container">
        <div className="app-content">{this.props.children}</div>
      </div>
    );
  }
}
