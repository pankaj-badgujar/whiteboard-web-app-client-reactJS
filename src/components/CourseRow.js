import React from 'react'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

const CourseRow = ({course}) =>
    <Link to={`/course-editor/${course.id}`}>

            <table className="table">
                <tbody>
                <tr>
                    <td scope="row"><a href="#"><i className="fa fa-book"></i>  {course.title}</a></td>
                    <td>
                        <div className="d-none d-sm-block"><a href="#">me</a></div>
                    </td>
                    <td>
                        <div className="d-none d-sm-block"><a href="#">Yesterday</a></div>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                        <button type="button" className="btn"><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
                </tbody>
            </table>

    </Link>

export default CourseRow