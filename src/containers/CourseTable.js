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


    deleteCourse =(courseId) =>{
        this.setState({
            courses : this.state.courses.filter(course => course.id !== courseId)
        })
    }
    render() {

        return (

            <div>
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
