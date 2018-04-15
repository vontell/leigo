import React from 'react';

export default class CurrentTask extends React.Component {
    render() {
		return (
            <div className = "current-task">
                <div> <h2> {this.props.name} </h2> </div>
                <div> <h3> {this.props.description}</h3> </div>
                <div> <h3> {this.props.tech} </h3> </div>
                <div> <h3> {this.props.deadline} </h3> </div>
            </div>

        )
    }
}
