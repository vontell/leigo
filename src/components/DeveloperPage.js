'use strict';

import React from 'react';
import Inbox from './Inbox';
import DeveloperSummary from './DeveloperSummary';
import NextTaskTile from './NextTaskTile';
import PrevTaskTile from './PrevTaskTile';
import CurrentTask from './CurrentTask';

export default class DeveloperPage extends React.Component {

	// Backend calls this method and sets this.state to all DeveloperSummaries 
	componentDidMount() {
		this.state = {}
	}

	render() {
		return (
			<div className="developer-page">
				<PrevTaskTile task={this.state.prev-task} />
				<CurrentTask name={this.state.task-name} description={this.state.task-description} tech={this.state.task-tech} deadline={this.state.task-deadline}/>
				<NextTaskTile task={this.state.next-task} />
                <DeveloperSummary title={this.state.title}/>
                <Chat chatlist = {this.state.chatlist} />
			</div>
		);
	}
}