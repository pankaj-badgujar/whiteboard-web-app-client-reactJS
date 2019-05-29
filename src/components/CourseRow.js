import React from 'react'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

const CourseRow = ({course}) =>
    <Link to={`/course-editor/${course.id}`}>
        <div className="container-fluid">
            <table className="table">
                <tbody>
                <tr>
                    <td scope="row"><a href="#"><i className="fa fa-book"></i></a></td>
                    <td><a href="#">{course.title}</a></td>
                    <td>
                        <div className="d-none d-sm-block"><a href="#">me</a></div>
                    </td>
                    <td>
                        <div className="d-none d-sm-block"><a href="#">Yesterday</a></div>
                    </td>
                    <td>
                        <button type="button" className="btn"><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    </Link>

export default CourseRow