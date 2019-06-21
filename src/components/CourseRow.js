import React from 'react'
import {Link} from 'react-router-dom'

class CourseRow extends React.Component {

    constructor(props) {
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
        return (
            <tr>

                <td scope="row">
                    {!this.state.editing && <Link to={`/course-editor/${this.props.course.id}`}
                                                  /*onClick={() => this.props.selectCourse(this.props.course)}*/><i
                        className="fa fa-book"></i> {this.props.course.title}</Link>}
                    {this.state.editing && <input
                        onChange={this.updateNewCourseName}
                        className={"form-control"}
                        placeholder={"Enter new name for course"}
                    />}
                </td>
                <td>
                    <div className="d-none d-sm-block"><Link to={`/course-editor/${this.props.course.id}`}
                                                             onClick={() => this.props.selectCourse(this.props.course)}>me</Link>
                    </div>
                </td>
                <td>
                    <div className="d-none d-sm-block"><Link to={`/course-editor/${this.props.course.id}`}
                                                             onClick={() => this.props.selectCourse(this.props.course)}>Yesterday</Link>
                    </div>
                </td>

                <td>
                    <i className="fa fa-trash btn btn-danger"
                       onClick={() => this.props.deleteCourse(this.props.course.id)}></i>
                </td>
                <td>
                    {!this.state.editing &&
                    <i onClick={this.toggleEditing} className="fa fa-pencil btn btn-warning"></i>
                    }
                    {this.state.editing &&
                    <i onClick={this.toggleEditing} className="fa fa-check-circle btn btn-success"></i>
                    }
                </td>
            </tr>
        )
    }

}

export default CourseRow