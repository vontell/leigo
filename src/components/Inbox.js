'use strict';

import React from 'react';
import InboxItem from './InboxItem';

export default class Inbox extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {};
    }
    
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