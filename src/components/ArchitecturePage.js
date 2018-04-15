'use strict';

import React from 'react';
import Inbox from './Inbox';
import ArchitectSummary from './ArchitectSummary';
import TaskList from './TaskList';

export default class ArchitecturePage extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
          messages: [],
          selectedProject: [],
          selectedTasks: [],
      };
    }
    
    _selectProject(projectId) {
        fetch('/api/project?id=' + projectId)
          .then(function(response) {
            return response.json()
          }).then(function(json) {
            console.log('parsed json', json)
            this.setState({selectedProject: json.project, selectedTasks: json.tasks});
          }).catch(function(ex) {
            console.log('parsing failed', ex)
          })
    }

	// Backend calls this method and sets this.state to all ArchitecturePage 
	componentDidMount() {
        fetch('/api/inbox?user=archie')
          .then(function(response) {
            return response.json()
          }).then(function(json) {
            console.log('parsed json', json)
            this.setState({messages: json.inboxItems});
          }).catch(function(ex) {
            console.log('parsing failed', ex)
          })
        this._selectProject('5ad28b1f810b895e5bf3c3ce');
	}

	render() {
		return (
			<div className="architecture-page">
				<Inbox inboxList={this.state.messages} />
                {this.state.selectedProject &&
                    <ArchitectSummary project={this.state.selectedProject}/>
                }
				<TaskList taskList={this.state.selectedTasks} />
			</div>
		);
	}
}