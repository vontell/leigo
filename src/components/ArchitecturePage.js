'use strict';

import React from 'react';
import Inbox from './Inbox';
import ArchitectSummary from './ArchitectSummary';
import TaskList from './TaskList';

export default class ArchitecturePage extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = { messages: [], tasks: [],};
    }

	// Backend calls this method and sets this.state to all ArchitecturePage 
	componentDidMount() {
        console.log("mounted")
        fetch('/api/inbox?user=archie')
          .then(function(response) {
            return response.json()
          }).then(function(json) {
            console.log('parsed json', json)
          }).catch(function(ex) {
            console.log('parsing failed', ex)
          })
	}

	render() {
		return (
			<div className="architecture-page">
				<Inbox inboxList={this.state.messages} />
		        <ArchitectSummary architectureSummary={<ArchitectSummary title="hello" description="hellof" budget="3999" deadline="3444"/> }/>
				<TaskList taskList={this.state.tasks} />
			</div>
		);
	}
}