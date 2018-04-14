import React from 'react';

export default class Chat extends React.Component {
    render() {
		return (
			<div className="chat">
				<h1>Chat</h1>
				<div name="chat-list">
					{React.Children.map(this.props.chatlist, i => <TaskCard userimg={i.userimg} message={i.message} username={i.username} timestamp={i.timestamp}/>)}
				</div>
			</div>
		);
	}

}