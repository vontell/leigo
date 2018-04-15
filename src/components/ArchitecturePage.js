'use strict';

import React from 'react';
import Inbox from './Inbox';
import ArchitectSummary from './ArchitectSummary';
import TaskList from './TaskList';

export default class ArchitecturePage extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
          messages: [
            'message1': {
              'title': "Project 1",
              'description': "Description for project 1",
              'budget': 5000,
              'date': "09/22/2018"
            }, 
            'message2': {
              'title': "Project 2",
              'description': "This is the description for project 2",
              'budget': 2348,
              'date': "06/14/2018"
            }
          ],
          selectedProject: [],
          selectedTasks: [],
      };
    }
    /*
    _selectProject(projectId) {
        fetch('/api/project?id=' + projectId)
          .then(function(response) {
            return response.json()
          }).then(function(json) {
            console.log('parsed json', json)
            this.setState({selectedProject: json.project, selectedTasks: json.tasks});
          }).catch(function(ex) {
            console.log('parsing failed', ex)
          });
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
	} */

	render() {
		return (
			<div className="architecture-page" style={style.page}>
                {this.state.messages &&
                    <Inbox inboxList={this.state.messages} style = {style.inbox}  />
                }
                {this.state.selectedProject &&
                    <ArchitectSummary project={this.state.selectedProject} style={style.selectedProject}/>
                }
				<TaskList taskList={this.state.selectedTasks} />
			</div>
		);
	}
}

const style = {
  page : {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: "Open Sans"
  },
  inbox : {
    top: '0px',
    left: '0px',
    height: '100%',
    width: '200px',
    backgroundColor: '#253237',
    color: '#FFFFFF',
  },
  selectedProject : {
    backgroundColor: '#F2F2F4',
    color: '#253237',
    height: '100%',
    width: '200px',
    
  }

}