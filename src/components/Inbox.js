'use strict';

import React from 'react';

class Inbox extends React.Component {
	render() {
		return (
			<div className="inbox">
				<h1>Inbox</h1>
				<div name="inbox-list">
					{React.Children.map(this.props.inboxList, i => <InboxItem name={i.name} description={i.description} />)}
				</div>
			</div>
		);
	}
}