'use strict';

import React from 'react';
import Inbox from './Inbox';
import ArchitectSummary from './ArchitectSummary';
import TaskList from './TaskList';

export default class ArchitecturePage extends React.Component {

	// Backend calls this method and sets this.state to all ArchitecturePage 
	componentDidMount() {
		this.state = {
		}
	}

	render() {
		return (
			<div className="architecture-page">
				<Inbox inboxList={this.state.messages} />
		<ArchitectSummary architectureSummary={<ArchitectSummary title = "hello" description = "hellof" budget = "3999" deadline = "3444"/> }/>
				<TaskList taskList={this.state.data} />
			</div>
		);
	}
}