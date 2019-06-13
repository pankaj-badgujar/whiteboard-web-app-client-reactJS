import React from 'react'
import {Link} from "react-router-dom";

class CourseCard extends React.Component {

    constructor(props){
        super(props);
        this.toggleEditing = this.toggleEditing.bind(this);
        this.updateNewCourseName = this.updateNewCourseName.bind(this);
    }

    state = {
        editing: false
    };

    toggleEditing(event) {
        this.setState({
            editing: !this.state.editing
        });
        if (this.state.editing === true && this.state.newCourseName !== undefined
            && this.state.newCourseName.replace(/^\s*/, "").length !==0) {
            this.props.updateCourse(this.props.course.id, this.state.newCourseName);
        }
    }

    updateNewCourseName(event){
        this.setState({
            newCourseName: event.target.value
        })
    }


    render() {
        return(
            <div className={"col-2"}>
                <div className="card" styles={{width: '18rem'}}>
                    <img className="card-img-top"
                         src="https://picsum.photos/300/200"/>
                    <div className="card-body">
                        {!this.state.editing && <h5 className="card-title">{this.props.course.title}</h5>}
                        {this.state.editing &&
                        <input
                            onChange={this.updateNewCourseName}
                            className={"form-control"}
                            placeholder={"eg. xyz"}
                        />
                        }


                        <p className="card-text">Card text.</p>
                        <Link to={`/course-editor/${this.props.course.id}`} onClick={() => this.props.selectCourse(this.props.course)} className="btn
                    btn-primary">More...</Link>
                        <div className={"my-2"}>

                            <i className="fa fa-trash btn btn-danger float-left" onClick={() => this.props.deleteCourse(this.props.course.id)}></i>

                            {!this.state.editing &&   <i className="fa fa-pencil btn btn-warning float-right"
                                   onClick={this.toggleEditing}></i>}
                            {this.state.editing &&
                            <i onClick={this.toggleEditing} className="fa fa-check-circle btn btn-success"></i>
                            }
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default CourseCard
