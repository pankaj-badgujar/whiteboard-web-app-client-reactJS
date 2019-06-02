import React from 'react'
import CourseRow from '../components/CourseRow'
import CourseService from '../services/CourseService.js'
import {Link} from "react-router-dom";
import CourseCard from "../components/CourseCard";


class CourseTable extends React.Component {


    titleChanged = (event) => {
        this.setState({
            course: {
                id: (new Date()).getTime(),
                title: event.target.value
            }
        })

    }

    addCourse = () => {
        this.setState({
            courses: [this.state.course, ...this.state.courses]
        })

    }

    deleteCourse = (courseId) => {
        this.setState({
            courses: this.state.courses.filter(course => course.id !== courseId)
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
                    this.props.courses.map(course => <CourseRow course={course}/>)}
                }
            </div>
        );

    }
}


export default CourseTable
