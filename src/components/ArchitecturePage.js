'use strict';

import React from 'react';

class ArchitecturePage extends React.Component {

	// Backend calls this method and sets list of messages to this.state
	componentDidMount() {
		this.state = {}
	}

	render() {
		return (
			<div className="architecture-page">
				<Inbox inboxList={this.state.messages}/>

				
			</div>
		);
	}
}