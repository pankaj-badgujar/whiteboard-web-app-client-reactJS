import React from 'react'
import CourseRow from '../components/CourseRow'
import CourseService from '../services/CourseService.js'
import {Link} from "react-router-dom";


class CourseTable extends React.Component {


    constructor(){
        super();
        let courseService = CourseService.getInstance();
        this.state = {
            course : {
                id : -1,
                title : 'New Course'
            },
            courses : courseService.findAllCourses()
        }
    }

    titleChanged = (event) => {
        this.setState({
            course : {
                id : (new Date()).getTime(),
                title : event.target.value
            }
        })

    }

    addCourse =() => {
        this.setState({
            courses : [this.state.course,...this.state.courses]
        })

    }

    deleteCourse =(courseId) =>{
        this.setState({
            courses : this.state.courses.filter(course => course.id !== courseId)
        })
    }
    render() {

        return (

            <div>
                <div className="container-fluid">
                    <div className="row bg-light p-3">
                        <button type="button" className="btn col-1">
                            <i className="fa fa-bars"></i>
                        </button>
                        <h2 className="d-none d-sm-block col-3">Course
                            Manager</h2>

                        <div className="col-sm-4 col-9">
                            <input type="text" defaultValue="New Course" onChange={this.titleChanged} className="form-control" id="newCourseFld"
                                   placeholder="New Course Title"/>
                        </div>
                        <div className="col-2">
                            <button type="button" onClick={this.addCourse}
                                    className="btn rounded-circle btn-danger">
                                <i className="fa fa-plus"></i>
                            </button>

                        </div>
                    </div>

                </div>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Title</th>

                        <th scope="col">
                            <div className="d-none d-sm-block">Owned By</div>
                        </th>
                        <th scope="col">
                            <div className="d-none d-sm-block">Last modified</div>
                        </th>
                        <th scope="col">
                            <Link to="/course-grid">
                                <div className="d-none d-sm-block">
                                    <button type="button" className="btn"><i className="fa fa-th"></i></button>
                                </div>
                            </Link>
                        </th>
                        <th scope="col">
                            <Link to="/course-list">
                                <div className="d-none d-sm-block">
                                    <button type="button" className="btn"><i className="fa fa-list"></i></button>
                                </div>
                            </Link>
                        </th>
                        <th scope="col">
                            <div className="d-none d-sm-block">
                                <button type="button" className="btn"><i className="fa fa-sort"></i>
                                </button>
                            </div>
                        </th>
                        <th></th>
                    </tr>
                    </thead>
                </table>
                {
                this.state.courses.map(course => <CourseRow course={course} deleteCourse={this.deleteCourse}/>)
            }
            </div>
        );

    }
}


export default CourseTable
