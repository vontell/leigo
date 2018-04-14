import React from 'react';

export default class TaskDialog extends React.Component {
    render() {
        var editing = this.props.editing;
        if(editing) {
            return (
                <form>
                     <label>
                           Title:
                        <input type="text" title="Title" />
                     </label>
                     <label>
                           Tech:
                        <input type="text" tech="Tech" />
                     </label>
                     <label>
                           Time Scale:
                        <input type="text" timeScale="TimeScale" />
                     </label>
                     <input type="submit" value="Submit" />
                </form>

            )
        }
        return (
            <head>
                <div> 
                   Title: {this.title}
               </div>
               <div>
                   Tech: {this.tech}
              </div>
              <div>
                   Time Scale: {this.timeScale}
             </div>
            </head>
            )
    }
}