'use strict';

import React from 'react';

class InboxItem extends React.Component {
	render() {
		return (
			<div className="inbox-item">
				<h1>{this.props.name}</h1>
				<p>{this.props.description}</p>
			</div>
		);
	}
}