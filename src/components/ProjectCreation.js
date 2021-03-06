'use strict';

import React from 'react';
import { formatPattern } from 'react-router/lib/PatternUtils';

export default class ProjectCreation extends React.Component {
    render() {

        const style = {

            divBackground : {
                color: '#253237',
                backgroundColor : '#F2F2F4',
                textAlign : 'center',
                fontFamily: 'Open Sans',
                height: "120%"
            },

            divTop : {
                width : '100%',
                height : '300px',
                background : '#253237'
            },
            
            divCenter : {
                width : '60%',
                height : '500px',
                textAlign : 'left',
                backgroundColor: '#FFFFFF',
                margin: 'auto auto',
                marginTop: "-100px",
                borderRadius: "4px",
                padding: "32px",
                marginBottom: "150px",
                boxShadow : '0 4px 8px 0 grey'
            },
            header: {
                fontSize: "32px",
                paddingBottom : '10px'
            },
            subheader: {
                fontSize: "18px",
                color: "grey",
                paddingTop: "12px",
                paddingBottom: "6px",
            },
            largeInput: {
                width: "100%",
                height: "150px",
                padding: "12px 12px",
                boxSizing: "border-box",
                border: "1px solid #f8f8f8",
                borderRadius: "8px",
                backgroundColor: "#f8f8f8",
                resize: "none",
                fontSize: "14px"
            },
            button : {
                marginTop : '5px',
                right: "5px",
                backgroundColor: '#EE4266', 
                border: 'none',
                color: 'white',
                padding: '10px 20px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '16px',
                margin: '4px 2px', 
                cursor: 'pointer',
                boxShadow : '0 4px 8px 0 grey',
            },
            fullWidth: {
                width: "100%",
                textAlign: "end"
            }

        }
		return(
            <div style = {style.divBackground}>
                <div style = {style.divTop}>
                </div>
                <div style = {style.divCenter} class="z-depth-4">
                    <form>
                        <div> <h2 style={style.header}> Leigo </h2> </div>
                        <div className = "description">
                            <h2 style={style.subheader}> Description </h2>
                            <textarea name = "descriptionBox" style={style.largeInput}/>
                        </div>
                        <div className = "budget">
                            <h2 style={style.subheader}> Budget </h2>
                            <input type="number" name="budgetTextBox"/> 
                        </div>
                        <div className = "deadline">
                            <h2 style={style.subheader}> Deadline </h2>
                            <input type="date" value="MM/DD/YYYY" name = "deadlineTextBox"/> 
                        </div>
                        <div className = "architectureButton">
                            <input type="checkbox" name="architectureCheckbox" value="Architecture"/> 
                            <label for="architecture">Create Your own Architecture</label>
                        </div>
                        <div style={style.fullWidth}>
                            <input style = {style.button} type="submit" value="Submit"/> 
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    


}