import React from 'react'
import CourseCard from "../components/CourseCard";
import CourseServiceForJSONFile from '../services/CourseServiceForJSONFile.js'
import {Link} from "react-router-dom";


class CourseGrid extends React.Component {
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
                <div className={"row"}>
                    <div className="card-deck container-fluid">
                        {this.props.courses.map(course => <CourseCard course={course} key={course.id}
                                                                      selectCourse = {this.props.selectCourse}
                                                                      deleteCourse={this.props.deleteCourse}/>)}
                    </div>

                </div>
            </div>
        );
    }
}


export default CourseGrid