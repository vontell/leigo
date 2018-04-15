import React from 'react';

export default class Chat extends React.Component {
    render() {
		return (
			<div className="chat">
				<h1>Chat</h1>
				<div name="chat-list">
					{React.Children.map(this.props.chatlist, i => <MessageBox userimg={i.userimg} message={i.message} username={i.username} timestamp={i.timestamp}/>)}
				</div>
                <form>
                    <div><textarea name="message" rows="10" cols="30">Enter Chat Here</textarea></div>
                    <div><input type="submit" value="Send"></input></div>
                </form>
			</div>
		);
	}

}