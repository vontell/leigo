import React from 'react';

export default class DeveloperSummary extends React.Component {
    render() {
        var title = this.props.title;

		return (
            <form>
                <div> 
                    <h2> {this.props.title} </h2>    
                </div>
                <div> 
                    <h3> Github Link </h3> 
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <h3> Summary of Changes </h3>
                </div>
                <div>
                    <textarea name = "summaryBox" />
                </div>
                <div>
                    <h3> Documentation </h3>
                </div>
                <div>
                    <textarea name = "documentationBox"/>
                </div>
                <div>
                    <input type = "submit" value= "Complete"/>
                </div>
            </form>
        )
    }
}