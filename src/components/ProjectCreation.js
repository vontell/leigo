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
                <textarea>
                    Enter your project description here
                </textarea>
            </div>
            <div className = "budget">
                <h2> Budget: </h2>
                <input type="number" value="Under"> </input>
            </div>
            <div className = "deadline">
                <h2> Deadline: </h2>
                <input type="date" value="MM/DD/YYYY"> </input>
            </div>
            <div className = "architectureButton">
                 <input type="checkbox" id="architecture" name="architecture" value="Architecture"> </input>
                 <label for="architecture">Create Your own Architecture</label>
            </div>
            <div>
                <input type="submit" value="Submit"> </input>
            </div>
        </form>
        )
    }


}