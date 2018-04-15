import React from 'react';

export default class NextTaskTile extends React.Component {
    render() {
		return (
            <div className = "next-task">
                <h2> {this.props.task} </h2>
            </div>
        )
    }
}