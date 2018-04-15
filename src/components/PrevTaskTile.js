import React from 'react';

export default class PrevTaskTile extends React.Component {
    render() {
		return (
            <div className = "prev-task">
                <h2> {this.props.task} </h2>
            </div>
        )
    }
}