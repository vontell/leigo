import React from 'react';

export default class TaskList extends React.Component {
    render() {
		return (
			<div className="tasks">
				<h1>Tasks</h1>
				<div name="task-list">
					{React.Children.map(this.props.tasklist, i => <TaskCard title={i.title} tech={i.tech} timeScale={i.timeScale} description={i.description} comments={i.comments}/>)}
				</div>
			</div>
		);
	}

}