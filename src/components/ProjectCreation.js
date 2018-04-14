'use strict';

import React from 'react';
import { formatPattern } from 'react-router/lib/PatternUtils';

class ProjectCreation extends React.Component {
    render() {
		return(
        <form>
            <div className = "title"> <h2> Leigo </h2> </div>
            <div className = "description">
                <h2> Description: </h2>
                <textarea name = "descriptionBox">
                    Enter your project description here
                </textarea>
            </div>
            <div className = "budget">
                <h2> Budget: </h2>
                <input type="number" value="Under" name="budgetTextBox"> </input>
            </div>
            <div className = "deadline">
                <h2> Deadline: </h2>
                <input type="date" value="MM/DD/YYYY" name = "deadlineTextBox"> </input>
            </div>
            <div className = "architectureButton">
                 <input type="checkbox" name="architectureCheckbox" value="Architecture"> </input>
                 <label for="architecture">Create Your own Architecture</label>
            </div>
            <div>
                <input type="submit" value="Submit"> </input>
            </div>
        </form>
        )
    }


}