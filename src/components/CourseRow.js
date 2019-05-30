import React from 'react'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

const CourseRow = ({course,deleteCourse}) =>

            <table className="table">
                <tbody>
                <tr>
                    <td scope="row"><a href={`/course-editor/${course.id}`}><i className="fa fa-book"></i>  {course.title}</a></td>
                    <td>
                        <div className="d-none d-sm-block"><a href={`/course-editor/${course.id}`}>me</a></div>
                    </td>
                    <td>
                        <div className="d-none d-sm-block"><a href={`/course-editor/${course.id}`}>Yesterday</a></div>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                        <button type="button" onClick={()=> deleteCourse(course.id)} className="btn btn-danger"><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
                </tbody>
            </table>



export default CourseRow