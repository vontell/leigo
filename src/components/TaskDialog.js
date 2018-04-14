import React from 'react';

export default class TaskDialog extends React.Component {
    render() {
        var title = this.props.title;
        var tech = this.props.tech;
        var timeScale = this.props.timeScale;
        var description = this.props.description;
        var comments = this.props.comments;
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
            <div className= "taskDialog">
                <div> 
                   Title: {title}
               </div>
               <div>
                   Tech: {tech}
              </div>
              <div>
                   Time Scale: {timeScale}
             </div>
             <div>
                 Description: {description}
            </div>
            <div>
                Comments: {comments}
            </div>
            </div>
            )
    }
}