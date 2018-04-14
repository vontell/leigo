'use strict';

import React from 'react';

class ArchitecturePage extends React.Component {

	// Backend calls this method and sets this.state to all ArchitecturePage 
	componentDidMount() {
		this.state = {}
	}

	render() {
		return (
			<div className="architecture-page">
				<Inbox inboxList={this.state.messages} />
				<ArchitectureSummary architectureSummary={this.state.projectSummary} />
				<TaskList taskList={this.state.data} />
			</div>
		);
	}
}