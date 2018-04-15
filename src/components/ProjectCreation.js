'use strict';

import React from 'react';
import { formatPattern } from 'react-router/lib/PatternUtils';

export default class ProjectCreation extends React.Component {
    render() {

        const style = {
            divTop : {
                width : '100%',
                height : '33.333%',
                background : '#253237'
            },
            
            divBackground : {
                backgroundColor : '#F2F2F4',
                textAlign : 'center'
            },

            divCenter : {
                position : 'fixed',
                bottom : '0px',
                width : '60%',
                height : '80%',
                textAlign : 'center'
            }

        }
		return(
            <div style = {style.divBackground}>
                <div style = {style.divTop}/>
                <div style = {style.divCenter}>
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
                            <input type="number" name="budgetTextBox"/> 
                        </div>
                        <div className = "deadline">
                            <h2> Deadline: </h2>
                            <input type="date" value="MM/DD/YYYY" name = "deadlineTextBox"/> 
                        </div>
                        <div className = "architectureButton">
                            <input type="checkbox" name="architectureCheckbox" value="Architecture"/> 
                            <label for="architecture">Create Your own Architecture</label>
                        </div>
                        <div>
                            <input type="submit" value="Submit"/> 
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    


}